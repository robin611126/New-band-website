"use client";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-gold/20 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle mandala texture background fade */}
      <div className="absolute inset-0 bg-[url('/mandala-texture.png')] bg-repeat opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="group flex flex-col items-start text-left z-50">
            <span className="font-serif text-gold text-2xl tracking-widest relative">
              SRI THYAGARAJA
            </span>
            <span className="font-sans text-ivory/70 text-[10px] tracking-[0.3em] uppercase mt-1">
              Nadaswara Brundam
            </span>
          </Link>
          <p className="text-ivory/60 text-sm leading-relaxed mt-2 max-w-xs">
            Authentic Sannai Melam and Thavil performances preserving the sacred art of South Indian classical music for global celebrations.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-gold text-lg tracking-wider mb-2">QUICK LINKS</h3>
          <div className="flex flex-col gap-3">
            {[
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" }
            ].map((link) => (
              <Link key={link.name} href={link.path} className="text-ivory/70 hover:text-gold text-sm tracking-widest transition-colors w-fit">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-gold text-lg tracking-wider mb-2">CONTACT US</h3>
          <div className="flex flex-col gap-4">
            <a href="tel:+919391145321" className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors text-sm">
              <Phone size={16} className="text-gold" />
              <span className="tracking-wider">+91 93911 45321</span>
            </a>
            <a href="mailto:karthikraghavendra1@gmail.com" className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors text-sm">
              <Mail size={16} className="text-gold" />
              <span className="tracking-wider break-all">karthikraghavendra1@gmail.com</span>
            </a>
            <div className="flex items-start gap-3 text-ivory/70 text-sm">
              <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
              <span className="tracking-wider leading-relaxed">
                Hyderabad, Telangana
                <br />Available Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between text-xs text-ivory/40 tracking-widest relative z-10">
        <p>© {new Date().getFullYear()} Sri Thyagaraja Nadaswara Brundam. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Preserving Musical Heritage</p>
      </div>
    </footer>
  );
};
