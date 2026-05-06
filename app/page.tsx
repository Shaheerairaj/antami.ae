import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GradientText } from "@/components/GradientText";
import { GradientButton } from "@/components/GradientButton";
import { OutlineButton } from "@/components/OutlineButton";
import { ValuePill } from "@/components/ValuePill";
import { SectionBanner } from "@/components/SectionBanner";
import { PersonaSelector } from "./PersonaSelector";

export const metadata: Metadata = {
  title: "Antami: Where Belonging is for Everyone",
  description:
    "Antami is where people with disabilities, their families, and anyone who has ever struggled to belong feel seen, understood, and supported, with the products, knowledge, and community to live everyday life with dignity.",
};

const values = ["Belonging", "Respect", "Simplicity", "Empowerment", "Trust"];

const pillars = [
  {
    icon: "👗",
    title: "Adaptive Clothing",
    description:
      "Abayas, kandouras, and embedded adaptive accessories, plus our Adapt at Your Service for the pieces you already love.",
    href: "/adaptive-clothing",
    cta: "Explore the collection",
    status: "Available now",
  },
  {
    icon: "🤖",
    title: "Antami AI",
    description:
      "An AI companion for parents, employers, service providers, and individuals, answering disability questions clearly, kindly, and reliably.",
    href: "/contact",
    cta: "Be the first to know",
    status: "Coming soon",
  },
  {
    icon: "🎓",
    title: "Antami Academy",
    description:
      "An online platform with courses from leading specialists, for service providers, families, corporates, and government entities.",
    href: "/contact",
    cta: "Be the first to know",
    status: "Coming soon",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[calc(100vh-7rem)] flex items-center bg-[#f9fafa] overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(1,239,172,0.18) 0%, rgba(95,42,132,0.10) 60%, transparent 80%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(82,64,150,0.12) 0%, rgba(32,130,166,0.08) 50%, transparent 80%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#5a5a5a] uppercase tracking-wider mb-4">
              Antami means belonging
            </p>
            <h1
              id="hero-heading"
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-8"
              style={{ fontFamily: "Helony, Georgia, serif" }}
            >
              <GradientText>Belonging</GradientText>
              <span className="text-[#2d2d2d]"> is for everyone.</span>
            </h1>
            <p className="text-xl text-[#5a5a5a] leading-relaxed mb-10 max-w-2xl">
              For people with disabilities, their families, and anyone who has ever struggled to belong. A place to feel seen, understood, and met with the support you need.
            </p>
            <div className="flex flex-wrap gap-4">
              <GradientButton href="#i-am">Find your starting point</GradientButton>
              <OutlineButton href="/adaptive-clothing">Explore adaptive clothing</OutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we are ──────────────────────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="what-we-are-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                id="what-we-are-heading"
                className="text-3xl sm:text-4xl mb-6"
                style={{ fontFamily: "Helony, Georgia, serif" }}
              >
                <span className="text-[#2d2d2d]">A one stop for </span>
                <GradientText>belonging</GradientText>
              </h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-4 text-lg">
                Antami is built on a single idea: that everyone deserves to feel understood and to belong. For individuals with disabilities, their families, caregivers, and the people working alongside them, we bring together what's been scattered across too many places. One home, built with dignity at its centre.
              </p>
              <p className="text-[#5a5a5a] leading-relaxed">
                We move inclusion beyond awareness into real access, real dignity, and real participation, because belonging should be a natural part of everyday life, not an exception.
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

      {/* ── I am ─────────────────────────────────────────────── */}
      <section
        id="i-am"
        className="py-20 bg-[#f9fafa] scroll-mt-28"
        aria-labelledby="i-am-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="i-am-heading"
              className="text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: "Helony, Georgia, serif" }}
            >
              <span className="text-[#2d2d2d]">I am</span>
              <span className="text-[#2d2d2d]">…</span>
            </h2>
            <p className="text-[#5a5a5a] max-w-xl mx-auto">
              Tell us a little about you. We'll show you what Antami means for your everyday.
            </p>
          </div>
          <PersonaSelector />
        </div>
      </section>

      {/* ── Pillars ──────────────────────────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="pillars-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="pillars-heading"
              className="text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: "Helony, Georgia, serif" }}
            >
              <GradientText>What Antami offers</GradientText>
            </h2>
            <p className="text-[#5a5a5a] max-w-xl mx-auto">
              Three connected pillars, designed to grow with our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="gradient-border-top bg-[#f9fafa] rounded-2xl p-7 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center text-2xl text-white" aria-hidden="true">
                    {p.icon}
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      p.status === "Available now"
                        ? "bg-[#01efac]/20 text-[#0d6b53]"
                        : "bg-[#524096]/15 text-[#524096]"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <h3 className="font-semibold text-xl text-[#2d2d2d]">{p.title}</h3>
                <p className="text-[#5a5a5a] text-sm leading-relaxed flex-1">
                  {p.description}
                </p>
                <Link
                  href={p.href}
                  className="text-[#524096] font-semibold text-sm hover:underline focus-visible:underline"
                  aria-label={`${p.cta} about ${p.title}`}
                >
                  {p.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values strip ─────────────────────────────────────── */}
      <section className="py-12 bg-[#f9fafa]" aria-label="Brand values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row flex-wrap justify-center gap-3">
            {values.map((v, i) => (
              <ValuePill key={v} value={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────── */}
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
          Antami exists so individuals with disabilities, their families, caregivers, and service providers can find the products, knowledge, and people they need: together, in one place, with the dignity they deserve.
        </p>
      </SectionBanner>
    </>
  );
}
