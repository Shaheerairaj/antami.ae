import type { Metadata } from "next";
import { ArmHero } from "@/components/ArmHero";
import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";
import { InvertButton } from "@/components/InvertButton";
import { GlassCard } from "@/components/GlassCard";
import { ServiceCard } from "@/components/ServiceCard";
import { ProductCard } from "@/components/ProductCard";
import { ValuePill } from "@/components/ValuePill";
import { SectionBanner } from "@/components/SectionBanner";
import { StepFlow } from "@/components/StepFlow";
import { GradientText } from "@/components/GradientText";
import { arms } from "@/lib/arms";

const arm = arms.find((a) => a.slug === "adaptive-clothing")!;

export const metadata: Metadata = {
  title: "Adaptive Clothing | Antami",
  description:
    "The UAE's first adaptive clothing brand: abayas, kandouras, embedded adaptive accessories, and an Adapt at Your Service for the pieces you already love.",
};

const values = ["Belonging", "Respect", "Simplicity", "Empowerment", "Trust"];

const womenProducts = [
  { name: "Adaptive Abaya, Sand", description: "Magnetic front closure, open-back option for seated wear.", price: "AED 420" },
  { name: "Adaptive Abaya, Charcoal", description: "Easy-grip pulls and a soft, breathable fabric.", price: "AED 420" },
  { name: "Adaptive Wrap Dress", description: "One-handed wrap closure, no buttons or zips.", price: "AED 350" },
  { name: "Adaptive Jalabiya", description: "Wide sleeves and a relaxed fit for ease of movement.", price: "AED 380" },
];

const menProducts = [
  { name: "Adaptive Kandoura, White", description: "Hidden magnetic placket, adjustable seated hem.", price: "AED 390" },
  { name: "Adaptive Kandoura, Grey", description: "Front-fastening collar for easier dressing.", price: "AED 390" },
  { name: "Adaptive Bisht", description: "Lightweight shoulder drape with a simple clasp.", price: "AED 450" },
  { name: "Adaptive Thobe Set", description: "Matching set with magnetic cuffs and side seam access.", price: "AED 410" },
];

const services = [
  {
    title: "Adapt at Your Service",
    description: "Send us your favourite piece. We'll make it work for you.",
    href: "/adapt-at-your-service",
    linkLabel: "Get started",
  },
  {
    title: "Embedded Accessories",
    description: "Adaptive features built right into your outfits: easier to put on, easier to take off.",
    href: "/shop/accessories",
  },
  {
    title: "For Suppliers (B2B)",
    description: "We supply adaptive clothing accessories to hospitals, special needs centres, and clothing brands.",
    href: "/suppliers",
    linkLabel: "Enquire",
  },
];

const steps = [
  { number: 1, title: "Choose", description: "Bring your favourite item or choose something new." },
  { number: 2, title: "Deliver", description: "Send the garment to our team in the UAE." },
  { number: 3, title: "Customize", description: "Fill in our form to describe your adaptations." },
  { number: 4, title: "Receive", description: "We adapt and deliver it back to you." },
];

export default function AdaptiveClothingPage() {
  return (
    <>
      <ArmHero
        color={arm.color}
        textColor={arm.textColor}
        name={arm.label}
        tagline="Where Belonging is for Everyone"
        description="The first Emirati adaptive clothing brand, designed for real life, real comfort, and real dignity."
      >
        <InvertButton href="#shop" accentColor={arm.accent}>Shop Now</InvertButton>
        <GhostButton href="/adapt-at-your-service" textColor={arm.textColor}>Adapt My Item</GhostButton>
      </ArmHero>

      {/* ── What is Antami? ───────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: arm.color }} aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-8 max-w-3xl mx-auto">
            <h2 id="about-heading" className="text-3xl sm:text-4xl mb-6 text-white text-center" style={{ fontFamily: "Helony, Georgia, serif" }}>
              Antami means belonging
            </h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Antami (meaning inspiration, passion, and belonging) is a connected ecosystem created to support individuals with special needs, their families, caregivers, and service providers.
            </p>
            <p className="text-white/85 leading-relaxed">
              We move inclusion beyond awareness into real access, dignity, and meaningful participation. Built on the belief that belonging should be a natural part of everyday life.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* ── Shop by category ──────────────────────────────────── */}
      <section
        id="shop"
        className="py-20 bg-white scroll-mt-24 md:scroll-mt-[152px]"
        aria-labelledby="shop-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="shop-heading"
            className="text-3xl sm:text-4xl text-center mb-4"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>Shop the collection</GradientText>
          </h2>
          <p className="text-center text-[#5a5a5a] mb-12 max-w-xl mx-auto">
            A proof of concept of what our adaptive collection will look like, for women and men.
          </p>

          <h3 className="text-xl font-semibold text-[#2d2d2d] mb-5">Women&rsquo;s Collection</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {womenProducts.map((p) => (
              <ProductCard key={p.name} {...p} ctaLabel="View item" />
            ))}
          </div>

          <h3 className="text-xl font-semibold text-[#2d2d2d] mb-5">Men&rsquo;s Collection</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menProducts.map((p) => (
              <ProductCard key={p.name} {...p} ctaLabel="View item" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#f9fafa]" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl text-center mb-12"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>What else we offer</GradientText>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Values Strip ─────────────────────────────────────── */}
      <section className="py-12 bg-white" aria-label="Brand values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row flex-wrap justify-center gap-3">
            {values.map((v, i) => (
              <ValuePill key={v} value={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission Statement ────────────────────────────────── */}
      <SectionBanner>
        <h2
          id="mission-heading"
          className="text-3xl sm:text-4xl mb-6 text-white leading-tight"
          style={{ fontFamily: "Helony, Georgia, serif" }}
        >
          &ldquo;This is not about charity.{" "}
          <GradientText>This is about community, autonomy, and opportunity.</GradientText>&rdquo;
        </h2>
        <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
          Antami is a connected ecosystem created to support individuals with special needs, their families, caregivers, and service providers, moving inclusion beyond awareness into real access, dignity, and meaningful participation.
        </p>
      </SectionBanner>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="py-20 bg-[#f9fafa]" aria-labelledby="how-it-works-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl text-center mb-4"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>How it works</GradientText>
          </h2>
          <p className="text-center text-[#5a5a5a] mb-12 max-w-xl mx-auto">
            Our Adapt at Your Service makes getting adaptive clothing simple.
          </p>
          <StepFlow steps={steps} />
          <div className="text-center mt-12">
            <GradientButton href="/adapt-at-your-service">Start Your Adaptation</GradientButton>
          </div>
        </div>
      </section>
    </>
  );
}
