import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Doggie Chic Studio" },
      {
        name: "description",
        content:
          "Plaza 2048 Paseo de los Leones, Monterrey. Horario 9:00–20:00. Envía una consulta general o escríbenos por WhatsApp.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <SiteHeader />

      {/* Page hero */}
      <section
        style={{
          background: "var(--gradient-hero)",
          position: "relative",
          overflow: "hidden",
          paddingTop: "5rem",
          paddingBottom: "3rem",
          textAlign: "center",
        }}
      >
        <div
          className="ambient-blob"
          style={{ width: "440px", height: "440px", top: "-120px", right: "-80px", background: "rgba(59,167,255,.2)" }}
        />
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
          <div className="animate-fade-up">
            <span className="label-overline" style={{ display: "block", marginBottom: ".75rem" }}>
              Contacto
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
              Hablemos sobre{" "}
              <span className="text-gradient">tu mascota</span>
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              Envíanos tu consulta, llámanos o escríbenos por WhatsApp.
              Atendemos todos los días de 9:00 a.m. a 8:00 p.m.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}
