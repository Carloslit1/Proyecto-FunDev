import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { ImmersiveProcess } from "@/components/ImmersiveProcess";
import { TrustMetrics } from "@/components/TrustMetrics";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Doggie Chic Studio" },
      {
        name: "description",
        content:
          "Paquetes de baño, corte, spa, higiene y farmacia canina premium en Plaza 2048, Monterrey.",
      },
    ],
  }),
  component: Page,
});

const paquetes = [
  {
    tag: "Esencial",
    title: "Paquete Baño",
    desc: "Shampoo premium hipoalergénico, acondicionador, secado y cepillado profesional.",
    price: "Desde $290",
    features: [
      "Shampoo especializado",
      "Acondicionador hidratante",
      "Secado controlado",
      "Cepillado final",
    ],
    featured: false,
  },
  {
    tag: "Más elegido",
    title: "Paquete Básico",
    desc: "Baño completo + corte de uñas + limpieza de oídos con productos premium.",
    price: "Desde $390",
    features: ["Todo del Paquete Baño", "Corte de uñas", "Limpieza de oídos", "Perfumado pet-safe"],
    featured: true,
  },
  {
    tag: "Premium",
    title: "Paquete Completo",
    desc: "Baño, corte de raza, uñas, oídos, zona higiénica y perfumado pet-safe.",
    price: "Desde $590",
    features: [
      "Todo del Paquete Básico",
      "Corte de raza",
      "Zona higiénica",
      "Hidratación profunda",
    ],
    featured: false,
  },
];

function Page() {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden", background: "var(--gradient-hero)" }}>
      <SiteHeader />

      {/* Page hero */}
      <section
        style={{
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
            right: "-100px",
            background: "rgba(59,167,255,.2)",
          }}
        />
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="animate-fade-up">
            <span className="label-overline" style={{ display: "block", marginBottom: ".75rem" }}>
              Servicios
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 700,
                letterSpacing: "-.04em",
                marginBottom: "1.25rem",
              }}
            >
              Paquetes y servicios <span className="text-gradient">premium</span>
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              Atendemos a tu mascota con productos premium, instalaciones higiénicas y personal
              capacitado para cada tipo de raza.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section style={{ paddingBottom: "5rem", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {paquetes.map((p, i) => (
              <article
                key={p.title}
                className="animate-fade-up hover-lift"
                style={{
                  animationDelay: `${i * 100}ms`,
                  background: p.featured ? "var(--gradient-navy)" : "white",
                  borderRadius: "2rem",
                  border: p.featured ? "none" : "1px solid var(--color-silver)",
                  boxShadow: p.featured
                    ? "var(--shadow-premium), 0 0 50px rgba(59,167,255,.2)"
                    : "var(--shadow-card)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  color: p.featured ? "white" : "var(--foreground)",
                }}
              >
                {p.featured && (
                  <>
                    <div
                      className="ambient-blob"
                      style={{
                        width: "250px",
                        height: "250px",
                        top: "-80px",
                        right: "-60px",
                        background: "rgba(59,167,255,.35)",
                        opacity: 0.4,
                      }}
                    />
                    <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem" }}>
                      <span
                        style={{
                          background: "var(--gradient-primary)",
                          color: "white",
                          padding: ".3rem .875rem",
                          borderRadius: "999px",
                          fontSize: ".7rem",
                          fontWeight: 700,
                          letterSpacing: ".1em",
                          textTransform: "uppercase",
                          boxShadow: "0 4px 14px rgba(59,167,255,.4)",
                        }}
                      >
                        <span
                          style={{ display: "inline-flex", alignItems: "center", gap: ".35rem" }}
                        >
                          <BadgeCheck size={13} strokeWidth={2.35} />
                          {p.tag}
                        </span>
                      </span>
                    </div>
                  </>
                )}
                {!p.featured && (
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: ".7rem",
                      textTransform: "uppercase",
                      letterSpacing: ".12em",
                      fontWeight: 700,
                      padding: ".3rem .875rem",
                      borderRadius: "999px",
                      background: "var(--color-ice)",
                      color: "var(--color-mid)",
                      marginBottom: "1.25rem",
                      width: "fit-content",
                      border: "1px solid var(--color-silver)",
                    }}
                  >
                    {p.tag}
                  </span>
                )}
                {p.featured && <div style={{ marginBottom: "1.25rem", paddingTop: "2rem" }} />}

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.625rem",
                    fontWeight: 700,
                    marginBottom: ".75rem",
                    position: "relative",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: ".9375rem",
                    color: p.featured ? "rgba(255,255,255,.75)" : "var(--color-text-muted)",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                    position: "relative",
                  }}
                >
                  {p.desc}
                </p>

                {/* Features */}
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".625rem",
                    marginBottom: "2rem",
                    flex: 1,
                    position: "relative",
                  }}
                >
                  {p.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".625rem",
                        fontSize: ".875rem",
                        color: p.featured ? "rgba(255,255,255,.8)" : "var(--foreground)",
                      }}
                    >
                      <span
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          background: p.featured ? "rgba(59,167,255,.3)" : "var(--color-ice)",
                          border: p.featured
                            ? "1px solid rgba(59,167,255,.5)"
                            : "1px solid var(--color-silver)",
                          display: "grid",
                          placeItems: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2 6l3 3 5-5"
                            stroke={p.featured ? "#3BA7FF" : "#1479D4"}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    borderTop: `1px solid ${p.featured ? "rgba(255,255,255,.12)" : "var(--color-silver)"}`,
                    paddingTop: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: p.featured ? "white" : "var(--color-primary)",
                    }}
                  >
                    {p.price}
                  </span>
                  <Link
                    to="/contacto"
                    style={{
                      fontSize: ".875rem",
                      fontWeight: 700,
                      color: p.featured ? "rgba(59,167,255,.9)" : "var(--color-mid)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: ".35rem",
                      transition: "gap .2s",
                    }}
                  >
                    Solicitar info <ArrowRight size={15} strokeWidth={2.35} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceShowcase />
      <ImmersiveProcess />
      <TrustMetrics />

      {/* Final CTA */}
      <section style={{ padding: "4rem 1.5rem", textAlign: "center", background: "white" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            ¿Tienes dudas sobre los servicios?
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "1rem",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            Contáctanos por WhatsApp o envíanos una consulta general. Con gusto te orientamos.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contacto" className="btn-premium">
              Solicitar información <ArrowRight size={17} strokeWidth={2.5} />
            </Link>
            <a
              href="https://wa.me/528112345678"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
