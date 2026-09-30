import type { Metadata } from "next";
import { CourseModule } from "@/components/academy/CourseModule";

export const metadata: Metadata = {
  title: "From Inclusion to Belonging: Three Everyday Shifts | Antami Academy",
  description:
    "A short, free course for families, colleagues and communities. Learn three simple shifts that help People of Determination feel they truly belong.",
};

export default function ModuleOnePage() {
  return <CourseModule locale="en" />;
}
