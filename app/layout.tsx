import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";

const iranSans = localFont({
  src: "./fonts/IRANSansXRegular.ttf",
});

const segoe = localFont({
  src: "./fonts/segoe-ui.woff",
});

export const metadata: Metadata = {
  title: "PNLdev | مرجع آموزش زبان های برنامه نویسی",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa' dir='rtl' suppressHydrationWarning>
      <body className={`${iranSans.className} antialiased dark:bg-black`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
