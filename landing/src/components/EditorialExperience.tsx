// ── Imagen: reemplaza equipoImg en src/assets/imagenes/index.ts → equipo-doggie.jpg
import { equipoImg } from "@/assets/imagenes/index";

export function EditorialExperience() {
  return (
    <section
      className="section-shell"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #FFF6ED 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="editorial-grid"
        >
          {/* Image */}
          <div className="animate-fade-up" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-2.5rem",
                background: "var(--gradient-glow)",
                opacity: 0.55,
                borderRadius: "3rem",
                filter: "blur(50px)",
              }}
              className="animate-glow"
            />
            <div
              style={{
                position: "relative",
                borderRadius: "2.25rem",
                overflow: "hidden",
                boxShadow:
                  "0 34px 90px -28px rgba(6,43,79,.34), 0 12px 36px -18px rgba(255,90,95,.28)",
                aspectRatio: "3/4",
                border: "1px solid rgba(255,255,255,.8)",
              }}
            >
              {/* REEMPLAZAR con: src/assets/imagenes/equipo-doggie.jpg */}
              <img
                src={equipoImg}
                alt="Una experiencia de cuidado diferente en Doggie Chic Studio"
                width={900}
                height={1200}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(6,43,79,.5) 0%, transparent 60%)",
                }}
              />
            </div>
            {/* Floating detail */}
            <div
              className="glass-card"
              style={{
                position: "absolute",
                bottom: "2rem",
                right: "-2rem",
                padding: "1.125rem 1.5rem",
                maxWidth: "200px",
                border: "1px solid rgba(0,169,157,.22)",
              }}
            >
              <div
                style={{
                  fontSize: ".6rem",
                  textTransform: "uppercase",
                  letterSpacing: ".15em",
                  fontWeight: 700,
                  color: "var(--color-mid)",
                  marginBottom: ".375rem",
                }}
              >
                Nuestro estándar
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.0625rem",
                  fontWeight: 800,
                  color: "var(--foreground)",
                  lineHeight: 1.2,
                }}
              >
                Cuidado certificado
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="animate-fade-up delay-200">
            <span className="label-overline" style={{ display: "block", marginBottom: ".875rem" }}>
              Nuestra filosofía
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 700,
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              Una experiencia de <span className="text-gradient">cuidado diferente</span>
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              En Doggie Chic Studio combinamos higiene, estilo y bienestar para que cada perro
              reciba un trato limpio, seguro y personalizado.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              Nuestros estilistas son capacitados en manejo animal gentil, productos dermatológicos
              y técnicas de corte de raza, porque sabemos que tu mascota merece más que una estética
              ordinaria.
            </p>

            {/* Feature list */}
            <div style={{ display: "flex", flexDirection: "column", gap: ".875rem" }}>
              {[
                "Estilistas certificados en manejo canino",
                "Productos hipoalergénicos y dermatológicos",
                "Ambiente seguro y sin jaulas innecesarias",
                "Atención individual por mascota",
              ].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "var(--gradient-primary)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    style={{ fontSize: ".9375rem", color: "var(--foreground)", fontWeight: 500 }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .editorial-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
