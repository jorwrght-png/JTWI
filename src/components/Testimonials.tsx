import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    quote: "just the wright interiors completely transformed our home in ohio. jordan and justin delivered a curated luxury experience that exceeded our expectations in every single way.",
    name: "Sarah & David M.",
    location: "Cleveland OH",
    projectUrl: "/services",
    projectName: "Modern Lakehouse Renovation"
  },
  {
    id: 2,
    quote: "their attention to minimalist detail is unmatched. they brought so much light and function into our space, proving that luxury and practicality can indeed coexist beautifully.",
    name: "Elena R.",
    location: "Akron OH",
    projectUrl: "/services",
    projectName: "Urban Loft Makeover"
  },
  {
    id: 3,
    quote: "from the initial consultation to the final installation, the process was seamless. our office now feels calm, organized, and perfectly aligned with our brand's aesthetic.",
    name: "Marcus T.",
    location: "Canton OH",
    projectUrl: "/services",
    projectName: "Creative Agency HQ"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      className="py-32 bg-[#fafbfa] text-center px-4 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto max-w-5xl flex flex-col items-center">
        <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Client Praise</span>
        <h2 className="text-5xl md:text-7xl font-cursive text-primary font-normal lowercase mb-16">what they say</h2>
        
        <div className="relative w-full flex items-center justify-center min-h-[350px]">
          <button 
            onClick={handlePrev}
            className="absolute left-0 md:left-4 z-20 p-3 bg-white border border-muted rounded-full shadow-sm text-primary hover:text-accent hover:border-accent hover:shadow-md transition-all hidden sm:flex items-center justify-center"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="w-full max-w-3xl px-4 md:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <div className="flex justify-center gap-2 mb-8 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                </div>
                <p className="text-3xl md:text-5xl font-cursive text-primary font-normal leading-snug mb-10 lowercase">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col items-center gap-4">
                  <span className="text-primary/70 uppercase tracking-widest text-sm font-bold">
                    — {testimonials[currentIndex].name}, {testimonials[currentIndex].location}
                  </span>
                  
                  <Link 
                    to={testimonials[currentIndex].projectUrl} 
                    className="inline-flex items-center gap-2 text-primary hover:text-accent font-sans text-sm font-bold transition-all mt-4 border-b-2 border-primary pb-1 hover:border-accent"
                  >
                    View {testimonials[currentIndex].projectName} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={handleNext}
            className="absolute right-0 md:right-4 z-20 p-3 bg-white border border-muted rounded-full shadow-sm text-primary hover:text-accent hover:border-accent hover:shadow-md transition-all hidden sm:flex items-center justify-center"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentIndex ? 'bg-accent w-8' : 'bg-muted-foreground/30 hover:bg-primary/40'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
