"use client";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", backgroundColor: "#2C3A2E",
      display: "flex", flexDirection: "column", justifyContent: "center",
      position: "relative", overflow: "hidden", padding: "100px 5% 80px",
    }}>
      {/* Background saguaro — exact path from saguaro-icon.svg, native 256×256 viewBox */}
      <svg style={{ position: "absolute", right: 0, bottom: 0, height: "100%", width: "50%", opacity: 0.07, pointerEvents: "none" }}
        viewBox="0 0 256 256" fill="#F2E4C8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax meet">
        <path d="M108,218 L108,134 C108,126 104,122 96,122 L80,122 C73,122 68,117 68,110 L68,86 C68,79 73,74 80,74 C87,74 92,79 92,86 L92,104 C92,111 97,116 104,116 L108,116 L108,78 C108,71 113,66 120,66 L136,66 C143,66 148,71 148,78 L148,116 L152,116 C159,116 164,111 164,104 L164,86 C164,79 169,74 176,74 C183,74 188,79 188,86 L188,110 C188,117 183,122 176,122 L160,122 C152,122 148,126 148,134 L148,218 Z"/>
      </svg>

      {/* Radial glow */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at 25% 55%, rgba(122,158,126,0.1) 0%, transparent 60%)" }}/>

      <div style={{ position: "relative", zIndex: 2, maxWidth: "640px" }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,4vw,2.6rem)", fontWeight: 400, color: "rgba(242,228,200,0.5)", letterSpacing: "0.08em", marginBottom: "12px" }}>
          Saguaro Advisory
        </div>
        <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "24px", fontFamily: "'Inter', sans-serif" }}>
          Fractional CFO · Financial Advisory
        </span>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 700, color: "#F2E4C8", lineHeight: 1.15, marginBottom: "28px" }}>
          The financial clarity your operation{" "}
          <em style={{ fontStyle: "normal", color: "#7A9E7E" }}>actually needs</em>
        </h1>

        <p style={{ fontSize: "1.05rem", color: "rgba(242,228,200,0.68)", maxWidth: "520px", marginBottom: "44px", lineHeight: 1.75, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          Saguaro Advisory partners with manufacturing and distribution companies with up to $100M in revenue to bring CFO-level financial leadership without the full-time overhead.
        </p>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <a href="#contact" style={{ display: "inline-block", backgroundColor: "#7A9E7E", color: "#2C3A2E", textDecoration: "none", padding: "14px 30px", borderRadius: "4px", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.02em", transition: "background-color 0.2s,transform 0.15s" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F2E4C8"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#7A9E7E"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Contact Us
          </a>
          <a href="#services" style={{ display: "inline-block", border: "1.5px solid rgba(242,228,200,0.28)", color: "rgba(242,228,200,0.82)", textDecoration: "none", padding: "14px 30px", borderRadius: "4px", fontWeight: 500, fontSize: "0.95rem", transition: "border-color 0.2s,color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(242,228,200,0.65)"; e.currentTarget.style.color = "#F2E4C8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(242,228,200,0.28)"; e.currentTarget.style.color = "rgba(242,228,200,0.82)"; }}>
            See How We Work
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ position: "absolute", bottom: "48px", left: "5%", right: "5%", display: "flex", gap: "48px", flexWrap: "wrap", borderTop: "1px solid rgba(242,228,200,0.1)", paddingTop: "32px" }}>
        {([["10+","Years in Industry"],["CPA","Licensed & Credentialed"],["$100M","Max Revenue Served"],["Mfg + Dist","Sectors We Know Cold"]] as [string,string][]).map(([num,label]) => (
          <div key={label}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, color: "#F2E4C8", lineHeight: 1 }}>{num}</div>
            <div style={{ fontSize: "0.72rem", color: "rgba(242,228,200,0.45)", letterSpacing: "0.07em", textTransform: "uppercase", marginTop: "4px", fontFamily: "'Inter', sans-serif" }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
