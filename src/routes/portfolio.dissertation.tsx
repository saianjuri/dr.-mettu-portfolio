import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import dissertationCover from "@/assets/dissertation-cover.png.asset.json";

const title =
  "From Prevalence to Prevention — PharmD Dissertation | Dr. Sai Anjuri";
const description =
  "Case study of the PharmD dissertation by Dr. Sai Anjuri: ensuring healthy early pregnancy through effective counselling strategies, JNTUH.";

export const Route = createFileRoute("/portfolio/dissertation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DissertationCaseStudy;
});

const details = [
  { label: "Project Type", value: "PharmD Dissertation" },
  { label: "Institution", value: "Marri Laxman Reddy Institute of Pharmacy" },
  { label: "University", value: "JNTUH" },
  { label: "Domain", value: "Healthcare / Pharmacy Practice" },
];

const sections = [
  { index: "01", heading: "Project Overview" },
  { index: "02", heading: "Objective" },
  { index: "03", heading: "Methodology" },
  { index: "04", heading: "Findings" },
  { index: "05", heading: "Conclusion" },
];

const guides = [
  {
    role: "Hospital Guide",
    name: "Dr. Aparna Padala, MBBS, MS",
    lines: [
      "Professor, Department of Obstetrics & Gynaecology",
      "Arundath Hospital, Dundigal, Hyderabad",
    ],
    accent: "teal" as const,
  },
  {
    role: "Institutional Guide",
    name: "Dr. B. Raja Rajeshwari, Pharm D",
    lines: [
      "Assistant Professor, Department of Pharmacy Practice",
      "Marri Laxman Reddy Institute of Pharmacy",
    ],
    accent: "orange" as const,
  },
];

function DissertationCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section>
          <div className="mx-auto max-w-[1200px] px-6 pb-14 pt-10 lg:px-8 lg:pb-20 lg:pt-16">
            <Reveal>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-teal-deep"
              >
                <ArrowLeft size={14} aria-hidden="true" /> Back to Portfolio
              </Link>
            </Reveal>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
              <Reveal>
                <figure className="mx-auto w-full max-w-[360px] lg:mx-0">
                  <img
                    src={dissertationCover.url}
                    alt="Dissertation cover — From Prevalence to Prevention, PharmD project report"
                    loading="eager"
                    decoding="async"
                    className="w-full rounded-sm border border-border/70 shadow-[var(--shadow-card)]"
                  />
                  <span
                    aria-hidden="true"
                    className="mt-4 block h-[3px] w-14 rounded-full bg-teal"
                  />
                  <figcaption className="mt-3 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    Project report cover
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal delay={100} className="min-w-0">
                <p className="eyebrow flex items-center gap-3 text-accent">
                  <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                  Research / Academic
                </p>
                <h1 className="mt-6 max-w-[34ch] text-[1.6rem] font-extrabold leading-[1.22] tracking-[-0.018em] sm:text-[2.1rem] lg:text-[2.5rem]">
                  From Prevalence to Prevention – Ensuring Healthy Early Pregnancy Through
                  Effective Counselling Strategies
                </h1>

                <dl className="mt-8 divide-y divide-border/70 border-y border-border/70">
                  {[
                    { label: "Programme", text: "Doctor of Pharmacy (PharmD) – Dissertation" },
                    {
                      label: "University",
                      text: "Jawaharlal Nehru Technological University, Hyderabad",
                    },
                    { label: "Institution", text: "Marri Laxman Reddy Institute of Pharmacy" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="grid gap-1 py-3.5 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-6"
                    >
                      <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {item.label}
                      </dt>
                      <dd className="text-[0.9375rem] leading-relaxed text-foreground/85">
                        {item.text}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Project details */}
        <section className="border-t border-border/60 bg-card/40">
          <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8 lg:py-16">
            <Reveal>
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Project Details
              </p>
            </Reveal>
            <div className="mt-8 grid gap-px border-t border-border/70 sm:grid-cols-2 lg:grid-cols-4">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 60}>
                  <div className="border-b border-border/70 py-6 pr-6 sm:h-full">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-teal-deep">
                      {d.label}
                    </p>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-foreground/85">
                      {d.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Case study structure — content to be added */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-20">
            <Reveal className="max-w-xl">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                Case Study
              </p>
              <h2 className="mt-5 text-[1.7rem] font-extrabold tracking-[-0.015em] lg:text-[2.15rem]">
                Research Focus
              </h2>
              <p className="mt-5 max-w-[58ch] text-[0.9875rem] leading-[1.8] text-muted-foreground">
                The dissertation explored counselling strategies relevant to healthy early
                pregnancy, moving from an understanding of prevalence towards preventive,
                patient-centred guidance within pharmacy practice.
              </p>
            </Reveal>

            <div className="mt-12 lg:mt-14">
              {sections.map((s, i) => (
                <Reveal key={s.index} delay={i * 50}>
                  <article className="grid gap-4 border-t border-border/70 py-9 last:border-b lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-14 lg:py-11">
                    <span
                      aria-hidden="true"
                      className={`block text-[1.9rem] font-extrabold leading-none tracking-[-0.02em] lg:text-[2.4rem] ${
                        i % 2 === 0 ? "text-teal" : "text-accent"
                      }`}
                    >
                      {s.index}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[1.2rem] font-extrabold tracking-[-0.015em] lg:text-[1.4rem]">
                        {s.heading}
                      </h3>
                      <p className="mt-3 text-[0.875rem] uppercase tracking-[0.14em] text-muted-foreground">
                        Content to be added
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Academic guidance */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8 lg:py-14">
            <Reveal>
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Academic Guidance
              </p>
            </Reveal>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-10">
              {guides.map((g, i) => (
                <Reveal key={g.role} delay={i * 70}>
                  <div
                    className={`border-l-2 pl-4 ${
                      g.accent === "teal" ? "border-teal" : "border-accent"
                    }`}
                  >
                    <p
                      className={`text-[0.6875rem] font-semibold uppercase tracking-[0.14em] ${
                        g.accent === "teal" ? "text-teal-deep" : "text-accent"
                      }`}
                    >
                      {g.role}
                    </p>
                    <p className="mt-1.5 text-[0.9375rem] font-semibold">{g.name}</p>
                    <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted-foreground">
                      {g.lines[0]}
                      <br />
                      {g.lines[1]}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Project documents placeholder */}
        <section className="border-t border-border/60 bg-card/40">
          <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8 lg:py-16">
            <Reveal className="max-w-xl">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Project Images &amp; Documents
              </p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
                Supporting material can be added here.
              </p>
            </Reveal>
            <Reveal delay={70} className="mt-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] overflow-hidden rounded-[1rem] border border-border/70 bg-secondary/50"
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-0 h-[3px] w-12 ${
                        i % 2 === 0 ? "bg-teal" : "bg-accent"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <div className="grid items-center gap-8 rounded-xl bg-teal px-7 py-11 text-primary-foreground sm:px-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14 lg:py-14">
              <div className="min-w-0">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                  Academic &amp; Professional Enquiries
                </p>
                <h2 className="mt-3 text-[1.7rem] font-extrabold tracking-[-0.015em] lg:text-[2.15rem]">
                  Get In Touch
                </h2>
                <span aria-hidden="true" className="mt-5 block h-px w-16 bg-primary-foreground/30" />
              </div>
              <Button variant="orange" size="xl" className="w-full sm:w-auto" asChild>
                <a href="mailto:hello@drsaianjuri.com">
                  Contact <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
