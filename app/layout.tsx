import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Antami: Where Belonging is for Everyone | Adaptive Clothing UAE",
  description:
    "Antami is the UAE's first adaptive clothing brand. Shop adaptive abayas, kandouras, and accessories, or send us your favourite item to adapt.",
  metadataBase: new URL("https://antami.ae"),
  openGraph: {
    title: "Antami: Where Belonging is for Everyone",
    description: "The UAE's first adaptive clothing brand built for real life, real comfort, and real dignity.",
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
        <Nav />
        <main id="main-content" className="flex-1 pt-28" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
