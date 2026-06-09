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
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(28,43,58,0.97)" : "#1C2B3A",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
        borderBottom: scrolled ? "1px solid rgba(184,115,51,0.3)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Saguaro cactus silhouette */}
            <rect x="13" y="28" width="6" height="12" rx="3" fill="#B87333" />
            <rect x="13" y="8" width="6" height="24" rx="3" fill="#B87333" />
            <rect x="4" y="14" width="10" height="5" rx="2.5" fill="#B87333" />
            <rect x="4" y="10" width="5" height="9" rx="2.5" fill="#B87333" />
            <rect x="18" y="18" width="10" height="5" rx="2.5" fill="#B87333" />
            <rect x="23" y="14" width="5" height="9" rx="2.5" fill="#B87333" />
          </svg>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", color: "#EDE6D6", fontSize: "18px", fontWeight: 600, lineHeight: 1.1 }}>
              Saguaro
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", color: "#B87333", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Advisory
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: "#EDE6D6",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.02em",
                opacity: 0.85,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              backgroundColor: "#B87333",
              color: "#EDE6D6",
              padding: "10px 22px",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.03em",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C8864A")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#B87333")}
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div style={{ width: "24px", height: "2px", backgroundColor: "#EDE6D6", margin: "5px 0", transition: "0.3s" }} />
          <div style={{ width: "24px", height: "2px", backgroundColor: "#EDE6D6", margin: "5px 0", transition: "0.3s" }} />
          <div style={{ width: "24px", height: "2px", backgroundColor: "#EDE6D6", margin: "5px 0", transition: "0.3s" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#1C2B3A",
            borderTop: "1px solid rgba(184,115,51,0.3)",
            padding: "16px 24px 24px",
          }}
          className="mobile-menu"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "#EDE6D6",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: 500,
                padding: "12px 0",
                borderBottom: "1px solid rgba(237,230,214,0.1)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              marginTop: "16px",
              backgroundColor: "#B87333",
              color: "#EDE6D6",
              padding: "12px 22px",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Book a Call
          </a>
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
