import type { Metadata } from "next";

import { Geist } from "next/font/google";

import "./globals.css";

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
      <body className={geist.className}>{children}</body>
    </html>
  );
}
