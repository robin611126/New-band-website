"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Music, Heart, Calendar, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Wedding Nadaswaram",
    description:
      "Traditional music for Telugu weddings, muhurtham ceremonies, and bridal entry. An auspicious start filled with divine melody.",
    icon: <Heart size={20} />,
    image: "/services/wedding-nadaswaram.png",
    tag: "Weddings",
    gradient: "from-amber-900/80 via-black/60 to-black/90",
  },
  {
    title: "Temple Festivals",
    description:
      "Live Nadaswaram and Thavil performances for temple events and spiritual celebrations that resonate with devotion.",
    icon: <Calendar size={20} />,
    image: "/services/temple-festival.png",
    tag: "Festivals",
    gradient: "from-orange-950/80 via-black/60 to-black/90",
  },
  {
    title: "Sannai Melam",
    description:
      "Sacred and festive performances for wedding processions and receptions, bringing centuries of tradition alive.",
    icon: <Music size={20} />,
    image: "/services/sannai-melam.png",
    tag: "Processions",
    gradient: "from-yellow-950/80 via-black/60 to-black/90",
  },
];

export const ServicePreview = () => {
  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gold tracking-[0.3em] text-xs uppercase block mb-5 font-medium"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-ivory leading-tight"
            >
              Divine Melodies for Every{" "}
              <span className="text-gold italic">Occasion</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/services"
              className="group flex items-center gap-2 text-gold tracking-widest text-xs hover:text-ivory transition-colors whitespace-nowrap"
            >
              VIEW ALL SERVICES
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-2"
              />
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 select-none">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative h-[480px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${service.gradient} transition-opacity duration-500`}
              />

              {/* Gold shimmer line at top */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent group-hover:w-full transition-all duration-700 ease-out" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 backdrop-blur-sm border border-gold/20 text-gold text-xs font-medium tracking-wider">
                    <span className="text-gold">{service.icon}</span>
                    {service.tag}
                  </span>

                  <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-gold/40 -translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={15} className="text-gold" />
                  </div>
                </div>

                {/* Bottom content */}
                <div>
                  {/* Divider line */}
                  <div className="w-10 h-[1px] bg-gold/40 mb-5 group-hover:w-20 transition-all duration-500" />

                  <h3 className="font-serif text-2xl text-white mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light max-w-xs">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 mt-5 text-gold/70 text-xs tracking-widest group-hover:text-gold transition-colors duration-300"
                  >
                    LEARN MORE
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>

              {/* Bottom border glow */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 flex items-center gap-6"
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-gold/20 to-transparent" />
          <span className="text-gold/30 text-xs tracking-[0.3em] uppercase">
            Since 1985 · Hyderabad
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-gold/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
