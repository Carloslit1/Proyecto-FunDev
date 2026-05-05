#!/bin/bash
# =============================================================
# deploy.sh - Construye y levanta todos los contenedores
# Doggie Chic Studio - Proyecto DevOps
# Compatible con Mac y Amazon Linux
# =============================================================

set -e  # Detener si hay error

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

echo ""
echo "╔══════════════════════════════════════════╗"
echo "║   Doggie Chic Studio - Deploy Script     ║"
echo "╚══════════════════════════════════════════╝"
echo ""

# Verificar Docker
if ! command -v docker &> /dev/null; then
  echo "❌ Docker no está instalado. Instala Docker Desktop primero."
  exit 1
fi

if ! docker info &> /dev/null; then
  echo "❌ Docker no está corriendo. Abre Docker Desktop e intenta de nuevo."
  exit 1
fi

echo "✅ Docker disponible"
echo ""

# Crear directorio de logs si no existe
mkdir -p backend/logs

# Bajar contenedores anteriores
echo "🛑 Deteniendo contenedores anteriores..."
docker compose down --remove-orphans 2>/dev/null || true

# Construir imágenes
echo ""
echo "🔨 Construyendo imágenes Docker..."
docker compose build --no-cache

echo ""
echo "🚀 Levantando contenedores..."
docker compose up -d

echo ""
echo "⏳ Esperando que los servicios inicien (5 segundos)..."
sleep 5

echo ""
echo "📦 Contenedores activos:"
docker compose ps

echo ""
echo "╔══════════════════════════════════════════╗"
echo "║   ✅ Despliegue completado               ║"
echo "╠══════════════════════════════════════════╣"
echo "║  🌐 Landing:   http://localhost:8080     ║"
echo "║  🔒 Intranet:  http://localhost:8081     ║"
echo "║  ⚙️  Backend:   http://localhost:3000     ║"
echo "║  🗄️  MongoDB:   localhost:27017           ║"
echo "╚══════════════════════════════════════════╝"
echo ""
