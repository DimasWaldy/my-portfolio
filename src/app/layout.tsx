import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dimas Waldy Muzzaky — Full-Stack Developer",
  description:
    "Portfolio of Dimas Waldy Muzzaky, a passionate full-stack web developer from Bekasi, Indonesia. Building digital experiences with Laravel, React, and modern web technologies.",
  keywords: [
    "Dimas Waldy Muzzaky",
    "Full-Stack Developer",
    "Web Developer",
    "Laravel",
    "React",
    "Next.js",
    "Portfolio",
    "Bekasi",
    "STMIK Pranata Indonesia",
  ],
  authors: [{ name: "Dimas Waldy Muzzaky" }],
  openGraph: {
    title: "Dimas Waldy Muzzaky — Full-Stack Developer",
    description:
      "Building digital experiences with passion & precision. Full-stack web developer specializing in Laravel and React.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimas Waldy Muzzaky — Full-Stack Developer",
    description:
      "Building digital experiences with passion & precision.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
