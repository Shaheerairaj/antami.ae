import { ReactNode } from "react";
import { withAlpha } from "@/lib/arms";

interface Props {
  color: string;
  /** Saturated color that reads clearly on the tinted background (see lib/arms.ts). */
  accent: string;
  name: string;
  tagline: ReactNode;
  description: string;
  children?: ReactNode;
  fontFamily?: string;
}

export function ArmHero({ color, accent, name, tagline, description, children, fontFamily = "Helony, Georgia, serif" }: Props) {
  return (
    <section
      className="relative overflow-hidden min-h-[60vh] flex items-start"
      style={{ backgroundColor: withAlpha(color, 0.12) }}
      aria-labelledby="arm-hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <h1
          id="arm-hero-heading"
          className="leading-tight mb-4 whitespace-nowrap"
          style={{
            fontFamily,
            color: accent,
            fontSize: "clamp(1.25rem, 6vw, 4.5rem)",
          }}
        >
          {name}
        </h1>
        <div className="max-w-2xl">
          <p
            className="text-xl sm:text-2xl leading-snug mb-8"
            style={{ fontFamily, color: accent }}
          >
            {tagline}
          </p>
          <p
            className="text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "#2d2d2d" }}
          >
            {description}
          </p>
          {children && <div className="flex flex-wrap gap-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
