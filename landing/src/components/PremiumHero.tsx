import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
// ── Imagen: reemplaza heroImg en src/assets/imagenes/index.ts cuando tengas hero-doggie.jpg
import { heroImg } from "@/assets/imagenes/index";
import logoImg from "@/assets/logo.png";

const badges = ["Cuidado premium", "Productos especializados", "Monterrey, N.L."];

export function PremiumHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "94vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--gradient-hero)",
      }}
    >
      {/* ── Ambient depth layers ── */}
      <div
        className="ambient-blob"
        style={{
          width: "640px",
          height: "640px",
          top: "-200px",
          left: "-200px",
          background: "rgba(11,101,194,.22)",
          animationDelay: "0s",
        }}
      />
      <div
        className="ambient-blob"
        style={{
          width: "520px",
          height: "520px",
          top: "40px",
          right: "-180px",
          background: "rgba(59,167,255,.16)",
          animationDelay: "5s",
        }}
      />
      <div
        className="ambient-blob"
        style={{
          width: "680px",
          height: "280px",
          bottom: "-120px",
          left: "28%",
          background: "rgba(255,90,95,.12)",
          animationDelay: "10s",
        }}
      />
      <div className="color-sweep" />
      <img
        src={logoImg}
        alt=""
        aria-hidden="true"
        className="brand-watermark"
        style={{
          width: "min(62vw, 760px)",
          minWidth: "360px",
          right: "max(1.5rem, calc(50% - 620px))",
          top: "7rem",
          transform: "rotate(-7deg)",
          zIndex: 0,
        }}
      />

      {/* ── Subtle dot grid ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(11,101,194,.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "clamp(3rem, 6vw, 5rem) 2rem clamp(4rem, 7vw, 5.5rem)",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "4.5rem",
            alignItems: "center",
          }}
          className="hero-inner"
        >
          {/* ── Left — Copy ── */}
          <div className="animate-fade-up">
            {/* Location pill */}
            <div
              className="glass"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".5rem",
                borderRadius: "999px",
                padding: ".4rem 1.125rem",
                marginBottom: "2.25rem",
                fontSize: ".72rem",
                fontWeight: 700,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "var(--color-mid)",
                border: "1px solid rgba(11,101,194,.2)",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "var(--color-primary)",
                  display: "inline-block",
                  boxShadow: "0 0 0 3px rgba(11,101,194,.2)",
                }}
                className="animate-glow"
              />
              Plaza 2048 · Paseo de los Leones · Monterrey
            </div>

            {/* Brand name */}
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                fontWeight: 500,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                color: "var(--color-coral)",
                marginBottom: "1rem",
                opacity: 0.9,
              }}
            >
              Doggie Chic Studio
            </div>

            {/* Main headline */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
                fontWeight: 800,
                letterSpacing: "-.035em",
                lineHeight: 1.0,
                marginBottom: "1.5rem",
                color: "var(--foreground)",
              }}
            >
              Estética canina{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #1479D4 0%, #00A99D 52%, #FF5A5F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline",
                }}
              >
                premium
              </em>
              <span
                style={{
                  display: "block",
                  fontSize: ".52em",
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: "var(--color-text-secondary)",
                  letterSpacing: "-.01em",
                  lineHeight: 1.45,
                  marginTop: ".6rem",
                }}
              >
                para perros con estilo.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "1.075rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
                maxWidth: "500px",
                marginBottom: "2.75rem",
                fontWeight: 400,
              }}
            >
              Baño, corte, higiene, spa y productos especializados para consentir a tu mascota en un
              espacio diseñado como una boutique de bienestar, en Monterrey.
            </p>

            {/* CTAs */}
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: ".875rem", marginBottom: "2.5rem" }}
            >
              <Link to="/servicios" className="btn-warm">
                Conocer servicios <ArrowRight size={17} strokeWidth={2.5} />
              </Link>
              <a
                href="https://wa.me/528112345678"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".5rem",
                  padding: ".875rem 1.875rem",
                  borderRadius: "999px",
                  fontFamily: "var(--font-sans)",
                  fontSize: ".9375rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  background: "rgba(255,255,255,.78)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1.5px solid rgba(0,169,157,.22)",
                  textDecoration: "none",
                  transition: "all .25s",
                  whiteSpace: "nowrap",
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              {badges.map((b) => (
                <span
                  key={b}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: ".375rem",
                    borderRadius: "999px",
                    padding: ".375rem 1rem",
                    fontSize: ".72rem",
                    fontWeight: 700,
                    letterSpacing: ".05em",
                    color: "var(--color-mid)",
                    background: "rgba(255,255,255,.7)",
                    border: "1px solid rgba(11,101,194,.18)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <span style={{ color: "var(--color-primary)", fontSize: ".55rem" }}>◆</span>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right — Visual ── */}
          <div className="animate-fade-up delay-200" style={{ position: "relative" }}>
            {/* Glow aura */}
            <div
              style={{
                position: "absolute",
                inset: "-3rem",
                background:
                  "linear-gradient(135deg, rgba(11,101,194,.22), rgba(0,169,157,.18), rgba(255,90,95,.14))",
                borderRadius: "3rem",
                filter: "blur(34px)",
              }}
              className="animate-glow"
            />

            {/* Main image frame */}
            <div
              style={{
                position: "relative",
                borderRadius: "2.75rem",
                overflow: "hidden",
                boxShadow:
                  "0 40px 100px -30px rgba(6,43,79,.35), 0 16px 40px -12px rgba(255,90,95,.18)",
                aspectRatio: "4/5",
                border: "1px solid rgba(255,255,255,.74)",
              }}
            >
              {/* REEMPLAZA esta imagen con hero-doggie.jpg cuando esté disponible */}
              <img
                src={heroImg}
                alt="Perro recién atendido en Doggie Chic Studio, Monterrey"
                width={960}
                height={1200}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Overlay gradient for depth */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(6,43,79,.72) 0%, rgba(6,43,79,.08) 45%, transparent 70%)",
                }}
              />

              {/* Image caption bar */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                  background: "rgba(255,255,255,.82)",
                  backdropFilter: "blur(20px) saturate(160%)",
                  WebkitBackdropFilter: "blur(20px) saturate(160%)",
                  border: "1px solid rgba(255,255,255,.7)",
                  borderRadius: "1.25rem",
                  padding: "1rem 1.375rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  boxShadow: "0 4px 20px rgba(6,43,79,.12)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: ".6rem",
                      textTransform: "uppercase",
                      letterSpacing: ".15em",
                      fontWeight: 700,
                      color: "var(--color-mid)",
                    }}
                  >
                    Estética canina premium
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: ".9375rem",
                      color: "var(--foreground)",
                      marginTop: ".2rem",
                    }}
                  >
                    Resultado profesional
                  </div>
                </div>
                <div style={{ display: "flex", gap: ".3rem" }}>
                  {["#3BA7FF", "#00A99D", "#FF5A5F"].map((c) => (
                    <span
                      key={c}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: c,
                        border: "2px solid white",
                        boxShadow: "0 2px 6px rgba(0,0,0,.18)",
                        display: "inline-block",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat — left */}
            <div
              style={{
                position: "absolute",
                left: "-3.5rem",
                top: "2.75rem",
                background: "white",
                borderRadius: "1.25rem",
                padding: ".875rem 1.375rem",
                minWidth: "140px",
                boxShadow: "0 18px 54px -14px rgba(6,43,79,.24), 0 4px 14px rgba(0,169,157,.12)",
                border: "1px solid rgba(0,169,157,.22)",
              }}
              className="animate-float"
            >
              <div
                style={{
                  fontSize: ".65rem",
                  color: "var(--color-text-muted)",
                  fontWeight: 600,
                  marginBottom: ".3rem",
                  textTransform: "uppercase",
                  letterSpacing: ".08em",
                }}
              >
                Clientes recurrentes
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--foreground)",
                  lineHeight: 1,
                }}
              >
                +90%
              </div>
            </div>

            {/* Floating stat — right */}
            <div
              style={{
                position: "absolute",
                right: "-3rem",
                bottom: "7rem",
                background: "white",
                borderRadius: "1.25rem",
                padding: ".875rem 1.375rem",
                minWidth: "150px",
                boxShadow: "0 18px 54px -14px rgba(6,43,79,.24), 0 4px 14px rgba(255,90,95,.13)",
                border: "1px solid rgba(255,90,95,.22)",
              }}
              className="animate-float delay-400"
            >
              <div
                style={{
                  fontSize: ".65rem",
                  color: "var(--color-text-muted)",
                  fontWeight: 600,
                  marginBottom: ".3rem",
                  textTransform: "uppercase",
                  letterSpacing: ".08em",
                }}
              >
                Atención
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "var(--color-primary)",
                  lineHeight: 1,
                }}
              >
                Personalizada
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-inner {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            padding-top: 1rem !important;
          }
        }
        @media (max-width: 600px) {
          .hero-inner {
            padding-inline: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
