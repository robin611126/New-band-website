"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    slug: "importance-of-nadaswaram-in-telugu-weddings",
    title: "Importance of Nadaswaram in Telugu Weddings",
    excerpt:
      "The Nadaswaram is not merely music—it is a blessing. Discover why no traditional Telugu wedding is considered complete without the auspicious sound of Sannai Melam playing through sacred rituals.",
    readTime: "5 min read",
    tag: "Tradition",
  },
  {
    slug: "traditional-music-in-south-indian-weddings",
    title: "Traditional Music in South Indian Weddings",
    excerpt:
      "From the Tamil Nadu Brahmin weddings to Telugu Kshatriya celebrations, traditional instrumental music forms the sonic backbone of South Indian matrimonial ceremonies.",
    readTime: "6 min read",
    tag: "Culture",
  },
  {
    slug: "why-nadaswaram-is-played-in-temple-festivals",
    title: "Why Nadaswaram is Played in Temple Festivals",
    excerpt:
      "Nadaswaram has deep roots in temple culture. Explore how this divine instrument has been the voice of temples for over a thousand years and continues to invoke devotion.",
    readTime: "4 min read",
    tag: "Spirituality",
  },
  {
    slug: "history-of-sannai-melam",
    title: "History of Sannai Melam: A Royal Legacy",
    excerpt:
      "Trace the origins of Sannai Melam from the royal courts of the Vijayanagara Empire to modern South Indian celebrations. A journey through time and sound.",
    readTime: "7 min read",
    tag: "History",
  },
];
export default function BlogPage() {
  return (
    <main className="w-full flex min-h-screen flex-col bg-charcoal pt-20 relative">
      {/* Hero */}
      <section className="relative py-24 md:py-36 flex flex-col items-center justify-center border-b border-gold/10">
        <div className="absolute inset-0 bg-[url('/mandala-texture.png')] bg-repeat opacity-5 pointer-events-none" />
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold tracking-[0.3em] text-sm uppercase block mb-6 text-center"
        >
          Knowledge & Heritage
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl text-ivory leading-tight mb-8 px-6 text-center"
        >
          Our <span className="text-gold italic">Blog</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-ivory/60 text-lg font-light max-w-2xl text-center px-6"
        >
          Celebrating the rich tradition of Nadaswaram music, South Indian
          wedding heritage, and cultural stories.
        </motion.p>
      </section>

      {/* Blog Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: (index % 2) * 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group border border-gold/10 bg-[#080808] hover:border-gold/30 transition-all duration-500 overflow-hidden"
            >
              {/* Color-coded top bar by tag */}
              <div className="h-[2px] w-full bg-gradient-to-r from-gold/60 to-maroon/60" />

              <div className="p-10 flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold border border-gold/30 px-3 py-1">
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-ivory/40 text-xs">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl text-ivory leading-tight group-hover:text-gold transition-colors duration-300">
                  {post.title}
                </h2>

                <p className="font-sans text-ivory/60 text-base leading-relaxed font-light">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-2 text-gold tracking-widest text-sm mt-2 group/link w-fit"
                >
                  READ MORE
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/link:translate-x-2"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
