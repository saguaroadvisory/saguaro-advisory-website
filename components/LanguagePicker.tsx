"use client";
import { useEffect, useState, startTransition } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function LanguagePicker() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Don't show if already on the Spanish page
    if (pathname.startsWith("/es")) return;
    const chosen = localStorage.getItem("saguaro-lang");
    if (!chosen) startTransition(() => setVisible(true));
  }, [pathname]);

  const choose = (lang: "en" | "es") => {
    localStorage.setItem("saguaro-lang", lang);
    setVisible(false);
    if (lang === "es") router.push("/es");
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      backgroundColor: "rgba(28,38,22,0.78)",
      backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "24px",
    }}>
      <div style={{
        backgroundColor: "#F2EDE3",
        borderRadius: "12px",
        padding: "56px 48px",
        maxWidth: "480px",
        width: "100%",
        textAlign: "center",
        boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
      }}>
        {/* Logo mark */}
        <svg width="48" height="48" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: "24px" }}>
          <circle cx="128" cy="128" r="128" fill="#3E5040"/>
          <path d="M108,218 L108,134 C108,126 104,122 96,122 L80,122 C73,122 68,117 68,110 L68,86 C68,79 73,74 80,74 C87,74 92,79 92,86 L92,104 C92,111 97,116 104,116 L108,116 L108,78 C108,71 113,66 120,66 L136,66 C143,66 148,71 148,78 L148,116 L152,116 C159,116 164,111 164,104 L164,86 C164,79 169,74 176,74 C183,74 188,79 188,86 L188,110 C188,117 183,122 176,122 L160,122 C152,122 148,126 148,134 L148,218 Z" fill="#F2E4C8"/>
        </svg>

        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "12px" }}>
          Saguaro Advisory
        </p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.75rem", fontWeight: 700, color: "#2C3A2E", lineHeight: 1.25, marginBottom: "8px" }}>
          Choose your language
        </h2>
        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "#5E7A60", fontStyle: "italic", marginBottom: "40px" }}>
          Elige tu idioma
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => choose("en")}
            style={{
              flex: "1", minWidth: "160px",
              backgroundColor: "#2C3A2E", color: "#F2E4C8",
              border: "none", borderRadius: "6px",
              padding: "16px 24px",
              fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#7A9E7E"; e.currentTarget.style.color = "#2C3A2E"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#2C3A2E"; e.currentTarget.style.color = "#F2E4C8"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            🇺🇸 &nbsp;English
          </button>
          <button
            onClick={() => choose("es")}
            style={{
              flex: "1", minWidth: "160px",
              backgroundColor: "#fff", color: "#2C3A2E",
              border: "1.5px solid #C8BFA8", borderRadius: "6px",
              padding: "16px 24px",
              fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.2s, border-color 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F2EDE3"; e.currentTarget.style.borderColor = "#7A9E7E"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fff"; e.currentTarget.style.borderColor = "#C8BFA8"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            🇲🇽 &nbsp;Español
          </button>
        </div>
      </div>
    </div>
  );
}
