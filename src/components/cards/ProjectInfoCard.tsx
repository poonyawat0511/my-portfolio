import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function ProjectInfoCard({
    title = "Project Title",
    subtitle = "Short project description",
    link = "#",
    technologies = [],
}: {
    title?: string;
    subtitle?: string;
    link?: string;
    technologies?: { name: string; icon: React.ReactNode }[];
}) {
    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[700px]"
            shadow="sm"
        >
            <CardBody>
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-foreground/90 text-3xl">{title}</h3>
                    <p className="text-medium text-foreground/80 whitespace-pre-line">{subtitle}</p>
                    {/* Technology icons row */}
                    {technologies.length > 0 && (
                        <div className="flex flex-row gap-3 mt-3 ml-4">
                            {technologies.map((tech) => (
                                <span
                                    key={tech.name}
                                    className="flex items-center justify-center rounded-full bg-white/80 p-2 shadow"
                                    title={tech.name}
                                >
                                    {tech.icon}
                                </span>
                            ))}
                        </div>
                    )}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Button
                            as="a"
                            href={link}
                            className="rounded-full flex items-center gap-2 text-white justify-start
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
            </CardBody>
        </Card>
    );
}