import type { Metadata } from "next";
import "../globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Antami: Where Belonging is for Everyone",
  description:
    "Antami is a UAE-based umbrella for people of determination: Antami Academy, a caregiver app, adaptive clothing, and the POD Marketplace, all in one home built on dignity.",
  metadataBase: new URL("https://antami.ae"),
  alternates: {
    languages: { en: "/", ar: "/ar" },
  },
  openGraph: {
    title: "Antami: Where Belonging is for Everyone",
    description: "A UAE-based umbrella brand built for real life, real dignity, and real belonging.",
    images: [{ url: "/logos/logo-light.png", width: 1200, height: 630, alt: "Antami logo" }],
    locale: "en_AE",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="h-full">
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Nav locale="en" />
        <main id="main-content" className="flex-1 pt-20 md:pt-[136px]" tabIndex={-1}>
          {children}
        </main>
        <Footer locale="en" />
      </body>
    </html>
  );
}
