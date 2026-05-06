import { createFileRoute, Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, HandHeart, ShieldCheck, Sparkles, BadgeCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustMetrics } from "@/components/TrustMetrics";
// ── Imágenes: reemplaza en src/assets/imagenes/index.ts cuando tengas fotos reales
import { heroImg, equipoImg } from "@/assets/imagenes/index";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Doggie Chic Studio" },
      {
        name: "description",
        content:
          "Conoce a Doggie Chic Studio: estética canina premium en Plaza 2048 Paseo de los Leones, Monterrey. Equipo certificado y productos especializados.",
      },
    ],
  }),
  component: Page,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Higiene certificada",
    desc: "Instalaciones con protocolos de limpieza estrictos entre cada mascota.",
  },
  {
    icon: Sparkles,
    title: "Productos premium",
    desc: "Línea dermatológica hipoalergénica seleccionada por especialistas.",
  },
  {
    icon: HandHeart,
    title: "Manejo gentil",
    desc: "Técnicas de manejo bajo estrés mínimo para la comodidad de tu mascota.",
  },
  {
    icon: BadgeCheck,
    title: "Atención personalizada",
    desc: "Cada perro tiene su propio plan de cuidado según raza y tipo de pelo.",
  },
] satisfies Array<{ icon: LucideIcon; title: string; desc: string }>;

function Page() {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <SiteHeader />

      {/* Hero section */}
      <section
        style={{
          background: "var(--gradient-hero)",
          position: "relative",
          overflow: "hidden",
          paddingTop: "5rem",
          paddingBottom: "4rem",
        }}
      >
        <div
          className="ambient-blob"
          style={{
            width: "500px",
            height: "500px",
            top: "-150px",
            left: "-100px",
            background: "rgba(59,167,255,.22)",
          }}
        />
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "5rem",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
          className="about-hero"
        >
          <div className="animate-fade-up">
            <span className="label-overline" style={{ display: "block", marginBottom: ".875rem" }}>
              Nuestra historia
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 700,
                letterSpacing: "-.04em",
                marginBottom: "1.5rem",
              }}
            >
              Cuidado profesional con <span className="text-gradient">corazón</span>
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.125rem",
                color: "var(--color-text-muted)",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
              }}
            >
              <p>
                Doggie Chic Studio nació con la misión de elevar el estándar de la estética canina
                en Monterrey. Nos ubicamos en{" "}
                <strong style={{ color: "var(--foreground)" }}>
                  Plaza 2048 Paseo de los Leones
                </strong>
                , con instalaciones diseñadas para la comodidad y seguridad de las mascotas.
              </p>
              <p>
                Trabajamos con estilistas certificados, productos premium y una línea de farmacia
                canina para cubrir todas las necesidades de cuidado e higiene. Atendemos{" "}
                <strong style={{ color: "var(--foreground)" }}>
                  todos los días de 9:00 a 20:00
                </strong>
                .
              </p>
              <p>
                Cada mascota es tratada con el mismo estándar que daríamos a la nuestra: con
                paciencia, técnica y genuino amor por los animales.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2.5rem" }}>
              <Link to="/servicios" className="btn-premium">
                Ver servicios <ArrowRight size={17} strokeWidth={2.5} />
              </Link>
              <Link to="/contacto" className="btn-ghost">
                Contáctanos
              </Link>
            </div>
          </div>
          <div className="animate-fade-up delay-200" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-2rem",
                background: "var(--gradient-glow)",
                opacity: 0.6,
                borderRadius: "3rem",
                filter: "blur(40px)",
              }}
              className="animate-glow"
            />
            <div
              style={{
                position: "relative",
                borderRadius: "2rem",
                overflow: "hidden",
                boxShadow: "var(--shadow-premium)",
                aspectRatio: "1/1",
              }}
            >
              {/* REEMPLAZAR con: src/assets/imagenes/equipo-doggie.jpg */}
              <img
                src={heroImg}
                alt="Doggie Chic Studio — cuidado premium"
                width={900}
                height={900}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top right, rgba(6,43,79,.4), transparent 60%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="section-shell" style={{ background: "white" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="animate-fade-up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="label-overline" style={{ display: "block", marginBottom: ".75rem" }}>
              Lo que nos define
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 700,
              }}
            >
              Nuestros valores
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="card-premium animate-fade-up hover-lift"
                  style={{ padding: "2rem", animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className="icon-tile"
                    style={{ width: "48px", height: "48px", marginBottom: "1rem" }}
                  >
                    <Icon size={22} strokeWidth={2.15} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1875rem",
                      fontWeight: 700,
                      marginBottom: ".625rem",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontSize: ".9375rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial photo break */}
      <section style={{ position: "relative", overflow: "hidden", height: "420px" }}>
        {/* REEMPLAZAR con: src/assets/imagenes/contacto-doggie.jpg */}
        <img
          src={equipoImg}
          alt="Doggie Chic Studio en acción"
          width={1920}
          height={600}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(6,43,79,.75) 0%, rgba(6,43,79,.3) 60%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            padding: "0 clamp(1.5rem, 6vw, 6rem)",
          }}
        >
          <div style={{ maxWidth: "520px" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.2,
              }}
            >
              "Porque tu mascota merece más que una estética ordinaria."
            </p>
            <div
              style={{
                marginTop: "1rem",
                fontSize: ".875rem",
                color: "rgba(255,255,255,.7)",
                fontWeight: 500,
              }}
            >
              — Equipo Doggie Chic Studio
            </div>
          </div>
        </div>
      </section>

      <TrustMetrics />
      <SiteFooter />

      <style>{`
        @media (max-width: 900px) {
          .about-hero { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </div>
  );
}
