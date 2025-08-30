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
    { label: "Home", href: "/" },
    { label: "Work Experience", href: "#work-experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function GlobalNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur z-50"
            maxWidth="full"
        >
            {/* Left: Hamburger (mobile only) + Brand (always visible) */}
            <NavbarContent justify="start" className="gap-2">
                {/* Hamburger: visible on mobile only */}
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />

                {/* Brand: always visible */}
                <NavbarBrand className="flex justify-center md:justify-start w-full md:w-auto">
                    <div className="flex items-center gap-x-3">
                        <h1 className="text-white font-extrabold text-2xl tracking-wide">TO BE</h1>
                        <RotatingText
                            texts={["BackEnd!", "FrontEnd?", "FullStack?"]}
                            mainClassName="px-3 bg-cyan-300 text-black overflow-hidden py-2 justify-center rounded-lg font-bold text-lg"
                            staggerFrom="last"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </div>
                </NavbarBrand>
            </NavbarContent>

            {/* Right: Desktop nav (md+ only). Hidden on mobile */}
            <NavbarContent justify="end" className="hidden md:flex gap-2">
                {menuItems.map((item) => (
                    <NavbarItem key={item.href}>
                        <Button
                            as={Link}
                            href={item.href}
                            variant="light"
                            className="text-white"
                        >
                            {item.label}
                        </Button>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu>
                {menuItems.map((item) => (
                    <NavbarMenuItem key={item.href}>
                        <Link
                            className="w-full"
                            color="foreground"
                            href={item.href}
                            size="lg"
                            onPress={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
