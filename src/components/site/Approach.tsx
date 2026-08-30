import { Reveal } from "./Reveal";

export function Approach() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-6 lg:px-8 section-lg">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-teal">
            <span aria-hidden="true" className="h-px w-7 bg-teal/60" />
            About
          </p>
          <h2 className="mt-5 max-w-sm heading-section">
            Healthcare, Fitness &amp; Creative Expression
          </h2>
          <span aria-hidden="true" className="mt-7 flex items-center gap-1.5">
            <span className="h-[3px] w-10 rounded-full bg-teal" />
            <span className="h-[3px] w-4 rounded-full bg-accent" />
          </span>
        </Reveal>

        <Reveal delay={100} className="min-w-0 lg:border-l lg:border-border/70 lg:pl-16">
          <p className="max-w-[42rem] text-[1.0625rem] leading-[1.8] text-foreground/85">
            <span className="font-semibold text-teal-deep">Dr. Sai Anjuri</span> is a Doctor of Pharmacy who works where clinical care, physical training
            and visual storytelling meet. His pharmacy background shapes an evidence-first approach
            to medication, health consultation and everyday wellbeing.
          </p>
          <p className="mt-6 max-w-[42rem] text-[1.0625rem] leading-[1.8] text-muted-foreground">
            Alongside practice, seven-plus years of strength training and bodybuilding inform how he
            builds fitness and nutrition programmes — practical, sustainable and matched to the
            person in front of him. Photography completes the picture: a creative discipline he uses
            to document people, progress and stories with the same care he brings to the clinic.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
