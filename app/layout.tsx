import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  keywords: "Draft House, Draft House Bir, boutique hotel Bir, Himachal Pradesh hotels, mountain resort, luxury stay Bir, paragliding Bir, boutique accommodation, Himalayan retreat, Bir valley, Bir Billing, paragliding India, remote work stay, digital nomad Bir, mountain homestay, adventure sports Bir, trekking Bir, cozy dorms Bir, private rooms Bir, weekend getaway Himachal",
  authors: [{ name: "Draft House Bir" }],
  creator: "Draft House Bir",
  publisher: "Draft House Bir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.drafthospitality.com"),
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
    url: "https://www.drafthospitality.com",
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
        <link rel="canonical" href="https://www.drafthospitality.com" />
        <meta name="geo.region" content="IN-HP" />
        <meta name="geo.placename" content="Bir, Himachal Pradesh" />
        <meta name="geo.position" content="32.0419;76.7243" />
        <meta name="ICBM" content="32.0419, 76.7243" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": "Draft House Bir",
              "description": "A boutique stay nestled near the Bir paragliding landing site, designed for travelers who appreciate thoughtful spaces, warm hospitality, and meaningful experiences.",
              "url": "https://www.drafthospitality.com",
              "logo": "https://www.drafthospitality.com/brand.jpg",
              "image": "https://www.drafthospitality.com/brand.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Paragliding Landing Site",
                "addressLocality": "Bir",
                "addressRegion": "Himachal Pradesh",
                "postalCode": "176077",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 32.0419,
                "longitude": 76.7243
              },
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Mountain Views",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Paragliding",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Remote Work Facilities",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Boutique Rooms",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Dormitory",
                  "value": true
                }
              ],
              "priceRange": "₹₹",
              "sameAs": [
                "https://www.facebook.com/drafthouse.bir",
                "https://www.instagram.com/thedraftbir"
              ],
              "potentialAction": {
                "@type": "ReserveAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.drafthospitality.com"
                },
                "result": {
                  "@type": "LodgingReservation",
                  "name": "Book Your Stay"
                }
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
