"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  textColor?: string;
  className?: string;
}

export function GhostButton({ href, children, textColor = "#ffffff", className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-sm
        border-2 bg-transparent hover:bg-white/10 transition-all duration-200
        min-h-[44px] min-w-[44px] ${className}`}
      style={{ borderColor: textColor, color: textColor }}
    >
      {children}
    </Link>
  );
}
