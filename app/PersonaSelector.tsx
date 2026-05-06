"use client";

import { useState } from "react";
import Link from "next/link";

interface Persona {
  id: string;
  icon: string;
  title: string;
  intro: string;
  subItems: string[];
  ctas: { label: string; href: string; primary?: boolean }[];
}

const personas: Persona[] = [
  {
    id: "individual",
    icon: "🌿",
    title: "A person with a disability",
    intro:
      "Find clothes that work the way you do, connect with a community that gets it, and access support tailored to your everyday.",
    subItems: [
      "Living independently",
      "Dressing with dignity",
      "Finding community",
    ],
    ctas: [
      { label: "Shop adaptive clothing", href: "/shop", primary: true },
      { label: "Talk to us", href: "/contact" },
    ],
  },
  {
    id: "family",
    icon: "🤝",
    title: "A family member",
    intro:
      "Whether you're a parent, sibling, or caring for someone you love, you'll find tools, products, and people who understand.",
    subItems: ["A mother", "A father", "A sibling", "A caregiver"],
    ctas: [
      { label: "Browse for your loved one", href: "/shop", primary: true },
      { label: "Get in touch", href: "/contact" },
    ],
  },
  {
    id: "provider",
    icon: "🩺",
    title: "A service provider",
    intro:
      "Equip yourself and the people you serve with adaptive products, professional resources, and training built with specialists.",
    subItems: ["Doctor", "Nurse", "Therapist", "Specialist"],
    ctas: [
      { label: "Supplier enquiry", href: "/suppliers", primary: true },
      { label: "Talk to our team", href: "/contact" },
    ],
  },
  {
    id: "corporate",
    icon: "🏛️",
    title: "A corporate or institution",
    intro:
      "Make your workplace, venue, or service genuinely inclusive, from employment and training to environments that welcome everyone.",
    subItems: [
      "Employing a person with a disability",
      "Disability etiquette",
      "Training employees to lead",
      "Inclusive shopping malls & retail",
      "Autism-friendly hours at museums",
    ],
    ctas: [
      { label: "Partner with Antami", href: "/contact", primary: true },
      { label: "Bulk supply enquiry", href: "/suppliers" },
    ],
  },
];

export function PersonaSelector() {
  const [activeId, setActiveId] = useState<string>(personas[0].id);
  const active = personas.find((p) => p.id === activeId) ?? personas[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
      {/* Persona list */}
      <ul role="tablist" aria-label="Choose who you are" className="flex flex-col gap-3">
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
                className={`w-full text-left p-5 rounded-2xl transition-all duration-200 flex items-center gap-4 min-h-[64px] ${
                  isActive
                    ? "gradient-bg text-white shadow-md"
                    : "bg-white text-[#2d2d2d] hover:bg-[#f0fdf9] border border-[#e5e7eb]"
                }`}
              >
                <span className="text-2xl flex-shrink-0" aria-hidden="true">
                  {p.icon}
                </span>
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
        <div className="flex items-start gap-5 mb-6">
          <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center text-3xl flex-shrink-0" aria-hidden="true">
            {active.icon}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#2d2d2d] mb-2" style={{ fontFamily: "Helony, Georgia, serif" }}>
              {active.title}
            </h3>
            <p className="text-[#5a5a5a] leading-relaxed">{active.intro}</p>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#5a5a5a] mb-3">
            This includes
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
