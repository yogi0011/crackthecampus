import { useState } from "react";
import { site } from "../../data";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="text-lg font-bold text-primary">
          {site.name}
        </a>

        <button className="p-2 md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-6 bg-text before:mt-2 before:block before:h-0.5 before:w-6 before:bg-text" />
        </button>

        <nav
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-16 flex-col items-start gap-4 border-b border-line bg-ink px-5 pb-5 pt-3 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:p-0`}
        >
          {site.nav.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted hover:text-text" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <Button href="#start">Sign up</Button>
        </nav>
      </div>
    </header>
  );
}
