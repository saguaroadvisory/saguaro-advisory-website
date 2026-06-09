"use client";

const problems = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#D4934A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: "Inventory costs you can't trust",
    body: "FIFO, LIFO, weighted average — when your costing method doesn't match your operations, margin reports are fiction. We fix the inputs so your numbers tell the truth.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#D4934A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: "Cash flow surprises at month-end",
    body: "You're profitable on paper but short on cash. Receivables are aging, payables are stacking, and your bank line feels tighter than it should. You need a rolling 13-week forecast, not hindsight.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#D4934A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 0-2 2h-2a2 2 0 0 1-2-2z"/></svg>,
    title: "No visibility into job or product margin",
    body: "When you can't see margin by product line, customer, or job, you're making pricing decisions in the dark. We build the reporting that shows you where you're actually making money.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#D4934A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Your team is outgrowing your finance function",
    body: "You've scaled the operation but your financial infrastructure hasn't kept up. Your bookkeeper is overwhelmed, your CPA is only around at tax time, and no one's looking at the big picture.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#D4934A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: "Reporting takes too long to be useful",
    body: "If your month-end close takes three weeks, you're managing with last quarter's data. We streamline reporting cycles so you can act while it still matters.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#D4934A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
    title: "Lender or buyer questions you can't answer fast",
    body: "When a bank, PE firm, or potential acquirer asks for financial detail, you need clean books and a confident story. We make sure you're always ready.",
  },
];

export default function Problems() {
  return (
    <section id="problems" style={{ padding:"96px 5%", backgroundColor:"#fff" }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
        <p style={{ fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",color:"#B87333",marginBottom:"12px",fontFamily:"'Inter',sans-serif" }}>Sound Familiar?</p>
        <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.9rem,3.5vw,2.8rem)",fontWeight:700,color:"#1C2B3A",lineHeight:1.2,marginBottom:"16px" }}>
          The problems that keep operators up at night
        </h2>
        <p style={{ fontSize:"1.05rem",color:"#5E7080",maxWidth:"560px",lineHeight:1.75,marginBottom:"56px",fontFamily:"'Inter',sans-serif",fontWeight:300 }}>
          Growing manufacturing and distribution companies face a specific set of financial challenges. We&apos;ve seen them all.
        </p>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"28px" }}>
          {problems.map((p) => (
            <div key={p.title} style={{ backgroundColor:"#F6F2EA",border:"1px solid #D5CBBA",borderRadius:"8px",padding:"32px" }}>
              <div style={{ width:"44px",height:"44px",backgroundColor:"#1C2B3A",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px" }}>
                {p.icon}
              </div>
              <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.1rem",color:"#1C2B3A",marginBottom:"10px",lineHeight:1.3 }}>{p.title}</h3>
              <p style={{ fontSize:"0.875rem",color:"#5E7080",lineHeight:1.7,fontFamily:"'Inter',sans-serif",fontWeight:300 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
