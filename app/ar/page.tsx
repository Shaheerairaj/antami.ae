import type { Metadata } from "next";
import Image from "next/image";
import { GradientText } from "@/components/GradientText";
import { GradientButton } from "@/components/GradientButton";
import { ValuePill } from "@/components/ValuePill";
import { SectionBanner } from "@/components/SectionBanner";
import { PersonaSelector } from "./PersonaSelector";

export const metadata: Metadata = {
  title: "أنتمي: الانتماء للجميع",
  description:
    "أنتمي هو المكان الذي يشعر فيه أصحاب الهمم وأسرهم وكل من عانى يومًا ليشعر بالانتماء، بأنهم مرئيون، ومفهومون، ومدعومون، مع المعرفة والمجتمع اللازمين لعيش الحياة اليومية بكرامة.",
};

const values = ["الانتماء", "الاحترام", "البساطة", "التمكين", "الثقة"];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[calc(100vh-88px)] flex items-center bg-[#f9fafa] overflow-hidden"
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
              أنتمي تعني الانتماء
            </p>
            <h1
              id="hero-heading"
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-8"
              style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
            >
              <GradientText>الانتماء</GradientText>
              <span className="text-[#2d2d2d]"> للجميع.</span>
            </h1>
            <p className="text-xl text-[#5a5a5a] leading-relaxed mb-10 max-w-2xl">
              لأصحاب الهمم وأسرهم، ولكل من عانى يومًا ليشعر بالانتماء. مكان تشعر فيه بأنك مرئي ومفهوم، وتحصل على الدعم الذي تحتاجه.
            </p>
            <div className="flex flex-wrap gap-4">
              <GradientButton href="#i-am">انطلق من هنا</GradientButton>
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
                style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
              >
                <span className="text-[#2d2d2d]">وجهة واحدة لـ </span>
                <GradientText>الانتماء</GradientText>
              </h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-4 text-lg">
                تأسست أنتمي على فكرة واحدة: أن كل إنسان يستحق أن يُفهم وأن ينتمي. لأصحاب الهمم وأسرهم ومقدمي الرعاية والعاملين معهم، نجمع في مكان واحد ما كان متناثرًا في أماكن كثيرة جدًا. بيت واحد، بُني والكرامة في صميمه.
              </p>
              <p className="text-[#5a5a5a] leading-relaxed">
                نتجاوز التوعية إلى وصول حقيقي، وكرامة حقيقية، ومشاركة حقيقية، لأن الانتماء يجب أن يكون جزءًا طبيعيًا من الحياة اليومية، لا استثناءً.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src="/logos/logo-light.png"
                  alt="شعار أنتمي: دوامة دائرية ترمز إلى المجتمع والانتماء"
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
        className="py-20 bg-[#f9fafa] scroll-mt-24 md:scroll-mt-[152px]"
        aria-labelledby="i-am-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="i-am-heading"
              className="text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
            >
              <span className="text-[#2d2d2d]">أنا</span>
              <span className="text-[#2d2d2d]">…</span>
            </h2>
            <p className="text-[#5a5a5a] max-w-xl mx-auto">
              أخبرنا قليلًا عن نفسك، وسنوضح لك ماذا يعني أنتمي في حياتك اليومية.
            </p>
          </div>
          <PersonaSelector />
        </div>
      </section>

      {/* ── Values strip ─────────────────────────────────────── */}
      <section className="py-12 bg-[#f9fafa]" aria-label="قيم العلامة">
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
          style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
        >
          &ldquo;هذا ليس عن الإحسان.{" "}
          <GradientText>هذا عن المجتمع، والاستقلالية، والفرصة.</GradientText>&rdquo;
        </h2>
        <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
          وُجدت أنتمي ليجد أصحاب الهمم وأسرهم ومقدمو الرعاية ومقدمو الخدمات المنتجات والمعرفة والأشخاص الذين يحتاجونهم: معًا، في مكان واحد، بالكرامة التي يستحقونها.
        </p>
      </SectionBanner>
    </>
  );
}
