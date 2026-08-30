import { ShieldCheck, Dumbbell, Leaf, Camera } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: ShieldCheck, label: "Licensed PharmD", note: "Clinical", accent: "text-teal" },
  { icon: Dumbbell, label: "7+ Years Fitness Coach", note: "Training", accent: "text-accent" },
  { icon: Leaf, label: "Nutrition & Diet Mentor", note: "Nutrition", accent: "text-teal" },
  { icon: Camera, label: "Creative Photographer", note: "Creative", accent: "text-accent" },
];

export function Credibility() {
  return (
    <section aria-label="Credentials" className="mx-auto max-w-[1200px] px-6 pb-4 lg:px-8">
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {items.map((item, i) => (
          <Reveal as="li" key={item.label} delay={i * 70}>
            <div className="flex h-full items-center gap-3 rounded-xl sm:gap-4 border border-border/70 bg-card px-4 py-[1.05rem] sm:px-5 sm:py-[1.15rem] shadow-[var(--shadow-card)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]">
              <item.icon className={`shrink-0 ${item.accent}`} size={22} strokeWidth={1.7} aria-hidden="true" />
              <span aria-hidden="true" className="h-8 w-px shrink-0 bg-border/70" />
              <span className="min-w-0">
                <span className="block text-[0.8125rem] font-semibold sm:text-[0.875rem] leading-snug">{item.label}</span>
                <span className="mt-0.5 block text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {item.note}
                </span>
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
