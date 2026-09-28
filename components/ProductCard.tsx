import Image from "next/image";

interface Props {
  name: string;
  description: string;
  image?: string;
  price?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function ProductCard({ name, description, image, price, ctaLabel = "Enquire", ctaHref = "/contact" }: Props) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-[#f0fdf9] to-[#e8eaf6]">
        {image && <Image src={image} alt={name} fill className="object-cover" />}
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-[#2d2d2d] text-base">{name}</h3>
          {price && <span className="font-semibold text-[#524096] text-sm whitespace-nowrap">{price}</span>}
        </div>
        <p className="text-[#5a5a5a] text-sm leading-relaxed flex-1">{description}</p>
        <a
          href={ctaHref}
          className="inline-flex items-center justify-center px-6 py-2 rounded-full gradient-bg text-white text-sm font-semibold
            hover:brightness-110 transition-all duration-200 min-h-[44px]"
        >
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}
