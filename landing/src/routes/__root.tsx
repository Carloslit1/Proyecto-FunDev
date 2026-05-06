import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import logoUrl from "../assets/logo.png";

function NotFoundComponent() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--gradient-hero)",
        padding: "2rem",
      }}
    >
      <div style={{ maxWidth: "28rem", textAlign: "center" }}>
        <div
          style={{
            fontSize: "7rem",
            fontWeight: 700,
            fontFamily: "var(--font-display)",
            background: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1,
          }}
        >
          404
        </div>
        <h2
          style={{
            marginTop: "1.25rem",
            fontSize: "1.5rem",
            fontFamily: "var(--font-display)",
            color: "var(--foreground)",
          }}
        >
          Página no encontrada
        </h2>
        <p
          style={{
            marginTop: ".75rem",
            color: "var(--muted-foreground)",
            lineHeight: 1.6,
          }}
        >
          La página que buscas no existe o fue movida.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <Link to="/" className="btn-premium">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Doggie Chic Studio — Estética canina premium en Monterrey" },
      {
        name: "description",
        content:
          "Doggie Chic Studio: estética canina premium en Plaza 2048 Paseo de los Leones, Monterrey. Baño, corte, spa y productos especializados para tu mascota.",
      },
      { name: "theme-color", content: "#3BA7FF" },
      { property: "og:site_name", content: "Doggie Chic Studio" },
      { property: "og:title", content: "Doggie Chic Studio — Estética canina premium" },
      {
        property: "og:description",
        content: "Cuidado premium para perros con estilo, higiene y bienestar en Monterrey.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: logoUrl },
      { rel: "apple-touch-icon", href: logoUrl },
      /* SF Pro se carga automáticamente desde el SO — no se requiere importar fuentes externas */
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
