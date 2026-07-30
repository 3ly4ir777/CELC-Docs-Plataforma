---
title: "Autenticación, Sesiones y CORS"
subtitle: "Mecanismo de seguridad basado en cookies y políticas de origen de la API."
section: "Documentación Administración & API"
---

# Autenticación y Sesiones

El sistema **NO usa JWT**. La autenticación se maneja 100% mediante cookies de sesión (`connect.sid`) almacenadas en MySQL mediante Sequelize.

## Flujo de Trabajo
1. `POST /login` ➔ Valida credenciales con **Argon2** y genera la cookie.
2. La cookie guarda el `UUID` del usuario en la sesión.
3. `GET /me` ➔ Devuelve los datos del usuario logueado.
4. `DELETE /logout` ➔ Destruye la sesión activa.

## Configuración de Cookies por Ambiente

| Propiedad | Desarrollo | Producción |
| :--- | :--- | :--- |
| `secure` | `false` | `true` (requiere HTTPS) |
| `sameSite`| `lax` | `none` |
| `httpOnly` | `true` | `true` |
| `maxAge` | 24 horas | 24 horas |

> 📌 **Regla de Frontend:** En todas las peticiones `fetch` o `axios`, es obligatorio incluir `credentials: "include"` / `withCredentials: true`.

## Dominio y CORS
Orígenes autorizados por defecto:
* `https://lerdo-front.vercel.app`
* `https://portal.lerdocontemporaneo.com`
* `http://localhost:3000` y `http://localhost:3001`