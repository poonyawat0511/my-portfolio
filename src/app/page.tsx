"use client";

import React, { useEffect, useState } from "react";
import Aurora from "@/components/react-bits/Backgrounds/Aurora/Aurora";
import { AuroraWrapper } from "./AuroraWrapper";
import { Button, Link } from "@heroui/react";
import { motion } from "framer-motion";
import GradientText from "@/components/react-bits/TextAnimations/GradientText/GradientText";
import ResumeModal from "@/components/modals/ResumeModal";
import ProjectInfoCard from "@/components/cards/ProjectInfoCard";
import { SiApachekafka, SiSpringboot, SiNextdotjs, SiPostgresql, SiNextui, SiDocker, SiFlutter, SiNginx, SiGithub } from "react-icons/si";
import { SiCamunda } from "react-icons/si";
import { SiNestjs, SiMongodb, SiNuxtdotjs, SiVuetify, SiSocketdotio } from "react-icons/si";
import { SiReact, SiExpo } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import SkillsModal from "@/components/modals/SkillsModal";
import SkillCard, { SkillItem } from "@/components/cards/SkillCard";
import { getStudyStatus } from "@/utils/studyStatus";

const backendItems: SkillItem[] = [
  { label: "Go + Fiber", icon: <FaGolang className="h-8 w-8 text-[#06b6d4]" /> },
  { label: "Spring Boot", icon: <SiSpringboot className="h-8 w-8 text-[#6DB33F]" /> },
  { label: "NestJS", icon: <SiNestjs className="h-8 w-8 text-[#E0234E]" /> },
  { label: "Socket.io", icon: <SiSocketdotio className="h-8 w-8 text-white" /> },
  { label: "Kafka", icon: <SiApachekafka className="h-8 w-8 text-white" /> },
  { label: "Camunda", icon: <SiCamunda className="h-8 w-8 text-[#FF4F00]" /> },
];

const frontendItems: SkillItem[] = [
  { label: "Next.js", icon: <SiNextdotjs className="h-8 w-8 text-white" /> },
  { label: "Nuxt.js", icon: <SiNuxtdotjs className="h-8 w-8 text-[#00DC82]" /> },
  { label: "React", icon: <SiReact className="h-8 w-8 text-[#61DAFB]" /> },
  { label: "Flutter", icon: <SiFlutter className="h-8 w-8 text-[#46D1FD]" /> },
  { label: "Expo", icon: <SiExpo className="h-8 w-8 text-white" /> },
];

const devopsItems: SkillItem[] = [
  { label: "Docker", icon: <SiDocker className="h-8 w-8 text-[#2496ED]" /> },
  { label: "Nginx", icon: <SiNginx className="h-8 w-8 text-[#3ae673]" /> },
  { label: "GitHub", icon: <SiGithub className="h-8 w-8 text-[#ffffff]" /> },
];

const databaseItems: SkillItem[] = [
  { label: "MongoDB", icon: <SiMongodb className="h-8 w-8 text-[#47A248]" /> },
  { label: "PostgreSQL", icon: <SiPostgresql className="h-8 w-8 text-[#336791]" /> },
  { label: "MySQL", icon: <SiMysql className="h-8 w-8 text-[#4479A1]" /> },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [skillModal, setSkillModal] = useState(false);
  const status = getStudyStatus(2022, 8);
  const [hideArrow, setHideArrow] = useState(false);
  useEffect(() => {
    const onScroll = () => setHideArrow(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start text-white pt-24 overflow-hidden">
      <AuroraWrapper>
        <Aurora colorStops={["#2CD1C2", "#4A2CD1", "#D12C68"]} speed={1} />
      </AuroraWrapper>

      {/* HERO: full height (minus navbar) */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-5 px-4 md:px-6 min-h-[calc(100vh-6rem)]">
        {/* Left: Intro */}
        <div className="flex flex-col items-start justify-center px-2 md:px-10 max-w-[750px]">
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
                  <span className="align-super text-sm">th</span> year Software Engineering
                  <br className="hidden sm:block" />
                  student at Mae Fah Luang University (MFU)
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

          <div className="flex flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
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
                  {/* Keep img for logo; small enough not to benefit from next/image */}
                  <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                </span>
                Github
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Right: Work Experience preview (grid) */}
        <div className="relative px-0 md:px-10 w-full hidden md:block pb-16 md:pb-24">
          <div className="w-full flex flex-col items-center md:items-start">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={2}
              showBorder={false}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center md:text-left p-2"
            >
              My Experience
            </GradientText>
          </div>

          {/* ลูกศรชี้ลง - อยู่กึ่งกลางล่างของคอลัมน์ขวา */}
          <div
            className={`absolute inset-x-0 bottom-4 flex justify-center pointer-events-none transition-opacity ${hideArrow ? "opacity-0" : "opacity-100"
              }`}
          >
            <motion.button
              type="button"
              onClick={() =>
                document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })
              }
              className="
        pointer-events-auto rounded-full p-2
        bg-white/10 hover:bg-white/20
        backdrop-blur-md border border-white/15
        shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)]
        text-white
      "
              aria-label="Scroll to skills"
              initial={{ y: 0, opacity: 0.85 }}
              animate={{ y: [0, 10, 0], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <BiChevronDown className="h-7 w-7" />
            </motion.button>
          </div>
        </div>


      </section>

      {/* skill */}
      <section id="skills" className="w-full px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <SkillCard title="Backend" items={backendItems} />
          <SkillCard title="Frontend / Mobile" items={frontendItems} />
          <SkillCard title="DevOps" items={devopsItems} />
          <SkillCard title="Databases" items={databaseItems} />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="w-full px-4 md:px-0">
        <motion.div
          id="project-1"
          className="w-full min-h-screen flex items-center justify-start scroll-mt-48"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* make this a grid with equal-height cells */}
          <div className="w-full p-0 md:p-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <div className="h-full">
              <ProjectInfoCard
                title="HLLC–2025 On Campus"
                subtitle={`Developed and implemented core backend services for HLLC, an activity tracker for freshmen at Mae Fah Luang University, enhancing engagement and participation.`}
                link="https://github.com/HLLC-MFU/HLLC-2025"
                technologies={[
                  { name: "NestJS", icon: <SiNestjs className="w-6 h-6 text-[#E0234E]" /> },
                  { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-[#47A248]" /> },
                  { name: "React Native", icon: <SiReact className="w-6 h-6 text-[#61DAFB]" /> },
                  { name: "Expo", icon: <SiExpo className="w-6 h-6 text-white" /> },
                  { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-white" /> },
                  { name: "Go", icon: <FaGolang className="w-6 h-6 text-[#06b6d4]" /> },
                ]}
              />
            </div>

            <div className="h-full">
              <ProjectInfoCard
                title="HLLC–2024 On Campus"
                subtitle={`Developed and implemented core backend services for HLLC, 
an activity tracker for freshmen at MFU, enhancing engagement and participation.`}
                link="https://github.com/HLLC-MFU/hllc-2024"
                technologies={[
                  { name: "NestJS", icon: <SiNestjs className="w-6 h-6 text-[#E0234E]" /> },
                  { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-[#47A248]" /> },
                  { name: "Nuxt.js", icon: <SiNuxtdotjs className="w-6 h-6 text-[#00DC82]" /> },
                  { name: "Vuetify", icon: <SiVuetify className="w-6 h-6 text-[#1867C0]" /> },
                  { name: "Socket.io", icon: <SiSocketdotio className="w-6 h-6 text-white" /> },
                ]}
              />
            </div>

            <div className="h-full">
              <ProjectInfoCard
                title="MaeChan Project"
                subtitle={`The MaeChan Project is a Senior Project for third-year Software Engineering students at MFU.
This project is developed by a team of four students, and I am responsible as both the Full-Stack Developer and Project Manager.`}
                link="https://github.com/poonyawat0511/MaeChan-Project"
                technologies={[
                  { name: "Kafka", icon: <SiApachekafka className="w-6 h-6 text-[#e2e2e2]" /> },
                  { name: "Spring Boot", icon: <SiSpringboot className="w-6 h-6 text-[#6DB33F]" /> },
                  { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-white" /> },
                  { name: "Hero UI", icon: <SiNextui className="w-6 h-6 text-[#06b6d4]" /> },
                  { name: "Camunda", icon: <SiCamunda className="w-6 h-6 text-[#FF4F00]" /> },
                  { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-[#336791]" /> },
                ]}
              />
            </div>

            <div className="h-full">
              <ProjectInfoCard
                title="Cafe Management"
                subtitle={`A Spring Boot + MySQL web app by MFU second-year SE students to manage café menus, orders, tables, and staff—based on a third-year business scenario. 
                I contributed to both backend and frontend to streamline workflow and customer service.`}
                link="https://github.com/poonyawat0511/cafe-management"
                technologies={[
                  { name: "Spring Boot", icon: <SiSpringboot className="w-6 h-6 text-[#6DB33F]" /> },
                  { name: "MySQL", icon: <SiMysql className="w-6 h-6 text-[#4479A1]" /> },
                  { name: "Bootstrap", icon: <SiBootstrap className="w-6 h-6 text-[#7952B3]" /> },
                ]}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* pdf modal */}
      <ResumeModal isOpen={open} onClose={() => setOpen(false)} />
      <SkillsModal isOpen={skillModal} onClose={() => setSkillModal(false)} />
    </div>
  );
}
