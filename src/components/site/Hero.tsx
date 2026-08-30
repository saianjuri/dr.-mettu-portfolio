import { ArrowRight, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] top-24 hidden h-[520px] w-[520px] rounded-full bg-teal/5 blur-[2px] lg:block"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-14 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
        <Reveal className="min-w-0">
          <p className="eyebrow text-accent">Clinical Expertise. Fitness Passion. Creative Vision.</p>
          <h1 className="mt-5 text-[2.1rem] font-extrabold leading-[1.12] sm:text-5xl lg:text-[3.35rem]">
            <span className="text-teal-deep">Dr. Mettu</span> PharmD
            <span className="mx-2 font-light text-border">|</span>
            <br className="hidden sm:block" />
            Fitness Mentor &amp; Photographer
          </h1>

          <p className="mt-6 max-w-xl text-[0.95rem] font-semibold leading-relaxed text-foreground/85">
            PharmD <span className="text-teal">•</span> 7+ Years Fitness &amp; Bodybuilding Expert{" "}
            <span className="text-teal">•</span> Diet Planner <span className="text-teal">•</span>{" "}
            Creative Photographer
          </p>

          <p className="mt-5 max-w-lg text-[0.98rem] leading-relaxed text-muted-foreground">
            Integrating clinical expertise with fitness, nutrition, and visual storytelling to help
            you live healthier, stronger, and more creatively.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="teal" size="xl" asChild>
              <a href="#contact">
                Work With Me <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button variant="outlineAccent" size="xl" asChild>
              <a href="#portfolio">
                View Portfolio <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <div className="relative mx-auto aspect-square w-full max-w-[432px]">
            <span
              aria-hidden="true"
              className="absolute inset-[-4%] rounded-full border-[7px] border-transparent border-t-accent"
              style={{ transform: "rotate(48deg)" }}
            />
            <div className="absolute inset-0 overflow-hidden rounded-full border-[6px] border-teal bg-secondary">
              {/*
                PORTRAIT: replace the placeholder below with:
                <img
                  src={portraitUrl}
                  alt="Portrait of Dr. Mettu"
                  className="h-full w-full object-cover object-[center_22%]"
                />
                object-cover + top-biased centering keeps the face framed without cropping the head.
              */}
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-8 text-center">
                <ImagePlus className="text-teal" size={34} aria-hidden="true" />
                <p className="text-sm font-semibold text-foreground/80">Portrait placeholder</p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Add Dr. Mettu&apos;s professional photograph here.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
