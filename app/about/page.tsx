import type { Metadata } from "next";
import { GradientText } from "@/components/GradientText";
import { FounderCard } from "@/components/FounderCard";
import { ValuePill } from "@/components/ValuePill";

export const metadata: Metadata = {
  title: "Our Story | Antami",
  description:
    "Born from lived experience. Built for a community that deserves better. Learn about Antami, the UAE's first adaptive clothing brand.",
};

const values = [
  {
    name: "Belonging",
    icon: "🤝",
    description: "Creating spaces (physical and digital) where everyone is genuinely included, not just accommodated.",
  },
  {
    name: "Respect",
    icon: "✨",
    description: "Treating every individual with dignity, honoring their autonomy, and never reducing them to their disability.",
  },
  {
    name: "Simplicity",
    icon: "○",
    description: "Removing friction in every interaction, from finding a product to getting a garment adapted.",
  },
  {
    name: "Empowerment",
    icon: "⬆",
    description: "Equipping individuals, families, and caregivers with tools, information, and community to thrive.",
  },
  {
    name: "Trust",
    icon: "◈",
    description: "Being reliable, transparent, and consistent, because our community deserves a brand they can count on.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-24 bg-[#f9fafa]" aria-labelledby="about-hero-heading">
        <div className="absolute inset-y-0 left-0 w-1 gradient-bg" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            id="about-hero-heading"
            className="text-4xl sm:text-5xl mb-4"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>Our Story</GradientText>
          </h1>
          <p className="text-xl text-[#5a5a5a] max-w-xl leading-relaxed">
            Born from lived experience. Built for a community that deserves better.
          </p>
        </div>
      </section>

      {/* ── The Why ──────────────────────────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2
            id="why-heading"
            className="text-3xl mb-6"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>The why</GradientText>
          </h2>
          <p className="text-[#5a5a5a] leading-relaxed mb-4 text-lg">
            Antami (meaning inspiration, passion, and belonging) was born from the belief that everyone deserves clothing that works for them, not the other way around.
          </p>
          <p className="text-[#5a5a5a] leading-relaxed mb-4">
            For too long, individuals with special needs have had to compromise on style, identity, and independence to find functional clothing. We built Antami to change that, starting with adaptive abayas and kandouras rooted in Emirati culture.
          </p>
          <p className="text-[#5a5a5a] leading-relaxed">
            Belonging should be a natural part of everyday life, not an exception.
          </p>
        </div>
      </section>

      {/* ── Founders ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#f9fafa]" aria-labelledby="founders-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="founders-heading"
            className="text-3xl sm:text-4xl text-center mb-12"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>Meet the founders</GradientText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <FounderCard
              name="Shaikha"
              bio="Co-founder of Antami. Bio coming soon."
            />
            <FounderCard
              name="Sally"
              bio="Co-founder of Antami. Bio coming soon."
            />
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────── */}
      <section id="mission" className="py-20 bg-white" aria-labelledby="mission-section-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="mission-section-heading"
            className="text-3xl sm:text-4xl text-center mb-12"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>Mission &amp; Vision</GradientText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative bg-[#f9fafa] rounded-2xl p-8">
              <div className="absolute top-0 left-0 w-12 h-1 gradient-bg rounded-tr-full" aria-hidden="true" />
              <h3 className="font-semibold text-lg text-[#2d2d2d] mb-4">Our Mission</h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                Antami is a connected ecosystem created to support individuals with special needs, their families, caregivers, and service providers; moving inclusion beyond awareness into real access, dignity, and meaningful participation. Built on the belief that belonging should be a natural part of everyday life, Antami brings people, resources, and opportunities together in one place, making support easier to find, navigate, and trust.
              </p>
            </div>
            <div className="relative bg-[#f9fafa] rounded-2xl p-8">
              <div className="absolute top-0 left-0 w-12 h-1 gradient-bg rounded-tr-full" aria-hidden="true" />
              <h3 className="font-semibold text-lg text-[#2d2d2d] mb-4">Our Vision</h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                To create a world where people with disabilities and their families experience true belonging, not as an exception, but as a natural part of everyday life. Antami exists to move inclusion beyond awareness into access, dignity, and meaningful connection, enabling individuals, families, caregivers, and service providers to participate in society with confidence and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values Deep Dive ─────────────────────────────────── */}
      <section id="values" className="py-20 bg-[#f9fafa]" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="values-heading"
            className="text-3xl sm:text-4xl text-center mb-12"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>Our values</GradientText>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.name} className="gradient-border-top bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3" aria-hidden="true">{v.icon}</div>
                <div className="mb-2">
                  <ValuePill value={v.name} index={i} />
                </div>
                <p className="text-[#5a5a5a] text-sm leading-relaxed mt-3">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
