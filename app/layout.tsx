import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saguaro Advisory | Fractional CFO for Manufacturing & Distribution",
  description: "CFO-level financial leadership for manufacturing and distribution companies ($10M–$100M revenue). Expert in reporting, forecasting, and process automation.",
  keywords: "fractional CFO, manufacturing CFO, distribution CFO, financial advisory, process automation",
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
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
