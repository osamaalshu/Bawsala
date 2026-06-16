"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { nav, APPLY_URL } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="relative z-50 flex items-center" aria-label="Bawsala Fellowship home">
          <Image
            src="/logos/logo-white.png"
            alt="Bawsala Fellowship"
            width={395}
            height={130}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-moonlight/80 transition-colors hover:bg-white/5 hover:text-cloud"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orchid to-purpose px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orchid/20 transition-transform hover:scale-[1.03]"
          >
            Apply Now
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col items-center justify-center gap-1.5">
            <span className={`h-0.5 w-5 bg-cloud transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-cloud transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-cloud transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>
      </header>

      {/* Mobile menu — kept OUTSIDE <header>. The header uses backdrop-blur, which
          makes it the containing block for fixed descendants; nesting the overlay
          there would clamp its height to the header instead of the viewport. */}
      <div
        className={`fixed inset-0 z-40 origin-top bg-ink transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-x flex h-full flex-col justify-center gap-1 overflow-y-auto pt-24 pb-10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3.5 text-xl font-medium text-moonlight transition-colors hover:text-cloud"
            >
              {item.label}
            </a>
          ))}
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orchid to-purpose px-6 py-4 text-lg font-semibold text-white"
          >
            Apply Now
          </a>
        </div>
      </div>
    </>
  );
}
