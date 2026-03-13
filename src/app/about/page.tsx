"use client";

import { motion } from "framer-motion";
import { RoyalCTA } from "@/components/RoyalCTA";
import { Footer } from "@/components/Footer";
import Image from "next/image";
export default function AboutPage() {
  return (
    <main className="w-full flex min-h-screen flex-col bg-charcoal pt-20 relative">
      
      {/* About Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="text-gold tracking-[0.3em] text-sm uppercase block mb-6">Our Legacy</span>
            <h1 className="font-serif text-5xl md:text-7xl text-ivory leading-tight mb-8">
              About <span className="text-gold italic">Us</span>
            </h1>
            <div className="w-24 h-[1px] bg-gold mb-8" />
            <p className="font-sans text-ivory/80 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Dedicated to preserving and performing the sacred art of Nadaswaram (Sannai Melam) and Thavil music.
            </p>
          </motion.div>

          {/* Abstract Image or Texture representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-[50vh] relative rounded-t-full border border-gold/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-charcoal/20 mix-blend-multiply z-10" />
            <Image 
              src="/gallery/gallery_traditional_setup.png" 
              alt="Traditional Instruments" 
              fill
              className="object-cover sepia-[.3] hover:sepia-0 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 md:py-32 relative bg-[#080808]">
        <div className="absolute inset-0 bg-[url('/mandala-texture.png')] bg-repeat opacity-5 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg md:prose-xl font-sans font-light text-ivory/70 max-w-none"
          >
            <p className="lead text-2xl text-ivory font-serif mb-8 border-l-2 border-gold pl-6 py-2">
              Sri Thyagaraja Nadaswara Brundam is a Hyderabad-based traditional music group dedicated to bridging the divine past with the joyous present.
            </p>
            
            <p className="mb-8">
              Nadaswaram is considered one of the most auspicious musical instruments in South Indian traditions, and our mission is to bring its divine sound to celebrations around the world. We believe that no traditional Telugu wedding is complete without the soul-stirring melodies of the Sannai Melam.
            </p>

            <h3 className="font-serif text-gold text-3xl mt-16 mb-8">Our Ensembles</h3>
            <p className="mb-8">
              We provide ensembles for a wide variety of sacred and festive occasions:
            </p>
            <ul className="space-y-4 mb-12 list-none p-0">
              {[
                "Telugu weddings and muhurtham ceremonies",
                "Grand reception entries",
                "Temple festivals and Brahmotsavams",
                "Religious poojas and homams",
                "Cultural events and inaugurations"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold/80" />
                  <span className="tracking-wide">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-serif text-gold text-3xl mt-16 mb-8">Global Reach, Deep Roots</h3>
            <p>
              While based in Hyderabad, our artists travel worldwide to serve the Telugu diaspora. With experienced musicians passing down techniques through generations, we ensure every event becomes spiritually uplifting and culturally memorable. Our authentic instruments are treated with reverence, carrying the weight of centuries of musical heritage.
            </p>
          </motion.div>
        </div>
      </section>

      <RoyalCTA />
      <Footer />
    </main>
  );
}
