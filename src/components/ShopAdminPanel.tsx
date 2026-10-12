import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, FileSpreadsheet, AlertCircle, CheckCircle, LogIn, Upload, Calendar as CalendarIcon, Loader2 } from 'lucide-react';
import { initAuth, googleSignIn, getAccessToken, auth, db, handleFirestoreError, OperationType } from '../firebase';
import { doc, writeBatch, collection } from 'firebase/firestore';

export function ShopAdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [needsAuth, setNeedsAuth] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [sheetUrl, setSheetUrl] = useState('');
  const [isImporting, setIsImporting] = useState(false);
  const [importStatus, setImportStatus] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);
  const [activeTab, setActiveTab] = useState<'shop' | 'calendar'>('shop');
  const [events, setEvents] = useState<any[]>([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(false);

  const fetchEvents = async () => {
    setIsLoadingEvents(true);
    try {
      const token = await getAccessToken();
      if (!token) throw new Error("No access token available.");
      
      const timeMin = new Date().toISOString();
      const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${timeMin}&maxResults=10&orderBy=startTime&singleEvents=true`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!response.ok) throw new Error("Failed to fetch calendar events.");
      
      const data = await response.json();
      setEvents(data.items || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingEvents(false);
    }
  };

  useEffect(() => {
    const unsubscribe = initAuth(
      (user) => {
        // Only allow jtwrightinterior@gmail.com
        if (user.email === 'jtwrightinterior@gmail.com') {
          setNeedsAuth(false);
        } else {
          setNeedsAuth(true);
        }
      },
      () => setNeedsAuth(true)
    );
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      const result = await googleSignIn();
      if (result && result.user.email === 'jtwrightinterior@gmail.com') {
        setNeedsAuth(false);
        setImportStatus({ type: 'success', message: 'Logged in successfully as Admin.' });
        fetchEvents();
      } else {
         setImportStatus({ type: 'error', message: 'Access denied. You must use the jtwrightinterior@gmail.com account.' });
      }
    } catch (err: any) {
      setImportStatus({ type: 'error', message: err.message || 'Login failed.' });
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleImport = async () => {
    if (!sheetUrl.trim()) {
      setImportStatus({ type: 'error', message: 'Please enter a valid Google Sheets URL.' });
      return;
    }

    const match = sheetUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
    const spreadsheetId = match ? match[1] : null;

    if (!spreadsheetId) {
      setImportStatus({ type: 'error', message: 'Invalid Google Sheets URL. Could not extract Spreadsheet ID.' });
      return;
    }

    const confirm = window.confirm(`Are you sure you want to import products from spreadsheet ${spreadsheetId}? This will overwrite existing matching products or create new ones.`);
    if (!confirm) return;

    setIsImporting(true);
    setImportStatus({ type: 'info', message: 'Fetching spreadsheet data...' });

    try {
      const token = await getAccessToken();
      if (!token) {
        setNeedsAuth(true);
        throw new Error('You must be signed in to perform this action.');
      }

      const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A2:E`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(`Sheets API Error: ${errData.error?.message || response.statusText}`);
      }

      const data = await response.json();
      const rows = data.values || [];

      if (rows.length === 0) {
        setImportStatus({ type: 'info', message: 'No data found in the spreadsheet. Make sure columns are: Name, Price, Category, ImageUrl, Description.' });
        return;
      }

      setImportStatus({ type: 'info', message: `Found ${rows.length} rows. Writing to database...` });

      // We'll write to Firestore in a batch
      const batch = writeBatch(db);
      const productsRef = collection(db, 'products');

      let importCount = 0;
      for (const row of rows) {
        const [name, priceStr, category, imageUrl, description] = row;
        if (!name || !priceStr) continue;

        const price = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
        if (isNaN(price)) continue;

        const newDocRef = doc(productsRef); // Auto-generates ID
        batch.set(newDocRef, {
          name,
          price,
          category: category || 'Uncategorized',
          imageUrl: imageUrl || '',
          description: description || '',
          createdAt: new Date().toISOString()
        });
        importCount++;
      }

      await batch.commit();

      setImportStatus({ type: 'success', message: `Successfully imported ${importCount} products to the shop database!` });
      setSheetUrl('');

    } catch (err: any) {
      setImportStatus({ type: 'error', message: err.message || 'An error occurred during import.' });
      handleFirestoreError(err, OperationType.WRITE, 'products');
    } finally {
      setIsImporting(false);
    }
  };


  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 bg-white border border-muted/50 p-6 shadow-2xl w-[380px] rounded-sm transform origin-bottom-left"
          >
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-xl font-serif text-primary font-medium flex items-center gap-2">
                 <Settings className="w-5 h-5 text-accent" /> Shop Admin
               </h3>
               <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-accent transition-colors text-sm font-bold uppercase tracking-widest">Close</button>
            </div>

            {needsAuth ? (
              <div className="flex flex-col gap-4 text-center">
                <p className="text-sm font-medium text-primary/70">Sign in with your admin account to manage products and bookings.</p>
                
                <button 
                  onClick={handleLogin}
                  disabled={isLoggingIn}
                  className="gsi-material-button w-full border border-[#dadce0] rounded-[4px] bg-white text-[#3c4043] py-2 px-3 hover:bg-[#f8fafc] hover:border-[#d2e3fc] flex items-center justify-center gap-3 transition-colors shadow-sm disabled:opacity-50"
                  style={{ fontFamily: '"Google Sans",Roboto,Arial,sans-serif' }}
                >
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-[18px] h-[18px] block shrink-0">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </svg>
                  <span className="text-[14px] font-medium tracking-[0.25px]">Sign in with Google</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="flex justify-center border-b border-muted mb-2">
                  <button 
                    onClick={() => setActiveTab('shop')} 
                    className={`flex-1 py-2 text-xs font-bold uppercase tracking-widest border-b-2 transition-colors ${activeTab === 'shop' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-primary'}`}
                  >
                    Shop Import
                  </button>
                  <button 
                    onClick={() => { setActiveTab('calendar'); fetchEvents(); }} 
                    className={`flex-1 py-2 text-xs font-bold uppercase tracking-widest border-b-2 transition-colors ${activeTab === 'calendar' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-primary'}`}
                  >
                    Calendar
                  </button>
                </div>

                {activeTab === 'shop' && (
                  <div className="bg-primary/5 p-4 border border-primary/10 rounded-sm">
                     <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                       <FileSpreadsheet className="w-4 h-4 text-accent" /> Bulk Import Products
                     </h4>
                     <p className="text-xs font-medium text-primary/70 mb-4 leading-relaxed">
                       Paste the URL of your Google Sheet. It must have columns in order: Name, Price, Category, Image URL, Description on "Sheet1" starting at row 2.
                     </p>
                     <input 
                       type="text" 
                       value={sheetUrl}
                       onChange={e => setSheetUrl(e.target.value)}
                       placeholder="https://docs.google.com/spreadsheets/d/..."
                       className="w-full text-xs p-3 border border-muted bg-white focus:outline-accent mb-3 shadow-inner"
                     />
                     <button 
                       onClick={handleImport}
                       disabled={isImporting}
                       className="w-full bg-primary hover:bg-accent text-white py-3 text-xs font-bold uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                     >
                       {isImporting ? 'Importing...' : <><Upload className="w-4 h-4" /> Import to Database</>}
                     </button>
                  </div>
                )}
                {activeTab === 'calendar' && (
                  <div className="h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                    {isLoadingEvents ? (
                       <div className="flex justify-center items-center h-full text-muted-foreground">
                         <Loader2 className="w-6 h-6 animate-spin" />
                       </div>
                    ) : events.length === 0 ? (
                       <div className="flex flex-col justify-center items-center h-full text-muted-foreground text-xs text-center gap-2">
                         <CalendarIcon className="w-6 h-6 opacity-50" />
                         <p>No upcoming appointments found in your Google Calendar.</p>
                       </div>
                    ) : (
                       <ul className="space-y-3">
                         {events.map((evt, idx) => {
                           const start = evt.start?.dateTime || evt.start?.date;
                           return (
                             <li key={idx} className="bg-white border border-muted p-3 rounded-sm shadow-sm flex flex-col gap-1">
                               <h5 className="font-bold text-sm text-primary line-clamp-1">{evt.summary || 'Busy'}</h5>
                               <p className="text-xs text-accent font-medium">{start ? new Date(start).toLocaleString() : 'Date TBD'}</p>
                             </li>
                           );
                         })}
                       </ul>
                    )}
                  </div>
                )}
              </div>
            )}

            {importStatus && (
              <div className={`mt-4 p-4 text-xs font-medium border rounded-sm flex gap-3 items-start leading-relaxed ${
                importStatus.type === 'error' ? 'bg-red-50 text-red-800 border-red-200' : 
                importStatus.type === 'success' ? 'bg-green-50 text-green-800 border-green-200' : 
                'bg-blue-50 text-blue-800 border-blue-200'
              }`}>
                {importStatus.type === 'error' && <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />}
                {importStatus.type === 'success' && <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />}
                {importStatus.type === 'info' && <FileSpreadsheet className="w-4 h-4 shrink-0 mt-0.5" />}
                <p>{importStatus.message}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-white text-primary hover:bg-primary hover:text-white border border-muted shadow-lg rounded-full flex items-center justify-center transition-all focus:outline-none focus:ring-4 focus:ring-accent/20 group"
        aria-label="Shop Admin Settings"
      >
        <Settings className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
      </button>
    </div>
  );
}
