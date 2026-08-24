import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Insights | Saguaro Advisory",
  description: "Practical financial guidance for manufacturing and distribution operators — cash flow, cost accounting, reporting, and the CFO function.",
  alternates: { canonical: "https://www.saguaroadvisory.com/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "68px" }}>
        <div style={{ backgroundColor: "#F2EDE3", padding: "72px 5% 64px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "16px", fontFamily: "'Inter', sans-serif" }}>
              Insights
            </span>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, color: "#2C3A2E", lineHeight: 1.2, marginBottom: "16px" }}>
              Practical guidance for manufacturing operators
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#5E7A60", lineHeight: 1.75, fontFamily: "'Inter', sans-serif", fontWeight: 300, maxWidth: "560px" }}>
              No filler. Each article covers a specific financial challenge operators in manufacturing and distribution actually face.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "64px 5% 96px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {articles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  padding: "40px 0",
                  borderTop: i === 0 ? "none" : "1px solid #D9CFBA",
                }}
              >
                <span style={{ display: "inline-block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "12px", fontFamily: "'Inter', sans-serif" }}>
                  {article.category}
                </span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.2rem,2.5vw,1.55rem)", fontWeight: 700, color: "#2C3A2E", lineHeight: 1.25, marginBottom: "12px" }}>
                  {article.title}
                </h2>
                <p style={{ fontSize: "0.925rem", color: "#5E7A60", lineHeight: 1.72, fontFamily: "'Inter', sans-serif", fontWeight: 300, marginBottom: "16px", maxWidth: "600px" }}>
                  {article.excerpt}
                </p>
                <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", color: "#5E7A60", fontFamily: "'Inter', sans-serif" }}>{article.date}</span>
                  <span style={{ fontSize: "0.8rem", color: "#5E7A60", fontFamily: "'Inter', sans-serif" }}>·</span>
                  <span style={{ fontSize: "0.8rem", color: "#5E7A60", fontFamily: "'Inter', sans-serif" }}>{article.readTime}</span>
                  <span style={{ marginLeft: "auto", fontSize: "0.85rem", fontWeight: 600, color: "#7A9E7E", fontFamily: "'Inter', sans-serif" }}>Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
