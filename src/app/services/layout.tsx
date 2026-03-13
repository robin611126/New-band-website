import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Wedding & Temple Performances",
  description: "Explore our traditional Nadaswaram and Thavil performance packages for Telugu weddings, receptions, temple festivals, and cultural events.",
  openGraph: {
    title: "Services | Wedding & Temple Performances",
    description: "Explore our traditional Nadaswaram and Thavil performance packages for Telugu weddings, receptions, temple festivals, and cultural events.",
    url: "/services",
  },
  twitter: {
    title: "Services | Wedding & Temple Performances",
    description: "Explore our traditional Nadaswaram and Thavil performance packages for Telugu weddings, receptions, temple festivals, and cultural events.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
