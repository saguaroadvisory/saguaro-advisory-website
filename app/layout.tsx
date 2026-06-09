import type { Metadata } from "next";
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
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
