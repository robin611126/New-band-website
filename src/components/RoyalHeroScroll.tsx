"use client";

import { useRef, useEffect } from "react";
import { useScroll, motion, useMotionValueEvent, useTransform, AnimatePresence } from "framer-motion";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { useScrollFrameSequence } from "@/hooks/useScrollFrameSequence";

export const RoyalHeroScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Track scroll progress within this specific component container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // There are 120 frames extracted from ezgif-frame-001.jpg to ezgif-frame-120.jpg
  const frameCount = 120;
  const { images, loaded } = useImagePreloader(frameCount, "/hero-sequence/ezgif-frame-", 3, "webp");

  // Map scroll progress 0-1 to frame index 0-119
  const frameIndex = useScrollFrameSequence(scrollYProgress, frameCount);

  // Extract drawing logic to a unified function
  const renderFrame = (index: number) => {
    if (!loaded || !canvasRef.current || !images[index]) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = images[index];

    if (!ctx || !img) return;

    // Clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate aspect ratio to cover canvas like object-fit: cover
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      // Shift left: use 0.05 instead of 0.2 — shows more of the left portion
      offsetX = (canvas.width - drawWidth) * 0.05;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // 1. Render initial frame immediately when images finish loading
  useEffect(() => {
    if (loaded) {
      // Small timeout ensures canvas is fully painted in DOM
      setTimeout(() => renderFrame(0), 50);
    }
  }, [loaded]);

  // 2. Draw specific frame to canvas when scroll changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(Math.round(latest));
  });

  // Calculate text opacity based on scroll position - fade out gracefully
  // Calculate text opacity based on scroll position - fade out gracefully by frame 29
  // 29 frames out of 120 is roughly 0.24 scroll progress
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.24], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.24], [0, -100]);

  return (
    <div ref={containerRef} className="h-[400vh] relative bg-charcoal">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Canvas for rendering frames */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />

        {/* Gradient overlays to darken canvas and make text readable */}
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/60" />

        {/* Cinematic Animated Text */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 w-full h-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center w-full max-w-7xl mx-auto flex flex-col items-center justify-center"
          >
            <span className="font-sans text-gold/80 tracking-[0.4em] uppercase text-xs md:text-sm mb-6 drop-shadow-md">
              A Symphony of Heritage
            </span>
            <h1
              className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight leading-[1.1] mb-10 text-transparent bg-clip-text bg-gradient-to-b from-ivory via-ivory to-ivory/70 drop-shadow-2xl px-4"
              style={{ textShadow: "0px 4px 40px rgba(0,0,0,0.8)" }}
            >
              THE ROYAL SOUND<br />
              <span className="text-gold italic font-light">OF TRADITION</span>
            </h1>

            <div className="flex items-center justify-center gap-4 mb-10 w-full max-w-md opacity-80">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-gold" />
              <div className="w-2 h-2 rotate-45 border border-gold shrink-0" />
              <div className="h-[1px] w-full bg-gradient-to-l from-transparent to-gold" />
            </div>

            <p className="font-sans text-ivory/90 text-lg sm:text-xl md:text-2xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4">
              Experience the prestige of authentic Indian instrumental music
              with Sri Thyagaraja Nadaswara Brundam.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gold/60 text-xs tracking-[0.3em] uppercase mb-4">Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent opacity-50 relative overflow-hidden">
            <motion.div
              className="absolute top-0 w-full h-1/2 bg-gold"
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
