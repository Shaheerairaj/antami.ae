import type { Metadata } from "next";
import { ArmHero } from "@/components/ArmHero";
import { GhostButton } from "@/components/GhostButton";
import { SolidButton } from "@/components/SolidButton";
import { ProductCard } from "@/components/ProductCard";
import { arms } from "@/lib/arms";

const arm = arms.find((a) => a.slug === "marketplace")!;

export const metadata: Metadata = {
  title: "سوق POD | أنتمي",
  description:
    "سوق POD مبني من قبل أصحاب الهمم، للعالم: أنشئ متجرك وابدأ ببيع ما تصنعه، من الحرف اليدوية إلى التصاميم الرقمية.",
};

const shops = [
  { initial: "ه", name: "متجر هالة اليدوي", tagline: "شموع وديكور منزلي", items: 12 },
  { initial: "ر", name: "تصاميم راشد", tagline: "فن رقمي ومطبوعات", items: 27 },
  { initial: "أ", name: "مطبخ أمل", tagline: "مخبوزات ومعلبات", items: 8 },
  { initial: "س", name: "استديو سندس", tagline: "مجوهرات وإكسسوارات", items: 19 },
];

const items = [
  { name: "شمعة صويا مصبوبة يدويًا", description: "شمعة مصنوعة بكميات محدودة بعطر العود والورد.", price: "65 د.إ" },
  { name: "لوحة غروب الصحراء", description: "رسم رقمي مطبوع على ورق أرشيفي عالي الجودة.", price: "120 د.إ" },
  { name: "برطمان مربى التمر والمكسرات", description: "وصفة عائلية، تُحضّر طازجة كل أسبوع.", price: "35 د.إ" },
  { name: "سوار مجلس مرصّع بالخرز", description: "خرز منسوج يدويًا بألوان العلامة.", price: "80 د.إ" },
  { name: "بورتريه مخصص حسب الطلب", description: "بورتريه رقمي يُصمم حسب الطلب.", price: "250 د.إ" },
  { name: "حقيبة قماشية مطرزة", description: "حقيبة قماشية بتفاصيل تطريز يدوي.", price: "95 د.إ" },
];

export default function MarketplacePage() {
  return (
    <>
      <ArmHero
        color={arm.color}
        accent={arm.accent}
        name={arm.labelAr}
        tagline="من صنع أصحاب الهمم، للعالم"
        description="أنشئ متجرك الخاص، اعرض ما تصنعه، وبِعه لأي شخص في أي مكان. هذا مفهوم أولي: المتاجر والمنتجات أدناه أمثلة توضيحية."
        fontFamily="var(--font-display-ar), sans-serif"
      >
        <SolidButton href="/ar/contact" color={arm.accent}>افتح متجرك</SolidButton>
        <GhostButton href="#items" textColor={arm.accent}>تصفح المنتجات</GhostButton>
      </ArmHero>

      <section className="py-20 bg-white" aria-labelledby="shops-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="shops-heading"
            className="text-3xl sm:text-4xl mb-10 text-center"
            style={{ fontFamily: "var(--font-display-ar), sans-serif", color: arm.accent }}
          >
            متاجر مميزة
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shops.map((shop) => (
              <div
                key={shop.name}
                className="bg-black/5 border border-black/10 rounded-2xl p-6 flex flex-col items-center text-center gap-3"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-semibold text-white flex-shrink-0"
                  style={{ backgroundColor: arm.accent }}
                  aria-hidden="true"
                >
                  {shop.initial}
                </div>
                <h3 className="font-semibold text-[#2d2d2d]">{shop.name}</h3>
                <p className="text-[#5a5a5a] text-sm">{shop.tagline}</p>
                <p className="text-[#5a5a5a]/70 text-xs">{shop.items} منتج</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="items"
        className="py-20 bg-white scroll-mt-24 md:scroll-mt-[152px]"
        aria-labelledby="items-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="items-heading"
            className="text-3xl sm:text-4xl mb-4 text-center"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <span className="text-[#2d2d2d]">منتجات </span>
            <span style={{ color: arm.color }}>شائعة</span>
          </h2>
          <p className="text-center text-[#5a5a5a] mb-12 max-w-xl mx-auto">
            نماذج مما يمكن للبائعين عرضه في السوق.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <ProductCard key={item.name} {...item} ctaLabel="عرض المنتج" ctaHref="/ar/contact" />
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: "#1a1a2e" }}
        aria-labelledby="sell-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="sell-heading"
            className="text-3xl sm:text-4xl mb-4 text-white"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            هل أنت مستعد لبيع ما تصنعه؟
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            أخبرنا عن متجرك وسنساعدك على الانطلاق في السوق.
          </p>
          <SolidButton href="/ar/contact" color={arm.accent}>افتح متجرك</SolidButton>
        </div>
      </section>
    </>
  );
}
