const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || 'mongodb://mongo:27017/doggiechic';

// ===== LOGS SETUP =====
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
const logFile = path.join(logDir, 'app.log');

function getTimestamp() {
  return new Date().toISOString().replace('T', ' ').substring(0, 19);
}

function log(level, message) {
  const line = `[${getTimestamp()}] ${level}: ${message}`;
  console.log(line);
  fs.appendFileSync(logFile, line + '\n', 'utf8');
}

function logInfo(msg)  { log('INFO',  msg); }
function logError(msg) { log('ERROR', msg); }
function logWarn(msg)  { log('WARN',  msg); }

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());

// Request logger
app.use((req, res, next) => {
  logInfo(`${req.method} ${req.url}`);
  next();
});

// ===== DATABASE CONNECTION =====
mongoose.connect(DB_URI)
  .then(() => logInfo('Conectado a MongoDB'))
  .catch(err => logError(`Error MongoDB: ${err.message}`));

// ===== SCHEMAS =====
const ClienteSchema = new mongoose.Schema(
  { nombre: String, email: String, telefono: String },
  { timestamps: true }
);
const MascotaSchema = new mongoose.Schema(
  { nombre: String, raza: String, edad: Number, ownerId: String },
  { timestamps: true }
);
const ServicioSchema = new mongoose.Schema(
  { tipo: String, mascotaId: String, fecha: Date, notas: String, costo: Number },
  { timestamps: true }
);
const ProductoSchema = new mongoose.Schema(
  { nombre: String, categoria: String, precio: Number, stock: Number },
  { timestamps: true }
);
const IngresoSchema = new mongoose.Schema(
  { concepto: String, monto: Number, categoria: String },
  { timestamps: true }
);

const PaqueteCatalogoSchema = new mongoose.Schema({
  id_codigo: String, img: String, nombre: String, duracion: String, precio: String, 
  precioAnterior: String, descuento: String, ahorro: String, popular: Boolean, features: [String]
});
const ProductoCatalogoSchema = new mongoose.Schema({
  icon: String, nombre: String, categoria: String, detalle: String
});

const Cliente  = mongoose.model('Cliente',  ClienteSchema);
const Mascota  = mongoose.model('Mascota',  MascotaSchema);
const Servicio = mongoose.model('Servicio', ServicioSchema);
const Producto = mongoose.model('Producto', ProductoSchema);
const Ingreso  = mongoose.model('Ingreso',  IngresoSchema);
const PaqueteCatalogo = mongoose.model('PaqueteCatalogo', PaqueteCatalogoSchema);
const ProductoCatalogo = mongoose.model('ProductoCatalogo', ProductoCatalogoSchema);

// ===== SEED DATA (Autocompletado de la Base de Datos) =====
async function seedCatalogos() {
  try {
    const paquetesCount = await PaqueteCatalogo.countDocuments();
    if (paquetesCount === 0) {
      logInfo('Sembrando base de datos con paquetes de servicios...');
      await PaqueteCatalogo.insertMany([
        { id_codigo: "basico", img: "images/Paquetes/Paquete_basico.jpg", nombre: "Paquete Básico", duracion: "1 hora", precio: "$300", precioAnterior: "$349.99", descuento: "14%", ahorro: "$49.99", popular: false, features: ["Baño con shampoo premium", "Secado profesional", "Cepillado completo", "Perfume"] },
        { id_codigo: "premium", img: "images/Paquetes/Paquete_completo.jpg", nombre: "Paquete Premium", duracion: "2 horas", precio: "$350", precioAnterior: "$629.99", descuento: "44%", ahorro: "$279.99", popular: true, features: ["Baño con shampoo premium", "Corte higiénico", "Limpieza de oídos", "Corte de uñas"] },
        { id_codigo: "vip", img: "images/Paquetes/Paquete_spa.jpg", nombre: "Paquete VIP", duracion: "2.5 horas", precio: "$450", precioAnterior: "$899.99", descuento: "50%", ahorro: "$449.99", popular: false, features: ["Todo el Paquete Premium", "Corte a medida", "Masaje relajante", "Tratamiento capilar"] }
      ]);
    }

    const productosCount = await ProductoCatalogo.countDocuments();
    if (productosCount === 0) {
      logInfo('Sembrando base de datos con catálogo de productos...');
      await ProductoCatalogo.insertMany([
        { icon: "comb", nombre: "Cuidado diario", categoria: "Cepillos y básicos", detalle: "Rutina en casa" },
        { icon: "bottle", nombre: "Shampoo", categoria: "Higiene premium", detalle: "Baño suave" },
        { icon: "spray", nombre: "Perfume", categoria: "Aroma pet-safe", detalle: "Toque final" },
        { icon: "bowl", nombre: "Snacks y comida", categoria: "Nutrición", detalle: "Selección saludable" },
        { icon: "sofa", nombre: "Muebles", categoria: "Descanso y hogar", detalle: "Confort para casa" },
        { icon: "kit", nombre: "Kits de cuidado", categoria: "Rutina completa", detalle: "Todo listo" }
      ]);
    }
  } catch (err) {
    logError(`Error al sembrar DB: ${err.message}`);
  }
}

mongoose.connection.once('open', seedCatalogos);

// ===== ENDPOINTS =====

// GET /api/health
app.get('/api/health', (req, res) => {
  logInfo('Health check OK');
  res.json({
    status: 'OK',
    servicio: 'Doggie Chic Studio Backend',
    puerto: PORT,
    timestamp: new Date().toISOString(),
    db: mongoose.connection.readyState === 1 ? 'conectada' : 'desconectada'
  });
});

// --- CLIENTES ---
app.get('/api/clientes', async (req, res) => {
  try {
    const data = await Cliente.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    logError(`GET /api/clientes: ${err.message}`);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.post('/api/clientes', async (req, res) => {
  try {
    const doc = new Cliente(req.body);
    await doc.save();
    logInfo(`Cliente creado: ${doc.nombre}`);
    res.status(201).json(doc);
  } catch (err) {
    logError(`POST /api/clientes: ${err.message}`);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// --- MASCOTAS ---
app.get('/api/mascotas', async (req, res) => {
  try {
    const data = await Mascota.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    logError(`GET /api/mascotas: ${err.message}`);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.post('/api/mascotas', async (req, res) => {
  try {
    const doc = new Mascota(req.body);
    await doc.save();
    logInfo(`Mascota creada: ${doc.nombre} (${doc.raza})`);
    res.status(201).json(doc);
  } catch (err) {
    logError(`POST /api/mascotas: ${err.message}`);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// --- SERVICIOS ---
app.get('/api/servicios', async (req, res) => {
  try {
    const data = await Servicio.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    logError(`GET /api/servicios: ${err.message}`);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.post('/api/servicios', async (req, res) => {
  try {
    const doc = new Servicio(req.body);
    await doc.save();
    logInfo(`Servicio registrado: ${doc.tipo} - $${doc.costo}`);
    res.status(201).json(doc);
  } catch (err) {
    logError(`POST /api/servicios: ${err.message}`);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// --- PRODUCTOS ---
app.get('/api/productos', async (req, res) => {
  try {
    const data = await Producto.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    logError(`GET /api/productos: ${err.message}`);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.post('/api/productos', async (req, res) => {
  try {
    const doc = new Producto(req.body);
    await doc.save();
    logInfo(`Producto creado: ${doc.nombre} - $${doc.precio}`);
    res.status(201).json(doc);
  } catch (err) {
    logError(`POST /api/productos: ${err.message}`);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// --- INGRESOS ---
app.get('/api/ingresos', async (req, res) => {
  try {
    const data = await Ingreso.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    logError(`GET /api/ingresos: ${err.message}`);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.post('/api/ingresos', async (req, res) => {
  try {
    const doc = new Ingreso(req.body);
    await doc.save();
    logInfo(`Ingreso registrado: ${doc.concepto} - $${doc.monto}`);
    res.status(201).json(doc);
  } catch (err) {
    logError(`POST /api/ingresos: ${err.message}`);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// --- LOGS ---
app.get('/api/logs', (req, res) => {
  try {
    if (!fs.existsSync(logFile)) return res.json([]);
    const raw = fs.readFileSync(logFile, 'utf8');
    const lines = raw.trim().split('\n').filter(Boolean);
    // Devolver últimas 50 líneas como objetos {timestamp, level, message}
    const parsed = lines.slice(-50).reverse().map(line => {
      // Formato: [YYYY-MM-DD HH:mm:ss] LEVEL: message
      const match = line.match(/^\[(.+?)\] (INFO|ERROR|WARN): (.+)$/);
      if (match) {
        return { timestamp: match[1], level: match[2], message: match[3] };
      }
      return { timestamp: '', level: 'INFO', message: line };
    });
    res.json(parsed);
  } catch (err) {
    logError(`GET /api/logs: ${err.message}`);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// --- ERROR TEST (para CloudWatch) ---
app.get('/api/error-test', (req, res) => {
  logError('ERROR simulado desde /api/error-test - usado para prueba de CloudWatch Metric Filter');
  res.status(500).json({
    error: 'Error manual generado',
    mensaje: 'Este ERROR aparece en backend/logs/app.log y en CloudWatch',
    timestamp: new Date().toISOString()
  });
});

// --- CATÁLOGOS PÚBLICOS (Para Landing Page) ---
app.get('/api/catalogo/paquetes', async (req, res) => {
  try {
    const data = await PaqueteCatalogo.find();
    res.json(data);
  } catch (err) {
    logError(`GET /api/catalogo/paquetes: ${err.message}`);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.get('/api/catalogo/productos', async (req, res) => {
  try {
    const data = await ProductoCatalogo.find();
    res.json(data);
  } catch (err) {
    logError(`GET /api/catalogo/productos: ${err.message}`);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// ===== START SERVER =====
app.listen(PORT, '0.0.0.0', () => {
  logInfo(`Backend Doggie Chic Studio corriendo en puerto ${PORT}`);
  logInfo(`DB URI: ${DB_URI}`);
});
