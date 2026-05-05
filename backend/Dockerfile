# Backend API ficticio (Express) para la intranet de Peluche & Co.
FROM node:20-alpine
WORKDIR /api
RUN mkdir -p /app/logs
COPY backend/package.json ./
RUN npm install --no-audit --no-fund
COPY backend/. .
EXPOSE 4000
CMD sh -c "node server.js 2>&1 | tee -a /app/logs/api.log"
