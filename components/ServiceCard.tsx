import Link from "next/link";

interface Props {
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
}

export function ServiceCard({ title, description, href, linkLabel = "Learn more" }: Props) {
  return (
    <div className="gradient-border-top bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-4">
      <h3 className="font-semibold text-lg text-[#2d2d2d]">{title}</h3>
      <p className="text-[#5a5a5a] text-sm leading-relaxed flex-1">{description}</p>
      <Link
        href={href}
        className="text-[#524096] font-semibold text-sm hover:underline focus-visible:underline"
        aria-label={`${linkLabel} about ${title}`}
      >
        {linkLabel}
      </Link>
    </div>
  );
}
