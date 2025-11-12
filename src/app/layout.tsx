import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FirebaseProvider } from "@/components/firebase-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X Bot Cleaner - Manual Bot Follower Removal Tool for X (Twitter)",
  description:
    "Manually identify and bulk remove bot followers from your X (Twitter) account while preserving legitimate followers. Privacy-first Chrome extension with local processing.",
  keywords: [
    "X bot cleaner",
    "Twitter bot remover",
    "bot follower removal",
    "Chrome extension",
    "X bot removal",
    "Twitter bot cleaner",
    "follower management",
    "bot detection",
    "manual bot classification",
    "bulk unfollow",
    "privacy-first extension",
    "local processing",
    "bot follower tool",
    "X follower cleanup",
    "Twitter follower tool",
  ],
  authors: [{ name: "Ibrahim Uzun", url: "https://x.com/ibrahimuzn" }],
  creator: "Ibrahim Uzun",
  publisher: "Ibrahim Uzun",
  category: "Productivity",
  classification: "Browser Extension",
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
    canonical: "https://x-bot-cleaner.ibrahimuzun.com",
  },
  openGraph: {
    title: "X Bot Cleaner - Manual Bot Follower Removal Tool for X (Twitter)",
    description:
      "Manually identify and bulk remove bot followers from your X (Twitter) account while preserving legitimate followers. Privacy-first Chrome extension.",
    type: "website",
    url: "https://x-bot-cleaner.ibrahimuzun.com",
    siteName: "X Bot Cleaner",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "X Bot Cleaner - Manual Bot Follower Removal Tool for X (Twitter)",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "X Bot Cleaner - Manual Bot Follower Removal Tool for X (Twitter)",
    description:
      "Manually identify and bulk remove bot followers from your X (Twitter) account while preserving legitimate followers.",
    creator: "@ibrahimuzn",
    site: "@ibrahimuzn",
    images: ["/images/logo.png"],
  },
  appleWebApp: {
    capable: true,
    title: "X Bot Cleaner",
    statusBarStyle: "default",
  },
  applicationName: "X Bot Cleaner",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://x-bot-cleaner.ibrahimuzun.com"),
  verification: {
    google: "your-google-verification-code", // Replace with actual code
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "X Bot Cleaner",
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
    name: "X Bot Cleaner",
    description:
      "Manually identify and bulk remove bot followers from your X (Twitter) account while preserving legitimate followers. Privacy-first Chrome extension with local processing.",
    url: "https://x-bot-cleaner.ibrahimuzun.com",
    applicationCategory: "BrowserExtension",
    operatingSystem: "Chrome",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    downloadUrl: "https://chrome.google.com/webstore",
    author: {
      "@type": "Person",
      name: "Ibrahim Uzun",
      url: "https://x.com/ibrahimuzn",
    },
    publisher: {
      "@type": "Person",
      name: "Ibrahim Uzun",
    },
    featureList: [
      "Manual bot classification",
      "Follower capture",
      "Swipe-based review",
      "Bulk removal",
      "Smart filters",
      "Live metrics",
      "Privacy-first approach",
      "Local processing",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://x-bot-cleaner.ibrahimuzun.com" />
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
        <meta name="apple-mobile-web-app-title" content="X Bot Cleaner" />
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
