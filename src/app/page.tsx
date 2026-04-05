"use client";

import React, { ComponentProps, useEffect, useMemo, useState } from "react";
import Aurora from "@/components/react-bits/Backgrounds/Aurora/Aurora";
import { AuroraWrapper } from "./AuroraWrapper";
import { Button, Link } from "@heroui/react";
import { motion } from "framer-motion";
import GradientText from "@/components/react-bits/TextAnimations/GradientText/GradientText";
import ResumeModal from "@/components/modals/ResumeModal";
import ProjectInfoCard from "@/components/cards/ProjectInfoCard";
import {
  SiApachekafka,
  SiDart,
  SiDocker,
  SiExpo,
  SiFlutter,
  SiGithub,
  SiGooglecloud,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiReact,
  SiSqlite,
  SiSocketdotio,
  SiSpringboot,
  SiTypescript,
  SiVuetify,
  SiVuedotjs,
  SiDotnet,
} from "react-icons/si";
import { SiCamunda } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import SkillCard, { SkillItem } from "@/components/cards/SkillCard";
import { getStudyStatus } from "@/utils/studyStatus";

type ProjectInfoCardProps = ComponentProps<typeof ProjectInfoCard>;
type SkillCardProps = ComponentProps<typeof SkillCard>;

const backendItems: SkillItem[] = [
  { label: "Java", icon: <FaJava className="h-8 w-8 text-white" /> },
  { label: "TypeScript", icon: <SiTypescript className="h-8 w-8 text-[#3178C6]" /> },
  { label: "Go + Fiber", icon: <FaGolang className="h-8 w-8 text-[#06b6d4]" /> },
  { label: "Spring Boot", icon: <SiSpringboot className="h-8 w-8 text-[#6DB33F]" /> },
  { label: "NestJS", icon: <SiNestjs className="h-8 w-8 text-[#E0234E]" /> },
  { label: "Socket.io", icon: <SiSocketdotio className="h-8 w-8 text-white" /> },
  { label: "Kafka", icon: <SiApachekafka className="h-8 w-8 text-white" /> },
  { label: "Camunda", icon: <SiCamunda className="h-8 w-8 text-[#FF4F00]" /> },
  { label: "C#", icon: <SiDotnet className="h-8 w-8 text-white" /> },
];

const frontendItems: SkillItem[] = [
  { label: "Next.js", icon: <SiNextdotjs className="h-8 w-8 text-white" /> },
  { label: "Vue / Nuxt", icon: <SiVuedotjs className="h-8 w-8 text-[#00DC82]" /> },
  { label: "React", icon: <SiReact className="h-8 w-8 text-[#61DAFB]" /> },
  { label: "Flutter", icon: <SiFlutter className="h-8 w-8 text-[#46D1FD]" /> },
  { label: "Dart", icon: <SiDart className="h-8 w-8 text-[#46D1FD]" /> },
  { label: "Expo", icon: <SiExpo className="h-8 w-8 text-white" /> },
];

const devopsItems: SkillItem[] = [
  { label: "Docker", icon: <SiDocker className="h-8 w-8 text-[#2496ED]" /> },
  { label: "Nginx", icon: <SiNginx className="h-8 w-8 text-[#3ae673]" /> },
  { label: "Google Cloud", icon: <SiGooglecloud className="h-8 w-8 text-white" /> },
  { label: "GitHub", icon: <SiGithub className="h-8 w-8 text-[#ffffff]" /> },
];

const databaseItems: SkillItem[] = [
  { label: "MongoDB", icon: <SiMongodb className="h-8 w-8 text-[#47A248]" /> },
  { label: "PostgreSQL", icon: <SiPostgresql className="h-8 w-8 text-[#336791]" /> },
  { label: "MySQL", icon: <SiMysql className="h-8 w-8 text-[#4479A1]" /> },
  { label: "SQLite", icon: <SiSqlite className="h-8 w-8 text-white" /> },
];

const experienceCards: ProjectInfoCardProps[] = [
  {
    title: "OceanLife — Online Payment",
    subtitle: `Built a full-stack internal web application to digitize accounting workflows for fund withdrawals.
• Developed backend REST APIs with Java (Dropwizard)
• Designed/optimized database queries for efficient data retrieval
• Built a responsive React UI aligned with SA specifications`,
    technologies: [
      { name: "Java", icon: <FaJava className="w-6 h-6 text-white" /> },
      { name: "React", icon: <SiReact className="w-6 h-6 text-[#61DAFB]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-[#336791]" /> },
    ],
  },
  {
    title: "Land Management System (LMS)",
    subtitle: `Built a Land Management System for a real estate business in Chiang Mai.
• Designed REST APIs with Go Fiber for CRUD
• Built a responsive dashboard with Nuxt.js
• Implemented JWT authentication + RBAC
• Integrated Cloudflare S3-compatible storage for documents`,
    technologies: [
      { name: "Go", icon: <FaGolang className="w-6 h-6 text-[#06b6d4]" /> },
      { name: "Vue / Nuxt", icon: <SiVuedotjs className="w-6 h-6 text-[#00DC82]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-[#336791]" /> },
    ],
  },
  {
    title: "HLLC–2025 On Campus",
    subtitle: `Backend services for HLLC (freshman activity tracker at MFU).
• Implemented real-time community chat via WebSocket (Go Fiber)
• Developed CRUD APIs and managed MongoDB
• Built check-ins, permissions, and admin management features`,
    link: "https://github.com/HLLC-MFU/HLLC-2025",
    technologies: [
      { name: "Go", icon: <FaGolang className="w-6 h-6 text-[#06b6d4]" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-[#47A248]" /> },
      { name: "WebSocket", icon: <SiSocketdotio className="w-6 h-6 text-white" /> },
    ],
  },
  {
    title: "HLLC–2024 On Campus",
    subtitle: `Backend services for HLLC (earlier version).
• Implemented real-time chat with Socket.IO (NestJS)
• Built CRUD APIs and managed MongoDB
• Implemented RBAC and admin reporting features`,
    link: "https://github.com/HLLC-MFU/hllc-2024",
    technologies: [
      { name: "NestJS", icon: <SiNestjs className="w-6 h-6 text-[#E0234E]" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-[#47A248]" /> },
      { name: "Socket.IO", icon: <SiSocketdotio className="w-6 h-6 text-white" /> },
    ],
  },
];

const skillCards: SkillCardProps[] = [
  { title: "Backend", items: backendItems },
  { title: "Frontend / Mobile", items: frontendItems },
  { title: "DevOps", items: devopsItems },
  { title: "Databases", items: databaseItems },
];

const projectCards: ProjectInfoCardProps[] = [
  {
    title: "Maechan Project",
    subtitle: `Senior project with Maechan Hospital to improve the purchase request workflow and reduce paper-based processes.
• Modeled business processes with BPMN and implemented workflows with Camunda 7
• Built CRUD APIs with Spring Boot + PostgreSQL
• Integrated LINE Messaging API notifications
• Deployed on Google Cloud VM (Ubuntu) with Nginx`,
    link: "https://github.com/poonyawat0511/MaeChan-Project",
    technologies: [
      { name: "Spring Boot", icon: <SiSpringboot className="w-6 h-6 text-[#6DB33F]" /> },
      { name: "Camunda", icon: <SiCamunda className="w-6 h-6 text-[#FF4F00]" /> },
      { name: "Kafka", icon: <SiApachekafka className="w-6 h-6 text-white" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-[#336791]" /> },
      { name: "Google Cloud", icon: <SiGooglecloud className="w-6 h-6 text-white" /> },
      { name: "Nginx", icon: <SiNginx className="w-6 h-6 text-[#3ae673]" /> },
    ],
  },
  {
    title: "Platform Development (MFU Library)",
    subtitle: `Built a “Smart App” for booking university library rooms.
• Backend services with NestJS + RBAC
• Admin web dashboard with Next.js
• Mobile app with React Native (Expo)
• MongoDB for application data`,
    technologies: [
      { name: "NestJS", icon: <SiNestjs className="w-6 h-6 text-[#E0234E]" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-[#47A248]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-white" /> },
      { name: "React Native", icon: <SiReact className="w-6 h-6 text-[#61DAFB]" /> },
      { name: "Expo", icon: <SiExpo className="w-6 h-6 text-white" /> },
    ],
  },
  {
    title: "HLLC–2025 On Campus",
    subtitle: `Backend services for HLLC (freshman activity tracker at MFU).
• Real-time chat via WebSocket (Go Fiber)
• CRUD APIs + MongoDB
• Check-ins, permissions, admin management`,
    link: "https://github.com/HLLC-MFU/HLLC-2025",
    technologies: [
      { name: "Go", icon: <FaGolang className="w-6 h-6 text-[#06b6d4]" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-[#47A248]" /> },
      { name: "WebSocket", icon: <SiSocketdotio className="w-6 h-6 text-white" /> },
    ],
  },
  {
    title: "My Wallet",
    subtitle: `Personal finance mobile application to track daily income and expenses.
• Built with Flutter + Dart
• Used SQLite for local transaction storage
• Learned the app publishing process and applied basic ASO`,
    technologies: [{ name: "Flutter", icon: <SiFlutter className="w-6 h-6 text-[#46D1FD]" /> }],
  },
  {
    title: "Cafe Management",
    subtitle: `Web app to manage café menus, orders, tables, and staff.
• Built backend CRUD with Spring Boot
• Designed MySQL schema for operations data
• Built UI with Spring Thymeleaf`,
    link: "https://github.com/poonyawat0511/cafe-management",
    technologies: [
      { name: "Spring Boot", icon: <SiSpringboot className="w-6 h-6 text-[#6DB33F]" /> },
      { name: "MySQL", icon: <SiMysql className="w-6 h-6 text-[#4479A1]" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="w-6 h-6 text-[#7952B3]" /> },
    ],
  },
  {
    title: "HLLC–2024 On Campus",
    subtitle: `Backend services for HLLC (earlier version).
• Real-time chat with Socket.IO (NestJS)
• CRUD APIs + MongoDB
• RBAC + notifications + admin reporting`,
    link: "https://github.com/HLLC-MFU/hllc-2024",
    technologies: [
      { name: "NestJS", icon: <SiNestjs className="w-6 h-6 text-[#E0234E]" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-[#47A248]" /> },
      { name: "Socket.IO", icon: <SiSocketdotio className="w-6 h-6 text-white" /> },
      { name: "Vuetify", icon: <SiVuetify className="w-6 h-6 text-[#1867C0]" /> },
    ],
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const status = getStudyStatus(2022, 8);
  const [hideArrow, setHideArrow] = useState(false);

  const auroraStops = useMemo(
    () => ["#2CD1C2", "#4A2CD1", "#D12C68"] as [string, string, string],
    []
  );

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
        const nextHide = window.scrollY > 40;
        setHideArrow((prev) => (prev === nextHide ? prev : nextHide));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full text-white pt-24 overflow-x-hidden">
      <AuroraWrapper>
        <Aurora colorStops={auroraStops} speed={1} />
      </AuroraWrapper>

      <div className="relative z-10">
        {/* HERO */}
        <section
          id="about"
          className="w-full px-4 md:px-10 scroll-mt-28 min-h-[calc(100vh-6rem)] flex items-center"
        >
          <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Poonyawat
              </span>
              <br />
              <span className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-200">
                {status.status === "student" ? (
                  <>
                    A {status.year}
                    <span className="align-super text-sm">th</span> year Software Engineering student
                    <br className="hidden sm:block" />
                    at Mae Fah Luang University (MFU)
                  </>
                ) : (
                  <>
                    Software Engineering graduate
                    <br className="hidden sm:block" />
                    from Mae Fah Luang University (MFU)
                  </>
                )}
              </span>
            </h1>

            <p className="text-white/80 text-base sm:text-lg max-w-xl">
              Software Engineering student focused on full-stack development with hands-on experience building
              internal business tools and web/mobile applications. I enjoy designing APIs, data models, and
              scalable architectures.
            </p>

            <div className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>
                <Button onPress={() => setOpen(true)} className="rounded-full flex items-center gap-2">
                  Resume
                  <span className="rounded-full p-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 flex items-center justify-center">
                    <BiChevronRight className="w-4 h-4 text-white" />
                  </span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>
                <Button
                  as={Link}
                  href="https://github.com/poonyawat0511"
                  className="rounded-full flex items-center gap-2 text-white 
                    bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent 
                    data-[hover=true]:bg-transparent focus-visible:bg-transparent"
                  variant="light"
                >
                  <span className="rounded-full p-2 bg-white flex items-center justify-center">
                    <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                  </span>
                  Github
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <div className="group relative w-full rounded-2xl p-[1px] overflow-hidden bg-[conic-gradient(at_50%_50%,rgba(12,12,14,0.92),rgba(26,26,28,0.92),rgba(12,12,14,0.92))]">
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/[0.02]" />

              <div className="rounded-[calc(theme(borderRadius.2xl)-1px)] border border-white/[0.06] bg-black/40 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_10px_30px_-20px_rgba(0,0,0,0.6)]">
                <div className="p-6 sm:p-8">
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={2}
                    showBorder={false}
                    className="text-2xl sm:text-3xl font-bold mb-4 text-left p-2"
                  >
                    Experience Highlights
                  </GradientText>

                  <div className="relative pl-4">
                    <div className="absolute left-0 top-1 bottom-1 w-px bg-white/10" />

                    <div className="space-y-5">
                      <div className="relative">
                        <div className="absolute -left-[9px] top-1.5 h-2 w-2 rounded-full bg-white/50" />
                        <p className="text-white font-semibold">OceanLife — Online Payment</p>
                        <p className="text-white/70 text-sm">Full-stack internal system (Java + React) for accounting workflows.</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[9px] top-1.5 h-2 w-2 rounded-full bg-white/50" />
                        <p className="text-white font-semibold">Land Management System (LMS)</p>
                        <p className="text-white/70 text-sm">Go Fiber + Nuxt.js, JWT/RBAC, and document storage integration.</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[9px] top-1.5 h-2 w-2 rounded-full bg-white/50" />
                        <p className="text-white font-semibold">HLLC 2025 — Backend</p>
                        <p className="text-white/70 text-sm">Real-time chat, CRUD APIs, MongoDB, and admin features.</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`mt-6 flex justify-center pointer-events-none transition-opacity ${hideArrow ? "opacity-0" : "opacity-100"}`}
                  >
                    <motion.button
                      type="button"
                      onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
                      className="pointer-events-auto rounded-full p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-white"
                      aria-label="Scroll to skills"
                      initial={{ y: 0, opacity: 0.85 }}
                      animate={{ y: [0, 10, 0], opacity: [0.85, 1, 0.85] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <BiChevronDown className="h-7 w-7" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

      {/* EXPERIENCE */}
      <section id="experience" className="w-full px-4 md:px-10 mt-14 scroll-mt-28">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {experienceCards.map((card) => (
              <ProjectInfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="w-full px-4 md:px-10 mt-14 scroll-mt-28">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {skillCards.map((card) => (
              <SkillCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="w-full px-4 md:px-10 mt-14 scroll-mt-28">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Projects</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 items-stretch"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {projectCards.map((card) => (
              <ProjectInfoCard key={card.title} {...card} />
            ))}

          </motion.div>
        </div>
      </section>

      {/* pdf modal */}
      <ResumeModal isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
