"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const StorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-charcoal relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/mandala-texture.png')] bg-repeat opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Typographic Story */}
        <motion.div style={{ opacity, y }} className="relative z-10 flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold tracking-[0.2em] text-sm uppercase">Our Legacy</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight mb-8">
            Sacred Sounds for<br />
            <span className="text-gold italic">Timeless Celebrations</span>
          </h2>
          
          <p className="font-sans text-ivory/70 text-lg leading-relaxed mb-6 font-light">
            Sri Thyagaraja Nadaswara Brundam is a professional traditional music ensemble based in Hyderabad, specializing in authentic Sannai Melam (Nadaswaram) and Thavil performances.
          </p>
          
          <p className="font-sans text-ivory/70 text-lg leading-relaxed mb-12 font-light">
            With years of experience performing at weddings, receptions, temple festivals, and religious ceremonies, our musicians bring sacred sound and cultural richness to every celebration. We proudly serve the Telugu community across India and worldwide.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-start"
          >
            <a 
              href="/about" 
              className="inline-block px-8 py-4 border border-gold/50 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 tracking-widest text-sm"
            >
              DISCOVER OUR STORY
            </a>
          </motion.div>
        </motion.div>

        {/* Visual Anchor (Can be replaced with actual band image) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-[60vh] lg:h-[80vh] w-full rounded-t-full border border-gold/20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gold/10 to-charcoal/90 z-10" />
          <Image 
            src="/gallery/gallery_sannai_melam.png" 
            alt="Authentic Sannai Melam Performance" 
            fill
            className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute bottom-12 left-0 right-0 z-20 text-center">
            <span className="font-serif text-gcbg-gold/80 block mb-2">Authentic</span>
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-ivory/60">Sannai Melam</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
