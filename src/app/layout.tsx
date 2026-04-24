import type { Metadata } from "next";
import { Orbitron, Rajdhani, Space_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-interface",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-hud",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Arjun Kaliyath Portfolio",
  description:
    "Tron-inspired portfolio for Arjun Kaliyath featuring projects, systems work, and AI-focused builds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
