import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Traditional Nadaswaram Performances",
  description: "View our gallery of authentic Sannai Melam performances at traditional South Indian weddings, temple festivals, and grand processions.",
  openGraph: {
    title: "Gallery | Traditional Nadaswaram Performances",
    description: "View our gallery of authentic Sannai Melam performances at traditional South Indian weddings, temple festivals, and grand processions.",
    url: "/gallery",
  },
  twitter: {
    title: "Gallery | Traditional Nadaswaram Performances",
    description: "View our gallery of authentic Sannai Melam performances at traditional South Indian weddings, temple festivals, and grand processions.",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
