---
title: "Overview and Backend Configuration"
subtitle: "System requirements, environment variables, and setup for the CELC server."
section: "Documentación Administración & API"
---

# Overview and Configuration

This server is built with **Node.js, Express, and Sequelize (MySQL)**.

## Prerequisites
* Node.js and npm installed.
* Running MySQL server.
* HTTPS enabled in production (mandatory for session cookies).

## Environment Variables (`.env`)

| Variable | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `DB_HOST` | Yes | `localhost` | MySQL host server. |
| `DB_USER` | Yes | - | Database username. |
| `DB_PASSWORD`| Yes | - | Database password (`DB_PASS` as fallback). |
| `DB_NAME` | Yes | - | Target database name. |
| `SESS_SECRET`| Yes | - | Secret key used to sign session cookies. |
| `PORT` | No | `3000` | Server HTTP port. |
| `NODE_ENV` | No | `development` | In `production`, enforces `secure` cookies and `SameSite=None`. |

## Installation and Startup

```bash
git clone [https://github.com/LerdoContemporaneo/app-backend.git](https://github.com/LerdoContemporaneo/app-backend.git)
cd app-backend
npm install
node src/server.js