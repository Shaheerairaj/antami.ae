import type { Metadata } from "next";
import { GradientText } from "@/components/GradientText";
import { GradientButton } from "@/components/GradientButton";
import { StepFlow } from "@/components/StepFlow";
import { SupplierForm } from "./SupplierForm";

export const metadata: Metadata = {
  title: "B2B Supplier: Adaptive Clothing Accessories | Antami",
  description:
    "Antami supplies adaptive clothing accessories to hospitals, special needs centres, and clothing brands across the UAE.",
};

const clients = [
  {
    icon: "🏥",
    title: "Hospitals & Clinics",
    description:
      "Patient garments that are quick to remove for examinations, easy to put on post-surgery, and require no fine motor control.",
  },
  {
    icon: "🤝",
    title: "Special Needs Centres",
    description:
      "Adaptive closures for schools, rehabilitation centres, and day programmes where independence in dressing is a daily goal.",
  },
  {
    icon: "👔",
    title: "Clothing Brands",
    description:
      "Existing brands looking to launch an adaptive line or retrofit current styles with accessible fastenings, without starting from scratch.",
  },
];

const products = [
  {
    name: "Adaptive Clothing Accessories",
    icon: "🧲",
    description:
      "A full range of adaptive components (magnetic zippers, hidden magnetic closures, discreet velcro panels, and easy-grip pulls) supplied at scale for your garments.",
    highlight: "Made for garments",
  },
  {
    name: "Custom Specifications",
    icon: "📐",
    description:
      "Tell us the use case (patient gowns, school uniforms, retail collections) and we'll match the right closures, sizes, and finishes for your line.",
    highlight: "Tailored to your line",
  },
  {
    name: "Bulk Supply",
    icon: "📦",
    description:
      "Reliable volumes for hospitals, centres, and brands. Consistent quality, predictable lead times, and direct delivery to your facility or production partner.",
    highlight: "Consistent at scale",
  },
];

const steps = [
  { number: 1, icon: "📋", title: "Submit an enquiry", description: "Tell us about your organisation and what you need." },
  { number: 2, icon: "💬", title: "We get in touch", description: "The Antami team will reach out within 2 business days to discuss quantities, specs, and pricing." },
  { number: 3, icon: "📦", title: "Receive your order", description: "We supply directly to your facility or deliver to your brand's production line." },
];

export default function SuppliersPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative py-28 bg-[#1a1a2e] overflow-hidden"
        aria-labelledby="suppliers-hero-heading"
      >
        <div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(1,203,174,0.1) 0%, rgba(82,64,150,0.1) 60%, transparent 80%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-[#01efac] text-sm font-semibold uppercase tracking-wider mb-4">
            B2B Supply
          </p>
          <h1
            id="suppliers-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-3xl"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            Adaptive clothing accessories,{" "}
            <GradientText>supplied at scale</GradientText>
          </h1>
          <p className="text-white/70 text-xl max-w-xl leading-relaxed mb-8">
            We supply adaptive clothing accessories to hospitals, special needs centres, and clothing brands, so your organisation can offer adaptive options without the R&amp;D.
          </p>
          <GradientButton href="#enquiry-form">Enquire Now</GradientButton>
        </div>
      </section>

      {/* ── Who we work with ─────────────────────────────────── */}
      <section className="py-20 bg-[#f9fafa]" aria-labelledby="clients-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="clients-heading"
            className="text-3xl sm:text-4xl text-center mb-12"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>Who we work with</GradientText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clients.map((c) => (
              <div key={c.title} className="gradient-border-top bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-4xl mb-4" aria-hidden="true">{c.icon}</div>
                <h3 className="font-semibold text-lg text-[#2d2d2d] mb-3">{c.title}</h3>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products we supply ───────────────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="products-heading"
            className="text-3xl sm:text-4xl text-center mb-12"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>What we supply</GradientText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-[#f9fafa] rounded-2xl p-8 flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center text-2xl text-white" aria-hidden="true">
                  {p.icon}
                </div>
                <div>
                  <span className="inline-block text-xs font-semibold gradient-bg text-white px-3 py-1 rounded-full mb-2">
                    {p.highlight}
                  </span>
                  <h3 className="font-semibold text-[#2d2d2d] text-base mb-2">{p.name}</h3>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="py-20 bg-[#f9fafa]" aria-labelledby="b2b-how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="b2b-how-heading"
            className="text-3xl sm:text-4xl text-center mb-12"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>How it works</GradientText>
          </h2>
          <StepFlow steps={steps} />
        </div>
      </section>

      {/* ── Enquiry form ─────────────────────────────────────── */}
      <section id="enquiry-form" className="py-20 bg-white" aria-labelledby="enquiry-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="enquiry-heading"
            className="text-3xl sm:text-4xl text-center mb-4"
            style={{ fontFamily: "Helony, Georgia, serif" }}
          >
            <GradientText>Submit a supplier enquiry</GradientText>
          </h2>
          <p className="text-[#5a5a5a] text-center mb-8">
            Tell us about your organisation and what you need. We&apos;ll be in touch within 2 business days.
          </p>
          <SupplierForm />
        </div>
      </section>
    </>
  );
}
