import { Plus, Dumbbell, UtensilsCrossed, Camera, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
  badge: string;
  accent: "teal" | "orange";
};

const pillars: Pillar[] = [
  {
    icon: Plus,
    title: "Clinical Care",
    body: "Evidence-based pharmaceutical care, medication management, and health consultations tailored to individual needs.",
    badge: "PharmD",
    accent: "teal",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Bodybuilding",
    body: "7+ years of strength training and bodybuilding experience with personalized programs focused on muscle, fat loss, and performance.",
    badge: "7+ Years Experience",
    accent: "orange",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutrition & Diet Planning",
    body: "Custom nutrition plans and diet mentoring focused on sustainable health, lifestyle balance, and goal-driven results.",
    badge: "Diet Mentor",
    accent: "teal",
  },
  {
    icon: Camera,
    title: "Creative Photography",
    body: "Creative photography for brands, portraits, and lifestyle, capturing authentic stories through a professional lens.",
    badge: "Creative Photography",
    accent: "orange",
  },
];

export function Pillars() {
  return (
    <section id="expertise" className="border-y border-border/70 bg-card/60">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <Reveal className="text-center">
          <p className="eyebrow text-teal">My Approach</p>
          <h2 className="mt-3 text-3xl font-extrabold lg:text-[2.5rem]">
            Four Pillars of My Practice
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-5 block h-px w-16 bg-gradient-to-r from-transparent via-teal to-transparent"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 80} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-7 text-center shadow-[var(--shadow-card)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
                <span
                  className={`mx-auto grid h-14 w-14 place-items-center rounded-full ${
                    pillar.accent === "teal" ? "bg-teal" : "bg-accent"
                  } text-primary-foreground`}
                >
                  <pillar.icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-bold leading-snug">{pillar.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
                <span className="mx-auto mt-6 block h-px w-10 bg-border" />
                <p
                  className={`mt-4 text-sm font-semibold ${
                    pillar.accent === "teal" ? "text-teal-deep" : "text-accent"
                  }`}
                >
                  {pillar.badge}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
