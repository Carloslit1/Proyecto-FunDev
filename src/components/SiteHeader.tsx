import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Inicio", exact: true },
    { to: "/servicios", label: "Servicios" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          transition: "all .4s cubic-bezier(.2,.8,.2,1)",
          background: scrolled ? "rgba(255,255,255,.82)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(59,167,255,.15)" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(6,43,79,.06)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{ display: "flex", alignItems: "center", gap: ".625rem", textDecoration: "none" }}
          >
            <span
              style={{
                display: "grid",
                placeItems: "center",
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "var(--gradient-primary)",
                color: "white",
                fontSize: "1rem",
                fontWeight: 800,
                boxShadow: "0 4px 14px rgba(59,167,255,.4)",
                fontFamily: "var(--font-display)",
                flexShrink: 0,
              }}
            >
              D
            </span>
            <div style={{ lineHeight: 1.2 }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  letterSpacing: "-.02em",
                }}
              >
                Doggie Chic{" "}
                <span style={{ color: "var(--color-primary)" }}>Studio</span>
              </div>
              <div
                style={{
                  fontSize: ".6rem",
                  textTransform: "uppercase",
                  letterSpacing: ".15em",
                  color: "var(--color-text-muted)",
                  fontWeight: 600,
                }}
              >
                Estética canina premium
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".25rem",
              background: "rgba(255,255,255,.6)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,.5)",
              borderRadius: "999px",
              padding: ".375rem",
            }}
            className="hidden md:flex"
          >
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={l.exact ? { exact: true } : undefined}
                activeProps={{
                  style: {
                    background: "var(--gradient-primary)",
                    color: "white",
                    boxShadow: "0 2px 10px rgba(59,167,255,.35)",
                  },
                }}
                style={{
                  padding: ".4rem 1rem",
                  borderRadius: "999px",
                  fontSize: ".875rem",
                  fontWeight: 600,
                  color: "var(--foreground)",
                  textDecoration: "none",
                  transition: "all .2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(59,167,255,.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "";
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
            <Link
              to="/contacto"
              className="btn-premium hidden sm:inline-flex"
              style={{ fontSize: ".875rem", padding: ".6rem 1.25rem" }}
            >
              Contáctanos
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: ".625rem",
                border: "1px solid var(--color-silver)",
                background: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                cursor: "pointer",
                boxShadow: "var(--shadow-soft)",
              }}
              aria-label="Menú"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: "18px",
                    height: "2px",
                    borderRadius: "2px",
                    background: "var(--foreground)",
                    transition: "all .3s",
                    transform:
                      menuOpen && i === 0
                        ? "rotate(45deg) translate(5px,5px)"
                        : menuOpen && i === 2
                          ? "rotate(-45deg) translate(5px,-5px)"
                          : menuOpen && i === 1
                            ? "scaleX(0)"
                            : "none",
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: "68px 0 0",
            zIndex: 99,
            background: "rgba(255,255,255,.96)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderTop: "1px solid var(--color-silver)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            animation: "fadeUp .3s ease both",
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              activeOptions={l.exact ? { exact: true } : undefined}
              activeProps={{
                style: { color: "var(--color-primary)", background: "var(--color-ice)" },
              }}
              style={{
                display: "block",
                padding: ".875rem 1.25rem",
                borderRadius: "1rem",
                fontSize: "1.0625rem",
                fontWeight: 600,
                color: "var(--foreground)",
                textDecoration: "none",
                border: "1px solid transparent",
                transition: "all .2s",
              }}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: ".5rem" }}>
            <Link
              to="/contacto"
              onClick={() => setMenuOpen(false)}
              className="btn-premium"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Contáctanos
            </Link>
          </div>
          <Link
            to="/intranet"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              padding: ".625rem 1.25rem",
              borderRadius: "1rem",
              fontSize: ".875rem",
              fontWeight: 500,
              color: "var(--color-text-muted)",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "auto",
            }}
          >
            Portal interno →
          </Link>
        </div>
      )}
    </>
  );
}
