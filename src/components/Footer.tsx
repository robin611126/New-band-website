"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#050505] border-t border-gold/20 pt-14 md:pt-16 pb-8 relative overflow-hidden">
      {/* Subtle mandala texture background fade */}
      <div className="absolute inset-0 bg-[url('/mandala-texture.png')] bg-repeat opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      {/* Decorative radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Mobile: Centered layout | Desktop: 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-12">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left pb-8 md:pb-0">
            <Link href="/" className="group flex flex-col items-center md:items-start">
              <Image 
                src="/logo.png" 
                alt="Sri Thyagaraja Nadaswara Brundam Logo" 
                width={200} 
                height={60} 
                className="w-[100px] md:w-[200px] h-auto object-contain"
              />
            </Link>
            <p className="text-ivory/50 text-[13px] leading-relaxed max-w-[280px]">
              Authentic Sannai Melam and Thavil performances preserving the sacred art of South Indian classical music.
            </p>
          </div>

          {/* Decorative divider - mobile only */}
          <div className="flex items-center gap-4 md:hidden py-2">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/30" />
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          </div>

          {/* Quick Links + Contact — side by side on mobile, separate columns on desktop */}
          <div className="grid grid-cols-2 md:contents gap-6 py-6 md:py-0">

            {/* Quick Links Column */}
            <div className="flex flex-col items-start gap-3">
              <h3 className="font-serif text-gold text-sm md:text-lg tracking-wider">QUICK LINKS</h3>
              <div className="flex flex-col gap-2.5 md:gap-3">
                {[
                  { name: "About Us", path: "/about" },
                  { name: "Services", path: "/services" },
                  { name: "Gallery", path: "/gallery" },
                  { name: "Testimonials", path: "/testimonials" },
                  { name: "Blog", path: "/blog" },
                  { name: "Contact", path: "/contact" }
                ].map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.path} 
                    className="text-ivory/60 hover:text-gold text-[13px] md:text-sm tracking-wider transition-colors duration-300 w-fit group flex items-center gap-1"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col items-start gap-3">
              <h3 className="font-serif text-gold text-sm md:text-lg tracking-wider">CONTACT US</h3>
              <div className="flex flex-col items-start gap-4">
                <a 
                  href="tel:+919391145321" 
                  className="flex items-center gap-2.5 text-ivory/60 hover:text-gold transition-colors duration-300 text-[13px] md:text-sm group"
                >
                  <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gold/20 group-hover:border-gold/50 group-hover:bg-gold/10 flex items-center justify-center transition-all duration-300 shrink-0">
                    <Phone size={13} className="text-gold" />
                  </span>
                  <span className="tracking-wider">+91 93911 45321</span>
                </a>
                <a 
                  href="mailto:karthikraghavendra1@gmail.com" 
                  className="flex items-center gap-2.5 text-ivory/60 hover:text-gold transition-colors duration-300 text-[13px] md:text-sm group"
                >
                  <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gold/20 group-hover:border-gold/50 group-hover:bg-gold/10 flex items-center justify-center transition-all duration-300 shrink-0">
                    <Mail size={13} className="text-gold" />
                  </span>
                  <span className="tracking-wider break-all">karthikraghavendra1@gmail.com</span>
                </a>
                <div className="flex items-center gap-2.5 text-ivory/60 text-[13px] md:text-sm">
                  <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gold/20 flex items-center justify-center shrink-0">
                    <MapPin size={13} className="text-gold" />
                  </span>
                  <span className="tracking-wider leading-relaxed">
                    Hyderabad, Telangana
                    <br />Available Worldwide
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-14 pt-6 md:pt-8 border-t border-gold/10">
          <div className="flex flex-col items-center gap-3 text-[11px] text-ivory/40 tracking-widest">
            <p className="text-center">© {new Date().getFullYear()} Sri Thyagaraja Nadaswara Brundam. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Designed with <span className="text-red-500 animate-pulse text-xs">❤️</span> by{" "}
              <a
                href="https://www.getwebfast.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-medium hover:text-gold/80 transition-colors relative group"
              >
                GET WEB FAST
                <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-gold/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
