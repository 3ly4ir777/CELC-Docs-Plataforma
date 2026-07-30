---
title: "Visión General y Configuración del Backend"
subtitle: "Requisitos del sistema, variables de entorno e instalación del servidor CELC."
section: "Documentación Administración & API"
---

# Visión General y Configuración

Este servidor está construido sobre **Node.js, Express y Sequelize (MySQL)**.

## Requisitos Previos
* Node.js y npm.
* Servidor MySQL activo.
* HTTPS en producción (obligatorio para el manejo de cookies de sesión).

## Variables de Entorno (`.env`)

| Variable | Requerido | Valor por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `DB_HOST` | Sí | `localhost` | Host de MySQL. |
| `DB_USER` | Sí | - | Usuario de la base de datos. |
| `DB_PASSWORD`| Sí | - | Contraseña de MySQL (`DB_PASS` como fallback). |
| `DB_NAME` | Sí | - | Nombre de la base de datos. |
| `SESS_SECRET`| Sí | - | Clave secreta para firmar cookies. |
| `PORT` | No | `3000` | Puerto del servidor. |
| `NODE_ENV` | No | `development` | En `production` activa cookie `secure` y `SameSite=None`. |

## Instalación y Arranque

```bash
git clone [https://github.com/LerdoContemporaneo/app-backend.git](https://github.com/LerdoContemporaneo/app-backend.git)
cd app-backend
npm install
node src/server.js