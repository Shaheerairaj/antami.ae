"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { arms, armForPath, localizeHref, type Locale } from "@/lib/arms";

const secondaryLinks = [
  { href: "/about", label: "About", labelAr: "من نحن" },
  { href: "/contact", label: "Contact", labelAr: "تواصل معنا" },
];

interface Props {
  locale?: Locale;
}

export function Nav({ locale = "en" }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();
  const activeArm = armForPath(pathname);

  const otherLocale: Locale = locale === "en" ? "ar" : "en";
  const otherLocalePath =
    locale === "en"
      ? localizeHref(pathname, "ar")
      : (pathname.replace(/^\/ar/, "") || "/");

  useEffect(() => {
    lastY.current = window.scrollY;
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > lastY.current && y > 120) {
        setHidden(true);
      } else if (y < lastY.current) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white border-b border-[#e5e7eb] transition-all duration-300 ${
        hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
      } ${scrolled || menuOpen ? "shadow-sm" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[88px] gap-4">
          {/* Logo */}
          <Link href={localizeHref("/", locale)} aria-label={locale === "ar" ? "الصفحة الرئيسية لأنتمي" : "Antami home"} className="flex-shrink-0">
            <Image
              src="/logos/logo-light.png"
              alt="Antami"
              width={300}
              height={96}
              className="h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop arm nav */}
          <nav aria-label={locale === "ar" ? "أذرع أنتمي" : "Antami arms"} className="hidden lg:flex items-center gap-9">
            {arms.map((arm) => {
              const isActive = activeArm?.slug === arm.slug;
              return (
                <Link
                  key={arm.slug}
                  href={localizeHref(arm.href, locale)}
                  aria-current={isActive ? "page" : undefined}
                  className="text-[15px] font-medium pb-1.5 border-b-2 transition-colors duration-150"
                  style={
                    isActive
                      ? { color: arm.accent, borderColor: arm.color }
                      : { color: "#2d2d2d", borderColor: "transparent" }
                  }
                >
                  {locale === "ar" ? arm.shortLabelAr : arm.shortLabel}
                </Link>
              );
            })}
          </nav>

          {/* Desktop secondary nav */}
          <nav aria-label={locale === "ar" ? "التنقل الثانوي" : "Secondary navigation"} className="hidden lg:flex items-center gap-7 flex-shrink-0">
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={localizeHref(link.href, locale)}
                className="text-sm font-medium text-[#2d2d2d] hover:text-[#524096] transition-colors duration-150"
              >
                {locale === "ar" ? link.labelAr : link.label}
              </Link>
            ))}
            <Link
              href={otherLocalePath}
              className="text-sm font-semibold text-[#524096] hover:text-[#2082a6] transition-colors duration-150"
              lang={otherLocale}
              aria-label={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
            >
              {locale === "ar" ? "EN | AR" : "AR | EN"}
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? (locale === "ar" ? "إغلاق القائمة" : "Close menu") : (locale === "ar" ? "فتح القائمة" : "Open menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 min-h-[44px] min-w-[44px] items-center justify-center flex-shrink-0"
          >
            <span className={`block w-6 h-0.5 bg-[#2d2d2d] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#2d2d2d] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#2d2d2d] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <div className="relative px-4 pb-6 pt-2 bg-white border-t border-gray-100">
          <div className="absolute top-0 inset-x-0 h-1 gradient-bg" aria-hidden="true" />
          <nav aria-label={locale === "ar" ? "التنقل للجوال" : "Mobile navigation"} className="flex flex-col gap-1 mt-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#5a5a5a] pt-3 pb-1">
              {locale === "ar" ? "أذرع أنتمي" : "Antami arms"}
            </p>
            {arms.map((arm) => {
              const isActive = activeArm?.slug === arm.slug;
              return (
                <Link
                  key={arm.href}
                  href={localizeHref(arm.href, locale)}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-3 text-base font-medium text-[#2d2d2d] border-b border-gray-100 last:border-0"
                  style={isActive ? { color: arm.accent } : undefined}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: arm.color }}
                    aria-hidden="true"
                  />
                  {locale === "ar" ? arm.labelAr : arm.label}
                </Link>
              );
            })}
            <p className="text-xs font-semibold uppercase tracking-wider text-[#5a5a5a] pt-4 pb-1">
              {locale === "ar" ? "المزيد" : "More"}
            </p>
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={localizeHref(link.href, locale)}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-medium text-[#2d2d2d] hover:text-[#524096] transition-colors duration-150 border-b border-gray-100 last:border-0"
              >
                {locale === "ar" ? link.labelAr : link.label}
              </Link>
            ))}
            <Link
              href={otherLocalePath}
              onClick={() => setMenuOpen(false)}
              lang={otherLocale}
              className="py-3 text-sm text-[#5a5a5a] hover:text-[#524096] transition-colors duration-150"
            >
              {locale === "ar" ? "English" : "العربية"}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
