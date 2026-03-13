"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Transition navbar background from transparent to solid after scrolling
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.95)"]
  );
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ["1px solid rgba(198, 167, 94, 0)", "1px solid rgba(198, 167, 94, 0.2)"]
  );

  return (
    <>
      <motion.nav
        style={{ backgroundColor, borderBottom }}
        className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="group flex items-center gap-3 md:gap-4 z-[60]">
            <Image 
              src="/logo.png" 
              alt="Sri Thyagaraja Nadaswara Brundam Logo" 
              width={90} 
              height={90} 
              className="w-16 md:w-20 h-auto object-contain drop-shadow-lg"
              priority
            />
            <div className="flex flex-col items-start">
              <span className="font-serif text-gold text-sm md:text-xl tracking-widest relative">
                SRI THYAGARAJA
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </span>
              <span className="font-sans text-ivory/70 text-[7px] md:text-[9px] tracking-[0.3em] uppercase mt-0.5 md:mt-1">
                Nadaswara Brundam
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 relative group ${
                  pathname === link.path ? "text-gold" : "text-ivory/80 hover:text-gold"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-gold/50 transition-all duration-300 group-hover:w-full ${pathname === link.path ? "w-full" : "w-0"}`} />
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2 border border-gold/30 text-gold text-sm tracking-wider hover:bg-gold/10 transition-colors duration-300"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gold z-[60] relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={26} strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={26} strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu — Full screen slide-in from right */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-sm z-[60] bg-[#080808] border-l border-gold/10 flex flex-col md:hidden overflow-y-auto"
            >
              {/* Subtle decorative top border */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

              {/* Header area */}
              <div className="px-8 pt-8 pb-6 border-b border-gold/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image 
                    src="/logo.png" 
                    alt="Sri Thyagaraja Nadaswara Brundam Logo" 
                    width={60} 
                    height={60} 
                    className="w-14 h-auto object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="font-serif text-gold text-sm tracking-widest block">SRI THYAGARAJA</span>
                    <span className="font-sans text-ivory/50 text-[7px] tracking-[0.3em] uppercase mt-0.5 block">Nadaswara Brundam</span>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Menu"
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold/50 transition-colors"
                >
                  <X size={18} strokeWidth={1.5} />
                </motion.button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col px-8 py-8 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-4 border-b border-gold/5 group transition-colors duration-200 ${
                        pathname === link.path ? "text-gold" : "text-ivory/80 hover:text-gold"
                      }`}
                    >
                      <span className="font-serif text-2xl tracking-wide">{link.name}</span>
                      {pathname === link.path && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="px-8 pb-10 flex flex-col gap-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 border border-gold/40 text-gold text-sm tracking-[0.3em] uppercase text-center hover:bg-gold/10 transition-colors"
                >
                  Book Now
                </Link>
                <a
                  href="tel:+919391145321"
                  className="flex items-center justify-center gap-2 text-ivory/40 text-xs tracking-widest hover:text-gold transition-colors"
                >
                  <Phone size={12} />
                  +91 93911 45321
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

