import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { eligibility, APPLY_URL } from "@/lib/content";

export default function Eligibility() {
  return (
    <section id="eligibility" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Who Should Apply?"
              title="Eligibility"
              subtitle="You should apply if you are:"
              align="left"
            />
            <Reveal delay={0.1}>
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orchid to-purpose px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orchid/20 transition-transform hover:scale-[1.03]"
              >
                Start your application
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          <div className="space-y-3">
            {eligibility.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-colors hover:border-orchid/30">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orchid/30 to-purpose/30 text-orchid ring-1 ring-orchid/30">
                    <Icon name="check" className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <p className="text-sm font-medium text-moonlight/85 sm:text-base">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
