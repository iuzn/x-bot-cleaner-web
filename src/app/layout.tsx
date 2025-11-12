import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FirebaseProvider } from "@/components/firebase-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QR Engine - Professional QR Scanner & Generator for iOS",
  description:
    "Transform your iPhone into a powerful QR code tool. Privacy-first, lightning-fast, and beautifully designed for the modern iOS experience. Download now on the App Store.",
  keywords: [
    "QR scanner",
    "QR generator",
    "iOS app",
    "iPhone QR scanner",
    "privacy-first QR",
    "professional QR codes",
    "QR code reader",
    "instant QR detection",
    "offline QR scanner",
    "QR code generator iOS",
    "real-time QR scanning",
    "contact QR codes",
    "URL QR codes",
    "text QR codes",
    "App Store QR app",
  ],
  authors: [{ name: "Ibrahim Uzun", url: "https://x.com/ibrahimuzn" }],
  creator: "Ibrahim Uzun",
  publisher: "Ibrahim Uzun",
  category: "Utilities",
  classification: "Mobile App",
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
  alternates: {
    canonical: "https://qr-engine.ibrahimuzun.com",
  },
  openGraph: {
    title: "QR Engine - Professional QR Scanner & Generator for iOS",
    description:
      "Privacy-first QR scanning and generation for iOS users. Transform your iPhone into a powerful QR code tool with instant detection and real-time scanning.",
    type: "website",
    url: "https://qr-engine.ibrahimuzun.com",
    siteName: "QR Engine",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "QR Engine - Professional QR Scanner & Generator for iOS",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Engine - Professional QR Scanner & Generator for iOS",
    description:
      "Privacy-first QR scanning and generation for iOS users. Transform your iPhone into a powerful QR code tool.",
    creator: "@ibrahimuzn",
    site: "@ibrahimuzn",
    images: ["/images/logo.png"],
  },
  appleWebApp: {
    capable: true,
    title: "QR Engine",
    statusBarStyle: "default",
  },
  applicationName: "QR Engine",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://qr-engine.ibrahimuzun.com"),
  verification: {
    google: "your-google-verification-code", // Replace with actual code
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "QR Engine",
    "theme-color": "#000000",
    "color-scheme": "light dark",
    "apple-touch-icon": "/apple-touch-icon.png",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "QR Engine",
    description:
      "Professional QR scanner and generator for iOS. Privacy-first, lightning-fast QR code tool with instant detection and real-time scanning.",
    url: "https://qr-engine.ibrahimuzun.com",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    downloadUrl: "https://apps.apple.com/us/app/qr-engine/id6748863405",
    author: {
      "@type": "Person",
      name: "Ibrahim Uzun",
      url: "https://x.com/ibrahimuzn",
    },
    publisher: {
      "@type": "Person",
      name: "Ibrahim Uzun",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "1",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Instant QR code detection",
      "Real-time scanning",
      "QR code generation",
      "Privacy-first approach",
      "Offline functionality",
      "Contact QR codes",
      "URL QR codes",
      "Text QR codes",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://qr-engine.ibrahimuzun.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="QR Engine" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={inter.className}>
        <FirebaseProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </FirebaseProvider>
      </body>
    </html>
  );
}
