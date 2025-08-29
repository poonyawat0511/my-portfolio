'use client'
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@heroui/react";
import RotatingText from "@/components/react-bits/TextAnimations/RotatingText/RotatingText";

const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
];

export default function GlobalNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur z-50"
        >
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                  <div className="flex items-center gap-x-3">
                    <h1 className="text-white font-extrabold text-2xl tracking-wide">TO BE</h1>
                    <RotatingText
                        texts={['BackEnd!', 'FrontEnd?', 'FullStack?']}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-bold text-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                  </div>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Button as={Link} href="#" variant="light" className="text-white">
                        Home
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="default" href="#" variant="light" className="text-white">
                        Work Experience
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="default" href="#" variant="light" className="text-white">
                        Skills
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="default" href="#" variant="light" className="text-white">
                        Contact
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2
                                    ? "primary"
                                    : index === menuItems.length - 1
                                        ? "danger"
                                        : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
} 