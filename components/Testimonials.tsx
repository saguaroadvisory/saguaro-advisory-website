const testimonials = [
  {
    quote:
      "Before Saguaro, our monthly close took 3 weeks and we still weren't confident in the numbers. Now it takes 5 days and we actually use the reports to run the business. The visibility into our distribution margins changed how we price.",
    name: "Operations Director",
    company: "Regional Distribution Company",
    industry: "Distribution",
    revenue: "$28M revenue",
  },
  {
    quote:
      "We were heading into an acquisition and our books were a mess. The Saguaro team cleaned everything up, built the financial model the buyer needed, and helped us get to close six weeks faster than we expected. The EBITDA normalization work alone paid for itself.",
    name: "Owner",
    company: "Precision Manufacturing Co.",
    industry: "Manufacturing",
    revenue: "$45M revenue",
  },
  {
    quote:
      "Job costing in construction is brutal to get right. Saguaro understood our WIP schedules and overbilling exposure from day one — they didn't need a three-month onboarding. Our banker now calls our financials 'the cleanest in our portfolio.'",
    name: "CFO",
    company: "Commercial Construction Group",
    industry: "Construction",
    revenue: "$62M revenue",
  },
];

export default function Testimonials() {
  return (
    <section
      id="results"
      style={{
        backgroundColor: "#EDE6D6",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "64px", maxWidth: "600px" }}>
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
              Client Results
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1C2B3A",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Built for operators.
            <br />
            Proven in the field.
          </h2>
        </div>

        {/* Testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                backgroundColor: "#1C2B3A",
                borderRadius: "6px",
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Industry tag */}
              <div
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                  backgroundColor: "rgba(184,115,51,0.15)",
                  border: "1px solid rgba(184,115,51,0.3)",
                  borderRadius: "3px",
                  padding: "4px 10px",
                  color: "#B87333",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {t.industry}
              </div>

              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#B87333",
                  fontSize: "64px",
                  lineHeight: 0.8,
                  marginBottom: "16px",
                  opacity: 0.6,
                }}
              >
                &ldquo;
              </div>

              <blockquote
                style={{
                  color: "rgba(237,230,214,0.85)",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  flex: 1,
                  marginBottom: "32px",
                  fontStyle: "italic",
                }}
              >
                {t.quote}
              </blockquote>

              {/* Attribution */}
              <div style={{ borderTop: "1px solid rgba(237,230,214,0.1)", paddingTop: "20px" }}>
                <div
                  style={{
                    color: "#EDE6D6",
                    fontWeight: 500,
                    fontSize: "14px",
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: "4px",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    color: "rgba(237,230,214,0.5)",
                    fontSize: "13px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {t.company} · {t.revenue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
