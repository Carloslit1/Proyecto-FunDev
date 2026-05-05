#!/bin/bash
# =============================================================
# view_logs.sh - Ver logs de todos los servicios
# Doggie Chic Studio - Proyecto DevOps
# =============================================================

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

echo ""
echo "╔══════════════════════════════════════════╗"
echo "║   Doggie Chic Studio - Logs Viewer       ║"
echo "╚══════════════════════════════════════════╝"
echo ""

echo "━━━━━━━━━━ LOGS BACKEND (app.log) ━━━━━━━━━━"
if [ -f "backend/logs/app.log" ]; then
  tail -20 backend/logs/app.log
else
  echo "(archivo backend/logs/app.log no encontrado aún)"
fi

echo ""
echo "━━━━━━━━━━ LOGS DOCKER - BACKEND ━━━━━━━━━━"
docker compose logs --tail=15 backend 2>/dev/null || echo "(contenedor backend no encontrado)"

echo ""
echo "━━━━━━━━━━ LOGS DOCKER - LANDING ━━━━━━━━━━"
docker compose logs --tail=10 landing 2>/dev/null || echo "(contenedor landing no encontrado)"

echo ""
echo "━━━━━━━━━━ LOGS DOCKER - INTRANET ━━━━━━━━━━"
docker compose logs --tail=10 intranet 2>/dev/null || echo "(contenedor intranet no encontrado)"

echo ""
echo "━━━━━━━━━━ LOGS DOCKER - MONGO ━━━━━━━━━━"
docker compose logs --tail=10 mongo 2>/dev/null || echo "(contenedor mongo no encontrado)"

echo ""
echo "💡 Para ver logs en tiempo real: docker compose logs -f"
echo ""
