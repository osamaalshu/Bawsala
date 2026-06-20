import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { graduationVideo } from "@/lib/content";

export default function GraduationVideo() {
  return (
    <section id="graduation" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={graduationVideo.eyebrow}
          title={graduationVideo.title}
          subtitle={graduationVideo.subtitle}
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_0_80px_rgba(166,120,208,0.12)]">
            <video
              className="aspect-video w-full object-cover"
              poster={graduationVideo.poster}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label={graduationVideo.title}
            >
              <source src={graduationVideo.src} type="video/mp4" />
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
