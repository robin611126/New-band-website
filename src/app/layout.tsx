import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CustomCursor } from "@/components/CustomCursor";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nadaswaramhyderabad.com'),
  title: {
    default: "Sri Thyagaraja Nadaswara Brundam | Traditional Nadaswaram Music",
    template: "%s | Sri Thyagaraja Nadaswara Brundam"
  },
  description: "Authentic Sannai Melam (Nadaswaram) and Thavil performances for Telugu weddings, temple festivals, and religious events across India.",
  keywords: ["Nadaswaram wedding Hyderabad", "Sannai Melam wedding music", "Telugu wedding Nadaswaram", "Traditional wedding musicians Hyderabad", "Temple festival Nadaswaram musicians", "Sri Thyagaraja Nadaswara Brundam"],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Sri Thyagaraja Nadaswara Brundam",
    description: "Authentic Sannai Melam (Nadaswaram) and Thavil performances.",
    siteName: "Sri Thyagaraja Nadaswara Brundam",
    images: [{
      url: "/gallery/gallery_muhurtham.png",
      width: 1200,
      height: 630,
      alt: "Nadaswaram performance at a traditional South Indian wedding"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Thyagaraja Nadaswara Brundam",
    description: "Authentic Sannai Melam and Thavil performances.",
    images: ["/gallery/gallery_muhurtham.png"],
  }
};

import { GlobalLoader } from "@/components/GlobalLoader";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://nadaswaramhyderabad.com/#business",
  "name": "Sri Thyagaraja Nadaswara Brundam",
  "description": "Authentic Sannai Melam (Nadaswaram) and Thavil performances for Telugu weddings, temple festivals, and religious events.",
  "url": "https://nadaswaramhyderabad.com",
  "telephone": "+919391145321",
  "email": "karthikraghavendra1@gmail.com",
  "image": "https://nadaswaramhyderabad.com/gallery/gallery_muhurtham.png",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.3850,
    "longitude": 78.4867
  },
  "areaServed": [
    { "@type": "State", "name": "Telangana" },
    { "@type": "State", "name": "Andhra Pradesh" },
    { "@type": "Country", "name": "India" },
    { "@type": "AdministrativeArea", "name": "Worldwide (destination events)" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "08:00",
    "closes": "21:00"
  },
  "sameAs": [
    "https://wa.me/919391145321"
  ]
};

const musicGroupSchema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "@id": "https://nadaswaramhyderabad.com/#musicgroup",
  "name": "Sri Thyagaraja Nadaswara Brundam",
  "description": "Traditional South Indian classical music ensemble specialising in Nadaswaram and Thavil — the sacred instruments of auspicious occasions.",
  "url": "https://nadaswaramhyderabad.com",
  "genre": ["Carnatic Classical", "Sannai Melam", "Traditional South Indian"],
  "foundingLocation": {
    "@type": "Place",
    "name": "Hyderabad, Telangana, India"
  },
  "image": "https://nadaswaramhyderabad.com/gallery/gallery_muhurtham.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+919391145321",
    "contactType": "Booking"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://nadaswaramhyderabad.com/#services",
  "name": "Traditional Nadaswaram & Sannai Melam Performances",
  "provider": {
    "@id": "https://nadaswaramhyderabad.com/#business"
  },
  "serviceType": "Live Music Performance",
  "description": "Professional Nadaswaram and Thavil ensembles for Telugu weddings, muhurthams, temple festivals, and cultural events.",
  "areaServed": "India",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Performance Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding / Muhurtham Nadaswaram",
          "description": "Traditional Sannai Melam ensemble for Telugu wedding ceremonies and muhurthams."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Temple Festival Performance",
          "description": "Nadaswaram and Thavil performances for temple festivals (brahmotsavams, rathasapthami, etc.)."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Reception & Cultural Events",
          "description": "Live classical music for receptions and cultural programmes."
        }
      }
    ]
  }
};

import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(musicGroupSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-charcoal text-ivory selection:bg-gold selection:text-charcoal`}>

        <GlobalLoader>
          <CustomCursor />
          <SmoothScroll>
            <Navbar />
            {children}
          </SmoothScroll>
          <FloatingCTA />
        </GlobalLoader>
        <Analytics />
      </body>
    </html>
  );
}
