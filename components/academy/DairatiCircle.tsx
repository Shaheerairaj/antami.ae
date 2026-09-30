"use client";
import { useMemo, useState } from "react";
import { type Locale } from "@/lib/arms";
import { BRAND, t, displayFont, circleMembers as initialMembers, circleMessages, roleChoices, type CircleMember } from "@/lib/academy";

interface Props {
  locale: Locale;
}

function inkFor(color: string) {
  return color === BRAND.mint || color === BRAND.teal ? BRAND.mintInk : "#ffffff";
}

export function DairatiCircle({ locale }: Props) {
  const [members, setMembers] = useState<CircleMember[]>(initialMembers);
  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState(0);
  const font = displayFont(locale);

  const nodes = useMemo(() => {
    const cx = 260, cy = 260, r = 190;
    return members.map((m, i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / members.length;
      return { ...m, left: Math.round(cx + r * Math.cos(a) - 36), top: Math.round(cy + r * Math.sin(a) - 36) };
    });
  }, [members]);

  function addMember() {
    const name = newName.trim() || (locale === "ar" ? "عضو جديد" : "New member");
    const palette = [BRAND.mint, BRAND.blue, BRAND.purple, BRAND.teal, BRAND.deepPurple, BRAND.mintInk];
    setMembers((prev) => [
      ...prev,
      {
        name,
        role: { en: `${roleChoices[newRole].en} · Invited`, ar: `${roleChoices[newRole].ar} · تمت الدعوة` },
        initials: name.trim().charAt(0).toUpperCase() || "?",
        color: palette[prev.length % palette.length],
        perms: { en: "Message", ar: "رسائل" },
      },
    ]);
    setAdding(false);
    setNewName("");
  }

  return (
    <>
      <section className="pt-10 pb-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: BRAND.bg }}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-end gap-8">
          <div className="flex flex-col gap-3">
            <a href="#" className="text-sm font-medium no-underline" style={{ color: BRAND.blue }}>
              {locale === "ar" ? "→ العودة إلى الأكاديمية" : "← Back to Academy"}
            </a>
            <h1 className="text-4xl sm:text-5xl font-bold m-0" style={{ fontFamily: font, color: BRAND.purple }}>
              <span lang="ar" style={{ fontFamily: "var(--font-display-ar), sans-serif", marginInlineEnd: "0.3em" }}>دائرتي</span>Da&apos;irati
            </h1>
            <p className="text-lg leading-relaxed max-w-xl m-0" style={{ color: BRAND.text }}>
              {locale === "ar"
                ? "دائرة الدعم الخاصة بك. أضف الأشخاص الذين يساندونك كل يوم، وأبقِ الجميع على اطلاع."
                : "Your circle of support. Add the people who help you every day, and keep everyone on the same page."}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setAdding(true)}
            className="min-h-[52px] px-7 rounded-xl text-white font-semibold flex-shrink-0"
            style={{ backgroundColor: BRAND.purple }}
          >
            {locale === "ar" ? "+ أضف شخصًا إلى دائرتي" : "+ Add someone to my circle"}
          </button>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] gap-8">
          {/* Diagram */}
          <div className="bg-white border rounded-3xl p-8 flex flex-col items-center gap-5" style={{ borderColor: BRAND.border }}>
            <h2 className="self-start text-2xl font-semibold m-0" style={{ fontFamily: font }}>
              {locale === "ar" ? "دائرتي" : "My circle"}
            </h2>
            <div className="relative w-[520px] max-w-full aspect-square">
              <div className="absolute rounded-full border-2 border-dashed" style={{ left: "13%", top: "13%", width: "74%", height: "74%", borderColor: BRAND.teal }} />
              <div
                className="absolute rounded-full flex flex-col items-center justify-center font-bold"
                style={{ left: "38%", top: "38%", width: "24%", height: "24%", backgroundColor: BRAND.mint, color: BRAND.mintInk }}
              >
                <span className="text-lg">{locale === "ar" ? "أنت" : "You"}</span>
              </div>
              {nodes.map((n) => (
                <div
                  key={n.name}
                  className="absolute flex flex-col items-center gap-1.5 w-[104px]"
                  style={{ left: `${(n.left / 520) * 100}%`, top: `${(n.top / 520) * 100}%` }}
                >
                  <span
                    className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-lg font-bold border-4 border-white shadow-md"
                    style={{ backgroundColor: n.color, color: inkFor(n.color) }}
                  >
                    {n.initials}
                  </span>
                  <span className="text-xs font-semibold text-center leading-tight">{n.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white border rounded-3xl p-7" style={{ borderColor: BRAND.border }}>
              <h2 className="text-2xl font-semibold mb-3" style={{ fontFamily: font }}>
                {locale === "ar" ? `الأشخاص في دائرتي (${members.length})` : `People in my circle (${members.length})`}
              </h2>
              {nodes.map((m) => (
                <div key={m.name} className="flex items-center gap-4 py-3.5 border-t first:border-0" style={{ borderColor: "#eef3f1" }}>
                  <span
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: m.color, color: inkFor(m.color) }}
                  >
                    {m.initials}
                  </span>
                  <span className="flex flex-col flex-1">
                    <span className="text-base font-semibold">{m.name}</span>
                    <span className="text-sm text-[#5a5a5a]">{t(m.role, locale)}</span>
                  </span>
                  <span className="text-sm font-medium text-end" style={{ color: BRAND.mintInk }}>
                    {t(m.perms, locale)}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-3xl p-7 flex gap-4 items-start" style={{ backgroundColor: `${BRAND.purple}14` }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BRAND.purple} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0">
                <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
              </svg>
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold" style={{ color: BRAND.purple }}>
                  {locale === "ar" ? "أنت من يتحكم" : "You're in control"}
                </span>
                <span className="text-sm leading-relaxed" style={{ color: BRAND.text }}>
                  {locale === "ar"
                    ? "فقط من تدعوهم يمكنهم الانضمام، وأنت من يختار ما يراه كل شخص. يمكنك إزالة أي شخص في أي وقت. بالنسبة للأطفال، يتولى أحد الوالدين أو الوصي إدارة الدائرة."
                    : "Only people you invite can join, and you choose what each person can see. You can remove someone at any time. For children, a parent or guardian manages the circle."}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white border rounded-3xl overflow-hidden" style={{ borderColor: BRAND.border }}>
          <div className="px-8 py-6 border-b flex flex-wrap justify-between items-center gap-2" style={{ borderColor: "#eef3f1" }}>
            <h2 className="text-2xl font-semibold m-0" style={{ fontFamily: font }}>
              {locale === "ar" ? "محادثة الدائرة" : "Circle chat"}
            </h2>
            <span className="text-sm text-[#5a5a5a]">
              {locale === "ar" ? "يمكن لجميع أفراد دائرتك رؤية هذه الرسائل" : "Everyone in your circle can see these messages"}
            </span>
          </div>
          <div className="px-8 py-7 flex flex-col gap-4" style={{ backgroundColor: BRAND.bg }}>
            {circleMessages.map((msg, i) => (
              <div key={i} className={`flex flex-col gap-1 max-w-[560px] ${msg.self ? "self-end items-end" : "self-start"}`}>
                <span className="text-xs font-semibold text-[#5a5a5a]">
                  {msg.self ? (locale === "ar" ? "أنت" : "You") : msg.fromRole ? `${msg.from} · ${t(msg.fromRole, locale)}` : msg.from}
                </span>
                <span
                  className="px-4 py-3 rounded-2xl text-sm leading-relaxed"
                  style={msg.self ? { backgroundColor: BRAND.blue, color: "#ffffff" } : { backgroundColor: "#ffffff", color: BRAND.text }}
                >
                  {t(msg.text, locale)}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-2.5 px-8 py-4 border-t" style={{ borderColor: "#eef3f1" }}>
            <label htmlFor="page-msg" className="sr-only">
              {locale === "ar" ? "راسل دائرتك" : "Message your circle"}
            </label>
            <input
              id="page-msg"
              placeholder={locale === "ar" ? "راسل دائرتك…" : "Message your circle…"}
              className="flex-1 min-h-[48px] px-4 rounded-xl border"
              style={{ borderColor: "#b9cbc6" }}
            />
            <button type="button" className="min-h-[48px] px-6 rounded-xl text-white font-semibold" style={{ backgroundColor: BRAND.blue }}>
              {locale === "ar" ? "إرسال" : "Send"}
            </button>
          </div>
        </div>
      </section>

      {adding && (
        <div className="fixed inset-0 bg-black/45 flex items-start justify-center pt-24 sm:pt-32 px-4 z-50">
          <div role="dialog" aria-label={locale === "ar" ? "أضف شخصًا إلى دائرتي" : "Add someone to my circle"} className="w-full max-w-[520px] bg-white rounded-3xl p-8 flex flex-col gap-5 shadow-2xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold m-0" style={{ fontFamily: font }}>
                {locale === "ar" ? "أضف شخصًا إلى دائرتي" : "Add someone to my circle"}
              </h2>
              <button
                type="button"
                onClick={() => setAdding(false)}
                aria-label={locale === "ar" ? "إغلاق" : "Close"}
                className="w-10 h-10 rounded-full text-xl"
                style={{ backgroundColor: "#eef3f1" }}
              >
                ×
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="new-name" className="text-sm font-semibold">
                {locale === "ar" ? "الاسم" : "Name"}
              </label>
              <input
                id="new-name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder={locale === "ar" ? "مثال: العمة مريم" : "For example, Aunt Maryam"}
                className="min-h-[48px] px-3.5 rounded-xl border"
                style={{ borderColor: "#b9cbc6" }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="new-role" className="text-sm font-semibold">
                {locale === "ar" ? "ما صلتهم بك؟" : "Who are they to you?"}
              </label>
              <select
                id="new-role"
                value={newRole}
                onChange={(e) => setNewRole(Number(e.target.value))}
                className="min-h-[48px] px-3.5 rounded-xl border bg-white"
                style={{ borderColor: "#b9cbc6" }}
              >
                {roleChoices.map((r, i) => (
                  <option key={i} value={i}>
                    {t(r, locale)}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="new-contact" className="text-sm font-semibold">
                {locale === "ar" ? "بريدهم الإلكتروني أو هاتفهم" : "Their email or phone"}
              </label>
              <input
                id="new-contact"
                placeholder={locale === "ar" ? "سنرسل لهم دعوة" : "We'll send them an invitation"}
                className="min-h-[48px] px-3.5 rounded-xl border"
                style={{ borderColor: "#b9cbc6" }}
              />
            </div>
            <fieldset className="border-0 p-0 m-0 flex flex-col gap-2.5">
              <legend className="p-0 mb-2 text-sm font-semibold">
                {locale === "ar" ? "ماذا يمكنهم أن يفعلوا؟" : "What can they do?"}
              </legend>
              {[
                locale === "ar" ? "مراسلتي ومراسلة دائرتي" : "Message me and my circle",
                locale === "ar" ? "رؤية تقدّمي في الدورات" : "See my course progress",
                locale === "ar" ? "مشاركة الملاحظات والتحديثات" : "Share notes and updates",
              ].map((label, i) => (
                <div key={i} className="flex gap-2.5 items-center">
                  <input type="checkbox" id={`perm-${i}`} className="w-[22px] h-[22px]" style={{ accentColor: BRAND.blue }} />
                  <label htmlFor={`perm-${i}`} className="text-sm">
                    {label}
                  </label>
                </div>
              ))}
            </fieldset>
            <button type="button" onClick={addMember} className="min-h-[52px] rounded-xl text-white font-semibold" style={{ backgroundColor: BRAND.purple }}>
              {locale === "ar" ? "إرسال الدعوة" : "Send invitation"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
