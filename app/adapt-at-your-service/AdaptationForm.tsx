"use client";
import { useState, useRef } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function AdaptationForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const liveRef = useRef<HTMLDivElement>(null);

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    if (!data.get("name")) errs.name = "Name is required.";
    if (!data.get("email")) errs.email = "Email is required.";
    if (!data.get("phone")) errs.phone = "Phone number is required.";
    if (!data.get("option")) errs.option = "Please select an option.";
    if (!data.get("garment")) errs.garment = "Please select a garment type.";
    if (!data.get("description")) errs.description = "Please describe your adaptations.";
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
  const errorClass = "text-red-600 text-xs mt-1" ;

  if (state === "success") {
    return (
      <div role="alert" className="text-center py-12 bg-white rounded-2xl shadow-sm p-8">
        <div className="text-5xl mb-4" aria-hidden="true">✓</div>
        <h3 className="text-xl font-semibold text-[#2d2d2d] mb-2">Request received!</h3>
        <p className="text-[#5a5a5a]">
          Thank you. Shaikha and Sally will be in touch shortly to discuss your adaptation.
        </p>
      </div>
    );
  }

  return (
    <div aria-live="polite" ref={liveRef}>
      {state === "error" && (
        <div role="alert" className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
          Something went wrong. Please try again or email us directly at Shaikha@antami.ae.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        aria-label="Adaptation request form"
        className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
            placeholder="Your name"
          />
          {errors.name && <p id="name-error" role="alert" className={errorClass}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email address <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
            placeholder="you@example.com"
          />
          {errors.email && <p id="email-error" role="alert" className={errorClass}>{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-required="true"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass}
            placeholder="+971 50 000 0000"
          />
          {errors.phone && <p id="phone-error" role="alert" className={errorClass}>{errors.phone}</p>}
        </div>

        {/* Option */}
        <fieldset>
          <legend className={labelClass}>
            Which option? <span aria-hidden="true" className="text-red-500">*</span>
          </legend>
          <div className="flex flex-col sm:flex-row gap-3 mt-1">
            {[
              { value: "own", label: "I have my own item" },
              { value: "new", label: "I want a new item adapted" },
            ].map((opt) => (
              <label key={opt.value} className="flex items-center gap-2 cursor-pointer min-h-[44px]">
                <input
                  type="radio"
                  name="option"
                  value={opt.value}
                  className="w-4 h-4 accent-[#524096]"
                  aria-describedby={errors.option ? "option-error" : undefined}
                />
                <span className="text-sm text-[#2d2d2d]">{opt.label}</span>
              </label>
            ))}
          </div>
          {errors.option && <p id="option-error" role="alert" className={errorClass}>{errors.option}</p>}
        </fieldset>

        {/* Garment type */}
        <div>
          <label htmlFor="garment" className={labelClass}>
            Garment type <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <select
            id="garment"
            name="garment"
            aria-required="true"
            aria-describedby={errors.garment ? "garment-error" : undefined}
            className={`${inputClass} bg-white`}
            defaultValue=""
          >
            <option value="" disabled>Select garment type</option>
            <option value="abaya">Abaya</option>
            <option value="kandoura">Kandoura</option>
            <option value="other">Other</option>
          </select>
          {errors.garment && <p id="garment-error" role="alert" className={errorClass}>{errors.garment}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className={labelClass}>
            Describe the adaptations you need <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            aria-required="true"
            aria-describedby={errors.description ? "description-error" : undefined}
            className={inputClass}
            placeholder="E.g. magnetic closures on the front, wider armholes, open-back design..."
          />
          {errors.description && <p id="description-error" role="alert" className={errorClass}>{errors.description}</p>}
        </div>

        {/* Details */}
        <div>
          <label htmlFor="details" className={labelClass}>Any relevant details</label>
          <textarea
            id="details"
            name="details"
            rows={3}
            className={inputClass}
            placeholder="E.g. mobility considerations, magnetic vs velcro preference, side of dominant hand..."
          />
        </div>

        {/* File upload */}
        <div>
          <label htmlFor="photo" className={labelClass}>Photo of the garment (optional)</label>
          <input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            className="w-full text-sm text-[#5a5a5a] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:gradient-bg file:text-white hover:file:brightness-110 cursor-pointer"
          />
        </div>

        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full py-4 rounded-full gradient-bg text-white font-semibold text-base hover:brightness-110 transition-all duration-200 min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === "submitting" ? "Sending..." : "Submit Adaptation Request"}
        </button>

        <p className="text-xs text-[#5a5a5a] text-center">
          <span aria-hidden="true">*</span> Required fields. Your request is sent directly to the Antami team.
        </p>
      </form>
    </div>
  );
}
