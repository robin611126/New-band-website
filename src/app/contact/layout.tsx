import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Book Sannai Melam",
  description: "Get in touch to book authentic Nadaswaram and Thavil artists for your upcoming wedding, reception, or cultural event.",
  openGraph: {
    title: "Contact | Book Sannai Melam",
    description: "Get in touch to book authentic Nadaswaram and Thavil artists for your upcoming wedding, reception, or cultural event.",
    url: "/contact",
  },
  twitter: {
    title: "Contact | Book Sannai Melam",
    description: "Get in touch to book authentic Nadaswaram and Thavil artists for your upcoming wedding, reception, or cultural event.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
