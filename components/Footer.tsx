"use client";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#111D27",
        borderTop: "1px solid rgba(184,115,51,0.2)",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: "320px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <svg width="26" height="32" viewBox="0 0 32 40" fill="none">
                <rect x="13" y="28" width="6" height="12" rx="3" fill="#B87333" />
                <rect x="13" y="8" width="6" height="24" rx="3" fill="#B87333" />
                <rect x="4" y="14" width="10" height="5" rx="2.5" fill="#B87333" />
                <rect x="4" y="10" width="5" height="9" rx="2.5" fill="#B87333" />
                <rect x="18" y="18" width="10" height="5" rx="2.5" fill="#B87333" />
                <rect x="23" y="14" width="5" height="9" rx="2.5" fill="#B87333" />
              </svg>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", color: "#EDE6D6", fontSize: "17px", fontWeight: 600, lineHeight: 1.1 }}>
                  Saguaro Advisory
                </div>
                <div style={{ color: "#B87333", fontSize: "11px", letterSpacing: "0.12em", fontFamily: "'Inter', sans-serif", textTransform: "uppercase" }}>
                  Fractional CFO
                </div>
              </div>
            </div>
            <p
              style={{
                color: "rgba(237,230,214,0.45)",
                fontSize: "14px",
                lineHeight: 1.7,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
              }}
            >
              CFO-level financial leadership for manufacturing, distribution, and construction companies.
            </p>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
            <div>
              <div
                style={{
                  color: "rgba(237,230,214,0.5)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "16px",
                }}
              >
                Company
              </div>
              {[
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Results", href: "#results" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    display: "block",
                    color: "rgba(237,230,214,0.6)",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: "10px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#EDE6D6")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(237,230,214,0.6)")}
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div>
              <div
                style={{
                  color: "rgba(237,230,214,0.5)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "16px",
                }}
              >
                Industries
              </div>
              {["Manufacturing", "Distribution", "Construction"].map((l) => (
                <div
                  key={l}
                  style={{
                    color: "rgba(237,230,214,0.6)",
                    fontSize: "14px",
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: "10px",
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(237,230,214,0.08)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div
            style={{
              color: "rgba(237,230,214,0.3)",
              fontSize: "13px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            © {currentYear} Saguaro Advisory. All rights reserved.
          </div>
          <div
            style={{
              color: "rgba(237,230,214,0.3)",
              fontSize: "13px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Phoenix, AZ
          </div>
        </div>
      </div>
    </footer>
  );
}
