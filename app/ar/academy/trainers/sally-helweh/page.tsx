import type { Metadata } from "next";
import { TrainerProfile } from "@/components/academy/TrainerProfile";

export const metadata: Metadata = {
  title: "الملف الشخصي للمدربة: سالي حلوة | أكاديمية أنتمي",
  description:
    "سالي حلوة هي الشريكة المؤسسة ورئيسة العمليات في أنتمي، معالجة بالتنويم الإيحائي معتمدة ومدربة آباء ومتحدثة في الدمج والانتماء.",
};

export default function SallyHelwehPage() {
  return <TrainerProfile locale="ar" trainerKey="sally" />;
}
