---
title: "Backend Documentation"
subtitle: "How the server architecture and API of the CELC platform works."
---

## Overview
The backend of the CELC platform is designed to be secure, fast, and scalable. It uses a container-based architecture to separate services.

### Main Technologies:
- **Node.js / Express**: For API routing.
- **PostgreSQL**: Relational database for critical data.
- **Redis**: Caching sessions and tokens.

## API Structure
All endpoints are served under the base route `/api/v1/`.

## Diagrama de Relaciones de la Base de Datos

A continuación se muestra una vista panorámica de cómo se relacionan las tablas principales en nuestra base de datos:

![Esquema de relaciones de la Base de Datos](/images/docs/backend-db-schema.png)

> **Security Note:** To access protected routes, the `Authorization: Bearer <token>` header is required.