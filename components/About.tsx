"use client";

const tags = ["Manufacturing","Distribution","Financial Reporting","Process Automation","Job Costing","Inventory Accounting"];
const creds = ["10+ years in public accounting & industry","Hands-on experience from the plant floor to the board room"];
const diffs = [
  { label:"Industry-specific expertise", detail:"Deep background in manufacturing, construction, and distribution accounting — not a generalist stretching to fit." },
  { label:"Built for efficiency", detail:"Led process automation initiatives that cut close cycles and reporting overhead. Your team's time matters." },
  { label:"No jargon, no fluff", detail:"Straight talk about what the numbers mean and what to do about them." },
];

export default function About() {
  return (
    <section id="about" style={{ padding:"96px 5%", backgroundColor:"#fff" }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", alignItems:"center" }} className="about-grid">
        {/* Card */}
        <div style={{ backgroundColor:"#1C2B3A",borderRadius:"12px",padding:"48px 40px",color:"#fff" }}>
          <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.5rem",marginBottom:"6px" }}>Adrian Buenrostro, CPA</div>
          <div style={{ fontSize:"0.78rem",color:"#D4934A",letterSpacing:"0.08em",textTransform:"uppercase",fontWeight:600,marginBottom:"28px",fontFamily:"'Inter',sans-serif" }}>Founder · Saguaro Advisory</div>
          <div style={{ display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"32px" }}>
            {tags.map(t=>(
              <span key={t} style={{ backgroundColor:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.11)",color:"rgba(255,255,255,0.72)",padding:"5px 12px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"'Inter',sans-serif" }}>{t}</span>
            ))}
          </div>
          {creds.map(c=>(
            <div key={c} style={{ display:"flex",alignItems:"flex-start",gap:"10px",color:"rgba(255,255,255,0.58)",fontSize:"0.85rem",marginBottom:"12px",fontFamily:"'Inter',sans-serif" }}>
              <span style={{ width:"6px",height:"6px",backgroundColor:"#B87333",borderRadius:"50%",marginTop:"7px",flexShrink:0,display:"inline-block" }}/>
              {c}
            </div>
          ))}
        </div>

        {/* Content */}
        <div>
          <p style={{ fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",color:"#B87333",marginBottom:"12px",fontFamily:"'Inter',sans-serif" }}>About</p>
          <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.9rem,3.5vw,2.8rem)",fontWeight:700,color:"#1C2B3A",lineHeight:1.2,marginBottom:"20px" }}>A CFO who speaks your language</h2>
          <p style={{ fontSize:"1.0rem",color:"#5E7080",lineHeight:1.8,marginBottom:"20px",fontFamily:"'Inter',sans-serif",fontWeight:300 }}>
            Most financial advisors understand spreadsheets. Fewer understand what happens when a job runs over, a supplier raises prices mid-quarter, or a distribution customer suddenly stretches payment terms to 60 days.
          </p>
          <p style={{ fontSize:"1.0rem",color:"#5E7080",lineHeight:1.8,marginBottom:"32px",fontFamily:"'Inter',sans-serif",fontWeight:300 }}>
            With over a decade working inside manufacturing and distribution companies — from the close cycle to the shop floor — Saguaro Advisory brings CFO-level thinking that&apos;s grounded in how these businesses actually work.
          </p>
          <div style={{ display:"flex",flexDirection:"column",gap:"20px" }}>
            {diffs.map(d=>(
              <div key={d.label} style={{ display:"flex",gap:"14px",alignItems:"flex-start" }}>
                <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.5rem",color:"#B87333",lineHeight:1,minWidth:"20px" }}>—</div>
                <div>
                  <strong style={{ display:"block",fontSize:"0.875rem",color:"#1C2B3A",fontWeight:600,marginBottom:"3px",fontFamily:"'Inter',sans-serif" }}>{d.label}</strong>
                  <span style={{ fontSize:"0.84rem",color:"#5E7080",fontFamily:"'Inter',sans-serif",lineHeight:1.6 }}>{d.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr !important;gap:40px !important;}}`}</style>
    </section>
  );
}
