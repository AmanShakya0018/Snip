import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Provider from "@/provider/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LinkUp - Create LinkedIn Post",
  description: "Automatically generate professional LinkedIn posts with ease. Enhance your social media presence with customized content."

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white dark:bg-black antialiased`}
      >
        <Provider>
          <div className={cn("relative flex min-h-dvh flex-col")}>
            <Navbar />
            <main className="flex-1 px-6">{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
