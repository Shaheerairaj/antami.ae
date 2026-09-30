export type Locale = "en" | "ar";

export interface Arm {
  slug: string;
  href: string;
  matchPrefixes: string[];
  label: string;
  labelAr: string;
  shortLabel: string;
  shortLabelAr: string;
  color: string;
  textColor: string;
  /** Saturated color that reads clearly on a white surface (e.g. a button label). */
  accent: string;
}

export const arms: Arm[] = [
  {
    slug: "academy",
    href: "/academy",
    matchPrefixes: ["/academy"],
    label: "Antami Academy",
    labelAr: "أكاديمية أنتمي",
    shortLabel: "Academy",
    shortLabelAr: "الأكاديمية",
    color: "#01efac",
    textColor: "#1a1a2e",
    accent: "#0d6b53",
  },
  {
    slug: "caregiver-app",
    href: "/caregiver-app",
    matchPrefixes: ["/caregiver-app"],
    label: "Antami Caregiver App",
    labelAr: "تطبيق أنتمي لمقدمي الرعاية",
    shortLabel: "Caregiver App",
    shortLabelAr: "تطبيق الرعاية",
    color: "#2082a6",
    textColor: "#ffffff",
    accent: "#2082a6",
  },
  {
    slug: "adaptive-clothing",
    href: "/adaptive-clothing",
    matchPrefixes: ["/adaptive-clothing", "/shop", "/adapt-at-your-service", "/suppliers"],
    label: "Antami Adaptive Clothing",
    labelAr: "أنتمي للملابس المكيّفة",
    shortLabel: "Adaptive Clothing",
    shortLabelAr: "الملابس المكيّفة",
    color: "#524096",
    textColor: "#ffffff",
    accent: "#524096",
  },
  {
    slug: "marketplace",
    href: "/marketplace",
    matchPrefixes: ["/marketplace"],
    label: "Antami POD Marketplace",
    labelAr: "سوق أنتمي POD",
    shortLabel: "Marketplace",
    shortLabelAr: "السوق",
    color: "#5f2a84",
    textColor: "#ffffff",
    accent: "#5f2a84",
  },
];

/** Mixes a hex color with white at the given alpha, for soft tinted backgrounds. */
export function withAlpha(hex: string, alpha: number): string {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Prefixes a route with /ar when rendering the Arabic tree. */
export function localizeHref(href: string, locale: Locale): string {
  if (locale === "en") return href;
  return href === "/" ? "/ar" : `/ar${href}`;
}

export function armForPath(pathname: string): Arm | undefined {
  const normalized = pathname.startsWith("/ar") ? pathname.slice(3) || "/" : pathname;
  return arms.find((arm) => arm.matchPrefixes.some((p) => normalized === p || normalized.startsWith(p + "/")));
}
