interface Step {
  number: number;
  title: string;
  description: string;
}

interface Props {
  steps: Step[];
}

export function StepFlow({ steps }: Props) {
  return (
    <ol className="flex flex-col md:flex-row gap-8 md:gap-4 list-none p-0">
      {steps.map((step, i) => (
        <li key={step.number} className="flex-1 flex flex-col items-center text-center relative">
          {i < steps.length - 1 && (
            <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] right-0 h-[2px] gradient-bg" aria-hidden="true" />
          )}
          <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg mb-4 z-10">
            {step.number}
          </div>
          <h3 className="font-semibold text-[#2d2d2d] mb-1">{step.title}</h3>
          <p className="text-[#5a5a5a] text-sm leading-relaxed">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
