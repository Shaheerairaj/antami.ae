import type { Metadata } from "next";
import Link from "next/link";
import { GradientText } from "@/components/GradientText";

export const metadata: Metadata = {
  title: "Shop Adaptive Clothing | Antami",
  description:
    "Browse Antami's range of adaptive abayas, kandouras, and accessories designed for real life and real dignity.",
};

const categories = [
  {
    href: "/shop/adaptive-abayas",
    title: "Adaptive Abayas",
    description: "Beautifully designed abayas adapted for comfort, ease of movement, and independence.",
    color: "#01efac",
    textColor: "#1a1a2e",
  },
  {
    href: "/shop/adaptive-kandouras",
    title: "Adaptive Kandouras",
    description: "Traditional kandouras reimagined with magnetic closures, open-back options, and accessible fastenings.",
    color: "#2082a6",
    textColor: "#ffffff",
  },
  {
    href: "/adapt-at-your-service",
    title: "Adapt at Your Service",
    description: "Already have a piece you love? Send it to us and we'll adapt it to work for you.",
    color: "#524096",
    textColor: "#ffffff",
  },
  {
    href: "/shop/accessories",
    title: "Embedded Accessories",
    description: "Magnetic zippers, hidden closures, easy-grip pulls: adaptive features built right into your outfit.",
    color: "#5f2a84",
    textColor: "#ffffff",
  },
];

export default function ShopPage() {
  return (
    <>
      <section className="py-24 bg-[#f9fafa]" aria-labelledby="shop-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            id="shop-heading"
            className="text-4xl sm:text-5xl mb-4"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>Shop Adaptive Clothing</GradientText>
          </h1>
          <p className="text-[#5a5a5a] text-lg max-w-xl mx-auto">
            Your first Emirati adaptive brand, designed for real life, real comfort, and real dignity.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Product categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end p-8
                  hover:shadow-xl transition-shadow duration-300 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[#524096]"
                style={{ backgroundColor: cat.color }}
                aria-label={`Explore ${cat.title}`}
              >
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.4), transparent 60%)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <h2
                    className="text-2xl mb-2"
                    style={{ fontFamily: "Helony, Georgia, serif", color: cat.textColor }}
                  >
                    {cat.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: cat.textColor, opacity: 0.85 }}>
                    {cat.description}
                  </p>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: cat.textColor }}
                  >
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
