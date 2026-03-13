"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { FormEvent, useState } from "react";
export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <main className="w-full flex min-h-screen flex-col bg-[#050505] pt-20 relative">
      
      {/* Contact Hero */}
      <section className="relative py-24 md:py-32 flex flex-col items-center justify-center border-b border-gold/10">
        <div className="absolute inset-0 bg-[url('/mandala-texture.png')] bg-repeat opacity-5 pointer-events-none" />
        
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold tracking-[0.3em] text-sm uppercase block mb-6 px-6"
        >
          Book Your Event
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl text-ivory leading-tight mb-8 px-6 text-center"
        >
          Get In <span className="text-gold italic">Touch</span>
        </motion.h1>
      </section>

      {/* Contact Interaction Area */}
      <section className="py-24 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        
        {/* Direct Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col justify-center"
        >
          <h2 className="font-serif text-4xl text-ivory mb-6">Let's Discuss Your Special Day</h2>
          <div className="w-16 h-[1px] bg-gold mb-8" />
          <p className="text-ivory/70 font-light text-lg mb-12 leading-relaxed">
            Reserve Sri Thyagaraja Nadaswara Brundam for an unforgettable traditional music experience at your wedding or temple festival. We are based in Hyderabad, Telangana, but available worldwide for destination celebrations.
          </p>

          <div className="flex flex-col gap-8">
            <a href="tel:+919391145321" className="group flex items-start gap-6">
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
                <Phone size={24} />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-ivory/50 uppercase tracking-widest text-xs mb-1 font-bold">Call / WhatsApp</span>
                <span className="font-serif text-xl text-ivory group-hover:text-gold transition-colors">+91 93911 45321</span>
              </div>
            </a>

            <a href="mailto:karthikraghavendra1@gmail.com" className="group flex items-start gap-6">
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
                <Mail size={24} />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-ivory/50 uppercase tracking-widest text-xs mb-1 font-bold">Email Enquiry</span>
                <span className="font-serif text-xl text-ivory group-hover:text-gold transition-colors break-all">
                  karthikraghavendra1@gmail.com
                </span>
              </div>
            </a>

            <div className="group flex items-start gap-6">
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                <MapPin size={24} />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-ivory/50 uppercase tracking-widest text-xs mb-1 font-bold">Location</span>
                <span className="font-serif text-xl text-ivory leading-relaxed">
                  Hyderabad<br />
                  <span className="text-lg text-ivory/80 font-sans font-light">Available for travel nationwide & internationally.</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enquiry Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-charcoal/50 border border-gold/20 p-10 lg:p-14 relative backdrop-blur-sm">
            <div className="absolute inset-2 border border-gold/5 pointer-events-none" />
            
            {status === "sent" ? (
              <div className="min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center text-gold mb-6">
                  <Send size={32} />
                </div>
                <h3 className="font-serif text-3xl text-ivory mb-4">Request Sent</h3>
                <p className="text-ivory/70 font-light">We will contact you shortly to confirm your booking.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 px-8 py-3 bg-transparent border border-gold/50 text-gold tracking-widest text-sm hover:bg-gold/10 transition-colors"
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-ivory/60 uppercase tracking-widest text-xs">Full Name</label>
                  <input required type="text" id="name" className="bg-transparent border-b border-gold/30 p-3 text-ivory focus:border-gold outline-none transition-colors" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-ivory/60 uppercase tracking-widest text-xs">Phone Number</label>
                    <input required type="tel" id="phone" className="bg-transparent border-b border-gold/30 p-3 text-ivory focus:border-gold outline-none transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="date" className="text-ivory/60 uppercase tracking-widest text-xs">Event Date</label>
                    <input required type="date" id="date" className="bg-transparent border-b border-gold/30 p-3 text-ivory focus:border-gold outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="eventType" className="text-ivory/60 uppercase tracking-widest text-xs">Event Type</label>
                    <select required defaultValue="" id="eventType" className="bg-charcoal border-b border-gold/30 p-3 text-ivory focus:border-gold outline-none transition-colors cursor-pointer appearance-none">
                      <option value="" disabled>Select Event...</option>
                      <option value="wedding">Wedding / Muhurtham</option>
                      <option value="reception">Reception</option>
                      <option value="temple">Temple Festival</option>
                      <option value="cultural">Cultural Event</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="location" className="text-ivory/60 uppercase tracking-widest text-xs">Location</label>
                    <input required type="text" id="location" className="bg-transparent border-b border-gold/30 p-3 text-ivory focus:border-gold outline-none transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                  <label htmlFor="message" className="text-ivory/60 uppercase tracking-widest text-xs">Specific Requirements</label>
                  <textarea rows={3} id="message" className="bg-transparent border-b border-gold/30 p-3 text-ivory focus:border-gold outline-none transition-colors resize-none" />
                </div>

                <button 
                  disabled={status === "sending"}
                  type="submit" 
                  className="w-full py-4 bg-gold text-charcoal font-medium tracking-widest text-sm hover:bg-ivory transition-colors disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {status === "sending" ? "SENDING..." : "SEND ENQUIRY"}
                    <Send size={16} className={status === "sending" ? "animate-pulse" : "group-hover:translate-x-2 transition-transform"} />
                  </span>
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </section>

      <Footer />
    </main>
  );
}
