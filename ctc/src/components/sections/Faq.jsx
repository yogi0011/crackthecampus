import { faqs } from "../../data";
import Section from "../ui/Section";

export default function Faq() {
  return (
    <Section id="faq" title="Common questions">
      <div className="max-w-2xl divide-y divide-line border-y border-line">
        {faqs.map((item) => (
          <details key={item.q} className="py-4">
            <summary className="cursor-pointer font-semibold">{item.q}</summary>
            <p className="mt-2 text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
