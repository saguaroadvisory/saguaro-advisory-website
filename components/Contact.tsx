"use client";

declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, string>) => void;
  }
}

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: "#F2EDE3", textAlign: "center", padding: "96px 5%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "12px", fontFamily: "'Inter',sans-serif" }}>Get Started</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 700, color: "#2C3A2E", lineHeight: 1.2, marginBottom: "16px", maxWidth: "640px", margin: "0 auto 16px" }}>
          Not sure if it&apos;s the right fit?<br/>Let&apos;s find out in 30 minutes.
        </h2>
        <p style={{ fontSize: "1.05rem", color: "#5E7A60", maxWidth: "540px", lineHeight: 1.75, margin: "0 auto 40px", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>
          A discovery call is no-pressure. We&apos;ll talk through where your financials stand and whether Saguaro Advisory makes sense for your business.
        </p>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="https://calendar.app.google/bsA7iCTALPAYhJUZ6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "book_call", {
                  event_category: "conversion",
                  event_label: "Book a Discovery Call",
                });
              }
            }}
            style={{ display: "inline-block", backgroundColor: "#7A9E7E", color: "#2C3A2E", textDecoration: "none", padding: "16px 36px", borderRadius: "4px", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.02em", transition: "background-color 0.2s,transform 0.15s" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#5E7A60"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#7A9E7E"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Book a Discovery Call
          </a>
          <a
            href="mailto:adrian@saguaroadvisory.com?subject=Services%20Inquiry"
            onClick={() => {
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "email_us", {
                  event_category: "conversion",
                  event_label: "Email Us",
                });
              }
            }}
            style={{ display: "inline-block", border: "1.5px solid #7A9E7E", color: "#2C3A2E", textDecoration: "none", padding: "16px 36px", borderRadius: "4px", fontWeight: 600, fontSize: "1rem", letterSpacing: "0.02em", transition: "background-color 0.2s,border-color 0.2s,transform 0.15s" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(122,158,126,0.1)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
