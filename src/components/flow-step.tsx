interface FlowStepProps {
  number: number;
  title: string;
  description: string;
}

export function FlowStep({ number, title, description }: FlowStepProps) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">
        {number}
      </div>
      <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}
