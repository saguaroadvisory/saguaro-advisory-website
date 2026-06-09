"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    revenue: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — wire up to your preferred form backend (Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    backgroundColor: "rgba(237,230,214,0.06)",
    border: "1px solid rgba(237,230,214,0.2)",
    borderRadius: "4px",
    color: "#EDE6D6",
    fontSize: "15px",
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "rgba(237,230,214,0.7)",
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    fontFamily: "'Inter', sans-serif",
    marginBottom: "8px",
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#1C2B3A",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          right: "-80px",
          bottom: "-40px",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <svg width="440" height="560" viewBox="0 0 440 560" fill="none">
          <rect x="185" y="100" width="70" height="460" rx="35" fill="#EDE6D6" />
          <rect x="65" y="230" width="125" height="55" rx="27" fill="#EDE6D6" />
          <rect x="65" y="125" width="58" height="160" rx="29" fill="#EDE6D6" />
          <rect x="250" y="290" width="125" height="55" rx="27" fill="#EDE6D6" />
          <rect x="317" y="185" width="58" height="170" rx="29" fill="#EDE6D6" />
        </svg>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
          position: "relative",
          zIndex: 1,
        }}
        className="contact-grid"
      >
        {/* Left */}
        <div>
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
              Get in Touch
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#EDE6D6",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s talk about
            <br />
            your business.
          </h2>
          <p
            style={{
              color: "rgba(237,230,214,0.7)",
              fontSize: "16px",
              lineHeight: 1.8,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              marginBottom: "48px",
            }}
          >
            We work with manufacturing, distribution, and construction companies in the $10M–$100M range.
            If that&apos;s you, let&apos;s schedule a free 30-minute call to see if we&apos;re a fit.
          </p>

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2 4a1 1 0 011-1h14a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" stroke="#B87333" strokeWidth="1.5" />
                    <path d="M2 4l8 7 8-7" stroke="#B87333" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                label: "hello@saguaroadvisory.com",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5z" stroke="#B87333" strokeWidth="1.5" />
                    <circle cx="10" cy="7" r="2" stroke="#B87333" strokeWidth="1.5" />
                  </svg>
                ),
                label: "Phoenix, AZ (serving clients nationally)",
              },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <div style={{ marginTop: "1px", flexShrink: 0 }}>{item.icon}</div>
                <span
                  style={{
                    color: "rgba(237,230,214,0.75)",
                    fontSize: "15px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div>
          {submitted ? (
            <div
              style={{
                backgroundColor: "rgba(184,115,51,0.1)",
                border: "1px solid rgba(184,115,51,0.4)",
                borderRadius: "8px",
                padding: "48px 40px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>✓</div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#EDE6D6",
                  fontSize: "24px",
                  marginBottom: "12px",
                }}
              >
                Message received.
              </h3>
              <p style={{ color: "rgba(237,230,214,0.7)", fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
                We&apos;ll be in touch within one business day to schedule your free consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#B87333")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(237,230,214,0.2)")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Company</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#B87333")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(237,230,214,0.2)")}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#B87333")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(237,230,214,0.2)")}
                />
              </div>

              <div>
                <label style={labelStyle}>Annual Revenue</label>
                <select
                  name="revenue"
                  required
                  value={form.revenue}
                  onChange={handleChange}
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#B87333")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(237,230,214,0.2)")}
                >
                  <option value="" disabled style={{ backgroundColor: "#1C2B3A" }}>Select range</option>
                  <option value="under-10m" style={{ backgroundColor: "#1C2B3A" }}>Under $10M</option>
                  <option value="10-25m" style={{ backgroundColor: "#1C2B3A" }}>$10M – $25M</option>
                  <option value="25-50m" style={{ backgroundColor: "#1C2B3A" }}>$25M – $50M</option>
                  <option value="50-100m" style={{ backgroundColor: "#1C2B3A" }}>$50M – $100M</option>
                  <option value="over-100m" style={{ backgroundColor: "#1C2B3A" }}>Over $100M</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>What are you working through? (optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your biggest financial challenge right now..."
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#B87333")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(237,230,214,0.2)")}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  backgroundColor: loading ? "rgba(184,115,51,0.5)" : "#B87333",
                  color: "#EDE6D6",
                  padding: "16px 32px",
                  borderRadius: "4px",
                  border: "none",
                  fontSize: "15px",
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.03em",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.backgroundColor = "#C8864A"; }}
                onMouseLeave={(e) => { if (!loading) e.currentTarget.style.backgroundColor = "#B87333"; }}
              >
                {loading ? "Sending..." : "Request a Free Consultation"}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
