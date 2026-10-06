export default function Section({ id, title, text, children }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-xl text-3xl font-bold md:text-4xl">{title}</h2>
        {text && <p className="mt-3 max-w-xl text-muted">{text}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
