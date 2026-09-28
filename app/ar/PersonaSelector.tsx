"use client";

import { useState } from "react";
import Link from "next/link";

interface Persona {
  id: string;
  title: string;
  intro: string;
  subItems: string[];
  ctas: { label: string; href: string; primary?: boolean }[];
}

const personas: Persona[] = [
  {
    id: "individual",
    title: "شخص من أصحاب الهمم",
    intro:
      "اعثر على مجتمع يفهمك، ومعرفة مبنية لحياتك اليومية، ودعم مصمم لواقعك.",
    subItems: [
      "العيش المستقل",
      "الكرامة اليومية",
      "إيجاد مجتمع",
    ],
    ctas: [
      { label: "اكتشف أنتامي", href: "/ar/about", primary: true },
      { label: "تحدث معنا", href: "/ar/contact" },
    ],
  },
  {
    id: "family",
    title: "أحد أفراد العائلة",
    intro:
      "سواء كنت أمًا أو أبًا أو أخًا أو مقدم رعاية لمن تحب، ستجد المعرفة والمنتجات والأشخاص الذين يفهمون.",
    subItems: ["أم", "أب", "أخ أو أخت", "مقدم رعاية"],
    ctas: [
      { label: "اكتشف أنتامي", href: "/ar/about", primary: true },
      { label: "تواصل معنا", href: "/ar/contact" },
    ],
  },
  {
    id: "provider",
    title: "مقدم خدمة",
    intro:
      "زوّد نفسك ومن تخدمهم بموارد ومنتجات وتدريب احترافي، مصمم مع متخصصين.",
    subItems: ["طبيب", "ممرض", "معالج", "أخصائي"],
    ctas: [
      { label: "اكتشف أنتامي", href: "/ar/about", primary: true },
      { label: "تحدث مع فريقنا", href: "/ar/contact" },
    ],
  },
  {
    id: "corporate",
    title: "جهة أو مؤسسة",
    intro:
      "اجعل مكان عملك أو منشأتك أو خدمتك شاملة بحق، من التوظيف والتدريب إلى بيئات ترحب بالجميع.",
    subItems: [
      "توظيف شخص من أصحاب الهمم",
      "آداب التعامل مع أصحاب الهمم",
      "تدريب الموظفين على القيادة",
      "مراكز تسوق ومتاجر شاملة",
      "ساعات صديقة للتوحد في المتاحف",
    ],
    ctas: [
      { label: "كن شريكًا لأنتامي", href: "/ar/contact", primary: true },
      { label: "اكتشف أنتامي", href: "/ar/about" },
    ],
  },
];

export function PersonaSelector() {
  const [activeId, setActiveId] = useState<string>(personas[0].id);
  const active = personas.find((p) => p.id === activeId) ?? personas[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
      {/* Persona list */}
      <ul role="tablist" aria-label="اختر من أنت" className="flex flex-col gap-3">
        {personas.map((p) => {
          const isActive = p.id === activeId;
          return (
            <li key={p.id}>
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`persona-panel-${p.id}`}
                id={`persona-tab-${p.id}`}
                onClick={() => setActiveId(p.id)}
                className={`w-full text-start p-5 rounded-2xl transition-all duration-200 flex items-center gap-4 min-h-[64px] ${
                  isActive
                    ? "gradient-bg text-white shadow-md"
                    : "bg-white text-[#2d2d2d] hover:bg-[#f0fdf9] border border-[#e5e7eb]"
                }`}
              >
                <span className="font-semibold text-base leading-snug">{p.title}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Active persona detail */}
      <div
        role="tabpanel"
        id={`persona-panel-${active.id}`}
        aria-labelledby={`persona-tab-${active.id}`}
        className="bg-white rounded-2xl p-8 shadow-sm gradient-border-top"
      >
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-[#2d2d2d] mb-2" style={{ fontFamily: "var(--font-display-ar), sans-serif" }}>
            {active.title}
          </h3>
          <p className="text-[#5a5a5a] leading-relaxed">{active.intro}</p>
        </div>

        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#5a5a5a] mb-3">
            يشمل ذلك
          </p>
          <ul className="flex flex-wrap gap-2">
            {active.subItems.map((item) => (
              <li
                key={item}
                className="text-sm text-[#2d2d2d] bg-[#f9fafa] border border-[#e5e7eb] rounded-full px-4 py-1.5"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          {active.ctas.map((cta) => (
            <Link
              key={cta.href + cta.label}
              href={cta.href}
              className={
                cta.primary
                  ? "inline-flex items-center justify-center px-6 py-3 rounded-full gradient-bg text-white text-sm font-semibold hover:brightness-110 transition-all min-h-[44px]"
                  : "inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-[#524096] text-[#524096] text-sm font-semibold hover:bg-[#524096] hover:text-white transition-all min-h-[44px]"
              }
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
