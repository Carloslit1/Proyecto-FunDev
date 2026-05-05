const steps = [
  { n: "01", title: "Valoración inicial", desc: "Revisamos el tipo de pelo, piel y temperamento de tu mascota para diseñar el plan ideal." },
  { n: "02", title: "Baño y limpieza profunda", desc: "Agua templada, productos premium dermatológicos y manejo gentil para máxima comodidad." },
  { n: "03", title: "Corte, higiene y secado", desc: "Estilismo profesional, recorte de uñas, oídos y secado controlado con cuidado experto." },
  { n: "04", title: "Entrega limpia y feliz", desc: "Perfumado pet-safe, cepillado final y revisión de calidad antes de la entrega." },
];

export function ImmersiveProcess() {
  return (
    <section className="section-shell" style={{ position: "relative", overflow: "hidden", background: "white" }}>
      <div className="ambient-blob" style={{ width: "400px", height: "400px", top: "-80px", right: "-80px", background: "rgba(59,167,255,.15)", animationDelay: "3s" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="animate-fade-up" style={{ maxWidth: "560px", marginBottom: "4rem" }}>
          <span className="label-overline" style={{ display: "block", marginBottom: ".75rem" }}>Nuestro proceso</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, marginBottom: "1.25rem" }}>
            Un ritual pensado{" "}
            <span className="text-gradient">paso a paso</span>
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "var(--color-text-muted)", lineHeight: 1.7 }}>
            Cada etapa está diseñada para que tu mascota se sienta cómoda y reciba
            atención con el más alto estándar profesional.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Connector line */}
          <div className="divider-gradient desktop-line" style={{ position: "absolute", top: "2.5rem", left: "2.5rem", right: "2.5rem" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="card-premium animate-fade-up hover-lift"
                style={{ padding: "2rem", animationDelay: `${i * 120}ms`, position: "relative" }}
              >
                {/* Step number + connector dot */}
                <div style={{ display: "flex", alignItems: "center", gap: ".875rem", marginBottom: "1.5rem" }}>
                  <div style={{ display: "grid", placeItems: "center", width: "52px", height: "52px", borderRadius: "1rem", background: "var(--gradient-primary)", color: "white", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.0625rem", flexShrink: 0, boxShadow: "0 6px 20px rgba(59,167,255,.35)" }}>
                    {s.n}
                  </div>
                  <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(59,167,255,.3), transparent)" }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1875rem", fontWeight: 700, color: "var(--foreground)", marginBottom: ".625rem" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: ".875rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
