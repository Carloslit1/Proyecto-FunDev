const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const winston = require('winston');

const app = express();
const PORT = process.env.PORT || 4000;
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/doggiechic';

// Ensure logs directory exists
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Setup Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: path.join(logDir, 'app.log') }),
    new winston.transports.Console()
  ],
});

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Database Connection
mongoose.connect(DB_URI)
  .then(() => logger.info('Connected to MongoDB'))
  .catch(err => logger.error('MongoDB connection error:', err));

// Mongoose Schemas & Models
const ClienteSchema = new mongoose.Schema({ nombre: String, email: String, telefono: String }, { timestamps: true });
const MascotaSchema = new mongoose.Schema({ nombre: String, raza: String, edad: Number, ownerId: String }, { timestamps: true });
const ServicioSchema = new mongoose.Schema({ tipo: String, mascotaId: String, fecha: Date, notas: String, costo: Number }, { timestamps: true });

const Cliente = mongoose.model('Cliente', ClienteSchema);
const Mascota = mongoose.model('Mascota', MascotaSchema);
const Servicio = mongoose.model('Servicio', ServicioSchema);

// ---- Endpoints ----

// GET /api/health
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// GET /api/clientes
app.get('/api/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    logger.error(`Error fetching clientes: ${error.message}`);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/clientes
app.post('/api/clientes', async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    logger.info(`Created new cliente: ${cliente.nombre}`);
    res.status(201).json(cliente);
  } catch (error) {
    logger.error(`Error creating cliente: ${error.message}`);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/mascotas
app.get('/api/mascotas', async (req, res) => {
  try {
    const mascotas = await Mascota.find();
    res.json(mascotas);
  } catch (error) {
    logger.error(`Error fetching mascotas: ${error.message}`);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/mascotas
app.post('/api/mascotas', async (req, res) => {
  try {
    const mascota = new Mascota(req.body);
    await mascota.save();
    logger.info(`Created new mascota: ${mascota.nombre}`);
    res.status(201).json(mascota);
  } catch (error) {
    logger.error(`Error creating mascota: ${error.message}`);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/servicios
app.get('/api/servicios', async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (error) {
    logger.error(`Error fetching servicios: ${error.message}`);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/servicios
app.post('/api/servicios', async (req, res) => {
  try {
    const servicio = new Servicio(req.body);
    await servicio.save();
    logger.info(`Created new servicio: ${servicio.tipo}`);
    res.status(201).json(servicio);
  } catch (error) {
    logger.error(`Error creating servicio: ${error.message}`);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/logs
app.get('/api/logs', (req, res) => {
  try {
    const logFilePath = path.join(logDir, 'app.log');
    if (fs.existsSync(logFilePath)) {
      const logs = fs.readFileSync(logFilePath, 'utf8');
      const logArray = logs.trim().split('\n').map(line => JSON.parse(line)).reverse().slice(0, 50);
      res.json(logArray);
    } else {
      res.json([]);
    }
  } catch (error) {
    logger.error(`Error reading logs: ${error.message}`);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/error-test
app.get('/api/error-test', (req, res) => {
  logger.error('Manual error generated via /api/error-test for CloudWatch testing.');
  res.status(500).json({ error: 'Manual error triggered' });
});

// Start Server
app.listen(PORT, () => {
  logger.info(`Backend server running on port ${PORT}`);
});
