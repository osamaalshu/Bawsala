import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { whyBawsala } from "@/lib/content";

export default function WhyBawsala() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Why Bawsala?" title="Why Join the Fellowship?" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyBawsala.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orchid/30 hover:bg-white/[0.05]">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orchid/0 blur-2xl transition-all duration-500 group-hover:bg-orchid/20" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purpose/40 to-leadership/30 text-sky ring-1 ring-white/10">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold text-cloud">{item.title}</h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-moonlight/65">
                  {item.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
