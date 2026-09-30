"use client";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    if (!data.get("name")) errs.name = "الاسم مطلوب.";
    if (!data.get("email")) errs.email = "البريد الإلكتروني مطلوب.";
    if (!data.get("message")) errs.message = "الرسالة مطلوبة.";
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
        <h3 className="text-lg font-semibold text-[#2d2d2d] mb-2">تم إرسال الرسالة!</h3>
        <p className="text-[#5a5a5a] text-sm">سيتواصل معك فريق أنتمي قريبًا.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="نموذج التواصل"
      className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5"
    >
      {state === "error" && (
        <div role="alert" className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
          حدث خطأ ما. يرجى مراسلتنا مباشرة على Shaikha@antami.ae.
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className={labelClass}>
          الاسم <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={inputClass}
          placeholder="اسمك"
        />
        {errors.name && <p id="contact-name-error" role="alert" className={errorClass}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          البريد الإلكتروني <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={inputClass}
          placeholder="بريدك الإلكتروني"
        />
        {errors.email && <p id="contact-email-error" role="alert" className={errorClass}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          الرسالة <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          aria-required="true"
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={inputClass}
          placeholder="كيف يمكننا مساعدتك؟"
        />
        {errors.message && <p id="contact-message-error" role="alert" className={errorClass}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full py-4 rounded-full gradient-bg text-white font-semibold hover:brightness-110 transition-all min-h-[44px] disabled:opacity-60"
      >
        {state === "submitting" ? "جارٍ الإرسال..." : "إرسال الرسالة"}
      </button>
    </form>
  );
}
