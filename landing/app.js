// ===== DOGGIE CHIC STUDIO - LANDING APP.JS =====
// Ambiente: Público - Internet (Puerto 8080)

const API_BASE = 'http://localhost:3000';

// Datos estáticos para servicios y productos (landing no depende del backend para el contenido visual)
const SERVICIOS_DATA = [
  { icon: '🛁', nombre: 'Baño Completo', desc: 'Baño con shampoo premium, secado y cepillado profesional.', precio: '$25 - $45' },
  { icon: '✂️', nombre: 'Corte y Estilizado', desc: 'Corte de pelo según la raza y preferencia del dueño.', precio: '$35 - $65' },
  { icon: '💅', nombre: 'Arreglo de Uñas', desc: 'Corte y limado de uñas con limpieza de almohadillas.', precio: '$15' },
  { icon: '🦷', nombre: 'Limpieza Dental', desc: 'Cepillado dental con pasta especial para mascotas.', precio: '$20' },
  { icon: '✨', nombre: 'Spa Premium', desc: 'Masajes relajantes, hidratación y aromaterapia canina.', precio: '$55 - $80' },
  { icon: '🎀', nombre: 'Desparasitación', desc: 'Tratamiento antipulgas y garrapatas con productos certificados.', precio: '$30' },
];

const PRODUCTOS_DATA = [
  { icon: '🧴', nombre: 'Shampoo Premium', categoria: 'Higiene', precio: '$18.99' },
  { icon: '🌸', nombre: 'Perfume Canino', categoria: 'Fragancia', precio: '$24.99' },
  { icon: '💧', nombre: 'Acondicionador', categoria: 'Higiene', precio: '$16.99' },
  { icon: '🦴', nombre: 'Snacks Saludables', categoria: 'Nutrición', precio: '$12.99' },
  { icon: '🎀', nombre: 'Accesorios', categoria: 'Accesorios', precio: '$8.99' },
  { icon: '🪮', nombre: 'Cepillo Profesional', categoria: 'Herramientas', precio: '$22.99' },
];

// Renderizar servicios
function renderServicios() {
  const grid = document.getElementById('servicios-grid');
  if (!grid) return;
  grid.innerHTML = SERVICIOS_DATA.map(s => `
    <div class="service-card">
      <span class="service-icon">${s.icon}</span>
      <div class="service-name">${s.nombre}</div>
      <p class="service-desc">${s.desc}</p>
      <div class="service-price">${s.precio}</div>
    </div>
  `).join('');
}

// Renderizar productos
function renderProductos() {
  const grid = document.getElementById('productos-grid');
  if (!grid) return;
  grid.innerHTML = PRODUCTOS_DATA.map(p => `
    <div class="product-card">
      <span class="product-icon">${p.icon}</span>
      <div class="product-name">${p.nombre}</div>
      <div class="product-category">${p.categoria}</div>
      <div class="product-price">${p.precio}</div>
    </div>
  `).join('');
}

// Verificar estado del API
async function checkApiStatus() {
  const statusEl = document.getElementById('api-status');
  if (!statusEl) return;
  try {
    const res = await fetch(`${API_BASE}/api/health`, { signal: AbortSignal.timeout(3000) });
    if (res.ok) {
      statusEl.textContent = '● API: Activa';
      statusEl.style.color = '#4ade80';
    } else {
      statusEl.textContent = '● API: Error';
      statusEl.style.color = '#f87171';
    }
  } catch {
    statusEl.textContent = '● API: Sin conexión';
    statusEl.style.color = '#94a3b8';
  }
}

// Manejar formulario de contacto
function handleContact(e) {
  e.preventDefault();
  const btn = document.getElementById('contact-submit');
  const success = document.getElementById('contact-success');
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  setTimeout(() => {
    success.classList.remove('hidden');
    document.getElementById('contact-form').reset();
    btn.textContent = 'Enviar mensaje';
    btn.disabled = false;
    setTimeout(() => success.classList.add('hidden'), 5000);
  }, 1200);
}

// Toggle menú mobile
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('open');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 30) {
    navbar.style.boxShadow = '0 4px 32px rgba(26,79,138,0.15)';
  } else {
    navbar.style.boxShadow = '';
  }
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  renderServicios();
  renderProductos();
  checkApiStatus();
});
