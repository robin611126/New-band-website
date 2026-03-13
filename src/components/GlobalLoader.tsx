"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const GlobalLoader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="splash-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030303]"
          >
            <div className="absolute inset-0 bg-[url('/mandala-texture.png')] bg-repeat opacity-5" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Elegant geometric ornament */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="relative w-24 h-24 mb-8 flex items-center justify-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gold/30 rounded-full blur-[20px]"
                />
                <div className="absolute w-12 h-12 md:w-16 md:h-16 border border-gold/40 rotate-45" />
                <div className="absolute w-12 h-12 md:w-16 md:h-16 border border-gold/40" />
                <div className="absolute w-8 h-8 md:w-10 md:h-10 border border-gold/20 rounded-full" />
                <div className="absolute w-1.5 h-1.5 bg-gold/80 rounded-full" />
              </motion.div>

              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="font-serif text-ivory/90 text-sm md:text-lg tracking-[0.4em] uppercase text-center mb-8"
                >
                  Sri Thyagaraja{" "}
                  <span className="text-gold italic normal-case tracking-wider mx-1">Nadaswara</span>{" "}
                  Brundam
                </motion.div>

                <div className="w-32 md:w-48 h-[1px] bg-gold/10 relative overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content always rendered — loader sits on top as fixed overlay */}
      {children}
    </>
  );
};
