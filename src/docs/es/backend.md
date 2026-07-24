---
title: "Documentación de Backend"
subtitle: "Cómo funciona la arquitectura del servidor y la API de la plataforma CELC."
---

## Visión General
El backend de la plataforma CELC está diseñado para ser seguro, rápido y escalable. Utiliza una arquitectura basada en contenedores para separar los servicios.

### Tecnologías Principales:
- **Node.js / Express**: Para el enrutamiento de la API.
- **MySQL**: Base de datos relacional para datos críticos.
- **Redis**: Manejo de caché de sesiones y tokens.

## Estructura de la API
Todos los endpoints están servidos bajo la ruta base `/api/v1/`.

## Diagrama de Relaciones de la Base de Datos

A continuación se muestra una vista panorámica de cómo se relacionan las tablas principales en nuestra base de datos:

![Esquema de relaciones de la Base de Datos](/images/docs/backend-db-schema.png)


> **Nota sobre Seguridad:** Todas las rutas estan protegidas paraa solo acceder por medio de la aplicacion web y con la autenticacion requerida, el encabezado `Authorization: Bearer <token>` es requerido.