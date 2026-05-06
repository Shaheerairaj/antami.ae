"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/adaptive-clothing", label: "Adaptive Clothing" },
  { href: "/suppliers", label: "For Suppliers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link href="/" aria-label="Antami home">
            <Image
              src={scrolled || menuOpen ? "/logos/logo-light.png" : "/logos/logo-light.png"}
              alt="Antami"
              width={300}
              height={96}
              className="h-24 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#2d2d2d] hover:text-[#524096] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <span className="relative group">
              <button
                className="text-sm font-medium text-[#5a5a5a] cursor-default"
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

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <div className="relative px-4 pb-6 pt-2 bg-white">
          <div className="absolute top-0 inset-x-0 h-1 gradient-bg" aria-hidden="true" />
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1 mt-2">
            {navLinks.map((link) => (
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
