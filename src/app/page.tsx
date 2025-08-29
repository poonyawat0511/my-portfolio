"use client";

import React, { useState } from "react";
import Aurora from "@/Backgrounds/Aurora/Aurora";
import { AuroraWrapper } from "./AuroraWrapper";
import { Button, Link, Card, CardHeader, Image } from "@heroui/react";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";
import { motion } from "framer-motion";
import GradientText from "@/TextAnimations/GradientText/GradientText";
import ResumeModal from "@/components/modals/ResumeModal";
import ProjectInfoCard from "@/components/cards/ProjectInfoCard";
import { SiApachekafka, SiSpringboot, SiNextdotjs } from "react-icons/si";
import { FaPalette } from "react-icons/fa";
import { SiCamunda } from "react-icons/si";
import { SiNestjs, SiMongodb, SiNuxtdotjs, SiVuetify, SiSocketdotio } from "react-icons/si";
import { SiReact, SiExpo } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import Magnet from "@/Animations/Magnet/Magnet";
import { FaGolang } from "react-icons/fa6";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start text-white pt-24 overflow-hidden">
      <AuroraWrapper>
        <Aurora colorStops={["#030b0e", "#124587", "#A22040"]} speed={1} />
      </AuroraWrapper>
      <div className="flex items-center justify-center gap-5">
        <div className="flex flex-col items-start justify-start h-[350px] px-10">
          <h1 className="text-5xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Poonyawat
            </span>
            <br />
            <span className="text-3xl font-semibold text-gray-200">
              A 4rd year Software Engineering<br />
              student at Mae Fah Luang University (MFU)
            </span>
          </h1>
          <div className="flex flex-row gap-4 mt-10">
            <Button onPress={() => setOpen(true)} className="rounded-full flex items-center gap-2">
              Resume
              <span className="rounded-full p-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 flex items-center justify-center">
                <ChevronRightIcon className="w-4 h-4 text-white" />
              </span>
            </Button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
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


        <div className="flex-1 items-start p-10 flex">
          <div>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={2}
              showBorder={false}
              className="text-3xl font-bold ml-[11rem] mb-10"
            >
              Work Experience
            </GradientText>
            <div className="grid grid-cols-2 gap-10">
              <Magnet padding={10} disabled={false} magnetStrength={2}>
                <Image
                  src="/HLLC2025/2.png"
                  alt="HLLC 2025 Project Preview"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full rounded-tl-[5rem] rounded-br-[5rem]"
                />
              </Magnet>
              <Magnet padding={10} disabled={false} magnetStrength={2}>
                <Image
                  src="/HLLC2024/6.png"
                  alt="HLLC 2024 Project Preview"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full rounded-tl-[5rem] rounded-br-[5rem]"
                />
              </Magnet>
              <Magnet padding={10} disabled={false} magnetStrength={2}>
                <Image
                  src="/MaeChanProject/1.png"
                  alt="MaeChan Project Preview"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full rounded-tl-[5rem] rounded-br-[5rem]"
                />
              </Magnet>
              <Magnet padding={10} disabled={false} magnetStrength={2}>
                <Image
                  src="/CafeManagement/1.png"
                  alt="Cafe Management Preview"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full rounded-tl-[5rem] rounded-br-[5rem]"
                />
              </Magnet>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* 1st Projects preview */}
        <motion.div
          id="project-1"
          className="w-full flex justify-start items-center mt-[5rem] scroll-mt-[12rem]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex justify-between items-center w-full gap-4 p-10">
            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/HLLC2025/1.png"
                />
              </Card>
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/HLLC2025/10.jpeg"
                />
              </Card>
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/HLLC2025/3.jpeg"
                />
              </Card>
              <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                  <h4 className="text-black font-medium text-2xl">Acme camera</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src="/HLLC2025/11.jpeg"
                />
              </Card>
              <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src="/HLLC2025/2.png"
                />
              </Card>
            </div>
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
        {/* 2st Projects preview */}
        <motion.div
          id="project-2"
          className="w-full flex justify-start items-center mt-[15rem] scroll-mt-[12rem]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="w-full flex justify-between items-center p-10">
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
            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/HLLC2024/2.png"
                />
              </Card>
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/HLLC2024/3.png"
                />
              </Card>
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/HLLC2024/4.png"
                />
              </Card>
              <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src="/HLLC2024/5.png"
                />
              </Card>
              <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src="/HLLC2024/6.png"
                />
              </Card>
            </div>
          </div>
        </motion.div>
        {/* 3st Projects preview */}
        <motion.div
          id="project-3"
          className="w-full flex justify-start items-center mt-[15rem] scroll-mt-[12rem]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="w-full flex justify-between items-center p-10">
            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/MaeChanProject/2.png"
                />
              </Card>
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/MaeChanProject/3.png"
                />
              </Card>
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/MaeChanProject/4.png"
                />
              </Card>
              <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src="/MaeChanProject/5.png"
                />
              </Card>
              <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                  <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src="/MaeChanProject/6.png"
                />
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
        {/* 4st Projects preview */}
        <motion.div
          id="project-4"
          className="w-full flex justify-start items-center mt-[15rem] scroll-mt-[12rem] mb-[10rem]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="w-full flex justify-between items-center p-10">
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
            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/CafeManagement/2.png"
                />
              </Card>
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/CafeManagement/3.png"
                />
              </Card>
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/CafeManagement/4.png"
                />
              </Card>
              <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src="/CafeManagement/5.png"
                />
              </Card>
              <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src="/CafeManagement/6.png"
                />
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
