"use client";

const tags = ["Manufacturing","Distribution","Financial Reporting","Process Automation","Job Costing","Inventory Accounting"];
const creds = ["10+ years in public accounting & industry","Hands-on experience from the plant floor to the board room"];
const diffs = [
  { label: "Industry-specific expertise", detail: "Deep background in manufacturing, construction, and distribution accounting." },
  { label: "Built for efficiency", detail: "Led process automation initiatives that cut close cycles and reporting overhead. Your team's time matters." },
  { label: "No jargon, no fluff", detail: "Straight talk about what the numbers mean and what to do about them." },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "96px 5%", backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
        {/* ── Founder card — hidden, restore by moving outside the comment block ──
        <div style={{ backgroundColor: "#2C3A2E", borderRadius: "12px", padding: "48px 40px", color: "#F2E4C8", marginBottom: "64px" }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", marginBottom: "6px" }}>Adrian Buenrostro, CPA</div>
          <div style={{ fontSize: "0.78rem", color: "#7A9E7E", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, marginBottom: "28px", fontFamily: "'Inter',sans-serif" }}>Founder · Saguaro Advisory</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px", justifyContent: "center" }}>
            {tags.map(t => (
              <span key={t} style={{ backgroundColor: "rgba(122,158,126,0.12)", border: "1px solid rgba(122,158,126,0.25)", color: "rgba(242,228,200,0.75)", padding: "5px 12px", borderRadius: "4px", fontSize: "0.75rem", fontFamily: "'Inter',sans-serif" }}>{t}</span>
            ))}
          </div>
          {creds.map(c => (
            <div key={c} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "rgba(242,228,200,0.6)", fontSize: "0.85rem", marginBottom: "12px", fontFamily: "'Inter',sans-serif", justifyContent: "center" }}>
              <span style={{ width: "6px", height: "6px", backgroundColor: "#7A9E7E", borderRadius: "50%", marginTop: "7px", flexShrink: 0, display: "inline-block" }}/>
              {c}
            </div>
          ))}
        </div>
        ── end founder card ── */}

        <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "12px", fontFamily: "'Inter',sans-serif" }}>About</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 700, color: "#2C3A2E", lineHeight: 1.2, marginBottom: "20px" }}>A CFO who speaks your language</h2>
        <p style={{ fontSize: "1.0rem", color: "#5E7A60", lineHeight: 1.8, marginBottom: "20px", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>
          Most financial advisors understand spreadsheets. Fewer understand what happens when a job runs over, a supplier raises prices mid-quarter, or a distribution customer suddenly stretches payment terms to 60 days.
        </p>
        <p style={{ fontSize: "1.0rem", color: "#5E7A60", lineHeight: 1.8, marginBottom: "48px", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>
          With over a decade working inside manufacturing and distribution companies, Saguaro Advisory brings CFO-level thinking that&apos;s grounded in how these businesses actually work.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "left" }}>
          {diffs.map(d => (
            <div key={d.label} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", color: "#7A9E7E", lineHeight: 1, minWidth: "20px" }}>—</div>
              <div>
                <strong style={{ display: "block", fontSize: "0.875rem", color: "#2C3A2E", fontWeight: 600, marginBottom: "3px", fontFamily: "'Inter',sans-serif" }}>{d.label}</strong>
                <span style={{ fontSize: "0.84rem", color: "#5E7A60", fontFamily: "'Inter',sans-serif", lineHeight: 1.6 }}>{d.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
