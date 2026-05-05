# --- Frontend (landing + intranet) build ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json bun.lockb* package-lock.json* ./
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build

# --- Runtime ---
FROM node:20-alpine AS runtime
WORKDIR /app
RUN mkdir -p /app/logs
COPY --from=build /app /app
EXPOSE 3000
# Logs locales + stdout (capturados por el agente de CloudWatch)
CMD sh -c "node .output/server/index.mjs 2>&1 | tee -a /app/logs/app.log"
