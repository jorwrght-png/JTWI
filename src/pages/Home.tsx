import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Testimonials } from '../components/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#fafbfa]">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-secondary border-b border-muted">
        <div className="absolute inset-0 z-0 flex justify-center items-center">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80" 
            alt="Modern luxury bright interior design" 
            className="w-full h-full object-cover opacity-20 mix-blend-multiply"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-10"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-primary font-medium mb-4 leading-tight tracking-tight">
              Curated Luxury
            </h1>
            <p className="font-cursive text-5xl md:text-7xl text-accent -mt-8 md:-mt-10 lg:-mt-12 font-normal lowercase relative z-10 drop-shadow-sm">
              for your everyday life
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-primary/70 text-lg md:text-xl max-w-2xl font-sans tracking-wide leading-relaxed mb-12 font-medium"
          >
            Award-winning luxury interior design, premium home staging, and professional organization services based in Northeast Ohio for discerning clients.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link to="/booking" className="px-10 py-4 bg-primary text-white font-semibold uppercase tracking-widest text-sm hover:bg-accent hover:shadow-lg transition-all flex items-center justify-center gap-3">
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/services" className="px-10 py-4 bg-white/50 border border-primary text-primary font-semibold uppercase tracking-widest text-sm hover:bg-white hover:shadow-md transition-all backdrop-blur-sm">
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-32 bg-[#fafbfa]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Professional Expertise</span>
            <h2 className="text-5xl md:text-7xl font-cursive text-primary font-normal lowercase mb-6">Transform your space</h2>
            <p className="text-primary/60 max-w-2xl font-medium leading-relaxed">Embrace modern minimalist living with our tailored aesthetic approach. We bring warmth, function, and breathtaking design to every corner of your home.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Interior Design', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80', desc: 'Comprehensive luxury design from concept to stunning minimalist installation.' },
              { title: 'Home Staging', image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80', desc: 'Strategic staging services utilizing sage accents to maximize property value and sensory appeal.' },
              { title: 'Professional Organization', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80', desc: 'Declutter and organize your layout for a peaceful, functional modern life.' }
            ].map((service, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col items-center text-center">
                <div className="relative overflow-hidden aspect-[4/5] w-full mb-8 shadow-sm group-hover:shadow-xl transition-shadow duration-500 rounded-sm">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                <h3 className="text-3xl font-serif text-primary mb-3 font-medium">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium px-4">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Link to="/services" className="inline-flex items-center gap-3 text-primary hover:text-accent transition-colors font-bold uppercase tracking-widest pb-1 border-b-2 border-primary hover:border-accent">
               View All Services <ArrowRight className="w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>

      {/* Featured Shop Section */}
      <section className="py-32 bg-secondary border-y border-muted">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Curated Collection</span>
          <h2 className="text-5xl md:text-7xl font-cursive text-primary font-normal lowercase mb-6">Luxury decor & furniture</h2>
          <p className="text-primary/60 mx-auto max-w-2xl mt-4 mb-16 font-medium leading-relaxed">Discover our modern minimal selection of over 2,500 premium interior products. Beautiful sage green textiles, off-white ceramics, and high-end staples to elevate your styling.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { name: 'Velvet Accent Chair', price: '$899', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80' },
              { name: 'Ceramic Table Lamp', price: '$245', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80' },
              { name: 'Marble Coffee Table', price: '$1,299', image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80' },
              { name: 'Linen Throw Pillow', price: '$85', image: 'https://images.unsplash.com/photo-1583847268964-b28e5f7a0752?auto=format&fit=crop&q=80' }
            ].map((product, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-muted shadow-sm group-hover:shadow-lg transition-all rounded-sm">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h4 className="font-serif text-xl text-primary font-medium mb-2">{product.name}</h4>
                <p className="text-muted-foreground font-semibold">{product.price}</p>
              </div>
            ))}
          </div>
          
          <Link to="/shop" className="inline-flex items-center justify-center px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-widest text-sm font-bold shadow-sm">
            Shop All Products
          </Link>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <Testimonials />
    </div>
  );
}
