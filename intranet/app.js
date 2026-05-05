// ===== DOGGIE CHIC STUDIO - INTRANET APP.JS =====
// Ambiente: Privado - Intranet (Puerto 8081)

const API_BASE = 'http://localhost:3000';

// ===== NAVEGACIÓN =====
function showSection(sectionId, linkEl) {
  // Ocultar todas las secciones
  document.querySelectorAll('.section-content').forEach(s => s.classList.add('hidden'));
  // Desactivar todos los nav items
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  // Mostrar sección activa
  const section = document.getElementById(`section-${sectionId}`);
  if (section) section.classList.remove('hidden');

  // Activar nav item
  if (linkEl) {
    linkEl.classList.add('active');
  } else {
    // Activar por data-section si no se pasa el elemento
    const navEl = document.querySelector(`[data-section="${sectionId}"]`);
    if (navEl) navEl.classList.add('active');
  }

  // Actualizar título y breadcrumb
  const titles = {
    dashboard: 'Dashboard',
    clientes: 'Clientes',
    mascotas: 'Mascotas',
    servicios: 'Servicios Realizados',
    productos: 'Productos',
    ingresos: 'Ingresos',
    bitacora: 'Bitácora',
    logs: 'Logs del Sistema'
  };
  const title = titles[sectionId] || sectionId;
  document.getElementById('page-title').textContent = title;
  document.getElementById('breadcrumb-current').textContent = title;

  // Cargar datos de la sección
  loadSectionData(sectionId);

  return false; // prevenir navegación
}

function loadSectionData(sectionId) {
  switch (sectionId) {
    case 'dashboard': loadDashboard(); break;
    case 'clientes':  loadClientes(); break;
    case 'mascotas':  loadMascotas(); break;
    case 'servicios': loadServicios(); break;
    case 'productos': loadProductos(); break;
    case 'ingresos':  loadIngresos(); break;
    case 'bitacora':  loadBitacora(); break;
    case 'logs':      loadLogs(); break;
  }
}

// ===== API HELPER =====
async function apiFetch(endpoint, options = {}) {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options
    });
    return await res.json();
  } catch (err) {
    console.error(`API error [${endpoint}]:`, err);
    return null;
  }
}

// ===== TOAST =====
function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast';
  if (type === 'error') toast.style.background = '#dc2626';
  else if (type === 'warning') toast.style.background = '#d97706';
  else toast.style.background = '#1e293b';
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3500);
}

// ===== TOGGLE FORMS =====
function toggleForm(formId) {
  const form = document.getElementById(formId);
  if (form) form.classList.toggle('hidden');
}

// ===== DASHBOARD =====
async function loadDashboard() {
  const [clientes, mascotas, servicios, ingresos] = await Promise.all([
    apiFetch('/api/clientes'),
    apiFetch('/api/mascotas'),
    apiFetch('/api/servicios'),
    apiFetch('/api/ingresos'),
  ]);

  // Stats
  setStatValue('stat-clientes', clientes ? clientes.length : '?');
  setStatValue('stat-mascotas', mascotas ? mascotas.length : '?');
  setStatValue('stat-servicios', servicios ? servicios.length : '?');

  const totalIngresos = ingresos ? ingresos.reduce((s, i) => s + (i.monto || 0), 0) : 0;
  setStatValue('stat-ingresos', `$${totalIngresos.toFixed(0)}`);

  // Últimos clientes
  const cList = document.getElementById('dash-clientes-list');
  if (clientes && clientes.length > 0) {
    cList.innerHTML = clientes.slice(-4).reverse().map(c => `
      <div class="item-row">
        <span class="item-name">👤 ${c.nombre}</span>
        <span class="item-detail">${c.email}</span>
      </div>
    `).join('');
  } else {
    cList.innerHTML = '<p style="color:var(--text-muted); font-size:0.85rem; padding:12px 0">No hay clientes registrados.</p>';
  }

  // Últimos servicios
  const sList = document.getElementById('dash-servicios-list');
  if (servicios && servicios.length > 0) {
    sList.innerHTML = servicios.slice(-4).reverse().map(s => `
      <div class="item-row">
        <span class="item-name">✂️ ${s.tipo}</span>
        <span class="item-detail">$${s.costo || 0}</span>
      </div>
    `).join('');
  } else {
    sList.innerHTML = '<p style="color:var(--text-muted); font-size:0.85rem; padding:12px 0">No hay servicios registrados.</p>';
  }
}

function setStatValue(cardId, value) {
  const card = document.getElementById(cardId);
  if (card) card.querySelector('.stat-value').textContent = value;
}

// ===== CLIENTES =====
async function loadClientes() {
  const data = await apiFetch('/api/clientes');
  const tbody = document.getElementById('tbody-clientes');
  if (!data) {
    tbody.innerHTML = '<tr><td colspan="4" class="loading">Error al conectar con el backend.</td></tr>';
    return;
  }
  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" class="loading">No hay clientes registrados aún.</td></tr>';
    return;
  }
  tbody.innerHTML = data.reverse().map(c => `
    <tr>
      <td><strong>${c.nombre}</strong></td>
      <td>${c.email}</td>
      <td>${c.telefono}</td>
      <td>${formatDate(c.createdAt)}</td>
    </tr>
  `).join('');
}

async function createCliente(e) {
  e.preventDefault();
  const body = {
    nombre: document.getElementById('cli-nombre').value,
    email: document.getElementById('cli-email').value,
    telefono: document.getElementById('cli-tel').value,
  };
  const res = await apiFetch('/api/clientes', { method: 'POST', body: JSON.stringify(body) });
  if (res && res._id) {
    showToast('✅ Cliente guardado correctamente');
    toggleForm('form-cliente');
    e.target.reset();
    loadClientes();
  } else {
    showToast('❌ Error al guardar cliente', 'error');
  }
}

// ===== MASCOTAS =====
async function loadMascotas() {
  const data = await apiFetch('/api/mascotas');
  const tbody = document.getElementById('tbody-mascotas');
  if (!data || data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" class="loading">No hay mascotas registradas.</td></tr>';
    return;
  }
  tbody.innerHTML = data.reverse().map(m => `
    <tr>
      <td><strong>${m.nombre}</strong></td>
      <td>${m.raza}</td>
      <td>${m.edad} años</td>
      <td>${formatDate(m.createdAt)}</td>
    </tr>
  `).join('');
}

async function createMascota(e) {
  e.preventDefault();
  const body = {
    nombre: document.getElementById('mas-nombre').value,
    raza: document.getElementById('mas-raza').value,
    edad: parseInt(document.getElementById('mas-edad').value),
  };
  const res = await apiFetch('/api/mascotas', { method: 'POST', body: JSON.stringify(body) });
  if (res && res._id) {
    showToast('✅ Mascota registrada');
    toggleForm('form-mascota');
    e.target.reset();
    loadMascotas();
  } else {
    showToast('❌ Error al guardar mascota', 'error');
  }
}

// ===== SERVICIOS =====
async function loadServicios() {
  const data = await apiFetch('/api/servicios');
  const tbody = document.getElementById('tbody-servicios');
  if (!data || data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="loading">No hay servicios registrados.</td></tr>';
    return;
  }
  tbody.innerHTML = data.reverse().map(s => `
    <tr>
      <td><strong>${s.tipo}</strong></td>
      <td>${s.mascotaId || '—'}</td>
      <td>$${s.costo || 0}</td>
      <td>${s.notas || '—'}</td>
      <td>${formatDate(s.createdAt)}</td>
    </tr>
  `).join('');
}

async function createServicio(e) {
  e.preventDefault();
  const body = {
    tipo: document.getElementById('srv-tipo').value,
    mascotaId: document.getElementById('srv-mascota').value,
    costo: parseFloat(document.getElementById('srv-costo').value),
    notas: document.getElementById('srv-notas').value,
    fecha: new Date().toISOString(),
  };
  const res = await apiFetch('/api/servicios', { method: 'POST', body: JSON.stringify(body) });
  if (res && res._id) {
    showToast('✅ Servicio registrado');
    toggleForm('form-servicio');
    e.target.reset();
    loadServicios();
  } else {
    showToast('❌ Error al guardar servicio', 'error');
  }
}

// ===== PRODUCTOS =====
async function loadProductos() {
  const data = await apiFetch('/api/productos');
  const tbody = document.getElementById('tbody-productos');
  if (!data || data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="loading">No hay productos registrados.</td></tr>';
    return;
  }
  tbody.innerHTML = data.reverse().map(p => `
    <tr>
      <td><strong>${p.nombre}</strong></td>
      <td>${p.categoria}</td>
      <td>$${p.precio}</td>
      <td>${p.stock}</td>
      <td>${formatDate(p.createdAt)}</td>
    </tr>
  `).join('');
}

async function createProducto(e) {
  e.preventDefault();
  const body = {
    nombre: document.getElementById('prod-nombre').value,
    categoria: document.getElementById('prod-categoria').value,
    precio: parseFloat(document.getElementById('prod-precio').value),
    stock: parseInt(document.getElementById('prod-stock').value),
  };
  const res = await apiFetch('/api/productos', { method: 'POST', body: JSON.stringify(body) });
  if (res && res._id) {
    showToast('✅ Producto guardado');
    toggleForm('form-producto');
    e.target.reset();
    loadProductos();
  } else {
    showToast('❌ Error al guardar producto', 'error');
  }
}

// ===== INGRESOS =====
async function loadIngresos() {
  const data = await apiFetch('/api/ingresos');
  const tbody = document.getElementById('tbody-ingresos');
  if (!data || data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" class="loading">No hay ingresos registrados.</td></tr>';
    return;
  }
  tbody.innerHTML = data.reverse().map(i => `
    <tr>
      <td><strong>${i.concepto}</strong></td>
      <td>$${i.monto}</td>
      <td>${i.categoria}</td>
      <td>${formatDate(i.createdAt)}</td>
    </tr>
  `).join('');
}

async function createIngreso(e) {
  e.preventDefault();
  const body = {
    concepto: document.getElementById('ing-concepto').value,
    monto: parseFloat(document.getElementById('ing-monto').value),
    categoria: document.getElementById('ing-categoria').value,
  };
  const res = await apiFetch('/api/ingresos', { method: 'POST', body: JSON.stringify(body) });
  if (res && res._id) {
    showToast('✅ Ingreso registrado');
    toggleForm('form-ingreso');
    e.target.reset();
    loadIngresos();
  } else {
    showToast('❌ Error al guardar ingreso', 'error');
  }
}

// ===== BITÁCORA (localStorage) =====
function loadBitacora() {
  const entries = JSON.parse(localStorage.getItem('bitacora') || '[]');
  const viewer = document.getElementById('bitacora-list');
  if (entries.length === 0) {
    viewer.innerHTML = '<span class="log-info">[Sistema] Bitácora vacía. Agrega tu primera entrada.</span>';
    return;
  }
  viewer.innerHTML = entries.slice().reverse().map(e =>
    `<span class="log-info">[${e.fecha}] ${e.responsable}: ${e.desc}</span>\n`
  ).join('');
}

function addBitacoraEntry() {
  toggleForm('form-bitacora');
}

function saveBitacoraEntry(e) {
  e.preventDefault();
  const entries = JSON.parse(localStorage.getItem('bitacora') || '[]');
  entries.push({
    fecha: new Date().toLocaleString('es-MX'),
    responsable: document.getElementById('bit-resp').value,
    desc: document.getElementById('bit-desc').value,
  });
  localStorage.setItem('bitacora', JSON.stringify(entries));
  toggleForm('form-bitacora');
  e.target.reset();
  loadBitacora();
  showToast('✅ Entrada agregada a bitácora');
}

// ===== LOGS DEL SISTEMA =====
async function loadLogs() {
  const viewer = document.getElementById('logs-viewer');
  viewer.textContent = 'Cargando logs del backend...';
  const data = await apiFetch('/api/logs');
  if (!data) {
    viewer.innerHTML = '<span class="log-error">❌ No se pudo conectar con el backend. Asegúrate que esté corriendo en puerto 3000.</span>';
    return;
  }
  if (data.length === 0) {
    viewer.innerHTML = '<span class="log-info">No hay logs disponibles aún.</span>';
    return;
  }
  viewer.innerHTML = data.map(log => {
    const level = (log.level || '').toUpperCase();
    const msg = log.message || JSON.stringify(log);
    const ts = log.timestamp ? log.timestamp.replace('T', ' ').substring(0, 19) : '';
    const cls = level === 'ERROR' ? 'log-error' : level === 'WARN' ? 'log-warn' : 'log-info';
    return `<span class="${cls}">[${ts}] ${level}: ${msg}</span>`;
  }).join('\n');
}

async function triggerError() {
  const res = await apiFetch('/api/error-test');
  showToast('⚠️ ERROR generado en backend — revisa Logs del Sistema', 'warning');
  setTimeout(loadLogs, 800);
}

// ===== ESTADO API =====
async function checkApiStatus() {
  const statusEl = document.getElementById('sidebar-api-status');
  try {
    const res = await fetch(`${API_BASE}/api/health`, { signal: AbortSignal.timeout(3000) });
    if (res.ok) {
      statusEl.textContent = '● API: Activa';
      statusEl.style.color = '#4ade80';
    } else {
      statusEl.textContent = '● API: Error ' + res.status;
      statusEl.style.color = '#f87171';
    }
  } catch {
    statusEl.textContent = '● API: Sin conexión';
    statusEl.style.color = '#94a3b8';
  }
}

// ===== UTILS =====
function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('es-MX', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Prevenir navegación por defecto en los links del sidebar
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => e.preventDefault());
  });
  loadDashboard();
  checkApiStatus();
  // Refrescar status cada 30s
  setInterval(checkApiStatus, 30000);
});
