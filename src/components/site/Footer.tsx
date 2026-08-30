import { Instagram, Linkedin, Mail } from "lucide-react";

const tags = ["PharmD", "Fitness", "Nutrition", "Photography"];

export function Footer() {
  return (
    <footer id="blog" className="border-t border-border/70 bg-card/60">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-6 py-8 text-[0.8125rem] text-muted-foreground lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-semibold text-foreground/80">© 2024 Dr. Sai Anjuri</span>
          {tags.map((tag) => (
            <a
              key={tag}
              href="#expertise"
              className="transition-colors hover:text-teal-deep focus-visible:text-teal-deep"
            >
              {tag}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            <Instagram size={16} aria-hidden="true" /> Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 transition-colors hover:text-teal-deep"
          >
            <Linkedin size={16} aria-hidden="true" /> LinkedIn
          </a>
          <a
            href="mailto:hello@drsaianjuri.com"
            className="inline-flex items-center gap-2 transition-colors hover:text-teal-deep"
          >
            <Mail size={16} aria-hidden="true" /> hello@drsaianjuri.com
          </a>
        </div>
      </div>
    </footer>
  );
}
