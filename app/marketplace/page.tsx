import type { Metadata } from "next";
import { ArmHero } from "@/components/ArmHero";
import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";
import { InvertButton } from "@/components/InvertButton";
import { ProductCard } from "@/components/ProductCard";
import { arms } from "@/lib/arms";

const arm = arms.find((a) => a.slug === "marketplace")!;

export const metadata: Metadata = {
  title: "POD Marketplace | Antami",
  description:
    "The POD Marketplace is where people of determination set up shop and sell what they make, from handmade crafts to digital designs.",
};

const shops = [
  { initial: "H", name: "Hala's Handmade", tagline: "Candles & home decor", items: 12 },
  { initial: "R", name: "Rashid Designs", tagline: "Digital art & prints", items: 27 },
  { initial: "A", name: "Amal's Kitchen Co.", tagline: "Baked goods & preserves", items: 8 },
  { initial: "S", name: "Studio Sundus", tagline: "Jewellery & accessories", items: 19 },
];

const items = [
  { name: "Hand-poured soy candle", description: "Small-batch candle in oud and rose scent.", price: "AED 65" },
  { name: "Desert sunset print", description: "Digital illustration, printed on archival paper.", price: "AED 120" },
  { name: "Date & nut preserve jar", description: "A family recipe, jarred fresh weekly.", price: "AED 35" },
  { name: "Beaded majlis bracelet", description: "Hand-strung beads in brand colours.", price: "AED 80" },
  { name: "Custom portrait commission", description: "A digital portrait, made to order.", price: "AED 250" },
  { name: "Embroidered tote bag", description: "Canvas tote with hand embroidery detail.", price: "AED 95" },
];

export default function MarketplacePage() {
  return (
    <>
      <ArmHero
        color={arm.color}
        textColor={arm.textColor}
        eyebrow="POD Marketplace"
        title="A marketplace built for people of determination"
        description="Set up your own shop, list what you make, and sell to a community that wants to support you. This is a proof of concept: shops and items below are examples."
      >
        <InvertButton href="/contact" accentColor={arm.accent}>Open your shop</InvertButton>
        <GhostButton href="#items" textColor={arm.textColor}>Browse items</GhostButton>
      </ArmHero>

      <section className="py-20" style={{ backgroundColor: arm.color }} aria-labelledby="shops-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="shops-heading"
            className="text-3xl sm:text-4xl mb-10 text-center text-white"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            Featured shops
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shops.map((shop) => (
              <div
                key={shop.name}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 flex flex-col items-center text-center gap-3"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-semibold text-white flex-shrink-0"
                  style={{ backgroundColor: "#1a1a2e" }}
                  aria-hidden="true"
                >
                  {shop.initial}
                </div>
                <h3 className="font-semibold text-white">{shop.name}</h3>
                <p className="text-white/70 text-sm">{shop.tagline}</p>
                <p className="text-white/50 text-xs">{shop.items} items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="items" className="py-20 bg-white scroll-mt-24 md:scroll-mt-[152px]" aria-labelledby="items-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="items-heading"
            className="text-3xl sm:text-4xl mb-4 text-center"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <span className="text-[#2d2d2d]">Popular </span>
            <span style={{ color: arm.color }}>items</span>
          </h2>
          <p className="text-center text-[#5a5a5a] mb-12 max-w-xl mx-auto">
            A sample of what sellers could list on the marketplace.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <ProductCard key={item.name} {...item} ctaLabel="View item" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#1a1a2e" }} aria-labelledby="sell-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="sell-heading"
            className="text-3xl sm:text-4xl mb-4 text-white"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            Ready to sell what you make?
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Tell us about your shop and we&rsquo;ll help you get set up on the marketplace.
          </p>
          <GradientButton href="/contact">Open your shop</GradientButton>
        </div>
      </section>
    </>
  );
}
