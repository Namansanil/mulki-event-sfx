import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mulki Event SFX | Premium Event Production & SFX",
  description: "Mulki Event SFX creates unforgettable events through premium SFX, lighting, sound, decor and event production for weddings, corporate events, concerts and celebrations.",
  icons: {
    icon: [
      { url: '/logo.jpg' },
      { url: '/logo.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/logo.jpg', sizes: '192x192', type: 'image/jpeg' },
    ],
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: "Mulki Event SFX | Premium Event Production & SFX",
    description: "Premium SFX, lighting, sound, decor and event production for unforgettable events.",
    type: "website",
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Mulki Event SFX',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-black text-white`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
