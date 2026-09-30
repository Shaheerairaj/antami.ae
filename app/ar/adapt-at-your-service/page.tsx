import type { Metadata } from "next";
import { GradientText } from "@/components/GradientText";
import { StepFlow } from "@/components/StepFlow";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AdaptationForm } from "./AdaptationForm";

export const metadata: Metadata = {
  title: "التكييف حسب طلبك | أنتمي",
  description:
    "أرسل لنا قطعتك المفضلة وسنكيّفها لتمنحك الراحة والاستقلالية والكرامة. أو اختر قطعة جديدة وسنكيّفها لك.",
};

const steps = [
  { number: 1, title: "اختر مسارك", description: "أحضر قطعتك المفضلة التي تملكها، أو اشترِ قطعة جديدة لتكييفها." },
  { number: 2, title: "سلّم القطعة", description: "أرسل ملابسك إلى فريقنا الموجود في دولة الإمارات." },
  { number: 3, title: "املأ النموذج", description: "أخبرنا بالتحديد ما التعديلات التي تحتاجها." },
  { number: 4, title: "نعيدها إليك", description: "نكيّف ملابسك ونرسلها إليك من جديد." },
];

const faqs = [
  {
    question: "كم يستغرق التكييف من وقت؟",
    answer: "تختلف مدة التنفيذ حسب مدى تعقيد التكييف المطلوب. سنؤكد لك الجدول الزمني بمجرد استلام النموذج والقطعة. (نص مؤقت، سيُحدَّد لاحقًا من قبل المؤسسين).",
  },
  {
    question: "ما أنواع الملابس التي يمكنكم تكييفها؟",
    answer: "يمكننا تكييف معظم أنواع الملابس، بما في ذلك العبايات والكندورات والملابس اليومية. (نص مؤقت، سيُحدَّد لاحقًا من قبل المؤسسين).",
  },
  {
    question: "هل يجب أن أكون داخل دولة الإمارات؟",
    answer: "نخدم بشكل أساسي العملاء داخل دولة الإمارات في مرحلة الإطلاق. (نص مؤقت، سيُحدَّد لاحقًا من قبل المؤسسين).",
  },
  {
    question: "كيف أُرسل قطعتي؟",
    answer: "يمكنك تسليم القطعة شخصيًا أو استخدام خدمة توصيل. سنزوّدك بتعليمات كاملة بعد إرسال النموذج. (نص مؤقت، سيُحدَّد لاحقًا من قبل المؤسسين).",
  },
  {
    question: "ما أنواع التكييفات التي تقدمونها؟",
    answer: "نقدّم إغلاقات مغناطيسية، وبدائل عن شريط الفيلكرو، وخيارات فتحة خلفية، وفتحات سهلة الوصول، وغير ذلك. (نص مؤقت، سيُحدَّد لاحقًا من قبل المؤسسين).",
  },
];

export default function AdaptAtYourServicePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative py-28 bg-[#1a1a2e] overflow-hidden"
        aria-labelledby="aays-hero-heading"
      >
        <div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(1,239,172,0.08) 0%, rgba(95,42,132,0.1) 60%, transparent 80%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1
            id="aays-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>التكييف حسب طلبك</GradientText>
          </h1>
          <p className="text-white/70 text-xl max-w-xl leading-relaxed">
            قطعتك المفضلة، أُعيد تصميمها من أجلك.
          </p>
        </div>
      </section>

      {/* ── Two paths ────────────────────────────────────────── */}
      <section className="py-16 bg-[#f9fafa]" aria-labelledby="paths-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="paths-heading"
            className="text-2xl sm:text-3xl text-center mb-10"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>اختر مسارك</GradientText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm gradient-border-top">
              <h3 className="font-semibold text-lg text-[#2d2d2d] mb-2">لدي بالفعل قطعة أحبها</h3>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">
                أحضر لنا قطعتك المفضلة التي تملكها وسنكيّفها لتناسبك، محافظين على ما تحبه فيها مع إضافة ما تحتاجه.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm gradient-border-top">
              <h3 className="font-semibold text-lg text-[#2d2d2d] mb-2">أريد البدء من جديد</h3>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">
                اشترِ قطعة جديدة، أرسلها إلينا، واملأ نموذجنا لاختيار التعديلات التي تريدها، وسنتولى الباقي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="py-16 bg-white" aria-labelledby="aays-how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="aays-how-heading"
            className="text-2xl sm:text-3xl text-center mb-12"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>كيف تسير العملية</GradientText>
          </h2>
          <StepFlow steps={steps} />
        </div>
      </section>

      {/* ── Adaptation Request Form ───────────────────────────── */}
      <section className="py-16 bg-[#f9fafa]" aria-labelledby="form-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="form-heading"
            className="text-2xl sm:text-3xl text-center mb-8"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>اطلب تكييفًا</GradientText>
          </h2>
          <AdaptationForm />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl text-center mb-8"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>الأسئلة الشائعة</GradientText>
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
