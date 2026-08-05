import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalNavbar from "@/components/ui/GlobalNavbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poonyawat Khomlek | Full-Stack Developer",
  description:
    "Portfolio of Poonyawat Khomlek — full-stack developer building web/mobile apps and backend services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <GlobalNavbar />
        {children}
        <Footer id="contact"/>
      </body>
    </html>
  );
}
