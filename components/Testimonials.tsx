"use client";

const results = [
  { tag: "Distribution · $35M Revenue", quote: "We went from a 3-week close to 5 business days. For the first time, we had numbers before the month felt stale.", detail: "Close cycle reduction · Reporting automation · KPI dashboard" },
  { tag: "Manufacturing · $58M Revenue", quote: "The product margin analysis showed us two product lines that were actually losing money. We repriced within 60 days.", detail: "COGS deep-dive · Margin by product line · Pricing model" },
  { tag: "Contract Manufacturer · $22M Revenue", quote: "Our bank asked for a 13-week cash forecast during a line renewal. We had it ready in 48 hours. The renewal went smoothly.", detail: "Cash forecasting · Lender package prep · Covenant tracking" },
];

export default function Testimonials() {
  return (
    <section id="results" style={{ padding: "96px 5%", backgroundColor: "#2C3A2E" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "12px", fontFamily: "'Inter',sans-serif" }}>Client Results</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 700, color: "#F2E4C8", lineHeight: 1.2, marginBottom: "16px" }}>What better financials look like in practice</h2>
        <p style={{ fontSize: "1.05rem", color: "rgba(242,228,200,0.55)", maxWidth: "560px", lineHeight: 1.75, marginBottom: "56px", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>Every engagement is different. Here&apos;s what clients typically experience within the first few months.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px" }}>
          {results.map((r) => (
            <div key={r.tag} style={{ backgroundColor: "rgba(242,228,200,0.05)", border: "1px solid rgba(122,158,126,0.2)", borderRadius: "10px", padding: "36px 32px" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "16px", fontFamily: "'Inter',sans-serif" }}>{r.tag}</div>
              <blockquote style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.05rem", color: "#F2E4C8", lineHeight: 1.6, marginBottom: "20px", fontStyle: "italic" }}>&ldquo;{r.quote}&rdquo;</blockquote>
              <div style={{ fontSize: "0.78rem", color: "rgba(242,228,200,0.35)", letterSpacing: "0.04em", fontFamily: "'Inter',sans-serif" }}>{r.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
