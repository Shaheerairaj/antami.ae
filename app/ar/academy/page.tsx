import type { Metadata } from "next";
import { ArmHero } from "@/components/ArmHero";
import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";
import { InvertButton } from "@/components/InvertButton";
import { GlassCard } from "@/components/GlassCard";
import { arms } from "@/lib/arms";

const arm = arms.find((a) => a.slug === "academy")!;

export const metadata: Metadata = {
  title: "أكاديمية أنتامي | أنتامي",
  description:
    "أكاديمية أنتامي مجتمع لأصحاب الهمم للالتقاء وأخذ الدورات والمشاركة في المنتديات والتراسل وتكوين مجموعات الدردشة.",
};

const whoFor = [
  "أصحاب الهمم الراغبون في التواصل والنمو",
  "الأسر ومقدمو الرعاية الراغبون في التعلم معهم",
  "مقدمو الخدمات والشركات والجهات الحكومية",
];

const whatHappens = [
  { title: "الدورات", description: "تعلّم من متخصصين حول مواضيع تهم حياتك اليومية." },
  { title: "المنتديات", description: "اطرح الأسئلة، وشارك تجاربك، وتعرف على أشخاص يفهمونك." },
  { title: "المراسلة", description: "راسل الأعضاء مباشرة لبناء علاقات حقيقية فردية." },
  { title: "مجموعات الدردشة", description: "انضم إلى مجموعات مبنية على اهتمامات أو أهداف أو تجارب مشتركة." },
];

export default function AcademyPage() {
  return (
    <>
      <ArmHero
        color={arm.color}
        textColor={arm.textColor}
        name={arm.labelAr}
        tagline="مجتمع بُني من أجل الانتماء"
        description="أكاديمية أنتامي هي المكان الذي يجتمع فيه أصحاب الهمم للتعلم والمشاركة ودعم بعضهم البعض، إلى جانب الأسر ومقدمي الرعاية ومقدمي الخدمات الذين يسيرون بجانبهم."
        fontFamily="var(--font-display-ar), sans-serif"
      >
        <InvertButton href="#skool" accentColor={arm.accent}>انضم إلى مجتمعنا</InvertButton>
        <GhostButton href="/ar/contact" textColor={arm.textColor}>اطرح سؤالاً</GhostButton>
      </ArmHero>

      <section className="py-20" style={{ backgroundColor: arm.color }} aria-labelledby="who-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="who-heading"
            className="text-3xl sm:text-4xl mb-10 text-center"
            style={{ fontFamily: "var(--font-display-ar), sans-serif", color: arm.textColor }}
          >
            لمن هذا المجتمع؟
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
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <span className="text-[#2d2d2d]">ماذا يحدث </span>
            <span style={{ color: arm.color === "#01efac" ? "#0d6b53" : arm.color }}>هناك</span>
          </h2>
          <p className="text-center text-[#5a5a5a] mb-12 max-w-xl mx-auto">
            مجتمع واحد، بُني لينمو معك.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatHappens.map((f) => (
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
        id="skool"
        className="py-20"
        style={{ backgroundColor: "#1a1a2e" }}
        aria-labelledby="skool-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="skool-heading"
            className="text-3xl sm:text-4xl mb-4 text-white"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            أكاديمية أنتامي على Skool
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            ندير مجتمعنا على Skool حتى يتمكن الأعضاء من التنقل بين الدورات والمنتديات والرسائل ومجموعات الدردشة في مكان واحد. اضغط أدناه للانضمام إلينا هناك.
          </p>
          {/* TODO: replace with the real Skool community URL */}
          <GradientButton href="#">انتقل إلى مجتمع Skool</GradientButton>
        </div>
      </section>
    </>
  );
}
