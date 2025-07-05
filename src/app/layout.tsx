import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synapse - Live Crypto News & Analytics",
  description: "Real-time Web3 news intelligence, trending projects dashboard, seed round discovery, and AI-powered crypto analytics. Stay ahead with live updates every 4 seconds.",
  keywords: ["Web3", "crypto news", "blockchain analytics", "DeFi", "NFT", "crypto intelligence", "trading analytics", "investment discovery"],
  authors: [{ name: "Web3 Intelligence Team" }],
  openGraph: {
    title: "Synapse - Live Crypto News & Analytics",
    description: "Real-time Web3 news intelligence, trending projects dashboard, seed round discovery, and AI-powered crypto analytics. Stay ahead with live updates every 4 seconds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
