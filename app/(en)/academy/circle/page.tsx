import type { Metadata } from "next";
import { DairatiCircle } from "@/components/academy/DairatiCircle";

export const metadata: Metadata = {
  title: "Da'irati – My circle of support | Antami Academy",
  description:
    "Your circle of support, in one place. Add the people who help you every day, and keep everyone on the same page.",
};

export default function DairatiPage() {
  return <DairatiCircle locale="en" />;
}
