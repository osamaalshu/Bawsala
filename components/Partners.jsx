"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { partners } from "@/lib/content";

function PartnerTile({ name, logo }) {
  const [errored, setErrored] = useState(false);
  return (
    <div className="group flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orchid/30">
      <div className="flex h-20 w-full items-center justify-center">
        {logo && !errored ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logo}
            alt={name}
            loading="lazy"
            onError={() => setErrored(true)}
            className="max-h-16 w-auto max-w-[85%] object-contain"
          />
        ) : (
          <span className="text-center text-sm font-semibold text-moonlight/80">{name}</span>
        )}
      </div>
      <p className="mt-4 text-center text-xs font-medium text-moonlight/70 sm:text-sm">{name}</p>
    </div>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Partners & Sponsors" title="Trusted by Leading Institutions" />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) * 0.06} className="h-full">
              <PartnerTile name={p.name} logo={p.logo} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
