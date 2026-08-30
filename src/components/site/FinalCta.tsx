import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-20 lg:pb-24">
      <Reveal>
        <div className="grid items-center gap-7 rounded-2xl bg-teal px-6 py-10 text-primary-foreground sm:px-10 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-10 lg:py-11">
          <div className="flex min-w-0 items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary-foreground/15">
              <CalendarDays size={22} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h2 className="text-xl font-bold lg:text-2xl">Let&apos;s Work Together</h2>
              <p className="mt-1 text-sm text-primary-foreground/85">Consult. Train. Transform.</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/85 lg:text-center">
            Ready to take the next step towards a healthier, stronger, and better you?
          </p>
          <Button variant="orange" size="xl" className="w-full sm:w-auto" asChild>
            <a href="mailto:hello@drmettu.com">
              Book a Consultation <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
