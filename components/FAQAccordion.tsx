"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
}

export function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <dl className="divide-y divide-gray-200">
      {items.map((item, i) => (
        <div key={i} className="py-4">
          <dt>
            <button
              type="button"
              aria-expanded={openIndex === i}
              aria-controls={`faq-${i}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between text-start font-semibold text-[#2d2d2d] py-1
                hover:text-[#524096] transition-colors duration-150 min-h-[44px]"
            >
              <span>{item.question}</span>
              <span
                className="ms-4 flex-shrink-0 gradient-text text-xl transition-transform duration-200"
                style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                aria-hidden="true"
              >
                +
              </span>
            </button>
          </dt>
          <dd
            id={`faq-${i}`}
            role="region"
            className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
          >
            <p className="text-[#5a5a5a] leading-relaxed text-sm">{item.answer}</p>
          </dd>
        </div>
      ))}
    </dl>
  );
}
