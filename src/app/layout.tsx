import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetBrainsMono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VoidMine - Ultimate Minecraft Network Experience",
    template: "%s | VoidMine",
  },
  description:
    "VoidMine is the ultimate Minecraft network offering BuildBattle, PvP, weekly events, and more. Join PLAY.VOIDMINE.NET for a top-tier multiplayer experience.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  robots: "/robots.txt",
  generator: "Next.js",
  openGraph: {
    title: "VoidMine - Ultimate Minecraft Network Experience",
    description:
      "Join VoidMine for BuildBattle, PvP arenas, weekly events, and a vibrant Minecraft community.",
    url: "https://voidmine.net/",
    siteName: "VoidMine",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VoidMine - Minecraft Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoidMine - Ultimate Minecraft Network Experience",
    description:
      "Join VoidMine for BuildBattle, PvP arenas, weekly events, and a vibrant Minecraft community.",
    images: ["/og-image.png"],
    site: "@VoidMine",
    creator: "@itzzmateo_",
  },
  metadataBase: new URL("https://voidmine.net"),
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
