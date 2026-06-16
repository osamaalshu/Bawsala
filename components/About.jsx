import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="About the Fellowship"
          title="Developing the Next Generation of Omani Leaders"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="space-y-6 text-base leading-relaxed text-moonlight/75 sm:text-lg">
              <p>
                Bawsala Fellowship is a national leadership development program created to equip
                ambitious Omani students with the mindset, network, and practical capabilities
                required to contribute to Oman's future.
              </p>
              <p>
                Through immersive learning experiences, executive mentorship, institutional visits,
                leadership simulations, and real-world challenges, fellows gain the skills needed to
                navigate complexity, lead change, and create meaningful impact.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="glass glow-orchid relative h-full overflow-hidden rounded-3xl p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orchid/20 blur-2xl" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orchid">
                One central belief
              </p>
              <p className="mt-5 text-xl font-medium leading-relaxed text-cloud sm:text-2xl">
                Leadership is not simply about holding a position. It is about understanding yourself,
                understanding the system around you, and learning how to create positive change
                within it.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
