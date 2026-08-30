import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-6 pb-20 lg:px-8 lg:pb-24">
      <Reveal>
        <div className="grid items-center gap-8 rounded-xl bg-teal px-7 py-11 text-primary-foreground sm:px-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14 lg:py-14">
          <div className="min-w-0">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
              Consult. Train. Transform.
            </p>
            <h2 className="mt-3 text-[1.7rem] font-extrabold tracking-[-0.015em] lg:text-[2.15rem]">
              Let&apos;s Work Together
            </h2>
            <span aria-hidden="true" className="mt-5 block h-px w-16 bg-primary-foreground/30" />
            <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-primary-foreground/85">
              Ready to take the next step towards a healthier, stronger, and better you?
            </p>
          </div>
          <Button variant="orange" size="xl" className="w-full sm:w-auto" asChild>
            <a href="mailto:hello@drsaianjuri.com">
              Book a Consultation <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
