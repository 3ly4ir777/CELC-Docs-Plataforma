---
title: "Guía de Integración y Mantenimiento"
subtitle: "Checklist para el frontend, códigos de error comunes y diagnóstico."
section: "Documentación Administración & API"
---

# Guía de Integración y Mantenimiento

Recurso rápido para desarrolladores Frontend y administradores de infraestructura.

## Tabla de Códigos de Error Comunes

| Código | Causa Frecuente | Solución en Frontend / Backend |
| :--- | :--- | :--- |
| **401 Unauthorized** | Cookie de sesión no enviada o expirada. | Agregar `credentials: "include"` / `withCredentials: true`. |
| **403 Forbidden** | Rol insuficiente o grupo ajeno al maestro. | Verificar que el recurso pertenezca al usuario logueado. |
| **400 Bad Request** | Faltan datos obligatorios (ej. `gradoId`). | Revisar que la petición cumpla con el esquema JSON esperado. |
| **409 Conflict** | Registro duplicado o bloqueo por FK. | Evitar duplicar asistencias en la misma fecha o revisar relaciones. |
| **CORS Error** | Dominio no registrado en el backend. | Añadir la URL del cliente en la lista de orígenes de `server.js`. |

## Checklist para Desarrolladores Frontend

- [ ] Todas las peticiones `fetch`/`axios` incluyen envío de credenciales (`credentials: "include"`).
- [ ] Los formularios usan IDs numéricos (`id`) para enviar llaves foráneas.
- [ ] Las vistas de detalle navegan usando el `uuid` público del recurso.
- [ ] El manejo de errores captura el mensaje devuelto en la propiedad `msg` del JSON.
- [ ] Al pasar lista se envía tanto el `alumnoId` como el `gradoId`.

## Pasos para Producción
1. Asegurar la variable `NODE_ENV=production` para activar cookies en modo `secure`.
2. Contar con certificado SSL/HTTPS configurado en el servidor.
3. Definir un `SESS_SECRET` seguro y aleatorio.
4. Ejecutar respaldo de la base de datos MySQL antes de actualizar los modelos.