export interface Arm {
  slug: string;
  href: string;
  matchPrefixes: string[];
  label: string;
  shortLabel: string;
  color: string;
  textColor: string;
  /** Saturated color that reads clearly on a white surface (e.g. a button label). */
  accent: string;
  icon: string;
}

export const arms: Arm[] = [
  {
    slug: "academy",
    href: "/academy",
    matchPrefixes: ["/academy"],
    label: "Antami Academy",
    shortLabel: "Academy",
    color: "#01efac",
    textColor: "#1a1a2e",
    accent: "#0d6b53",
    icon: "🎓",
  },
  {
    slug: "caregiver-app",
    href: "/caregiver-app",
    matchPrefixes: ["/caregiver-app"],
    label: "Caregiver App",
    shortLabel: "Caregiver App",
    color: "#2082a6",
    textColor: "#ffffff",
    accent: "#2082a6",
    icon: "🤝",
  },
  {
    slug: "adaptive-clothing",
    href: "/adaptive-clothing",
    matchPrefixes: ["/adaptive-clothing", "/shop", "/adapt-at-your-service", "/suppliers"],
    label: "Adaptive Clothing",
    shortLabel: "Adaptive Clothing",
    color: "#524096",
    textColor: "#ffffff",
    accent: "#524096",
    icon: "👗",
  },
  {
    slug: "marketplace",
    href: "/marketplace",
    matchPrefixes: ["/marketplace"],
    label: "POD Marketplace",
    shortLabel: "Marketplace",
    color: "#5f2a84",
    textColor: "#ffffff",
    accent: "#5f2a84",
    icon: "🛍️",
  },
];

export function armForPath(pathname: string): Arm | undefined {
  return arms.find((arm) => arm.matchPrefixes.some((p) => pathname === p || pathname.startsWith(p + "/")));
}
