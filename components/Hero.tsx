"use client";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", backgroundColor: "#1C2B3A",
      display: "flex", flexDirection: "column", justifyContent: "center",
      position: "relative", overflow: "hidden", padding: "100px 5% 80px",
    }}>
      <svg style={{
        position: "absolute", right: 0, bottom: 0,
        height: "100%", width: "50%", opacity: 0.055, pointerEvents: "none",
      }} viewBox="0 0 400 600" fill="white" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax meet">
        <rect x="160" y="20" width="80" height="520" rx="40"/>
        <rect x="40" y="150" width="120" height="60" rx="30"/>
        <rect x="40" y="100" width="60" height="130" rx="30"/>
        <rect x="240" y="190" width="120" height="60" rx="30"/>
        <rect x="300" y="140" width="60" height="130" rx="30"/>
        <rect x="140" y="540" width="120" height="40" rx="8"/>
      </svg>
      <div style={{ position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse at 25% 55%, rgba(184,115,51,0.07) 0%, transparent 60%)" }}/>
      <div style={{ position:"relative",zIndex:2,maxWidth:"640px" }}>
        <span style={{ display:"inline-block",fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",color:"#D4934A",marginBottom:"24px",fontFamily:"'Inter',sans-serif" }}>
          Fractional CFO · Financial Advisory
        </span>
        <h1 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(2.4rem,5vw,3.8rem)",fontWeight:700,color:"#fff",lineHeight:1.15,marginBottom:"28px" }}>
          The financial clarity your operation{" "}
          <em style={{ fontStyle:"normal",color:"#D4934A" }}>actually needs</em>
        </h1>
        <p style={{ fontSize:"1.05rem",color:"rgba(255,255,255,0.68)",maxWidth:"520px",marginBottom:"44px",lineHeight:1.75,fontFamily:"'Inter',sans-serif",fontWeight:300 }}>
          Saguaro Advisory partners with manufacturing and distribution companies — $10M to $100M in revenue — to bring CFO-level financial leadership without the full-time overhead.
        </p>
        <div style={{ display:"flex",gap:"14px",flexWrap:"wrap" }}>
          <a href="#contact" style={{ display:"inline-block",backgroundColor:"#B87333",color:"#fff",textDecoration:"none",padding:"14px 30px",borderRadius:"4px",fontWeight:600,fontSize:"0.95rem",letterSpacing:"0.02em",transition:"background-color 0.2s,transform 0.15s" }}
            onMouseEnter={(e)=>{ e.currentTarget.style.backgroundColor="#C8864A"; e.currentTarget.style.transform="translateY(-1px)"; }}
            onMouseLeave={(e)=>{ e.currentTarget.style.backgroundColor="#B87333"; e.currentTarget.style.transform="translateY(0)"; }}>
            Book a Discovery Call
          </a>
          <a href="#services" style={{ display:"inline-block",border:"1.5px solid rgba(255,255,255,0.28)",color:"rgba(255,255,255,0.82)",textDecoration:"none",padding:"14px 30px",borderRadius:"4px",fontWeight:500,fontSize:"0.95rem",transition:"border-color 0.2s,color 0.2s" }}
            onMouseEnter={(e)=>{ e.currentTarget.style.borderColor="rgba(255,255,255,0.65)"; e.currentTarget.style.color="#fff"; }}
            onMouseLeave={(e)=>{ e.currentTarget.style.borderColor="rgba(255,255,255,0.28)"; e.currentTarget.style.color="rgba(255,255,255,0.82)"; }}>
            See How We Work
          </a>
        </div>
      </div>
      <div style={{ position:"absolute",bottom:"48px",left:"5%",right:"5%",display:"flex",gap:"48px",flexWrap:"wrap",borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:"32px" }}>
        {([["10+","Years in Industry"],["CPA","Licensed & Credentialed"],["$100M","Max Revenue Served"],["Mfg + Dist","Sectors We Know Cold"]] as [string,string][]).map(([num,label])=>(
          <div key={label}>
            <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.5rem,3vw,2rem)",fontWeight:700,color:"#fff",lineHeight:1 }}>{num}</div>
            <div style={{ fontSize:"0.72rem",color:"rgba(255,255,255,0.45)",letterSpacing:"0.07em",textTransform:"uppercase",marginTop:"4px",fontFamily:"'Inter',sans-serif" }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
