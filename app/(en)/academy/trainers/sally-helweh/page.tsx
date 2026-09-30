import type { Metadata } from "next";
import { TrainerProfile } from "@/components/academy/TrainerProfile";

export const metadata: Metadata = {
  title: "Trainer profile: Sally Helweh | Antami Academy",
  description:
    "Sally Helweh is Co-Founder and COO of Antami, a certified hypnotherapist, parent coach and speaker on inclusion and belonging.",
};

export default function SallyHelwehPage() {
  return <TrainerProfile locale="en" trainerKey="sally" />;
}
