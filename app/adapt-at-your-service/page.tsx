import type { Metadata } from "next";
import { GradientText } from "@/components/GradientText";
import { StepFlow } from "@/components/StepFlow";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AdaptationForm } from "./AdaptationForm";

export const metadata: Metadata = {
  title: "Adapt at Your Service | Antami",
  description:
    "Send us your favourite garment and we'll adapt it for comfort, independence, and dignity. Or choose a new piece and we'll adapt it for you.",
};

const steps = [
  { number: 1, icon: "👗", title: "Choose your path", description: "Bring your own loved piece, or buy something new to be adapted." },
  { number: 2, icon: "📦", title: "Deliver the item", description: "Send your garment to our UAE-based team." },
  { number: 3, icon: "✏️", title: "Fill the form", description: "Tell us exactly what adaptations you need." },
  { number: 4, icon: "🏠", title: "We deliver it back", description: "We adapt your garment and send it back to you." },
];

const faqs = [
  {
    question: "How long does the adaptation take?",
    answer: "Turnaround times vary depending on the complexity of the adaptation. We'll confirm a timeline once we receive your form and garment. Placeholder, to be provided by founders.",
  },
  {
    question: "What garments can you adapt?",
    answer: "We can adapt most garments including abayas, kandouras, and everyday clothing. Placeholder, to be provided by founders.",
  },
  {
    question: "Do I need to be in the UAE?",
    answer: "We primarily serve clients in the UAE at launch. Placeholder, to be provided by founders.",
  },
  {
    question: "How do I deliver my item?",
    answer: "You can drop off your item or use a courier service. We'll provide full instructions after you submit the form. Placeholder, to be provided by founders.",
  },
  {
    question: "What types of adaptations do you offer?",
    answer: "We offer magnetic closures, velcro replacements, open-back options, easy-access openings, and more. Placeholder, to be provided by founders.",
  },
];

export default function AdaptAtYourServicePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative py-28 bg-[#1a1a2e] overflow-hidden"
        aria-labelledby="aays-hero-heading"
      >
        <div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(1,239,172,0.08) 0%, rgba(95,42,132,0.1) 60%, transparent 80%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1
            id="aays-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>Adapt at Your Service</GradientText>
          </h1>
          <p className="text-white/70 text-xl max-w-xl leading-relaxed">
            Your favourite piece of clothing, reimagined for you.
          </p>
        </div>
      </section>

      {/* ── Two paths ────────────────────────────────────────── */}
      <section className="py-16 bg-[#f9fafa]" aria-labelledby="paths-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="paths-heading"
            className="text-2xl sm:text-3xl text-center mb-10"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>Choose your path</GradientText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm gradient-border-top">
              <div className="text-3xl mb-3" aria-hidden="true">💝</div>
              <h3 className="font-semibold text-lg text-[#2d2d2d] mb-2">I already have a piece I love</h3>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">
                Bring your pre-owned favourite item to us and we&apos;ll adapt it to work for you, keeping what you love while adding what you need.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm gradient-border-top">
              <div className="text-3xl mb-3" aria-hidden="true">🛍️</div>
              <h3 className="font-semibold text-lg text-[#2d2d2d] mb-2">I want to start fresh</h3>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">
                Buy a new item, deliver it to us, fill in our form to choose your adaptations, and we&apos;ll make it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="py-16 bg-white" aria-labelledby="aays-how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="aays-how-heading"
            className="text-2xl sm:text-3xl text-center mb-12"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>How it works</GradientText>
          </h2>
          <StepFlow steps={steps} />
        </div>
      </section>

      {/* ── Adaptation Request Form ───────────────────────────── */}
      <section className="py-16 bg-[#f9fafa]" aria-labelledby="form-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="form-heading"
            className="text-2xl sm:text-3xl text-center mb-8"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>Request an adaptation</GradientText>
          </h2>
          <AdaptationForm />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl text-center mb-8"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>Frequently asked questions</GradientText>
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
