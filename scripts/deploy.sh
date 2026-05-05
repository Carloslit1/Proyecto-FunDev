#!/usr/bin/env bash
# deploy.sh — Despliegue local + opcional remoto via SSH al bastion
set -e
echo "🚀 Doggie Chic Studio — desplegando..."
git pull origin main || true
docker compose build
docker compose up -d
docker compose ps

if [ "${1:-}" = "aws" ]; then
  : "${BASTION_HOST:?BASTION_HOST requerido}"
  : "${INTRANET_HOST:?INTRANET_HOST requerido}"
  echo "☁️  Desplegando en AWS via $BASTION_HOST -> $INTRANET_HOST"
  ssh -J ec2-user@"$BASTION_HOST" ec2-user@"$INTRANET_HOST" \
    "cd /opt/doggiechic && git pull && docker compose up -d --build"
fi
echo "✅ Despliegue completo."
