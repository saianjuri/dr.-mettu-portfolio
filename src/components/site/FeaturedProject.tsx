import { ArrowRight, GraduationCap, Building2, BookOpen, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const meta = [
  { icon: BookOpen, text: "Doctor of Pharmacy (PharmD) – Dissertation" },
  { icon: GraduationCap, text: "Jawaharlal Nehru Technological University, Hyderabad" },
  { icon: Building2, text: "Marri Laxman Reddy Institute of Pharmacy" },
];

export function FeaturedProject() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
      <Reveal className="text-center">
        <p className="eyebrow text-teal">Featured Project</p>
      </Reveal>

      <Reveal delay={90} className="mt-8">
        <div className="grid gap-8 rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-card)] lg:grid-cols-[220px_minmax(0,1fr)_260px] lg:gap-10 lg:p-8">
          {/* PLACEHOLDER — replace with the dissertation cover image */}
          <div className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-5 text-center">
            <ImagePlus className="text-teal" size={26} aria-hidden="true" />
            <p className="text-xs font-semibold text-foreground/80">Dissertation cover</p>
            <p className="text-[0.7rem] leading-relaxed text-muted-foreground">
              Add the project cover image here.
            </p>
          </div>

          <div className="min-w-0">
            <h2 className="text-xl font-bold leading-snug lg:text-2xl">
              From Prevalence to Prevention – Ensuring Healthy Early Pregnancy Through Effective
              Counselling Strategies
            </h2>
            <ul className="mt-6 space-y-3">
              {meta.map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <item.icon className="mt-0.5 shrink-0 text-teal" size={16} aria-hidden="true" />
                  <span className="min-w-0">{item.text}</span>
                </li>
              ))}
            </ul>
            <Button variant="teal" size="lg" className="mt-8" asChild>
              <a href="#contact">
                View Project <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>

          <aside className="space-y-6 rounded-xl bg-secondary/70 p-5 lg:border-l lg:border-border">
            <div className="border-l-2 border-teal pl-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-deep">
                Hospital Guide
              </p>
              <p className="mt-1.5 text-sm font-bold">Dr. Aparna Padala, MBBS, MS</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Professor, Department of Obstetrics and Gynaecology
                <br />
                Arundath Hospital, Dundigal, Hyderabad
              </p>
            </div>
            <div className="border-l-2 border-accent pl-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                Institutional Guide
              </p>
              <p className="mt-1.5 text-sm font-bold">Dr. B. Raja Rajeshwari, Pharm D</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Assistant Professor, Department of Pharmacy Practice
                <br />
                Marri Laxman Reddy Institute of Pharmacy
              </p>
            </div>
          </aside>
        </div>
      </Reveal>
    </section>
  );
}
