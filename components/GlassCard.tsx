import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  light?: boolean;
}

export function GlassCard({ children, className = "", light }: Props) {
  return (
    <div
      className={`rounded-2xl p-6 border ${
        light ? "bg-black/5 border-black/10" : "bg-white/10 border-white/15 backdrop-blur-sm"
      } ${className}`}
    >
      {children}
    </div>
  );
}
