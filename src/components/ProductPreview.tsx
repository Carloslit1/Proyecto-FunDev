import { Link } from "@tanstack/react-router";
// ── Imagen: reemplaza productosImg en src/assets/imagenes/index.ts → productos-doggie.jpg
import { productosImg } from "@/assets/imagenes/index";

const products = [
  { name: "Perfume pet-safe",        cat: "Boutique",  price: "$240", icon: "◎" },
  { name: "Antiparasitario premium", cat: "Farmacia",  price: "$380", icon: "◇" },
  { name: "Shampoo dermatológico",   cat: "Cuidado",   price: "$310", icon: "✦" },
  { name: "Cepillo dental canino",   cat: "Higiene",   price: "$160", icon: "✿" },
];

const categories = ["Perfumes", "Antiparasitarios", "Accesorios", "Juguetes", "Higiene canina"];

export function ProductPreview() {
  return (
    <section
      className="section-shell"
      style={{
        background: "linear-gradient(170deg, #FFFFFF 0%, #EAF4FF 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="ambient-blob"
        style={{ width: "380px", height: "380px", bottom: "-60px", left: "-60px", background: "rgba(11,101,194,.14)" }}
      />

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="animate-fade-up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
            Boutique & farmacia
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
            Productos{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #1479D4, #3BA7FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              especializados
            </em>
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: "520px",
              margin: "0 auto",
              fontWeight: 400,
            }}
          >
            Perfumes, antiparasitarios, accesorios, juguetes e higiene seleccionados
            para complementar el cuidado en casa.
          </p>
        </div>

        {/* Category pills */}
        <div
          className="animate-fade-up delay-100"
          style={{ display: "flex", flexWrap: "wrap", gap: ".625rem", justifyContent: "center", marginBottom: "4rem" }}
        >
          {categories.map((c, i) => (
            <span
              key={c}
              style={{
                padding: ".45rem 1.25rem",
                borderRadius: "999px",
                fontSize: ".8125rem",
                fontWeight: 700,
                letterSpacing: ".02em",
                background: i === 0 ? "var(--gradient-primary)" : "white",
                color: i === 0 ? "white" : "var(--color-text-secondary)",
                border: `1.5px solid ${i === 0 ? "transparent" : "var(--border)"}`,
                boxShadow: i === 0 ? "0 4px 16px rgba(11,101,194,.3)" : "var(--shadow-card)",
                cursor: "pointer",
                transition: "all .2s",
              }}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Main grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "3.5rem", alignItems: "center" }}
          className="product-grid"
        >
          {/* Image side */}
          <div className="animate-fade-up" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-2.5rem",
                background: "radial-gradient(ellipse at 50% 50%, rgba(11,101,194,.22) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(35px)",
              }}
              className="animate-glow"
            />
            <div
              style={{
                position: "relative",
                borderRadius: "2.25rem",
                overflow: "hidden",
                boxShadow: "var(--shadow-premium)",
                aspectRatio: "4/3",
              }}
            >
              {/* REEMPLAZAR con: src/assets/imagenes/productos-doggie.jpg */}
              <img
                src={productosImg}
                alt="Productos premium Doggie Chic Studio — farmacia y boutique canina"
                width={900}
                height={675}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top right, rgba(6,43,79,.38), transparent 60%)",
                }}
              />
              {/* Corner info badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  left: "1.5rem",
                  background: "rgba(255,255,255,.88)",
                  backdropFilter: "blur(18px) saturate(150%)",
                  WebkitBackdropFilter: "blur(18px) saturate(150%)",
                  borderRadius: "1.125rem",
                  padding: ".75rem 1.125rem",
                  border: "1px solid rgba(255,255,255,.7)",
                  boxShadow: "0 4px 16px rgba(6,43,79,.12)",
                }}
              >
                <div
                  style={{
                    fontSize: ".58rem",
                    textTransform: "uppercase",
                    letterSpacing: ".15em",
                    fontWeight: 700,
                    color: "var(--color-primary)",
                    marginBottom: ".2rem",
                  }}
                >
                  Disponible en tienda
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: ".9375rem",
                    color: "var(--foreground)",
                  }}
                >
                  +50 productos
                </div>
              </div>
            </div>
          </div>

          {/* Products side */}
          <div className="animate-fade-up delay-200">
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2.25rem" }}
            >
              {products.map((p) => (
                <div
                  key={p.name}
                  style={{
                    background: "white",
                    borderRadius: "1.375rem",
                    border: "1.5px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                    padding: "1.375rem",
                    transition: "transform .3s, box-shadow .3s, border-color .25s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "var(--shadow-premium)";
                    el.style.borderColor = "rgba(11,101,194,.25)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "";
                    el.style.boxShadow = "var(--shadow-card)";
                    el.style.borderColor = "var(--border)";
                  }}
                >
                  <div style={{ fontSize: "1.375rem", marginBottom: ".625rem", color: "var(--color-primary)" }}>
                    {p.icon}
                  </div>
                  <div
                    style={{
                      fontSize: ".62rem",
                      textTransform: "uppercase",
                      letterSpacing: ".12em",
                      fontWeight: 700,
                      color: "var(--color-text-muted)",
                      marginBottom: ".3rem",
                    }}
                  >
                    {p.cat}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: ".9375rem",
                      color: "var(--foreground)",
                      marginBottom: ".5rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.name}
                  </div>
                  <div style={{ fontWeight: 800, color: "var(--color-primary)", fontSize: "1.0625rem" }}>
                    {p.price}
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contacto" className="btn-premium" style={{ display: "inline-flex" }}>
              Explorar productos →
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .product-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
