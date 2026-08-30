import { ShieldCheck, Dumbbell, Leaf, Camera } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: ShieldCheck, label: "Licensed PharmD", accent: "text-teal" },
  { icon: Dumbbell, label: "7+ Years Fitness Coach", accent: "text-accent" },
  { icon: Leaf, label: "Nutrition & Diet Mentor", accent: "text-teal" },
  { icon: Camera, label: "Creative Photographer", accent: "text-accent" },
];

export function Credibility() {
  return (
    <section aria-label="Credentials" className="mx-auto max-w-6xl px-5 pb-6">
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal as="li" key={item.label} delay={i * 70}>
            <div className="flex h-full items-center gap-3.5 rounded-[1.125rem] border border-border/70 bg-card px-5 py-4 shadow-[var(--shadow-card)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]">
              <item.icon className={`shrink-0 ${item.accent}`} size={23} aria-hidden="true" />
              <span className="min-w-0 text-sm font-semibold leading-snug">{item.label}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
