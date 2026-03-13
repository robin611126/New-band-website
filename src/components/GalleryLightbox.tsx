"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  type: string;
  src: string;
  title: string;
  alt?: string;
}

interface GalleryLightboxProps {
  items: GalleryItem[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const GalleryLightbox = ({
  items,
  initialIndex,
  isOpen,
  onClose,
}: GalleryLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Update currentIndex if initialIndex changes when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      // Lock body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Top Bar: Counter & Close Button */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10 bg-gradient-to-b from-charcoal/80 to-transparent">
          <div className="text-ivory/80 font-serif tracking-widest text-sm">
            {currentIndex + 1} <span className="text-gold">/</span> {items.length}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-ivory/60 hover:text-gold transition-colors p-2"
            aria-label="Close"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-ivory/40 hover:text-gold transition-colors p-4 z-10 hidden md:block"
          aria-label="Previous"
        >
          <ChevronLeft size={48} strokeWidth={1} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-ivory/40 hover:text-gold transition-colors p-4 z-10 hidden md:block"
          aria-label="Next"
        >
          <ChevronRight size={48} strokeWidth={1} />
        </button>

        {/* Main Image Container */}
        <div 
          className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center p-4 md:p-12"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full h-full"
            // Basic swipe handling for mobile
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                handleNext();
              } else if (swipe > swipeConfidenceThreshold) {
                handlePrevious();
              }
            }}
          >
            <Image
              src={currentItem.src}
              alt={currentItem.alt ?? currentItem.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            
            {/* Image Title at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full flex justify-center text-center">
               <h3 className="font-serif text-xl md:text-2xl text-gold mt-4 md:mt-8 tracking-wide">
                 {currentItem.title}
               </h3>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Helpers for swipe detection
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
