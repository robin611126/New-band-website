"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="w-full flex min-h-screen flex-col bg-charcoal pt-20 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/mandala-texture.png')] bg-repeat opacity-5 pointer-events-none" />
      
      {/* Hero Skeleton Area */}
      <section className="relative py-24 md:py-32 flex flex-col items-center justify-center border-b border-gold/5 w-full">
        {/* Eyebrow skeleton */}
        <motion.div 
          className="h-4 w-32 bg-gold/10 rounded-full mb-8 relative overflow-hidden"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Title skeleton */}
        <motion.div 
          className="h-16 md:h-24 w-[80%] max-w-3xl bg-white/5 rounded-lg mb-6 relative"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Subtitle skeleton */}
        <motion.div 
          className="h-6 w-[60%] max-w-xl bg-white/5 rounded-full relative"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

      {/* Grid Skeleton Area (like Gallery/Services) */}
      <section className="py-24 max-w-7xl mx-auto px-6 w-full flex-grow flex items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <motion.div
              key={item}
              className="w-full aspect-[4/5] bg-white/5 rounded-md relative overflow-hidden border border-gold/5"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ 
                duration: 2, 
                delay: index * 0.15, // Staggered pulsing effect
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              {/* Shimmer effect overlay */}
              <motion.div 
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/5 to-transparent skew-x-[-20deg]"
                animate={{ translateX: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
