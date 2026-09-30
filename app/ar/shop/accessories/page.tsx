import type { Metadata } from "next";
import { GradientText } from "@/components/GradientText";

export const metadata: Metadata = {
  title: "الإكسسوارات المكيّفة | أنتمي",
  description:
    "إكسسوارات تكيّفية مدمجة (سحابات مغناطيسية، إغلاقات مخفية، مقابض سهلة المسك) مدمجة في ملابس أنتمي لتجعل الارتداء أبسط وأكثر استقلالية.",
};

const features = [
  {
    name: "سحابات مغناطيسية",
    callout: "تُغلق بيد واحدة",
    description:
      "سحابات مغناطيسية مدمجة تُغلق بسهولة تامة دون الحاجة لدقة حركية. مدمجة في الجاكيتات والعبايات والفساتين لارتداء سريع وكريم.",
  },
  {
    name: "إغلاقات مغناطيسية مخفية",
    callout: "تبدو كالأزرار، وتُفتح كالسحر",
    description:
      "مغناطيسات عالية القوة مخفية خلف الأزرار والكبسات. تبدو القطعة من الخارج دون أي تغيير، لكنها تُفتح وتُغلق بلمسة واحدة.",
  },
  {
    name: "لوحات فيلكرو خفية",
    callout: "سريعة وآمنة وقابلة للتعديل",
    description:
      "شرائط تثبيت صناعية مخيطة في الخياطات الجانبية والفتحات الخلفية وأحزمة الخصر. مثالية للارتداء أثناء الجلوس أو مع محدودية الحركة.",
  },
  {
    name: "مقابض سهلة المسك",
    callout: "مقابض أكبر، إمساك أسهل",
    description:
      "مقابض وألسنة بحجم كبير تناسب محدودية قوة القبضة أو المهارة الحركية، بأقمشة منسجمة مع القطعة.",
  },
];

export default function AccessoriesPage() {
  return (
    <>
      <section className="py-24 bg-[#f9fafa]" aria-labelledby="accessories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 gradient-bg rounded-full" aria-hidden="true" />
            <h1
              id="accessories-heading"
              className="text-4xl sm:text-5xl"
              style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
            >
              <GradientText>الإكسسوارات المكيّفة المدمجة</GradientText>
            </h1>
          </div>
          <p className="text-[#5a5a5a] text-lg max-w-2xl">
            تفاصيل صغيرة ومدروسة مدمجة مباشرة في ملابسك، تجعل ارتداءها وخلعها أسهل وتمنحك الثقة كل يوم.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="الميزات التكيفية التي نضيفها">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.name} className="gradient-border-top bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#f0fdf9] to-[#e8eaf6] flex items-center justify-center">
                  <span className="text-[#524096] opacity-30 text-6xl" aria-hidden="true">◈</span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h2 className="font-semibold text-[#2d2d2d] text-lg">{f.name}</h2>
                  <div
                    className="text-xs font-semibold px-3 py-1 rounded-full inline-block self-start gradient-bg text-white"
                    aria-label={`ما تقوم به: ${f.callout}`}
                  >
                    {f.callout}
                  </div>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed flex-1">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-[#f9fafa] rounded-2xl p-10">
            <h2
              className="text-2xl sm:text-3xl mb-4"
              style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
            >
              <GradientText>هل تريد هذه الميزات في خزانتك؟</GradientText>
            </h2>
            <p className="text-[#5a5a5a] mb-6 max-w-xl mx-auto">
              يمكن تصنيع كل قطعة من أنتمي بالميزات التكيفية التي تناسبك. تسوق مجموعتنا المكيّفة أو أرسل لنا قطعتك المفضلة لتكييفها.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/ar/shop"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full gradient-bg text-white text-sm font-semibold hover:brightness-110 transition-all min-h-[44px]"
              >
                تسوق الملابس المكيّفة
              </a>
              <a
                href="/ar/adapt-at-your-service"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-[#524096] text-[#524096] text-sm font-semibold hover:bg-[#524096] hover:text-white transition-all min-h-[44px]"
              >
                كيّف قطعتك
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
