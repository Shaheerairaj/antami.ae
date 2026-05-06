import type { Metadata } from "next";
import Image from "next/image";
import { GradientText } from "@/components/GradientText";
import { GradientButton } from "@/components/GradientButton";
import { OutlineButton } from "@/components/OutlineButton";
import { ServiceCard } from "@/components/ServiceCard";
import { ValuePill } from "@/components/ValuePill";
import { SectionBanner } from "@/components/SectionBanner";
import { StepFlow } from "@/components/StepFlow";

export const metadata: Metadata = {
  title: "Adaptive Clothing | Antami",
  description:
    "The UAE's first adaptive clothing brand: abayas, kandouras, embedded adaptive accessories, and an Adapt at Your Service for the pieces you already love.",
};

const values = ["Belonging", "Respect", "Simplicity", "Empowerment", "Trust"];

const services = [
  {
    icon: "✦",
    title: "Adaptive Abayas",
    description: "Beautifully designed abayas adapted for comfort and independence.",
    href: "/shop/adaptive-abayas",
  },
  {
    icon: "✧",
    title: "Adaptive Kandouras",
    description: "Traditional kandouras reimagined for ease of movement and dressing.",
    href: "/shop/adaptive-kandouras",
  },
  {
    icon: "⟳",
    title: "Adapt at Your Service",
    description: "Send us your favourite piece. We'll make it work for you.",
    href: "/adapt-at-your-service",
    linkLabel: "Get started",
  },
  {
    icon: "◈",
    title: "Embedded Accessories",
    description: "Adaptive features built right into your outfits: easier to put on, easier to take off.",
    href: "/shop/accessories",
  },
  {
    icon: "🏢",
    title: "For Suppliers (B2B)",
    description: "We supply adaptive clothing accessories to hospitals, special needs centres, and clothing brands.",
    href: "/suppliers",
    linkLabel: "Enquire",
  },
];

const steps = [
  { number: 1, icon: "👗", title: "Choose", description: "Bring your favourite item or choose something new." },
  { number: 2, icon: "📦", title: "Deliver", description: "Send the garment to our team in the UAE." },
  { number: 3, icon: "✏️", title: "Customize", description: "Fill in our form to describe your adaptations." },
  { number: 4, icon: "🏠", title: "Receive", description: "We adapt and deliver it back to you." },
];

export default function AdaptiveClothingPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[calc(100vh-4rem)] flex items-center bg-[#f9fafa] overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(1,239,172,0.15) 0%, rgba(95,42,132,0.08) 60%, transparent 80%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#5a5a5a] uppercase tracking-wider mb-4">
              Your first Emirati adaptive brand
            </p>
            <h1
              id="hero-heading"
              className="text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6"
              style={{ fontFamily: "Helony, Georgia, serif" }}
            >
              <GradientText>Where Belonging</GradientText>
              <br />
              <span className="text-[#2d2d2d]">is for Everyone</span>
            </h1>
            <p className="text-lg text-[#5a5a5a] leading-relaxed mb-10 max-w-xl">
              The first Emirati adaptive clothing brand, designed for real life, real comfort, and real dignity.
            </p>
            <div className="flex flex-wrap gap-4">
              <GradientButton href="/shop">Shop Now</GradientButton>
              <OutlineButton href="/adapt-at-your-service">Adapt My Item</OutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── What is Antami? ───────────────────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="about-heading" className="text-3xl sm:text-4xl mb-6" style={{ fontFamily: "Helony, Georgia, serif" }}>
                <span className="text-[#2d2d2d]">Antami means </span>
                <GradientText>belonging</GradientText>
              </h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-4">
                Antami (meaning inspiration, passion, and belonging) is a connected ecosystem created to support individuals with special needs, their families, caregivers, and service providers.
              </p>
              <p className="text-[#5a5a5a] leading-relaxed">
                We move inclusion beyond awareness into real access, dignity, and meaningful participation. Built on the belief that belonging should be a natural part of everyday life.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src="/logos/logo-light.png"
                  alt="Antami brand icon: a circular swoosh representing community and belonging"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
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
            <GradientText>What we offer</GradientText>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
