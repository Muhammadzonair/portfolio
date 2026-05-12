import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Zonair | Software Engineer & Frontend Developer",
    template: "%s | Muhammad Zonair",
  },
  description:
    "A modern 3D animated developer portfolio built with Next.js, React, Tailwind CSS, Framer Motion, and React Three Fiber.",
  keywords: ["Muhammad Zonair", "Frontend Developer", "React", "Next.js", "Portfolio"],
  openGraph: {
    title: "Muhammad Zonair | Software Engineer & Frontend Developer",
    description:
      "A modern 3D animated developer portfolio with motion-rich sections, glassmorphism, and immersive visuals.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0b0f19",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
