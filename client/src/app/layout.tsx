"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Apollo from "./apolloclient";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Linkedin",
//   description: "Linkedin Clone with Next and GraphQL",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Apollo>{children}</Apollo>
      </body>
    </html>
  );
}
