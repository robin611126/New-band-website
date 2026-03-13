"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1], // Custom cinematic ease (similar to Apple/premium sites)
        }}
        className="w-full h-full flex flex-col"
      >
        {/* Only render children after mount to avoid hydration mismatch with complex Framer Motion trees */}
        {isMounted ? children : null}
      </motion.div>
    </AnimatePresence>
  );
};
