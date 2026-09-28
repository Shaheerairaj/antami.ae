import Link from "next/link";
import Image from "next/image";
import { localizeHref, type Locale } from "@/lib/arms";

const shopLinks = [
  { href: "/adaptive-clothing", label: "Adaptive Clothing", labelAr: "الملابس المتكيفة" },
  { href: "/shop/adaptive-abayas", label: "Adaptive Abayas", labelAr: "العبايات المتكيفة" },
  { href: "/shop/adaptive-kandouras", label: "Kandouras", labelAr: "الكندورات المتكيفة" },
  { href: "/shop/accessories", label: "Embedded Accessories", labelAr: "الإكسسوارات المدمجة" },
];

const companyLinks = [
  { href: "/about", label: "About Us", labelAr: "من نحن" },
  { href: "/about#mission", label: "Our Mission", labelAr: "رسالتنا" },
  { href: "/about#values", label: "Values", labelAr: "قيمنا" },
];

const helpLinks = [
  { href: "/contact", label: "Contact Us", labelAr: "تواصل معنا" },
  { href: "/adapt-at-your-service", label: "Adapt at Your Service", labelAr: "التكييف حسب طلبك" },
  { href: "/suppliers", label: "For Suppliers (B2B)", labelAr: "للموردين (B2B)" },
];

interface Props {
  locale?: Locale;
}

export function Footer({ locale = "en" }: Props) {
  return (
    <footer className="bg-[#1a1a2e] text-white" aria-label={locale === "ar" ? "تذييل الموقع" : "Site footer"}>
      {/* Gradient divider */}
      <div className="h-1 gradient-bg" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/logos/logo-dark.png"
              alt="Antami"
              width={130}
              height={44}
              className="h-11 w-auto mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              {locale === "ar" ? (
                <>
                  الانتماء للجميع.
                  <br />أول علامة إماراتية للملابس المتكيفة.
                </>
              ) : (
                <>
                  Where Belonging is for Everyone.
                  <br />Your first Emirati adaptive brand.
                </>
              )}
            </p>
          </div>

          {/* Shop */}
          <div>
            <h2 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              {locale === "ar" ? "التسوق" : "Shop"}
            </h2>
            <ul className="space-y-2">
              {shopLinks.map((l) => (
                <li key={l.href}>
                  <Link href={localizeHref(l.href, locale)} className="text-white/60 hover:text-white text-sm transition-colors duration-150">
                    {locale === "ar" ? l.labelAr : l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              {locale === "ar" ? "الشركة" : "Company"}
            </h2>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={localizeHref(l.href, locale)} className="text-white/60 hover:text-white text-sm transition-colors duration-150">
                    {locale === "ar" ? l.labelAr : l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h2 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              {locale === "ar" ? "المساعدة" : "Get Help"}
            </h2>
            <ul className="space-y-2">
              {helpLinks.map((l) => (
                <li key={l.href}>
                  <Link href={localizeHref(l.href, locale)} className="text-white/60 hover:text-white text-sm transition-colors duration-150">
                    {locale === "ar" ? l.labelAr : l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:Shaikha@antami.ae" className="text-white/60 hover:text-white text-sm transition-colors duration-150" dir="ltr">
                  Shaikha@antami.ae
                </a>
              </li>
              <li>
                <a href="mailto:Sally@antami.ae" className="text-white/60 hover:text-white text-sm transition-colors duration-150" dir="ltr">
                  Sally@antami.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            {locale === "ar" ? "© 2026 أنتامي. جميع الحقوق محفوظة." : "© 2026 Antami. All rights reserved."}
          </p>
          <p className="text-white/40 text-xs">
            {locale === "ar" ? "علامة إماراتية للملابس المتكيفة" : "UAE-based adaptive clothing brand"}
          </p>
        </div>
      </div>
    </footer>
  );
}
