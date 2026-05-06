import type { Metadata } from "next";
import { GradientText } from "@/components/GradientText";

export const metadata: Metadata = {
  title: "Adaptive Accessories | Antami",
  description:
    "Embedded adaptive accessories (magnetic zippers, hidden closures, easy-grip pulls) built into Antami garments to make dressing simpler and more independent.",
};

const features = [
  {
    name: "Magnetic Zippers",
    callout: "Close with one hand",
    description:
      "Embedded magnetic zippers that snap shut effortlessly. No fine motor precision needed. Built into jackets, abayas, and dresses for fast, dignified dressing.",
  },
  {
    name: "Hidden Magnetic Closures",
    callout: "Looks like buttons, opens like magic",
    description:
      "High-strength magnets hidden behind buttons and snaps. The garment looks unchanged from the outside, but opens and closes with a touch.",
  },
  {
    name: "Discreet Velcro Panels",
    callout: "Fast, secure, adjustable",
    description:
      "Industrial-grade hook-and-loop sewn into side seams, open backs, and waistbands. Perfect for dressing seated or with limited range of motion.",
  },
  {
    name: "Easy-Grip Pulls",
    callout: "Larger handles, easier hold",
    description:
      "Generously sized pulls and tabs that work with limited grip strength or dexterity, finished in fabrics that match the garment.",
  },
];

export default function AccessoriesPage() {
  return (
    <>
      <section className="py-24 bg-[#f9fafa]" aria-labelledby="accessories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 gradient-bg rounded-full" aria-hidden="true" />
            <h1
              id="accessories-heading"
              className="text-4xl sm:text-5xl"
              style={{ fontFamily: "Helony, Georgia, serif" }}
            >
              <GradientText>Embedded adaptive accessories</GradientText>
            </h1>
          </div>
          <p className="text-[#5a5a5a] text-lg max-w-2xl">
            Small, thoughtful details built right into your outfit, making clothes easier to put on, take off, and wear with confidence every day.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Adaptive features we build in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.name} className="gradient-border-top bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#f0fdf9] to-[#e8eaf6] flex items-center justify-center">
                  <span className="text-[#524096] opacity-30 text-6xl" aria-hidden="true">◈</span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h2 className="font-semibold text-[#2d2d2d] text-lg">{f.name}</h2>
                  <div
                    className="text-xs font-semibold px-3 py-1 rounded-full inline-block self-start gradient-bg text-white"
                    aria-label={`What it does: ${f.callout}`}
                  >
                    {f.callout}
                  </div>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed flex-1">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-[#f9fafa] rounded-2xl p-10">
            <h2
              className="text-2xl sm:text-3xl mb-4"
              style={{ fontFamily: "Helony, Georgia, serif" }}
            >
              <GradientText>Want these features in your wardrobe?</GradientText>
            </h2>
            <p className="text-[#5a5a5a] mb-6 max-w-xl mx-auto">
              Every Antami garment can be made with the adaptive features that work for you. Shop our adaptive collection or send us your favourite piece to adapt.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/shop"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full gradient-bg text-white text-sm font-semibold hover:brightness-110 transition-all min-h-[44px]"
              >
                Shop Adaptive Clothing
              </a>
              <a
                href="/adapt-at-your-service"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-[#524096] text-[#524096] text-sm font-semibold hover:bg-[#524096] hover:text-white transition-all min-h-[44px]"
              >
                Adapt My Item
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
