import type { Metadata } from "next";
import { GradientText } from "@/components/GradientText";
import { ProductCard } from "@/components/ProductCard";
import { GradientButton } from "@/components/GradientButton";

export const metadata: Metadata = {
  title: "Adaptive Kandouras | Antami",
  description:
    "Traditional kandouras reimagined for ease of movement, accessible fastenings, and independence.",
};

const products: Array<{ name: string; description: string }> = [];

export default function AdaptiveKandourasPage() {
  return (
    <>
      <section className="py-24 bg-[#f9fafa]" aria-labelledby="kandouras-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 gradient-bg rounded-full" aria-hidden="true" />
            <h1
              id="kandouras-heading"
              className="text-4xl sm:text-5xl"
              style={{ fontFamily: "Helony, Georgia, serif" }}
            >
              <GradientText>Adaptive Kandouras</GradientText>
            </h1>
          </div>
          <p className="text-[#5a5a5a] text-lg max-w-xl">
            Traditional kandouras reimagined for ease of movement and dressing. Magnetic closures, accessible openings, and adapted for real life.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Kandoura products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-[#2d2d2d] mb-3" style={{ fontFamily: "Helony, Georgia, serif" }}>
                Coming Soon
              </h2>
              <p className="text-[#5a5a5a] mb-8 max-w-md mx-auto">
                Our adaptive kandoura collection is being crafted with care. Be the first to know when it launches.
              </p>
              <GradientButton href="/contact">Notify Me</GradientButton>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
