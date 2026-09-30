import type { Metadata } from "next";
import { CourseModule } from "@/components/academy/CourseModule";

export const metadata: Metadata = {
  title: "من الدمج إلى الانتماء: ثلاثة تحولات يومية | أكاديمية أنتمي",
  description:
    "دورة قصيرة ومجانية للأسر والزملاء والمجتمعات. تعلّم ثلاثة تحولات بسيطة تساعد أصحاب الهمم على الشعور بانتماء حقيقي.",
};

export default function ModuleOnePage() {
  return <CourseModule locale="ar" />;
}
