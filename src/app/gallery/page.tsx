"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RoyalCTA } from "@/components/RoyalCTA";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { GalleryLightbox } from "@/components/GalleryLightbox";

// Reusing hero sequence frames as placeholders for luxury gallery
const galleryItems = [
  { type: "image", src: "/gallery/gallery_temple_festival.png", title: "Temple Festival", alt: "Nadaswaram ensemble performing at South Indian temple festival Brahmotsavam in Hyderabad" },
  { type: "image", src: "/gallery/gallery_bridal_entry.png", title: "Bridal Entry", alt: "Sannai Melam playing for traditional Telugu bridal entry procession at wedding ceremony" },
  { type: "image", src: "/gallery/gallery_muhurtham.png", title: "Muhurtham", alt: "Nadaswaram musicians performing at auspicious Telugu wedding muhurtham ceremony in Hyderabad" },
  { type: "image", src: "/gallery/gallery_grand_procession.png", title: "Grand Procession", alt: "Sri Thyagaraja Nadaswara Brundam leading grand baraat procession with Nadaswaram and Thavil" },
  { type: "image", src: "/gallery/gallery_traditional_setup.png", title: "Traditional Setup", alt: "Traditional Sannai Melam setup with Nadaswaram and Thavil instruments for Telugu wedding" },
  { type: "image", src: "/gallery/gallery_sannai_melam.png", title: "Sannai Melam", alt: "Full Sannai Melam ensemble of Nadaswaram and Thavil performing Carnatic classical music" },
  { type: "image", src: "/gallery/gallery_wedding_night.png", title: "Wedding Night", alt: "Nadaswaram musicians performing at evening Telugu wedding reception in Hyderabad" },
  { type: "image", src: "/gallery/gallery_cultural_event.png", title: "Cultural Event", alt: "Live Nadaswaram performance at South Indian cultural programme and classical music event" },
  { type: "image", src: "/gallery/gallery_thavil_performance.png", title: "Thavil Performance", alt: "Thavil drum artist performing alongside Nadaswaram at traditional South Indian wedding" },
];


export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="w-full flex min-h-screen flex-col bg-charcoal pt-20 relative">

      {/* Gallery Hero */}
      <section className="relative py-24 md:py-32 flex flex-col items-center justify-center border-b border-gold/10">
        <div className="absolute inset-0 bg-[url('/mandala-texture.png')] bg-repeat opacity-5 pointer-events-none" />

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold tracking-[0.3em] text-sm uppercase block mb-6 px-6"
        >
          Visual Legacy
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl text-ivory leading-tight mb-8 px-6 text-center"
        >
          Our <span className="text-gold italic">Gallery</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-ivory/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl text-center px-6"
        >
          A glimpse into the divine atmospheres we've created at weddings and sacred celebrations.
        </motion.p>
      </section>

      {/* Masonry/Grid Gallery */}
      <section className="py-24 max-w-7xl mx-auto px-6 w-full bg-[#080808]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={item.src}
                alt={item.alt ?? item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-[1px] bg-gold mb-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-300" />
                <h3 className="font-serif text-2xl text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.title}
                </h3>
              </div>

              {/* Outer Golden Border Reveal */}
              <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/30 transition-colors duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      <GalleryLightbox
        items={galleryItems}
        initialIndex={selectedIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      <RoyalCTA />
      <Footer />
    </main>
  );
}
