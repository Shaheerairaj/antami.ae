import type { Metadata } from "next";
import Link from "next/link";
import { GradientText } from "@/components/GradientText";

export const metadata: Metadata = {
  title: "تسوق الملابس المتكيفة | أنتامي",
  description:
    "تصفّح مجموعة أنتامي من العبايات والكندورات المتكيفة والإكسسوارات المصممة لحياة حقيقية وكرامة حقيقية.",
};

const categories = [
  {
    href: "/ar/shop/adaptive-abayas",
    title: "العبايات المتكيفة",
    description: "عبايات مصممة بأناقة ومكيّفة من أجل الراحة وسهولة الحركة والاستقلالية.",
    color: "#01efac",
    textColor: "#1a1a2e",
  },
  {
    href: "/ar/shop/adaptive-kandouras",
    title: "الكندورات المتكيفة",
    description: "كندورات تقليدية أُعيد تصميمها بإغلاقات مغناطيسية وخيارات فتحة خلفية وتثبيتات سهلة الاستخدام.",
    color: "#2082a6",
    textColor: "#ffffff",
  },
  {
    href: "/ar/adapt-at-your-service",
    title: "التكييف حسب طلبك",
    description: "لديك قطعة تحبها بالفعل؟ أرسلها لنا وسنكيّفها لتناسبك.",
    color: "#524096",
    textColor: "#ffffff",
  },
  {
    href: "/ar/shop/accessories",
    title: "الإكسسوارات المدمجة",
    description: "سحابات مغناطيسية، إغلاقات مخفية، مقابض سهلة المسك: ميزات تكيّفية مدمجة مباشرة في ملابسك.",
    color: "#5f2a84",
    textColor: "#ffffff",
  },
];

export default function ShopPage() {
  return (
    <>
      <section className="py-24 bg-[#f9fafa]" aria-labelledby="shop-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            id="shop-heading"
            className="text-4xl sm:text-5xl mb-4"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>تسوق الملابس المتكيفة</GradientText>
          </h1>
          <p className="text-[#5a5a5a] text-lg max-w-xl mx-auto">
            أول علامة إماراتية للملابس المتكيفة، صُممت لحياة حقيقية وراحة حقيقية وكرامة حقيقية.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="فئات المنتجات">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end p-8
                  hover:shadow-xl transition-shadow duration-300 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[#524096]"
                style={{ backgroundColor: cat.color }}
                aria-label={`استكشف ${cat.title}`}
              >
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.4), transparent 60%)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <h2
                    className="text-2xl mb-2"
                    style={{ fontFamily: "var(--font-display-ar), sans-serif", color: cat.textColor }}
                  >
                    {cat.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: cat.textColor, opacity: 0.85 }}>
                    {cat.description}
                  </p>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: cat.textColor }}
                  >
                    استكشف
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
