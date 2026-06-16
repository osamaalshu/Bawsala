import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { journey } from "@/lib/content";

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 -z-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-purpose/15 blur-[120px]" />
      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow="The Leadership Journey"
          title="The Fellowship Experience"
          subtitle="Built around interconnected leadership themes designed to take participants from self-awareness to meaningful action."
        />

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-[1.05rem] top-2 bottom-2 w-px bg-gradient-to-b from-orchid/60 via-purpose/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-2">
            {journey.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={step.title} delay={0.05}>
                  <div className="relative flex items-start gap-6 md:grid md:grid-cols-2 md:gap-12">
                    {/* node */}
                    <div className="absolute left-0 top-1 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orchid to-purpose text-sm font-bold text-white shadow-lg shadow-orchid/30 md:left-1/2 md:-translate-x-1/2">
                      {i + 1}
                    </div>

                    <div
                      className={`ml-14 md:ml-0 ${
                        left ? "md:col-start-1 md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                      }`}
                    >
                      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-colors hover:border-orchid/30">
                        <h3 className="text-lg font-semibold text-cloud sm:text-xl">{step.title}</h3>
                        <p className="mt-1.5 text-sm font-medium text-orchid">{step.lead}</p>
                        <p className="mt-3 text-sm leading-relaxed text-moonlight/65">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
