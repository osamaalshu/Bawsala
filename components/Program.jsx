import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { programComponents } from "@/lib/content";

export default function Program() {
  return (
    <section id="program" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Program Components"
          title="What to Expect"
          subtitle="A practical, immersive curriculum that blends mentorship, exposure, and real-world challenge."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programComponents.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <article className="group flex h-full items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky/30">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-leadership/40 to-purpose/30 text-sky ring-1 ring-white/10">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-cloud">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-moonlight/65">{item.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
