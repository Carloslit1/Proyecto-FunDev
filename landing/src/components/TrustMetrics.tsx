const metrics = [
  { v: "+90%", l: "Clientes recurrentes", d: "Familias que regresan cada mes con sus mascotas." },
  { v: "Premium", l: "Atención especializada", d: "Productos certificados y personal capacitado." },
  {
    v: "1 a 1",
    l: "Cuidado personalizado",
    d: "Cada mascota recibe un plan completamente dedicado.",
  },
  { v: "Cumbres", l: "Monterrey, N.L.", d: "Plaza 2048 Paseo de los Leones, Cumbres." },
];

export function TrustMetrics() {
  return (
    <section
      className="section-shell"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #FFFFFF 0%, #FFF6ED 100%)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            position: "relative",
            borderRadius: "2.5rem",
            overflow: "hidden",
            background: "var(--gradient-navy-rich)",
            color: "white",
            boxShadow: "var(--shadow-premium)",
          }}
        >
          {/* Blobs inside */}
          <div
            className="ambient-blob"
            style={{
              width: "620px",
              height: "300px",
              top: "-150px",
              left: "-100px",
              background: "rgba(59,167,255,.32)",
              opacity: 0.35,
            }}
          />
          <div
            className="ambient-blob"
            style={{
              width: "520px",
              height: "260px",
              bottom: "-110px",
              right: "-60px",
              background: "rgba(255,90,95,.26)",
              opacity: 0.28,
              animationDelay: "6s",
            }}
          />

          {/* Decorative ring */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "10%",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              border: "1px solid rgba(59,167,255,.2)",
              opacity: 0.5,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "12%",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "1px solid rgba(59,167,255,.15)",
              opacity: 0.4,
            }}
          />

          <div
            style={{
              position: "relative",
              padding: "clamp(2.5rem, 6vw, 5rem)",
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: "3.5rem",
              alignItems: "center",
            }}
            className="trust-inner"
          >
            {/* Left copy */}
            <div className="animate-fade-up">
              <span
                style={{
                  fontSize: ".6875rem",
                  textTransform: "uppercase",
                  letterSpacing: ".18em",
                  fontWeight: 700,
                  color: "rgba(59,167,255,.9)",
                  display: "block",
                  marginBottom: ".875rem",
                }}
              >
                Confianza
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  marginBottom: "1.25rem",
                }}
              >
                La estética donde tu mascota se siente en casa.
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,.7)",
                  lineHeight: 1.7,
                  maxWidth: "380px",
                  fontSize: "1rem",
                }}
              >
                Nuestro equipo combina técnica profesional con cariño genuino, generando lazos
                duraderos con cada cliente que nos visita.
              </p>
            </div>

            {/* Metrics grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              {metrics.map((m, i) => (
                <div
                  key={m.l}
                  className="glass-dark animate-fade-up hover-lift"
                  style={{
                    borderRadius: "1.5rem",
                    padding: "1.75rem",
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
                      fontWeight: 800,
                      color: "white",
                      lineHeight: 1,
                      marginBottom: ".625rem",
                    }}
                  >
                    {m.v}
                  </div>
                  <div
                    style={{
                      fontSize: ".8125rem",
                      fontWeight: 700,
                      color: "rgba(147,210,255,.95)",
                      marginBottom: ".375rem",
                      letterSpacing: ".02em",
                    }}
                  >
                    {m.l}
                  </div>
                  <div
                    style={{ fontSize: ".75rem", color: "rgba(255,255,255,.65)", lineHeight: 1.6 }}
                  >
                    {m.d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .trust-inner { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
