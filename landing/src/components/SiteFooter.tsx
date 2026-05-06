import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navGroups = [
  {
    label: "Navegación",
    links: [
      { to: "/", label: "Inicio" },
      { to: "/servicios", label: "Servicios" },
      { to: "/nosotros", label: "Nosotros" },
      { to: "/contacto", label: "Contacto" },
      { to: "/intranet", label: "Portal interno" },
    ],
  },
  {
    label: "Servicios",
    links: [
      { to: "/servicios", label: "Baño profesional" },
      { to: "/servicios", label: "Corte de manto" },
      { to: "/servicios", label: "Corte higiénico" },
      { to: "/servicios", label: "Spa y cuidado" },
      { to: "/contacto", label: "Farmacia canina" },
    ],
  },
];

export function SiteFooter() {
  const contactItems = [
    { icon: MapPin, text: "Plaza 2048 Paseo de los Leones, Monterrey, N.L." },
    { icon: Clock, text: "Lun – Dom · 9:00 a.m. – 8:00 p.m." },
    { icon: Phone, text: "+52 81 1234 5678" },
    { icon: Mail, text: "doggiechic@gmail.com" },
  ] satisfies Array<{ icon: LucideIcon; text: string }>;

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--gradient-navy)",
        color: "white",
        marginTop: "0",
      }}
    >
      {/* Blobs */}
      <div
        className="ambient-blob"
        style={{
          width: "380px",
          height: "380px",
          top: "-100px",
          left: "-80px",
          background: "rgba(59,167,255,.25)",
          opacity: 0.3,
        }}
      />
      <div
        className="ambient-blob"
        style={{
          width: "320px",
          height: "320px",
          bottom: "-120px",
          right: "-60px",
          background: "rgba(20,121,212,.3)",
          opacity: 0.2,
          animationDelay: "7s",
        }}
      />
      <img
        src={logoImg}
        alt=""
        aria-hidden="true"
        className="brand-watermark"
        style={{
          width: "min(48vw, 560px)",
          minWidth: "280px",
          right: "2rem",
          top: "1rem",
          opacity: 0.055,
          filter: "brightness(0) invert(1)",
          transform: "rotate(-6deg)",
        }}
      />

      {/* Top divider */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(59,167,255,.25), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4.5rem 1.5rem 2.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "3.5rem",
            marginBottom: "4rem",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
            >
              <img
                className="site-footer-logo"
                src={logoImg}
                alt="Doggie Chic Studio"
                style={{
                  height: "190px",
                  width: "auto",
                  objectFit: "contain",
                  margin: "-1.25rem 0",
                  filter: "brightness(0) invert(1) drop-shadow(0 10px 24px rgba(59,167,255,.46))",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    lineHeight: 1.1,
                  }}
                >
                  Doggie Chic <br />
                  <span style={{ color: "rgba(59,167,255,.9)" }}>Studio</span>
                </div>
                <div
                  style={{
                    fontSize: ".7rem",
                    textTransform: "uppercase",
                    letterSpacing: ".15em",
                    color: "rgba(255,255,255,.6)",
                    fontWeight: 700,
                  }}
                >
                  Estética canina premium
                </div>
              </div>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,.65)",
                lineHeight: 1.75,
                maxWidth: "360px",
                fontSize: ".9375rem",
                marginBottom: "2rem",
              }}
            >
              Estética canina premium en Monterrey. Baño, corte, spa y productos especializados para
              consentir a tu mascota con la atención que se merece.
            </p>
            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: ".625rem" }}>
              {contactItems.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.text}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: ".625rem",
                      fontSize: ".875rem",
                      color: "rgba(255,255,255,.65)",
                    }}
                  >
                    <span
                      style={{ flexShrink: 0, marginTop: ".16rem", color: "rgba(59,167,255,.9)" }}
                    >
                      <Icon size={15} strokeWidth={2.2} />
                    </span>
                    {c.text}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nav columns */}
          {navGroups.map((g) => (
            <div key={g.label}>
              <div
                style={{
                  fontSize: ".6875rem",
                  textTransform: "uppercase",
                  letterSpacing: ".18em",
                  fontWeight: 700,
                  color: "rgba(255,255,255,.4)",
                  marginBottom: "1.25rem",
                }}
              >
                {g.label}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: ".625rem",
                }}
              >
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      style={{
                        color: "rgba(255,255,255,.7)",
                        textDecoration: "none",
                        fontSize: ".9375rem",
                        transition: "color .2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "rgba(59,167,255,.9)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.7)")
                      }
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA bar */}
        <div
          style={{
            background: "rgba(255,255,255,.06)",
            border: "1px solid rgba(255,255,255,.1)",
            borderRadius: "1.25rem",
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.0625rem",
                marginBottom: ".25rem",
              }}
            >
              ¿Listo para consentir a tu mascota?
            </div>
            <div style={{ color: "rgba(255,255,255,.65)", fontSize: ".875rem" }}>
              Escríbenos directamente por WhatsApp
            </div>
          </div>
          <a
            href="https://wa.me/528112345678?text=Hola%20Doggie%20Chic%20Studio%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20servicios"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".5rem",
              padding: ".75rem 1.5rem",
              borderRadius: "999px",
              background: "linear-gradient(135deg,#25D366,#128C7E)",
              color: "white",
              fontWeight: 700,
              fontSize: ".9375rem",
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(37,211,102,.3)",
              transition: "transform .2s, box-shadow .2s",
              whiteSpace: "nowrap",
            }}
          >
            <MessageCircle size={17} strokeWidth={2.35} />
            Contactar por WhatsApp
          </a>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.08)",
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ fontSize: ".8125rem", color: "rgba(255,255,255,.45)" }}>
            © 2026 Doggie Chic Studio · Hecho con cuidado en Monterrey, N.L.
          </div>
          <div style={{ fontSize: ".8125rem", color: "rgba(255,255,255,.35)" }}>
            Estética canina premium
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .site-footer-logo { height: 150px !important; }
        }
      `}</style>
    </footer>
  );
}
