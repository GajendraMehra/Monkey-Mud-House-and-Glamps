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
  title: "Draft House - Boutique Stay in Bir, Himachal Pradesh | Coming Soon",
  description: "Draft House, Bir is a boutique stay nestled near the Bir paragliding landing site, designed for travelers who appreciate thoughtful spaces, warm hospitality, and meaningful experiences. Blending modern comfort with mountain charm, our private rooms and cozy dorms offer the perfect base to explore Bir. Whether you're here to fly, work remotely, or simply slow down, Draft House invites you to connect, unwind, and create stories worth sharing.",
  keywords: "Draft House, boutique hotel Bir, Himachal Pradesh hotels, mountain resort, luxury stay Bir, paragliding Bir, boutique accommodation, Himalayan retreat",
  authors: [{ name: "Draft House Bir" }],
  creator: "Draft House Bir",
  publisher: "Draft House Bir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://drafthouse.bir.com"),
  alternates: {
    canonical: "/",
  },
  other: {
    'og:image': 'https://www.drafthospitality.com/brand.jpg',
    'og:image:secure_url': 'https://www.drafthospitality.com/brand.jpg',
    'og:image:type': 'image/jpeg',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:locale': 'en_IN',
  },
  openGraph: {
    title: "Draft House - Boutique Stay in Bir, Himachal Pradesh | Coming Soon",
    description: "Draft House, Bir is a boutique stay nestled near the Bir paragliding landing site, designed for travelers who appreciate thoughtful spaces, warm hospitality, and meaningful experiences. Blending modern comfort with mountain charm, our private rooms and cozy dorms offer the perfect base to explore Bir.",
    url: "https://drafthouse.bir.com",
    siteName: "Draft House Bir",
    images: [
      {
        url: "https://www.drafthospitality.com/brand.jpg",
        width: 1200,
        height: 630,
        alt: "Draft House - Boutique Stay in Bir, Himachal Pradesh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Draft House Bir - Boutique Stay Coming Soon",
    description: "Draft House, Bir is a boutique stay near the paragliding landing site. Blending modern comfort with mountain charm for travelers seeking thoughtful spaces and meaningful experiences.",
    images: ["https://www.drafthospitality.com/brand.jpg"],
    creator: "@drafthousebir",
    site: "@drafthousebir",
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
