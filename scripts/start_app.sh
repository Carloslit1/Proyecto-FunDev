#!/bin/bash
# start_app.sh
echo "Levantando servicios en segundo plano..."
docker-compose up -d

echo "Servicios activos:"
echo "🌐 Landing: http://localhost:80"
echo "🏢 Intranet: http://localhost:8080"
echo "⚙️  Backend: http://localhost:4000/api/health"
