import { ArrowRight, Clock, Sparkles } from "lucide-react";
import bathImg from "@/assets/service-bath.jpg";
import cutImg from "@/assets/service-cut.jpg";
import spaImg from "@/assets/service-spa.jpg";

const packages = [
  {
    id: "basico",
    img: bathImg,
    tag: "1 hora",
    title: "Paquete Básico",
    precio: "$300",
    precioAnterior: "$349.99",
    descuento: "14%",
    ahorro: "$49.99",
    popular: false,
    accentColor: "#00A99D",
    features: ["Baño con shampoo premium", "Secado profesional", "Cepillado completo", "Perfume"],
  },
  {
    id: "premium",
    img: cutImg,
    tag: "2 horas",
    title: "Paquete Premium",
    precio: "$350",
    precioAnterior: "$629.99",
    descuento: "44%",
    ahorro: "$279.99",
    popular: true,
    accentColor: "#1479D4",
    features: ["Baño con shampoo premium", "Corte higiénico", "Limpieza de oídos", "Corte de uñas"],
  },
  {
    id: "vip",
    img: spaImg,
    tag: "2.5 horas",
    title: "Paquete VIP",
    precio: "$450",
    precioAnterior: "$899.99",
    descuento: "50%",
    ahorro: "$449.99",
    popular: false,
    accentColor: "#FF5A5F",
    features: [
      "Todo el Paquete Premium",
      "Corte a medida",
      "Masaje relajante",
      "Tratamiento capilar",
    ],
  },
];

export function ServiceShowcase() {
  return (
    <section
      id="servicios"
      className="section-shell"
      style={{ background: "linear-gradient(175deg, #FFF6ED 0%, #EAF8FF 44%, #F8FCFF 100%)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div
          className="animate-fade-up"
          style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}
        >
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
            Nuestros Servicios
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              marginBottom: "1rem",
              color: "var(--foreground)",
              letterSpacing: "-.03em",
            }}
          >
            Paquetes que{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #1479D4, #3BA7FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ofrecemos
            </em>
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: 1.75 }}>
            Elige el paquete perfecto para tu mejor amigo. Todos incluyen atención personalizada,
            productos premium y mucho amor.
          </p>
        </div>

        {/* Package cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.75rem",
            alignItems: "stretch",
          }}
        >
          {packages.map((pkg, i) => (
            <article
              key={pkg.id}
              className="animate-fade-up"
              style={{
                animationDelay: `${i * 110}ms`,
                background: "linear-gradient(180deg, #FFFFFF 0%, #F8FCFF 100%)",
                borderRadius: "1.75rem",
                overflow: "hidden",
                boxShadow: pkg.popular
                  ? "0 12px 44px rgba(20,121,212,0.22), 0 0 0 6px rgba(0,169,157,.08)"
                  : "0 4px 24px rgba(26,79,138,0.10)",
                border: pkg.popular ? "2px solid #00A99D" : "2px solid #e2e8f0",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-8px)";
                el.style.boxShadow = "0 16px 48px rgba(26,79,138,0.22)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "";
                el.style.boxShadow = pkg.popular
                  ? "0 8px 40px rgba(26,79,138,0.20)"
                  : "0 4px 24px rgba(26,79,138,0.10)";
              }}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "var(--gradient-warm)",
                    color: "white",
                    fontSize: ".75rem",
                    fontWeight: 700,
                    padding: ".3rem .875rem",
                    borderRadius: "999px",
                    letterSpacing: ".05em",
                    zIndex: 2,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: ".35rem",
                  }}
                >
                  <Sparkles size={13} strokeWidth={2.4} />
                  Más Popular
                </div>
              )}

              {/* Image slot */}
              <div
                style={{
                  height: "200px",
                  background: `linear-gradient(135deg, ${pkg.accentColor}18 0%, ${pkg.accentColor}30 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "1.5rem 1.5rem 1.25rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: ".75rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--foreground)",
                    }}
                  >
                    {pkg.title}
                  </h3>
                  <span
                    style={{
                      fontSize: ".75rem",
                      color: "#64748b",
                      background:
                        "linear-gradient(135deg, rgba(234,248,255,.9), rgba(255,240,231,.72))",
                      padding: ".25rem .75rem",
                      borderRadius: "999px",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: ".3rem",
                    }}
                  >
                    <Clock size={13} strokeWidth={2.2} />
                    {pkg.tag}
                  </span>
                </div>

                {/* Price row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: ".5rem",
                    flexWrap: "wrap",
                    marginBottom: ".25rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: 800,
                      color: pkg.accentColor,
                      lineHeight: 1,
                    }}
                  >
                    {pkg.precio}
                  </span>
                  <span
                    style={{ fontSize: ".9rem", color: "#94a3b8", textDecoration: "line-through" }}
                  >
                    {pkg.precioAnterior}
                  </span>
                  <span
                    style={{
                      fontSize: ".7rem",
                      fontWeight: 700,
                      background: "#dcfce7",
                      color: "#166534",
                      padding: ".2rem .6rem",
                      borderRadius: "999px",
                    }}
                  >
                    -{pkg.descuento}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: ".8rem",
                    color: "#16a34a",
                    fontWeight: 600,
                    marginBottom: "1.25rem",
                  }}
                >
                  Ahorras {pkg.ahorro}
                </p>

                {/* Features */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: ".6rem",
                    flex: 1,
                  }}
                >
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".5rem",
                        fontSize: ".875rem",
                        color: "#334155",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        style={{ flexShrink: 0 }}
                      >
                        <circle cx="10" cy="10" r="10" fill={pkg.accentColor} fillOpacity=".15" />
                        <path
                          d="M6 10l3 3 5-5"
                          stroke={pkg.accentColor}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contacto"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: ".4rem",
                    textAlign: "center",
                    padding: ".875rem 1.5rem",
                    borderRadius: ".875rem",
                    fontWeight: 600,
                    fontSize: ".9rem",
                    textDecoration: "none",
                    transition: "all .3s",
                    ...(pkg.popular
                      ? {
                          background: `linear-gradient(135deg, #1a4f8a, #2e86de)`,
                          color: "white",
                          boxShadow: "0 4px 16px rgba(26,79,138,0.30)",
                        }
                      : {
                          background: "transparent",
                          color: pkg.accentColor,
                          border: `2px solid ${pkg.accentColor}`,
                        }),
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    if (!pkg.popular) {
                      el.style.background = pkg.accentColor;
                      el.style.color = "white";
                    } else {
                      el.style.opacity = ".88";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    if (!pkg.popular) {
                      el.style.background = "transparent";
                      el.style.color = pkg.accentColor;
                    } else {
                      el.style.opacity = "1";
                    }
                  }}
                >
                  Agendar ahora <ArrowRight size={15} strokeWidth={2.4} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
