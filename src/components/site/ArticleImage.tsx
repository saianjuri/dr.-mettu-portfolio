import type { BlogCategory } from "@/lib/blog-data";

type Props = {
  /** Real cover image URL. When present it replaces the editorial placeholder. */
  src?: string | undefined;
  alt?: string;
  category: BlogCategory;
  label?: string;
  /** Tailwind aspect ratio class, e.g. "aspect-[4/3]". */
  ratio?: string;
  className?: string;
};

/**
 * Editorial placeholder compositions — quiet, geometric, art-directed.
 * Each category gets its own arrangement so cards never look repetitive.
 */
const compositions: Record<BlogCategory, React.ReactNode> = {
  pharmacy: (
    <>
      <span className="absolute inset-y-0 left-0 w-[38%] bg-teal/10" />
      <span className="absolute left-[12%] top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-teal/40" />
      <span className="absolute right-[16%] top-[22%] h-px w-[34%] bg-accent/50" />
      <span className="absolute right-[16%] top-[38%] h-px w-[22%] bg-foreground/15" />
      <span className="absolute right-[16%] top-[54%] h-px w-[28%] bg-foreground/10" />
    </>
  ),
  fitness: (
    <>
      <span className="absolute bottom-0 left-[14%] h-[46%] w-px bg-foreground/12" />
      <span className="absolute bottom-0 left-[14%] h-[46%] w-[26%] bg-accent/12" />
      <span className="absolute bottom-0 left-[46%] h-[68%] w-[26%] bg-teal/14" />
      <span className="absolute right-[10%] top-[16%] h-14 w-14 rounded-full border border-accent/45" />
    </>
  ),
  nutrition: (
    <>
      <span className="absolute inset-x-0 top-0 h-[42%] bg-teal/8" />
      <span className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10" />
      <span className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/35" />
    </>
  ),
  wellness: (
    <>
      <span className="absolute inset-y-0 right-0 w-[42%] bg-teal/9" />
      <span className="absolute left-[12%] top-[26%] h-px w-[40%] bg-teal/45" />
      <span className="absolute left-[12%] top-[46%] h-px w-[26%] bg-foreground/12" />
      <span className="absolute bottom-[18%] left-[12%] h-10 w-10 border border-accent/45" />
    </>
  ),
  creative: (
    <>
      <span className="absolute left-[10%] top-[14%] h-[52%] w-[44%] border border-foreground/12" />
      <span className="absolute bottom-[14%] right-[12%] h-[46%] w-[34%] bg-accent/12" />
      <span className="absolute left-[38%] top-[38%] h-16 w-16 rounded-full border border-teal/45" />
    </>
  ),
};

export function ArticleImage({
  src,
  alt = "",
  category,
  label,
  ratio = "aspect-[16/10]",
  className = "",
}: Props) {
  return (
    <div className={`relative overflow-hidden border border-border/70 bg-secondary ${ratio} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        >
          {compositions[category]}
          <span className="absolute left-0 top-0 h-full w-[3px] bg-teal/70" />
          {label ? (
            <span className="absolute bottom-5 left-6 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {label}
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}
