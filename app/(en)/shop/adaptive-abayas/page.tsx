import type { Metadata } from "next";
import { GradientText } from "@/components/GradientText";
import { ProductCard } from "@/components/ProductCard";
import { GradientButton } from "@/components/GradientButton";

export const metadata: Metadata = {
  title: "Adaptive Abayas | Antami",
  description:
    "Beautifully designed adaptive abayas for comfort, independence, and dignity. The UAE's first adaptive abaya collection.",
};

const products: Array<{ name: string; description: string }> = [];

export default function AdaptiveAbayas() {
  return (
    <>
      <section className="py-24 bg-[#f9fafa]" aria-labelledby="abayas-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 gradient-bg rounded-full" aria-hidden="true" />
            <h1
              id="abayas-heading"
              className="text-4xl sm:text-5xl"
              style={{ fontFamily: "Helony, Georgia, serif" }}
            >
              <GradientText>Adaptive Abayas</GradientText>
            </h1>
          </div>
          <p className="text-[#5a5a5a] text-lg max-w-xl">
            Beautifully designed abayas adapted for comfort, independence, and dignity. Every detail is considered for ease of dressing and real-life wear.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Abaya products">
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
                Our adaptive abaya collection is being carefully crafted. Be the first to know when it launches.
              </p>
              <GradientButton href="/contact">Notify Me</GradientButton>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
