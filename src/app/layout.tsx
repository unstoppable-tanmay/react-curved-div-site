import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React Curved Div",
  description: "A Application to show the curved div",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased no-scrollbar`}
      >
        <div className="nav w-full p-4 flex items-center justify-center gap-10 bg-gray-200">
          <Link href="/inward" className="hover:text-sky-500">
            Inward
          </Link>
          <Link href="/" className="hover:text-sky-500">
            Master
          </Link>
          <Link href="/outward" className="hover:text-sky-500">
            Outward
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
