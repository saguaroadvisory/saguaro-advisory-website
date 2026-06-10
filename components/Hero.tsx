"use client";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", backgroundColor: "#2C3A2E",
      display: "flex", flexDirection: "column", justifyContent: "center",
      position: "relative", overflow: "hidden", padding: "100px 5% 80px",
    }}>
      {/* Background saguaro — same geometry as circle mark logo, scaled up */}
      <svg style={{ position: "absolute", right: 0, bottom: 0, height: "100%", width: "50%", opacity: 0.07, pointerEvents: "none" }}
        viewBox="0 0 400 600" fill="#F2E4C8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax meet">
        {/* Trunk — logo: x=15,y=7,w=6,h=22 scaled ×18, centered at x=200 */}
        <rect x="173" y="60"  width="54"  height="480" rx="27"/>
        {/* Left arm horizontal — logo: x=8,y=16,w=8,h=4 */}
        <rect x="65"  y="198" width="108" height="54"  rx="22"/>
        {/* Left arm vertical — logo: x=8,y=11,w=4,h=8 */}
        <rect x="65"  y="108" width="54"  height="144" rx="22"/>
        {/* Right arm horizontal — logo: x=20,y=18,w=8,h=4 */}
        <rect x="227" y="234" width="108" height="54"  rx="22"/>
        {/* Right arm vertical — logo: x=24,y=13,w=4,h=8 */}
        <rect x="281" y="144" width="54"  height="144" rx="22"/>
      </svg>

      {/* Radial glow */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at 25% 55%, rgba(122,158,126,0.1) 0%, transparent 60%)" }}/>

      <div style={{ position: "relative", zIndex: 2, maxWidth: "640px" }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1rem,2vw,1.3rem)", fontWeight: 400, color: "rgba(242,228,200,0.5)", letterSpacing: "0.08em", marginBottom: "12px" }}>
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
          Saguaro Advisory partners with manufacturing and distribution companies — $10M to $100M in revenue — to bring CFO-level financial leadership without the full-time overhead.
        </p>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <a href="#contact" style={{ display: "inline-block", backgroundColor: "#7A9E7E", color: "#2C3A2E", textDecoration: "none", padding: "14px 30px", borderRadius: "4px", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.02em", transition: "background-color 0.2s,transform 0.15s" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F2E4C8"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#7A9E7E"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Book a Discovery Call
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
