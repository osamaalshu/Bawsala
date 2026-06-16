"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { APPLY_URL } from "@/lib/content";
import Icon from "./Icon";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Aurora background */}
      <div className="absolute inset-0 z-0">
        <div className="aurora animate-float-slow left-[-10%] top-[-10%] h-[42rem] w-[42rem] bg-purpose/40" />
        <div className="aurora animate-float-slow right-[-15%] top-[5%] h-[36rem] w-[36rem] bg-leadership/40" style={{ animationDelay: "3s" }} />
        <div className="aurora animate-float-slow bottom-[-20%] left-[30%] h-[34rem] w-[34rem] bg-orchid/30" style={{ animationDelay: "6s" }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 0%, rgba(166,120,208,0.10), transparent 55%)",
          }}
        />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 75%)",
          }}
        />
      </div>

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
          <div className="relative mb-8">
            <div className="absolute inset-0 -z-10 rounded-full bg-orchid/30 blur-3xl" />
            <Image
              src="/logos/badge-purple.png"
              alt="Bawsala Fellowship badge"
              width={200}
              height={200}
              priority
              className="h-28 w-28 rounded-full ring-1 ring-white/10 sm:h-32 sm:w-32"
            />
          </div>
        </motion.div>

        <motion.span
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-moonlight/80"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orchid opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orchid" />
          </span>
          Applications for Cohort 2026 are now open
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          A transformative leadership journey for <span className="text-gradient">high-potential Omani youth</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
          className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-moonlight/70 sm:text-lg"
        >
          Designed to develop future leaders through mentorship, institutional exposure, practical
          leadership challenges, and direct engagement with some of Oman's most influential
          decision-makers.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orchid to-purpose px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-orchid/25 transition-transform hover:scale-[1.03]"
          >
            Apply Now
            <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-cloud transition-colors hover:bg-white/10"
          >
            Explore the Program
          </a>
        </motion.div>
      </div>
    </section>
  );
}
