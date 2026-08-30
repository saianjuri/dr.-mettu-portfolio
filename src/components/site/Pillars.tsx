import { Plus, Dumbbell, UtensilsCrossed, Camera, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Pillar = {
  icon: LucideIcon;
  index: string;
  title: string;
  body: string;
  badge: string;
  accent: "teal" | "orange";
  filled: boolean;
};

const pillars: Pillar[] = [
  {
    icon: Plus,
    index: "01",
    title: "Clinical Care",
    body: "Evidence-based pharmaceutical care, medication management, and health consultations tailored to individual needs.",
    badge: "PharmD",
    accent: "teal",
    filled: true,
  },
  {
    icon: Dumbbell,
    index: "02",
    title: "Fitness & Bodybuilding",
    body: "7+ years of strength training and bodybuilding experience with personalized programs focused on muscle, fat loss, and performance.",
    badge: "7+ Years Experience",
    accent: "orange",
    filled: false,
  },
  {
    icon: UtensilsCrossed,
    index: "03",
    title: "Nutrition & Diet Planning",
    body: "Custom nutrition plans and diet mentoring focused on sustainable health, lifestyle balance, and goal-driven results.",
    badge: "Diet Mentor",
    accent: "teal",
    filled: false,
  },
  {
    icon: Camera,
    index: "04",
    title: "Creative Photography",
    body: "Creative photography for brands, portraits, and lifestyle, capturing authentic stories through a professional lens.",
    badge: "Creative Photography",
    accent: "orange",
    filled: true,
  },
];

export function Pillars() {
  return (
    <section id="expertise" className="border-y border-border/70 bg-card/60">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
        <Reveal className="max-w-xl">
          <p className="eyebrow flex items-center gap-3 text-teal">
            <span aria-hidden="true" className="h-px w-7 bg-teal/60" />
            My Approach
          </p>
          <h2 className="mt-4 heading-section">
            Four Pillars of My Practice
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const isTeal = pillar.accent === "teal";
            const iconClass = pillar.filled
              ? `${isTeal ? "bg-teal" : "bg-accent"} text-primary-foreground`
              : `border ${isTeal ? "border-teal/45 text-teal-deep" : "border-accent/45 text-accent"} bg-card`;
            return (
              <Reveal key={pillar.title} delay={i * 80} className="h-full">
                <article className="group flex h-full flex-col rounded-xl border border-border/70 bg-card px-6 py-7 shadow-[var(--shadow-card)] transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-[3px] hover:border-border hover:shadow-[var(--shadow-card-hover)]">
                  <div className="flex items-start justify-between">
                    <span className={`grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full ${iconClass}`}>
                      <pillar.icon size={24} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="text-[0.6875rem] font-semibold tracking-[0.16em] text-muted-foreground/60">
                      {pillar.index}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[1.0625rem] font-bold leading-snug tracking-[-0.01em]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9rem] leading-[1.75] text-muted-foreground">
                    {pillar.body}
                  </p>
                  <span aria-hidden="true" className="mt-6 block h-px w-full bg-border/70" />
                  <p
                    className={`mt-3.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] ${
                      isTeal ? "text-teal-deep" : "text-accent"
                    }`}
                  >
                    {pillar.badge}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
