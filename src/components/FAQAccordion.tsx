"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Do you perform outside Hyderabad?",
    answer: "Yes, we perform across Telangana, Andhra Pradesh, and all major cities in India. We also travel for destination weddings abroad. Travel and accommodation costs will be included in the package for events outside Hyderabad."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 2–3 months in advance for wedding seasons (especially November–February and April–June). For temple festivals and smaller events, 3–4 weeks notice is usually sufficient. Popular dates fill up fast, so early booking is always advisable."
  },
  {
    question: "What is the advance booking amount?",
    answer: "We require a 30% advance to confirm your booking. The remaining balance is due on the day of the event. We accept bank transfers, UPI, and cash payments."
  },
  {
    question: "How many artists perform in a typical package?",
    answer: "Depending on the package, our ensemble ranges from 6 to 14+ artists. The Basic package includes 6 musicians, the Premium package includes 10, and the Royal package includes the full band team. Custom configurations are also available on request."
  },
  {
    question: "Do you provide LED lights and sound equipment?",
    answer: "LED band lights are included in our Premium and Royal packages. For sound systems and microphones, we coordinate with your event venue or sound vendor. Please discuss specific requirements in advance so we can ensure seamless setup."
  },
  {
    question: "Can I request specific ragas or songs for my event?",
    answer: "Absolutely! We are happy to accommodate special requests for specific ragas, auspicious compositions (like Suprabhatam or Mangalashtakam), or popular devotional pieces. Please share your preferences during the booking consultation."
  },
  {
    question: "Do you handle corporate events or non-religious celebrations?",
    answer: "Yes, we perform at cultural programs, government events, inaugurations, and other grand celebrations where traditional South Indian music is desired. Please contact us to discuss your specific requirements."
  }
];

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-24 md:py-32 bg-[#080808] relative border-t border-gold/10">
      {/* Background shimmer */}
      <div className="absolute inset-0 bg-[url('/mandala-texture.png')] bg-repeat opacity-[0.03] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.2em] text-sm uppercase block mb-4">Got Questions?</span>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">
            Frequently <span className="text-gold italic">Asked</span>
          </h2>
        </div>

        {/* Accordion Items */}
        <div className="flex flex-col divide-y divide-gold/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className={`font-serif text-lg md:text-xl transition-colors duration-300 ${isOpen ? "text-gold" : "text-ivory group-hover:text-gold/80"}`}>
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-colors"
                  >
                    <Plus size={16} className="text-gold" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 font-sans text-ivory/60 text-base leading-relaxed font-light max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA nudge */}
        <div className="mt-16 text-center">
          <p className="text-ivory/40 text-sm font-light">
            Still have questions?{" "}
            <a href="/contact" className="text-gold underline underline-offset-4 hover:text-ivory transition-colors">
              Contact us directly
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
