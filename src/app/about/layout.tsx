import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Our Legacy",
  description: "Learn about Sri Thyagaraja Nadaswara Brundam, a Hyderabad-based traditional music group dedicated to preserving the sacred art of Nadaswaram and Thavil.",
  openGraph: {
    title: "About | Our Legacy",
    description: "Learn about Sri Thyagaraja Nadaswara Brundam, a Hyderabad-based traditional music group dedicated to preserving the sacred art of Nadaswaram and Thavil.",
    url: "/about",
  },
  twitter: {
    title: "About | Our Legacy",
    description: "Learn about Sri Thyagaraja Nadaswara Brundam, a Hyderabad-based traditional music group dedicated to preserving the sacred art of Nadaswaram and Thavil.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
