"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  accentColor: string;
  className?: string;
}

export function InvertButton({ href, children, accentColor, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-sm
        bg-white hover:bg-white/90 hover:scale-[1.02] transition-all duration-200
        min-h-[44px] min-w-[44px] ${className}`}
      style={{ color: accentColor }}
    >
      {children}
    </Link>
  );
}
