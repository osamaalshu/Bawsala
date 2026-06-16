import Image from "next/image";
import Icon from "./Icon";
import { nav, SOCIAL, CONTACT_EMAIL, APPLY_URL } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-plum/30">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/logos/logo-white.png"
              alt="Bawsala Fellowship"
              width={395}
              height={130}
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-moonlight/65">
              Empowering the next generation of Omani leaders.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-moonlight/80 transition-colors hover:border-orchid/40 hover:text-cloud"
              >
                <Icon name="instagram" className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-moonlight/80 transition-colors hover:border-orchid/40 hover:text-cloud"
              >
                <Icon name="linkedin" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-moonlight/50">
              Explore
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-moonlight/70 transition-colors hover:text-cloud"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-moonlight/50">
              Get in touch
            </h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 flex items-center gap-2 text-sm text-moonlight/70 transition-colors hover:text-cloud"
            >
              <Icon name="mail" className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orchid to-purpose px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Apply Now
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-moonlight/50 sm:flex-row">
          <p>© {year} Bawsala Fellowship. All rights reserved.</p>
          <p>Muscat, Sultanate of Oman</p>
        </div>
      </div>
    </footer>
  );
}
