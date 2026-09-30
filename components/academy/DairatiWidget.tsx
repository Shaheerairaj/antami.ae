"use client";
import { useState } from "react";
import Link from "next/link";
import { localizeHref, type Locale } from "@/lib/arms";
import { BRAND, t, circleMembers, circleMessages } from "@/lib/academy";

interface Props {
  locale: Locale;
}

const previewMembers = circleMembers.slice(0, 4);
const previewMessages = circleMessages.slice(0, 3);

export function DairatiWidget({ locale }: Props) {
  const [open, setOpen] = useState(false);
  const circleLabel = (
    <>
      <span lang="ar" style={{ fontFamily: "var(--font-display-ar), sans-serif", marginInlineEnd: "0.3em" }}>دائرتي</span>Da&apos;irati
    </>
  );

  return (
    <div className="fixed bottom-6 z-40 flex flex-col items-end gap-3 end-6">
      {open && (
        <div
          role="dialog"
          aria-label={locale === "ar" ? "دائرتي" : "Da'irati, my circle"}
          className="w-[340px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl overflow-hidden flex flex-col shadow-2xl"
        >
          <div className="text-white px-5 py-4 flex items-center justify-between" style={{ backgroundColor: BRAND.purple }}>
            <div className="flex flex-col">
              <span className="font-bold">{circleLabel}</span>
              <span className="text-xs opacity-90">
                {locale === "ar" ? `دائرتي · ${previewMembers.length} أشخاص` : `My circle · ${previewMembers.length} people`}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={locale === "ar" ? "إغلاق دائرتي" : "Close Da'irati"}
              className="w-9 h-9 rounded-full flex items-center justify-center text-lg bg-white/15 hover:bg-white/25 transition-colors"
            >
              ×
            </button>
          </div>

          <div className="flex gap-2 px-5 py-3 border-b" style={{ borderColor: BRAND.border }}>
            {previewMembers.map((m) => (
              <span
                key={m.name}
                title={m.name}
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: m.color, color: m.color === BRAND.mint || m.color === BRAND.teal ? BRAND.mintInk : "#ffffff" }}
              >
                {m.initials}
              </span>
            ))}
            <Link
              href={localizeHref("/academy/circle", locale)}
              aria-label={locale === "ar" ? "أضف شخصًا إلى دائرتي" : "Add someone to my circle"}
              className="w-9 h-9 rounded-full border-2 border-dashed flex items-center justify-center text-lg flex-shrink-0 no-underline"
              style={{ borderColor: BRAND.purple, color: BRAND.purple }}
            >
              +
            </Link>
          </div>

          <div className="px-5 py-4 flex flex-col gap-3 bg-[#f9fafa] max-h-64 overflow-y-auto">
            {previewMessages.map((msg, i) => (
              <div key={i} className={`flex flex-col gap-1 max-w-[85%] ${msg.self ? "self-end items-end" : "self-start"}`}>
                <span className="text-xs font-semibold text-[#5a5a5a]">
                  {msg.self ? (locale === "ar" ? "أنت" : "You") : msg.fromRole ? `${msg.from} · ${t(msg.fromRole, locale)}` : msg.from}
                </span>
                <span
                  className="px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
                  style={msg.self ? { backgroundColor: BRAND.blue, color: "#ffffff" } : { backgroundColor: "#ffffff", color: BRAND.text }}
                >
                  {t(msg.text, locale)}
                </span>
              </div>
            ))}
          </div>

          <Link
            href={localizeHref("/academy/circle", locale)}
            className="flex items-center justify-center gap-2 px-5 py-3 border-t text-sm font-semibold no-underline"
            style={{ borderColor: BRAND.border, color: BRAND.blue }}
          >
            {locale === "ar" ? "فتح دائرتي كاملة" : "Open full circle"}
          </Link>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-2.5 min-h-[56px] ps-2.5 pe-5 rounded-full text-white shadow-lg hover:brightness-110 transition-all"
        style={{ backgroundColor: BRAND.purple }}
      >
        <span className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: BRAND.mint }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BRAND.mintInk} strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="2.5" />
          </svg>
        </span>
        <span className="font-semibold text-sm">{circleLabel}</span>
      </button>
    </div>
  );
}
