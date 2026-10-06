import { site } from "../../data";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-3">
        <p className="text-lg font-bold text-primary">{site.name}</p>

        <nav className="flex flex-col gap-1 text-sm">
          <h4 className="mb-1 font-semibold">Explore</h4>
          {site.nav.slice(0, 3).map((link) => (
            <a key={link.href} href={link.href} className="text-muted hover:text-text">{link.label}</a>
          ))}
        </nav>

        <div className="text-sm">
          <h4 className="mb-1 font-semibold">Contact</h4>
          <a href={`mailto:${site.email}`} className="text-muted hover:text-text">{site.email}</a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-5 text-sm text-muted">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}
