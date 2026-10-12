import { motion } from 'motion/react';
import { Linkedin, Phone } from 'lucide-react';
import { FAQ } from '../components/FAQ';

export default function About() {
  return (
    <div className="bg-[#fafbfa]">
      <section className="pt-32 pb-16 text-center container mx-auto px-4 border-b border-muted">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary mb-2 tracking-tight">Just the Wright</h1>
        <h2 className="text-7xl md:text-9xl font-cursive text-primary font-normal -mt-8 mb-16 lowercase">interiors</h2>
        
        <div className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-primary/70 font-sans font-medium mb-12 space-y-8 text-left">
          <p>
            Just the Wright Interiors was founded in 2021 by Jordan Daniel Wright, Owner and Operator of the design firm. The business originally served Port Charlotte, Punta Gorda and other communities throughout Southwest Florida before eventually growing an inevitable intolerance to the extreme heat and humidity, which lead Just the Wright Interiors back to Ohio, where life feels like a blessing every day you get to wake up and live it- where people not only look comfortable, but we also feel comfortable, because, well, that's how HOME feels, doesn't it?
          </p>
          <p>
            Not only are we interested in getting to know you on a more personal level, however, we would also like for you to become a loyal customer of our team as we promise to deliver to you an absolutely superior level of luxury Interior design for the most affordable price point anywhere within a 100 mile radius of your home or business- guaranteed.
          </p>
          <p>
            We work with our clients throughout the entire process and will always strive to provide you with the very best possible service for the most affordable price as we deliver to you a top-notch experience with our customer service team as well as a truly unique and superior end-result, which is quite literally guaranteed to meet your expectations of us and leave you completely satisfied and smiling.
          </p>
        </div>
      </section>
      
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-6xl md:text-8xl font-cursive text-primary font-normal mb-20 lowercase">meet the team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto text-left">
              {/* Member 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col bg-white p-6 shadow-sm border border-muted/50 rounded-sm"
              >
                <div className="aspect-[3/4] w-full relative mb-8 overflow-hidden rounded-sm bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80" 
                    alt="Jordan Daniel Wright Profile HD" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-4xl font-serif text-primary mb-3">Jordan Daniel Wright</h3>
                <p className="text-accent font-bold uppercase tracking-widest text-xs mb-6">Customer Design Technician and Owner</p>
                <p className="text-muted-foreground mb-8 leading-relaxed font-medium flex-grow text-lg">
                  With a profound dedication to interior design, Jordan brings his creative vision to every project. His professional background in high-end design empowers him to improve people's lives throughout the community by masterfully enhancing the spaces they live in. His eye for detail and commitment to affordable luxury ensure breathtaking results for every client.
                </p>
                <div className="flex flex-wrap gap-4 items-center mt-auto">
                  <a href="tel:+13305737761" className="flex items-center gap-3 bg-primary text-white px-6 py-3 hover:bg-accent hover:shadow-md transition-all rounded-sm">
                    <Phone className="w-4 h-4" />
                    <span className="font-bold text-xs uppercase tracking-widest">Call Jordan</span>
                  </a>
                  <a href="https://www.linkedin.com/in/jordanwright1989" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-primary/20 text-primary px-6 py-3 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all rounded-sm">
                    <Linkedin className="w-4 h-4" />
                    <span className="font-bold text-xs uppercase tracking-widest">LinkedIn</span>
                  </a>
                </div>
              </motion.div>

              {/* Member 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col bg-white p-6 shadow-sm border border-muted/50 rounded-sm"
              >
                 <div className="aspect-[3/4] w-full relative mb-8 overflow-hidden rounded-sm bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
                    alt="Justin William Stargell Profile HD" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-4xl font-serif text-primary mb-3">Justin William Stargell</h3>
                <p className="text-accent font-bold uppercase tracking-widest text-xs mb-6">Virtual Design and Operations Manager</p>
                <p className="text-muted-foreground mb-8 leading-relaxed font-medium flex-grow text-lg">
                  Justin brings a robust professional background in IT to the team. Known for his highly motivated work ethic, he is deeply dedicated to Customer Support and Development. Justin manages the operational efficiency of the firm and guarantees seamless communication, ensuring that your project runs perfectly from initial consultation to final staging.
                </p>
                 <div className="flex flex-wrap gap-4 items-center mt-auto">
                  <a href="tel:+13305756751" className="flex items-center gap-3 bg-primary text-white px-6 py-3 hover:bg-accent hover:shadow-md transition-all rounded-sm">
                    <Phone className="w-4 h-4" />
                    <span className="font-bold text-xs uppercase tracking-widest">Call Justin</span>
                  </a>
                  <a href="https://www.linkedin.com/in/jordanwright1989" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-primary/20 text-primary px-6 py-3 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all rounded-sm">
                    <Linkedin className="w-4 h-4" />
                    <span className="font-bold text-xs uppercase tracking-widest">LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            </div>
        </div>
      </section>
      
      <FAQ />
    </div>
  )
}
