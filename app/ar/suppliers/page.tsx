import type { Metadata } from "next";
import { GradientText } from "@/components/GradientText";
import { GradientButton } from "@/components/GradientButton";
import { StepFlow } from "@/components/StepFlow";
import { SupplierForm } from "./SupplierForm";

export const metadata: Metadata = {
  title: "موردو B2B: إكسسوارات الملابس المكيّفة | أنتمي",
  description:
    "توفر أنتمي إكسسوارات الملابس المكيّفة للمستشفيات ومراكز أصحاب الهمم والعلامات التجارية للملابس في جميع أنحاء الإمارات.",
};

const clients = [
  {
    title: "المستشفيات والعيادات",
    description:
      "ملابس مرضى يسهل خلعها للفحوصات وارتداؤها بعد الجراحة، ولا تتطلب مهارات حركية دقيقة.",
  },
  {
    title: "مراكز أصحاب الهمم",
    description:
      "إغلاقات مكيّفة للمدارس ومراكز التأهيل والبرامج النهارية حيث يكون الاستقلال في ارتداء الملابس هدفًا يوميًا.",
  },
  {
    title: "العلامات التجارية للملابس",
    description:
      "علامات تجارية قائمة تسعى لإطلاق خط ملابس مكيّف أو تطوير تصاميمها الحالية بإغلاقات سهلة الاستخدام، دون البدء من الصفر.",
  },
];

const products = [
  {
    name: "إكسسوارات الملابس المكيّفة",
    description:
      "مجموعة كاملة من المكونات المكيّفة (سحابات مغناطيسية، إغلاقات مغناطيسية مخفية، ألواح فيلكرو غير ملحوظة، ومقابض سهلة الإمساك) تُورَّد بكميات كبيرة لملابسكم.",
    highlight: "مصممة للملابس",
  },
  {
    name: "مواصفات مخصصة",
    description:
      "أخبرونا عن حالة الاستخدام (أثواب المرضى، الزي المدرسي، مجموعات البيع بالتجزئة) وسنطابق الإغلاقات والمقاسات والتشطيبات المناسبة لخطكم.",
    highlight: "مصممة حسب خطكم",
  },
  {
    name: "توريد بالجملة",
    description:
      "كميات موثوقة للمستشفيات والمراكز والعلامات التجارية. جودة ثابتة، ومواعيد تسليم يمكن التنبؤ بها، وتوصيل مباشر إلى منشأتكم أو شريك الإنتاج.",
    highlight: "ثبات على نطاق واسع",
  },
];

const steps = [
  { number: 1, title: "قدّم استفسارًا", description: "أخبرونا عن مؤسستكم وما تحتاجونه." },
  { number: 2, title: "نتواصل معكم", description: "سيتواصل فريق أنتمي معكم خلال يومي عمل لمناقشة الكميات والمواصفات والأسعار." },
  { number: 3, title: "استلموا طلبكم", description: "نورّد مباشرة إلى منشأتكم أو نسلّم إلى خط إنتاج علامتكم التجارية." },
];

export default function SuppliersPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative py-28 bg-[#1a1a2e] overflow-hidden"
        aria-labelledby="suppliers-hero-heading"
      >
        <div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(1,203,174,0.1) 0%, rgba(82,64,150,0.1) 60%, transparent 80%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-[#01efac] text-sm font-semibold uppercase tracking-wider mb-4">
            توريد B2B
          </p>
          <h1
            id="suppliers-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            إكسسوارات ملابس مكيّفة،{" "}
            <GradientText>تُورَّد على نطاق واسع</GradientText>
          </h1>
          <p className="text-white/70 text-xl max-w-xl leading-relaxed mb-8">
            نورّد إكسسوارات الملابس المكيّفة للمستشفيات ومراكز أصحاب الهمم والعلامات التجارية للملابس، لتتمكن مؤسستكم من تقديم خيارات مكيّفة دون الحاجة إلى البحث والتطوير.
          </p>
          <GradientButton href="#enquiry-form">استفسر الآن</GradientButton>
        </div>
      </section>

      {/* ── Who we work with ─────────────────────────────────── */}
      <section className="py-20 bg-[#f9fafa]" aria-labelledby="clients-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="clients-heading"
            className="text-3xl sm:text-4xl text-center mb-12"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>مع من نعمل</GradientText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clients.map((c) => (
              <div key={c.title} className="gradient-border-top bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-semibold text-lg text-[#2d2d2d] mb-3">{c.title}</h3>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products we supply ───────────────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="products-heading"
            className="text-3xl sm:text-4xl text-center mb-12"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>ما نورّده</GradientText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-[#f9fafa] rounded-2xl p-8 flex flex-col gap-4"
              >
                <div>
                  <span className="inline-block text-xs font-semibold gradient-bg text-white px-3 py-1 rounded-full mb-2">
                    {p.highlight}
                  </span>
                  <h3 className="font-semibold text-[#2d2d2d] text-base mb-2">{p.name}</h3>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="py-20 bg-[#f9fafa]" aria-labelledby="b2b-how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="b2b-how-heading"
            className="text-3xl sm:text-4xl text-center mb-12"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>كيف تسير العملية</GradientText>
          </h2>
          <StepFlow steps={steps} />
        </div>
      </section>

      {/* ── Enquiry form ─────────────────────────────────────── */}
      <section id="enquiry-form" className="py-20 bg-white" aria-labelledby="enquiry-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="enquiry-heading"
            className="text-3xl sm:text-4xl text-center mb-4"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>قدّم استفسار مورّد</GradientText>
          </h2>
          <p className="text-[#5a5a5a] text-center mb-8">
            أخبرونا عن مؤسستكم وما تحتاجونه. سنتواصل معكم خلال يومي عمل.
          </p>
          <SupplierForm />
        </div>
      </section>
    </>
  );
}
