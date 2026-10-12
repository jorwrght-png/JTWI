import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Interior Design Services',
    price: 'Starting at $500',
    desc: 'Bespoke design packages personalized for your lifestyle, bringing your vision to life from initial concept to the final modern minimal reveal.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
    slug: 'interior-design'
  },
  {
    title: 'Interior Decoration',
    price: 'Starting at $250',
    desc: 'Enhance your existing space with hand-picked furniture, art, and stylish sage green decor elements curated for your unique style.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
    slug: 'interior-decoration'
  },
  {
    title: 'Free Consultations',
    price: 'Starting at $0',
    desc: 'Zero-obligation, complimentary initial walk-through and consultation to explore aesthetic possibilities and define your long-term interior goals.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80',
    slug: 'free-consultations'
  },
  {
    title: 'Home Staging',
    price: 'Starting at $450',
    desc: 'Expertly staging your property to emphasize its best features, maximizing clean lines and pushing property value for Ohio home buyers.',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80',
    slug: 'home-staging'
  },
  {
    title: 'Interior Painting',
    price: 'Starting at $300',
    desc: 'Professional interior painting services utilizing premium contractor quality paints with meticulous attention to detail and pristine off-white canvas aesthetics.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
    slug: 'interior-painting'
  },
  {
    title: 'Flooring Solutions',
    price: 'Starting at $800',
    desc: 'Premium hardwood, luxury vinyl plank, or tile installation and refinishing to completely ground and transform the warmth of your room.',
    image: 'https://images.unsplash.com/photo-1581858326442-990c64b5ebbc?auto=format&fit=crop&q=80',
    slug: 'flooring-solutions'
  },
  {
    title: 'Commercial Services',
    price: 'Custom Quoted',
    desc: 'Elevate your business environment with our professional commercial design services tailored for modern offices, upscale retail, and hospitality.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    slug: 'commercial-services'
  },
  {
    title: 'Professional Organization',
    price: 'Starting at $150',
    desc: 'Systems-based decluttering and organization solutions that look absolutely beautiful and function flawlessly for your minimal daily routine.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
    slug: 'professional-organization'
  }
];

export default function Services() {
  return (
    <div className="bg-[#fafbfa] pb-32">
      <section className="pt-32 pb-24 text-center container mx-auto px-4 border-b border-muted bg-secondary">
        <h1 className="text-7xl md:text-9xl font-cursive text-primary font-normal mb-8 lowercase tracking-tight">our services</h1>
        <p className="text-primary/70 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
          From full-scale luxury renovations to simple room refreshes, our suite of modern minimal design services caters exactly to your needs, lifestyle, and budget.
        </p>
      </section>

      <div className="container mx-auto px-4 max-w-7xl pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-16">
          {services.map((service) => (
             <motion.div 
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group flex flex-col bg-white p-6 shadow-sm border border-muted/50 rounded-sm"
             >
                <Link to={`/services/${service.slug}`} className="block overflow-hidden aspect-[4/3] mb-10 relative bg-muted rounded-sm">
                   <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 duration-500 rounded-sm" />
                   <img 
                      src={service.image} 
                      alt={`${service.title} - Luxury Interior Design HD Photo`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                   />
                </Link>
                <div className="flex justify-between items-start mb-6 border-b border-muted pb-6">
                  <h2 className="text-4xl font-serif text-primary font-medium">{service.title}</h2>
                  <span className="bg-secondary px-4 py-2 font-bold uppercase tracking-widest text-[#0a0a0a] text-xs shrink-0">{service.price}</span>
                </div>
                <p className="text-muted-foreground font-medium leading-relaxed mb-8 text-lg flex-grow">
                  {service.desc}
                </p>
                <div className="flex flex-wrapitems-center justify-between mt-auto">
                  <Link to={`/services/${service.slug}`} className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-xs hover:text-accent transition-colors">
                    View Details
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                   <a href="sms:+13305737761" className="text-accent uppercase tracking-widest text-xs font-bold hover:text-primary transition-colors hover:underline">
                    Contact Us (SMS)
                  </a>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
