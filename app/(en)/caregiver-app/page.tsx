import type { Metadata } from "next";
import { ArmHero } from "@/components/ArmHero";
import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";
import { InvertButton } from "@/components/InvertButton";
import { GlassCard } from "@/components/GlassCard";
import { arms } from "@/lib/arms";

const arm = arms.find((a) => a.slug === "caregiver-app")!;

export const metadata: Metadata = {
  title: "Caregiver App | Antami",
  description:
    "An app to book trusted caregiver and maid services for people of determination, coming soon from Antami.",
};

const features = [
  { title: "Find a caregiver", description: "Browse vetted caregivers matched to the support your household needs." },
  { title: "Book visits", description: "Schedule one-off or recurring visits around your family's routine." },
  { title: "Track care plans", description: "Keep everyone aligned with shared notes on daily care and preferences." },
  { title: "Chat directly", description: "Message your caregiver directly to coordinate the details that matter." },
];

const whoFor = [
  "Families arranging in-home care for a person of determination",
  "Individuals looking to book trusted, vetted support themselves",
  "Caregivers who want to offer their services through Antami",
];

export default function CaregiverAppPage() {
  return (
    <>
      <ArmHero
        color={arm.color}
        textColor={arm.textColor}
        name={arm.label}
        tagline="Trusted care, booked in a few taps"
        description="An application built to connect people of determination and their families with vetted caregiver and maid services, whenever they're needed."
      >
        <InvertButton href="/contact" accentColor={arm.accent}>Be the first to know</InvertButton>
        <GhostButton href="/contact" textColor={arm.textColor}>Register as a caregiver</GhostButton>
      </ArmHero>

      <section className="py-20" style={{ backgroundColor: arm.color }} aria-labelledby="who-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="who-heading"
            className="text-3xl sm:text-4xl mb-10 text-center text-white"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            Who it&rsquo;s for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {whoFor.map((w) => (
              <GlassCard key={w}>
                <p className="text-white leading-relaxed font-medium">{w}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl mb-4 text-center"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <span className="text-[#2d2d2d]">What the app will </span>
            <span style={{ color: arm.color }}>do</span>
          </h2>
          <p className="text-center text-[#5a5a5a] mb-12 max-w-xl mx-auto">
            A first look at what we&rsquo;re building. Details will grow as we get closer to launch.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6 flex flex-col gap-3 border border-[#e5e7eb]"
                style={{ backgroundColor: "#f9fafa" }}
              >
                <h3 className="font-semibold text-lg text-[#2d2d2d]">{f.title}</h3>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: "#1a1a2e" }}
        aria-labelledby="cta-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-6"
            style={{ backgroundColor: arm.color, color: arm.textColor }}
          >
            Coming soon
          </span>
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl mb-4 text-white"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            We&rsquo;re building the Caregiver App now
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Leave your details and we&rsquo;ll let you know the moment it&rsquo;s ready to book your first visit.
          </p>
          <GradientButton href="/contact">Notify me</GradientButton>
        </div>
      </section>
    </>
  );
}
