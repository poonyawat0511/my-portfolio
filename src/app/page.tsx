"use client";

import React, { useState } from "react";
import Aurora from "@/components/react-bits/Backgrounds/Aurora/Aurora";
import { AuroraWrapper } from "./AuroraWrapper";
import { Button, Link, Card, CardHeader, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import GradientText from "@/components/react-bits/TextAnimations/GradientText/GradientText";
import ResumeModal from "@/components/modals/ResumeModal";
import ProjectInfoCard from "@/components/cards/ProjectInfoCard";
import { SiApachekafka, SiSpringboot, SiNextdotjs } from "react-icons/si";
import { FaPalette } from "react-icons/fa";
import { SiCamunda } from "react-icons/si";
import { SiNestjs, SiMongodb, SiNuxtdotjs, SiVuetify, SiSocketdotio } from "react-icons/si";
import { SiReact, SiExpo } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import Magnet from "@/components/react-bits/Animations/Magnet/Magnet";
import { FaGolang } from "react-icons/fa6";
import { ResponsiveImage } from "@/components/cards/ResponsiveImage";
import { BiChevronRight } from "react-icons/bi";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start text-white pt-24 overflow-hidden">
      <AuroraWrapper>
        <Aurora colorStops={["#030b0e", "#124587", "#A22040"]} speed={1} />
      </AuroraWrapper>

      {/* HERO: full height (minus navbar) */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-5 px-4 md:px-6 min-h-[calc(100vh-6rem)]">
        {/* Left: Intro */}
        <div className="flex flex-col items-start justify-center px-2 md:px-10 max-w-[750px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Poonyawat
            </span>
            <br />
            <span className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-200">
              A 4<span className="align-super text-sm">th</span> year Software Engineering
              <br className="hidden sm:block" />
              student at Mae Fah Luang University (MFU)
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
        <div className="px-0 md:px-10 w-full">
          <div className="w-full flex flex-col items-center md:items-start">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={2}
              showBorder={false}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center md:text-left"
            >
              Work Experience
            </GradientText>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10 w-full">
              <Magnet padding={10} disabled={false} magnetStrength={2}>
                <ResponsiveImage
                  src="/HLLC2025/2.png"
                  alt="HLLC 2025 Project Preview"
                  priority
                  aspect="16/9"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  rounded="rounded-tl-[3rem] rounded-br-[3rem]"
                />
              </Magnet>

              <Magnet padding={10} disabled={false} magnetStrength={2}>
                <ResponsiveImage
                  src="/HLLC2024/6.png"
                  alt="HLLC 2024 Project Preview"
                  priority
                  aspect="16/9"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  rounded="rounded-tl-[3rem] rounded-br-[3rem]"
                />
              </Magnet>

              <Magnet padding={10} disabled={false} magnetStrength={2}>
                <ResponsiveImage
                  src="/MaeChanProject/1.png"
                  alt="MaeChan Project Preview"
                  aspect="16/9"
                  rounded="rounded-tl-[3rem] rounded-br-[3rem]"
                />
              </Magnet>

              <Magnet padding={10} disabled={false} magnetStrength={2}>
                <ResponsiveImage
                  src="/CafeManagement/1.png"
                  alt="Cafe Management Preview"
                  aspect="16/9"
                  rounded="rounded-tl-[3rem] rounded-br-[3rem]"
                />
              </Magnet>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="w-full px-4 md:px-0">
        {/* Project 1 */}
        <motion.div
          id="project-1"
          className="w-full min-h-screen flex items-center justify-start scroll-mt-48"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full gap-6 md:gap-8 lg:gap-10 p-0 md:p-10">
            {/* image grid */}
            <div className="w-full max-w-[1100px] gap-3 sm:gap-4 grid grid-cols-12 px-0 md:px-8">
              <Card className="col-span-12 sm:col-span-4 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/HLLC2025/1.png" alt="HLLC 2025" aspect="4/3" rounded="rounded-none" />
                </CardBody>
              </Card>

              <Card className="col-span-12 sm:col-span-4 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/HLLC2025/10.jpeg" alt="HLLC 2025" aspect="4/3" rounded="rounded-none" />
                </CardBody>
              </Card>

              <Card className="col-span-12 sm:col-span-4 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/HLLC2025/3.jpeg" alt="HLLC 2025" aspect="4/3" rounded="rounded-none" />
                </CardBody>
              </Card>

              <Card isFooterBlurred className="w-full col-span-12 sm:col-span-5 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/HLLC2025/7.jpeg" alt="HLLC 2025" aspect="16/9" rounded="rounded-none" />
                </CardBody>
              </Card>

              <Card isFooterBlurred className="w-full col-span-12 sm:col-span-7 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/HLLC2025/2.png" alt="HLLC 2025" aspect="4/3" rounded="rounded-none" />
                </CardBody>
              </Card>
            </div>

            {/* info */}
            <ProjectInfoCard
              title="HLLC–2025 On Campus"
              subtitle={`Developed and implemented core backend services for HLLC, an activity tracker for
freshmen at Mae Fah Luang University, enhancing engagement and participation.`}
              link="https://github.com/HLLC-MFU/HLLC-2025"
              technologies={[
                { name: "NestJS", icon: <SiNestjs className="w-6 h-6 text-[#E0234E]" /> },
                { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-[#47A248]" /> },
                { name: "React Native", icon: <SiReact className="w-6 h-6 text-[#61DAFB]" /> },
                { name: "Expo", icon: <SiExpo className="w-6 h-6 text-black" /> },
                { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black" /> },
                { name: "Go", icon: <FaGolang className="w-6 h-6 text-[#06b6d4]" /> },
              ]}
            />
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          id="project-2"
          className="w-full min-h-screen flex items-center justify-start scroll-mt-48"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8 lg:gap-10 p-0 md:p-10">
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
                { name: "Socket.io", icon: <SiSocketdotio className="w-6 h-6 text-[#010101]" /> },
              ]}
            />

            <div className="w-full max-w-[1100px] gap-3 sm:gap-4 grid grid-cols-12 px-0 md:px-8">
              <Card className="col-span-12 sm:col-span-4 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/HLLC2024/2.png" alt="HLLC 2024" aspect="4/3" rounded="rounded-none" />
                </CardBody>
              </Card>
              <Card className="col-span-12 sm:col-span-4 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/HLLC2024/3.png" alt="HLLC 2024" aspect="4/3" rounded="rounded-none" />
                </CardBody>
              </Card>
              <Card className="col-span-12 sm:col-span-4 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/HLLC2024/4.png" alt="HLLC 2024" aspect="4/3" rounded="rounded-none" />
                </CardBody>
              </Card>

              <Card isFooterBlurred className="w-full col-span-12 sm:col-span-5 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/HLLC2024/5.png" alt="HLLC 2024" aspect="16/9" rounded="rounded-none" />
                </CardBody>
              </Card>

              <Card isFooterBlurred className="w-full col-span-12 sm:col-span-7 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/HLLC2024/6.png" alt="HLLC 2024" aspect="16/9" rounded="rounded-none" />
                </CardBody>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          id="project-3"
          className="w-full min-h-screen flex items-center justify-start scroll-mt-48"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8 lg:gap-10 p-0 md:p-10">
            <div className="w-full max-w-[1100px] gap-3 sm:gap-4 grid grid-cols-12 px-0 md:px-8">
              <Card className="col-span-12 sm:col-span-4 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/MaeChanProject/2.png" alt="MaeChan Project" aspect="4/3" rounded="rounded-none" />
                </CardBody>
              </Card>
              <Card className="col-span-12 sm:col-span-4 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/MaeChanProject/3.png" alt="MaeChan Project" aspect="4/3" rounded="rounded-none" />
                </CardBody>
              </Card>
              <Card className="col-span-12 sm:col-span-4 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/MaeChanProject/4.png" alt="MaeChan Project" aspect="4/3" rounded="rounded-none" />
                </CardBody>
              </Card>

              <Card isFooterBlurred className="w-full col-span-12 sm:col-span-5 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/MaeChanProject/5.png" alt="MaeChan Project" aspect="16/9" rounded="rounded-none" />
                </CardBody>
              </Card>

              <Card isFooterBlurred className="w-full col-span-12 sm:col-span-7 overflow-hidden p-0">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                  <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                </CardHeader>
                <CardBody className="p-0">
                  <ResponsiveImage src="/MaeChanProject/6.png" alt="MaeChan Project" aspect="16/9" rounded="rounded-none" />
                </CardBody>
              </Card>
            </div>

            <ProjectInfoCard
              title="MaeChan Project"
              subtitle={`The MaeChan Project is a Senior Project for third-year Software Engineering students at MFU.
This project is developed by a team of four students, and I am responsible as both the Full-Stack Developer and Project Manager.`}
              link="https://github.com/poonyawat0511/MaeChan-Project"
              technologies={[
                { name: "Kafka", icon: <SiApachekafka className="w-6 h-6 text-[#231F20]" /> },
                { name: "Spring Boot", icon: <SiSpringboot className="w-6 h-6 text-[#6DB33F]" /> },
                { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black" /> },
                { name: "Hero UI", icon: <FaPalette className="w-6 h-6 text-[#06b6d4]" /> },
                { name: "Camunda", icon: <SiCamunda className="w-6 h-6 text-[#FF4F00]" /> },
              ]}
            />
          </div>
        </motion.div>

        {/* Project 4 */}
        <motion.div
          id="project-4"
          className="w-full min-h-screen flex items-center justify-start scroll-mt-48"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8 lg:gap-10 p-0 md:p-10">
            <ProjectInfoCard
              title="Cafe Management"
              subtitle={`The Cafe Management System is a web application developed by second-year Software Engineering students at Mae Fah Luang University (MFU).
 The project responds to a business scenario provided by third-year students, focusing on managing café operations such as menu, orders, tables, and staff.
 
 Built with Spring Boot and MySQL, the system aims to improve café workflow and customer service.
 I contributed to both backend and frontend development, applying real-world software engineering practices.`}
              link="https://github.com/poonyawat0511/cafe-management"
              technologies={[
                { name: "Spring Boot", icon: <SiSpringboot className="w-6 h-6 text-[#6DB33F]" /> },
                { name: "MySQL", icon: <SiMysql className="w-6 h-6 text-[#4479A1]" /> },
                { name: "Bootstrap", icon: <SiBootstrap className="w-6 h-6 text-[#7952B3]" /> },
              ]}
            />

            <div className="w-full max-w-[1100px] gap-3 sm:gap-4 grid grid-cols-12 px-0 md:px-8">
              <Card className="col-span-12 sm:col-span-4 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/CafeManagement/2.png" alt="Cafe Management" aspect="4/3" rounded="rounded-none" />
                </CardBody>
              </Card>
              <Card className="col-span-12 sm:col-span-4 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/CafeManagement/3.png" alt="Cafe Management" aspect="4/3" rounded="rounded-none" />
                </CardBody>
              </Card>
              <Card className="col-span-12 sm:col-span-4 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/CafeManagement/4.png" alt="Cafe Management" aspect="4/3" rounded="rounded-none" />
                </CardBody>
              </Card>

              <Card isFooterBlurred className="w-full col-span-12 sm:col-span-5 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/CafeManagement/5.png" alt="Cafe Management" aspect="16/9" rounded="rounded-none" />
                </CardBody>
              </Card>

              <Card isFooterBlurred className="w-full col-span-12 sm:col-span-7 overflow-hidden p-0">
                <CardBody className="p-0">
                  <ResponsiveImage src="/CafeManagement/6.png" alt="Cafe Management" aspect="16/9" rounded="rounded-none" />
                </CardBody>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>

      {/* pdf modal */}
      <ResumeModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
