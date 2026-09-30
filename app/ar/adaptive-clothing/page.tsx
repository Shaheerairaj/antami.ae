import type { Metadata } from "next";
import { ArmHero } from "@/components/ArmHero";
import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";
import { SolidButton } from "@/components/SolidButton";
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
  title: "الملابس المكيّفة | أنتمي",
  description:
    "أول علامة إماراتية للملابس المكيّفة: عبايات، كندورات، إكسسوارات تكيّفية مدمجة، وخدمة التكييف حسب طلبك للقطع التي تحبها بالفعل.",
};

const values = ["الانتماء", "الاحترام", "البساطة", "التمكين", "الثقة"];

const womenProducts = [
  { name: "عباية مكيّفة، رملي", description: "إغلاق أمامي مغناطيسي، مع خيار فتحة خلفية للاستخدام أثناء الجلوس.", price: "420 د.إ" },
  { name: "عباية مكيّفة، رمادي فحمي", description: "مقابض سهلة المسك وقماش ناعم قابل للتهوية.", price: "420 د.إ" },
  { name: "فستان لف مكيّف", description: "إغلاق لف بيد واحدة، دون أزرار أو سحابات.", price: "350 د.إ" },
  { name: "جلابية مكيّفة", description: "أكمام واسعة وقصة مريحة لسهولة الحركة.", price: "380 د.إ" },
];

const menProducts = [
  { name: "كندورة مكيّفة، أبيض", description: "فتحة صدر مغناطيسية مخفية، وحافة سفلية قابلة للتعديل للجلوس.", price: "390 د.إ" },
  { name: "كندورة مكيّفة، رمادي", description: "ياقة بإغلاق أمامي لتسهيل الارتداء.", price: "390 د.إ" },
  { name: "بشت مكيّف", description: "رداء كتف خفيف الوزن بمشبك بسيط.", price: "450 د.إ" },
  { name: "طقم ثوب مكيّف", description: "طقم متناسق بأكمام مغناطيسية وفتحات جانبية للوصول السهل.", price: "410 د.إ" },
];

const services = [
  {
    title: "التكييف حسب طلبك",
    description: "أرسل لنا قطعتك المفضلة، وسنجعلها تناسبك.",
    href: "/ar/adapt-at-your-service",
    linkLabel: "ابدأ الآن",
  },
  {
    title: "الإكسسوارات المدمجة",
    description: "ميزات تكيّفية مدمجة مباشرة في ملابسك: أسهل في الارتداء وأسهل في الخلع.",
    href: "/ar/shop/accessories",
    linkLabel: "اعرف المزيد",
  },
  {
    title: "للموردين (B2B)",
    description: "نورّد إكسسوارات الملابس المكيّفة للمستشفيات ومراكز أصحاب الهمم والعلامات التجارية للملابس.",
    href: "/ar/suppliers",
    linkLabel: "استفسر",
  },
];

const steps = [
  { number: 1, title: "اختر", description: "أحضر قطعتك المفضلة أو اختر شيئًا جديدًا." },
  { number: 2, title: "أرسل", description: "أرسل القطعة إلى فريقنا في الإمارات." },
  { number: 3, title: "خصّص", description: "املأ نموذجنا لوصف التعديلات التي تريدها." },
  { number: 4, title: "استلم", description: "نقوم بالتعديل ونعيدها إليك." },
];

export default function AdaptiveClothingPage() {
  return (
    <>
      <ArmHero
        color={arm.color}
        accent={arm.accent}
        name={arm.labelAr}
        tagline="حيث الانتماء للجميع"
        description="أول علامة إماراتية للملابس المكيّفة، صُممت لحياة حقيقية وراحة حقيقية وكرامة حقيقية."
        fontFamily="var(--font-display-ar), sans-serif"
      >
        <SolidButton href="#shop" color={arm.accent}>تسوق الآن</SolidButton>
        <GhostButton href="/ar/adapt-at-your-service" textColor={arm.accent}>كيّف قطعتك</GhostButton>
      </ArmHero>

      {/* ── What is Antami? ───────────────────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard light className="p-8 max-w-3xl mx-auto">
            <h2 id="about-heading" className="text-3xl sm:text-4xl mb-6 text-center" style={{ fontFamily: "var(--font-display-ar), sans-serif", color: arm.accent }}>
              أنتمي تعني الانتماء
            </h2>
            <p className="text-[#2d2d2d] leading-relaxed mb-4">
              أنتمي (وتعني الإلهام والشغف والانتماء) منظومة متكاملة صُممت لدعم أصحاب الهمم وأسرهم ومقدمي الرعاية ومقدمي الخدمات.
            </p>
            <p className="text-[#2d2d2d] leading-relaxed">
              نتجاوز التوعية إلى وصول حقيقي وكرامة حقيقية ومشاركة هادفة، انطلاقًا من إيماننا بأن الانتماء يجب أن يكون جزءًا طبيعيًا من الحياة اليومية.
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
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>تسوق المجموعة</GradientText>
          </h2>
          <p className="text-center text-[#5a5a5a] mb-12 max-w-xl mx-auto">
            نموذج أولي يوضح شكل مجموعتنا المكيّفة للنساء والرجال.
          </p>

          <h3 className="text-xl font-semibold text-[#2d2d2d] mb-5">مجموعة النساء</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {womenProducts.map((p) => (
              <ProductCard key={p.name} {...p} ctaLabel="عرض المنتج" ctaHref="/ar/contact" />
            ))}
          </div>

          <h3 className="text-xl font-semibold text-[#2d2d2d] mb-5">مجموعة الرجال</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menProducts.map((p) => (
              <ProductCard key={p.name} {...p} ctaLabel="عرض المنتج" ctaHref="/ar/contact" />
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
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>ماذا نقدم أيضًا</GradientText>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Values Strip ─────────────────────────────────────── */}
      <section className="py-12 bg-white" aria-label="قيم العلامة">
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
          style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
        >
          &ldquo;هذا ليس عن الإحسان.{" "}
          <GradientText>هذا عن المجتمع، والاستقلالية، والفرصة.</GradientText>&rdquo;
        </h2>
        <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
          أنتمي منظومة متكاملة صُممت لدعم أصحاب الهمم وأسرهم ومقدمي الرعاية ومقدمي الخدمات، إذ تتجاوز التوعية إلى وصول حقيقي وكرامة حقيقية ومشاركة هادفة.
        </p>
      </SectionBanner>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="py-20 bg-[#f9fafa]" aria-labelledby="how-it-works-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl text-center mb-4"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>كيف تسير العملية</GradientText>
          </h2>
          <p className="text-center text-[#5a5a5a] mb-12 max-w-xl mx-auto">
            خدمة التكييف حسب طلبك تجعل الحصول على ملابس مكيّفة أمرًا بسيطًا.
          </p>
          <StepFlow steps={steps} />
          <div className="text-center mt-12">
            <GradientButton href="/ar/adapt-at-your-service">ابدأ تكييف قطعتك</GradientButton>
          </div>
        </div>
      </section>
    </>
  );
}
