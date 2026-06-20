import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { mentorCategories, mentors } from "@/lib/content";

function MentorCard({ name, position, photo }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[3/4] overflow-hidden bg-plum/40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold leading-snug text-cloud sm:text-base">{name}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-moonlight/70 sm:text-sm">{position}</p>
      </div>
    </article>
  );
}

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

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-6">
          {mentors.map((mentor, i) => (
            <Reveal key={mentor.name} delay={(i % 4) * 0.06}>
              <MentorCard {...mentor} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
