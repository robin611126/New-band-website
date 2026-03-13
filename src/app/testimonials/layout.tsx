import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Client Reviews",
  description: "Read what our clients say about Sri Thyagaraja Nadaswara Brundam's traditional Telugu wedding and temple festival performances.",
  openGraph: {
    title: "Testimonials | Client Reviews",
    description: "Read what our clients say about Sri Thyagaraja Nadaswara Brundam's traditional Telugu wedding and temple festival performances.",
    url: "/testimonials",
  },
  twitter: {
    title: "Testimonials | Client Reviews",
    description: "Read what our clients say about Sri Thyagaraja Nadaswara Brundam's traditional Telugu wedding and temple festival performances.",
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
