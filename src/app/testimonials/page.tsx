"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Footer } from "@/components/Footer";
import { RoyalCTA } from "@/components/RoyalCTA";

const testimonials = [
  {
    name: "Ravi Kumar Reddy",
    event: "Telugu Wedding, Hyderabad",
    rating: 5,
    quote:
      "The music added a divine atmosphere to our wedding ceremony. From the muhurtham to the reception, Sri Thyagaraja Nadaswara Brundam made every moment sacred and unforgettable. Highly recommended for traditional Telugu weddings.",
  },
  {
    name: "Lakshmi Devi",
    event: "Temple Festival, Secunderabad",
    rating: 5,
    quote:
      "Authentic Nadaswaram and Thavil performance. Our temple festival felt truly special and spiritually elevating. The musicians were professional and deeply respectful of the ceremony.",
  },
  {
    name: "Srinivas Rao",
    event: "Wedding, Vijayawada",
    rating: 5,
    quote:
      "Our wedding felt truly traditional because of the beautiful Nadaswaram music. The bridal entry with Sannai Melam was the highlight everyone still talks about. Worth every penny.",
  },
  {
    name: "Padma Balaji",
    event: "Reception, Hyderabad",
    rating: 5,
    quote:
      "We wanted something different for our son's reception and Sri Thyagaraja delivered beyond expectations. The live instrumental music added so much grandeur to the entire evening.",
  },
  {
    name: "Temple Committee, ISKCON",
    event: "Annual Brahmotsavam",
    rating: 5,
    quote:
      "We have been engaging them for our annual festivals for three years now. Their devotion to the art form and punctuality is commendable. The Nadaswaram resonates beautifully within our temple halls.",
  },
  {
    name: "Geetha Krishnamurthy",
    event: "Cultural Event, USA",
    rating: 5,
    quote:
      "They flew to the US for our Telugu cultural event. Despite the travel, the performance was flawless and took everyone back to their roots. Truly world-class traditional musicians.",
  },
];
export default function TestimonialsPage() {
  return (
    <main className="w-full flex min-h-screen flex-col bg-charcoal pt-20 relative">
      {/* Hero */}
      <section className="relative py-24 md:py-36 flex flex-col items-center justify-center border-b border-gold/10">
        <div className="absolute inset-0 bg-[url('/mandala-texture.png')] bg-repeat opacity-5 pointer-events-none" />
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold tracking-[0.3em] text-sm uppercase block mb-6 px-6 text-center"
        >
          What Our Clients Say
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl text-ivory leading-tight mb-8 px-6 text-center"
        >
          Testimonials
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-24 h-[1px] bg-gold mx-auto"
        />
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 md:py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group p-10 border border-gold/10 bg-charcoal/40 hover:bg-charcoal hover:border-gold/30 transition-all duration-500 flex flex-col gap-6 relative overflow-hidden"
            >
              {/* Large quote mark */}
              <span className="absolute top-4 right-6 font-serif text-8xl text-gold/5 select-none leading-none">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-ivory/70 text-base leading-relaxed font-light italic flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-[1px] bg-gold/20" />

              {/* Attribution */}
              <div>
                <p className="font-serif text-ivory text-lg group-hover:text-gold transition-colors">
                  {t.name}
                </p>
                <p className="font-sans text-ivory/50 text-sm tracking-wider mt-1">
                  {t.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <RoyalCTA />
      <Footer />
    </main>
  );
}
