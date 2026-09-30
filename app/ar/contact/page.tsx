import type { Metadata } from "next";
import { GradientText } from "@/components/GradientText";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "تواصل معنا | أنتمي",
  description:
    "تواصل مع فريق أنتمي. نحن هنا لمساعدتك في أسئلة الملابس المكيّفة، واستفسارات الخدمات، وأي شيء آخر.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-24 bg-[#f9fafa]" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            id="contact-heading"
            className="text-4xl sm:text-5xl mb-4"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>تواصل معنا</GradientText>
          </h1>
          <p className="text-[#5a5a5a] text-lg max-w-md mx-auto">
            فريق أنتمي هنا لمساعدتك، سواء كنت مهتمًا بمنتج، أو تحتاج إلى دعم، أو ترغب في معرفة المزيد.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white" aria-label="بطاقات التواصل عبر البريد الإلكتروني">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              { name: "Shaikha", email: "Shaikha@antami.ae" },
              { name: "Sally", email: "Sally@antami.ae" },
            ].map((person) => (
              <div key={person.email} className="gradient-border-top bg-[#f9fafa] rounded-2xl p-6 flex flex-col gap-3">
                <p className="font-semibold text-[#2d2d2d]">{person.name}</p>
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center justify-center px-6 py-2 rounded-full gradient-bg text-white text-sm font-semibold hover:brightness-110 transition-all min-h-[44px]"
                  aria-label={`راسل ${person.name} عبر البريد الإلكتروني ${person.email}`}
                >
                  {person.email}
                </a>
              </div>
            ))}
          </div>

          <h2
            className="text-2xl text-center mb-8"
            style={{ fontFamily: "var(--font-display-ar), sans-serif" }}
          >
            <GradientText>أو أرسل رسالة</GradientText>
          </h2>
          <ContactForm />

          <div className="mt-12 text-center">
            <p className="text-sm text-[#5a5a5a]">
              مقرّنا في الإمارات، وتشرّفنا خدمة المجتمع هنا وفي كل مكان.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
