"use client";
import { useState } from "react";
import Link from "next/link";
import { localizeHref, type Locale } from "@/lib/arms";
import { BRAND, t, displayFont, module1, trainers } from "@/lib/academy";

interface Props {
  locale: Locale;
}

function ScaleRow({
  value,
  onPick,
  locale,
}: {
  value: number | undefined;
  onPick: (n: number) => void;
  locale: Locale;
}) {
  return (
    <div className="flex flex-col gap-1.5 flex-shrink-0">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((n) => {
          const sel = value === n;
          return (
            <button
              key={n}
              type="button"
              onClick={() => onPick(n)}
              aria-label={`${n} ${locale === "ar" ? "من 5" : "out of 5"}`}
              className="w-14 h-12 rounded-xl border-2 font-semibold"
              style={sel ? { borderColor: BRAND.blue, backgroundColor: BRAND.blue, color: "#ffffff" } : { borderColor: BRAND.border, backgroundColor: "#ffffff", color: BRAND.text }}
            >
              {n}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between text-xs text-[#5a5a5a]">
        <span>{locale === "ar" ? "غير واثق" : "Not confident"}</span>
        <span>{locale === "ar" ? "واثق جدًا" : "Very confident"}</span>
      </div>
    </div>
  );
}

export function CourseModule({ locale }: Props) {
  const font = displayFont(locale);
  const [pre, setPre] = useState<Record<number, number>>({});
  const [post, setPost] = useState<Record<number, number>>({});
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState<Record<number, boolean>>({});
  const [rating, setRating] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState(0);

  const preCount = module1.statements.filter((_, i) => pre[i]).length;
  const postCount = module1.statements.filter((_, i) => post[i]).length;
  const preTotal = Object.values(pre).reduce((a, b) => a + b, 0);
  const postTotal = Object.values(post).reduce((a, b) => a + b, 0);
  const preComplete = preCount === module1.statements.length;
  const bothComplete = preComplete && postCount === module1.statements.length;
  const doneCount = module1.actions.filter((_, i) => done[i]).length;
  const diff = postTotal - preTotal;
  const changeMessage =
    diff > 0
      ? locale === "ar"
        ? `ارتفعت ثقتك بمقدار ${diff} ${diff === 1 ? "نقطة" : "نقاط"}. واصل ذلك بالإجراءات أدناه.`
        : `Your confidence grew by ${diff} ${diff === 1 ? "point" : "points"}. Keep it going with the actions below.`
      : locale === "ar"
        ? "الثقة تنمو مع الممارسة. جرّب الإجراءات أدناه هذا الأسبوع، وانظر كيف تشعر في المرة القادمة."
        : "Confidence grows with practice. Try the actions below this week, and see how you feel next time.";

  const sally = trainers.sally;

  return (
    <>
      {/* Header */}
      <section className="pt-10 pb-10 px-4 sm:px-6 lg:px-8 flex flex-col gap-4" style={{ backgroundColor: BRAND.bg }}>
        <div className="max-w-5xl mx-auto w-full flex flex-col gap-4">
          <div className="text-sm text-[#5a5a5a]">
            <Link href={localizeHref("/academy", locale)} className="no-underline" style={{ color: BRAND.blue }}>
              {locale === "ar" ? "الأكاديمية" : "Academy"}
            </Link>{" "}
            <span aria-hidden="true">›</span> {t(module1.breadcrumb, locale)}
          </div>
          <div className="flex flex-wrap gap-2">
            {module1.badges.map((b, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold"
                style={i === 0 ? { backgroundColor: BRAND.mint, color: BRAND.mintInk } : { backgroundColor: "#ffffff", color: BRAND.text }}
              >
                {t(b, locale)}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-2xl m-0" style={{ fontFamily: font, color: BRAND.purple }}>
            {locale === "ar" ? "من الدمج إلى الانتماء: ثلاثة تحولات يومية" : "From Inclusion to Belonging: Three Everyday Shifts"}
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl m-0" style={{ color: BRAND.text }}>
            {t(module1.intro, locale)}
          </p>
        </div>
      </section>

      {/* Pre-course confidence survey */}
      <section className="px-4 sm:px-6 lg:px-8 pt-10">
        <div className="max-w-5xl mx-auto bg-white border rounded-3xl p-8 sm:p-10 flex flex-col gap-6" style={{ borderColor: BRAND.border }}>
          <div>
            <div className="text-xs font-semibold" style={{ color: BRAND.blue }}>
              {locale === "ar" ? "الخطوة 1 · قبل أن تبدأ" : "STEP 1 · BEFORE YOU START"}
            </div>
            <h2 className="text-2xl font-semibold mt-1.5 mb-0" style={{ fontFamily: font }}>
              {locale === "ar" ? "ما مدى ثقتك؟" : "How confident do you feel?"}
            </h2>
            <p className="mt-2 text-[#5a5a5a]">
              {locale === "ar" ? "قيّم كل عبارة من 1 إلى 5. ستجيب مرة أخرى بعد الدورة لترى ما تغيّر." : "Rate each statement from 1 to 5. You'll answer again after the course to see what changed."}
            </p>
          </div>
          {module1.statements.map((s, i) => (
            <div key={i} className="flex flex-wrap justify-between items-center gap-6 pt-5 border-t" style={{ borderColor: "#eef3f1" }}>
              <span className="text-lg font-medium">{t(s, locale)}</span>
              <ScaleRow value={pre[i]} onPick={(n) => setPre((p) => ({ ...p, [i]: n }))} locale={locale} />
            </div>
          ))}
          {preComplete && (
            <p className="m-0 px-4.5 py-3.5 rounded-xl text-sm font-medium" style={{ backgroundColor: `${BRAND.mint}22`, color: BRAND.mintInk }}>
              {locale === "ar" ? "شكرًا لك. شاهد الفيديو أدناه الآن." : "Thank you. Now watch the video below."}
            </p>
          )}
        </div>
      </section>

      {/* Video + trainer sidebar */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8">
        <div className="flex flex-col gap-8">
          <div className="h-[320px] sm:h-[400px] rounded-3xl flex flex-col items-center justify-center gap-4 relative" style={{ backgroundColor: BRAND.purple }}>
            <button
              type="button"
              aria-label={locale === "ar" ? "تشغيل فيديو الدورة" : "Play course video"}
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ backgroundColor: BRAND.mint }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={BRAND.mintInk} aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div className="text-white text-base">{t(module1.videoLength, locale)}</div>
            <div className="absolute left-5 bottom-5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white" style={{ color: BRAND.purple }}>
              CC · EN | AR
            </div>
          </div>
          <div className="bg-white border rounded-3xl p-8 flex flex-col gap-5" style={{ borderColor: BRAND.border }}>
            <h2 className="text-2xl font-semibold m-0" style={{ fontFamily: font }}>
              {locale === "ar" ? "ماذا ستتعلم" : "What you'll learn"}
            </h2>
            {module1.lessons.map((l, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: `${BRAND.mint}30`, color: BRAND.mintInk }}
                >
                  {i + 1}
                </span>
                <div>
                  <div className="text-base font-semibold">{t(l.title, locale)}</div>
                  <div className="text-sm text-[#5a5a5a] mt-1">{t(l.desc, locale)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="flex flex-col gap-6">
          <div className="bg-white border rounded-3xl p-7 flex flex-col gap-4" style={{ borderColor: BRAND.border }}>
            <div className="text-xs font-semibold" style={{ color: BRAND.blue }}>
              {locale === "ar" ? "مدربتك" : "YOUR TRAINER"}
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0" style={{ backgroundColor: sally.color, color: BRAND.mintInk }}>
                {sally.initials}
              </div>
              <div>
                <div className="font-semibold">{sally.name}</div>
                <div className="text-sm text-[#5a5a5a]">{t(sally.affiliation, locale)}</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed m-0" style={{ color: BRAND.text }}>
              {t(sally.bio[0], locale)}
            </p>
            <Link
              href={localizeHref("/academy/trainers/sally-helweh", locale)}
              className="flex items-center justify-center min-h-[48px] rounded-xl text-white font-semibold no-underline"
              style={{ backgroundColor: BRAND.blue }}
            >
              {locale === "ar" ? "عرض الملف الشخصي" : "View profile"}
            </Link>
          </div>
          <div className="bg-white border rounded-3xl p-7 flex flex-col gap-3.5" style={{ borderColor: BRAND.border }}>
            <h2 className="text-lg font-semibold m-0">{locale === "ar" ? "تفاصيل الدورة" : "Course details"}</h2>
            {[
              [locale === "ar" ? "المدة" : "Length", locale === "ar" ? "نحو 5 دقائق" : "About 5 minutes"],
              [locale === "ar" ? "التكلفة" : "Cost", locale === "ar" ? "مجانية" : "Free"],
              [locale === "ar" ? "المستوى" : "Level", locale === "ar" ? "للجميع" : "Everyone"],
              [locale === "ar" ? "الترجمة" : "Captions", locale === "ar" ? "الإنجليزية، العربية" : "English, Arabic"],
              [locale === "ar" ? "تشمل" : "Includes", locale === "ar" ? "تقييم ذاتي، اختبار، قائمة إجراءات" : "Self-check, quiz, checklist"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between text-sm">
                <span className="text-[#5a5a5a]">{k}</span>
                <span className="font-medium">{v}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {/* Quiz */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-5xl mx-auto bg-white border rounded-3xl p-8 sm:p-10 flex flex-col gap-7" style={{ borderColor: BRAND.border }}>
          <div>
            <h2 className="text-2xl font-semibold m-0" style={{ fontFamily: font }}>
              {locale === "ar" ? "اختبار التأمل" : "Reflection quiz"}
            </h2>
            <p className="mt-2 text-[#5a5a5a]">{locale === "ar" ? "ثلاثة أسئلة سريعة للتحقق مما تعلمته." : "Three quick questions to check what you've learned."}</p>
          </div>
          {module1.questions.map((q, qi) => {
            const picked = answers[q.id];
            const answered = !!picked;
            const right = picked === q.correct;
            return (
              <fieldset key={q.id} className="border-0 p-0 m-0 flex flex-col gap-3">
                <legend className="p-0 mb-3 text-lg font-semibold">
                  {qi + 1}. {t(q.prompt, locale)}
                </legend>
                {q.options.map((o) => {
                  let border: string = BRAND.border;
                  let bg = "#ffffff";
                  if (answered) {
                    if (o.id === q.correct) {
                      border = BRAND.mint;
                      bg = `${BRAND.mint}22`;
                    } else if (o.id === picked) {
                      border = BRAND.purple;
                      bg = `${BRAND.purple}14`;
                    }
                  }
                  return (
                    <button
                      key={o.id}
                      type="button"
                      onClick={() => setAnswers((a) => ({ ...a, [q.id]: o.id }))}
                      className="text-start min-h-[52px] px-4.5 py-3.5 rounded-xl border-2"
                      style={{ borderColor: border, backgroundColor: bg, color: BRAND.text }}
                    >
                      {t(o.text, locale)}
                    </button>
                  );
                })}
                {answered && (
                  <p className="m-0 text-sm leading-relaxed" style={{ color: right ? BRAND.mintInk : BRAND.purple }}>
                    <strong>{right ? (locale === "ar" ? "هذا صحيح." : "That's right.") : locale === "ar" ? "ليس تمامًا." : "Not quite."}</strong>{" "}
                    {t(q.explain, locale)}
                  </p>
                )}
              </fieldset>
            );
          })}
        </div>
      </section>

      {/* Post-course survey */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-5xl mx-auto bg-white border rounded-3xl p-8 sm:p-10 flex flex-col gap-6" style={{ borderColor: BRAND.border }}>
          <div>
            <div className="text-xs font-semibold" style={{ color: BRAND.blue }}>
              {locale === "ar" ? "بعد الدورة" : "AFTER THE COURSE"}
            </div>
            <h2 className="text-2xl font-semibold mt-1.5 mb-0" style={{ fontFamily: font }}>
              {locale === "ar" ? "ما مدى ثقتك الآن؟" : "How confident do you feel now?"}
            </h2>
            <p className="mt-2 text-[#5a5a5a]">
              {locale === "ar" ? "قيّم نفس العبارات مرة أخرى. إجابتك الأولى ستظهر بجانب كل عبارة." : "Rate the same statements again. Your first answer is shown beside each one."}
            </p>
          </div>
          {module1.statements.map((s, i) => (
            <div key={i} className="flex flex-wrap justify-between items-center gap-6 pt-5 border-t" style={{ borderColor: "#eef3f1" }}>
              <div className="flex flex-col gap-1.5">
                <span className="text-lg font-medium">{t(s, locale)}</span>
                <span className="text-xs text-[#5a5a5a]">
                  {locale === "ar" ? "قبل: " : "Before: "}
                  {pre[i] ? `${pre[i]} ${locale === "ar" ? "من 5" : "out of 5"}` : locale === "ar" ? "لم تتم الإجابة" : "not answered"}
                </span>
              </div>
              <ScaleRow value={post[i]} onPick={(n) => setPost((p) => ({ ...p, [i]: n }))} locale={locale} />
            </div>
          ))}
          {bothComplete && (
            <div className="flex flex-wrap items-center gap-8 p-6 rounded-2xl" style={{ backgroundColor: `${BRAND.mint}18` }}>
              <div className="flex gap-6 items-center">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-[#5a5a5a]">{locale === "ar" ? "قبل" : "Before"}</span>
                  <span className="text-3xl font-bold" style={{ color: BRAND.blue }}>
                    {preTotal}/15
                  </span>
                </div>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={BRAND.mintInk} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-[#5a5a5a]">{locale === "ar" ? "بعد" : "After"}</span>
                  <span className="text-3xl font-bold" style={{ color: BRAND.purple }}>
                    {postTotal}/15
                  </span>
                </div>
              </div>
              <p className="m-0 text-base" style={{ color: BRAND.text }}>
                {changeMessage}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Actions + feedback */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border rounded-3xl p-8 flex flex-col gap-5" style={{ borderColor: BRAND.border }}>
          <div>
            <h2 className="text-2xl font-semibold m-0" style={{ fontFamily: font }}>
              {locale === "ar" ? "إجراءاتي هذا الأسبوع" : "My actions this week"}
            </h2>
            <p className="mt-2 text-[#5a5a5a]">{locale === "ar" ? "ضع علامة على كل إجراء عند إتمامه. الانتماء يبدأ بخطوات صغيرة." : "Tick each one as you do it. Small actions are where belonging begins."}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: `${BRAND.mint}22` }}>
              <div className="h-2.5 rounded-full" style={{ width: `${Math.round((doneCount / module1.actions.length) * 100)}%`, backgroundColor: BRAND.teal }} />
            </div>
            <div className="text-sm text-[#5a5a5a]">
              {locale === "ar" ? `${doneCount} من ${module1.actions.length} تم` : `${doneCount} of ${module1.actions.length} done`}
            </div>
          </div>
          {module1.actions.map((a, i) => {
            const checked = !!done[i];
            return (
              <div key={i} className="flex gap-4 items-start p-4.5 rounded-2xl" style={{ backgroundColor: checked ? `${BRAND.mint}18` : BRAND.bg }}>
                <input
                  type="checkbox"
                  id={`action-${i}`}
                  checked={checked}
                  onChange={() => setDone((d) => ({ ...d, [i]: !d[i] }))}
                  className="w-6 h-6 mt-0.5 flex-shrink-0"
                  style={{ accentColor: BRAND.blue }}
                />
                <label htmlFor={`action-${i}`} className="text-base leading-relaxed">
                  {t(a, locale)}
                </label>
              </div>
            );
          })}
        </div>

        <div className="bg-white border rounded-3xl p-8 flex flex-col gap-5" style={{ borderColor: BRAND.border }}>
          {!submitted ? (
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-2xl font-semibold m-0" style={{ fontFamily: font }}>
                  {locale === "ar" ? "أخبرنا برأيك" : "Tell us what you think"}
                </h2>
                <p className="mt-2 text-[#5a5a5a]">{locale === "ar" ? "تستغرق دقيقة واحدة وتساعدنا في تصميم الدورة القادمة." : "It takes one minute and helps us shape the next course."}</p>
              </div>
              <fieldset className="border-0 p-0 m-0 flex flex-col gap-2.5">
                <legend className="p-0 mb-2 text-sm font-semibold">{locale === "ar" ? "هل كانت هذه الدورة مفيدة؟" : "Was this course useful?"}</legend>
                <div className="flex gap-2.5">
                  {module1.ratings.map((r, i) => {
                    const label = t(r, locale);
                    const sel = rating === label;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setRating(label)}
                        className="flex-1 min-h-[48px] rounded-xl border-2 text-sm"
                        style={sel ? { borderColor: BRAND.blue, backgroundColor: `${BRAND.blue}18` } : { borderColor: BRAND.border, backgroundColor: "#ffffff" }}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
              <div className="flex flex-col gap-2">
                <label htmlFor="role" className="text-sm font-semibold">
                  {locale === "ar" ? "أنا…" : "I am…"}
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(Number(e.target.value))}
                  className="min-h-[48px] px-3.5 rounded-xl border bg-white"
                  style={{ borderColor: "#b9cbc6" }}
                >
                  {module1.roleOptions.map((r, i) => (
                    <option key={i} value={i}>
                      {t(r, locale)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="next" className="text-sm font-semibold">
                  {locale === "ar" ? "ماذا تودّ أن تتعلم بعد ذلك؟" : "What would you like to learn next?"}
                </label>
                <textarea id="next" rows={3} className="px-3.5 py-3 rounded-xl border resize-y" style={{ borderColor: "#b9cbc6" }} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold">
                  {locale === "ar" ? "البريد الإلكتروني (اختياري)" : "Email (optional)"}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={locale === "ar" ? "احصل على إشعار عند إطلاق الدورة القادمة" : "Get notified when the next course is live"}
                  className="min-h-[48px] px-3.5 rounded-xl border"
                  style={{ borderColor: "#b9cbc6" }}
                />
              </div>
              <button type="button" onClick={() => setSubmitted(true)} className="min-h-[52px] rounded-xl text-white font-semibold" style={{ backgroundColor: BRAND.purple }}>
                {locale === "ar" ? "إرسال الملاحظات" : "Send feedback"}
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3.5 items-start">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: BRAND.mint }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={BRAND.mintInk} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold m-0" style={{ fontFamily: font }}>
                {locale === "ar" ? "شكرًا لك" : "Thank you"}
              </h2>
              <p className="m-0 text-[#5a5a5a]">
                {locale === "ar"
                  ? "ملاحظاتك تساعدنا في بناء الدورة القادمة. شارك هذه الدورة مع أحد أفراد دائرتك، لأن الانتماء للجميع."
                  : "Your feedback helps us build the next course. Share this one with someone in your circle, because belonging is for everyone."}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
