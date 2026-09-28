"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { arms, armForPath } from "@/lib/arms";

const secondaryLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();
  const activeArm = armForPath(pathname);

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
      } ${scrolled || menuOpen || activeArm ? "bg-white shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" aria-label="Antami home">
            <Image
              src="/logos/logo-light.png"
              alt="Antami"
              width={300}
              height={96}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#2d2d2d] hover:text-[#524096] transition-colors duration-150 px-4 py-2"
              >
                {link.label}
              </Link>
            ))}
            <span className="relative group ml-2">
              <button
                className="text-sm font-medium text-[#5a5a5a] cursor-default px-2"
                aria-label="Language toggle: Arabic coming soon"
              >
                AR | EN
              </button>
              <span
                role="tooltip"
                className="absolute top-full right-0 mt-2 px-3 py-1 bg-[#1a1a2e] text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
              >
                Arabic coming soon
              </span>
            </span>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 min-h-[44px] min-w-[44px] items-center justify-center"
          >
            <span className={`block w-6 h-0.5 bg-[#2d2d2d] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#2d2d2d] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#2d2d2d] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Chrome-style arm tabs strip */}
      <div className="hidden md:block h-14 border-b border-black/5" style={{ backgroundColor: "#f1f1f4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <ul role="tablist" aria-label="Antami arms" className="flex items-end justify-center gap-8 h-full">
            {arms.map((arm) => {
              const isActive = activeArm?.slug === arm.slug;
              return (
                <li key={arm.slug} className="relative">
                  <Link
                    href={arm.href}
                    role="tab"
                    aria-selected={isActive}
                    className={`chrome-tab relative z-10 flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-colors duration-200 ${
                      isActive ? "" : "bg-transparent hover:text-[#2d2d2d]"
                    }`}
                    style={
                      isActive
                        ? ({ "--tab-color": arm.color, color: arm.textColor } as React.CSSProperties)
                        : { color: "#5a5a5a" }
                    }
                  >
                    <span aria-hidden="true">{arm.icon}</span>
                    {arm.shortLabel}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <div className="relative px-4 pb-6 pt-2 bg-white">
          <div className="absolute top-0 inset-x-0 h-1 gradient-bg" aria-hidden="true" />
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1 mt-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#5a5a5a] pt-3 pb-1">
              Antami arms
            </p>
            {arms.map((arm) => {
              const isActive = activeArm?.slug === arm.slug;
              return (
                <Link
                  key={arm.href}
                  href={arm.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-3 text-base font-medium text-[#2d2d2d] border-b border-gray-100 last:border-0"
                  style={isActive ? { color: arm.color } : undefined}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: arm.color }}
                    aria-hidden="true"
                  />
                  {arm.label}
                </Link>
              );
            })}
            <p className="text-xs font-semibold uppercase tracking-wider text-[#5a5a5a] pt-4 pb-1">
              More
            </p>
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-medium text-[#2d2d2d] hover:text-[#524096] transition-colors duration-150 border-b border-gray-100 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <p className="py-3 text-sm text-[#5a5a5a]">Arabic: Coming Soon</p>
          </nav>
        </div>
      </div>
    </header>
  );
}
