import { useState } from 'react';
import { CreditCard, Plus, ShieldCheck, Lock, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Wallet() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cards, setCards] = useState([
    { last4: '4242', brand: 'Visa', exp: '12/26' }
  ]);
  const [isAddingCard, setIsAddingCard] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if(email && password) setIsLoggedIn(true);
  };

  const handleGoogleLogin = () => {
    setIsLoggedIn(true);
  };

  if(!isLoggedIn) {
     return (
        <div className="bg-[#fafbfa] min-h-[85vh] flex items-center justify-center py-24">
           <div className="bg-white p-10 md:p-16 shadow-2xl border border-muted w-full max-w-lg rounded-sm">
              <div className="text-center mb-10">
                 <h1 className="font-cursive text-6xl text-primary font-normal mb-2 lowercase">welcome back</h1>
                 <p className="text-primary/60 text-sm font-bold uppercase tracking-widest mt-4">Log in to your Just the Wright Interiors account</p>
              </div>

              <form onSubmit={handleLogin} className="flex flex-col gap-6">
                 <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-primary mb-3">Email Address</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full border border-muted bg-[#fafbfa] p-4 text-primary focus:outline-none focus:border-accent transition-colors font-medium" />
                 </div>
                 <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-primary mb-3">Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full border border-muted bg-[#fafbfa] p-4 text-primary focus:outline-none focus:border-accent transition-colors font-medium" />
                 </div>
                 <button type="submit" className="w-full py-5 bg-primary text-white uppercase tracking-widest text-sm font-bold hover:bg-accent transition-all mt-4 shadow-md">
                    Sign In
                 </button>
              </form>

              <div className="relative my-10 text-center flex items-center justify-center">
                 <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-muted/80"></div></div>
                 <span className="relative bg-white px-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">or</span>
              </div>

              <button onClick={handleGoogleLogin} className="w-full py-5 bg-white border border-primary text-primary uppercase tracking-widest text-sm font-bold hover:bg-secondary hover:shadow-md transition-all flex items-center justify-center gap-3">
                 <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                 Sign in with Google
              </button>

              <div className="mt-10 flex items-center justify-center gap-2 text-[10px] font-bold tracking-widest text-[#666b68] uppercase">
                 <ShieldCheck className="w-4 h-4 text-accent" />
                 Secure 256-bit Encrypted Login
              </div>
           </div>
        </div>
     );
  }

  return (
    <div className="bg-[#fafbfa] min-h-screen pb-32">
      <section className="pt-32 pb-16 text-center container mx-auto px-4 bg-secondary border-b border-muted">
        <h1 className="text-7xl md:text-9xl font-cursive text-primary font-normal mb-8 lowercase tracking-tight">your account</h1>
      </section>

      <div className="container mx-auto px-4 max-w-6xl pt-20 flex flex-col md:flex-row gap-12">
         <aside className="w-full md:w-80 flex-shrink-0">
            <div className="bg-white p-8 border border-muted/50 shadow-sm flex flex-col gap-8 rounded-sm">
               <div className="flex items-center gap-5 border-b border-muted pb-8">
                 <div className="w-14 h-14 bg-secondary border border-muted rounded-full flex items-center justify-center text-primary">
                   <User className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="font-bold text-primary text-xs uppercase tracking-widest leading-loose">{email || 'Valued Client'}</p>
                 </div>
               </div>
               <nav className="flex flex-col gap-3">
                 <button className="text-left py-3 px-5 bg-secondary text-primary font-bold text-xs uppercase tracking-widest border-l-4 border-accent">Payment Methods</button>
                 <button className="text-left py-3 px-5 text-muted-foreground hover:text-primary font-bold text-xs uppercase tracking-widest hover:bg-secondary/50 transition-colors">Order History</button>
                 <button className="text-left py-3 px-5 text-muted-foreground hover:text-primary font-bold text-xs uppercase tracking-widest hover:bg-secondary/50 transition-colors">Address Book</button>
                 <button onClick={() => setIsLoggedIn(false)} className="text-left py-3 px-5 text-red-600 font-bold text-xs uppercase tracking-widest hover:bg-red-50 mt-6 transition-colors flex items-center gap-3 border border-transparent rounded-sm">
                   <LogOut className="w-4 h-4" /> Sign Out
                 </button>
               </nav>
            </div>
         </aside>

         <div className="flex-1 bg-white border border-muted/50 p-10 md:p-14 shadow-sm rounded-sm">
            <div className="flex justify-between items-center mb-12 border-b border-muted pb-8">
               <div>
                  <h2 className="text-5xl font-cursive text-primary lowercase font-normal flex items-center gap-4">
                     <Lock className="w-8 h-8 text-accent" />
                     encrypted wallet
                  </h2>
                  <p className="text-primary/60 mt-4 text-sm font-bold uppercase tracking-widest">Your payment methods are securely stored and encrypted.</p>
               </div>
               <button 
                  onClick={() => setIsAddingCard(!isAddingCard)}
                  className="px-6 py-4 border-2 border-primary text-primary uppercase tracking-widest text-xs font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-3 shadow-sm whitespace-nowrap"
               >
                  <Plus className="w-4 h-4" /> Add Card
               </button>
            </div>

            <AnimatePresence>
               {isAddingCard && (
                  <motion.div 
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: 'auto', opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     className="overflow-hidden mb-12"
                  >
                     <div className="bg-secondary p-8 border border-muted shadow-inner rounded-sm">
                        <h3 className="font-bold text-primary uppercase tracking-widest text-xs mb-6">New Payment Method</h3>
                        <div className="grid grid-cols-2 gap-6 mb-8">
                           <div className="col-span-2">
                              <input type="text" placeholder="Card Number" className="w-full border border-muted p-4 focus:outline-none focus:border-accent bg-white text-primary font-medium shadow-sm" />
                           </div>
                           <div className="col-span-1">
                              <input type="text" placeholder="MM/YY" className="w-full border border-muted p-4 focus:outline-none focus:border-accent bg-white text-primary font-medium shadow-sm" />
                           </div>
                           <div className="col-span-1">
                              <input type="text" placeholder="CVC" className="w-full border border-muted p-4 focus:outline-none focus:border-accent bg-white text-primary font-medium shadow-sm" />
                           </div>
                        </div>
                        <div className="flex gap-4">
                           <button onClick={() => { setCards(prev => [...prev, { last4: '8888', brand: 'Mastercard', exp: '04/28' }]); setIsAddingCard(false); }} className="px-8 py-4 bg-primary text-white uppercase tracking-widest text-xs font-bold hover:bg-accent transition-all flex-1 shadow-md">
                              Securely Save Card
                           </button>
                           <button onClick={() => setIsAddingCard(false)} className="px-8 py-4 border border-muted text-primary/70 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-primary transition-all">
                              Cancel
                           </button>
                        </div>
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
               {cards.map((card, i) => (
                  <div key={i} className="border border-primary bg-primary p-8 relative shadow-xl overflow-hidden group rounded-sm text-white">
                     <div className="absolute right-[-40px] bottom-[-40px] opacity-[0.03]">
                        <CreditCard className="w-64 h-64 text-white" />
                     </div>
                     <div className="flex justify-between items-start mb-16 relative z-10">
                       <CreditCard className="w-10 h-10 text-accent" />
                       <span className="font-bold tracking-widest text-lg">{card.brand}</span>
                     </div>
                     <div className="flex items-end justify-between relative z-10">
                        <div>
                           <p className="text-white/50 text-[10px] uppercase tracking-widest mb-2 font-bold">Card Number</p>
                           <p className="font-mono text-xl tracking-[0.25em]">•••• {card.last4}</p>
                        </div>
                        <div className="text-right">
                           <p className="text-white/50 text-[10px] uppercase tracking-widest mb-2 font-bold">Expires</p>
                           <p className="font-mono text-base tracking-[0.1em]">{card.exp}</p>
                        </div>
                     </div>
                     <button 
                        onClick={() => setCards(cards.filter((_, idx) => idx !== i))}
                        className="absolute inset-0 bg-primary/95 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all uppercase tracking-widest text-sm font-bold backdrop-blur-sm border-2 border-primary"
                     >
                        Remove Card
                     </button>
                  </div>
               ))}
               {cards.length === 0 && !isAddingCard && (
                  <div className="col-span-2 py-16 text-center border-2 border-dashed border-muted bg-secondary">
                     <p className="text-primary/50 font-bold uppercase tracking-widest text-sm">No payment methods saved.</p>
                  </div>
               )}
            </div>
         </div>
      </div>
    </div>
  )
}
