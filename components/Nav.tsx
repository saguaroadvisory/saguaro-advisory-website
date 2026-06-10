"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Results", href: "#results" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: "rgba(44,58,46,0.97)",
      backdropFilter: "blur(8px)",
      boxShadow: scrolled ? "0 1px 0 rgba(122,158,126,0.25)" : "none",
      transition: "box-shadow 0.3s ease",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto", padding: "0 40px",
        height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo mark + wordmark */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          {/* Official icon from saguaro-icon.svg, scaled to 36×36 */}
          <svg width="36" height="36" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Saguaro Advisory">
            <circle cx="128" cy="128" r="128" fill="#3E5040"/>
            <circle cx="128" cy="128" r="128" fill="none" stroke="#7A9E7E" strokeWidth="3" opacity="0.35"/>
            <path d="M108,218 L108,134 C108,126 104,122 96,122 L80,122 C73,122 68,117 68,110 L68,86 C68,79 73,74 80,74 C87,74 92,79 92,86 L92,104 C92,111 97,116 104,116 L108,116 L108,78 C108,71 113,66 120,66 L136,66 C143,66 148,71 148,78 L148,116 L152,116 C159,116 164,111 164,104 L164,86 C164,79 169,74 176,74 C183,74 188,79 188,86 L188,110 C188,117 183,122 176,122 L160,122 C152,122 148,126 148,134 L148,218 Z" fill="#F2E4C8"/>
          </svg>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", color: "#F2E4C8", fontSize: "17px", fontWeight: 600, letterSpacing: "0.01em", lineHeight: 1 }}>Saguaro</span>
            <span style={{ fontFamily: "'Inter', sans-serif", color: "#7A9E7E", fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", lineHeight: 1 }}>Advisory</span>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }} className="desktop-nav">
          {links.map((l) => (
            <a key={l.label} href={l.href} style={{ color: "rgba(242,228,200,0.7)", textDecoration: "none", fontSize: "13.5px", fontWeight: 500, letterSpacing: "0.04em", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F2E4C8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,228,200,0.7)")}
            >{l.label}</a>
          ))}
          <a href="#contact" style={{ backgroundColor: "#7A9E7E", color: "#2C3A2E", padding: "8px 20px", borderRadius: "4px", textDecoration: "none", fontSize: "13.5px", fontWeight: 700, letterSpacing: "0.04em", transition: "background-color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F2E4C8")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7A9E7E")}
          >Book a Call</a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }} className="mobile-menu-btn" aria-label="Toggle menu">
          {[0,1,2].map(i => <div key={i} style={{ width: "22px", height: "1.5px", backgroundColor: "#F2E4C8", margin: "5px 0" }}/>)}
        </button>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: "#2C3A2E", borderTop: "1px solid rgba(122,158,126,0.25)", padding: "12px 32px 24px" }} className="mobile-menu">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{ display: "block", color: "rgba(242,228,200,0.85)", textDecoration: "none", fontSize: "15px", fontWeight: 500, padding: "12px 0", borderBottom: "1px solid rgba(242,228,200,0.08)" }}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{ display: "block", marginTop: "16px", backgroundColor: "#7A9E7E", color: "#2C3A2E", padding: "12px 0", borderRadius: "4px", textDecoration: "none", fontSize: "14px", fontWeight: 700, textAlign: "center" }}>Book a Call</a>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
