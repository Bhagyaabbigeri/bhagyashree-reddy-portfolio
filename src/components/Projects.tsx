"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, BookOpenText, Smartphone } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="selected-work-title"
      className="relative z-20 w-full overflow-hidden bg-[#030014] px-6 py-16 md:px-12 md:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-500/[0.06] blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl md:mb-14"
        >
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">
            Portfolio / projects &amp; documentation
          </p>
          <h2
            id="selected-work-title"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Selected Work
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            A collection of projects, case studies, and technical documentation
            showcasing my work and approach to solving problems.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="group overflow-hidden rounded-3xl border border-emerald-300/10 bg-[#0b1110] transition-colors duration-300 hover:border-emerald-300/25"
          >
            <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-[#101b16] to-[#11100e] sm:h-64">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.12),transparent_68%)]" />
              <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
                <Image
                  src="/projects/screenshots/GokulaHealth1.jpg"
                  alt="GokulaHealth Android dashboard showing registered cattle and app navigation."
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-3"
                />
              </div>
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/15 bg-[#07100de8] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-200">
                <Smartphone aria-hidden="true" className="h-3.5 w-3.5" />
                Android product
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Project Case Study
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                GokulaHealth
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                A case study tracing GokulaHealth from its offline Android
                prototype through user research, product requirements, UX
                design, prioritization, sprint planning, and QA and release
                documentation. It distinguishes the existing V1 product from
                the planned V2 work.
              </p>
              <a
                href="https://github.com/Bhagyaabbigeri/GokulaHealth-Project-Case-Study"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GokulaHealth case study (opens in a new tab)"
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] px-4 py-2.5 font-mono text-[10px] font-bold tracking-[0.14em] text-emerald-200 transition-all duration-300 hover:border-emerald-200/50 hover:bg-emerald-300/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1110]"
              >
                VIEW CASE STUDY
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group overflow-hidden rounded-3xl border border-cyan-300/10 bg-[#0b1018] transition-colors duration-300 hover:border-cyan-300/25"
          >
            <div className="relative h-56 overflow-hidden bg-[#070b14] sm:h-64">
              <Image
                src="/projects/screenshots/SpaceRisk-Rader1.png"
                alt="SpaceRisk Radar satellite-monitoring dashboard, the system documented by the portfolio."
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-[#080c14]/20" />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-[#080c14e8] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-200">
                <BookOpenText aria-hidden="true" className="h-3.5 w-3.5" />
                Engineering documentation
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Technical Writing &amp; Engineering Documentation
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                SpaceRisk Radar — Technical Writing Portfolio
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                A documentation collection covering orbital-science articles,
                system architecture, data flow, and API references, alongside
                getting-started and dashboard guides, troubleshooting, and a
                glossary. It distinguishes implemented behavior from
                simplified, illustrative risk calculations.
              </p>
              <a
                href="https://bhagyabiggeri.github.io/SpaceRiskRadar-Technical-Writing-Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore the SpaceRisk Radar documentation (opens in a new tab)"
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2.5 font-mono text-[10px] font-bold tracking-[0.14em] text-cyan-200 transition-all duration-300 hover:border-cyan-200/50 hover:bg-cyan-300/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1018]"
              >
                EXPLORE DOCUMENTATION
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
