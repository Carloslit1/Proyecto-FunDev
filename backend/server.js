// API interna de Doggie Chic Studio.
// Logs en /app/logs/api.log + stdout (recogido por CloudWatch agent).
const express = require("express");
const fs = require("fs");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "doggiechic",
  password: process.env.DB_PASS || "doggiechic123",
  database: process.env.DB_NAME || "doggiechic",
});

function log(level, msg) {
  const line = `[${new Date().toISOString()}] ${level}: ${msg}`;
  console.log(line);
  try { fs.appendFileSync("/app/logs/api.log", line + "\n"); } catch {}
}

app.get("/health", (_req, res) => { log("INFO", "health check"); res.json({ ok: true }); });

app.get("/inventario", async (_req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM inventario ORDER BY sku");
    log("INFO", `consulta inventario (${rows.length})`);
    res.json(rows);
  } catch (e) {
    log("ERROR", "Fallo en consulta inventario: " + e.message);
    res.status(500).json({ error: "db" });
  }
});

app.post("/consultas", async (req, res) => {
  const { cliente, contacto, mensaje } = req.body || {};
  if (!cliente || !mensaje) {
    log("WARN", "consulta inválida recibida");
    return res.status(400).json({ error: "campos requeridos" });
  }
  try {
    await pool.query(
      "INSERT INTO consultas (cliente, contacto, mensaje) VALUES ($1,$2,$3)",
      [cliente, contacto || null, mensaje]
    );
    log("INFO", `nueva consulta de ${cliente}`);
    res.status(201).json({ ok: true });
  } catch (e) {
    log("ERROR", "Fallo guardando consulta: " + e.message);
    res.status(500).json({ error: "db" });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => log("INFO", `API Doggie Chic escuchando en :${port}`));
