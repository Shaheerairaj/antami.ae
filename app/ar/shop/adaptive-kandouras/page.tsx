import type { Metadata } from "next";
import { GradientText } from "@/components/GradientText";
import { ProductCard } from "@/components/ProductCard";
import { GradientButton } from "@/components/GradientButton";

export const metadata: Metadata = {
  title: "الكندورات المتكيفة | أنتامي",
  description:
    "كندورات تقليدية أُعيد تصميمها لتسهيل الحركة، مع إغلاقات سهلة الاستخدام واستقلالية أكبر.",
};

const products: Array<{ name: string; description: string }> = [];

export default function AdaptiveKandourasPage() {
  return (
    <>
      <section className="py-24 bg-[#f9fafa]" aria-labelledby="kandouras-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 gradient-bg rounded-full" aria-hidden="true" />
            <h1
              id="kandouras-heading"
              className="text-4xl sm:text-5xl"
              style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
            >
              <GradientText>الكندورات المتكيفة</GradientText>
            </h1>
          </div>
          <p className="text-[#5a5a5a] text-lg max-w-xl">
            كندورات تقليدية أُعيد تصميمها لتسهيل الحركة والارتداء. إغلاقات مغناطيسية، وفتحات سهلة الوصول، متكيفة مع الحياة اليومية.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="منتجات الكندورات">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <ProductCard key={p.name} {...p} ctaLabel="استفسر" ctaHref="/ar/contact" />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-[#2d2d2d] mb-3" style={{ fontFamily: "var(--font-display-ar), sans-serif" }}>
                قريبًا
              </h2>
              <p className="text-[#5a5a5a] mb-8 max-w-md mx-auto">
                مجموعة الكندورات المتكيفة لدينا قيد التصنيع بعناية. كن أول من يعلم عند إطلاقها.
              </p>
              <GradientButton href="/ar/contact">أبلغني</GradientButton>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
