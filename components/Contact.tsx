"use client";
import { useState } from "react";

declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

const BOOKING_URL = "https://calendar.app.google/bsA7iCTALPAYhJUZ6";
// Web3Forms access key — get yours free at https://web3forms.com
const WEB3FORMS_KEY = "b7ba388d-b205-4f56-b1ea-03b49b24e4a8";

function gtagSendEvent(url: string) {
  const callback = () => { window.location.href = url; };
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion_event_book_appointment", {
      event_callback: callback,
      event_timeout: 2000,
    });
    window.gtag("event", "book_call", {
      event_callback: callback,
      event_timeout: 2000,
    });
  } else {
    callback();
  }
  return false;
}

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New inquiry from ${formData.name} — ${formData.company}`,
          from_name: "Saguaro Advisory Website",
          ...formData,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setFormState("success");
        setFormData({ name: "", company: "", email: "", message: "" });
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "contact_form_submit", {
            event_category: "conversion",
            event_label: "Contact Form",
          });
        }
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "4px",
    border: "1px solid #C8BFA8",
    backgroundColor: "#fff",
    fontSize: "0.9rem",
    color: "#2C3A2E",
    fontFamily: "'Inter',sans-serif",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.15s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#5E7A60",
    marginBottom: "6px",
    fontFamily: "'Inter',sans-serif",
  };

  return (
    <section id="contact" style={{ backgroundColor: "#F2EDE3", padding: "96px 5%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "12px", fontFamily: "'Inter',sans-serif" }}>Get Started</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 700, color: "#2C3A2E", lineHeight: 1.2, marginBottom: "16px" }}>
            Not sure if it&apos;s the right fit?<br />Let&apos;s find out in 30 minutes.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#5E7A60", maxWidth: "540px", lineHeight: 1.75, margin: "0 auto", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>
            Book a call directly, or send a message and we&apos;ll get back to you within one business day.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "48px", alignItems: "start" }}>

          {/* Left — Book a call */}
          <div style={{ backgroundColor: "#2C3A2E", borderRadius: "10px", padding: "48px 40px" }}>
            <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "16px", fontFamily: "'Inter',sans-serif" }}>Book a call</p>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 700, color: "#F2E4C8", lineHeight: 1.25, marginBottom: "20px" }}>
              30 minutes.<br />No pressure.
            </h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(242,228,200,0.6)", lineHeight: 1.75, marginBottom: "32px", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>
              We&apos;ll talk through where your financials stand, what&apos;s not working, and whether Saguaro Advisory is the right fit. If it&apos;s not, we&apos;ll tell you.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
              {[
                "Understand your current finance function",
                "Identify your most pressing gaps",
                "Walk through how an engagement works",
                "No obligation, no sales pitch",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.875rem", color: "rgba(242,228,200,0.65)", fontFamily: "'Inter',sans-serif" }}>
                  <span style={{
                    width: "16px", height: "16px", minWidth: "16px",
                    backgroundColor: "#7A9E7E", borderRadius: "50%", marginTop: "2px",
                    display: "inline-block",
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%232C3A2E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='3 8 6.5 11.5 13 4'/%3E%3C/svg%3E\")",
                    backgroundSize: "contain",
                  }} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={BOOKING_URL}
              onClick={(e) => { e.preventDefault(); gtagSendEvent(BOOKING_URL); }}
              style={{ display: "inline-block", backgroundColor: "#7A9E7E", color: "#2C3A2E", textDecoration: "none", padding: "14px 30px", borderRadius: "4px", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.02em", transition: "background-color 0.2s,transform 0.15s" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F2E4C8"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#7A9E7E"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Book a Discovery Call
            </a>
          </div>

          {/* Right — Contact form */}
          <div style={{ backgroundColor: "#fff", borderRadius: "10px", padding: "48px 40px", border: "1px solid #D9CFBA" }}>
            <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "16px", fontFamily: "'Inter',sans-serif" }}>Send a message</p>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 700, color: "#2C3A2E", lineHeight: 1.25, marginBottom: "8px" }}>
              Not ready to book?<br />That&apos;s fine too.
            </h3>
            <p style={{ fontSize: "0.875rem", color: "#5E7A60", lineHeight: 1.7, marginBottom: "32px", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>
              Leave a message and we&apos;ll follow up within one business day.
            </p>

            {formState === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: "#F2EDE3", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#7A9E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "#2C3A2E", marginBottom: "8px" }}>Message received.</p>
                <p style={{ fontSize: "0.875rem", color: "#5E7A60", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>We&apos;ll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label htmlFor="cf-name" style={labelStyle}>Name</label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#7A9E7E"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#C8BFA8"; }}
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-company" style={labelStyle}>Company</label>
                    <input
                      id="cf-company"
                      name="company"
                      type="text"
                      placeholder="Acme Manufacturing"
                      value={formData.company}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#7A9E7E"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#C8BFA8"; }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="cf-email" style={labelStyle}>Email</label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#7A9E7E"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#C8BFA8"; }}
                  />
                </div>
                <div>
                  <label htmlFor="cf-message" style={labelStyle}>What&apos;s on your mind?</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    required
                    placeholder="Tell us briefly about your business and what you're trying to solve..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#7A9E7E"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#C8BFA8"; }}
                  />
                </div>
                {formState === "error" && (
                  <p style={{ fontSize: "0.85rem", color: "#B94040", fontFamily: "'Inter',sans-serif", margin: 0 }}>
                    Something went wrong — please try again or email us directly at{" "}
                    <a href="mailto:adrian@saguaroadvisory.com" style={{ color: "#B94040" }}>adrian@saguaroadvisory.com</a>.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  style={{
                    backgroundColor: formState === "submitting" ? "#5E7A60" : "#2C3A2E",
                    color: "#F2E4C8",
                    border: "none",
                    padding: "14px 30px",
                    borderRadius: "4px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "0.02em",
                    cursor: formState === "submitting" ? "not-allowed" : "pointer",
                    fontFamily: "'Inter',sans-serif",
                    transition: "background-color 0.2s,transform 0.15s",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => { if (formState !== "submitting") { e.currentTarget.style.backgroundColor = "#7A9E7E"; e.currentTarget.style.color = "#2C3A2E"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
                  onMouseLeave={(e) => { if (formState !== "submitting") { e.currentTarget.style.backgroundColor = "#2C3A2E"; e.currentTarget.style.color = "#F2E4C8"; e.currentTarget.style.transform = "translateY(0)"; } }}
                >
                  {formState === "submitting" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
