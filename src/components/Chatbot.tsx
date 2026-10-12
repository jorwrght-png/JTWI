import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [botName, setBotName] = useState<'Paul' | 'Pauline' | null>(null);
  const [messages, setMessages] = useState<{sender: 'bot' | 'user', text: string}[]>([]);
  const [input, setInput] = useState('');

  const initBot = (name: 'Paul' | 'Pauline') => {
    setBotName(name);
    const greeting = name === 'Paul' 
      ? "Hello there! I'm Paul. Let's find some amazing luxury decor for your modern layout. How can I assist you today?"
      : "Hi darling! Pauline here. Your space deserves the absolute best. Shall we look at some fabulous new arrivals?";
    setMessages([{ sender: 'bot', text: greeting }]);
  };

  const handleSend = () => {
    if(!input.trim()) return;
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setInput('');
    
    setTimeout(() => {
      const responses = botName === 'Paul' 
        ? ["That's a very practical minimalist choice. I highly recommend checking out our Shop page for some exquisite items that match that.", "I can certainly direct you to our Services. Have you read about our staging approach?", "Indeed. If you want my advice, the Velvet Accent Chair in the Shop is a must-have right now."]
        : ["Oh, honey, yes! That's brilliant. But let's be honest, you absolutely need to browse our Shop right now.", "Fabulous idea! By the way, the Shop page has some gorgeous new sage green textiles that would look stunning in your living room.", "I love that energy! Make sure you book a consultation, but also, don't leave without buying something beautiful from the Shop!"];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { sender: 'bot', text: randomResponse }]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-xl z-50 hover:bg-accent transition-all hover:scale-105"
        onClick={() => setIsOpen(true)}
        aria-label="Open Chatbot"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-6 w-[360px] shadow-2xl bg-white border border-muted/50 z-50 flex flex-col overflow-hidden max-h-[550px] rounded-sm"
          >
            <div className="bg-primary text-white p-5 flex justify-between items-center shadow-md z-10">
              <div className="flex items-center gap-4">
                {botName && (
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden border border-muted">
                    {botName === 'Paul' ? (
                       <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Paul HD icon" className="w-full h-full object-cover" />
                    ) : (
                       <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="Pauline HD icon" className="w-full h-full object-cover" />
                    )}
                  </div>
                )}
                <div>
                  <h4 className="font-cursive text-2xl font-normal leading-none capitalize">{botName ? botName : 'AI Concierge'}</h4>
                  <p className="text-[9px] text-accent uppercase tracking-widest mt-1 font-bold">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {!botName ? (
              <div className="flex-1 p-8 flex flex-col items-center justify-center text-center gap-8 bg-[#fafbfa]">
                <Bot className="w-16 h-16 text-accent" />
                <h3 className="font-cursive text-4xl text-primary font-normal lowercase">Choose your assistant</h3>
                <div className="flex gap-4 w-full">
                  <button 
                    onClick={() => initBot('Paul')}
                    className="flex-1 flex flex-col items-center gap-3 p-5 border border-muted bg-white hover:border-accent transition-all shadow-sm group"
                  >
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Paul AI" className="w-14 h-14 rounded-full object-cover group-hover:scale-105 transition-transform" />
                    <span className="font-bold text-xs uppercase tracking-widest text-primary group-hover:text-accent font-sans">Paul</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Practical</span>
                  </button>
                  <button 
                    onClick={() => initBot('Pauline')}
                    className="flex-1 flex flex-col items-center gap-3 p-5 border border-muted bg-white hover:border-accent transition-all shadow-sm group"
                  >
                     <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="Pauline AI" className="w-14 h-14 rounded-full object-cover group-hover:scale-105 transition-transform" />
                    <span className="font-bold text-xs uppercase tracking-widest text-primary group-hover:text-accent font-sans">Pauline</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Fabulous</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 p-5 overflow-y-auto min-h-[350px] flex flex-col gap-5 bg-secondary/50">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                       {msg.sender === 'bot' && (
                          <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-[10px] overflow-hidden shadow-sm">
                             {botName === 'Paul' ? (
                               <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Paul avatar" className="w-full h-full object-cover" />
                            ) : (
                               <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="Pauline avatar" className="w-full h-full object-cover" />
                            )}
                          </div>
                       )}
                       <div className={`p-4 rounded-sm text-sm max-w-[85%] font-medium leading-relaxed ${msg.sender === 'user' ? 'bg-primary text-white shadow-md' : 'bg-white border border-muted text-primary shadow-sm'}`}>
                         {msg.text}
                       </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t border-muted bg-[#fafbfa] flex gap-3">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1 border border-muted bg-white p-3 text-sm focus:outline-none focus:border-accent text-primary shadow-inner font-medium"
                  />
                  <button 
                    onClick={handleSend}
                    className="p-4 bg-primary text-white hover:bg-accent hover:shadow-md transition-all disabled:opacity-50"
                    disabled={!input.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
