import { scoreParts } from "../../data";
import Section from "../ui/Section";

export default function Score() {
  return (
    <Section id="score" title="Beyond the resume: the CTC Score." text="Three signals, one score from 0.0 to 10.0 that recruiters can trust.">
      <div className="grid gap-5 md:grid-cols-3">
        {scoreParts.map((part, i) => (
          <div key={part.title} className="rounded-xl border border-line bg-surface p-6">
            <p className="text-sm text-accent">0{i + 1}</p>
            <h3 className="mt-2 text-xl font-bold">{part.title}</h3>
            <p className="mt-2 text-muted">{part.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
