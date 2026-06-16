import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { mentorCategories } from "@/lib/content";

export default function Mentors() {
  return (
    <section id="mentors" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Mentors"
          title="Learn From Those Shaping Oman's Future"
          subtitle="The Fellowship brings together ministers, CEOs, diplomats, entrepreneurs, academics, and industry leaders who invest their time in supporting the next generation of Omani talent."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {mentorCategories.map((cat, i) => (
            <Reveal key={cat} delay={(i % 4) * 0.05}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-moonlight/80 transition-colors hover:border-orchid/40 hover:text-cloud">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orchid to-sky" />
                {cat}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-center">
            <p className="text-sm text-moonlight/70">
              A full mentor gallery is coming soon — featuring senior leaders from across government,
              business, and civil society.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
