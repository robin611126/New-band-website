import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { RoyalCTA } from "@/components/RoyalCTA";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Image from "next/image";

// Define the blog content data
const blogContent: Record<string, any> = {
  "importance-of-nadaswaram-in-telugu-weddings": {
    title: "Importance of Nadaswaram in Telugu Weddings",
    date: "March 10, 2026",
    readTime: "5 min read",
    tag: "Tradition",
    image: "/gallery/gallery_muhurtham.png",
    content: `
      <p class="lead text-2xl text-ivory font-serif mb-8 border-l-2 border-gold pl-6 py-2">
        The Nadaswaram is not merely music—it is a blessing. Discover why no traditional Telugu wedding is considered complete without the auspicious sound of Sannai Melam playing through sacred rituals.
      </p>
      
      <p class="mb-6">
        In the rich tapestry of South Indian culture, particularly in Telugu weddings, the <strong>Nadaswaram</strong> (also known as Sannai Melam) holds a place of profound significance. It is considered a <em>Mangala Vadyam</em>—an auspicious instrument whose very sound is believed to ward off evil and invite divine blessings.
      </p>

      <h3 class="font-serif text-gold text-2xl mt-12 mb-6">The Sound of the Gods</h3>
      <p class="mb-6">
        Legend has it that the Nadaswaram is the musical embodiment of the divine. The instrument's majestic, piercing yet sweet sound has the unique ability to carry over long distances, announcing joyous occasions to the entire community. In a traditional Telugu wedding, the Sannai Melam is present at every critical juncture.
      </p>

      <h3 class="font-serif text-gold text-2xl mt-12 mb-6">Key Moments Accompanied by Nadaswaram</h3>
      <ul class="space-y-4 mb-8 list-none p-0">
        <li class="flex items-start gap-4">
          <div class="w-2 h-2 rounded-full bg-gold/80 mt-2 shrink-0"></div>
          <div>
            <strong class="text-ivory">Mangala Snanam (Holy Bath):</strong> 
            The day begins with the soothing morning ragas playing in the background as the bride and groom prepare for the ceremonies.
          </div>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-2 h-2 rounded-full bg-gold/80 mt-2 shrink-0"></div>
          <div>
            <strong class="text-ivory">Gowri Pooja & Edurukolu:</strong> 
            As the families meet and welcome each other, joyous and celebratory tunes set the festive mood.
          </div>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-2 h-2 rounded-full bg-gold/80 mt-2 shrink-0"></div>
          <div>
            <strong class="text-ivory">Jeelakarra Bellam & Mangalasutram:</strong> 
            At the exact moment of the Muhurtham, the musicians play at a crescendo to drown out any inauspicious sounds, creating a protective sonic envelope around the couple.
          </div>
        </li>
      </ul>

      <p class="mb-6">
        At Sri Thyagaraja Nadaswara Brundam, we recognize the immense spiritual responsibility we carry during these moments. Our musicians are trained not just in the technicalities of the ragas, but in the spiritual significance of playing at a Muhurtham. We ensure that the sacred vibrations invoke the blessings of the divine for the newly married couple.
      </p>
    `
  },
  "traditional-music-in-south-indian-weddings": {
    title: "Traditional Music in South Indian Weddings",
    date: "March 5, 2026",
    readTime: "6 min read",
    tag: "Culture",
    image: "/gallery/gallery_bridal_entry.png",
    content: `
      <p class="lead text-2xl text-ivory font-serif mb-8 border-l-2 border-gold pl-6 py-2">
        From the Tamil Nadu Brahmin weddings to Telugu Kshatriya celebrations, traditional instrumental music forms the sonic backbone of South Indian matrimonial ceremonies.
      </p>

      <p class="mb-6">
        South India is a land of diverse cultures, yet one thread that unifies the matrimonial celebrations across its states is the presence of traditional instrumental music. This music doesn't just entertain; it dictates the tempo of the rituals, signals the community, and elevates the spiritual atmosphere.
      </p>

      <h3 class="font-serif text-gold text-2xl mt-12 mb-6">The Ensemble: Nadaswaram and Thavil</h3>
      <p class="mb-6">
        The core of this traditional music ensemble is the pairing of the <strong>Nadaswaram</strong> (a double-reed wind instrument) and the <strong>Thavil</strong> (a barrel-shaped drum). The Nadaswaram provides the melodic narrative through complex classical ragas, while the Thavil provides the rhythmic powerhouse that drives the energy of the event.
      </p>

      <p class="mb-6">
        This dual dynamic is essential. The piercing tone of the Nadaswaram is beautifully grounded by the deep, resonant beats of the Thavil, creating a soundscape that is both majestic and profoundly moving.
      </p>

      <h3 class="font-serif text-gold text-2xl mt-12 mb-6">Regional Variations</h3>
      <p class="mb-6">
        While the instruments remain largely the same, the style of playing and the choice of ragas can vary significantly:
      </p>
      
      <ul class="space-y-4 mb-8 list-none p-0">
        <li class="flex items-start gap-4">
          <div class="w-2 h-2 rounded-full bg-gold/80 mt-2 shrink-0"></div>
          <div>
            <strong class="text-ivory">Tamil Weddings:</strong> Often emphasize strict adherence to Carnatic classical purity, playing heavy ragas like Sankarabharanam or Kalyani during the Oonjal (swing) ceremony.
          </div>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-2 h-2 rounded-full bg-gold/80 mt-2 shrink-0"></div>
          <div>
            <strong class="text-ivory">Telugu Weddings:</strong> The Sannai Melam is known for its energetic, joyous renditions, often incorporating popular devotional and traditional folk melodies alongside classical ragas, especially during the emotional 'Appaginthalu' (send-off).
          </div>
        </li>
      </ul>

      <p class="mb-6">
        Regardless of the specific regional traditions, the goal remains the same: to create a sacred and joyous atmosphere. It is the music that turns a gathering of people into a divine celebration.
      </p>
    `
  },
  "why-nadaswaram-is-played-in-temple-festivals": {
    title: "Why Nadaswaram is Played in Temple Festivals",
    date: "February 28, 2026",
    readTime: "4 min read",
    tag: "Spirituality",
    image: "/gallery/gallery_temple_festival.png",
    content: `
      <p class="lead text-2xl text-ivory font-serif mb-8 border-l-2 border-gold pl-6 py-2">
        Nadaswaram has deep roots in temple culture. Explore how this divine instrument has been the voice of temples for over a thousand years and continues to invoke devotion.
      </p>

      <p class="mb-6">
        Before it became synonymous with weddings and grand receptions, the Nadaswaram was, and fundamentally remains, an instrument of the temple. Its very creation and evolution are inextricably linked to the grand Agamic rituals of South Indian temples.
      </p>

      <h3 class="font-serif text-gold text-2xl mt-12 mb-6">The Voice of the Deities</h3>
      <p class="mb-6">
        In the vast courtyards of massive stone temples, the human voice or softer string instruments would be easily lost. The Nadaswaram was designed to carry. Its powerful, resonant sound can travel for miles, acting as a sonic beacon. When the Nadaswaram plays, it signals to the entire village or town that a sacred ritual, an Aarti, or a temple car procession (Rathotsavam) is underway.
      </p>

      <h3 class="font-serif text-gold text-2xl mt-12 mb-6">Ragas for Every Hour</h3>
      <p class="mb-6">
        Temple traditions dictate that specific musical scales (ragas) are to be played at specific times of the day to align with the rhythms of nature and the daily routine of the deity:
      </p>

      <ul class="space-y-4 mb-8 list-none p-0">
        <li class="flex items-start gap-4">
          <div class="w-2 h-2 rounded-full bg-gold/80 mt-2 shrink-0"></div>
          <div>
            <strong class="text-ivory">Suprabhatam (Dawn):</strong> Ragas like Bowli and Malayamarutam are played to gently awaken the deity and the universe.
          </div>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-2 h-2 rounded-full bg-gold/80 mt-2 shrink-0"></div>
          <div>
            <strong class="text-ivory">Madhyahnam (Noon):</strong> Majestic, vibrant ragas accompany the main food offerings.
          </div>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-2 h-2 rounded-full bg-gold/80 mt-2 shrink-0"></div>
          <div>
            <strong class="text-ivory">Sayarakshai (Evening):</strong> Ragas like Kalyani and Kedaragowla create a reflective, devotional mood during the evening Aarti.
          </div>
        </li>
      </ul>

      <p class="mb-6">
        At Sri Thyagaraja Nadaswara Brundam, we consider it our highest honor to perform at Brahmotsavams and daily temple rituals. It is in the temple courtyards that our art form finds its truest, most spiritual expression.
      </p>
    `
  },
  "history-of-sannai-melam": {
    title: "History of Sannai Melam: A Royal Legacy",
    date: "February 15, 2026",
    readTime: "7 min read",
    tag: "History",
    image: "/gallery/gallery_sannai_melam.png",
    content: `
      <p class="lead text-2xl text-ivory font-serif mb-8 border-l-2 border-gold pl-6 py-2">
        Trace the origins of Sannai Melam from the royal courts of the Vijayanagara Empire to modern South Indian celebrations. A journey through time and sound.
      </p>

      <p class="mb-6">
        The history of the Sannai Melam (Nadaswaram ensemble) is a fascinating journey that parallels the rise of great South Indian empires and the evolution of Carnatic music. Far from being a mere folk tradition, it is a highly evolved classical art form with a royal pedigree.
      </p>

      <h3 class="font-serif text-gold text-2xl mt-12 mb-6">Origins in Antiquity</h3>
      <p class="mb-6">
        While double-reed instruments have existed in various forms across the ancient world, the specific design of the Nadaswaram, with its long wooden body and flared wooden bell (Anausu), evolved in South India. Ancient Tamil literature, such as the Silappatikaram (dating back roughly 2000 years), mentions precursors to these instruments used in martial and festive contexts.
      </p>

      <h3 class="font-serif text-gold text-2xl mt-12 mb-6">The Golden Age: Vijayanagara and Thanjavur</h3>
      <p class="mb-6">
        The instrument reached its zenith during the era of the great South Indian kingdoms, particularly the Vijayanagara Empire and later the Nayaks of Thanjavur. Kings were great patrons of arts, and the Nadaswaram found its place not only in the grand temples they built but also in the royal courts.
      </p>
      
      <p class="mb-6">
        It was during this period that the instrument evolved from a simple outdoor signaling device to a highly sophisticated melodic instrument capable of executing the complex gamakas (oscillations) characteristic of Carnatic music.
      </p>

      <h3 class="font-serif text-gold text-2xl mt-12 mb-6">The Makers and the Masters</h3>
      <p class="mb-6">
        The making of a Nadaswaram is an art in itself. Traditionally, it is carved from the wood of the Aacha tree, which is aged for years to achieve the perfect resonance. The craft of making the instrument and the art of playing it have been passed down through generations within specific dedicated families and communities (the Isai Vellalar community in Tamil Nadu being prominent).
      </p>

      <p class="mb-6">
        Today, ensembles like Sri Thyagaraja Nadaswara Brundam carry forward this millennia-old legacy. When you hear the Sannai Melam at a wedding today, you are listening to the exact same royal sounds that once echoed through the great palaces and stone corridors of ancient South India.
      </p>
    `
  }
};

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogContent[resolvedParams.slug];

  if (!post) {
    return {
      title: "Post Not Found | Blog",
      description: "The requested blog post could not be found."
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: "article",
      publishedTime: post.date,
      authors: ["Sri Thyagaraja Nadaswara Brundam"],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.title,
      images: [post.image],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogContent[resolvedParams.slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="w-full flex flex-col min-h-screen bg-charcoal pt-20">

      {/* Article Header */}
      <article className="w-full relative">
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-12 relative z-10">

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-ivory/50 hover:text-gold transition-colors text-sm tracking-widest uppercase mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold border border-gold/30 px-3 py-1">
              {post.tag}
            </span>
            <div className="flex items-center gap-2 text-ivory/40 text-sm font-light">
              <Calendar size={14} />
              {post.date}
            </div>
            <div className="flex items-center gap-2 text-ivory/40 text-sm font-light">
              <Clock size={14} />
              {post.readTime}
            </div>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight mb-8">
            {post.title}
          </h1>

        </div>

        {/* Hero Image */}
        <div className="w-full max-w-6xl mx-auto px-6 mb-16">
          <div className="w-full aspect-video md:aspect-[21/9] relative border border-gold/20 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-40"></div>
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto px-6 pb-24">
          <div
            className="prose prose-invert prose-lg md:prose-xl font-sans font-light text-ivory/70 max-w-none prose-headings:font-serif prose-headings:text-gold prose-a:text-gold hover:prose-a:text-ivory prose-strong:text-ivory prose-li:text-ivory/70"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-gold/20 flex justify-between items-center">
            <p className="font-serif text-ivory/60 italic">Share this article</p>
            <div className="flex gap-4">
              <button className="text-gold hover:text-ivory transition-colors text-sm tracking-widest uppercase">Twitter</button>
              <button className="text-gold hover:text-ivory transition-colors text-sm tracking-widest uppercase">Facebook</button>
              <button className="text-gold hover:text-ivory transition-colors text-sm tracking-widest uppercase">WhatsApp</button>
            </div>
          </div>
        </div>
      </article>

      <RoyalCTA />
      <Footer />
    </main>
  );
}
