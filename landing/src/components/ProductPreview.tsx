import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Brush, Droplets, Package, ShieldCheck, HeartPulse, Sofa } from "lucide-react";
// ── Imagen: reemplaza productosImg en src/assets/imagenes/index.ts → productos-doggie.jpg
import { productosImg } from "@/assets/imagenes/index";

const FALLBACK_PRODUCTS = [
  { name: "Perfume pet-safe", cat: "Boutique", price: "$240", icon: Package, color: "#FF5A5F" },
  { name: "Antiparasitario premium", cat: "Farmacia", price: "$380", icon: ShieldCheck, color: "#1479D4" },
  { name: "Shampoo dermatológico", cat: "Cuidado", price: "$310", icon: Droplets, color: "#00A99D" },
  { name: "Cepillo dental canino", cat: "Higiene", price: "$160", icon: Brush, color: "#F59E0B" },
] satisfies Array<{ name: string; cat: string; price: string; icon: LucideIcon; color: string }>;

const API_BASE = "http://localhost:3000";

function getIconComponent(iconName: string): LucideIcon {
  switch(iconName) {
    case "comb": return Brush;
    case "bottle": return Droplets;
    case "spray": return Package;
    case "bowl": return HeartPulse;
    case "sofa": return Sofa;
    case "kit": return ShieldCheck;
    default: return Package;
  }
}

const categories = ["Perfumes", "Antiparasitarios", "Accesorios", "Juguetes", "Higiene canina"];

export function ProductPreview() {
  const [products, setProducts] = useState(FALLBACK_PRODUCTS);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${API_BASE}/api/catalogo/productos`, { signal: AbortSignal.timeout(3000) });
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            // Take the first 4 products or random 4
            const colors = ["#FF5A5F", "#1479D4", "#00A99D", "#F59E0B"];
            const mappedData = data.slice(0, 4).map((p: any, i: number) => ({
              name: p.nombre,
              cat: p.categoria,
              price: "Desde $150", // Or map a real price if available
              icon: getIconComponent(p.icon),
              color: colors[i % colors.length]
            }));
            setProducts(mappedData);
          }
        }
      } catch (error) {
        console.warn("No se pudo cargar productos desde API, usando fallback:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section
      className="section-shell"
      style={{
        background: "linear-gradient(170deg, #FFFFFF 0%, #EAF8FF 48%, #FFF6ED 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="ambient-blob"
        style={{
          width: "380px",
          height: "380px",
          bottom: "-60px",
          left: "-60px",
          background: "rgba(11,101,194,.14)",
        }}
      />

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
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
            Perfumes, antiparasitarios, accesorios, juguetes e higiene seleccionados para
            complementar el cuidado en casa.
          </p>
        </div>

        {/* Category pills */}
        <div
          className="animate-fade-up delay-100"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: ".625rem",
            justifyContent: "center",
            marginBottom: "4rem",
          }}
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
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="product-grid"
        >
          {/* Image side */}
          <div className="animate-fade-up" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-2.5rem",
                background:
                  "linear-gradient(135deg, rgba(11,101,194,.18), rgba(0,169,157,.18), rgba(255,90,95,.12))",
                borderRadius: "3rem",
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
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "2.25rem",
              }}
            >
              {products.map((p) => {
                const Icon = p.icon;
                return (
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
                    <div
                      className="icon-tile"
                      style={{
                        width: "44px",
                        height: "44px",
                        marginBottom: ".875rem",
                        color: p.color,
                      }}
                    >
                      <Icon size={22} strokeWidth={2.15} />
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
                    <div
                      style={{
                        fontWeight: 800,
                        color: "var(--color-primary)",
                        fontSize: "1.0625rem",
                      }}
                    >
                      {p.price}
                    </div>
                  </div>
                );
              })}
            </div>

            <Link to="/contacto" className="btn-warm" style={{ display: "inline-flex" }}>
              Explorar productos <ArrowRight size={17} strokeWidth={2.5} />
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
