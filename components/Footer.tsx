import Link from "next/link";
import Image from "next/image";

const shopLinks = [
  { href: "/adaptive-clothing", label: "Adaptive Clothing" },
  { href: "/shop/adaptive-abayas", label: "Adaptive Abayas" },
  { href: "/shop/adaptive-kandouras", label: "Kandouras" },
  { href: "/shop/accessories", label: "Embedded Accessories" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/about#mission", label: "Our Mission" },
  { href: "/about#values", label: "Values" },
];

const helpLinks = [
  { href: "/contact", label: "Contact Us" },
  { href: "/adapt-at-your-service", label: "Adapt at Your Service" },
  { href: "/suppliers", label: "For Suppliers (B2B)" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white" aria-label="Site footer">
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
              Where Belonging is for Everyone.
              <br />Your first Emirati adaptive brand.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h2 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">Shop</h2>
            <ul className="space-y-2">
              {shopLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">Company</h2>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h2 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">Get Help</h2>
            <ul className="space-y-2">
              {helpLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:Shaikha@antami.ae" className="text-white/60 hover:text-white text-sm transition-colors duration-150">
                  Shaikha@antami.ae
                </a>
              </li>
              <li>
                <a href="mailto:Sally@antami.ae" className="text-white/60 hover:text-white text-sm transition-colors duration-150">
                  Sally@antami.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">© 2026 Antami. All rights reserved.</p>
          <p className="text-white/40 text-xs">UAE-based adaptive clothing brand 🇦🇪</p>
        </div>
      </div>
    </footer>
  );
}
