import Reveal from "./Reveal";
import Icon from "./Icon";
import { APPLY_URL, programInfo } from "@/lib/content";

export default function Apply() {
  return (
    <section id="apply" className="relative py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-plum-700/60 via-plum/40 to-leadership/30 p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orchid/25 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-leadership/25 blur-3xl" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-orchid/30 bg-orchid/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orchid">
                  Apply Now
                </span>
                <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  Ready to Begin Your Leadership Journey?
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-moonlight/75">
                  Join a community of ambitious young Omanis committed to learning, leading, and
                  creating impact. Applications for Cohort 2026 are now open.
                </p>
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orchid to-purpose px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-orchid/30 transition-transform hover:scale-[1.03]"
                >
                  Apply Now
                  <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {programInfo.map((info) => (
                  <div
                    key={info.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                  >
                    <div className="flex items-center gap-2 text-sky">
                      <Icon name={info.icon} className="h-4 w-4" />
                      <span className="text-xs font-semibold uppercase tracking-wide text-moonlight/60">
                        {info.label}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-cloud">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
