import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "Travancore Medical System - Premium Medical Equipment",
    template: "%s | Travancore Medical System",
  },
  description:
    "Leading distributor of Auto CPAP, BiPAP, Oxygen Concentrators, and respiratory care equipment. Quality medical devices for sleep apnea treatment and home oxygen therapy.",
  keywords: [
    "Auto CPAP",
    "BiPAP",
    "Oxygen Concentrator",
    "Sleep Apnea",
    "Respiratory Care",
    "Medical Equipment",
    "CPAP Machine",
    "Home Sleep Study",
    "NIV Mask",
    "Travel CPAP",
    "Portable Oxygen Concentrator",
    "Medical Devices India",
    "Travancore Medical System",
  ],
  authors: [{ name: "Travancore Medical System" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://travancoremedical.com",
    siteName: "Travancore Medical System",
    title: "Travancore Medical System - Premium Medical Equipment",
    description:
      "Leading distributor of Auto CPAP, BiPAP, Oxygen Concentrators, and respiratory care equipment.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Travancore Medical System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travancore Medical System - Premium Medical Equipment",
    description:
      "Leading distributor of Auto CPAP, BiPAP, Oxygen Concentrators, and respiratory care equipment.",
    images: ["/images/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

const organizationData = {
  name: "Travancore Medical System",
  url: "https://travancoremedical.com",
  logo: "https://travancoremedical.com/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-99479-50001",
    contactType: "Sales",
    areaServed: "IN",
    availableLanguage: "en",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Kerala",
  },
  sameAs: [
    // Add social media links here when available
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://travancoremedical.com" />
        <link rel="icon" href="/favicon.ico" />
        <StructuredData type="Organization" data={organizationData} />
        <StructuredData
          type="WebSite"
          data={{
            name: "Travancore Medical System",
            url: "https://travancoremedical.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://travancoremedical.com/products?search={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
