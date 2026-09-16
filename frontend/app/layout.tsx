import type { Metadata } from "next";

import { Geist } from "next/font/google";

import "./globals.css";
import AuthSessionProvider from "@/components/providers/AuthSessionProvider";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TripPilot",
  description: "Plan your next trip with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-background-color" lang="en">
      <AuthSessionProvider>
        <body className={geist.className}>{children}</body>
      </AuthSessionProvider>
    </html>
  );
}
