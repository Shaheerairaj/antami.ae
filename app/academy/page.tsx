import type { Metadata } from "next";
import { ArmHero } from "@/components/ArmHero";
import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";
import { InvertButton } from "@/components/InvertButton";
import { GlassCard } from "@/components/GlassCard";
import { arms } from "@/lib/arms";

const arm = arms.find((a) => a.slug === "academy")!;

export const metadata: Metadata = {
  title: "Antami Academy | Antami",
  description:
    "Antami Academy is a community for people of determination to gather, take courses, post on forums, message each other, and form group chats.",
};

const whoFor = [
  "People of determination looking to connect and grow",
  "Families and caregivers who want to learn alongside them",
  "Service providers, corporates, and government entities",
];

const whatHappens = [
  { icon: "📚", title: "Courses", description: "Learn from specialists on topics that matter to everyday life." },
  { icon: "💬", title: "Forums", description: "Ask questions, share experiences, and find people who understand." },
  { icon: "✉️", title: "Messaging", description: "Message members directly to build real, one-on-one connections." },
  { icon: "👥", title: "Group Chats", description: "Join groups built around shared interests, goals, or experiences." },
];

export default function AcademyPage() {
  return (
    <>
      <ArmHero
        color={arm.color}
        textColor={arm.textColor}
        eyebrow="Antami Academy"
        title="A community built for belonging"
        description="Antami Academy is where people of determination gather to learn, share, and support one another, alongside the families, caregivers, and providers who walk beside them."
      >
        <InvertButton href="#skool" accentColor={arm.accent}>Join our community</InvertButton>
        <GhostButton href="/contact" textColor={arm.textColor}>Ask a question</GhostButton>
      </ArmHero>

      <section className="py-20" style={{ backgroundColor: arm.color }} aria-labelledby="who-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="who-heading"
            className="text-3xl sm:text-4xl mb-10 text-center"
            style={{ fontFamily: "Helony, Georgia, serif", color: arm.textColor }}
          >
            Who this is for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {whoFor.map((w) => (
              <GlassCard key={w} light>
                <p className="leading-relaxed font-medium" style={{ color: arm.textColor }}>
                  {w}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" aria-labelledby="what-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="what-heading"
            className="text-3xl sm:text-4xl mb-4 text-center"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <span className="text-[#2d2d2d]">What happens </span>
            <span style={{ color: arm.color === "#01efac" ? "#0d6b53" : arm.color }}>there</span>
          </h2>
          <p className="text-center text-[#5a5a5a] mb-12 max-w-xl mx-auto">
            One community, built to grow with you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatHappens.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6 flex flex-col gap-3 border border-[#e5e7eb]"
                style={{ backgroundColor: "#f9fafa" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl text-white"
                  style={{ backgroundColor: arm.color, color: arm.textColor }}
                  aria-hidden="true"
                >
                  {f.icon}
                </div>
                <h3 className="font-semibold text-lg text-[#2d2d2d]">{f.title}</h3>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skool" className="py-20" style={{ backgroundColor: "#1a1a2e" }} aria-labelledby="skool-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="skool-heading"
            className="text-3xl sm:text-4xl mb-4 text-white"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            Antami Academy lives on Skool
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            We run the community on Skool so members can jump between courses, forums, messages, and group chats in one place. Tap below to join us there.
          </p>
          {/* TODO: replace with the real Skool community URL */}
          <GradientButton href="#">Go to the Skool community</GradientButton>
        </div>
      </section>
    </>
  );
}
