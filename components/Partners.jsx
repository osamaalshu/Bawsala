import SectionHeading from "./SectionHeading";
import { partners } from "@/lib/content";

export default function Partners() {
  const row = [...partners, ...partners];
  return (
    <section id="partners" className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Partners & Sponsors" title="Trusted by Leading Institutions" />
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
        <div className="flex w-max animate-marquee gap-4">
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-20 min-w-[16rem] items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] px-8 text-center text-sm font-semibold text-moonlight/75"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
