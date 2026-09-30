import type { Metadata } from "next";
import Link from "next/link";
import { GhostButton } from "@/components/GhostButton";
import { SolidButton } from "@/components/SolidButton";
import { AcademyCatalog } from "@/components/academy/AcademyCatalog";
import { DairatiWidget } from "@/components/academy/DairatiWidget";
import { BRAND, withAlpha, trainers } from "@/lib/academy";

const sally = trainers.sally;
const fontAr = "var(--font-display-ar), sans-serif";

export const metadata: Metadata = {
  title: "أكاديمية أنتمي | أنتمي",
  description:
    "أكاديمية أنتمي: دورات مجانية تبني الانتماء، للأسر وأصحاب الهمم والمعلمين وأصحاب العمل والفرق الطبية.",
};

export default function AcademyPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ backgroundColor: withAlpha(BRAND.mint, 0.12) }} aria-labelledby="academy-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="flex flex-col gap-5">
            <div className="text-sm font-semibold" style={{ color: BRAND.mintInk }}>
              أكاديمية أنتمي
            </div>
            <h1 id="academy-hero-heading" className="text-4xl sm:text-6xl leading-[1.2] m-0" style={{ fontFamily: fontAr, color: BRAND.purple }}>
              تعلّم يبني الانتماء
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed max-w-xl m-0" style={{ color: BRAND.text }}>
              دورات عملية للأسر وأصحاب الهمم والمعلمين وأصحاب العمل والفرق الطبية. نركّز على ما يحتاجه كل شخص، وما
              يستطيع فعله، والدعم الذي يساعده فعليًا على فعل المزيد بنفسه.
            </p>
            <div className="flex flex-wrap gap-3.5 mt-1">
              <SolidButton href="/ar/academy/courses/module-1" color={BRAND.purple}>
                ابدأ الدورة المجانية
              </SolidButton>
              <GhostButton href="#courses" textColor={BRAND.purple}>
                تصفّح الدورات
              </GhostButton>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 sm:p-9 flex flex-col gap-5 border" style={{ borderColor: BRAND.border }}>
            <div className="text-xs font-semibold" style={{ color: BRAND.mintInk }}>
              معادلة أنتمي
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-5 py-4 rounded-2xl text-lg font-semibold" style={{ backgroundColor: `${BRAND.blue}18`, color: BRAND.blue }}>
                تمكين الفرد
              </div>
              <div className="text-center text-2xl font-bold" style={{ color: BRAND.text }}>
                +
              </div>
              <div className="px-5 py-4 rounded-2xl text-lg font-semibold" style={{ backgroundColor: `${BRAND.purple}18`, color: BRAND.purple }}>
                جاهزية البيئة
              </div>
              <div className="text-center text-2xl font-bold" style={{ color: BRAND.text }}>
                =
              </div>
              <div className="px-5 py-4 rounded-2xl text-xl font-bold" style={{ backgroundColor: BRAND.mint, color: BRAND.mintInk }}>
                الانتماء
              </div>
            </div>
          </div>
        </div>
      </section>

      <AcademyCatalog locale="ar" />

      {/* Trainers */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8" aria-labelledby="trainers-heading">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <h2 id="trainers-heading" className="text-3xl sm:text-4xl m-0" style={{ fontFamily: fontAr }}>
            تعرّف على المدربين
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/ar/academy/trainers/sally-helweh"
              className="no-underline text-inherit bg-white border rounded-2xl p-7 flex flex-col gap-3.5"
              style={{ borderColor: BRAND.border }}
            >
              <div className="flex gap-4 items-center">
                <span className="w-[72px] h-[72px] rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0" style={{ backgroundColor: sally.color, color: BRAND.mintInk }}>
                  {sally.initials}
                </span>
                <span className="flex flex-col">
                  <span className="text-lg font-semibold">{sally.name}</span>
                  <span className="text-sm text-[#5a5a5a]">معالجة بالتنويم الإيحائي · مدربة آباء · متحدثة</span>
                </span>
              </div>
              <p className="m-0 text-sm leading-relaxed" style={{ color: BRAND.text }}>
                معلمة دمج سابقة وأم لولدين مصابين بالتوحد، دربت سالي أكثر من 200 موظف وقائد في الإمارات والسعودية
                والكويت.
              </p>
              <span className="text-sm font-semibold" style={{ color: BRAND.blue }}>
                ← عرض الملف الشخصي
              </span>
            </Link>
            <div className="border-2 border-dashed rounded-2xl p-7 flex flex-col gap-3 justify-center" style={{ borderColor: "#b9cbc6" }}>
              <span className="text-lg font-semibold">مدربون آخرون قريبًا</span>
              <span className="text-sm leading-relaxed text-[#5a5a5a]">
                معالجون ومعلمون وأطباء وأصحاب همم يشاركون خبراتهم.
              </span>
            </div>
            <div className="rounded-2xl p-7 flex flex-col gap-3 justify-center" style={{ backgroundColor: `${BRAND.purple}12` }}>
              <span className="text-lg font-semibold" style={{ color: BRAND.purple }}>
                تريد التدريب معنا؟
              </span>
              <span className="text-sm leading-relaxed" style={{ color: BRAND.text }}>
                شارك خبرتك أو تجربتك الحياتية مع الأسر والمؤسسات.
              </span>
              <Link href="/ar/contact" className="text-sm font-semibold no-underline" style={{ color: BRAND.purple }}>
                ← كن مدربًا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Da'irati promo */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto rounded-3xl p-9 sm:p-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-center" style={{ backgroundColor: BRAND.purple }}>
          <div className="flex flex-col gap-4">
            <span className="self-start px-3.5 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: BRAND.mint, color: BRAND.mintInk }}>
              للمشتركين
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white m-0">
              <span lang="ar" style={{ fontFamily: fontAr, marginInlineEnd: "0.3em" }}>
                دائرتي
              </span>
              Da&apos;irati
            </h2>
            <p className="text-white/90 text-lg leading-relaxed m-0 max-w-md">
              دائرة الدعم الخاصة بك، في مكان واحد. أضف الأشخاص الذين يساندونك كل يوم: العائلة، مقدمو الرعاية،
              المعالجون، الأطباء والمعلمون. شارك تقدّمك، وأرسل الرسائل، وأبقِ الجميع على اطلاع.
            </p>
            <Link
              href="/ar/academy/circle"
              className="self-start flex items-center min-h-[52px] px-7 rounded-xl bg-white font-semibold no-underline"
              style={{ color: BRAND.purple }}
            >
              اكتشف كيف تعمل دائرتي
            </Link>
          </div>
          <div className="relative w-full aspect-square max-w-[320px] mx-auto hidden sm:block" aria-hidden="true">
            <div className="absolute rounded-full border-2 border-dashed" style={{ left: "14%", top: "3%", width: "72%", height: "72%", borderColor: BRAND.mint }} />
            <div className="absolute rounded-full flex items-center justify-center font-bold" style={{ left: "38%", top: "34%", width: "24%", height: "24%", backgroundColor: BRAND.mint, color: BRAND.mintInk }}>
              أنت
            </div>
            {[
              { label: "أمي", left: "42%", top: "-4%" },
              { label: "د.", left: "78%", top: "40%" },
              { label: "مدرب", left: "42%", top: "84%" },
              { label: "نطق", left: "6%", top: "40%" },
            ].map((n) => (
              <div
                key={n.label}
                className="absolute w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center text-xs font-semibold"
                style={{ left: n.left, top: n.top, color: BRAND.purple }}
              >
                {n.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notify */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto bg-white border rounded-3xl p-9 sm:p-12 flex flex-wrap justify-between items-center gap-8" style={{ borderColor: BRAND.border }}>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold m-0" style={{ fontFamily: fontAr }}>
              كن أول من يعرف عن الدورات الجديدة
            </h2>
            <p className="mt-2 text-[#5a5a5a] m-0">رسالة قصيرة عند إطلاق دورة جديدة. بلا إزعاج.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <label htmlFor="notify" className="sr-only">
              البريد الإلكتروني
            </label>
            <input
              id="notify"
              type="email"
              placeholder="بريدك الإلكتروني"
              className="w-full sm:w-[300px] min-h-[52px] px-4 rounded-xl border"
              style={{ borderColor: "#b9cbc6" }}
            />
            <button type="button" className="min-h-[52px] px-7 rounded-xl text-white font-semibold" style={{ backgroundColor: BRAND.blue }}>
              أعلمني
            </button>
          </div>
        </div>
      </section>

      <DairatiWidget locale="ar" />
    </>
  );
}
