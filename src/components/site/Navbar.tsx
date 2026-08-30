import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const links: { label: string; to: string; hash?: string }[] = [
  { label: "About", to: "/about" },
  { label: "Expertise", to: "/", hash: "expertise" },
  { label: "Portfolio", to: "/", hash: "portfolio" },
  { label: "Blog", to: "/", hash: "blog" },
  { label: "Contact", to: "/", hash: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-ivory/92 backdrop-blur-[3px]">
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 lg:flex lg:justify-between lg:px-8 lg:py-[1.35rem]"
      >
        <Link to="/" className="group min-w-0 truncate">
          <span className="text-[1.0625rem] font-extrabold uppercase tracking-[0.14em] text-teal-deep">
            Dr. Sai Anjuri
          </span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                {...(link.hash ? { hash: link.hash } : {})}
                className="relative py-1 text-[0.8125rem] font-medium tracking-[0.02em] text-foreground/75 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-teal after:transition-transform after:duration-300 hover:text-teal-deep hover:after:scale-x-100 focus-visible:text-teal-deep focus-visible:outline-none"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <Button variant="orange" size="default" className="hidden rounded-lg px-5 lg:inline-flex" asChild>
            <a href="mailto:hello@drsaianjuri.com">
              Book Consultation <ArrowRight aria-hidden="true" />
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-ivory lg:hidden">
          <ul className="mx-auto max-w-[1200px] space-y-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  {...(link.hash ? { hash: link.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/50 px-1 py-3 text-[0.95rem] font-medium text-foreground/85 transition-colors hover:text-teal-deep"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Button variant="orange" size="lg" className="w-full rounded-lg" asChild>
                <a href="mailto:hello@drsaianjuri.com" onClick={() => setOpen(false)}>
                  Book Consultation <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
