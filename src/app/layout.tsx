import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Snap Labs | AI Consultancy",
  description: "Empowering Innovation with AI - Transform your business with cutting-edge AI solutions and expert consulting services.",
  keywords: ["AI consultancy", "machine learning", "data analytics", "artificial intelligence", "business intelligence", "Snap Labs", "Snap Analytics"],
  icons: {
    icon: [
      {
        url: '/images/web_icon.svg',
        type: 'image/svg+xml',
      }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon.svg" />
        <link rel="shortcut icon" href="/images/favicon.svg" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-gradient-to-b from-black via-slate-950 to-blue-950 min-h-screen text-white`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
