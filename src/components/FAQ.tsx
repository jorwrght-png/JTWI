import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is your typical interior design process?",
    answer: "Our process begins with an in-depth free consultation to understand your vision, lifestyle, and requirements. Following this, we move into the conceptual design phase where we present mood boards and layout options. Once approved, we handle sourcing, procurement, and full project management right through to final installation and styling."
  },
  {
    question: "How do you structure your pricing?",
    answer: "We guarantee the most affordable price point within a 100-mile radius. Our pricing is structured transparently based on the scope of the project. Depending on your needs, we offer flat-fee packages for design-only services, or an hourly rate combined with cost-plus pricing for full-service implementation and furnishings. We provide a detailed estimate before any work begins."
  },
  {
    question: "How long does a typical design project take?",
    answer: "Timelines vary depending on the scope and scale of the project. A single-room transformation or styling update can take 4-6 weeks, while a full home renovation or complex commercial project might require 3-6 months. We will establish a clear timeline during our initial consultation and keep you updated throughout."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we proudly offer free initial consultations! We want to get to know you on a personal level to ensure that our styles and expectations align before we embark on the design journey together."
  },
  {
    question: "Can I use my existing furniture?",
    answer: "Absolutely. We love breathing new life into cherished pieces. During our consultation, we will assess your current furnishings and seamlessly integrate them into the new design plan wherever possible."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-muted" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-cursive text-primary font-normal mb-6 lowercase">frequently asked questions</h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Everything you need to know about our design process, pricing, and project timelines.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-muted/60 p-2 shadow-sm rounded-sm bg-[#fafbfa] transition-all hover:border-muted overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-xl font-serif text-primary font-medium group-hover:text-accent transition-colors">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4 w-10 h-10 rounded-full bg-white border border-muted/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 text-lg text-primary/70 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
