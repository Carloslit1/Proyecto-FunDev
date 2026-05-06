import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CircleCheck, Clock, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Plaza 2048 Paseo de los Leones",
    sub: "Cumbres, Monterrey, Nuevo León",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes – Domingo",
    sub: "9:00 a.m. – 8:00 p.m.",
  },
  {
    icon: Phone,
    label: "Teléfono / WhatsApp",
    value: "+52 81 1234 5678",
    sub: "Atención continua",
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "doggiechic@gmail.com",
    sub: "Respondemos en menos de 24 h",
  },
] satisfies Array<{ icon: LucideIcon; label: string; value: string; sub: string }>;

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", msg: "" });

  return (
    <section
      className="section-shell"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FCFF 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="ambient-blob"
        style={{
          width: "360px",
          height: "360px",
          top: "-80px",
          right: "-80px",
          background: "rgba(59,167,255,.15)",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div className="animate-fade-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="label-overline" style={{ display: "block", marginBottom: ".75rem" }}>
            Contáctanos
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              marginBottom: "1.25rem",
            }}
          >
            Estamos a una visita de <span className="text-gradient">consentir a tu mascota</span>
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Resolvemos cualquier duda sobre nuestros servicios o productos. Escríbenos y te
            atenderemos pronto.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "3.5rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — Info */}
          <div className="animate-fade-up">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.125rem",
                marginBottom: "2rem",
              }}
            >
              {contactInfo.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.label}
                    className="premium-card"
                    style={{
                      padding: "1.375rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1.125rem",
                    }}
                  >
                    <div className="icon-tile" style={{ width: "48px", height: "48px" }}>
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: ".6875rem",
                          textTransform: "uppercase",
                          letterSpacing: ".12em",
                          fontWeight: 700,
                          color: "var(--color-text-muted)",
                          marginBottom: ".25rem",
                        }}
                      >
                        {c.label}
                      </div>
                      <div
                        style={{
                          fontWeight: 700,
                          color: "var(--foreground)",
                          fontSize: ".9375rem",
                        }}
                      >
                        {c.value}
                      </div>
                      <div style={{ fontSize: ".8125rem", color: "var(--color-text-muted)" }}>
                        {c.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="https://wa.me/528112345678?text=Hola%20Doggie%20Chic%20Studio%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20servicios"
              target="_blank"
              rel="noreferrer"
              className="btn-premium"
              style={{
                display: "inline-flex",
                background: "linear-gradient(135deg,#25D366,#128C7E)",
                boxShadow: "0 8px 28px rgba(37,211,102,.35)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Right — Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="card-premium animate-fade-up delay-200"
            style={{ padding: "2.5rem" }}
          >
            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.625rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  marginBottom: ".5rem",
                }}
              >
                Consulta general
              </h3>
              <p
                style={{
                  fontSize: ".9375rem",
                  color: "var(--color-text-secondary)",
                  fontWeight: 400,
                }}
              >
                Cuéntanos cómo podemos ayudarte.
              </p>
            </div>

            {sent ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "var(--color-aqua)",
                    marginBottom: "1rem",
                  }}
                >
                  <CircleCheck size={54} strokeWidth={2.1} />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    marginBottom: ".5rem",
                  }}
                >
                  ¡Mensaje enviado!
                </div>
                <div style={{ color: "var(--color-text-muted)" }}>
                  Te responderemos lo antes posible.
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <label
                    style={{
                      fontSize: ".72rem",
                      textTransform: "uppercase",
                      letterSpacing: ".12em",
                      fontWeight: 700,
                      color: "var(--foreground)",
                      display: "block",
                      marginBottom: ".5rem",
                    }}
                  >
                    Tu nombre
                  </label>
                  <input
                    required
                    className="input-premium"
                    placeholder="Nombre completo"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: ".72rem",
                      textTransform: "uppercase",
                      letterSpacing: ".12em",
                      fontWeight: 700,
                      color: "var(--foreground)",
                      display: "block",
                      marginBottom: ".5rem",
                    }}
                  >
                    Correo o teléfono
                  </label>
                  <input
                    required
                    className="input-premium"
                    placeholder="¿Cómo podemos contactarte?"
                    value={form.contact}
                    onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: ".72rem",
                      textTransform: "uppercase",
                      letterSpacing: ".12em",
                      fontWeight: 700,
                      color: "var(--foreground)",
                      display: "block",
                      marginBottom: ".5rem",
                    }}
                  >
                    Tu mensaje
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="input-premium"
                    placeholder="Cuéntanos sobre tu mascota o lo que quieres saber."
                    value={form.msg}
                    onChange={(e) => setForm((f) => ({ ...f, msg: e.target.value }))}
                    style={{ resize: "none" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-premium"
                  style={{ width: "100%", justifyContent: "center", marginTop: ".5rem" }}
                >
                  Enviar consulta <ArrowRight size={17} strokeWidth={2.5} />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
