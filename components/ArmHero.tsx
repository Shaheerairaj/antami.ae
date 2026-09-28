import { ReactNode } from "react";

interface Props {
  color: string;
  textColor: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export function ArmHero({ color, textColor, eyebrow, title, description, children }: Props) {
  return (
    <section
      className="relative overflow-hidden tab-spill-anim min-h-[60vh] flex items-start"
      style={{ backgroundColor: color }}
      aria-labelledby="arm-hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="max-w-2xl">
          <p
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: textColor, opacity: 0.75 }}
          >
            {eyebrow}
          </p>
          <h1
            id="arm-hero-heading"
            className="text-5xl sm:text-6xl leading-tight mb-6"
            style={{ fontFamily: "Helony, Georgia, serif", color: textColor }}
          >
            {title}
          </h1>
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
