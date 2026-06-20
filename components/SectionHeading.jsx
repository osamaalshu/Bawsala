import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-4 max-w-3xl ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orchid/90">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05} as="h2">
        <span className="block text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </span>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-moonlight/70 sm:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
