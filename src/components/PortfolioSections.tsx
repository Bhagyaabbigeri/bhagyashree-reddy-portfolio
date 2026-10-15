"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  Trophy,
  Medal,
  Rocket,
  Cloud,
  Cpu,
  Mail,
  ArrowUpRight,
  Sparkles,
  Terminal,
  Layers,
  Activity,
  Settings,
} from "lucide-react";

/* ─── Custom Icons ─── */
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ─── Scroll Animation Variants ─── */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* ─── SECTION 1: INTRO ─── */
export function IntroSection() {
  return (
    <section id="intro" className="relative w-full bg-[#030014] px-6 py-14 md:py-24 z-20 overflow-hidden flex flex-col items-center">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-orange-500/10 blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">

        {/* Profile Portrait Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-40 h-52 md:w-56 md:h-72 mx-auto mb-10"
        >
          {/* Decorative Rings */}
          <div className="absolute -inset-4 rounded-[2rem] border border-orange-500/20 animate-[spin_20s_linear_infinite]" />
          <div className="absolute -inset-2 rounded-[1.5rem] border border-cyan-400/10 animate-[spin_15s_linear_infinite_reverse]" />

          {/* Image Container with Glass Effect */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a14] shadow-2xl group">
            <Image
              src="/projects/ME.png"
              alt="Bhagyashree Reddy"
              width={224}
              height={288}
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-6xl font-black tracking-tight text-white leading-tight px-2">
            Hello, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300">
              Bhagyashree Reddy
            </span>
          </h2>

        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          transition={{ delay: 0.2 }}
          className="text-zinc-300 text-xs md:text-base leading-relaxed max-w-3xl mx-auto font-light tracking-wide space-y-4 px-6 md:px-0"
        >
          <p>
            I thrive at the intersection of technology, creativity, and problem-solving, with a growing focus on Space Technology and fast-paced environments. Through self-driven projects and startup experience, I&apos;ve developed strong skills in research, operations, analysis, troubleshooting, leadership, and taking ideas from concept to execution. I enjoy learning, taking ownership, and working on meaningful challenges where curiosity meets innovation.
          </p>
          <p className="text-orange-300/80 font-medium italic">
            I don&apos;t just follow the roadmap — I help shape it.
          </p>
        </motion.div>

        {/* Glowing animated divider line */}
        <div className="w-full max-w-2xl mx-auto pt-16 relative">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
          <motion.div
            className="absolute top-0 bottom-0 left-0 h-[2px] w-1/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]"
            animate={{
              left: ["0%", "75%", "0%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 2: EDUCATION ─── */
export function EducationSection() {
  return (
    <section id="education" className="relative w-full bg-[#030014] px-6 py-14 md:py-20 z-20 overflow-hidden">
      {/* Background Asset Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03] blur-3xl pointer-events-none select-none">
        <Image
          src="/projects/synapse.png"
          alt="Neural Asset"
          fill
          className="object-contain"
        />
      </div>

      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] whitespace-nowrap">
        <h2 className="text-[5rem] sm:text-[10rem] md:text-[16rem] font-black text-white tracking-tighter">
          ACADEMICS
        </h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="text-center md:text-left space-y-2"
        >
          <h2 className="text-sm md:text-base font-mono font-bold tracking-[0.3em] text-orange-400 uppercase">
            EDUCATION
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto md:mx-0" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          whileHover={{ scale: 1.01, y: -5 }}
          className="group relative rounded-[2rem] border border-white/[0.08] bg-white/[0.01] backdrop-blur-xl p-6 md:p-10 overflow-hidden flex flex-col md:flex-row items-center md:items-center justify-between gap-8 cursor-default transition-all duration-500"
          style={{
            boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 0 60px rgba(255,255,255,0.02)",
          }}
        >
          {/* Glowing Left Accent */}
          <div className="absolute top-0 left-0 w-[5px] h-full bg-gradient-to-b from-orange-500 via-orange-400 to-amber-600 shadow-[2px_0_15px_rgba(249,115,22,0.4)]" />

          {/* Animated Top Border */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-orange-500/50 transition-all duration-700" />

          <div className="flex flex-col md:flex-row gap-6 items-center flex-1">
            <div className="relative shrink-0">
              <div className="absolute -inset-4 rounded-full bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-5 rounded-[1.5rem] bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20 transition-all duration-300 shadow-inner">
                <GraduationCap className="w-8 h-8 md:w-10 md:h-10" />
              </div>
            </div>

            <div className="space-y-4 text-center md:text-left">
              <div className="space-y-1">
                <span className="text-orange-500/60 font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center md:justify-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  Institution
                </span>
                <h3 className="text-white text-xl md:text-3xl font-black tracking-tight leading-[1.1]">
                  Visvesvaraya Technological <br className="hidden lg:block" /> University (VTU)
                </h3>
                <p className="text-zinc-500 text-sm md:text-base font-medium tracking-wide">
                   CPGS Kalaburagi
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.2em]">Academic Program</span>
                <p className="text-orange-200 text-sm md:text-lg font-bold tracking-wide italic">
                  Bachelor of Technology in Computer Science
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end justify-center gap-4 self-stretch md:self-auto pt-6 md:pt-0 border-t md:border-t-0 border-white/5">
            <div className="group/tag inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.1] group-hover:border-orange-500/30 transition-all duration-300">
              <span className="text-zinc-500 group-hover/tag:text-orange-400 transition-colors duration-300">
                <Sparkles className="w-3 h-3" />
              </span>
              <span className="font-mono text-xs font-bold text-zinc-400 group-hover/tag:text-white tracking-widest transition-colors duration-300">
                2022 – 2026
              </span>
            </div>

            <div className="relative group/cgpa w-full md:w-auto">
               <div className="absolute -inset-4 bg-orange-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="relative flex flex-col items-center md:items-end bg-black/40 border border-orange-500/30 rounded-[1.5rem] p-5 md:p-6 min-w-[140px] shadow-2xl backdrop-blur-md">
                 <span className="text-orange-500/60 text-[9px] font-mono font-black uppercase tracking-[0.3em] mb-1">Current CGPA</span>
                 <div className="flex items-baseline gap-1">
                   <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">8.03</span>
                   <span className="text-orange-500 font-mono text-lg md:text-xl font-bold">/ 10</span>
                 </div>
                 <div className="mt-3 w-full h-[3px] bg-zinc-800 rounded-full overflow-hidden">
                   <motion.div
                     initial={{ width: 0 }}
                     whileInView={{ width: "80.3%" }}
                     transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                     className="h-full bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                   />
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: HOW I THINK & WORK ─── */
export function SkillsSection() {
  return (
    <section id="skills" className="relative w-full bg-[#030014] px-6 py-14 md:py-20 z-20 overflow-hidden">
      {/* Decorative Background Asset */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-[0.08] blur-[80px] pointer-events-none select-none overflow-hidden">
        <Image
          src="/projects/nebula.png"
          alt="Neural Network Background"
          fill
          className="object-contain"
        />
      </div>

      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="text-center md:text-left space-y-2"
        >
          <h2 className="text-sm md:text-base font-mono font-bold tracking-[0.3em] text-cyan-400 uppercase">
            HOW I THINK &amp; WORK
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-transparent mx-auto md:mx-0" />
        </motion.div>

        {/* ── SYNAPTIC DASHBOARD FRAME ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-2xl overflow-hidden flex flex-col xl:flex-row h-auto shadow-2xl"
          style={{ boxShadow: "0 0 80px rgba(0,0,0,0.8), inset 0 0 40px rgba(255,255,255,0.02)" }}
        >
          {/* Left Faux Sidebar */}
          <div className="w-full xl:w-16 bg-white/[0.03] border-b xl:border-b-0 xl:border-r border-white/5 flex flex-row xl:flex-col items-center justify-between p-4 xl:py-8 gap-4">
             <div className="flex flex-row xl:flex-col gap-6 items-center">
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400"><Layers className="w-5 h-5" /></div>
                <Activity className="w-5 h-5 text-zinc-600 hover:text-cyan-400 cursor-pointer transition-colors" />
                <Terminal className="w-5 h-5 text-zinc-600 hover:text-cyan-400 cursor-pointer transition-colors" />
                <Cpu className="w-5 h-5 text-zinc-600 hover:text-cyan-400 cursor-pointer transition-colors" />
             </div>
             <Settings className="w-5 h-5 text-zinc-600 animate-spin-slow xl:block hidden" />
          </div>

          {/* Main Dashboard Content */}
          <div className="flex-1 flex flex-col overflow-hidden">

            {/* Dashboard Top Bar */}
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Operational Mode</span>
                  <span className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                    MINDSET CORE V1 <Sparkles className="w-3 h-3 text-cyan-400" />
                  </span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-4 md:gap-8 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                <div className="flex flex-col items-end"><span className="text-cyan-400 font-bold">ACTIVE</span><span>Focus Mode</span></div>
                <div className="flex flex-col items-end sm:hidden md:flex"><span className="text-orange-400 font-bold">6</span><span>Core Systems</span></div>
                <div className="flex flex-col items-end"><span className="text-white font-bold">ON</span><span>Curiosity Drive</span></div>
              </div>
            </div>

            {/* Central Card Grid */}
            <div className="flex-1 relative flex items-center justify-center p-4 md:p-8 min-h-[300px] md:min-h-[400px]">
               {/* Animated Waveforms */}
               <div className="absolute inset-0 flex items-center justify-center opacity-40 overflow-hidden">
                  <svg viewBox="0 0 800 400" className="w-full h-full max-w-4xl min-w-[600px]">
                    {[...Array(6)].map((_, i) => (
                      <motion.path
                        key={i}
                        d={`M 0 ${200 + (i - 2.5) * 15} Q 200 ${100 + i * 20}, 400 ${200 + (i - 2.5) * 15} T 800 ${200 + (i - 2.5) * 15}`}
                        fill="none"
                        stroke={i % 2 === 0 ? "#06b6d4" : "#a855f7"}
                        strokeWidth="1.5"
                        initial={{ pathLength: 0.1, pathOffset: 0 }}
                        animate={{
                          pathOffset: [0, 1],
                          d: [
                            `M 0 ${200 + (i - 2.5) * 15} Q 200 ${100 + i * 40}, 400 ${200 + (i - 2.5) * 15} T 800 ${200 + (i - 2.5) * 15}`,
                            `M 0 ${200 + (i - 2.5) * 15} Q 200 ${300 - i * 40}, 400 ${200 + (i - 2.5) * 15} T 800 ${200 + (i - 2.5) * 15}`,
                            `M 0 ${200 + (i - 2.5) * 15} Q 200 ${100 + i * 40}, 400 ${200 + (i - 2.5) * 15} T 800 ${200 + (i - 2.5) * 15}`,
                          ]
                        }}
                        transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                      />
                    ))}
                  </svg>
               </div>

               {/* Center Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-cyan-500/20 blur-[100px] pointer-events-none rounded-full" />

               {/* Mindset Cards */}
               <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                  {[
                    { id: "01", label: "RESEARCH", desc: "Exploring ideas, gathering information, understanding problems, and discovering meaningful insights.",                                                glow: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",    iconColor: "text-cyan-400",    badgeBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",      dotColor: "bg-cyan-400" },
                    { id: "02", label: "OPERATE",  desc: "Taking action, managing priorities, keeping things moving, and ensuring work progresses smoothly.",                                                glow: "hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]", iconColor: "text-orange-400",  badgeBg: "bg-orange-500/10 border-orange-500/20 text-orange-400", dotColor: "bg-orange-400" },
                    { id: "03", label: "ANALYZE",  desc: "Breaking down complex problems, identifying patterns, evaluating possibilities, and thinking critically.",                                          glow: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]", iconColor: "text-purple-400",  badgeBg: "bg-purple-500/10 border-purple-500/20 text-purple-400",  dotColor: "bg-purple-400" },
                    { id: "04", label: "SOLVE",    desc: "Troubleshooting challenges, exploring different approaches, and turning problems into practical solutions.",                                         glow: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",iconColor: "text-emerald-400", badgeBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",dotColor: "bg-emerald-400" },
                    { id: "05", label: "LEAD",     desc: "Taking ownership, coordinating with others, making decisions, and moving ideas toward execution.",                                                  glow: "hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",  iconColor: "text-amber-400",   badgeBg: "bg-amber-500/10 border-amber-500/20 text-amber-400",     dotColor: "bg-amber-400" },
                    { id: "06", label: "CREATE",   desc: "Combining technology and creativity to explore ideas, build meaningful solutions, and communicate them clearly.",                                   glow: "hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]",   iconColor: "text-pink-400",    badgeBg: "bg-pink-500/10 border-pink-500/20 text-pink-400",        dotColor: "bg-pink-400" },
                  ].map((card, idx) => (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      whileHover={{ y: -6, scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`group relative p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md cursor-pointer transition-all duration-300 ${card.glow}`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-[10px] font-mono font-black tracking-[0.3em] px-2 py-0.5 rounded-full border ${card.badgeBg}`}>{card.id}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${card.dotColor} opacity-60 group-hover:opacity-100 transition-all`} />
                      </div>
                      <h3 className={`text-sm font-mono font-black tracking-[0.2em] uppercase mb-3 ${card.iconColor} group-hover:tracking-[0.3em] transition-all duration-300`}>{card.label}</h3>
                      <p className="text-[11px] md:text-xs text-zinc-400 leading-relaxed font-light group-hover:text-zinc-300 transition-colors duration-300">{card.desc}</p>
                    </motion.div>
                  ))}
               </div>
            </div>

            {/* Dashboard Bottom */}
            <div className="px-6 py-6 border-t border-white/5 bg-white/[0.01] flex flex-col md:flex-row items-center justify-between gap-6">
               <p className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-zinc-400 text-center md:text-left">
                 <span className="text-cyan-400">CURIOUS BY NATURE</span>
                 <span className="text-zinc-600 mx-2">•</span>
                 <span className="text-orange-400">DRIVEN BY PROBLEMS</span>
                 <span className="text-zinc-600 mx-2">•</span>
                 <span className="text-purple-400">BUILT TO EXPLORE</span>
               </p>
               <a
                 href="https://github.com/Bhagyaabbigeri?tab=repositories"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-3 px-4 py-3 rounded-xl bg-orange-500/5 border border-orange-500/20 text-orange-400 hover:bg-orange-500 hover:text-black transition-all group shrink-0"
               >
                 <span className="text-[10px] font-mono font-bold tracking-widest uppercase">View Repositories</span>
                 <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: ACHIEVEMENTS ─── */
const achievementItems = [
  {
    icon: Trophy,
    title: "Best Innovation Idea in Space Technology — VTU NQSS 2026, VTU Belagavi",
    desc: "Awarded for poster presentation of 'QLEAP: Quantum-Entangled Lattice with Entanglement-Aware AI Protocol for Ultra-Secure Deep-Space Communication' — a multi-layer orbital entanglement relay system using AI-driven Bell-state correction and Lagrange-point quantum relay nodes for provably secure interplanetary communication.",
    accent: "from-orange-500/20 to-amber-500/5",
    accentBorder: "group-hover:border-orange-500/30",
    iconColor: "text-orange-400",
    bgIcon: "bg-orange-500/10 border-orange-500/20",
    link: "https://github.com/Bhagyaabbigeri/Research-Papers/tree/main",
    buttonLabel: "View Poster",
  },
  {
    icon: Rocket,
    title: "Participant — Bharatiya Antariksh Hackathon 2025 (ISRO)",
    desc: "Engaged in national-level space technology challenges organized by ISRO.",
    accent: "from-orange-500/20 to-amber-500/5",
    accentBorder: "group-hover:border-orange-500/30",
    iconColor: "text-orange-400",
    bgIcon: "bg-orange-500/10 border-orange-500/20",
    link: "https://github.com/Bhagyaabbigeri/Certificates",
    buttonLabel: "View Certificates",
  },
  {
    icon: Medal,
    title: "Top 50 out of 150 Teams — BLDEAs HackVyuha Hackathon",
    desc: "Secured a top-tier ranking in a highly competitive national-level hackathon.",
    accent: "from-cyan-500/20 to-blue-500/5",
    accentBorder: "group-hover:border-cyan-500/30",
    iconColor: "text-cyan-400",
    bgIcon: "bg-cyan-500/10 border-cyan-500/20",
    link: "https://github.com/Bhagyaabbigeri/Certificates",
    buttonLabel: "View Certificates",
  },
  {
    icon: Cloud,
    title: "Participant — Google Cloud Agentic AI Hackathon",
    desc: "Explored building advanced AI agents using Google Cloud's generative AI stack.",
    accent: "from-blue-500/20 to-cyan-500/5",
    accentBorder: "group-hover:border-blue-500/30",
    iconColor: "text-blue-400",
    bgIcon: "bg-blue-500/10 border-blue-500/20",
    link: "https://github.com/Bhagyaabbigeri/Certificates",
    buttonLabel: "View Certificates",
  },
  {
    icon: Cpu,
    title: "Technical Workshops — Microsoft AI Skills Fest & Google Gen AI Exchange Program",
    desc: "Certified participation in specialized AI and machine learning training programs.",
    accent: "from-purple-500/20 to-indigo-500/5",
    accentBorder: "group-hover:border-purple-500/30",
    iconColor: "text-purple-400",
    bgIcon: "bg-purple-500/10 border-purple-500/20",
    link: "https://github.com/Bhagyaabbigeri/Certificates",
    buttonLabel: "View Certificates",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative w-full bg-[#030014] px-6 py-14 md:py-20 z-20 overflow-hidden flex flex-col items-center">
      {/* Decorative Background Asset */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-[0.06] blur-[100px] pointer-events-none select-none overflow-hidden">
        <Image
          src="/projects/vortex.png"
          alt="Orbital Background"
          fill
          className="object-contain"
        />
      </div>

      {/* Cinematic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-600/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/[0.02] to-transparent pointer-events-none" />

      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] whitespace-nowrap">
        <h2 className="text-[5rem] sm:text-[10rem] md:text-[16rem] font-black text-white tracking-tighter uppercase">
          Recognition
        </h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-10 relative z-10 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="text-center md:text-left space-y-2"
        >
          <h2 className="text-sm md:text-base font-mono font-bold tracking-[0.3em] text-cyan-400 uppercase">
            ACHIEVEMENTS & RECOGNITION
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-transparent mx-auto md:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {achievementItems.map((item, idx) => {
            const Icon = item.icon;
            // Best Innovation Idea occupies 2 columns on desktop for visual balance
            const isLarge = idx === 0;
            return (
              <motion.div
                key={`${item.title}-${idx}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariants}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`group relative rounded-[1.5rem] border border-white/[0.08] bg-white/[0.01] backdrop-blur-xl p-6 flex flex-col justify-between space-y-6 cursor-default transition-all duration-500 ${
                  isLarge ? "md:col-span-2 lg:col-span-2" : ""
                }`}
                style={{ boxShadow: "0 15px 40px rgba(0,0,0,0.4)" }}
              >
                {/* Glow on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.accent} pointer-events-none rounded-[1.5rem]`}
                />

                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/30 transition-all duration-700`} />

                <div className="flex flex-col sm:flex-row gap-5 items-start relative z-10">
                  <div className="relative">
                    <div className={`absolute -inset-2 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${item.bgIcon}`} />
                    <div className={`relative p-3.5 rounded-xl ${item.bgIcon} ${item.iconColor} shrink-0 border border-white/5 shadow-inner`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                       <h3 className="text-white text-lg md:text-xl font-bold tracking-tight leading-tight group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </h3>
                      {isLarge && (
                        <span className="px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[8px] font-mono font-black text-orange-400 uppercase tracking-widest">
                          Primary
                        </span>
                      )}
                    </div>
                    <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed max-w-md">
                      {item.desc}
                    </p>

                    {item.link && (
                      <div className="pt-2">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-orange-500/5 border border-orange-500/20 text-[10px] font-bold text-orange-400 tracking-widest uppercase transition-all duration-300 hover:bg-orange-500 hover:text-black hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                        >
                          {item.buttonLabel || "View Details"} →
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Subtle bottom badge for alignment */}
                <div className="pt-3 border-t border-white/[0.03] flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-zinc-500">Recognition Artifact</span>
                  <div className={`w-1 h-1 rounded-full ${item.iconColor} animate-pulse shadow-[0_0_8px_currentColor]`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 7: CONTACT ─── */
const contactButtons = [
  {
    icon: Mail,
    label: "Email",
    value: "bhagyashreeabbigeri7@gmail.com",
    href: "mailto:bhagyashreeabbigeri7@gmail.com",
    accent: "from-orange-500/20 to-amber-500/5",
    color: "text-orange-400 hover:text-orange-300",
    border: "border-orange-500/20 hover:border-orange-400/50",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/bhagyashree-reddy",
    href: "https://linkedin.com/in/bhagyashree-reddy",
    accent: "from-cyan-500/20 to-blue-500/5",
    color: "text-cyan-400 hover:text-cyan-300",
    border: "border-cyan-500/20 hover:border-cyan-400/50",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/Bhagyaabbigeri",
    href: "https://github.com/Bhagyaabbigeri",
    accent: "from-orange-500/20 to-rose-500/5",
    color: "text-orange-400 hover:text-orange-300",
    border: "border-orange-500/20 hover:border-orange-400/50",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-[#030014] pt-14 md:pt-20 pb-10 z-20 overflow-hidden flex flex-col items-center">
      {/* Background glow and Space Elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-orange-500/[0.05] blur-[150px] pointer-events-none" />

      {/* Space Background matching Hero theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {/* Decorative Space Orbits */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 border border-orange-500/10 rounded-full animate-[spin_40s_linear_infinite]" />
        <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] border border-cyan-500/10 rounded-full animate-[spin_60s_linear_infinite_reverse]" />
      </div>

      <div className="max-w-6xl w-full text-center space-y-8 relative z-10 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="space-y-5"
        >
          <div className="space-y-2">
            <span className="text-sm md:text-base font-mono font-bold tracking-[0.3em] text-orange-400 uppercase">
              GET IN TOUCH
            </span>
            <div className="h-[2px] w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto" />
          </div>
          <h2 className="text-3xl md:text-6xl font-black tracking-tight text-white leading-none">
            Got a Vision? <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">Let&apos;s Engineer It.</span>
          </h2>

          {/* New Horizontal Subtitle Text — Forced to one line */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 pt-2 overflow-hidden">
             <p className="text-[8px] md:text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-orange-400/60 whitespace-nowrap">
                Open to Opportunities · Ready for Full-Time Roles · Open to Collaborations
             </p>
             <div className="hidden md:block w-1 h-1 rounded-full bg-zinc-700 flex-shrink-0" />
             <p className="text-[8px] md:text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-cyan-400/60 whitespace-nowrap">
                Based in India · Available Worldwide · Remote Ready
             </p>
          </div>
        </motion.div>

        {/* 3 Cards in a Single Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full pt-6"
        >
          {contactButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <motion.a
                key={btn.value}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUpVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative flex flex-col items-center gap-5 rounded-[2rem] border ${btn.border} bg-white/[0.01] backdrop-blur-xl p-6 sm:p-8 text-center transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]`}
              >
                {/* Glow on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${btn.accent} pointer-events-none rounded-[2rem]`}
                />

                <div className={`p-4 rounded-[1.25rem] bg-white/[0.03] ${btn.color} shrink-0 border border-white/5 shadow-inner group-hover:bg-white/10 transition-colors duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>

                <div className="space-y-1.5">
                  <div className="text-zinc-500 font-mono text-[9px] font-bold uppercase tracking-[0.3em]">
                    {btn.label}
                  </div>
                  <div className="text-white text-xs md:text-sm font-bold tracking-tight break-all">
                    {btn.value}
                  </div>
                </div>

                <div className="pt-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[9px] font-mono font-bold text-white/50 uppercase tracking-widest">Establish Connection →</span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer Text — Minimal spacing below cards */}
        <div className="pt-8 pb-4 opacity-30 hover:opacity-60 transition-opacity duration-500">
           <p className="text-[9px] font-mono tracking-[0.6em] text-white uppercase">
              Designed & Engineered with Passion · 2026
           </p>
        </div>
      </div>
    </section>
  );
}
