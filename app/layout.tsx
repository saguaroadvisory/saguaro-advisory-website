import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import LanguagePicker from "@/components/LanguagePicker";

const SITE_URL = "https://www.saguaroadvisory.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Saguaro Advisory | Fractional CFO for Manufacturing & Distribution",
    template: "%s | Saguaro Advisory",
  },
  description:
    "Fractional CFO services for manufacturing and distribution companies ($10M–$100M revenue). Expert financial leadership in reporting, cash forecasting, process automation, and transaction readiness.",
  keywords: [
    "fractional CFO",
    "manufacturing CFO",
    "distribution CFO",
    "fractional CFO Phoenix",
    "CFO services manufacturing",
    "financial advisory manufacturing",
    "process automation CFO",
    "month-end close",
    "cash flow forecasting",
    "transaction readiness",
  ],
  authors: [{ name: "Adrian Buenrostro, CPA" }],
  creator: "Saguaro Advisory",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Saguaro Advisory",
    title: "Saguaro Advisory | Fractional CFO for Manufacturing & Distribution",
    description:
      "CFO-level financial leadership without the full-time overhead. We partner with $10M–$100M manufacturers and distributors on reporting, forecasting, and process automation.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saguaro Advisory | Fractional CFO for Manufacturing & Distribution",
    description:
      "CFO-level financial leadership without the full-time overhead. We partner with $10M–$100M manufacturers and distributors.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/saguaro-icon.svg", type: "image/svg+xml" },
      { url: "/saguaro-icon-256.png", sizes: "256x256", type: "image/png" },
    ],
    apple: "/saguaro-icon-256.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KSDKNSB3KQ" strategy="afterInteractive"/>
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KSDKNSB3KQ');
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {/* ProfessionalService schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Saguaro Advisory",
            "description": "Fractional CFO services for manufacturing and distribution companies with up to $100M in revenue.",
            "url": "https://www.saguaroadvisory.com",
            "email": "adrian@saguaroadvisory.com",
            "founder": {
              "@type": "Person",
              "name": "Adrian Buenrostro",
              "jobTitle": "Founder & Fractional CFO",
              "hasCredential": "CPA"
            },
            "areaServed": { "@type": "Country", "name": "United States" },
            "serviceType": [
              "Fractional CFO",
              "Monthly Financial Reporting",
              "Cash Flow Forecasting",
              "Process Automation",
              "Transaction Readiness"
            ],
            "knowsAbout": ["Manufacturing", "Distribution", "Construction", "Job Costing", "Inventory Accounting"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Fractional CFO Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Monthly Reporting",
                    "description": "Clean, timely financial reporting so you always know where you stand."
                  },
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "2000",
                    "priceCurrency": "USD",
                    "unitText": "month"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Fractional CFO",
                    "description": "Ongoing CFO-level financial leadership without the full-time overhead."
                  },
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "4500",
                    "priceCurrency": "USD",
                    "unitText": "month"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Advisory & Project Work",
                    "description": "Targeted engagements for audits, transactions, or process improvement."
                  }
                }
              ]
            },
            "sameAs": []
          })}}
        />
        {/* WebSite schema with sitelinks navigation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Saguaro Advisory",
            "url": "https://www.saguaroadvisory.com"
          })}}
        />
        {/* SiteNavigationElement schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Site Navigation",
            "itemListElement": [
              { "@type": "SiteLinksSearchBox", "url": "https://www.saguaroadvisory.com" },
              { "@type": "ListItem", "position": 1, "name": "Services", "url": "https://www.saguaroadvisory.com/#services" },
              { "@type": "ListItem", "position": 2, "name": "About", "url": "https://www.saguaroadvisory.com/#about" },
              { "@type": "ListItem", "position": 3, "name": "Results", "url": "https://www.saguaroadvisory.com/#results" },
              { "@type": "ListItem", "position": 4, "name": "Contact", "url": "https://www.saguaroadvisory.com/#contact" }
            ]
          })}}
        />
        <LanguagePicker />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
