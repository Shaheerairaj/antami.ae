import Link from "next/link";
import { localizeHref, type Locale } from "@/lib/arms";
import { BRAND, t, displayFont, trainers, courses } from "@/lib/academy";

interface Props {
  locale: Locale;
  trainerKey: keyof typeof trainers;
}

export function TrainerProfile({ locale, trainerKey }: Props) {
  const trainer = trainers[trainerKey];
  const font = displayFont(locale);
  const taughtCourses = courses.filter((c) => c.trainer === trainerKey && c.live);

  return (
    <>
      <section className="pt-10 pb-14 px-4 sm:px-6 lg:px-8 flex flex-col gap-7" style={{ backgroundColor: BRAND.bg }}>
        <div className="max-w-5xl mx-auto w-full flex flex-col gap-7">
          <Link href={localizeHref("/academy/courses/module-1", locale)} className="text-sm font-medium no-underline" style={{ color: BRAND.blue }}>
            {locale === "ar" ? "→ العودة إلى الدورة" : "← Back to course"}
          </Link>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full flex flex-col items-center justify-center flex-shrink-0" style={{ backgroundColor: trainer.color }}>
              <div className="text-4xl sm:text-5xl font-bold" style={{ color: BRAND.mintInk }}>
                {trainer.initials}
              </div>
            </div>
            <div className="flex flex-col gap-3 max-w-xl">
              <div className="text-xs font-semibold" style={{ color: BRAND.blue }}>
                {locale === "ar" ? "مدربة في أكاديمية أنتمي" : "ANTAMI ACADEMY TRAINER"}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold m-0" style={{ fontFamily: font, color: BRAND.purple }}>
                {trainer.name}
              </h1>
              <div className="text-lg" style={{ color: BRAND.text }}>
                {t(trainer.role, locale)}
              </div>
              <div className="text-base text-[#5a5a5a]">{t(trainer.affiliation, locale)}</div>
              <div className="flex flex-wrap gap-2 mt-1">
                {trainer.tags.map((tag, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white">
                    {t(tag, locale)}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href={`mailto:${trainer.email}`}
                  className="flex items-center justify-center min-h-[48px] px-6 rounded-xl text-white text-sm font-semibold no-underline"
                  style={{ backgroundColor: BRAND.blue }}
                >
                  {locale === "ar" ? `راسل ${trainer.name.split(" ")[0]}` : `Email ${trainer.name.split(" ")[0]}`}
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center min-h-[48px] px-6 rounded-xl border-2 text-sm font-semibold no-underline"
                  style={{ borderColor: BRAND.purple, color: BRAND.purple }}
                >
                  {locale === "ar" ? `ادعُ ${trainer.name.split(" ")[0]} للتحدث` : `Invite ${trainer.name.split(" ")[0]} to speak`}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8">
        <div className="bg-white border rounded-3xl p-8 sm:p-10 flex flex-col gap-4.5" style={{ borderColor: BRAND.border }}>
          <h2 className="text-2xl font-semibold m-0" style={{ fontFamily: font }}>
            {locale === "ar" ? `عن ${trainer.name.split(" ")[0]}` : `About ${trainer.name.split(" ")[0]}`}
          </h2>
          {trainer.bio.map((p, i) => (
            <p key={i} className="m-0 text-[17px] leading-relaxed" style={{ color: BRAND.text }}>
              {t(p, locale)}
            </p>
          ))}
        </div>

        <aside id="contact" className="flex flex-col gap-6">
          <div className="bg-white border rounded-3xl p-7 flex flex-col gap-3.5" style={{ borderColor: BRAND.border }}>
            <h2 className="text-lg font-semibold m-0">{locale === "ar" ? "تواصل" : "Get in touch"}</h2>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#5a5a5a]">{locale === "ar" ? "البريد الإلكتروني" : "Email"}</span>
              <a href={`mailto:${trainer.email}`} className="text-sm font-medium" style={{ color: BRAND.blue }} dir="ltr">
                {trainer.email}
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#5a5a5a]">{locale === "ar" ? "اللغات" : "Languages"}</span>
              <span className="text-sm font-medium">{t(trainer.languages, locale)}</span>
            </div>
          </div>
          <div className="bg-white border rounded-3xl p-7 flex flex-col gap-2.5" style={{ borderColor: BRAND.border }}>
            <h2 className="text-lg font-semibold m-0">{locale === "ar" ? "المؤهلات" : "Qualifications"}</h2>
            <ul className="m-0 ps-5 flex flex-col gap-2 text-sm leading-relaxed" style={{ color: BRAND.text }}>
              {trainer.qualifications.map((q, i) => (
                <li key={i}>{t(q, locale)}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white border rounded-3xl p-7 flex flex-col gap-2.5" style={{ borderColor: BRAND.border }}>
            <h2 className="text-lg font-semibold m-0">{locale === "ar" ? "متاحة لـ" : "Available for"}</h2>
            <div className="text-sm leading-relaxed" style={{ color: BRAND.text }}>
              {t(trainer.availableFor, locale)}
            </div>
          </div>
        </aside>
      </section>

      {taughtCourses.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-5xl mx-auto flex flex-col gap-6">
          <h2 className="text-2xl font-semibold m-0" style={{ fontFamily: font }}>
            {locale === "ar" ? `دورات بواسطة ${trainer.name.split(" ")[0]}` : `Courses by ${trainer.name.split(" ")[0]}`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {taughtCourses.map((c) => (
              <Link
                key={c.slug}
                href={localizeHref(`/academy/courses/${c.slug}`, locale)}
                className="bg-white border rounded-3xl overflow-hidden flex flex-col no-underline text-inherit"
                style={{ borderColor: BRAND.border }}
              >
                <div className="h-[150px] flex items-center justify-center" style={{ backgroundColor: BRAND.purple }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: BRAND.mint }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill={BRAND.mintInk} aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <div className="text-xs font-semibold" style={{ color: BRAND.mintInk }}>
                    {locale === "ar" ? "الوحدة 1 · مجانًا · 5 دقائق" : "MODULE 1 · FREE · 5 MIN"}
                  </div>
                  <div className="text-lg font-semibold leading-snug">{t(c.title, locale)}</div>
                </div>
              </Link>
            ))}
            <div className="border-2 border-dashed rounded-3xl flex items-center justify-center p-6 min-h-[220px] text-center text-[#5a5a5a]" style={{ borderColor: "#b9cbc6" }}>
              {locale === "ar" ? "دورات إضافية قريبًا" : "More courses coming soon"}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
