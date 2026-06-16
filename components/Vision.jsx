import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const cards = [
  {
    title: "Our Mission",
    body: "To empower high-potential students and fresh graduates through mentorship schemes, institutional visits, and skill-building sessions. By bridging the gap between ambition and leadership, Bawsala equips young Omanis to step confidently into their roles as the next generation of Oman's leaders.",
  },
  {
    title: "Our Vision",
    body: "To be the premier compass for Omani youth, encouraging a generation of visionary leaders who possess the mindset and network to drive the Sultanate's development.",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute right-[-10%] top-0 -z-0 h-[28rem] w-[28rem] rounded-full bg-purpose/15 blur-[120px]" />
      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow="Our Vision"
          title="Aligned with Oman Vision 2040"
          subtitle="The Fellowship contributes to Oman's national ambitions by investing in human capital, empowering youth leadership, strengthening civic engagement, and preparing future generations to contribute meaningfully to the nation's development."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="glass h-full rounded-3xl p-8 transition-colors hover:border-orchid/30">
                <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-orchid to-sky" />
                <h3 className="text-xl font-semibold text-cloud sm:text-2xl">{c.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-moonlight/70">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
