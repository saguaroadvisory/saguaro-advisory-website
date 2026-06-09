"use client";
export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: "#1C2B3A",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "72px",
      }}
    >
      {/* Saguaro silhouette background */}
      <div
        style={{
          position: "absolute",
          right: "-40px",
          bottom: 0,
          opacity: 0.06,
          pointerEvents: "none",
        }}
      >
        <svg width="520" height="680" viewBox="0 0 520 680" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main trunk */}
          <rect x="220" y="120" width="80" height="560" rx="40" fill="#EDE6D6" />
          {/* Left arm lower */}
          <rect x="80" y="280" width="145" height="60" rx="30" fill="#EDE6D6" />
          {/* Left arm upper */}
          <rect x="80" y="140" width="65" height="205" rx="32" fill="#EDE6D6" />
          {/* Right arm lower */}
          <rect x="295" y="340" width="145" height="60" rx="30" fill="#EDE6D6" />
          {/* Right arm upper */}
          <rect x="375" y="200" width="65" height="220" rx="32" fill="#EDE6D6" />
          {/* Left small arm */}
          <rect x="60" y="230" width="90" height="55" rx="27" fill="#EDE6D6" />
          {/* Right small arm */}
          <rect x="370" y="290" width="90" height="55" rx="27" fill="#EDE6D6" />
        </svg>
      </div>

      {/* Subtle gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 30% 50%, rgba(184,115,51,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: "720px" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "28px",
            }}
          >
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
              Fractional CFO Services
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#EDE6D6",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "28px",
              letterSpacing: "-0.02em",
            }}
          >
            The financial clarity
            <br />
            <em style={{ fontStyle: "italic", color: "#B87333" }}>your operation</em>
            <br />
            actually needs.
          </h1>

          {/* Subhead */}
          <p
            style={{
              color: "rgba(237,230,214,0.75)",
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.7,
              marginBottom: "44px",
              maxWidth: "580px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
            }}
          >
            CFO-level financial leadership — without the full-time overhead. We partner with manufacturing
            and distribution companies to sharpen reporting, build reliable forecasts, and drive the process
            improvements that protect your margins.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "72px" }}>
            <a
              href="#contact"
              style={{
                backgroundColor: "#B87333",
                color: "#EDE6D6",
                padding: "16px 32px",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.03em",
                transition: "background-color 0.2s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#C8864A";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#B87333";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Book a Free Consultation
            </a>
            <a
              href="#services"
              style={{
                border: "1.5px solid rgba(237,230,214,0.4)",
                color: "#EDE6D6",
                padding: "16px 32px",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "0.03em",
                transition: "border-color 0.2s, background-color 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(237,230,214,0.8)";
                e.currentTarget.style.backgroundColor = "rgba(237,230,214,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(237,230,214,0.4)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "48px",
              flexWrap: "wrap",
              paddingTop: "40px",
              borderTop: "1px solid rgba(237,230,214,0.15)",
            }}
          >
            {[
              { value: "10+", label: "Years of Experience" },
              { value: "$100M+", label: "Revenue Managed" },
              { value: "3", label: "Industries Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#B87333",
                    fontSize: "clamp(28px, 4vw, 40px)",
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    color: "rgba(237,230,214,0.6)",
                    fontSize: "13px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.4,
        }}
      >
        <span style={{ color: "#EDE6D6", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>Scroll</span>
        <div style={{ width: "1px", height: "40px", backgroundColor: "#EDE6D6" }} />
      </div>
    </section>
  );
}
