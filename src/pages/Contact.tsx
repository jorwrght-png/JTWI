import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, MessageCircle, Share2, Star } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[#fafbfa] pb-32">
      <section className="pt-32 pb-24 text-center container mx-auto px-4 bg-secondary border-b border-muted">
        <h1 className="text-7xl md:text-9xl font-cursive text-primary font-normal mb-8 lowercase tracking-tight">contact us</h1>
        <p className="text-primary/70 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          We would love to hear from you. Get in touch with the Just the Wright Interiors team today to start designing your dream modern space.
        </p>
      </section>

      <div className="container mx-auto px-4 max-w-7xl pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Methods */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-16"
          >
            <div className="bg-white p-10 border border-muted/50 shadow-sm">
              <h2 className="text-5xl font-cursive text-primary font-normal mb-10 border-b border-muted pb-8 lowercase">reach out to us</h2>
              <div className="flex flex-col gap-10">
                <div className="flex gap-6 items-start">
                  <div className="p-5 bg-secondary border border-muted rounded-full text-accent shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="mt-2">
                    <h3 className="font-bold text-primary uppercase tracking-widest text-sm mb-3">Call Us</h3>
                    <div className="flex flex-col gap-2">
                      <a href="tel:+13305737761" className="text-muted-foreground hover:text-accent transition-colors font-medium text-lg">Company / Direct: +1 (330) 573-7761</a>
                      <a href="tel:+13305756751" className="text-muted-foreground hover:text-accent transition-colors font-medium text-lg">Customer Support: +1 (330) 575-6751</a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="p-5 bg-secondary border border-muted rounded-full text-accent shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="mt-2">
                    <h3 className="font-bold text-primary uppercase tracking-widest text-sm mb-3">Email Us</h3>
                    <div className="flex flex-col gap-2">
                      <a href="mailto:jw@jtwrightinteriors.com" className="text-muted-foreground hover:text-accent transition-colors font-medium text-lg">jw@jtwrightinteriors.com</a>
                      <a href="mailto:just.the.wright.interiors@gmail.com" className="text-muted-foreground hover:text-accent transition-colors font-medium text-lg">just.the.wright.interiors@gmail.com</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="p-5 bg-secondary border border-muted rounded-full text-accent shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="mt-2">
                    <h3 className="font-bold text-primary uppercase tracking-widest text-sm mb-3">Service Area</h3>
                    <p className="text-muted-foreground font-medium text-lg">Northeast Ohio Region (within a 100-mile radius)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 border border-muted/50 shadow-sm">
               <h2 className="text-5xl font-cursive text-primary font-normal mb-10 border-b border-muted pb-8 lowercase">connect on social</h2>
               <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Facebook, label: 'Facebook', href: 'https://Facebook.com/justthewrightinteriors' },
                    { icon: Instagram, label: 'Instagram', href: 'https://Instagram.com/wright__interiors' },
                    { icon: Instagram, label: "Jordan's Instagram", href: 'https://Instagram.com/jordan_____wright' },
                    { icon: Linkedin, label: 'LinkedIn', href: 'https://Linkedin.com/in/jordanwright1989' },
                    { icon: MapPin, label: 'Google Business Profile', href: 'https://maps.app.goo.gl/dDtCnWoj2Mxe6ezPA?g_st=ac' },
                    { icon: MessageCircle, label: 'WhatsApp', href: 'https://Wa.me/message/7DR2LD3HXD5ZA1' },
                    { icon: Share2, label: 'Google Share', href: 'https://Share.google/EWdRigJqf7UvcYnqb' },
                    { icon: Star, label: 'Yelp', href: 'https://yelp.to/UOHCp3JXz4' },
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center justify-center p-8 bg-secondary border border-muted hover:border-accent hover:shadow-md transition-all gap-4 flex-1 min-w-[140px] rounded-sm"
                    >
                      <social.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                      <span className="text-[10px] uppercase tracking-widest font-bold text-primary group-hover:text-accent transition-colors">{social.label}</span>
                    </a>
                  ))}
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             className="bg-white p-10 shadow-xl border border-muted/50 h-fit sticky top-28"
          >
            <h2 className="text-5xl font-cursive text-primary font-normal mb-10 lowercase">send a message</h2>
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-primary">Full Name</label>
                <input type="text" id="name" className="border border-muted bg-[#fafbfa] p-4 text-primary focus:outline-none focus:border-accent transition-colors font-medium" placeholder="Your Name" />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-primary">Email Address</label>
                <input type="email" id="email" className="border border-muted bg-[#fafbfa] p-4 text-primary focus:outline-none focus:border-accent transition-colors font-medium" placeholder="your@email.com" />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold text-primary">Phone Number</label>
                <input type="tel" id="phone" className="border border-muted bg-[#fafbfa] p-4 text-primary focus:outline-none focus:border-accent transition-colors font-medium" placeholder="(330) 555-0000" />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-primary">Requirements & Details</label>
                <textarea id="message" rows={6} className="border border-muted bg-[#fafbfa] p-4 text-primary focus:outline-none focus:border-accent transition-colors resize-none font-medium text-lg leading-relaxed" placeholder="How can we help you create your dream minimalist space?"></textarea>
              </div>
              <button className="bg-primary text-white uppercase tracking-widest font-bold text-sm py-5 hover:bg-accent hover:shadow-lg transition-all mt-4 w-full">
                Submit Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
