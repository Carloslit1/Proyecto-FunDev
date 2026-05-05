#!/usr/bin/env bash
# stop_app.sh — Detiene los contenedores
set -e
echo "⏹  Deteniendo contenedores..."
docker compose down
echo "✅ Detenidos."
