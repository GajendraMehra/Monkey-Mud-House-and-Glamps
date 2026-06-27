import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monkey Mud House & Glamps - Eco-Luxury Homestay Coming Soon",
  description: "Experience nature like never before at Monkey Mud House & Glamps. Traditional mud houses and luxury glamping in the heart of wilderness. Opening soon!",
  keywords: "Monkey Mud House, glamping, eco-tourism, homestay, mud house accommodation, nature retreat, eco-luxury, wilderness experience",
  authors: [{ name: "Monkey Mud House & Glamps" }],
  creator: "Monkey Mud House & Glamps",
  publisher: "Monkey Mud House & Glamps",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://monkeymudhouse.com"),
  alternates: {
    canonical: "/",
  },
  other: {
    'og:image': 'https://www.drafthospitality.com/brand.jpg',
    'og:image:secure_url': 'https://www.drafthospitality.com/brand.jpg',
    'og:image:type': 'image/jpeg',
    'og:image:width': '1200',
    'og:image:height': '630',
  },
  openGraph: {
    title: "Monkey Mud House & Glamps - Eco-Luxury Homestay Coming Soon",
    description: "Experience nature like never before. Traditional mud houses and luxury glamping awaits you. Opening soon!",
    url: "https://monkeymudhouse.com",
    siteName: "Monkey Mud House & Glamps",
    images: [
      {
        url: "https://www.drafthospitality.com/brand.jpg",
        width: 1200,
        height: 630,
        alt: "Monkey Mud House & Glamps - Eco-Luxury Homestay",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monkey Mud House & Glamps - Coming Soon",
    description: "Experience eco-luxury in traditional mud houses and glamping tents. Opening soon!",
    images: ["https://www.drafthospitality.com/brand.jpg"],
    creator: "@monkeymudhouse",
    site: "@monkeymudhouse",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
