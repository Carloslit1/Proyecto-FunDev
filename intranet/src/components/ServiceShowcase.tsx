// ── Imágenes: reemplaza en src/assets/imagenes/index.ts cuando tengas fotos reales
import { banoImg, corteImg, spaImg, higienicoImg } from "@/assets/imagenes/index";

const services = [
  {
    img: banoImg,
    // Reemplazar con: src/assets/imagenes/servicio-bano.jpg
    tag: "Bienestar",
    title: "Baño profesional",
    desc: "Productos premium hipoalergénicos, secado controlado y cuidado dermatológico para cada tipo de pelo.",
  },
  {
    img: corteImg,
    // Reemplazar con: src/assets/imagenes/servicio-corte.jpg
    tag: "Estilismo",
    title: "Corte de manto",
    desc: "Cortes de raza realizados por estilistas certificados con instrumentos de alta precisión.",
  },
  {
    img: higienicoImg,
    // Reemplazar con: src/assets/imagenes/servicio-higienico.jpg
    tag: "Higiene",
    title: "Corte higiénico",
    desc: "Limpieza de oídos, recorte de uñas y zona higiénica con productos dermatológicos certificados.",
  },
  {
    img: spaImg,
    // Reemplazar con: src/assets/imagenes/servicio-spa.jpg
    tag: "Spa",
    title: "Spa y cuidado de piel",
    desc: "Hidratación, masajes y aromaterapia pet-safe en un ambiente diseñado para la calma.",
  },
];

export function ServiceShowcase() {
  return (
    <section
      className="section-shell"
      style={{ background: "linear-gradient(175deg, #EAF4FF 0%, #F5FAFF 100%)" }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div
          className="animate-fade-up"
          style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center", marginBottom: "4.5rem" }}
        >
          <span
            style={{
              display: "block",
              marginBottom: ".875rem",
              fontSize: ".72rem",
              fontWeight: 700,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "var(--color-primary)",
            }}
          >
            Experiencia premium
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 800,
              marginBottom: "1.25rem",
              color: "var(--foreground)",
              letterSpacing: "-.03em",
            }}
          >
            Cada visita es un{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #1479D4, #3BA7FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ritual de cuidado
            </em>
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              fontWeight: 400,
            }}
          >
            Servicios diseñados como un protocolo de spa, con productos especializados
            y un equipo capacitado para tratar a tu mascota con delicadeza.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}
        >
          {services.map((s, i) => (
            <article
              key={s.title}
              className="animate-fade-up"
              style={{
                animationDelay: `${i * 110}ms`,
                borderRadius: "2.25rem",
                overflow: "hidden",
                boxShadow: "var(--shadow-premium)",
                position: "relative",
                cursor: "pointer",
                transition: "transform .45s cubic-bezier(.2,.7,.2,1), box-shadow .45s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-8px)";
                el.style.boxShadow = "var(--shadow-glow)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "";
                el.style.boxShadow = "var(--shadow-premium)";
              }}
            >
              {/* Image */}
              <div style={{ aspectRatio: "4/5", overflow: "hidden" }}>
                <img
                  src={s.img}
                  alt={`${s.title} — Doggie Chic Studio`}
                  width={600}
                  height={750}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 1.3s cubic-bezier(.2,.7,.2,1)",
                  }}
                  className="svc-img"
                />
              </div>

              {/* Overlay — stronger gradient for readability */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(3,26,48,.92) 0%, rgba(6,43,79,.5) 40%, rgba(6,43,79,.08) 70%, transparent 90%)",
                }}
              />

              {/* Text content */}
              <div
                style={{
                  position: "absolute",
                  inset: "0 0 0 0",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: ".62rem",
                    textTransform: "uppercase",
                    letterSpacing: ".2em",
                    fontWeight: 700,
                    background: "rgba(255,255,255,.18)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,.3)",
                    padding: ".35rem .875rem",
                    borderRadius: "999px",
                    color: "white",
                    marginBottom: ".875rem",
                    width: "fit-content",
                    textShadow: "0 1px 2px rgba(0,0,0,.3)",
                  }}
                >
                  {s.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: ".625rem",
                    textShadow: "0 2px 8px rgba(0,0,0,.35)",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: ".875rem",
                    color: "rgba(255,255,255,.9)",
                    lineHeight: 1.65,
                    textShadow: "0 1px 4px rgba(0,0,0,.3)",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        article:hover .svc-img { transform: scale(1.07); }
      `}</style>
    </section>
  );
}
