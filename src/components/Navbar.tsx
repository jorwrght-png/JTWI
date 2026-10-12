import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Shop', path: '/shop' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Booking', path: '/booking' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted/50 bg-[#fafbfa]/90 backdrop-blur-md">
      <div className="container mx-auto px-4 w-full max-w-7xl h-24 flex items-center justify-between">
        <Link to="/" className="flex flex-col items-start justify-center group">
          <span className="font-serif text-3xl tracking-tight uppercase font-semibold text-primary group-hover:text-accent transition-colors">Just the Wright</span>
          <span className="font-cursive text-4xl tracking-wide lowercase -mt-4 text-primary group-hover:text-accent transition-colors relative z-10">interiors</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "text-[11px] font-bold tracking-widest uppercase transition-colors hover:text-accent py-2",
                location.pathname === route.path ? "text-accent border-b-2 border-accent" : "text-primary/80"
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/wallet" className="p-3 hover:bg-accent/10 hover:text-accent rounded-full transition-colors text-primary" aria-label="Account & Wallet">
            <User className="w-5 h-5" />
          </Link>
          <Link to="/shop" className="p-3 hover:bg-accent/10 hover:text-accent rounded-full transition-colors text-primary relative" aria-label="Shopping Cart">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-4 h-4 bg-accent text-white text-[10px] flex items-center justify-center font-bold rounded-full pointer-events-none">
              0
            </span>
          </Link>
          <button 
            className="xl:hidden p-3 text-primary hover:bg-accent/10 hover:text-accent rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden absolute top-24 left-0 w-full bg-white border-b border-muted shadow-2xl"
          >
            <nav className="flex flex-col p-6 w-full gap-2">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-4 text-sm font-bold tracking-widest uppercase transition-colors rounded-sm",
                    location.pathname === route.path ? "text-accent bg-accent/5 border-l-4 border-accent" : "text-primary/80 hover:bg-secondary"
                  )}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
