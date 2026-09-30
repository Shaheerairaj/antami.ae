import type { Metadata } from "next";
import { ArmHero } from "@/components/ArmHero";
import { GhostButton } from "@/components/GhostButton";
import { SolidButton } from "@/components/SolidButton";
import { GlassCard } from "@/components/GlassCard";
import { arms } from "@/lib/arms";

const arm = arms.find((a) => a.slug === "caregiver-app")!;

export const metadata: Metadata = {
  title: "تطبيق مقدمي الرعاية | أنتمي",
  description:
    "تطبيق لحجز خدمات موثوقة لمقدمي الرعاية والمساعدات المنزليات لأصحاب الهمم، قريبًا من أنتمي.",
};

const features = [
  { title: "ابحث عن مقدم رعاية", description: "تصفح مقدمي رعاية موثوقين ومطابقين لاحتياجات أسرتك." },
  { title: "احجز الزيارات", description: "حدد مواعيد زيارات لمرة واحدة أو متكررة تناسب روتين أسرتك." },
  { title: "تابع خطط الرعاية", description: "حافظ على تناغم الجميع من خلال ملاحظات مشتركة حول الرعاية اليومية والتفضيلات." },
  { title: "تواصل مباشرة", description: "راسل مقدم الرعاية مباشرة لتنسيق التفاصيل المهمة." },
];

const whoFor = [
  "العائلات التي تنظم رعاية منزلية لأحد أصحاب الهمم",
  "الأفراد الراغبون في حجز دعم موثوق ومُدقق بأنفسهم",
  "مقدمو الرعاية الراغبون في تقديم خدماتهم عبر أنتمي",
];

export default function CaregiverAppPage() {
  return (
    <>
      <ArmHero
        color={arm.color}
        accent={arm.accent}
        name={arm.labelAr}
        tagline="رعاية موثوقة، تُحجز بلمسات قليلة"
        description="تطبيق بُني لربط أصحاب الهمم وأسرهم بخدمات موثوقة لمقدمي الرعاية والمساعدات المنزليات، وقتما احتاجوها."
        fontFamily="var(--font-display-ar), sans-serif"
      >
        <SolidButton href="/ar/contact" color={arm.accent}>كن أول من يعلم</SolidButton>
        <GhostButton href="/ar/contact" textColor={arm.accent}>سجّل كمقدم رعاية</GhostButton>
      </ArmHero>

      <section className="py-20 bg-white" aria-labelledby="who-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="who-heading"
            className="text-3xl sm:text-4xl mb-10 text-center"
            style={{ fontFamily: "var(--font-display-ar), sans-serif", color: arm.accent }}
          >
            لمن هذا التطبيق
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {whoFor.map((w) => (
              <GlassCard key={w} light>
                <p className="text-[#2d2d2d] leading-relaxed font-medium">{w}</p>
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
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <span className="text-[#2d2d2d]">ما سيقدمه </span>
            <span style={{ color: arm.color }}>التطبيق</span>
          </h2>
          <p className="text-center text-[#5a5a5a] mb-12 max-w-xl mx-auto">
            لمحة أولى عما نبنيه. ستتضح التفاصيل أكثر كلما اقتربنا من الإطلاق.
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
            قريبًا
          </span>
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl mb-4 text-white"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            نعمل حاليًا على بناء تطبيق مقدمي الرعاية
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            اترك بياناتك وسنخبرك بمجرد أن يصبح جاهزًا لحجز أول زيارة لك.
          </p>
          <SolidButton href="/ar/contact" color={arm.accent}>أبلغني</SolidButton>
        </div>
      </section>
    </>
  );
}
