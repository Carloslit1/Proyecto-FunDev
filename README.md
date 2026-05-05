# 🐾 Doggie Chic Studio — Proyecto Final DevOps

> **Estética canina premium** | Proyecto Final - Fundamentos de DevOps

---

## 📋 Descripción del Negocio

**Doggie Chic Studio** es una estética canina premium que ofrece servicios de baño, corte, spa y productos especializados para mascotas.

Este proyecto implementa una arquitectura DevOps completa con:
- **Landing pública** (Internet) para mostrar servicios y productos
- **Intranet privada** para operación interna del negocio
- **Backend API** con Node.js + Express + MongoDB
- **Containerización** con Docker y Docker Compose
- **Infraestructura como código** con AWS CloudFormation

---

## 🏗️ Diferencia Internet vs Intranet

| Aspecto | Landing (Internet) | Intranet (Privada) |
|---------|-------------------|-------------------|
| **Puerto** | 8080 | 8081 |
| **Acceso** | Público — cualquier usuario | Solo empleados / red interna |
| **Propósito** | Marketing, servicios, contacto | Gestión operativa interna |
| **Contenido** | Servicios, productos, galería | Dashboard, clientes, mascotas, ingresos |
| **AWS** | EC2 pública + SG con 0.0.0.0/0 | EC2 privada + SG solo VPC |

---

## 🐳 Cómo correr localmente

### Paso 1 — Encender Docker Desktop en Mac

1. Abre **Docker Desktop** desde Applications o Spotlight (`⌘ Space` → "Docker")
2. Espera el ícono de la ballena 🐳 en la barra superior
3. Verifica con:
```bash
docker --version
docker compose version
```

### Paso 2 — Clonar y desplegar

```bash
# Clonar el repositorio
git clone <URL_DEL_REPO>
cd fortify-connect-aws

# Dar permisos a los scripts
chmod +x scripts/*.sh

# Construir y levantar (primer uso)
./scripts/deploy.sh
```

### Paso 3 — Verificar que todo está corriendo

```bash
docker ps
```

Deberías ver 4 contenedores:
- `doggiechic_landing`
- `doggiechic_intranet`
- `doggiechic_backend`
- `doggiechic_mongo`

---

## 🧪 Comandos de prueba

```bash
# Levantar sin rebuild
docker compose up -d

# Ver contenedores activos
docker ps

# Probar Landing pública
curl http://localhost:8080

# Probar Intranet privada
curl http://localhost:8081

# Probar Backend - Health Check
curl http://localhost:3000/api/health

# Probar Backend - Clientes
curl http://localhost:3000/api/clientes

# Probar Backend - Generar ERROR (para CloudWatch)
curl http://localhost:3000/api/error-test

# Ver logs del sistema
./scripts/view_logs.sh
```

---

## 🛠️ Scripts Bash

| Script | Función |
|--------|---------|
| `./scripts/deploy.sh` | Construye imágenes y levanta todos los contenedores |
| `./scripts/start_app.sh` | Levanta contenedores sin reconstruir |
| `./scripts/stop_app.sh` | Detiene todos los contenedores |
| `./scripts/view_logs.sh` | Muestra logs de backend, landing, intranet y mongo |

---

## 📋 Endpoints del Backend

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/health` | Estado del servidor y DB |
| GET | `/api/clientes` | Lista todos los clientes |
| POST | `/api/clientes` | Crear nuevo cliente |
| GET | `/api/mascotas` | Lista todas las mascotas |
| POST | `/api/mascotas` | Registrar nueva mascota |
| GET | `/api/servicios` | Lista servicios realizados |
| POST | `/api/servicios` | Registrar servicio |
| GET | `/api/productos` | Lista productos |
| POST | `/api/productos` | Crear producto |
| GET | `/api/ingresos` | Lista ingresos |
| POST | `/api/ingresos` | Registrar ingreso |
| GET | `/api/logs` | Últimos 50 logs del sistema |
| GET | `/api/error-test` | Genera un ERROR para CloudWatch |

---

## 📄 Logs del Sistema

Los logs se guardan en `backend/logs/app.log` con el formato:

```
[YYYY-MM-DD HH:mm:ss] INFO: mensaje
[YYYY-MM-DD HH:mm:ss] ERROR: mensaje
[YYYY-MM-DD HH:mm:ss] WARN: mensaje
```

Ejemplo real:
```
[2024-05-05 15:30:00] INFO: Backend Doggie Chic Studio corriendo en puerto 3000
[2024-05-05 15:30:01] INFO: Conectado a MongoDB
[2024-05-05 15:31:22] INFO: GET /api/clientes
[2024-05-05 15:32:10] ERROR: ERROR simulado desde /api/error-test - usado para prueba de CloudWatch
```

---

## ☁️ Instrucciones básicas para AWS

### Prerrequisitos en el Laboratorio AWS

1. **Crear Key Pair** en EC2 → Key Pairs → Create key pair (nombre: `doggiechic-key`)
2. **Descargar el `.pem`** y guardar en lugar seguro

### Desplegar CloudFormation

```bash
# Desde AWS CLI (opcional)
aws cloudformation create-stack \
  --stack-name doggiechic-stack \
  --template-body file://cloudformation/template.yaml \
  --parameters ParameterKey=KeyPairName,ParameterValue=doggiechic-key \
  --region us-east-1
```

O desde la **Consola AWS**:
1. Ir a **CloudFormation** → Create Stack
2. Upload template → seleccionar `cloudformation/template.yaml`
3. Stack name: `doggiechic-stack`
4. Parameter `KeyPairName`: el nombre del key pair creado
5. Click en Create Stack

### Desplegar la app en la EC2 pública

```bash
# Conectar por SSH
ssh -i doggiechic-key.pem ec2-user@<IP_PUBLICA>

# Clonar el repo
git clone <URL_REPO>
cd fortify-connect-aws

# Ejecutar
chmod +x scripts/*.sh
./scripts/deploy.sh
```

> ⚠️ **Nota IAM**: No se incluyen roles IAM personalizados para compatibilidad con laboratorios educativos. CloudWatch Logs requiere el rol `CloudWatchLogsFullAccess` — asignarlo manualmente en la consola AWS si está disponible.

---

## 🗂️ Estructura del Proyecto

```
doggie-chic-devops/
├── landing/           # Sitio público (puerto 8080)
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── Dockerfile
├── intranet/          # Panel interno (puerto 8081)
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── Dockerfile
├── backend/           # API Node.js + Express (puerto 3000)
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   └── logs/
├── scripts/           # Automatización Bash
│   ├── deploy.sh
│   ├── start_app.sh
│   ├── stop_app.sh
│   └── view_logs.sh
├── cloudformation/    # Infraestructura AWS como código
│   └── template.yaml
├── docs/              # Documentación
│   └── architecture.mmd
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

## 👨‍💻 Autor

Proyecto Final — Fundamentos de DevOps  
**Doggie Chic Studio** — Estética Canina Premium
