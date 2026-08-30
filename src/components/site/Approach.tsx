import { Reveal } from "./Reveal";

export function Approach() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-teal">About</p>
          <h2 className="mt-4 max-w-md text-3xl font-extrabold leading-tight lg:text-[2.5rem]">
            Healthcare, Fitness &amp; Creative Expression
          </h2>
        </Reveal>
        <Reveal delay={100} className="space-y-5 text-[1.02rem] leading-relaxed text-muted-foreground">
          <p>
            Dr. Mettu is a Doctor of Pharmacy who works where clinical care, physical training and
            visual storytelling meet. His pharmacy background shapes an evidence-first approach to
            medication, health consultation and everyday wellbeing.
          </p>
          <p>
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
