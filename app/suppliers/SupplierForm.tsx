"use client";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function SupplierForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    if (!data.get("org")) errs.org = "Organisation name is required.";
    if (!data.get("name")) errs.name = "Contact name is required.";
    if (!data.get("email")) errs.email = "Email is required.";
    if (!data.get("type")) errs.type = "Please select your organisation type.";
    if (!data.get("products")) errs.products = "Please select at least one product.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setState("submitting");
    try {
      await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 px-4 py-3 text-[#2d2d2d] placeholder-[#5a5a5a]/50 focus:outline-none focus:ring-2 focus:ring-[#524096] focus:border-transparent transition-all duration-150";
  const labelClass = "block text-sm font-medium text-[#2d2d2d] mb-1";
  const errorClass = "text-red-600 text-xs mt-1";

  if (state === "success") {
    return (
      <div role="alert" className="text-center py-12 bg-white rounded-2xl shadow-sm p-8">
        <div className="text-5xl mb-4" aria-hidden="true">✓</div>
        <h3 className="text-xl font-semibold text-[#2d2d2d] mb-2">Enquiry received!</h3>
        <p className="text-[#5a5a5a]">
          Thank you. Shaikha and Sally will be in touch within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Supplier enquiry form"
      className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5"
    >
      {state === "error" && (
        <div role="alert" className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
          Something went wrong. Please email us directly at Shaikha@antami.ae.
        </div>
      )}

      {/* Organisation */}
      <div>
        <label htmlFor="org" className={labelClass}>
          Organisation name <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="org"
          name="org"
          type="text"
          aria-required="true"
          aria-describedby={errors.org ? "org-error" : undefined}
          className={inputClass}
          placeholder="e.g. Dubai Healthcare City"
        />
        {errors.org && <p id="org-error" role="alert" className={errorClass}>{errors.org}</p>}
      </div>

      {/* Contact name */}
      <div>
        <label htmlFor="s-name" className={labelClass}>
          Your name <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="s-name"
          name="name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-describedby={errors.name ? "s-name-error" : undefined}
          className={inputClass}
          placeholder="Your full name"
        />
        {errors.name && <p id="s-name-error" role="alert" className={errorClass}>{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="s-email" className={labelClass}>
          Work email <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="s-email"
          name="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-describedby={errors.email ? "s-email-error" : undefined}
          className={inputClass}
          placeholder="you@organisation.ae"
        />
        {errors.email && <p id="s-email-error" role="alert" className={errorClass}>{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="s-phone" className={labelClass}>Phone number</label>
        <input
          id="s-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
          placeholder="+971 50 000 0000"
        />
      </div>

      {/* Organisation type */}
      <div>
        <label htmlFor="type" className={labelClass}>
          Organisation type <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <select
          id="type"
          name="type"
          aria-required="true"
          aria-describedby={errors.type ? "type-error" : undefined}
          className={`${inputClass} bg-white`}
          defaultValue=""
        >
          <option value="" disabled>Select type</option>
          <option value="hospital">Hospital or Clinic</option>
          <option value="special-needs-centre">Special Needs Centre</option>
          <option value="clothing-brand">Clothing Brand</option>
          <option value="other">Other</option>
        </select>
        {errors.type && <p id="type-error" role="alert" className={errorClass}>{errors.type}</p>}
      </div>

      {/* Products interested in */}
      <fieldset>
        <legend className={labelClass}>
          Products interested in <span aria-hidden="true" className="text-red-500">*</span>
        </legend>
        <div className="flex flex-col gap-2 mt-1" aria-describedby={errors.products ? "products-error" : undefined}>
          {[
            { value: "magnetic-zippers", label: "Magnetic zippers" },
            { value: "magnetic-closures", label: "Hidden magnetic closures" },
            { value: "velcro", label: "Velcro panels" },
            { value: "easy-grip", label: "Easy-grip pulls" },
            { value: "other", label: "Other / not sure" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer min-h-[44px]">
              <input
                type="checkbox"
                name="products"
                value={opt.value}
                className="w-4 h-4 accent-[#524096]"
              />
              <span className="text-sm text-[#2d2d2d]">{opt.label}</span>
            </label>
          ))}
        </div>
        {errors.products && <p id="products-error" role="alert" className={errorClass}>{errors.products}</p>}
      </fieldset>

      {/* Estimated quantity */}
      <div>
        <label htmlFor="quantity" className={labelClass}>Estimated monthly quantity</label>
        <input
          id="quantity"
          name="quantity"
          type="text"
          className={inputClass}
          placeholder="e.g. 500 units/month"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="s-message" className={labelClass}>Additional details</label>
        <textarea
          id="s-message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Tell us more about your requirements, garment types, or any specific needs..."
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full py-4 rounded-full gradient-bg text-white font-semibold text-base hover:brightness-110 transition-all min-h-[44px] disabled:opacity-60"
      >
        {state === "submitting" ? "Sending..." : "Submit Enquiry"}
      </button>

      <p className="text-xs text-[#5a5a5a] text-center">
        <span aria-hidden="true">*</span> Required fields. We&apos;ll respond within 2 business days.
      </p>
    </form>
  );
}
