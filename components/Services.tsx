"use client";
const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 8h24M4 16h24M4 24h16" stroke="#B87333" strokeWidth="2" strokeLinecap="round" />
        <circle cx="26" cy="24" r="4" stroke="#B87333" strokeWidth="2" />
        <path d="M26 22v2l1.5 1.5" stroke="#B87333" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Fractional CFO",
    description:
      "Strategic financial leadership on a part-time basis. We sit in the CFO seat — attending leadership meetings, advising on capital decisions, and building the financial infrastructure your business needs to scale.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="3" stroke="#B87333" strokeWidth="2" />
        <path d="M10 20l4-6 4 4 4-8" stroke="#B87333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Monthly Reporting",
    description:
      "Clean, consistent financial packages delivered every month — P&L, balance sheet, cash flow, and KPI dashboards built around the metrics that actually drive decisions in your operation.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 24V14M14 24V10M20 24V16M26 24V8" stroke="#B87333" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 6l6 6 6-4 8 4" stroke="#B87333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Process Automation",
    description:
      "We identify manual, error-prone workflows in your finance function and replace them with automated systems — reducing close time, improving accuracy, and freeing your team to focus on higher-value work.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#B87333" strokeWidth="2" />
        <path d="M16 8v8l5 3" stroke="#B87333" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 5l2 3M23 5l-2 3" stroke="#B87333" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Industry Expertise",
    description:
      "Deep operational knowledge in manufacturing, distribution, and construction. We understand job costing, inventory valuation, working capital cycles, and the metrics lenders and buyers actually care about.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="18" width="6" height="10" rx="1" fill="#B87333" fillOpacity="0.3" stroke="#B87333" strokeWidth="1.5" />
        <rect x="13" y="12" width="6" height="16" rx="1" fill="#B87333" fillOpacity="0.3" stroke="#B87333" strokeWidth="1.5" />
        <rect x="22" y="6" width="6" height="22" rx="1" fill="#B87333" fillOpacity="0.3" stroke="#B87333" strokeWidth="1.5" />
        <path d="M7 14l6-4 6 2 6-8" stroke="#B87333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Forecasting & Budgeting",
    description:
      "Rolling 12-month forecasts and annual budgets that reflect how your business actually works — including seasonal demand, production capacity, and supply chain realities. Built to update as conditions change.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 26l6-8 5 4 5-6 4 4" stroke="#B87333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="8" r="3" stroke="#B87333" strokeWidth="2" />
        <circle cx="26" cy="8" r="3" stroke="#B87333" strokeWidth="2" />
        <path d="M9 8h14" stroke="#B87333" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Transaction Readiness",
    description:
      "Preparing for a sale, acquisition, or capital raise? We clean up your books, normalize EBITDA, build the financial models buyers expect, and manage the data room — so you maximize value and minimize surprises.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "#EDE6D6",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section header */}
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
              What We Do
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1C2B3A",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Financial leadership built
            <br />
            for operators.
          </h2>
          <p
            style={{
              color: "rgba(28,43,58,0.7)",
              fontSize: "17px",
              lineHeight: 1.7,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
            }}
          >
            Every engagement is tailored to where your business is and where you&apos;re headed. No cookie-cutter packages.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2px",
            backgroundColor: "rgba(28,43,58,0.1)",
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                backgroundColor: "#EDE6D6",
                padding: "40px 36px",
                transition: "background-color 0.25s",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E4D9C3")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDE6D6")}
            >
              <div style={{ marginBottom: "20px" }}>{s.icon}</div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#1C2B3A",
                  fontSize: "22px",
                  fontWeight: 600,
                  marginBottom: "12px",
                  lineHeight: 1.2,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  color: "rgba(28,43,58,0.7)",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                }}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
