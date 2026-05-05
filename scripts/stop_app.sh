#!/bin/bash
# =============================================================
# stop_app.sh - Detiene todos los contenedores
# Doggie Chic Studio - Proyecto DevOps
# =============================================================

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

echo "🛑 Deteniendo Doggie Chic Studio..."
docker compose down

echo ""
echo "✅ Todos los contenedores detenidos."
echo ""
