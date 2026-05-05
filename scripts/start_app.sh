#!/bin/bash
# =============================================================
# start_app.sh - Levanta los contenedores (sin rebuild)
# Doggie Chic Studio - Proyecto DevOps
# =============================================================

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

echo "🚀 Iniciando Doggie Chic Studio..."
docker compose up -d

echo ""
echo "⏳ Esperando servicios (3 segundos)..."
sleep 3

echo ""
echo "📦 Estado de contenedores:"
docker compose ps

echo ""
echo "✅ Servicios disponibles en:"
echo "   🌐 Landing (Internet):  http://localhost:8080"
echo "   🔒 Intranet (Privada):  http://localhost:8081"
echo "   ⚙️  Backend API:         http://localhost:3000/api/health"
echo "   🗄️  MongoDB:             localhost:27017"
echo ""
