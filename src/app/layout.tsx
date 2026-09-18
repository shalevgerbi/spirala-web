import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Rubik, Assistant } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configure the font
const rubik = Rubik({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik', // Optional: setups up a CSS variable
});

// Configure Assistant
const assistant = Assistant({ 
  subsets: ['latin'], // Add 'hebrew' if you are using Assistant for Hebrew!
  display: 'swap',
  variable: '--font-assistant', 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ספירלה - התפתחות וייעוץ שינה לתינוקות",
  description: "ליווי מקצועי ורגיש לאימהות ותינוקות. סדנאות התפתחות, פגישות פרטניות, ייעוץ שינה וכלים ליום יום.",
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="he" dir="rtl" className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} ${assistant.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
