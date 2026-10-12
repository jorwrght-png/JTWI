import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, MessageCircle, Star } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-primary pt-20 pb-10 border-t border-muted/50 mt-auto">
      <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex flex-col items-start justify-center group mb-6">
            <span className="font-serif text-2xl tracking-tighter uppercase font-medium text-primary group-hover:text-accent transition-colors">Just the Wright</span>
            <span className="font-cursive text-3xl tracking-wide lowercase -mt-2 text-primary">Interiors</span>
          </Link>
          <p className="text-muted-foreground text-sm mb-8 max-w-xs leading-relaxed font-medium">
            Delivering an absolutely superior and curated level of luxury Interior design for the most affordable price-point in the Northeast Ohio Region.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a href="https://Facebook.com/justthewrightinteriors" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/5 hover:bg-accent hover:text-white rounded-full transition-all text-primary" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://Instagram.com/wright__interiors" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/5 hover:bg-accent hover:text-white rounded-full transition-all text-primary" aria-label="Business Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://Instagram.com/jordan_____wright" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/5 hover:bg-accent hover:text-white rounded-full transition-all text-primary" aria-label="Jordan's Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://Linkedin.com/in/jordanwright1989" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/5 hover:bg-accent hover:text-white rounded-full transition-all text-primary" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://Wa.me/message/7DR2LD3HXD5ZA1" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/5 hover:bg-accent hover:text-white rounded-full transition-all text-primary" aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="https://yelp.to/UOHCp3JXz4" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/5 hover:bg-accent hover:text-white rounded-full transition-all text-primary" aria-label="Yelp">
              <Star className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg mb-6 text-primary uppercase tracking-widest font-semibold">Our Company</h3>
          <ul className="flex flex-col gap-4">
            <li><Link to="/about" className="text-muted-foreground hover:text-accent text-sm tracking-wide transition-colors font-medium">About the Team</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-accent text-sm tracking-wide transition-colors font-medium">Design Services</Link></li>
            <li><Link to="/shop" className="text-muted-foreground hover:text-accent text-sm tracking-wide transition-colors font-medium">Curated Shop</Link></li>
            <li><Link to="/blog" className="text-muted-foreground hover:text-accent text-sm tracking-wide transition-colors font-medium">Design Blog</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-accent text-sm tracking-wide transition-colors font-medium">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg mb-6 text-primary uppercase tracking-widest font-semibold">Business Hours</h3>
          <ul className="flex flex-col gap-4 text-sm text-muted-foreground font-medium">
            <li className="flex justify-between w-48"><span>Monday - Friday:</span> <span>7:00AM - 11:00PM</span></li>
            <li className="flex justify-between w-48"><span>Saturday - Sunday:</span> <span>9:00AM - 5:00PM</span></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg mb-6 text-primary uppercase tracking-widest font-semibold">Get in Touch</h3>
          <ul className="flex flex-col gap-4 text-sm text-muted-foreground font-medium">
            <li><a href="tel:+13305737761" className="hover:text-accent transition-colors">+1 (330) 573-7761 (Direct)</a></li>
            <li><a href="tel:+13305756751" className="hover:text-accent transition-colors">+1 (330) 575-6751 (Support)</a></li>
            <li><a href="mailto:jw@jtwrightinteriors.com" className="hover:text-accent transition-colors">jw@jtwrightinteriors.com</a></li>
          </ul>
          <Link to="/booking" className="inline-block mt-8 px-8 py-3 border border-primary text-primary hover:bg-accent hover:border-accent hover:text-white transition-all uppercase tracking-widest text-xs font-bold shadow-sm">
            Book Consultation
          </Link>
        </div>
      </div>
      
      <div className="border-t border-muted/50 pt-8 mt-8 text-center px-4">
        <p className="text-muted-foreground/60 text-sm tracking-wide font-medium">
          &copy; {currentYear} Just the Wright Interiors. Designed with luxury and care in Ohio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
