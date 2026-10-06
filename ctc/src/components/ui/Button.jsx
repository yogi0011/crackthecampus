export default function Button({ href, ghost, children }) {
  const look = ghost
    ? "border border-primary/40 hover:bg-white/10"
    : "bg-primary text-ink hover:bg-primary-hover";

  return (
    <a href={href} className={`inline-block rounded-lg px-5 py-3 text-sm font-semibold transition ${look}`}>
      {children}
    </a>
  );
}
