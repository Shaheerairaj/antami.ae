import type { Metadata } from "next";
import { Tajawal, El_Messiri } from "next/font/google";
import "../globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body-ar",
});

const elMessiri = El_Messiri({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-ar",
});

export const metadata: Metadata = {
  title: "أنتامي: الانتماء للجميع",
  description:
    "أنتامي مظلة إماراتية لأصحاب الهمم: أكاديمية أنتامي، تطبيق لمقدمي الرعاية، ملابس متكيفة، وسوق POD، كلها في مكان واحد مبني على الكرامة.",
  metadataBase: new URL("https://antami.ae"),
  alternates: {
    languages: { en: "/", ar: "/ar" },
  },
  openGraph: {
    title: "أنتامي: الانتماء للجميع",
    description: "علامة إماراتية مبنية للحياة الواقعية، والكرامة الحقيقية، والانتماء الحقيقي.",
    images: [{ url: "/logos/logo-light.png", width: 1200, height: 630, alt: "شعار أنتامي" }],
    locale: "ar_AE",
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

export default function ArabicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`h-full ${tajawal.variable} ${elMessiri.variable}`}>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">تخطَّ إلى المحتوى الرئيسي</a>
        <Nav locale="ar" />
        <main id="main-content" className="flex-1 pt-20 md:pt-[136px]" tabIndex={-1}>
          {children}
        </main>
        <Footer locale="ar" />
      </body>
    </html>
  );
}
