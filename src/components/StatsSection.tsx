"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Weddings Performed",  sublabel: "Across India" },
  { value: 15,  suffix: "+", label: "Years of Legacy",     sublabel: "Of Sacred Music" },
  { value: 100, suffix: "+", label: "Temple Festivals",    sublabel: "Brahmotsavams & More" },
  { value: 4,   suffix: "",  label: "States Served",       sublabel: "Hyderabad & Beyond" },
];

function useCounter(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

const StatCard = ({
  value, suffix, label, sublabel, delay, started, index,
}: {
  value: number; suffix: string; label: string; sublabel: string; delay: number; started: boolean; index: number;
}) => {
  const count = useCounter(value, 2000, started);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center text-center p-8 md:p-10 group"
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent border border-gold/10 group-hover:border-gold/25 transition-colors duration-700" />
      
      {/* Ghost background number */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
      >
        <span className="font-serif text-[10rem] leading-none font-bold text-white/[0.025] tabular-nums translate-y-2">
          {value}{suffix}
        </span>
      </div>

      {/* Top decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={started ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: delay + 0.3 }}
        className="w-10 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-8 origin-center"
      />

      {/* Number with glow */}
      <div className="relative mb-2">
        {/* Gold glow behind number */}
        <div className="absolute inset-0 blur-2xl bg-gold/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <span
          className="relative font-serif tabular-nums leading-none"
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            background: "linear-gradient(135deg, #BF953F 0%, #FCF6BA 40%, #B38728 60%, #FBF5B7 80%, #aa771c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {count}{suffix}
        </span>
      </div>

      {/* Label */}
      <span className="font-serif text-ivory text-base md:text-lg mb-1 group-hover:text-gold transition-colors duration-500">
        {label}
      </span>

      {/* Sublabel */}
      <span className="font-sans text-ivory/30 text-xs tracking-[0.2em] uppercase">
        {sublabel}
      </span>

      {/* Bottom decorative dash */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={started ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: delay + 0.5 }}
        className="w-6 h-[1px] bg-gold/40 mt-6 origin-center"
      />
    </motion.div>
  );
};

export const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-[#080808] overflow-hidden">
      {/* Mandala texture */}
      <div className="absolute inset-0 bg-[url('/mandala-texture.png')] bg-repeat opacity-[0.04] pointer-events-none" />
      {/* Center radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_rgba(198,167,94,0.07)_0%,_transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold/70 tracking-[0.35em] text-xs uppercase font-sans block mb-4">
            Our Legacy
          </span>
          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            <div className="w-2 h-2 rounded-full border border-gold/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              delay={i * 0.15}
              started={inView}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
