import { FlowStep } from './flow-step';

const steps = [
  { number: 1, title: 'Create Account', description: 'Sign up in seconds' },
  { number: 2, title: 'Choose Character', description: 'Browse our library' },
  { number: 3, title: 'Start Conversation', description: 'Engage in real-time' },
];

export function JourneyPreview() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map((step) => (
        <FlowStep key={step.number} {...step} />
      ))}
    </div>
  );
}
