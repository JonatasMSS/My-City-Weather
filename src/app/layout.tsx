import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "@/lib/dayjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: "icon.png",
  title: "My city weather",
  description:
    "An App That Return's the time and current weather condition from a city",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} flex min-h-screen w-full flex-col `}>
        {/* Search and Clouds */}
        {props.children}
      </body>
    </html>
  );
}
