import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Saguaro Advisory",
            "description": "Fractional CFO services for manufacturing and distribution companies ($10M–$100M revenue).",
            "url": "https://www.saguaroadvisory.com",
            "email": "adrian@saguaroadvisory.com",
            "founder": {
              "@type": "Person",
              "name": "Adrian Buenrostro",
              "jobTitle": "Founder & Fractional CFO",
              "hasCredential": "CPA"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "serviceType": [
              "Fractional CFO",
              "Monthly Financial Reporting",
              "Cash Flow Forecasting",
              "Process Automation",
              "Transaction Readiness"
            ],
            "knowsAbout": ["Manufacturing", "Distribution", "Construction", "Job Costing", "Inventory Accounting"],
            "sameAs": []
          })}}
        />
        {children}
      </body>
    </html>
  );
}
