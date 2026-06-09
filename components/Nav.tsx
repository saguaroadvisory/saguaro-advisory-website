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
      backgroundColor: "rgba(28,43,58,0.97)",
      backdropFilter: "blur(8px)",
      transition: "box-shadow 0.3s ease",
      boxShadow: scrolled ? "0 1px 0 rgba(184,115,51,0.25)" : "none",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto", padding: "0 40px",
        height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          {/* Refined saguaro icon — geometric, minimal */}
          <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Base / pot hint */}
            <rect x="10" y="30" width="8" height="4" rx="1" fill="#B87333" opacity="0.5"/>
            {/* Main trunk */}
            <rect x="11.5" y="6" width="5" height="26" rx="2.5" fill="#B87333"/>
            {/* Left arm — horizontal connector then upright */}
            <rect x="4" y="15" width="9" height="3.5" rx="1.75" fill="#B87333"/>
            <rect x="4" y="9" width="3.5" height="10" rx="1.75" fill="#B87333"/>
            {/* Right arm */}
            <rect x="15" y="19" width="9" height="3.5" rx="1.75" fill="#B87333"/>
            <rect x="20.5" y="13" width="3.5" height="10" rx="1.75" fill="#B87333"/>
          </svg>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F6F2EA", fontSize: "17px", fontWeight: 600,
              letterSpacing: "0.01em", lineHeight: 1,
            }}>
              Saguaro
            </span>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              color: "#B87333", fontSize: "9.5px", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase", lineHeight: 1,
            }}>
              Advisory
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }} className="desktop-nav">
          {links.map((l) => (
            <a key={l.label} href={l.href} style={{
              color: "rgba(255,255,255,0.72)", textDecoration: "none",
              fontSize: "13.5px", fontWeight: 500, letterSpacing: "0.04em",
              transition: "color 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
            >{l.label}</a>
          ))}
          <a href="#contact" style={{
            backgroundColor: "#B87333", color: "#fff",
            padding: "8px 20px", borderRadius: "4px", textDecoration: "none",
            fontSize: "13.5px", fontWeight: 600, letterSpacing: "0.04em",
            transition: "background-color 0.2s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C8864A")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#B87333")}
          >
            Book a Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
          className="mobile-menu-btn" aria-label="Toggle menu">
          {[0,1,2].map(i => (
            <div key={i} style={{ width: "22px", height: "1.5px", backgroundColor: "#EDE6D6", margin: "5px 0" }} />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: "#1C2B3A", borderTop: "1px solid rgba(184,115,51,0.25)", padding: "12px 32px 24px" }} className="mobile-menu">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", color: "rgba(255,255,255,0.8)", textDecoration: "none",
              fontSize: "15px", fontWeight: 500, padding: "12px 0",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            display: "block", marginTop: "16px", backgroundColor: "#B87333",
            color: "#fff", padding: "12px 0", borderRadius: "4px",
            textDecoration: "none", fontSize: "14px", fontWeight: 600, textAlign: "center",
          }}>Book a Call</a>
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
