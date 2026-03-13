"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if it's a touch device
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Skip cursor logic on mobile
    if (isMobile) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Add hover effect to interactive elements
    const interactiveSelectors = [
      'a', 'button', 'input', 'textarea', 'select', 
      '[role="button"]', '[tabindex]:not([tabindex="-1"])',
      '.custom-cursor-hover' // Custom class for arbitrary elements
    ];

    const attachHoverListeners = () => {
      document.querySelectorAll(interactiveSelectors.join(',')).forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    attachHoverListeners();

    // Re-attach on DOM mutations (for client-side routing and dynamic content)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          attachHoverListeners();
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Hide default cursor globally when custom cursor is active
    document.body.style.cursor = "none";
    document.querySelectorAll('*').forEach((el) => {
       const htmlEl = el as HTMLElement;
       if (htmlEl.style) {
         // Only apply none to elements that don't have explicit cursors or our cursor logic handles
         // A simpler approach is to use pure CSS, which we'll add in globals.css
       }
    });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      
      document.querySelectorAll(interactiveSelectors.join(',')).forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
      observer.disconnect();
      document.body.style.cursor = "auto";
    };
  }, [isVisible, isMobile]);

  if (isMobile) return null;

  const variants = {
    default: {
      x: mousePosition.x - 6, // Center the 12px dot
      y: mousePosition.y - 6,
      opacity: isVisible ? 1 : 0,
      scale: 1,
      backgroundColor: "rgb(204, 163, 86)", // Gold color
      mixBlendMode: "normal" as any,
    },
    hover: {
      x: mousePosition.x - 24, // Center the 48px circle
      y: mousePosition.y - 24,
      opacity: isVisible ? 0.3 : 0,
      scale: 1,
      backgroundColor: "rgb(204, 163, 86)",
      mixBlendMode: "screen" as any,
      width: 48,
      height: 48,
    }
  };

  // Clean and elegant cursor: a small solid dot and a larger hollow ring that follows slightly behind
  const dotVariants = {
    default: {
      x: mousePosition.x - 4, // 8px dot
      y: mousePosition.y - 4,
      opacity: isVisible ? 1 : 0,
      scale: 1,
      backgroundColor: "rgb(204, 163, 86)", // Gold
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: isVisible ? 0 : 0, // Hide dot on hover
      scale: 0,
      backgroundColor: "rgb(204, 163, 86)",
    }
  };

  const ringVariants = {
    default: {
      x: mousePosition.x - 20, // 40px ring
      y: mousePosition.y - 20,
      opacity: isVisible ? 0.5 : 0,
      scale: 1,
      backgroundColor: "transparent",
      border: "1px solid rgb(204, 163, 86)",
      width: 40,
      height: 40,
      mixBlendMode: "normal" as any,
    },
    hover: {
      x: mousePosition.x - 30, // 60px filled circle on hover
      y: mousePosition.y - 30,
      opacity: isVisible ? 0.15 : 0,
      scale: 1,
      backgroundColor: "rgb(204, 163, 86)",
      border: "0px solid rgb(204, 163, 86)",
      width: 60,
      height: 60,
      mixBlendMode: "screen" as any,
    }
  };

  return (
    <>
      {/* Outer Ring / Hover Background */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        variants={ringVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.5,
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        variants={dotVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 30,
          mass: 0.1,
        }}
      />
    </>
  );
};
