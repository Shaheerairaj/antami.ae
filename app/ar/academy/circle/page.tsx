import type { Metadata } from "next";
import { DairatiCircle } from "@/components/academy/DairatiCircle";

export const metadata: Metadata = {
  title: "دائرتي – دائرة الدعم الخاصة بي | أكاديمية أنتمي",
  description: "دائرة الدعم الخاصة بك، في مكان واحد. أضف الأشخاص الذين يساندونك كل يوم، وأبقِ الجميع على اطلاع.",
};

export default function DairatiPage() {
  return <DairatiCircle locale="ar" />;
}
