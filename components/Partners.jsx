"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { partners } from "@/lib/content";

function PartnerTile({ name, logo }) {
  const [errored, setErrored] = useState(false);
  return (
    <div className="flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-black px-6 transition-transform duration-300 hover:-translate-y-1">
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
        <span className="text-center text-sm font-semibold text-plum">{name}</span>
      )}
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
            <Reveal key={p.name} delay={(i % 4) * 0.06}>
              <PartnerTile name={p.name} logo={p.logo} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
