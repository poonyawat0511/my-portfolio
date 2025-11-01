"use client";

import { Card, CardBody, Divider, Link, Button } from "@heroui/react";
import {
    SiFacebook,
    SiInstagram,
    SiLinkedin,
    SiGithub,
} from "react-icons/si";

type FooterProps = {
    id: string;
};

export default function Footer({ id }: FooterProps) {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full" id={id}>
            <Divider/>
            <Card className="w-full rounded-none shadow-none bg-black/30 backdrop-blur z-50">
                <CardBody className="w-full px-4 py-8">
                    {/* Top: contact + social */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-4 md:px-10">
                        <div>
                            <h1 className="text-xl font-semibold text-white">Contact</h1>
                            <div className="mt-1 text-default-500">
                                <p className="text-white">
                                    <Link
                                        href="mailto:poonyawat0931@gmail.com"
                                        underline="hover"
                                        color="foreground"
                                    >
                                        poonyawat0931@gmail.com
                                    </Link>
                                </p>
                                <p className="text-white">
                                    <Link href="tel:+66655216629" underline="hover" color="foreground">
                                        +66 65-521-6629
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-white">
                            <IconLink label="Facebook" href="https://www.facebook.com/poonyawat.khomlek" icon={<SiFacebook size={20} className="text-[#1d3be6]"/>} />
                            <IconLink label="Instagram" href="https://www.instagram.com/mxr_query" icon={<SiInstagram size={20} className="text-[#d43e91]"/>} />
                            <IconLink label="LinkedIn" href="https://www.linkedin.com/in/poonyawat-khomlek-b1b496326" icon={<SiLinkedin size={20} className="text-[#1a8deb]"/>} />
                        </div>
                    </div>

                    <Divider className="my-6" />

                    {/* Bottom: small print */}
                    <div className="flex flex-col md:flex-row md:items-center text-small text-default-500 justify-center">
                        <p>© {year} Poonyawat Khomlek. All rights reserved.</p>
                    </div>
                </CardBody>
            </Card>
        </footer>
    );
}

function IconLink({
    label,
    href,
    icon,
}: {
    label: string;
    href: string;
    icon: React.ReactNode;
}) {
    return (
        <Button
            as={Link}
            href={href}
            isExternal={href.startsWith("http")}
            aria-label={label}
            title={label}
            isIconOnly
            variant="solid"
            radius="full"
            className="h-10 w-10 text-foreground"
        >
            <span className="pointer-events-none inline-flex items-center justify-center h-5 w-5">
                {icon}
            </span>
        </Button>
    );
}
