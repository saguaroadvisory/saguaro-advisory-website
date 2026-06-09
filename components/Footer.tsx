"use client";

export default function Footer() {
  return (
    <footer style={{ backgroundColor:"#1C2B3A",color:"rgba(255,255,255,0.42)",textAlign:"center",padding:"32px 5%",fontSize:"0.82rem",fontFamily:"'Inter',sans-serif" }}>
      <p><strong style={{ color:"rgba(255,255,255,0.72)" }}>Saguaro Advisory</strong> &nbsp;·&nbsp; Fractional CFO &amp; Financial Advisory for Manufacturers &amp; Distributors</p>
      <p style={{ marginTop:"8px" }}>© {new Date().getFullYear()} Saguaro Advisory. All rights reserved.</p>
    </footer>
  );
}
