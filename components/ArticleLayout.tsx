import Link from "next/link";
import Footer from "@/components/Footer";

const BOOKING_URL = "https://calendar.app.google/bsA7iCTALPAYhJUZ6";

interface Props {
  title: string;
  date: string;
  readTime: string;
  category: string;
  children: React.ReactNode;
}

export default function ArticleLayout({ title, date, readTime, category, children }: Props) {
  return (
    <>
      {/* Blog-specific nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: "rgba(44,58,46,0.97)", backdropFilter: "blur(8px)",
        boxShadow: "0 1px 0 rgba(122,158,126,0.25)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px", height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <svg width="36" height="36" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <circle cx="128" cy="128" r="128" fill="#3E5040"/>
              <circle cx="128" cy="128" r="128" fill="none" stroke="#7A9E7E" strokeWidth="3" opacity="0.35"/>
              <path d="M108,218 L108,134 C108,126 104,122 96,122 L80,122 C73,122 68,117 68,110 L68,86 C68,79 73,74 80,74 C87,74 92,79 92,86 L92,104 C92,111 97,116 104,116 L108,116 L108,78 C108,71 113,66 120,66 L136,66 C143,66 148,71 148,78 L148,116 L152,116 C159,116 164,111 164,104 L164,86 C164,79 169,74 176,74 C183,74 188,79 188,86 L188,110 C188,117 183,122 176,122 L160,122 C152,122 148,126 148,134 L148,218 Z" fill="#F2E4C8"/>
            </svg>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", color: "#F2E4C8", fontSize: "17px", fontWeight: 600, lineHeight: 1 }}>Saguaro</span>
              <span style={{ fontFamily: "'Inter', sans-serif", color: "#7A9E7E", fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", lineHeight: 1 }}>Advisory</span>
            </div>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <Link href="/blog" style={{ color: "rgba(242,228,200,0.7)", textDecoration: "none", fontSize: "13.5px", fontWeight: 500, letterSpacing: "0.04em" }}>
              ← Insights
            </Link>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: "#7A9E7E", color: "#2C3A2E", padding: "8px 20px", borderRadius: "4px", textDecoration: "none", fontSize: "13.5px", fontWeight: 700, letterSpacing: "0.04em" }}>
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: "68px", backgroundColor: "#fff" }}>
        {/* Article header */}
        <div style={{ backgroundColor: "#F2EDE3", padding: "64px 5% 56px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <span style={{ display: "inline-block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "16px", fontFamily: "'Inter', sans-serif" }}>
              {category}
            </span>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "#2C3A2E", lineHeight: 1.2, marginBottom: "24px" }}>
              {title}
            </h1>
            <div style={{ display: "flex", gap: "20px", color: "#5E7A60", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              <span>{date}</span>
              <span>·</span>
              <span>{readTime}</span>
            </div>
          </div>
        </div>

        {/* Prose content */}
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "56px 5% 80px" }}>
          <style>{`
            .prose p { font-family: 'Inter', sans-serif; font-size: 1.0rem; color: #3D4D40; line-height: 1.82; margin-bottom: 1.4em; font-weight: 300; }
            .prose h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.3rem, 2.5vw, 1.65rem); font-weight: 700; color: #2C3A2E; line-height: 1.25; margin: 2.2em 0 0.7em; }
            .prose h3 { font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 700; color: #2C3A2E; letter-spacing: 0.01em; margin: 1.8em 0 0.5em; text-transform: none; }
            .prose ul { margin: 0 0 1.4em 0; padding-left: 0; list-style: none; }
            .prose ul li { font-family: 'Inter', sans-serif; font-size: 1.0rem; color: #3D4D40; line-height: 1.75; font-weight: 300; padding-left: 1.4em; position: relative; margin-bottom: 0.5em; }
            .prose ul li::before { content: "—"; position: absolute; left: 0; color: #7A9E7E; font-weight: 600; }
            .prose ol { margin: 0 0 1.4em 1.4em; }
            .prose ol li { font-family: 'Inter', sans-serif; font-size: 1.0rem; color: #3D4D40; line-height: 1.75; font-weight: 300; margin-bottom: 0.5em; }
            .prose strong { font-weight: 600; color: #2C3A2E; }
            .prose blockquote { border-left: 3px solid #7A9E7E; margin: 2em 0; padding: 0.5em 0 0.5em 1.5em; }
            .prose blockquote p { color: #5E7A60; font-style: italic; margin-bottom: 0; }
            .prose hr { border: none; border-top: 1px solid #D9CFBA; margin: 2.5em 0; }
          `}</style>
          <div className="prose">
            {children}
          </div>
        </div>

        {/* CTA */}
        <div style={{ backgroundColor: "#2C3A2E", padding: "64px 5%" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "28px" }}>
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 700, color: "#F2E4C8", lineHeight: 1.25, margin: "0 0 8px" }}>
                Want a second set of eyes on your numbers?
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "rgba(242,228,200,0.6)", margin: 0, fontWeight: 300 }}>
                30 minutes. No obligation. We&rsquo;ll tell you honestly if we can help.
              </p>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: "#7A9E7E", color: "#2C3A2E", textDecoration: "none", padding: "14px 32px", borderRadius: "4px", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.02em", whiteSpace: "nowrap", flexShrink: 0 }}>
              Book a Free 30-Min Call
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
