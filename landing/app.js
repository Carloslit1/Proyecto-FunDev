// ===== DOGGIE CHIC STUDIO - LANDING APP.JS =====
// Ambiente: Público - Internet (Puerto 8080)

const API_BASE = "http://localhost:3000";
const WHATSAPP_PHONE = "528140062762";

// Datos estáticos para servicios y productos (landing no depende del backend para el contenido visual)
const SERVICIOS_DATA = [
  {
    id: "basico",
    img: "images/Paquetes/Paquete_basico.jpg",
    nombre: "Paquete Básico",
    duracion: "1 hora",
    precio: "$300",
    precioAnterior: "$349.99",
    descuento: "14%",
    ahorro: "$49.99",
    popular: false,
    features: ["Baño con shampoo premium", "Secado profesional", "Cepillado completo", "Perfume"],
  },
  {
    id: "premium",
    img: "images/Paquetes/Paquete_completo.jpg",
    nombre: "Paquete Premium",
    duracion: "2 horas",
    precio: "$350",
    precioAnterior: "$629.99",
    descuento: "44%",
    ahorro: "$279.99",
    popular: true,
    features: ["Baño con shampoo premium", "Corte higiénico", "Limpieza de oídos", "Corte de uñas"],
  },
  {
    id: "vip",
    img: "images/Paquetes/Paquete_spa.jpg",
    nombre: "Paquete VIP",
    duracion: "2.5 horas",
    precio: "$450",
    precioAnterior: "$899.99",
    descuento: "50%",
    ahorro: "$449.99",
    popular: false,
    features: [
      "Todo el Paquete Premium",
      "Corte a medida",
      "Masaje relajante",
      "Tratamiento capilar",
    ],
  },
];

const PRODUCTOS_DATA = [
  {
    icon: "comb",
    nombre: "Cuidado diario",
    categoria: "Cepillos y básicos",
    detalle: "Rutina en casa",
  },
  {
    icon: "bottle",
    nombre: "Shampoo",
    categoria: "Higiene premium",
    detalle: "Baño suave",
  },
  { icon: "spray", nombre: "Perfume", categoria: "Aroma pet-safe", detalle: "Toque final" },
  {
    icon: "bowl",
    nombre: "Snacks y comida",
    categoria: "Nutrición",
    detalle: "Selección saludable",
  },
  { icon: "sofa", nombre: "Muebles", categoria: "Descanso y hogar", detalle: "Confort para casa" },
  {
    icon: "kit",
    nombre: "Kits de cuidado",
    categoria: "Rutina completa",
    detalle: "Todo listo",
  },
];

const EVIDENCIAS_DATA = [
  {
    img: "images/Evidencias/carousel/Screenshot 2026-05-06 at 13-09-25 Instagram.png",
    title: "Cambio listo para foto",
    caption: "Un resultado limpio, alegre y con escenario pensado para presumir a tu mascota.",
    url: "https://www.instagram.com/doggiechic_studio/",
    focus: "center center",
  },
  {
    img: "images/Evidencias/carousel/Screenshot 2026-05-06 at 13-10-10 Instagram.png",
    title: "Temporada con estilo",
    caption: "Fotos cuidadas, detalles de temporada y mascotas que se ven completas en cuadro.",
    url: "https://www.instagram.com/doggiechic_studio/",
    focus: "center center",
  },
  {
    img: "images/Evidencias/carousel/Screenshot 2026-05-06 at 13-10-43 Instagram.png",
    title: "Look de estudio",
    caption: "Una entrega pulida con pañuelo, foto clara y un acabado listo para compartir.",
    url: "https://www.instagram.com/doggiechic_studio/",
    focus: "center center",
  },
  {
    img: "images/Evidencias/carousel/Screenshot 2026-05-06 at 13-11-36 Instagram.png",
    title: "Resultado con personalidad",
    caption: "Corte, arreglo y foto final con una composición más limpia y equilibrada.",
    url: "https://www.instagram.com/doggiechic_studio/",
    focus: "center center",
  },
  {
    img: "images/Evidencias/carousel/Screenshot 2026-05-06 at 13-11-51 Instagram.png",
    title: "Edición especial",
    caption: "Un resultado de temporada donde el arreglo y la expresión se llevan el foco.",
    url: "https://www.instagram.com/doggiechic_studio/",
    focus: "center center",
  },
  {
    img: "images/Evidencias/carousel/Screenshot 2026-05-06 at 13-12-06 Instagram.png",
    title: "Detalles divertidos",
    caption: "Escenario temático, pañuelo y una foto pensada para que el resultado se note.",
    url: "https://www.instagram.com/doggiechic_studio/",
    focus: "center center",
  },
  {
    img: "images/Evidencias/carousel/Screenshot 2026-05-06 at 13-12-37 Instagram.png",
    title: "Cuidado con encanto",
    caption: "Una imagen clara del acabado final, con accesorios y composición ordenada.",
    url: "https://www.instagram.com/doggiechic_studio/",
    focus: "center center",
  },
  {
    img: "images/Evidencias/carousel/Screenshot 2026-05-06 at 13-12-54 Instagram.png",
    title: "Pañuelo y acabado",
    caption: "El rostro, el pelo y el detalle final se aprecian mejor sin recortes fuertes.",
    url: "https://www.instagram.com/doggiechic_studio/",
    focus: "center center",
  },
  {
    img: "images/Evidencias/carousel/Screenshot 2026-05-06 at 13-13-06 Instagram.png",
    title: "Moño y foto final",
    caption: "Un resultado completo con mejor encuadre para que la mascota sea protagonista.",
    url: "https://www.instagram.com/doggiechic_studio/",
    focus: "center center",
  },
];

let evidenceIndex = 0;
let evidenceTimer = null;

function iconSvg(name, className = "") {
  const attrs = `class="${className}" viewBox="0 0 24 24" aria-hidden="true"`;
  const icons = {
    sparkles: `<svg ${attrs}><path d="M12 3l1.7 4.5L18 9.2l-4.3 1.7L12 15l-1.7-4.1L6 9.2l4.3-1.7L12 3Z"/><path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z"/><path d="M5 14l.8 1.8L8 16.5l-2.2.8L5 19l-.8-1.7-2.2-.8 2.2-.7L5 14Z"/></svg>`,
    clock: `<svg ${attrs}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
    droplets: `<svg ${attrs}><path d="M7 16.5a4 4 0 0 1-4-4C3 9.8 7 4 7 4s4 5.8 4 8.5a4 4 0 0 1-4 4Z"/><path d="M17 20a4 4 0 0 1-4-4c0-2.7 4-8.5 4-8.5s4 5.8 4 8.5a4 4 0 0 1-4 4Z"/></svg>`,
    drop: `<svg ${attrs}><path d="M12 22a7 7 0 0 1-7-7c0-4.8 7-13 7-13s7 8.2 7 13a7 7 0 0 1-7 7Z"/></svg>`,
    shield: `<svg ${attrs}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,
    gem: `<svg ${attrs}><path d="M6 3h12l4 6-10 12L2 9l4-6Z"/><path d="M2 9h20"/><path d="m12 21 4-12-4-6-4 6 4 12Z"/></svg>`,
    brush: `<svg ${attrs}><path d="m9 11 6-6a2.1 2.1 0 0 1 3 3l-6 6"/><path d="M7 13c-2.8 0-5 2.2-5 5 0 1.1.9 2 2 2h1c2.8 0 5-2.2 5-5v-2H7Z"/></svg>`,
    bowl: `<svg ${attrs}><path d="M4 13h16l-1.2 5.1A3 3 0 0 1 15.9 20H8.1a3 3 0 0 1-2.9-1.9L4 13Z"/><path d="M7 13c0-2.2 2.2-4 5-4s5 1.8 5 4"/><path d="M8 6h.01"/><path d="M12 4h.01"/><path d="M16 6h.01"/></svg>`,
    sofa: `<svg ${attrs}><path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3"/><path d="M4 12h16a2 2 0 0 1 2 2v4H2v-4a2 2 0 0 1 2-2Z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>`,
    kit: `<svg ${attrs}><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M4 7h16v13H4V7Z"/><path d="M9 13h6"/><path d="M12 10v6"/></svg>`,
    bottle: `<svg ${attrs}><path d="M9 2h6"/><path d="M10 2v4l-2 2v11a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V8l-2-2V2"/><path d="M8 12h8"/><path d="M10 16h4"/></svg>`,
    spray: `<svg ${attrs}><path d="M9 3h6v4H9z"/><path d="M10 7h4v3h-4z"/><path d="M8 10h8l1 11H7l1-11Z"/><path d="M18 6h2"/><path d="M19 10h3"/><path d="M19 14h2"/></svg>`,
    comb: `<svg ${attrs}><path d="M4 7h16"/><path d="M5 7v12"/><path d="M8 7v9"/><path d="M11 7v12"/><path d="M14 7v9"/><path d="M17 7v12"/><path d="M20 7v9"/></svg>`,
  };
  return icons[name] || icons.sparkles;
}

function buildPackageWhatsAppUrl(service) {
  const featureText = service.features.map((feature) => `- ${feature}`).join("\n");
  const message = [
    `Hola Doggie Chic Studio, me gustaría agendar una cita con el ${service.nombre}.`,
    "",
    `Duración aproximada: ${service.duracion}`,
    `Precio publicado: ${service.precio}`,
    "",
    "Incluye:",
    featureText,
    "",
    "¿Me pueden ayudar con horarios disponibles?",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

// Renderizar paquetes de servicios
function renderServicios() {
  const grid = document.getElementById("servicios-grid");
  if (!grid) return;
  grid.innerHTML = SERVICIOS_DATA.map(
    (s) => `
    <div class="package-card ${s.popular ? "package-card--popular" : ""}" id="pkg-${s.id}">
      ${s.popular ? `<div class="pkg-popular-badge">${iconSvg("sparkles", "inline-icon")} Más Popular</div>` : ""}
      <div class="pkg-img-wrap">
        <img src="${s.img}" alt="${s.nombre}" class="pkg-img" onerror="this.style.display='none'" />
      </div>
      <div class="pkg-header">
        <h3 class="pkg-name">${s.nombre}</h3>
        <span class="pkg-duracion">${iconSvg("clock", "inline-icon")} ${s.duracion}</span>
      </div>
      <div class="pkg-pricing">
        <span class="pkg-precio">${s.precio}</span>
        <span class="pkg-precio-old">${s.precioAnterior}</span>
        <span class="pkg-descuento">-${s.descuento}</span>
      </div>
      <p class="pkg-ahorro">Ahorras ${s.ahorro}</p>
      <ul class="pkg-features">
        ${s.features.map((f) => `<li class="pkg-feature"><svg class="pkg-check" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>${f}</li>`).join("")}
      </ul>
      <a href="${buildPackageWhatsAppUrl(s)}" target="_blank" rel="noreferrer" class="pkg-btn ${s.popular ? "pkg-btn--popular" : ""}">Agendar ahora</a>
    </div>
  `,
  ).join("");
}

// Renderizar productos
function renderProductos() {
  const grid = document.getElementById("productos-grid");
  if (!grid) return;
  grid.innerHTML = PRODUCTOS_DATA.map(
    (p) => `
    <div class="product-card">
      <span class="product-icon">${iconSvg(p.icon, "product-svg")}</span>
      <div class="product-name">${p.nombre}</div>
      <div class="product-category">${p.categoria}</div>
      <div class="product-option">${p.detalle}</div>
    </div>
  `,
  ).join("");
}

function renderEvidencias() {
  const track = document.getElementById("evidence-track");
  const dots = document.getElementById("evidence-dots");
  if (!track || !dots) return;

  track.innerHTML = EVIDENCIAS_DATA.map(
    (item) => `
    <article class="carousel-slide">
      <img class="carousel-slide-bg" src="${item.img}" alt="" aria-hidden="true" loading="lazy" />
      <img class="carousel-slide-img" src="${item.img}" alt="${item.title}" loading="lazy" style="object-position: ${item.focus}" />
    </article>
  `,
  ).join("");

  dots.innerHTML = EVIDENCIAS_DATA.map(
    (_, index) => `
    <button type="button" class="carousel-dot" aria-label="Ver evidencia ${index + 1}"></button>
  `,
  ).join("");
}

function setEvidenceSlide(index) {
  const track = document.getElementById("evidence-track");
  const title = document.getElementById("evidence-title");
  const caption = document.getElementById("evidence-caption");
  const link = document.getElementById("evidence-link");
  const dots = Array.from(document.querySelectorAll(".carousel-dot"));
  if (!track || !title || !caption || !link || EVIDENCIAS_DATA.length === 0) return;

  evidenceIndex = (index + EVIDENCIAS_DATA.length) % EVIDENCIAS_DATA.length;
  const current = EVIDENCIAS_DATA[evidenceIndex];
  track.style.transform = `translateX(-${evidenceIndex * 100}%)`;
  title.textContent = current.title;
  caption.textContent = current.caption;
  link.href = current.url;

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === evidenceIndex);
    dot.setAttribute("aria-current", dotIndex === evidenceIndex ? "true" : "false");
  });
}

function startEvidenceCarousel() {
  clearInterval(evidenceTimer);
  evidenceTimer = setInterval(() => setEvidenceSlide(evidenceIndex + 1), 4200);
}

function initEvidenceCarousel() {
  const carousel = document.getElementById("evidence-carousel");
  if (!carousel) return;

  renderEvidencias();
  setEvidenceSlide(0);
  startEvidenceCarousel();

  carousel.querySelector(".carousel-btn--prev")?.addEventListener("click", () => {
    setEvidenceSlide(evidenceIndex - 1);
    startEvidenceCarousel();
  });

  carousel.querySelector(".carousel-btn--next")?.addEventListener("click", () => {
    setEvidenceSlide(evidenceIndex + 1);
    startEvidenceCarousel();
  });

  document.querySelectorAll(".carousel-dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      setEvidenceSlide(index);
      startEvidenceCarousel();
    });
  });

  carousel.addEventListener("mouseenter", () => clearInterval(evidenceTimer));
  carousel.addEventListener("mouseleave", startEvidenceCarousel);
}

// Verificar estado del API
async function checkApiStatus() {
  const statusEl = document.getElementById("api-status");
  if (!statusEl) return;
  try {
    const res = await fetch(`${API_BASE}/api/health`, { signal: AbortSignal.timeout(3000) });
    if (res.ok) {
      statusEl.textContent = "API: Activa";
      statusEl.style.color = "#4ade80";
    } else {
      statusEl.textContent = "API: Error";
      statusEl.style.color = "#f87171";
    }
  } catch {
    statusEl.textContent = "API: Sin conexión";
    statusEl.style.color = "#94a3b8";
  }
}

// Manejar formulario de contacto
function handleContact(e) {
  e.preventDefault();
  const btn = document.getElementById("contact-submit");
  const success = document.getElementById("contact-success");
  const name = document.getElementById("contact-name")?.value.trim();
  const email = document.getElementById("contact-email")?.value.trim();
  const message = document.getElementById("contact-msg")?.value.trim();
  const whatsappMessage = [
    "Hola Doggie Chic Studio, quiero información para agendar una cita.",
    name ? `Nombre: ${name}` : "",
    email ? `Correo: ${email}` : "",
    message ? `Mensaje: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  btn.textContent = "Abriendo WhatsApp...";
  btn.disabled = true;

  window.open(
    `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappMessage)}`,
    "_blank",
    "noopener",
  );

  setTimeout(() => {
    success.textContent = "Te abrimos WhatsApp para enviar tu mensaje.";
    success.classList.remove("hidden");
    document.getElementById("contact-form").reset();
    btn.textContent = "Enviar por WhatsApp";
    btn.disabled = false;
    setTimeout(() => success.classList.add("hidden"), 5000);
  }, 450);
}

// Toggle menú mobile
function toggleMenu() {
  const links = document.querySelector(".nav-links");
  links.classList.toggle("open");
}

window.handleContact = handleContact;
window.toggleMenu = toggleMenu;

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 30) {
    navbar.style.boxShadow = "0 4px 32px rgba(26,79,138,0.15)";
  } else {
    navbar.style.boxShadow = "";
  }
});

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  renderServicios();
  renderProductos();
  initEvidenceCarousel();
  checkApiStatus();
});
