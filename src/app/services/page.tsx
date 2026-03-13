"use client";

import { motion } from "framer-motion";
import { RoyalCTA } from "@/components/RoyalCTA";
import { Footer } from "@/components/Footer";
import { Music, Heart, Calendar, Star } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";

const servicesDetails = [
  {
    title: "Wedding Nadaswaram Performance",
    description: "Traditional Sannai Melam for Muhurtham ceremonies, wedding rituals, bridal entry, and traditional wedding moments.",
    icon: <Heart className="text-gold" size={32} />,
    delay: 0.1
  },
  {
    title: "Reception Music",
    description: "Instrumental music performances during wedding receptions and celebrations, setting a joyful and elegant atmosphere.",
    icon: <Star className="text-gold" size={32} />,
    delay: 0.2
  },
  {
    title: "Temple Festival Performances",
    description: "Live Nadaswaram and Thavil music for temple festivals, religious gatherings, and spiritual events, invoking deep devotion.",
    icon: <Calendar className="text-gold" size={32} />,
    delay: 0.3
  },
  {
    title: "Cultural Events",
    description: "Traditional instrumental music for cultural programs, community celebrations, and inaugurations.",
    icon: <Music className="text-gold" size={32} />,
    delay: 0.4
  }
];
export default function ServicesPage() {
  return (
    <main className="w-full flex min-h-screen flex-col bg-charcoal pt-20 relative">
      
      {/* Services Hero */}
      <section className="relative py-32 md:py-48 flex items-center justify-center border-b border-gold/10">
        <div className="absolute inset-0 bg-[url('/mandala-texture.png')] bg-repeat opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-charcoal pointer-events-none" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold tracking-[0.3em] text-sm uppercase block mb-6"
          >
            What We Offer
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-ivory leading-tight mb-8"
          >
            Our <span className="text-gold italic">Services</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-24 h-[1px] bg-gold mx-auto"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 relative bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {servicesDetails.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: service.delay }}
                viewport={{ once: true, margin: "-100px" }}
                className="group p-10 lg:p-14 border border-gold/10 bg-charcoal/40 hover:bg-charcoal transition-all duration-500 hover:border-gold/30 relative overflow-hidden flex flex-col items-start"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-125 transition-all duration-700 pointer-events-none origin-center">
                  {service.icon}
                </div>
                
                <div className="mb-8 p-5 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="font-serif text-3xl md:text-4xl text-ivory mb-6 group-hover:text-gold transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="font-sans text-ivory/60 text-lg leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section (from requirements) */}
      <section className="py-24 md:py-32 bg-charcoal relative border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold tracking-[0.2em] text-sm uppercase block mb-4">Pricing</span>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">
              Performance <span className="text-gold italic">Packages</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Basic", price: "10,000", features: ["6 musicians", "2 hours baraat", "Standard Instruments"] },
              { name: "Premium", price: "20,000", features: ["10 musicians", "LED lights", "Dhol included", "Extended performance"], recommended: true },
              { name: "Royal", price: "35,000", features: ["Full band team", "Shehnai entry", "LED band", "Grand procession", "Complete wedding coverage"] }
            ].map((pkg, i) => (
              <motion.div 
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`p-8 border ${pkg.recommended ? 'border-gold bg-gold/5 transform md:-translate-y-4' : 'border-gold/20 bg-charcoal/50'} relative flex flex-col`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-charcoal px-4 py-1 text-xs tracking-widest uppercase font-bold">
                    Recommended
                  </div>
                )}
                <h3 className="font-serif text-2xl text-ivory mb-2">{pkg.name} Package</h3>
                <div className="text-gold font-serif text-4xl mb-8 flex items-baseline gap-1">
                  <span className="text-2xl">₹</span>{pkg.price}
                </div>
                <ul className="flex flex-col gap-4 mb-8 flex-grow">
                  {pkg.features.map(f => (
                    <li key={f} className="text-ivory/70 text-sm flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className={`w-full py-3 text-center text-sm tracking-widest transition-colors ${pkg.recommended ? 'bg-gold text-charcoal hover:bg-ivory' : 'border border-gold/50 text-gold hover:bg-gold hover:text-charcoal'}`}>
                  ENQUIRE NOW
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion />

      <RoyalCTA />
      <Footer />
    </main>
  );
}
