"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { localizeHref, type Locale } from "@/lib/arms";
import { BRAND, withAlpha, t, displayFont, categories, courses, trainerCardFor, type CategoryKey } from "@/lib/academy";

interface Props {
  locale: Locale;
}

export function AcademyCatalog({ locale }: Props) {
  const [filter, setFilter] = useState<CategoryKey>("all");
  const font = displayFont(locale);

  const visible = useMemo(
    () => courses.filter((c) => filter === "all" || c.category === filter || c.category === "all"),
    [filter]
  );

  const filterLabel = categories.find((c) => c.key === filter)!.label;
  const countText =
    locale === "ar"
      ? `${visible.length} ${visible.length === 1 ? "دورة" : "دورات"}${filter === "all" ? " عبر خمسة مسارات تعليمية" : ` لـ${t(filterLabel, locale)}`}`
      : `${visible.length} ${visible.length === 1 ? "course" : "courses"}${filter === "all" ? " across five learning paths" : ` for ${t(filterLabel, locale)}`}`;

  return (
    <>
      {/* Persona tiles */}
      <section className="py-16 bg-white" aria-labelledby="who-for-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="who-for-heading" className="text-3xl sm:text-4xl mb-2" style={{ fontFamily: font }}>
            {locale === "ar" ? "لمن هذه الدورات؟" : "Who is it for?"}
          </h2>
          <p className="text-[#5a5a5a] mb-8">
            {locale === "ar" ? "اختر مسارك، أو استكشف كل شيء." : "Choose your path, or explore everything."}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories
              .filter((c) => c.key !== "all")
              .map((cat) => {
                const active = filter === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setFilter(cat.key)}
                    aria-pressed={active}
                    className="text-start p-5 rounded-2xl border-2 bg-white flex flex-col gap-3 min-h-[190px] transition-colors duration-150"
                    style={{ borderColor: active ? cat.ink : BRAND.border }}
                  >
                    <span
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: withAlpha(cat.bg, 0.16) }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={cat.ink} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
                        <path d={cat.icon} />
                      </svg>
                    </span>
                    <span className="font-semibold text-[#2d2d2d]">{t(cat.label, locale)}</span>
                    <span className="text-sm leading-relaxed text-[#5a5a5a]">{cat.desc ? t(cat.desc, locale) : ""}</span>
                  </button>
                );
              })}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-14 pb-20 bg-[#f9fafa]" aria-labelledby="courses-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <h2 id="courses-heading" className="text-3xl sm:text-4xl mb-1" style={{ fontFamily: font }}>
                {locale === "ar" ? "الدورات" : "Courses"}
              </h2>
              <p className="text-[#5a5a5a]">{countText}</p>
            </div>
          </div>

          <div role="group" aria-label={locale === "ar" ? "تصفية الدورات" : "Filter courses"} className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => {
              const active = filter === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setFilter(cat.key)}
                  aria-pressed={active}
                  className="min-h-[44px] px-5 rounded-full border-2 text-sm font-medium transition-colors duration-150"
                  style={
                    active
                      ? { borderColor: cat.ink, backgroundColor: cat.ink, color: "#ffffff" }
                      : { borderColor: BRAND.border, backgroundColor: "#ffffff", color: BRAND.text }
                  }
                >
                  {cat.key === "all" ? (locale === "ar" ? "كل الدورات" : "All courses") : t(cat.label, locale)}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((course) => {
              const cat = categories.find((c) => c.key === course.category)!;
              const trainer = trainerCardFor(course, locale);
              return (
                <article key={course.slug} className="bg-white border rounded-2xl overflow-hidden flex flex-col h-full" style={{ borderColor: BRAND.border }}>
                  <div className="h-[110px] flex items-center justify-between px-6" style={{ backgroundColor: withAlpha(cat.bg, 0.16) }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={cat.ink} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
                      <path d={cat.icon} />
                    </svg>
                    <span
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={course.live ? { backgroundColor: BRAND.mint, color: BRAND.mintInk } : { backgroundColor: "#ffffff", color: BRAND.textMid }}
                    >
                      {course.live
                        ? locale === "ar" ? "مجانًا · متاحة الآن" : "Free · Available now"
                        : locale === "ar" ? "قريبًا" : "Coming soon"}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col gap-2 flex-1">
                    <div className="text-xs font-semibold" style={{ color: cat.ink }}>
                      {(course.category === "all" ? (locale === "ar" ? "للجميع" : "FOR EVERYONE") : t(cat.label, locale)).toString().toUpperCase()}
                    </div>
                    {course.live ? (
                      <Link href={localizeHref(`/academy/courses/${course.slug}`, locale)} className="font-semibold text-lg leading-snug text-[#2d2d2d] no-underline hover:underline">
                        {t(course.title, locale)}
                      </Link>
                    ) : (
                      <h3 className="font-semibold text-lg leading-snug text-[#2d2d2d] m-0">{t(course.title, locale)}</h3>
                    )}
                    <p className="text-sm leading-relaxed text-[#5a5a5a] flex-1">{t(course.desc, locale)}</p>
                    <div className="flex items-center gap-3 pt-3 mt-1 border-t" style={{ borderColor: BRAND.border }}>
                      <span
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{ backgroundColor: trainer.color, color: trainer.color === BRAND.mint || trainer.color === BRAND.teal ? BRAND.mintInk : "#ffffff" }}
                      >
                        {trainer.initials}
                      </span>
                      <span className="flex flex-col">
                        <span className="text-sm font-semibold text-[#2d2d2d]">{trainer.name}</span>
                        <span className="text-xs text-[#5a5a5a]">{trainer.role}</span>
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
