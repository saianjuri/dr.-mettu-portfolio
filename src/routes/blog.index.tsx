import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { posts, type BlogCategory } from "@/lib/blog-data";

const title = "The Journal — Thoughts on Health, Performance & Life | Dr. Sai Anjuri";
const description =
  "Insights and practical perspectives from Dr. Sai Anjuri across pharmacy, fitness, nutrition, wellness and creative work.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Journal,
});

type Filter = "all" | BlogCategory;

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "pharmacy", label: "Pharmacy" },
  { key: "fitness", label: "Fitness" },
  { key: "nutrition", label: "Nutrition" },
  { key: "wellness", label: "Wellness" },
  { key: "creative", label: "Creative" },
];

/** Neutral, non-photographic cover placeholder in the site's own visual language. */
function CoverPlaceholder({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`relative flex items-end overflow-hidden rounded-sm border border-border/70 bg-secondary ${
        tall ? "aspect-[4/3]" : "aspect-[16/10]"
      }`}
    >
      <span className="absolute left-0 top-0 h-full w-[3px] bg-teal/70" />
      <span className="absolute right-6 top-6 h-10 w-10 rounded-full border border-accent/45" />
      <span className="px-6 pb-6 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function Journal() {
  const [active, setActive] = useState<Filter>("all");

  const visible = useMemo(
    () => posts.filter((p) => active === "all" || p.category === active),
    [active],
  );
  const featured = visible.find((p) => p.featured) ?? null;
  const rest = visible.filter((p) => p !== featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* ————— Hero ————— */}
        <section>
          <div className="mx-auto max-w-[1200px] px-6 pb-12 pt-12 lg:px-8 lg:pb-16 lg:pt-20">
            <Reveal className="max-w-3xl">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                The Journal
              </p>
              <h1 className="mt-6 text-[2.15rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.9rem] lg:text-[3.25rem]">
                Thoughts on Health,
                <br />
                <span className="text-teal-deep">Performance &amp; Life</span>
              </h1>
              <div aria-hidden="true" className="mt-7 h-px w-full max-w-md bg-border/70" />
              <p className="mt-6 max-w-[38rem] text-[1.0125rem] leading-[1.75] text-muted-foreground">
                Insights, experiences and practical perspectives across pharmacy, fitness,
                nutrition and creative work.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ————— Categories ————— */}
        <section className="sticky top-[69px] z-30 border-y border-border/60 bg-background/92 backdrop-blur-[3px]">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div
              role="tablist"
              aria-label="Filter journal by category"
              className="-mx-1 flex items-center gap-x-7 overflow-x-auto px-1 py-3.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {filters.map((f) => {
                const isActive = active === f.key;
                return (
                  <button
                    key={f.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(f.key)}
                    className={`relative shrink-0 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.16em] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:bg-teal after:transition-transform after:duration-300 ${
                      isActive
                        ? "text-teal-deep after:scale-x-100"
                        : "text-muted-foreground after:scale-x-0 hover:text-foreground"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ————— Featured ————— */}
        {featured ? (
          <section>
            <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8 lg:py-20">
              <Reveal>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Featured
                </p>
              </Reveal>
              <Reveal delay={80} className="mt-8">
                <article className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: featured.slug }}
                    className="group block"
                    aria-label={featured.title}
                  >
                    <div className="transition-transform duration-500 group-hover:scale-[1.01]">
                      <CoverPlaceholder label={`${featured.categoryLabel} — Journal`} tall />
                    </div>
                  </Link>

                  <div className="min-w-0">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-teal-deep">
                      {featured.categoryLabel}
                    </p>
                    <h2 className="mt-4 max-w-[22ch] text-[1.55rem] font-extrabold leading-[1.2] tracking-[-0.018em] lg:text-[2.1rem]">
                      <Link
                        to="/blog/$slug"
                        params={{ slug: featured.slug }}
                        className="transition-colors hover:text-teal-deep"
                      >
                        {featured.title}
                      </Link>
                    </h2>
                    <p className="mt-5 max-w-[52ch] text-[0.9875rem] leading-[1.8] text-muted-foreground">
                      {featured.excerpt}
                    </p>
                    <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] uppercase tracking-[0.14em] text-muted-foreground">
                      <span>{featured.date}</span>
                      <span aria-hidden="true" className="h-3 w-px bg-border" />
                      <span>{featured.readingTime}</span>
                      <span aria-hidden="true" className="h-3 w-px bg-border" />
                      <span className="text-accent">Draft</span>
                    </p>
                    <Button variant="teal" size="lg" className="mt-8" asChild>
                      <Link to="/blog/$slug" params={{ slug: featured.slug }}>
                        Read Article <ArrowRight aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </article>
              </Reveal>
            </div>
          </section>
        ) : null}

        {/* ————— Article grid ————— */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8 lg:py-20">
            <Reveal>
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Latest Writing
              </p>
            </Reveal>

            {rest.length ? (
              <div className="mt-10 grid gap-x-14 gap-y-12 md:grid-cols-2">
                {rest.map((post, i) => (
                  <Reveal key={post.slug} delay={(i % 2) * 70}>
                    <article className="flex h-full flex-col border-t border-border/70 pt-7">
                      {!post.textOnly ? (
                        <Link
                          to="/blog/$slug"
                          params={{ slug: post.slug }}
                          className="group mb-6 block"
                          aria-label={post.title}
                        >
                          <div className="transition-transform duration-500 group-hover:scale-[1.01]">
                            <CoverPlaceholder label={post.categoryLabel} />
                          </div>
                        </Link>
                      ) : null}

                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-teal-deep">
                        {post.categoryLabel}
                      </p>
                      <h3 className="mt-3 max-w-[28ch] text-[1.1875rem] font-bold leading-[1.3] tracking-[-0.012em] lg:text-[1.3125rem]">
                        <Link
                          to="/blog/$slug"
                          params={{ slug: post.slug }}
                          className="transition-colors hover:text-teal-deep"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-3 max-w-[46ch] text-[0.9375rem] leading-[1.75] text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                        <span>{post.date}</span>
                        <span aria-hidden="true" className="h-3 w-px bg-border" />
                        <span>{post.readingTime}</span>
                      </p>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        className="mt-6 inline-flex items-center gap-2 self-start text-[0.8125rem] font-semibold text-teal-deep transition-colors hover:text-accent"
                      >
                        Read Article <ArrowRight size={15} aria-hidden="true" />
                      </Link>
                    </article>
                  </Reveal>
                ))}
              </div>
            ) : (
              <p className="mt-10 text-[0.9375rem] text-muted-foreground">
                No articles in this category yet.
              </p>
            )}
          </div>
        </section>

        {/* ————— Stay curious ————— */}
        <section className="border-t border-border/60 bg-card/40">
          <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8 lg:py-16">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-14">
                <div className="min-w-0">
                  <h2 className="text-[1.5rem] font-extrabold tracking-[-0.015em] lg:text-[1.85rem]">
                    Stay Curious
                  </h2>
                  <span aria-hidden="true" className="mt-4 block h-px w-16 bg-teal" />
                  <p className="mt-4 max-w-[46ch] text-[0.9875rem] leading-[1.8] text-muted-foreground">
                    Follow along for new perspectives on health, fitness, nutrition and creative
                    work.
                  </p>
                </div>
                <Button variant="orange" size="xl" className="w-full sm:w-auto" asChild>
                  <a href="https://www.instagram.com/dr_saianjuri" target="_blank" rel="noreferrer noopener">
                    Follow Dr. Sai Anjuri <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
