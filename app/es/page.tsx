"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

/* ─── Nav ─── */
function NavEs() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const switchLang = () => {
    localStorage.setItem("saguaro-lang", "en");
    router.push("/");
  };

  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Resultados", href: "#resultados" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: "rgba(44,58,46,0.97)",
      backdropFilter: "blur(8px)",
      boxShadow: scrolled ? "0 1px 0 rgba(122,158,126,0.25)" : "none",
      transition: "box-shadow 0.3s ease",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px", height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <svg width="36" height="36" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <circle cx="128" cy="128" r="128" fill="#3E5040"/>
            <circle cx="128" cy="128" r="128" fill="none" stroke="#7A9E7E" strokeWidth="3" opacity="0.35"/>
            <path d="M108,218 L108,134 C108,126 104,122 96,122 L80,122 C73,122 68,117 68,110 L68,86 C68,79 73,74 80,74 C87,74 92,79 92,86 L92,104 C92,111 97,116 104,116 L108,116 L108,78 C108,71 113,66 120,66 L136,66 C143,66 148,71 148,78 L148,116 L152,116 C159,116 164,111 164,104 L164,86 C164,79 169,74 176,74 C183,74 188,79 188,86 L188,110 C188,117 183,122 176,122 L160,122 C152,122 148,126 148,134 L148,218 Z" fill="#F2E4C8"/>
          </svg>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", color: "#F2E4C8", fontSize: "17px", fontWeight: 600, lineHeight: 1 }}>Saguaro</span>
            <span style={{ fontFamily: "'Inter', sans-serif", color: "#7A9E7E", fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", lineHeight: 1 }}>Advisory</span>
          </div>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "36px" }} className="desktop-nav">
          {links.map((l) => (
            <a key={l.label} href={l.href} style={{ color: "rgba(242,228,200,0.7)", textDecoration: "none", fontSize: "13.5px", fontWeight: 500, letterSpacing: "0.04em", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F2E4C8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,228,200,0.7)")}
            >{l.label}</a>
          ))}
          <a href="#contacto" style={{ backgroundColor: "#7A9E7E", color: "#2C3A2E", padding: "8px 20px", borderRadius: "4px", textDecoration: "none", fontSize: "13.5px", fontWeight: 700, letterSpacing: "0.04em", transition: "background-color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F2E4C8")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7A9E7E")}
          >Contáctenos</a>
          <button onClick={switchLang} style={{ background: "none", border: "1px solid rgba(242,228,200,0.3)", borderRadius: "4px", color: "rgba(242,228,200,0.6)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", padding: "5px 10px", cursor: "pointer", fontFamily: "'Inter',sans-serif", transition: "color 0.2s, border-color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#F2E4C8"; e.currentTarget.style.borderColor = "rgba(242,228,200,0.7)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(242,228,200,0.6)"; e.currentTarget.style.borderColor = "rgba(242,228,200,0.3)"; }}
          >EN</button>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }} className="mobile-menu-btn" aria-label="Abrir menú">
          {[0,1,2].map(i => <div key={i} style={{ width: "22px", height: "1.5px", backgroundColor: "#F2E4C8", margin: "5px 0" }}/>)}
        </button>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: "#2C3A2E", borderTop: "1px solid rgba(122,158,126,0.25)", padding: "12px 32px 24px" }} className="mobile-menu">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{ display: "block", color: "rgba(242,228,200,0.85)", textDecoration: "none", fontSize: "15px", fontWeight: 500, padding: "12px 0", borderBottom: "1px solid rgba(242,228,200,0.08)" }}>{l.label}</a>
          ))}
          <a href="#contacto" onClick={() => setMenuOpen(false)} style={{ display: "block", marginTop: "16px", backgroundColor: "#7A9E7E", color: "#2C3A2E", padding: "12px 0", borderRadius: "4px", textDecoration: "none", fontSize: "14px", fontWeight: 700, textAlign: "center" }}>Contáctenos</a>
          <button onClick={switchLang} style={{ display: "block", width: "100%", marginTop: "12px", background: "none", border: "1px solid rgba(242,228,200,0.3)", borderRadius: "4px", color: "rgba(242,228,200,0.6)", fontSize: "13px", fontWeight: 600, padding: "10px", cursor: "pointer", fontFamily: "'Inter',sans-serif" }}>
            Ver en English
          </button>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

/* ─── Hero ─── */
function HeroEs() {
  return (
    <section style={{ minHeight: "100vh", backgroundColor: "#2C3A2E", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden", padding: "100px 5% 80px" }}>
      <svg style={{ position: "absolute", right: 0, bottom: 0, height: "100%", width: "50%", opacity: 0.07, pointerEvents: "none" }}
        viewBox="0 0 256 256" fill="#F2E4C8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax meet">
        <path d="M108,218 L108,134 C108,126 104,122 96,122 L80,122 C73,122 68,117 68,110 L68,86 C68,79 73,74 80,74 C87,74 92,79 92,86 L92,104 C92,111 97,116 104,116 L108,116 L108,78 C108,71 113,66 120,66 L136,66 C143,66 148,71 148,78 L148,116 L152,116 C159,116 164,111 164,104 L164,86 C164,79 169,74 176,74 C183,74 188,79 188,86 L188,110 C188,117 183,122 176,122 L160,122 C152,122 148,126 148,134 L148,218 Z"/>
      </svg>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at 25% 55%, rgba(122,158,126,0.1) 0%, transparent 60%)" }}/>

      <div style={{ position: "relative", zIndex: 2, maxWidth: "640px" }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,4vw,2.6rem)", fontWeight: 400, color: "rgba(242,228,200,0.5)", letterSpacing: "0.08em", marginBottom: "12px" }}>
          Saguaro Advisory
        </div>
        <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "24px", fontFamily: "'Inter', sans-serif" }}>
          CFO Fraccional · Consultoría Financiera
        </span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 700, color: "#F2E4C8", lineHeight: 1.15, marginBottom: "28px" }}>
          La claridad financiera que su operación{" "}
          <em style={{ fontStyle: "normal", color: "#7A9E7E" }}>realmente necesita</em>
        </h1>
        <p style={{ fontSize: "1.05rem", color: "rgba(242,228,200,0.68)", maxWidth: "520px", marginBottom: "44px", lineHeight: 1.75, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          Saguaro Advisory atiende empresas de hasta $100M en ingresos, con especialidad en manufactura y construcción, y les ofrece dirección financiera de nivel CFO sin el costo de contratar de planta.
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <a href="#contacto" style={{ display: "inline-block", backgroundColor: "#7A9E7E", color: "#2C3A2E", textDecoration: "none", padding: "14px 30px", borderRadius: "4px", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.02em", transition: "background-color 0.2s,transform 0.15s" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F2E4C8"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#7A9E7E"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Contáctenos
          </a>
          <a href="#servicios" style={{ display: "inline-block", border: "1.5px solid rgba(242,228,200,0.28)", color: "rgba(242,228,200,0.82)", textDecoration: "none", padding: "14px 30px", borderRadius: "4px", fontWeight: 500, fontSize: "0.95rem", transition: "border-color 0.2s,color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(242,228,200,0.65)"; e.currentTarget.style.color = "#F2E4C8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(242,228,200,0.28)"; e.currentTarget.style.color = "rgba(242,228,200,0.82)"; }}>
            Cómo Trabajamos
          </a>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "48px", left: "5%", right: "5%", display: "flex", gap: "48px", flexWrap: "wrap", borderTop: "1px solid rgba(242,228,200,0.1)", paddingTop: "32px" }}>
        {([["10+","Años de Experiencia"],["CPA","Certificado y Acreditado"],["$100M","Máximo en Ingresos Atendidos"],["Mfg + Dist","Sectores que Dominamos"]] as [string,string][]).map(([num,label]) => (
          <div key={label}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, color: "#F2E4C8", lineHeight: 1 }}>{num}</div>
            <div style={{ fontSize: "0.72rem", color: "rgba(242,228,200,0.45)", letterSpacing: "0.07em", textTransform: "uppercase", marginTop: "4px", fontFamily: "'Inter', sans-serif" }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Problems ─── */
const problemsEs = [
  { title: "Costos de inventario en los que no puede confiar", body: "PEPS, UEPS, promedio ponderado — cuando su método de costeo no coincide con sus operaciones, los reportes de margen son pura ficción. Corregimos las entradas para que sus cifras reflejen la realidad." },
  { title: "Sorpresas de flujo de caja a fin de mes", body: "Es rentable en papel, pero tiene poco efectivo. Las cuentas por cobrar se acumulan, las cuentas por pagar también, y su línea de crédito está más ajustada de lo que debería." },
  { title: "Sin visibilidad sobre el margen por trabajo o producto", body: "Cuando no puede ver el margen por línea de producto, cliente o trabajo, está tomando decisiones de precios a ciegas. Construimos los reportes que revelan dónde realmente está ganando dinero." },
  { title: "Su equipo ha crecido más rápido que su función financiera", body: "Ha escalado la operación pero su infraestructura financiera no ha seguido el ritmo. Su contador está abrumado y su CPA solo aparece en época de impuestos." },
  { title: "Cuando los reportes llegan, ya son historia", body: "Si su cierre de fin de mes tarda tres semanas, está gestionando con datos del mes pasado. Optimizamos los ciclos de reporte para que pueda actuar a tiempo." },
  { title: "Preguntas de prestamistas o compradores que no puede responder rápido", body: "Cuando un banco, firma de capital privado o posible comprador solicita detalles financieros, necesita libros limpios y un historial financiero sólido. Nos aseguramos de que siempre esté preparado." },
];

function ProblemsEs() {
  const icons = [
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="#7A9E7E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="#7A9E7E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="#7A9E7E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 0-2 2h-2a2 2 0 1-2-2z"/></svg>,
    <svg key="4" viewBox="0 0 24 24" fill="none" stroke="#7A9E7E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    <svg key="5" viewBox="0 0 24 24" fill="none" stroke="#7A9E7E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    <svg key="6" viewBox="0 0 24 24" fill="none" stroke="#7A9E7E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  ];
  return (
    <section id="problemas" style={{ padding: "96px 5%", backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "12px", fontFamily: "'Inter',sans-serif" }}>¿Le suena familiar?</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 700, color: "#2C3A2E", lineHeight: 1.2, marginBottom: "16px" }}>Los problemas que quitan el sueño a los operadores</h2>
        <p style={{ fontSize: "1.05rem", color: "#5E7A60", maxWidth: "560px", lineHeight: 1.75, marginBottom: "56px", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>Las empresas de manufactura y distribución en crecimiento enfrentan desafíos financieros específicos. Los hemos visto todos.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "28px" }}>
          {problemsEs.map((p, i) => (
            <div key={p.title} style={{ backgroundColor: "#F2EDE3", border: "1px solid #D9CFBA", borderRadius: "8px", padding: "32px" }}>
              <div style={{ width: "44px", height: "44px", backgroundColor: "#2C3A2E", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>{icons[i]}</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "#2C3A2E", marginBottom: "10px", lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "#5E7A60", lineHeight: 1.7, fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>{p.body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "56px", borderTop: "1px solid #D9CFBA", paddingTop: "48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.3rem,2.5vw,1.75rem)", fontWeight: 700, color: "#2C3A2E", lineHeight: 1.25, margin: 0 }}>¿Le suena familiar? Hablemos.</p>
            <p style={{ fontSize: "0.95rem", color: "#5E7A60", marginTop: "8px", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>Treinta minutos de su tiempo no cuestan nada. Las finanzas sin claridad sí.</p>
          </div>
          <a href="#contacto" style={{ display: "inline-block", backgroundColor: "#2C3A2E", color: "#F2E4C8", textDecoration: "none", padding: "14px 32px", borderRadius: "4px", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.02em", whiteSpace: "nowrap", transition: "background-color 0.2s,transform 0.15s" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#7A9E7E"; e.currentTarget.style.color = "#2C3A2E"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#2C3A2E"; e.currentTarget.style.color = "#F2E4C8"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Contáctenos
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
const cardsEs = [
  {
    featured: false,
    title: "Paquete de Reportes Mensuales",
    desc: "Estados financieros confiables y limpios entregados en un ciclo de cierre definido. Diseñado para operadores que necesitan números precisos sin complejidad.",
    items: ["Proceso de cierre de fin de mes","Estado de resultados, balance general y flujo de caja","Resumen ejecutivo con métricas clave","Conciliación de inventario y costo de ventas","Llamada de revisión mensual"],
    price: "Desde $2,000 USD / mes",
  },
  {
    featured: true,
    badge: "Más Popular",
    title: "CFO Fraccional",
    desc: "Dirección financiera integrada sin contratar de planta. Planeación estratégica, gestión de efectivo, relación con bancos e instituciones financieras y reportes — todo en un solo esquema.",
    items: ["Todo incluido en Reportes Mensuales","Pronóstico de flujo de caja a 13 semanas","Análisis de varianza presupuesto vs. real","Reporte de margen por línea de producto y trabajo","Gestión de convenios bancarios y preparación con bancos","Reunión semanal de seguimiento dedicada"],
    price: "Desde $4,500 USD / mes",
  },
  {
    featured: false,
    title: "Asesoría y Proyectos",
    desc: "Proyectos enfocados en desafíos específicos: evaluación de ERP, automatización de procesos financieros, preparación para adquisición o limpieza de sistemas.",
    items: ["Automatización de procesos financieros","Evaluación de ERP y sistemas contables","Preparación para adquisición o venta","Construcción de infraestructura de reportes","Preparación de paquetes para prestamistas"],
    price: "Precio por proyecto",
  },
];

function ServicesEs() {
  return (
    <section id="servicios" style={{ padding: "96px 5%", backgroundColor: "#F2EDE3" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "56px" }}>
          <div>
            <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "12px", fontFamily: "'Inter',sans-serif" }}>Lo Que Ofrecemos</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 700, color: "#2C3A2E", lineHeight: 1.2 }}>Soporte de nivel CFO,<br/>adaptado a la etapa de su negocio</h2>
          </div>
          <p style={{ fontSize: "1.0rem", color: "#5E7A60", maxWidth: "400px", lineHeight: 1.75, fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>Cada esquema se adapta a su etapa. Si necesita visibilidad mensual o un socio financiero de fondo, hay un modelo que encaja.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "28px" }}>
          {cardsEs.map((c) => (
            <div key={c.title} style={{ backgroundColor: c.featured ? "#2C3A2E" : "#fff", borderRadius: "10px", padding: "40px 36px", border: c.featured ? "1px solid #7A9E7E" : "1px solid #D9CFBA", transition: "box-shadow 0.2s,transform 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(44,58,46,0.12)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
              {c.badge && <div style={{ display: "inline-block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: "#7A9E7E", color: "#2C3A2E", padding: "3px 10px", borderRadius: "3px", marginBottom: "20px", fontFamily: "'Inter',sans-serif" }}>{c.badge}</div>}
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.35rem", color: c.featured ? "#F2E4C8" : "#2C3A2E", marginBottom: "10px" }}>{c.title}</div>
              <p style={{ fontSize: "0.875rem", color: c.featured ? "rgba(242,228,200,0.62)" : "#5E7A60", marginBottom: "28px", lineHeight: 1.7, fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>{c.desc}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                {c.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.875rem", color: c.featured ? "rgba(242,228,200,0.62)" : "#5E7A60", fontFamily: "'Inter',sans-serif" }}>
                    <span style={{ width: "16px", height: "16px", minWidth: "16px", backgroundColor: "#7A9E7E", borderRadius: "50%", marginTop: "2px", display: "inline-block", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%232C3A2E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='3 8 6.5 11.5 13 4'/%3E%3C/svg%3E\")", backgroundSize: "contain" }}/>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.95rem", color: c.featured ? "#F2E4C8" : "#2C3A2E", fontWeight: 600, borderTop: `1px solid ${c.featured ? "rgba(242,228,200,0.14)" : "#D9CFBA"}`, paddingTop: "20px" }}>{c.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
const diffsEs = [
  { label: "Experiencia específica del sector", detail: "Amplio conocimiento en contabilidad de manufactura, construcción y distribución." },
  { label: "Enfocados en la eficiencia", detail: "Hemos liderado iniciativas de automatización que reducen los ciclos de cierre y los costos operativos de reporte." },
  { label: "Sin tecnicismos, sin rodeos", detail: "Comunicación directa sobre lo que significan los números y qué hacer al respecto." },
  { label: "Compatible con su sistema", detail: "Profesional Certificado de Xero. También experto en QuickBooks, Sage y cualquier ERP que utilice su operación." },
];

function AboutEs() {
  return (
    <section id="nosotros" style={{ padding: "96px 5%", backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "12px", fontFamily: "'Inter',sans-serif" }}>Nosotros</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 700, color: "#2C3A2E", lineHeight: 1.2, marginBottom: "20px" }}>Un CFO que habla su idioma</h2>
        <p style={{ fontSize: "1.0rem", color: "#5E7A60", lineHeight: 1.8, marginBottom: "20px", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>
          La mayoría de los asesores financieros entienden las hojas de cálculo. Pocos entienden qué pasa cuando un trabajo se excede, un proveedor sube precios a mitad del trimestre, o un cliente de distribución extiende los plazos de pago hasta 60 días.
        </p>
        <p style={{ fontSize: "1.0rem", color: "#5E7A60", lineHeight: 1.8, marginBottom: "48px", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>
          Con más de una década trabajando dentro de empresas de manufactura y distribución, Saguaro Advisory aporta una perspectiva estratégica de CFO basada en cómo estos negocios realmente funcionan.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "left" }}>
          {diffsEs.map(d => (
            <div key={d.label} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", color: "#7A9E7E", lineHeight: 1, minWidth: "20px" }}>—</div>
              <div>
                <strong style={{ display: "block", fontSize: "0.875rem", color: "#2C3A2E", fontWeight: 600, marginBottom: "3px", fontFamily: "'Inter',sans-serif" }}>{d.label}</strong>
                <span style={{ fontSize: "0.84rem", color: "#5E7A60", fontFamily: "'Inter',sans-serif", lineHeight: 1.6 }}>{d.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
const resultsEs = [
  { tag: "Distribución · $35M en Ingresos", quote: "Pasamos de un cierre de 3 semanas a 5 días hábiles. Por primera vez, teníamos los números antes de que el mes se sintiera obsoleto.", detail: "Reducción del ciclo de cierre · Automatización de reportes · Panel de KPIs" },
  { tag: "Manufactura · $58M en Ingresos", quote: "El análisis de margen por producto nos mostró dos líneas que en realidad estaban perdiendo dinero. Rehicimos los precios en 60 días.", detail: "Análisis profundo de costos · Margen por línea de producto · Modelo de precios" },
  { tag: "Fabricante por Contrato · $22M en Ingresos", quote: "Nuestro banco pidió un pronóstico de flujo de caja a 13 semanas durante la renovación de nuestra línea de crédito. Lo tuvimos listo en 48 horas. La renovación salió bien.", detail: "Pronóstico de flujo de caja · Preparación de paquete para prestamista · Seguimiento de convenios" },
];

function TestimonialsEs() {
  return (
    <section id="resultados" style={{ padding: "96px 5%", backgroundColor: "#2C3A2E" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "12px", fontFamily: "'Inter',sans-serif" }}>Resultados de Clientes</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 700, color: "#F2E4C8", lineHeight: 1.2, marginBottom: "16px" }}>Lo que una mejor gestión financiera logra en la práctica</h2>
        <p style={{ fontSize: "1.05rem", color: "rgba(242,228,200,0.55)", maxWidth: "560px", lineHeight: 1.75, marginBottom: "56px", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>Cada caso es distinto. Esto es lo que nuestros clientes suelen ver en los primeros meses.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px" }}>
          {resultsEs.map(r => (
            <div key={r.tag} style={{ backgroundColor: "rgba(242,228,200,0.05)", border: "1px solid rgba(122,158,126,0.2)", borderRadius: "10px", padding: "36px 32px" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "16px", fontFamily: "'Inter',sans-serif" }}>{r.tag}</div>
              <blockquote style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.05rem", color: "#F2E4C8", lineHeight: 1.6, marginBottom: "20px", fontStyle: "italic" }}>&ldquo;{r.quote}&rdquo;</blockquote>
              <div style={{ fontSize: "0.78rem", color: "rgba(242,228,200,0.35)", letterSpacing: "0.04em", fontFamily: "'Inter',sans-serif" }}>{r.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

const BOOKING_URL = "https://calendar.app.google/bsA7iCTALPAYhJUZ6";
const WEB3FORMS_KEY = "b7ba388d-b205-4f56-b1ea-03b49b24e4a8";

function gtagSendEvent(url: string) {
  const callback = () => { window.location.href = url; };
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion_event_book_appointment", { event_callback: callback, event_timeout: 2000 });
    window.gtag("event", "book_call", { event_callback: callback, event_timeout: 2000 });
  } else {
    callback();
  }
}

type FormState = "idle" | "submitting" | "success" | "error";

function ContactEs() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({ name: "", company: "", email: "", message: "" });

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
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: `Nueva consulta de ${formData.name} — ${formData.company}`, from_name: "Saguaro Advisory Website (ES)", ...formData }),
      });
      const json = await res.json();
      if (json.success) {
        setFormState("success");
        setFormData({ name: "", company: "", email: "", message: "" });
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "contact_form_submit", { event_category: "conversion", event_label: "Contact Form ES" });
        }
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputStyle: React.CSSProperties = { width: "100%", padding: "12px 14px", borderRadius: "4px", border: "1px solid #C8BFA8", backgroundColor: "#fff", fontSize: "0.9rem", color: "#2C3A2E", fontFamily: "'Inter',sans-serif", outline: "none", boxSizing: "border-box", transition: "border-color 0.15s" };
  const labelStyle: React.CSSProperties = { display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E7A60", marginBottom: "6px", fontFamily: "'Inter',sans-serif" };

  return (
    <section id="contacto" style={{ backgroundColor: "#F2EDE3", padding: "96px 5%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "12px", fontFamily: "'Inter',sans-serif" }}>Dé el primer paso</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 700, color: "#2C3A2E", lineHeight: 1.2, marginBottom: "16px" }}>
            ¿No está seguro si encaja bien?<br />Descubrámoslo en 30 minutos.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#5E7A60", maxWidth: "540px", lineHeight: 1.75, margin: "0 auto", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>
            Reserve una llamada directamente o envíe un mensaje y le responderemos en un día hábil.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "48px", alignItems: "start" }}>
          <div style={{ backgroundColor: "#2C3A2E", borderRadius: "10px", padding: "48px 40px" }}>
            <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "16px", fontFamily: "'Inter',sans-serif" }}>Reserve una llamada</p>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 700, color: "#F2E4C8", lineHeight: 1.25, marginBottom: "20px" }}>30 minutos.<br />Sin presión.</h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(242,228,200,0.6)", lineHeight: 1.75, marginBottom: "32px", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>
              Platicamos sobre el estado de sus finanzas, qué no está funcionando, y si Saguaro Advisory tiene sentido para su negocio.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
              {["Entender su función financiera actual","Identificar sus brechas más urgentes","Explicar cómo funciona cada esquema","Sin presión, sin pitch de ventas"].map(item => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.875rem", color: "rgba(242,228,200,0.65)", fontFamily: "'Inter',sans-serif" }}>
                  <span style={{ width: "16px", height: "16px", minWidth: "16px", backgroundColor: "#7A9E7E", borderRadius: "50%", marginTop: "2px", display: "inline-block", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%232C3A2E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='3 8 6.5 11.5 13 4'/%3E%3C/svg%3E\")", backgroundSize: "contain" }}/>
                  {item}
                </li>
              ))}
            </ul>
            <a href={BOOKING_URL} onClick={(e) => { e.preventDefault(); gtagSendEvent(BOOKING_URL); }}
              style={{ display: "inline-block", backgroundColor: "#7A9E7E", color: "#2C3A2E", textDecoration: "none", padding: "14px 30px", borderRadius: "4px", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.02em", transition: "background-color 0.2s,transform 0.15s" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F2E4C8"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#7A9E7E"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Agendar una llamada
            </a>
          </div>

          <div style={{ backgroundColor: "#fff", borderRadius: "10px", padding: "48px 40px", border: "1px solid #D9CFBA" }}>
            <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A9E7E", marginBottom: "16px", fontFamily: "'Inter',sans-serif" }}>Enviar un mensaje</p>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 700, color: "#2C3A2E", lineHeight: 1.25, marginBottom: "8px" }}>¿No está listo para reservar?<br />No hay problema.</h3>
            <p style={{ fontSize: "0.875rem", color: "#5E7A60", lineHeight: 1.7, marginBottom: "32px", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>
              Deje un mensaje y le responderemos en un día hábil.
            </p>
            {formState === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: "#F2EDE3", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#7A9E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "#2C3A2E", marginBottom: "8px" }}>Mensaje recibido.</p>
                <p style={{ fontSize: "0.875rem", color: "#5E7A60", fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>Nos pondremos en contacto en un día hábil.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label htmlFor="es-name" style={labelStyle}>Nombre</label>
                    <input id="es-name" name="name" type="text" required placeholder="Juan García" value={formData.name} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#7A9E7E"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#C8BFA8"; }}/>
                  </div>
                  <div>
                    <label htmlFor="es-company" style={labelStyle}>Empresa</label>
                    <input id="es-company" name="company" type="text" placeholder="Acme Manufactura" value={formData.company} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#7A9E7E"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#C8BFA8"; }}/>
                  </div>
                </div>
                <div>
                  <label htmlFor="es-email" style={labelStyle}>Correo electrónico</label>
                  <input id="es-email" name="email" type="email" required placeholder="juan@empresa.com" value={formData.email} onChange={handleChange} style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#7A9E7E"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#C8BFA8"; }}/>
                </div>
                <div>
                  <label htmlFor="es-message" style={labelStyle}>¿En qué podemos ayudarle?</label>
                  <textarea id="es-message" name="message" required placeholder="Cuéntenos brevemente sobre su empresa y qué está tratando de resolver..." rows={5} value={formData.message} onChange={handleChange} style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#7A9E7E"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#C8BFA8"; }}/>
                </div>
                {formState === "error" && (
                  <p style={{ fontSize: "0.85rem", color: "#B94040", fontFamily: "'Inter',sans-serif", margin: 0 }}>
                    Algo salió mal. Por favor intente de nuevo o escríbanos a{" "}
                    <a href="mailto:adrian@saguaroadvisory.com" style={{ color: "#B94040" }}>adrian@saguaroadvisory.com</a>.
                  </p>
                )}
                <button type="submit" disabled={formState === "submitting"}
                  style={{ backgroundColor: formState === "submitting" ? "#5E7A60" : "#2C3A2E", color: "#F2E4C8", border: "none", padding: "14px 30px", borderRadius: "4px", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.02em", cursor: formState === "submitting" ? "not-allowed" : "pointer", fontFamily: "'Inter',sans-serif", transition: "background-color 0.2s,transform 0.15s", alignSelf: "flex-start" }}
                  onMouseEnter={(e) => { if (formState !== "submitting") { e.currentTarget.style.backgroundColor = "#7A9E7E"; e.currentTarget.style.color = "#2C3A2E"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
                  onMouseLeave={(e) => { if (formState !== "submitting") { e.currentTarget.style.backgroundColor = "#2C3A2E"; e.currentTarget.style.color = "#F2E4C8"; e.currentTarget.style.transform = "translateY(0)"; } }}>
                  {formState === "submitting" ? "Enviando…" : "Enviar Mensaje"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function FooterEs() {
  return (
    <footer style={{ backgroundColor: "#1E2920", color: "rgba(242,228,200,0.38)", textAlign: "center", padding: "32px 5%", fontSize: "0.82rem", fontFamily: "'Inter',sans-serif" }}>
      <p><strong style={{ color: "rgba(242,228,200,0.7)" }}>Saguaro Advisory</strong> &nbsp;·&nbsp; CFO Fraccional y Asesoría Financiera para Manufactura y Distribución</p>
      <p style={{ marginTop: "8px" }}>© {new Date().getFullYear()} Saguaro Advisory. Todos los derechos reservados.</p>
    </footer>
  );
}

/* ─── Page ─── */
export default function PageEs() {
  return (
    <>
      <NavEs />
      <HeroEs />
      <ProblemsEs />
      <ServicesEs />
      <AboutEs />
      <TestimonialsEs />
      <ContactEs />
      <FooterEs />
    </>
  );
}
