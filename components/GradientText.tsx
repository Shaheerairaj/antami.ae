import { ReactNode } from "react";

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function GradientText({ as: Tag = "span", children, className = "", style }: Props) {
  return (
    <Tag className={`gradient-text font-display ${className}`} style={style}>
      {children}
    </Tag>
  );
}
