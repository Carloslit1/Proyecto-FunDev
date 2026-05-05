#!/usr/bin/env bash
# start_app.sh — Levanta los contenedores
set -e
echo "▶️  Iniciando contenedores..."
docker compose up -d
docker compose ps
