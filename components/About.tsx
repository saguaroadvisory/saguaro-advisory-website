"use client";
export default function About() {
  const credentials = [
    "Certified Public Accountant (CPA)",
    "10+ years in manufacturing, construction & distribution",
    "ERP implementation & process automation",
    "M&A due diligence & transaction advisory",
    "Lender and investor reporting packages",
  ];

  return (
    <section
      id="about"
      style={{
        backgroundColor: "#1C2B3A",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background cactus */}
      <div
        style={{
          position: "absolute",
          left: "-60px",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <svg width="400" height="520" viewBox="0 0 400 520" fill="none">
          <rect x="170" y="80" width="60" height="440" rx="30" fill="#EDE6D6" />
          <rect x="60" y="200" width="115" height="50" rx="25" fill="#EDE6D6" />
          <rect x="60" y="110" width="50" height="145" rx="25" fill="#EDE6D6" />
          <rect x="225" y="260" width="115" height="50" rx="25" fill="#EDE6D6" />
          <rect x="290" y="160" width="50" height="165" rx="25" fill="#EDE6D6" />
        </svg>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="about-grid"
      >
        {/* Left: Text */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <div style={{ width: "32px", height: "2px", backgroundColor: "#B87333" }} />
            <span
              style={{
                color: "#B87333",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              About
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#EDE6D6",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            A finance partner who
            <br />
            has worked in your world.
          </h2>

          <p
            style={{
              color: "rgba(237,230,214,0.75)",
              fontSize: "16px",
              lineHeight: 1.8,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              marginBottom: "24px",
            }}
          >
            Saguaro Advisory was founded by a CPA with over a decade of hands-on experience inside
            manufacturing, construction, and distribution companies — not just advising them from the outside.
          </p>
          <p
            style={{
              color: "rgba(237,230,214,0.75)",
              fontSize: "16px",
              lineHeight: 1.8,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              marginBottom: "40px",
            }}
          >
            That means we understand the unique pressures of managing inventory turns, job cost overruns,
            seasonal cash crunches, and the operational detail that drives financial outcomes. We&apos;ve built
            reporting systems, led ERP implementations, and closed the books under pressure — so we know
            what actually works.
          </p>

          {/* Credentials */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {credentials.map((c) => (
              <div key={c} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#B87333",
                    marginTop: "7px",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    color: "rgba(237,230,214,0.85)",
                    fontSize: "15px",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual card */}
        <div>
          <div
            style={{
              backgroundColor: "rgba(237,230,214,0.05)",
              border: "1px solid rgba(184,115,51,0.3)",
              borderRadius: "8px",
              padding: "48px 40px",
            }}
          >
            {/* Decorative cactus SVG */}
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="33" y="25" width="14" height="75" rx="7" fill="#B87333" fillOpacity="0.6" />
                <rect x="10" y="42" width="28" height="12" rx="6" fill="#B87333" fillOpacity="0.6" />
                <rect x="10" y="28" width="13" height="30" rx="6.5" fill="#B87333" fillOpacity="0.6" />
                <rect x="42" y="52" width="28" height="12" rx="6" fill="#B87333" fillOpacity="0.6" />
                <rect x="57" y="38" width="13" height="30" rx="6.5" fill="#B87333" fillOpacity="0.6" />
              </svg>
            </div>

            <blockquote
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#EDE6D6",
                fontSize: "20px",
                fontStyle: "italic",
                lineHeight: 1.6,
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              &ldquo;The best fractional CFOs don&apos;t just read the numbers — they understand the operations behind them.&rdquo;
            </blockquote>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(184,115,51,0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#B87333",
                  fontWeight: 600,
                  fontSize: "14px",
                  letterSpacing: "0.04em",
                }}
              >
                Saguaro Advisory
              </div>
              <div
                style={{
                  color: "rgba(237,230,214,0.5)",
                  fontSize: "13px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Fractional CFO · CPA
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
