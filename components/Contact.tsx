"use client";

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor:"#EDE6D6",textAlign:"center",padding:"96px 5%" }}>
      <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
        <p style={{ fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",color:"#B87333",marginBottom:"12px",fontFamily:"'Inter',sans-serif" }}>Get Started</p>
        <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.9rem,3.5vw,2.8rem)",fontWeight:700,color:"#1C2B3A",lineHeight:1.2,marginBottom:"16px",maxWidth:"640px",margin:"0 auto 16px" }}>
          Not sure if it&apos;s the right fit?<br/>Let&apos;s find out in 30 minutes.
        </h2>
        <p style={{ fontSize:"1.05rem",color:"#5E7080",maxWidth:"540px",lineHeight:1.75,margin:"0 auto 40px",fontFamily:"'Inter',sans-serif",fontWeight:300 }}>
          A discovery call is no-pressure. We&apos;ll talk through where your financials stand and whether Saguaro Advisory makes sense for your business.
        </p>
        <div style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:"14px" }}>
          <a href="mailto:adrian@saguaroadvisory.com" style={{
            display:"inline-block",backgroundColor:"#B87333",color:"#fff",
            textDecoration:"none",padding:"16px 36px",borderRadius:"4px",
            fontWeight:600,fontSize:"1rem",letterSpacing:"0.02em",
            transition:"background-color 0.2s,transform 0.15s",
          }}
            onMouseEnter={(e)=>{ e.currentTarget.style.backgroundColor="#C8864A"; e.currentTarget.style.transform="translateY(-1px)"; }}
            onMouseLeave={(e)=>{ e.currentTarget.style.backgroundColor="#B87333"; e.currentTarget.style.transform="translateY(0)"; }}>
            Book a Discovery Call
          </a>
          <span style={{ fontSize:"0.8rem",color:"#5E7080",fontFamily:"'Inter',sans-serif" }}>
            Or email adrian@saguaroadvisory.com · Typically respond within one business day
          </span>
        </div>
      </div>
    </section>
  );
}
