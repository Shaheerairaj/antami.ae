import type { Metadata } from "next";
import { GradientText } from "@/components/GradientText";
import { FounderCard } from "@/components/FounderCard";
import { ValuePill } from "@/components/ValuePill";

export const metadata: Metadata = {
  title: "قصتنا | أنتامي",
  description:
    "وُلدت من تجربة حياتية حقيقية. بُنيت لمجتمع يستحق الأفضل. تعرف على أنتامي، أول علامة ملابس متكيفة في الإمارات.",
};

const values = [
  {
    name: "الانتماء",
    description: "خلق مساحات (مادية ورقمية) يشعر فيها الجميع بالانتماء الحقيقي، لا مجرد التكيف معهم.",
  },
  {
    name: "الاحترام",
    description: "معاملة كل فرد بكرامة، واحترام استقلاليته، وعدم اختزاله أبدًا في إعاقته.",
  },
  {
    name: "البساطة",
    description: "إزالة العوائق في كل تجربة، من العثور على منتج إلى تكييف قطعة ملابس.",
  },
  {
    name: "التمكين",
    description: "تزويد الأفراد والأسر ومقدمي الرعاية بالأدوات والمعلومات والمجتمع اللازم للازدهار.",
  },
  {
    name: "الثقة",
    description: "أن نكون موثوقين وشفافين وثابتين، لأن مجتمعنا يستحق علامة يمكنه الاعتماد عليها.",
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
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>قصتنا</GradientText>
          </h1>
          <p className="text-xl text-[#5a5a5a] max-w-xl leading-relaxed">
            وُلدت من تجربة حياتية حقيقية. بُنيت لمجتمع يستحق الأفضل.
          </p>
        </div>
      </section>

      {/* ── The Why ──────────────────────────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2
            id="why-heading"
            className="text-3xl mb-6"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>لماذا أنتامي</GradientText>
          </h2>
          <p className="text-[#5a5a5a] leading-relaxed mb-4 text-lg">
            أنتامي (وتعني الإلهام والشغف والانتماء) وُلدت من إيمان بأن كل شخص يستحق ملابس تناسبه، لا أن يتكيف هو معها.
          </p>
          <p className="text-[#5a5a5a] leading-relaxed mb-4">
            لوقت طويل جدًا، اضطر أصحاب الهمم إلى التنازل عن الأناقة والهوية والاستقلالية للحصول على ملابس عملية. بنينا أنتامي لتغيير ذلك، بدءًا بعبايات وكندورات متكيفة متجذرة في الثقافة الإماراتية.
          </p>
          <p className="text-[#5a5a5a] leading-relaxed">
            الانتماء يجب أن يكون جزءًا طبيعيًا من الحياة اليومية، لا استثناءً.
          </p>
        </div>
      </section>

      {/* ── Founders ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#f9fafa]" aria-labelledby="founders-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="founders-heading"
            className="text-3xl sm:text-4xl text-center mb-12"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>تعرف على المؤسِّستين</GradientText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <FounderCard
              name="Shaikha"
              bio="شريكة مؤسسة لأنتامي. السيرة الذاتية قريبًا."
            />
            <FounderCard
              name="Sally"
              bio="شريكة مؤسسة لأنتامي. السيرة الذاتية قريبًا."
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
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>الرسالة والرؤية</GradientText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative bg-[#f9fafa] rounded-2xl p-8">
              <div className="absolute top-0 left-0 w-12 h-1 gradient-bg rounded-tr-full" aria-hidden="true" />
              <h3 className="font-semibold text-lg text-[#2d2d2d] mb-4">رسالتنا</h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                أنتامي منظومة متكاملة أُنشئت لدعم أصحاب الهمم وأسرهم ومقدمي الرعاية ومقدمي الخدمات؛ ليتجاوز الشمول مجرد التوعية إلى وصول حقيقي وكرامة ومشاركة ذات معنى. مبنية على إيمان بأن الانتماء يجب أن يكون جزءًا طبيعيًا من الحياة اليومية، تجمع أنتامي الأشخاص والموارد والفرص في مكان واحد، لتجعل الدعم أسهل في الإيجاد والتنقل والثقة به.
              </p>
            </div>
            <div className="relative bg-[#f9fafa] rounded-2xl p-8">
              <div className="absolute top-0 left-0 w-12 h-1 gradient-bg rounded-tr-full" aria-hidden="true" />
              <h3 className="font-semibold text-lg text-[#2d2d2d] mb-4">رؤيتنا</h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                أن نخلق عالمًا يعيش فيه أصحاب الهمم وأسرهم انتماءً حقيقيًا، لا كاستثناء، بل كجزء طبيعي من الحياة اليومية. توجد أنتامي ليتجاوز الشمول مجرد التوعية إلى الوصول والكرامة والتواصل ذي المعنى، بما يمكّن الأفراد والأسر ومقدمي الرعاية ومقدمي الخدمات من المشاركة في المجتمع بثقة ودعم.
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
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>قيمنا</GradientText>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.name} className="gradient-border-top bg-white rounded-2xl p-6 shadow-sm">
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
