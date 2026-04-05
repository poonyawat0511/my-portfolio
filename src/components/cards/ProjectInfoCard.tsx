// src/components/cards/ProjectInfoCard.tsx
import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function ProjectInfoCard({
  title = "Project Title",
  subtitle = "Short project description",
  link,
  technologies = [],
}: {
  title?: string;
  subtitle?: string;
  link?: string;
  technologies?: { name: string; icon: React.ReactNode }[];
}) {
  return (
    // Dark, subtle “liquid glass” frame
    <div
      className="
        group relative h-full rounded-2xl p-[1px]
        bg-[conic-gradient(at_50%_50%,rgba(12,12,14,0.92),rgba(26,26,28,0.92),rgba(12,12,14,0.92))]
        overflow-hidden
      "
    >
      {/* ultra-subtle hover sheen (kept very dark) */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
          bg-white/[0.02]
        "
      />

      <Card
        isBlurred
        shadow="sm"
        className="
          h-full overflow-hidden rounded-[calc(theme(borderRadius.2xl)-1px)]
          border border-white/[0.06]
          bg-black/40 backdrop-blur-xl
          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03),0_10px_30px_-20px_rgba(0,0,0,0.6)]
        "
      >
        <CardBody className="h-full">
          <div className="flex h-full flex-col gap-3">
            <h3 className="font-semibold text-foreground/90 text-3xl">{title}</h3>

            <p className="text-medium text-foreground/80 whitespace-pre-line">
              {subtitle}
            </p>

            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-1 ml-1">
                {technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="
                      flex items-center justify-center rounded-full
                      bg-white/[0.06] hover:bg-white/[0.08]
                      transition-colors p-2 shadow-sm
                    "
                    title={tech.name}
                  >
                    {tech.icon}
                  </span>
                ))}
              </div>
            )}

            {link ? (
              <div className="mt-auto overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    as="a"
                    href={link}
                    className="
                      rounded-full flex items-center gap-2 text-white justify-start
                      bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent
                      data-[hover=true]:bg-transparent focus-visible:bg-transparent
                    "
                    variant="light"
                  >
                    <span className="rounded-full p-2 bg-white/90 dark:bg-white/80 flex items-center justify-center">
                      <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                    </span>
                    Github
                  </Button>
                </motion.div>
              </div>
            ) : null}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
