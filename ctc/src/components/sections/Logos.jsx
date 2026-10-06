import { companies } from "../../data";

export default function Logos() {
  return (
    <section className="border-y border-line py-10">
      <div className="mx-auto max-w-6xl px-5">
        <p className="mb-5 text-sm text-muted">Empowering students to crack recruitment at…</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-lg font-semibold text-primary/70">
          {companies.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
