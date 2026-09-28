"use client";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function SupplierForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    if (!data.get("org")) errs.org = "اسم المؤسسة مطلوب.";
    if (!data.get("name")) errs.name = "اسم جهة الاتصال مطلوب.";
    if (!data.get("email")) errs.email = "البريد الإلكتروني مطلوب.";
    if (!data.get("type")) errs.type = "يرجى اختيار نوع مؤسستكم.";
    if (!data.get("products")) errs.products = "يرجى اختيار منتج واحد على الأقل.";
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
        <h3 className="text-xl font-semibold text-[#2d2d2d] mb-2">تم استلام الاستفسار!</h3>
        <p className="text-[#5a5a5a]">
          شكرًا لكم. ستتواصل معكم Shaikha و Sally خلال يومي عمل.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="نموذج استفسار المورّدين"
      className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5"
    >
      {state === "error" && (
        <div role="alert" className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
          حدث خطأ ما. يرجى مراسلتنا مباشرة على Shaikha@antami.ae.
        </div>
      )}

      {/* Organisation */}
      <div>
        <label htmlFor="org" className={labelClass}>
          اسم المؤسسة <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="org"
          name="org"
          type="text"
          aria-required="true"
          aria-describedby={errors.org ? "org-error" : undefined}
          className={inputClass}
          placeholder="مثال: مدينة دبي الطبية"
        />
        {errors.org && <p id="org-error" role="alert" className={errorClass}>{errors.org}</p>}
      </div>

      {/* Contact name */}
      <div>
        <label htmlFor="s-name" className={labelClass}>
          اسمكم <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="s-name"
          name="name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-describedby={errors.name ? "s-name-error" : undefined}
          className={inputClass}
          placeholder="اسمكم الكامل"
        />
        {errors.name && <p id="s-name-error" role="alert" className={errorClass}>{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="s-email" className={labelClass}>
          البريد الإلكتروني للعمل <span aria-hidden="true" className="text-red-500">*</span>
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
        <label htmlFor="s-phone" className={labelClass}>رقم الهاتف</label>
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
          نوع المؤسسة <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <select
          id="type"
          name="type"
          aria-required="true"
          aria-describedby={errors.type ? "type-error" : undefined}
          className={`${inputClass} bg-white`}
          defaultValue=""
        >
          <option value="" disabled>اختر النوع</option>
          <option value="hospital">مستشفى أو عيادة</option>
          <option value="special-needs-centre">مركز أصحاب الهمم</option>
          <option value="clothing-brand">علامة تجارية للملابس</option>
          <option value="other">أخرى</option>
        </select>
        {errors.type && <p id="type-error" role="alert" className={errorClass}>{errors.type}</p>}
      </div>

      {/* Products interested in */}
      <fieldset>
        <legend className={labelClass}>
          المنتجات المهتم بها <span aria-hidden="true" className="text-red-500">*</span>
        </legend>
        <div className="flex flex-col gap-2 mt-1" aria-describedby={errors.products ? "products-error" : undefined}>
          {[
            { value: "magnetic-zippers", label: "سحابات مغناطيسية" },
            { value: "magnetic-closures", label: "إغلاقات مغناطيسية مخفية" },
            { value: "velcro", label: "ألواح فيلكرو" },
            { value: "easy-grip", label: "مقابض سهلة الإمساك" },
            { value: "other", label: "أخرى / غير متأكد" },
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
        <label htmlFor="quantity" className={labelClass}>الكمية الشهرية المقدّرة</label>
        <input
          id="quantity"
          name="quantity"
          type="text"
          className={inputClass}
          placeholder="مثال: 500 وحدة شهريًا"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="s-message" className={labelClass}>تفاصيل إضافية</label>
        <textarea
          id="s-message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="أخبرونا المزيد عن متطلباتكم، أو أنواع الملابس، أو أي احتياجات خاصة..."
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full py-4 rounded-full gradient-bg text-white font-semibold text-base hover:brightness-110 transition-all min-h-[44px] disabled:opacity-60"
      >
        {state === "submitting" ? "جارٍ الإرسال..." : "إرسال الاستفسار"}
      </button>

      <p className="text-xs text-[#5a5a5a] text-center">
        <span aria-hidden="true">*</span> حقول مطلوبة. سنرد خلال يومي عمل.
      </p>
    </form>
  );
}
