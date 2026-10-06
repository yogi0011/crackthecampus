import { stats } from "../../data";

export default function Stats() {
  return (
    <section className="border-y border-line py-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 text-center md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold text-primary">{stat.value}</p>
            <p className="mt-1 text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
