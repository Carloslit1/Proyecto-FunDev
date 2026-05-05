-- Doggie Chic Studio — esquema interno
CREATE TABLE IF NOT EXISTS inventario (
  sku        TEXT PRIMARY KEY,
  nombre     TEXT NOT NULL,
  categoria  TEXT,
  stock      INT  NOT NULL DEFAULT 0,
  stock_min  INT  NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS consultas (
  id        SERIAL PRIMARY KEY,
  fecha     TIMESTAMP NOT NULL DEFAULT NOW(),
  cliente   TEXT NOT NULL,
  contacto  TEXT,
  mensaje   TEXT NOT NULL
);

INSERT INTO inventario (sku, nombre, categoria, stock, stock_min) VALUES
  ('SH-001', 'Shampoo hipoalergénico 1L', 'Baño',     12, 5),
  ('SH-002', 'Shampoo dermatológico',     'Farmacia', 3,  5),
  ('AC-010', 'Acondicionador hidratante', 'Baño',     8,  4),
  ('PA-020', 'Perfume pet-safe',          'Boutique', 18, 6),
  ('DE-030', 'Pasta dental canina',       'Higiene',  4,  4),
  ('DE-031', 'Cepillo dental',            'Higiene',  22, 8)
ON CONFLICT (sku) DO NOTHING;
