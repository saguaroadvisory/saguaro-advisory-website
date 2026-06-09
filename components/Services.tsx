"use client";

const cards = [
  {
    featured: false,
    title: "Monthly Reporting Package",
    desc: "Reliable, clean financials delivered on a defined close cycle. Built for operators who need accurate numbers without the complexity.",
    items: ["Managed month-end close process","Income statement, balance sheet & cash flow","Executive summary with key metrics","Inventory and COGS reconciliation","Monthly review call"],
    price: "Starting at $2,500 / month",
  },
  {
    featured: true,
    badge: "Most Popular",
    title: "Fractional CFO",
    desc: "Embedded financial leadership without a full-time hire. Strategic planning, cash management, lender relations, and reporting — all under one engagement.",
    items: ["Everything in Monthly Reporting","13-week cash flow forecasting","Budget vs. actual variance analysis","Product line & job margin reporting","Bank covenant management & lender prep","Dedicated weekly check-in"],
    price: "Starting at $5,500 / month",
  },
  {
    featured: false,
    title: "Advisory & Project Work",
    desc: "Focused engagements for specific challenges — ERP evaluation, financial process automation, acquisition prep, or system cleanup.",
    items: ["Financial process automation","ERP/accounting system assessment","Acquisition or sale readiness","Reporting infrastructure buildout","Lender package preparation"],
    price: "Project-based pricing",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "96px 5%", backgroundColor: "#F2EDE3" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "56px" }}>
          <div>
            <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "12px", fontFamily: "'Inter',sans-serif" }}>What We Offer</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 700, color: "#2C3A2E", lineHeight: 1.2 }}>CFO-level support,<br/>scoped to where you are</h2>
          </div>
          <p style={{ fontSize: "1.0rem", color: "#5E7A60", maxWidth: "400px", lineHeight: 1.75, fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>Engagements flex to fit your stage. Whether you need eyes on your numbers monthly or a true finance partner, there&apos;s a fit.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "28px" }}>
          {cards.map((c) => (
            <div key={c.title} style={{ backgroundColor: c.featured ? "#2C3A2E" : "#fff", borderRadius: "10px", padding: "40px 36px", border: c.featured ? "1px solid #7A9E7E" : "1px solid #D9CFBA", transition: "box-shadow 0.2s,transform 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(44,58,46,0.12)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
              {c.badge && <div style={{ display: "inline-block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: "#7A9E7E", color: "#2C3A2E", padding: "3px 10px", borderRadius: "3px", marginBottom: "20px", fontFamily: "'Inter',sans-serif" }}>{c.badge}</div>}
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.35rem", color: c.featured ? "#F2E4C8" : "#2C3A2E", marginBottom: "10px" }}>{c.title}</div>
              <p style={{ fontSize: "0.875rem", color: c.featured ? "rgba(242,228,200,0.62)" : "#5E7A60", marginBottom: "28px", lineHeight: 1.7, fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>{c.desc}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                {c.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.875rem", color: c.featured ? "rgba(242,228,200,0.62)" : "#5E7A60", fontFamily: "'Inter',sans-serif" }}>
                    <span style={{ width: "16px", height: "16px", minWidth: "16px", backgroundColor: "#7A9E7E", borderRadius: "50%", marginTop: "2px", display: "inline-block", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%232C3A2E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='3 8 6.5 11.5 13 4'/%3E%3C/svg%3E\")", backgroundSize: "contain" }}/>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.95rem", color: c.featured ? "#F2E4C8" : "#2C3A2E", fontWeight: 600, borderTop: `1px solid ${c.featured ? "rgba(242,228,200,0.14)" : "#D9CFBA"}`, paddingTop: "20px" }}>{c.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
