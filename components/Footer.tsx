"use client";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1E2920", color: "rgba(242,228,200,0.38)", textAlign: "center", padding: "32px 5%", fontSize: "0.82rem", fontFamily: "'Inter',sans-serif" }}>
      <p><strong style={{ color: "rgba(242,228,200,0.7)" }}>Saguaro Advisory</strong> &nbsp;·&nbsp; Fractional CFO &amp; Financial Advisory for Manufacturers &amp; Distributors</p>
      <p style={{ marginTop: "8px" }}>© {new Date().getFullYear()} Saguaro Advisory. All rights reserved.</p>
    </footer>
  );
}
