import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Knowledge & Heritage",
  description: "Explore articles celebrating the rich tradition of Nadaswaram music, South Indian wedding heritage, and cultural stories.",
  openGraph: {
    title: "Blog | Knowledge & Heritage",
    description: "Explore articles celebrating the rich tradition of Nadaswaram music, South Indian wedding heritage, and cultural stories.",
    url: "/blog",
  },
  twitter: {
    title: "Blog | Knowledge & Heritage",
    description: "Explore articles celebrating the rich tradition of Nadaswaram music, South Indian wedding heritage, and cultural stories.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
