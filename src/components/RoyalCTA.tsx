"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export const RoyalCTA = () => {
  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden flex items-center justify-center min-h-screen">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-[460px] mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative rounded-t-full border border-gold/30 pt-32 pb-24 px-6 md:px-12 text-center"
        >
          {/* Inner Border Accents */}
          <div className="absolute top-4 left-4 right-4 bottom-4 rounded-t-full border border-gold/10 pointer-events-none" />

          <span className="text-gold tracking-[0.25em] text-xs font-medium uppercase block mb-10">
            RESERVATION
          </span>

          <h2 className="font-serif text-[42px] leading-[1.15] text-white mb-8 tracking-wide">
            Make Your<br />
            Wedding<br />
            <span className="text-gold italic font-light">Truly Traditional</span>
          </h2>

          <p className="font-sans text-white/70 text-[15px] mb-12 max-w-[280px] mx-auto font-light leading-relaxed">
            Book Sri Thyagaraja Nadaswara Brundam for your special occasion and elevate your celebration with divine melodies.
          </p>

          <div className="flex flex-col items-center justify-center gap-5 w-full max-w-[320px] mx-auto relative z-20">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:9391145321"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gold text-[#1a1a1a] font-semibold tracking-[0.15em] text-sm hover:bg-white transition-colors"
            >
              <Phone size={18} strokeWidth={1.5} />
              CALL NOW
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919391145321"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-gold/40 text-gold font-semibold tracking-[0.15em] text-sm hover:bg-gold/5 transition-colors"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              WHATSAPP ENQUIRY
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
