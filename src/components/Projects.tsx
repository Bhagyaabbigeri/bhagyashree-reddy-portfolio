"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Satellite,
  Smartphone,
  Cpu,
  Trophy,
  Brain,
  BookOpenText,
  ClipboardList,
  ArrowUpRight,
} from "lucide-react";

/* ─── Custom Icons for compatibility ─── */
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function LeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function RightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function OrbitalControlIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="3" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" />
    </svg>
  );
}

interface ProjectItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  tags: string[];
  link: string;
  language: string;
  langColor: string;
  icon: React.ElementType;
  accent: string;
  image?: string;
  screenshots?: string[];
  buttonLabel?: string;
  category?: string;
}

const projects: ProjectItem[] = [
  {
    id: "spacerisk-radar",
    num: "01",
    title: "SpaceRisk-Radar",
    desc: "A high-fidelity Space Situational Awareness (SSA) platform for real-time orbital tracking and threat analysis. Features high-precision SGP4/SDP4 propagation for 2,000+ satellites, automated conjunction monitoring with customizable screening thresholds (2,000km+), and live velocity diagnostics. Includes advanced risk layers for debris clouds, chain probabilities, and Hubble Drag compensation (dV 0.18 m/s). Integrates geodetic coordinate mapping, environment stats for LEO/GEO orbits, and ground visibility link diagnostics for global DSN stations (Madrid, White Sands).",
    tags: ["Python", "Flask", "SGP4", "Three.js", "Socket.IO", "Orbital Mechanics", "Space Tech", "Telemetry", "SSA"],
    link: "https://github.com/Bhagyaabbigeri/SpaceRisk-Radar",
    language: "Python",
    langColor: "#3572A5",
    icon: Satellite,
    accent: "from-cyan-500/30 to-blue-400/10",
    image: "/projects/screenshots/SpaceRisk-Rader1.png",
    screenshots: [
      "/projects/screenshots/SpaceRisk-Rader1.png",
      "/projects/screenshots/SpaceRisk-Rader2.png",
      "/projects/screenshots/SpaceRisk-Rader3.png",
      "/projects/screenshots/SpaceRisk-Rader4.png",
      "/projects/screenshots/SpaceRisk-Rader5.png",
      "/projects/screenshots/SpaceRisk-Rader6.png",
      "/projects/screenshots/SpaceRisk-Rader7.png",
      "/projects/screenshots/SpaceRisk-Rader8.png",
      "/projects/screenshots/SpaceRisk-Rader9.png",
    ],
  },
  {
    id: "orbital-command",
    num: "02",
    title: "Orbital Command",
    desc: "An AI-powered Mission Control Center designed to support satellite mission planning, telemetry monitoring, fleet operations, anomaly analysis, and intelligent operational decision-making. Orbital Command brings mission workflows, space situational awareness, real-time monitoring, and AI-assisted analysis together into a unified command interface.",
    tags: ["Mission Control", "Satellite Operations", "Fleet Telemetry", "SSA & Orbit Tracking", "AI Operations", "Space Tech"],
    link: "https://github.com/Bhagyaabbigeri/Orbital-Command",
    language: "Space Tech",
    langColor: "#F97316",
    icon: OrbitalControlIcon,
    accent: "from-orange-500/30 to-cyan-400/10",
    image: "/projects/orbital-command/dashboard.png",
    screenshots: [
      "/projects/orbital-command/dashboard.png",
      "/projects/orbital-command/command_center.png",
      "/projects/orbital-command/mission_planner.png",
      "/projects/orbital-command/orbit_map.png",
      "/projects/orbital-command/ssa_console.png",
      "/projects/orbital-command/telemetry.png",
      "/projects/orbital-command/fleet.png",
      "/projects/orbital-command/ground_stations.png",
      "/projects/orbital-command/ai_assistant.png",
      "/projects/orbital-command/alerts.png",
      "/projects/orbital-command/login.png",
    ],
  },
  {
    id: "gokulahealth",
    num: "03",
    title: "GokulaHealth",
    desc: "A comprehensive offline-first Android livestock management ecosystem. Built with MVVM + Clean Architecture, featuring automated milk yield analytics via MPAndroidChart, an intelligent vaccination scheduler with WorkManager, and multi-breed livestock profile management.",
    tags: ["Kotlin", "MVVM", "Room", "Hilt", "WorkManager", "Jetpack Compose", "MPAndroidChart"],
    link: "https://github.com/Bhagyaabbigeri/GokulaHealth",
    language: "Kotlin",
    langColor: "#A97BFF",
    icon: Smartphone,
    accent: "from-green-500/30 to-emerald-400/10",
    image: "/projects/screenshots/GokulaHealth1.jpg",
    screenshots: [
      "/projects/screenshots/GokulaHealth1.jpg",
      "/projects/screenshots/GokulaHealth2.jpg",
      "/projects/screenshots/GokulaHealth3.jpg",
      "/projects/screenshots/GokulaHealth4.jpg",
      "/projects/screenshots/GokulaHealth5.jpg",
      "/projects/screenshots/GokulaHealth6.jpg",
    ],
  },
  {
    id: "spacerisk-radar-technical-writing",
    num: "01",
    title: "SpaceRisk Radar: Technical Writing Portfolio",
    desc: "Technical articles, system architecture, data-flow documentation, API references, setup guides, user guides, troubleshooting, and technical glossary for SpaceRisk Radar.",
    tags: ["Technical Articles", "Architecture", "Data Flow", "API Reference", "User Guides", "Glossary"],
    link: "https://bhagyaabiggeri.github.io/SpaceRiskRadar-Technical-Writing-Portfolio/",
    language: "Technical Writing",
    category: "TECHNICAL WRITING",
    langColor: "#22D3EE",
    icon: BookOpenText,
    accent: "from-cyan-500/30 to-blue-400/10",
    buttonLabel: "EXPLORE DOCUMENTATION",
  },
  {
    id: "gokulahealth-case-study",
    num: "02",
    title: "GokulaHealth: Project Case Study",
    desc: "A case study of GokulaHealth, an offline Android livestock record-keeping prototype, and its proposed V2 product workflow. The repository documents farmer research on paper-record errors and missed health milestones, then develops the approach through product requirements, milk-entry validation and analytics, UX wireframes, prioritization, Scrum planning, and QA and release plans. The V2 test suite is documented as planned, not executed.",
    tags: ["Problem Discovery", "Product Requirements", "UX Design", "Prioritization", "Scrum", "QA & Release"],
    link: "https://github.com/Bhagyaabbigeri/GokulaHealth-Project-Case-Study",
    language: "Project Case Study",
    category: "PROJECT CASE STUDY",
    langColor: "#4ADE80",
    icon: ClipboardList,
    accent: "from-green-500/30 to-emerald-400/10",
    buttonLabel: "VIEW CASE STUDY",
  },
  {
    id: "empowerher",
    num: "04",
    title: "EmpowerHer",
    desc: "A comprehensive women's safety and empowerment platform. Features a one-tap SOS system with real-time GPS location sharing via Twilio, an AI-powered safety assistant for legal and self-defense guidance, and a community hub for mentorship and safe accommodation discovery.",
    tags: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Twilio", "AI Assistant"],
    link: "https://github.com/Bhagyaabbigeri/EmpowerHer",
    language: "TypeScript",
    langColor: "#3178C6",
    icon: Smartphone,
    accent: "from-rose-500/30 to-pink-400/10",
    image: "/projects/screenshots/EmpowerHer1.png",
    screenshots: [
      "/projects/screenshots/EmpowerHer1.png",
      "/projects/screenshots/EmpowerHer2.png",
      "/projects/screenshots/EmpowerHer3.png",
      "/projects/screenshots/EmpowerHer4.png",
      "/projects/screenshots/EmpowerHer5.png",
      "/projects/screenshots/EmpowerHer6.png",
      "/projects/screenshots/EmpowerHer7.png",
    ],
  },
  {
    id: "real-time-face-recognition",
    num: "05",
    title: "Real-time Face Recognition",
    desc: "Real-time face recognition system using OpenCV and LBPH algorithm for high-accuracy biometric identification.",
    tags: ["Python", "OpenCV", "LBPH Algorithm", "Face Recognition"],
    link: "https://github.com/Bhagyaabbigeri/Real-time-face-recongnition",
    language: "Python",
    langColor: "#3572A5",
    icon: Brain,
    accent: "from-rose-500/20 to-orange-400/10",
  },
  {
    id: "hackvyuha-03",
    num: "06",
    title: "HackVyuha-03",
    desc: "Hackathon project that secured a top 50 ranking out of 150 teams at BLDEAs HackVyuha.",
    tags: ["JavaScript", "HTML", "CSS", "Hackathon"],
    link: "https://github.com/Bhagyaabbigeri/HackVyuha-03",
    language: "JavaScript",
    langColor: "#F1E05A",
    icon: Trophy,
    accent: "from-amber-500/30 to-orange-400/10",
  },
  {
    id: "sde-full-stack",
    num: "07",
    title: "SDE-Full-Stack",
    desc: "Full-stack development projects from SDE Internship at Algorithms365, focusing on scalable Java systems.",
    tags: ["Java", "Full Stack", "Spring", "Database"],
    link: "https://github.com/Bhagyaabbigeri/SDE-Full-Stack",
    language: "Java",
    langColor: "#B07219",
    icon: Cpu,
    accent: "from-cyan-500/20 to-violet-400/10",
  },
];

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const [currentImg, setCurrentImg] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const Icon = project.icon;

  const images = project.screenshots || (project.image ? [project.image] : []);

  const nextImg = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="relative w-full max-w-6xl mx-auto rounded-[2.5rem] border border-white/10 bg-white/[0.01] backdrop-blur-xl overflow-hidden mb-20 md:mb-32 flex flex-col shadow-2xl group"
      >
        {/* Background Glow */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br ${project.accent} pointer-events-none`} />

        {/* ── CARD HEADER ── */}
        <div className="p-5 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 border-b border-white/5 relative z-10">
          <div className="flex items-center gap-5">
            <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-orange-400 group-hover:text-white group-hover:bg-orange-500/20 transition-all duration-500 shadow-inner`}>
              <Icon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-zinc-600 font-mono text-[10px] md:text-xs font-bold tracking-widest">{project.num}</span>
                <h3 className="text-xl md:text-4xl font-black tracking-tight text-white group-hover:text-orange-200 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-[9px] md:text-[10px] text-zinc-500 font-mono group-hover:border-orange-500/20 group-hover:text-orange-300 transition-all duration-300 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[9px] md:text-[11px] text-zinc-400 font-mono font-bold tracking-widest uppercase self-start md:self-auto shadow-sm">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: project.langColor }} />
            {project.language}
          </div>
        </div>

        {/* ── IMAGE SHOWCASE (SLIDER) ── */}
        <div className="relative w-full aspect-[4/3] md:aspect-video min-h-[300px] md:min-h-[500px] overflow-hidden bg-black/40 group/slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImg}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image
                src={images[currentImg]}
                alt={`${project.title} showcase ${currentImg + 1}`}
                fill
                className="object-contain p-2 md:p-8"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImg}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/40 border border-white/10 text-white/50 hover:text-white hover:bg-orange-500/40 hover:border-orange-500/50 transition-all z-20 backdrop-blur-md opacity-100 md:opacity-0 group-hover/slider:opacity-100"
              >
                <LeftIcon className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/40 border border-white/10 text-white/50 hover:text-white hover:bg-orange-500/40 hover:border-orange-500/50 transition-all z-20 backdrop-blur-md opacity-100 md:opacity-0 group-hover/slider:opacity-100"
              >
                <RightIcon className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentImg ? "w-8 bg-orange-500" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* ── CARD FOOTER ── */}
        <div className="p-6 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 relative z-10 bg-gradient-to-b from-transparent to-black/20">
          <div className="space-y-4 md:space-y-6 flex-1">
            <div className="space-y-3">
              <h4 className="text-orange-400 font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Project Intel
              </h4>
              <p className="text-zinc-300 text-xs md:text-lg leading-relaxed font-light max-w-3xl">
                {project.desc}
              </p>
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl bg-orange-500/5 border border-orange-500/20 text-[10px] md:text-sm font-bold text-orange-400 tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:bg-orange-500 hover:text-black hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] whitespace-nowrap"
          >
            <GithubIcon className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Deploy Artifact</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </motion.div>

      {/* ── LIGHTBOX (MOVED OUTSIDE overflow-hidden container) ── */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
              className="absolute top-8 right-8 p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-red-500/40 hover:border-red-500/50 transition-all z-[510] shadow-2xl"
            >
              <CloseIcon className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={images[currentImg]}
                alt={`${project.title} lightbox`}
                fill
                className="object-contain"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImg(e); }}
                  className="absolute left-8 top-1/2 -translate-y-1/2 p-5 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-orange-500/40 hover:border-orange-500/50 transition-all z-[510]"
                >
                  <LeftIcon className="w-10 h-10" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImg(e); }}
                  className="absolute right-8 top-1/2 -translate-y-1/2 p-5 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-orange-500/40 hover:border-orange-500/50 transition-all z-[510]"
                >
                  <RightIcon className="w-10 h-10" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SimpleProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const Icon = project.icon;
  return (
    <motion.a
      key={project.id}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl overflow-hidden flex flex-col cursor-pointer transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-full"
    >
      {/* Glow on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${project.accent} pointer-events-none`} />

      <div className="relative p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-orange-400 group-hover:text-white group-hover:bg-orange-500/20 transition-all duration-300`}>
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-zinc-700 font-mono text-[10px] font-bold tracking-widest">{project.num}</span>
          </div>

          {/* Language badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[9px] text-zinc-400 font-mono font-bold tracking-widest uppercase">
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: project.langColor }} />
            {project.language}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2 flex-1">
          <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-orange-200 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
            {project.desc}
          </p>
        </div>

        {/* Tech Badges & View Link */}
        <div className="space-y-4 pt-4 border-t border-white/[0.05] z-10">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-[9px] text-zinc-500 font-mono group-hover:border-orange-500/20 group-hover:text-orange-300 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Interactive Button */}
          <div className="group/btn relative inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-orange-500/5 border border-orange-500/10 text-[10px] font-bold text-orange-400 tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-orange-500 hover:text-black hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]">
            <span className="relative z-10">{project.buttonLabel || "Deploy Artifact"}</span>
            <ArrowUpRight className="w-3 h-3 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function FeaturedWorkCard({ project, index }: { project: ProjectItem; index: number }) {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative mb-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] shadow-2xl transition-colors duration-500 hover:border-orange-500/30 md:mb-10"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.1]`} />
      <div className="relative grid min-h-[300px] grid-cols-1 items-center gap-8 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:gap-12 md:p-12">
        <div className="max-w-3xl">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-zinc-500">
              FEATURED WORK {project.num}
            </span>
            <span className="rounded-full border border-orange-500/20 bg-orange-500/[0.06] px-3 py-1 font-mono text-[10px] font-bold tracking-[0.16em] text-orange-300">
              {project.category}
            </span>
          </div>
          <h3 className="max-w-3xl text-3xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-orange-100 sm:text-4xl md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
            {project.desc}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-xl border border-orange-500/25 bg-orange-500/[0.07] px-5 py-3 font-mono text-xs font-bold tracking-[0.14em] text-orange-300 transition-all duration-300 hover:border-orange-400 hover:bg-orange-500 hover:text-black hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030014]"
          >
            {project.buttonLabel}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <div className={`flex h-24 w-24 items-center justify-center self-start rounded-3xl border border-white/10 bg-gradient-to-br ${project.accent} text-orange-300 shadow-inner md:h-32 md:w-32 md:self-center`}>
          <Icon aria-hidden="true" className="h-10 w-10 md:h-14 md:w-14" />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featuredIds = ["spacerisk-radar", "orbital-command", "gokulahealth"];
  const showcaseIds = ["spacerisk-radar-technical-writing", "gokulahealth-case-study"];
  const featuredProjects = projects.filter((project) => featuredIds.includes(project.id));
  const editorialProjects = projects.filter((project) => showcaseIds.includes(project.id));
  const featuredAndShowcaseIds = new Set([...featuredIds, ...showcaseIds]);
  const otherProjects = projects.filter((project) => !featuredAndShowcaseIds.has(project.id));

  return (
    <section id="projects" className="relative w-full bg-[#030014] px-6 py-14 md:py-32 z-20 overflow-hidden">

      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-1/3 w-[800px] h-[800px] rounded-full bg-orange-500/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/[0.05] blur-[140px] pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] whitespace-nowrap">
        <h2 className="text-[5rem] sm:text-[10rem] md:text-[22rem] font-black text-white tracking-tighter uppercase">
          PROJECTS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 px-4 text-center md:mb-24 md:text-left"
        >
          <div className="mb-5 flex items-center justify-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.3em] text-orange-400 md:justify-start md:text-sm">
            <Code2 className="h-5 w-5" aria-hidden="true" />
            Selected Projects
          </div>
          <h2 className="mx-auto max-w-5xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:mx-0 md:text-7xl">
            Projects
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 tracking-wide text-zinc-400 md:mx-0 md:text-base">
              Software projects spanning space technology, mobile health, computer vision, and full-stack development.
          </p>
        </motion.header>

        {/* ── FEATURED PROJECTS (STACKED) ── */}
        <div className="flex flex-col">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* ── PRODUCT / PROJECT MANAGEMENT SHOWCASE ── */}
        <section aria-labelledby="product-project-showcase-title" className="mb-16 mt-4 md:mb-24 md:mt-8">
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 px-4 md:mb-14"
          >
            <div className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-orange-400">
              Product / Project Engineering Showcase
            </div>
            <h2
              id="product-project-showcase-title"
              className="max-w-4xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Product / Project Management
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 tracking-wide text-zinc-400 md:text-base">
              Selected technical documentation and project case studies demonstrating system understanding, structured problem-solving, and technical communication.
            </p>
          </motion.header>
          {editorialProjects.map((project, idx) => (
            <FeaturedWorkCard key={project.id} project={project} index={idx} />
          ))}
        </section>

        {/* ── OTHER PROJECTS (GRID) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {otherProjects.map((project, idx) => (
            <SimpleProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
