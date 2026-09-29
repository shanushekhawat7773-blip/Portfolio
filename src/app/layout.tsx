import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { FilmGrain } from "@/components/FilmGrain";
import { ScrollProgress } from "@/components/ScrollProgress";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0806",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Arun Singh | AI/ML Student @ IIT Jodhpur · Portfolio",
  description:
    "Production portfolio of Arun Singh — AI/ML Student at IIT Jodhpur building full-stack AI products across computer vision, fraud detection, recommendation systems and mental wellness.",
  keywords: [
    "Arun Singh",
    "IIT Jodhpur",
    "AI/ML Engineer",
    "Computer Vision",
    "Full-Stack Developer",
    "TrafficGuard-AI",
    "FinGuard-AI",
    "Google Cloud Innovator",
    "NVIDIA Community Member",
    "Jaipur India",
  ],
  authors: [{ name: "Arun Singh", url: "https://github.com/shanushekhawat7773-blip" }],
  creator: "Arun Singh",
  metadataBase: new URL("https://arunsingh.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arunsingh.dev",
    title: "Arun Singh | AI/ML Student @ IIT Jodhpur",
    description: "I build AI systems that watch, predict and protect. Portfolio of Arun Singh.",
    siteName: "Arun Singh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arun Singh - AI/ML Student @ IIT Jodhpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Singh | AI/ML Student @ IIT Jodhpur",
    description: "I build AI systems that watch, predict and protect.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <body className="bg-[#0A0806] text-[#F3EDE4] font-sans antialiased selection:bg-[#FF9A2E]/30 selection:text-[#FFA843] min-h-screen overflow-x-hidden relative">
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <FilmGrain />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
