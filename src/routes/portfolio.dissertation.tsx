import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import dissertationCover from "@/assets/dissertation-cover.png.asset.json";

const title =
  "From Prevalence to Prevention — PharmD Dissertation | Dr. Sai Anjuri";
const description =
  "PharmD dissertation case study: counselling strategies for healthy early pregnancy, a prospective observational study at Arundathi Institute of Medical Sciences and Hospital.";

const DISSERTATION_PDF_URL =
  "https://drive.google.com/file/d/1QghmODF0EkAFpiMazLSHisxhJLygBoxL/view?usp=sharing";

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
  component: DissertationCaseStudy,
});

const headerMeta = [
  { label: "Programme", value: "Doctor of Pharmacy (PharmD) – Dissertation" },
  { label: "University", value: "Jawaharlal Nehru Technological University, Hyderabad" },
  { label: "Institution", value: "Marri Laxman Reddy Institute of Pharmacy" },
];

const strip = [
  { label: "Project Type", value: "PharmD Dissertation" },
  { label: "Institution", value: "Marri Laxman Reddy Institute of Pharmacy" },
  { label: "University", value: "JNTUH" },
  { label: "Domain", value: "Healthcare / Pharmacy Practice" },
];

const objectives = [
  "To determine the prevalence of complications in the first trimester of pregnancy.",
  "To identify the risk factors associated with these complications.",
  "To evaluate the effectiveness of counselling strategies in preventing these complications.",
  "To develop a structured counselling program tailored for early pregnancy based on identified needs and risk factors.",
  "To develop comprehensive educational materials and resources that facilitate providers’ and patients’ comprehension and adherence to established counselling protocols.",
];

const methodology = [
  { label: "Study Design", value: "Prospective observational study" },
  {
    label: "Study Site",
    value:
      "Department of Obstetrics & Gynecology, Arundathi Institute of Medical Sciences and Hospital, Dundigal, Gandi Maisamma, Medchal, Telangana",
  },
  { label: "Study Period", value: "September 2024 – February 2025" },
  {
    label: "Study Population",
    value:
      "Pregnant women visiting the In-Patient and Out-Patient facilities, particularly those in their first trimester.",
  },
];

const stats = [
  { figure: "100", note: "Study subjects" },
  { figure: "61%", note: "Participants aged 25–34" },
  { figure: "40%", note: "Participants with BMI > 30" },
  { figure: "65%", note: "Participants with thyroid disorders" },
  { figure: "23%", note: "Participants with hypertension" },
  { figure: "12%", note: "Participants with diabetes" },
];

type Chart = { title: string; caption: string; rows: { label: string; value: number }[] };

const charts: Chart[] = [
  {
    title: "Age Distribution",
    caption: "Age distribution of study participants (n = 100)",
    rows: [
      { label: "18–24 years", value: 31 },
      { label: "25–34 years", value: 61 },
      { label: "35–44 years", value: 8 },
    ],
  },
  {
    title: "BMI Distribution",
    caption: "Body mass index distribution of study participants (n = 100)",
    rows: [
      { label: "< 18.5", value: 1 },
      { label: "18.5–24.9", value: 29 },
      { label: "25–29.9", value: 30 },
      { label: "> 30", value: 40 },
    ],
  },
  {
    title: "Gestational Age",
    caption: "Gestational age at the time of assessment (n = 100)",
    rows: [
      { label: "< 12 weeks", value: 19 },
      { label: "12–20 weeks", value: 81 },
    ],
  },
  {
    title: "Past Medical History",
    caption: "Reported past medical history among study participants",
    rows: [
      { label: "Thyroid", value: 65 },
      { label: "Hypertension", value: 23 },
      { label: "Diabetes", value: 12 },
    ],
  },
];

const guides = [
  {
    role: "Hospital Guide",
    name: "Dr. Aparna Padala, MBBS, MS",
    lines: [
      "Associate Professor, Department of Obstetrics & Gynaecology",
      "Arundathi Hospital, Dundigal, Hyderabad",
    ],
    accent: "teal" as const,
  },
  {
    role: "Institutional Guide",
    name: "Dr. B Raja Rajeshwari, Pharm D",
    lines: [
      "Assistant Professor, Department of Pharmacy Practice",
      "Marri Laxman Reddy Institute of Pharmacy",
    ],
    accent: "orange" as const,
  },
];

const authors = ["Degatagore", "Pasam Sai Divya", "Sai Anjuri"];

function BarChart({ chart, compact = false }: { chart: Chart; compact?: boolean }) {
  return (
    <div>
      <ul className={compact ? "space-y-4" : "space-y-5"}>
        {chart.rows.map((row, i) => (
          <li key={row.label}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-[0.875rem] font-medium text-foreground/85">{row.label}</span>
              <span
                className={`text-[1.05rem] font-extrabold tracking-[-0.01em] ${
                  i % 2 === 0 ? "text-teal-deep" : "text-accent"
                }`}
              >
                {row.value}%
              </span>
            </div>
            <div className="mt-2 h-[3px] w-full bg-border/70">
              <span
                aria-hidden="true"
                className={`block h-full ${i % 2 === 0 ? "bg-teal" : "bg-accent"}`}
                style={{ width: `${row.value}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DissertationCaseStudy() {
  const [lightbox, setLightbox] = useState<null | { kind: "cover" } | { kind: "chart"; index: number }>(
    null,
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section>
          <div className="mx-auto max-w-[1140px] px-6 pb-14 pt-8 lg:px-8 lg:pb-[70px] lg:pt-12">
            <Reveal>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-teal-deep"
              >
                <ArrowLeft size={14} aria-hidden="true" /> Back to Portfolio
              </Link>
            </Reveal>

            <div className="mt-9 grid items-start gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-12">
              <Reveal>
                <figure className="mx-auto w-full max-w-[340px] lg:mx-0">
                  <button
                    type="button"
                    onClick={() => setLightbox({ kind: "cover" })}
                    className="block w-full cursor-zoom-in"
                    aria-label="Open dissertation cover"
                  >
                    <img
                      src={dissertationCover.url}
                      alt="Dissertation cover — From Prevalence to Prevention, PharmD project report"
                      loading="eager"
                      decoding="async"
                      className="w-full rounded-sm border border-border/70 shadow-[var(--shadow-card)]"
                    />
                  </button>
                  <figcaption className="mt-3 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    Project report cover
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal delay={90} className="min-w-0">
                <p className="eyebrow flex items-center gap-3 text-accent">
                  <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                  Research / Academic
                </p>
                <h1 className="mt-5 max-w-[30ch] text-[1.6rem] font-extrabold leading-[1.2] tracking-[-0.018em] sm:text-[2rem] lg:text-[2.4rem]">
                  From Prevalence to Prevention – Ensuring Healthy Early Pregnancy Through
                  Effective Counselling Strategies
                </h1>

                <dl className="mt-8 divide-y divide-border/70 border-y border-border/70">
                  {headerMeta.map((item) => (
                    <div
                      key={item.label}
                      className="grid gap-1 py-3.5 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-8"
                    >
                      <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-teal-deep">
                        {item.label}
                      </dt>
                      <dd className="max-w-[54ch] text-[1rem] leading-relaxed text-foreground/85">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Information strip */}
        <section className="border-y border-border/60 bg-card/40">
          <div className="mx-auto grid max-w-[1140px] gap-x-8 gap-y-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-9">
            {strip.map((item) => (
              <div key={item.label} className="min-w-0">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-2 text-[0.9375rem] font-medium leading-relaxed text-foreground/90">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Research focus */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-[1140px] px-6 py-14 lg:px-8 lg:py-[70px]">
            <Reveal className="max-w-[640px]">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                Case Study
              </p>
              <h2 className="mt-5 text-[1.75rem] font-extrabold tracking-[-0.015em] lg:text-[2.1rem]">
                Research Focus
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-[1.8] text-muted-foreground">
                The dissertation explored counselling strategies relevant to healthy early
                pregnancy, with a focus on pregnancy-related complications, preventive care and
                patient-centred guidance.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Overview + Objective */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-[1140px] px-6 py-14 lg:px-8 lg:py-[80px]">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <Reveal className="min-w-0">
                <h2 className="text-[1.5rem] font-extrabold tracking-[-0.015em] lg:text-[1.9rem]">
                  Project Overview
                </h2>
                <p className="mt-5 max-w-[56ch] text-[1.0625rem] leading-[1.8] text-muted-foreground">
                  This prospective observational study focused on counselling strategies aimed at
                  reducing early pregnancy complications. The project examined pregnancy-related
                  risk factors and the role of structured counselling and educational support in
                  promoting healthier early pregnancy care.
                </p>
              </Reveal>

              <Reveal delay={80} className="min-w-0">
                <h2 className="text-[1.5rem] font-extrabold tracking-[-0.015em] lg:text-[1.9rem]">
                  Objective
                </h2>
                <div className="mt-5 border-l-2 border-teal pl-4">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-teal-deep">
                    Aim
                  </p>
                  <p className="mt-2 max-w-[52ch] text-[1rem] leading-[1.75] text-foreground/85">
                    To develop and evaluate counselling strategies aimed at reducing early
                    pregnancy complications.
                  </p>
                </div>
                <ul className="mt-6 border-t border-border/70">
                  {objectives.map((o, i) => (
                    <li
                      key={o}
                      className="grid gap-2 border-b border-border/70 py-4 sm:grid-cols-[46px_minmax(0,1fr)] sm:gap-4"
                    >
                      <span
                        aria-hidden="true"
                        className={`text-[0.95rem] font-extrabold ${
                          i % 2 === 0 ? "text-teal" : "text-accent"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="max-w-[58ch] text-[0.9875rem] leading-[1.7] text-foreground/85">
                        {o}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="border-b border-border/60 bg-card/40">
          <div className="mx-auto max-w-[1140px] px-6 py-12 lg:px-8 lg:py-[70px]">
            <Reveal>
              <h2 className="text-[1.5rem] font-extrabold tracking-[-0.015em] lg:text-[1.9rem]">
                Methodology
              </h2>
            </Reveal>
            <dl className="mt-7 divide-y divide-border/70 border-y border-border/70">
              {methodology.map((m, i) => (
                <Reveal key={m.label} delay={i * 50}>
                  <div className="grid gap-1 py-4 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-8">
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-teal-deep">
                      {m.label}
                    </dt>
                    <dd className="max-w-[70ch] text-[1rem] leading-[1.7] text-foreground/85">
                      {m.value}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* Findings */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-[1140px] px-6 py-14 lg:px-8 lg:py-[80px]">
            <Reveal className="max-w-[640px]">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                Results
              </p>
              <h2 className="mt-5 text-[1.75rem] font-extrabold tracking-[-0.015em] lg:text-[2.1rem]">
                Findings
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-x-10 gap-y-9 border-t border-border/70 pt-9 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((s, i) => (
                <Reveal key={s.note} delay={i * 50}>
                  <div>
                    <p
                      className={`text-[2.5rem] font-extrabold leading-none tracking-[-0.025em] lg:text-[3rem] ${
                        i % 2 === 0 ? "text-teal-deep" : "text-accent"
                      }`}
                    >
                      {s.figure}
                    </p>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {s.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={80}>
              <div className="mt-12 border-t border-border/70 pt-8">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Gestational Age
                </p>
                <div className="mt-6 grid gap-8 sm:grid-cols-2 sm:gap-12">
                  <div>
                    <p className="text-[2.5rem] font-extrabold leading-none tracking-[-0.025em] text-teal-deep lg:text-[3rem]">
                      19%
                    </p>
                    <p className="mt-3 text-[0.9375rem] text-muted-foreground">&lt; 12 weeks</p>
                  </div>
                  <div>
                    <p className="text-[2.5rem] font-extrabold leading-none tracking-[-0.025em] text-accent lg:text-[3rem]">
                      81%
                    </p>
                    <p className="mt-3 text-[0.9375rem] text-muted-foreground">12–20 weeks</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Results visualisation */}
        <section className="border-b border-border/60 bg-card/40">
          <div className="mx-auto max-w-[1140px] px-6 py-12 lg:px-8 lg:py-[70px]">
            <Reveal className="max-w-[640px]">
              <h2 className="text-[1.5rem] font-extrabold tracking-[-0.015em] lg:text-[1.9rem]">
                Results Visualisation
              </h2>
              <p className="mt-4 text-[0.9875rem] leading-[1.75] text-muted-foreground">
                Distributions charted directly from the dissertation data set (n = 100).
              </p>
            </Reveal>

            <div className="mt-9 grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {charts.map((chart, i) => (
                <Reveal key={chart.title} delay={i * 60}>
                  <figure>
                    <figcaption className="border-b border-border/70 pb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {chart.title}
                    </figcaption>
                    <div className="mt-5">
                      <BarChart chart={chart} />
                    </div>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-[1140px] px-6 py-12 lg:px-8 lg:py-[70px]">
            <Reveal className="max-w-[640px]">
              <h2 className="text-[1.5rem] font-extrabold tracking-[-0.015em] lg:text-[1.9rem]">
                Conclusion
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-[1.8] text-muted-foreground">
                The study recorded the prevalence of first-trimester complications and their
                associated risk factors in the study population, and highlighted the role of
                structured counselling and educational materials in supporting preventive,
                patient-centred early pregnancy care.
              </p>
              <p className="mt-4 text-[0.8125rem] leading-relaxed text-muted-foreground/80">
                Summarised from the dissertation. The complete discussion and conclusion are
                available in the full document.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Academic guidance */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-[1140px] px-6 py-11 lg:px-8 lg:py-[60px]">
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
                    <p className="mt-1.5 text-[0.9875rem] font-semibold">{g.name}</p>
                    <p className="mt-1 text-[0.875rem] leading-relaxed text-muted-foreground">
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

        {/* Project documentation */}
        <section className="border-b border-border/60 bg-card/40">
          <div className="mx-auto max-w-[1140px] px-6 py-12 lg:px-8 lg:py-[70px]">
            <Reveal className="max-w-[640px]">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
                Documentation
              </p>
              <h2 className="mt-5 text-[1.5rem] font-extrabold tracking-[-0.015em] lg:text-[1.9rem]">
                Project Documentation
              </h2>
              <p className="mt-4 text-[0.9875rem] leading-[1.75] text-muted-foreground">
                Material taken directly from the submitted project report. Select an item to view
                it larger.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-12">
              <Reveal>
                <figure>
                  <button
                    type="button"
                    onClick={() => setLightbox({ kind: "cover" })}
                    className="block w-full cursor-zoom-in border border-border/70 bg-background p-3 transition-colors hover:border-teal/60"
                  >
                    <img
                      src={dissertationCover.url}
                      alt="Dissertation cover page — project report submitted to JNTUH"
                      loading="lazy"
                      className="mx-auto max-h-[520px] w-full object-contain"
                    />
                  </button>
                  <figcaption className="mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Dissertation Cover
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal delay={80} className="min-w-0">
                <div className="grid gap-6 sm:grid-cols-2">
                  {charts.map((chart) => (
                    <figure key={chart.title}>
                      <button
                        type="button"
                        onClick={() =>
                          setLightbox({ kind: "chart", index: charts.indexOf(chart) })
                        }
                        className="block w-full cursor-zoom-in border border-border/70 bg-background p-5 text-left transition-colors hover:border-teal/60"
                      >
                        <BarChart chart={chart} compact />
                      </button>
                      <figcaption className="mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        {chart.title}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Full dissertation CTA */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-[1140px] px-6 py-12 lg:px-8 lg:py-[70px]">
            <Reveal>
              <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
                <div className="min-w-0">
                  <h2 className="text-[1.5rem] font-extrabold tracking-[-0.015em] lg:text-[1.9rem]">
                    Read the Full Dissertation
                  </h2>
                  <p className="mt-4 max-w-[58ch] text-[1rem] leading-[1.75] text-muted-foreground">
                    Explore the complete academic project, including the literature review,
                    methodology, results, discussion and conclusion.
                  </p>
                </div>
                <Button variant="orange" size="xl" className="w-full sm:w-auto" asChild>
                  <a href={DISSERTATION_PDF_URL} target="_blank" rel="noopener noreferrer">
                    View Full Dissertation <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Authors */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-[1140px] px-6 py-10 lg:px-8 lg:py-12">
            <Reveal>
              <div className="grid gap-3 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-8">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Dissertation Authors
                </p>
                <ul className="flex flex-wrap gap-x-8 gap-y-1 text-[1rem] text-foreground/85">
                  {authors.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-[1140px] px-6 py-14 lg:px-8 lg:py-[80px]">
          <Reveal>
            <div className="grid items-center gap-8 rounded-xl bg-teal px-7 py-10 text-primary-foreground sm:px-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14 lg:py-12">
              <div className="min-w-0">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                  Academic &amp; Professional Enquiries
                </p>
                <h2 className="mt-3 text-[1.6rem] font-extrabold tracking-[-0.015em] lg:text-[2rem]">
                  Get In Touch
                </h2>
              </div>
              <Button variant="orange" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/contact">
                  Contact <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />

      {lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Document preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close preview"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground"
          >
            <X size={18} aria-hidden="true" />
          </button>
          <div
            className="max-h-full w-full max-w-[860px] overflow-auto bg-background p-5 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.kind === "cover" ? (
              <figure>
                <img
                  src={dissertationCover.url}
                  alt="Dissertation cover page — full view"
                  className="mx-auto max-h-[75vh] w-auto object-contain"
                />
                <figcaption className="mt-4 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Dissertation Cover
                </figcaption>
              </figure>
            ) : (
              <figure>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {charts[lightbox.index]!.title}
                </p>
                <div className="mt-6">
                  <BarChart chart={charts[lightbox.index]!} />
                </div>
                <figcaption className="mt-6 text-[0.8125rem] leading-relaxed text-muted-foreground">
                  {charts[lightbox.index]!.caption}
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
