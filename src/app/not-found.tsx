import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Home, Music } from "lucide-react";

export default function NotFound() {
  return (
    <main className="w-full flex min-h-screen flex-col bg-[#050505]">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('/mandala-texture.png')] bg-repeat opacity-5 pointer-events-none" />

      {/* Centered content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center relative z-10">

        {/* Decorative instrument icon */}
        <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-10">
          <Music size={36} strokeWidth={1} />
        </div>

        {/* 404 number */}
        <p className="font-serif text-[10rem] leading-none text-gold/10 select-none absolute pointer-events-none">
          404
        </p>

        {/* Message */}
        <span className="text-gold tracking-[0.35em] text-xs uppercase block mb-6 relative">
          Page Not Found
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-ivory leading-tight mb-6 relative">
          The music<br />
          <span className="text-gold italic">stopped here</span>
        </h1>
        <p className="text-ivory/50 font-light text-lg mb-14 max-w-md leading-relaxed relative">
          The page you&apos;re looking for doesn&apos;t exist, but the stage is always set at home.
        </p>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-gold/40 mb-14 relative" />

        {/* CTA */}
        <Link
          href="/"
          className="relative inline-flex items-center gap-3 px-10 py-4 border border-gold/40 text-gold text-sm tracking-[0.3em] uppercase hover:bg-gold/10 transition-colors duration-300 group"
        >
          <Home size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>
      </div>

      <Footer />
    </main>
  );
}
