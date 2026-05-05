#!/bin/bash
# deploy.sh
echo "Iniciando despliegue de Doggie Chic Studio..."

# Reconstruir las imágenes desde cero
docker-compose down
docker-compose build --no-cache

echo "Construcción completada. Usa ./scripts/start_app.sh para levantar los servicios."
