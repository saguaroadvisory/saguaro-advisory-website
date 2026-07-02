import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Saguaro Advisory | CFO Fraccional para Manufactura y Distribución",
  description:
    "Servicios de CFO fraccional para empresas de manufactura y distribución con hasta $100M en ingresos. Liderazgo financiero experto en reportes, pronósticos de flujo de caja, automatización y preparación para transacciones.",
  alternates: { canonical: "https://www.saguaroadvisory.com/es" },
  openGraph: {
    locale: "es_MX",
    title: "Saguaro Advisory | CFO Fraccional para Manufactura y Distribución",
    description:
      "Servicios de CFO fraccional para empresas de manufactura y distribución con hasta $100M en ingresos.",
    url: "https://www.saguaroadvisory.com/es",
    siteName: "Saguaro Advisory",
    type: "website",
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
