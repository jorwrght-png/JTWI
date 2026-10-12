import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MessageSquare } from 'lucide-react';

const servicesData = {
  'interior-design': {
    title: 'Interior Design',
    price: 'Starting at $500',
    desc: 'Bespoke design packages personalized for your lifestyle, bringing your minimalist and modern vision to life from initial concept to the final reveal.',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
    process: [
      { name: 'Initial Consultation', text: 'We begin by getting to know you, your space, and what you hope to achieve. We discuss neutral aesthetics, lifestyle, and modern budget.' },
      { name: 'Concept & Planning', text: 'Our team develops comprehensive design concepts including mood boards featuring bold sage greens, floor plans, and material selections.' },
      { name: 'Sourcing & Procurement', text: 'We handle ordering all furniture, fixtures, and finishes, ensuring high-end quality and managing timelines.' },
      { name: 'Installation & Reveal', text: 'The exciting final step where we bring it all together, styling every off-white and neutral detail so you can step into a beautifully finished home.' }
    ],
    beforePhotos: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80'],
    afterPhotos: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80']
  },
  'interior-decoration': {
    title: 'Interior Decoration',
    price: 'Starting at $250',
    desc: 'Enhance your existing space with hand-picked furniture, art, and decor elements specifically curated for your unique style.',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
    process: [
      { name: 'Style Assessment', text: 'We review your existing pieces and determine the stylistic direction to introduce calm and clean structural lines.' },
      { name: 'Curation', text: 'We select the perfect complementary items, from minimalist artwork to authentic rugs and lighting.' },
      { name: 'Styling', text: 'We professionally arrange and style the new items to create a luxury cohesive, beautiful space.' }
    ],
    beforePhotos: ['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'],
    afterPhotos: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80']
  }
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = (slug && servicesData[slug as keyof typeof servicesData]) || servicesData['interior-design'];

  return (
    <div className="bg-[#fafbfa] pb-32">
      <div className="h-[75vh] min-h-[500px] relative border-b border-muted">
         <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 pointer-events-none" />
         <img src={service.heroImage} alt={`${service.title} Luxury Design HD`} className="w-full h-full object-cover" />
         <div className="absolute inset-0 flex items-end z-20">
            <div className="container mx-auto px-4 pb-20 pt-32">
               <Link to="/services" className="inline-flex items-center gap-3 text-white hover:text-accent uppercase tracking-widest text-[10px] font-bold mb-8 transition-colors bg-primary/60 px-4 py-2 backdrop-blur-md rounded-sm">
                  <ArrowLeft className="w-4 h-4" /> Back to Services
               </Link>
               <h1 className="text-7xl md:text-9xl font-cursive text-white mb-6 lowercase">{service.title}</h1>
               <p className="text-primary bg-[#fafbfa] uppercase tracking-widest text-xs font-bold inline-block px-5 py-3 shadow-lg">
                  {service.price}
               </p>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl pt-24">
         <p className="text-2xl md:text-3xl font-serif text-primary/80 leading-relaxed mb-24 text-center">
            {service.desc}
         </p>

         <div className="mb-32">
            <h2 className="text-6xl font-cursive text-center text-primary font-normal mb-16 lowercase">Our Proven Process</h2>
            <div className="flex flex-col gap-10">
               {service.process.map((step, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="flex gap-8 items-start bg-white p-8 border border-muted/50 shadow-sm"
                  >
                     <div className="w-16 h-16 flex-shrink-0 bg-secondary flex items-center justify-center rounded-sm font-serif text-3xl text-accent border border-muted shadow-inner">
                        {i + 1}
                     </div>
                     <div className="pt-2">
                        <h3 className="font-bold uppercase tracking-widest text-sm mb-4 text-primary">{step.name}</h3>
                        <p className="text-primary/70 leading-relaxed font-medium text-lg">{step.text}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>

         <div className="mb-32">
             <h2 className="text-6xl font-cursive text-center text-primary font-normal mb-16 lowercase">Before & After</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white p-6 border border-muted/50 shadow-sm">
                   <span className="block uppercase tracking-widest text-[11px] font-bold text-muted-foreground mb-4 text-center">Before (Structural Layout)</span>
                   <div className="aspect-[4/3] bg-muted overflow-hidden relative group rounded-sm">
                      <img src={service.beforePhotos[0]} alt="Before Stage Photo HD" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                   </div>
                </div>
                <div className="bg-white p-6 border border-muted/50 shadow-sm">
                   <span className="block uppercase tracking-widest text-[11px] font-bold text-accent mb-4 text-center">After (Just the Wright Interiors)</span>
                   <div className="aspect-[4/3] bg-muted overflow-hidden relative group rounded-sm">
                      <img src={service.afterPhotos[0]} alt="After Designed Photo HD" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   </div>
                </div>
             </div>
         </div>

         <div className="text-center bg-secondary p-16 border border-muted/50 shadow-sm">
            <h2 className="text-6xl font-cursive text-primary mb-6 lowercase">Ready to start?</h2>
            <p className="text-primary/70 mb-10 max-w-xl mx-auto font-medium text-lg">Take the first step towards transforming your blank modern canvas space by reaching out to us today.</p>
            <a 
               href="sms:+13305737761" 
               className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-accent hover:shadow-xl transition-all shadow-md rounded-sm"
            >
               <MessageSquare className="w-5 h-5" />
               Contact us via SMS
            </a>
         </div>
      </div>
    </div>
  )
}
