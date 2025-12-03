import type { Metadata } from "next";
import Script from "next/script";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gtmoutboundservices.com"),
  title: {
    default: "GTM Outbound Services | Forensic Market Intelligence & Predictable Enterprise Pipeline",
    template: "%s | GTM Outbound Services",
  },
  description:
    "We reverse-engineer your market, competitors, and highest-converting deal patterns to build automated outbound systems that deliver pre-qualified, high-intent conversations. Led by a Chartered Accountant with FTSE 100 & Fortune 500 experience.",
  keywords: [
    "b2b outbound agency",
    "gtm engineering",
    "outbound lead generation",
    "forensic market intelligence",
    "competitive intelligence",
    "icp discovery",
    "predictable pipeline",
    "enterprise lead generation",
    "gtm strategy",
    "go-to-market consulting",
    "multi-channel outbound",
    "revenue systems engineering",
  ],
  authors: [{ name: "GTM Outbound Services" }],
  creator: "GTM Outbound Services",
  publisher: "GTM Outbound Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gtmoutboundservices.com",
    siteName: "GTM Outbound Services",
    title: "GTM Outbound Services | Forensic Market Intelligence & Predictable Enterprise Pipeline",
    description:
      "Automated outbound systems engineered through forensic market intelligence and proprietary workflow automation.",
    images: [
      {
        url: "/logo-512.png",
        width: 512,
        height: 512,
        alt: "GTM Outbound Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTM Outbound Services | Forensic Market Intelligence",
    description:
      "Outbound engineered through forensic market intelligence, ICP discovery, and proprietary automation.",
    images: ["/logo-512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/favicon_io/site.webmanifest",
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
    canonical: "https://gtmoutboundservices.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1a1f2e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GTM Outbound Services",
              url: "https://gtmoutboundservices.com",
              logo: "https://gtmoutboundservices.com/logo-512.png",
              description:
                "Outbound systems engineered using forensic market intelligence and ICP discovery.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "info@gtmoutboundservices.com",
              },
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
