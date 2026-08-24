"use client";
import { useEffect, useState } from "react";

const BOOKING_URL = "https://calendar.app.google/bsA7iCTALPAYhJUZ6";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setVisible(scrolled > 0.35);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (dismissed || !visible) return null;

  return (
    <div
      role="complementary"
      aria-label="Book a call"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "#2C3A2E",
        borderTop: "1px solid rgba(122,158,126,0.3)",
        padding: "14px 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.25)",
        animation: "slideUp 0.25s ease-out",
      }}
    >
      <style>{`@keyframes slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>

      <p style={{
        margin: 0,
        color: "rgba(242,228,200,0.82)",
        fontSize: "0.9rem",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 300,
      }}>
        <span style={{ color: "#F2E4C8", fontWeight: 600 }}>Wondering if a fractional CFO is right for you?</span>
        {" "}Find out in 30 minutes — no obligation.
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "sticky_bar_cta_click", { event_category: "conversion" });
            }
          }}
          style={{
            display: "inline-block",
            backgroundColor: "#7A9E7E",
            color: "#2C3A2E",
            textDecoration: "none",
            padding: "10px 22px",
            borderRadius: "4px",
            fontWeight: 700,
            fontSize: "0.875rem",
            letterSpacing: "0.02em",
            fontFamily: "'Inter', sans-serif",
            whiteSpace: "nowrap",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F2E4C8"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#7A9E7E"; }}
        >
          Book a Free 30-Min Call
        </a>

        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "rgba(242,228,200,0.4)",
            padding: "4px",
            display: "flex",
            alignItems: "center",
            lineHeight: 1,
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(242,228,200,0.8)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(242,228,200,0.4)"; }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="2" y1="2" x2="14" y2="14"/><line x1="14" y1="2" x2="2" y2="14"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
