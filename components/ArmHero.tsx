import { ReactNode } from "react";

interface Props {
  color: string;
  textColor: string;
  name: string;
  tagline: ReactNode;
  description: string;
  children?: ReactNode;
  fontFamily?: string;
}

export function ArmHero({ color, textColor, name, tagline, description, children, fontFamily = "Helony, Georgia, serif" }: Props) {
  return (
    <section
      className="relative overflow-hidden min-h-[60vh] flex items-start"
      style={{ backgroundColor: color }}
      aria-labelledby="arm-hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <h1
          id="arm-hero-heading"
          className="leading-tight mb-4 whitespace-nowrap"
          style={{
            fontFamily,
            color: textColor,
            fontSize: "clamp(1.25rem, 6vw, 4.5rem)",
          }}
        >
          {name}
        </h1>
        <div className="max-w-2xl">
          <p
            className="text-xl sm:text-2xl leading-snug mb-8"
            style={{ fontFamily, color: textColor, opacity: 0.85 }}
          >
            {tagline}
          </p>
          <p
            className="text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: textColor, opacity: 0.9 }}
          >
            {description}
          </p>
          {children && <div className="flex flex-wrap gap-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
