"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  color: string;
  className?: string;
}

export function SolidButton({ href, children, color, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center min-h-[52px] px-7 rounded-xl text-white font-semibold no-underline
        hover:brightness-110 transition-all duration-200 min-w-[44px] ${className}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </Link>
  );
}
