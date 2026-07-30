---
title: "Authentication, Sessions, and CORS"
subtitle: "Cookie-based security mechanisms and origin policies for the API."
section: "Documentación Administración & API"
---

# Authentication and Sessions

This system **does NOT use JWT**. Authentication is managed entirely via session cookies (`connect.sid`) stored in MySQL through Sequelize.

## Workflow
1. `POST /login` ➔ Validates credentials using **Argon2** and generates the session cookie.
2. The cookie stores the user's `UUID` within the session store.
3. `GET /me` ➔ Returns current authenticated user data.
4. `DELETE /logout` ➔ Destroys the active session.

## Cookie Configuration by Environment

| Property | Development | Production |
| :--- | :--- | :--- |
| `secure` | `false` | `true` (requires HTTPS) |
| `sameSite`| `lax` | `none` |
| `httpOnly` | `true` | `true` |
| `maxAge` | 24 hours | 24 hours |

> 📌 **Frontend Rule:** All `fetch` or `axios` requests must explicitly include `credentials: "include"` / `withCredentials: true`.

## Allowed CORS Origins
Whitelisted origins by default:
* `https://lerdo-front.vercel.app`
* `https://portal.lerdocontemporaneo.com`
* `http://localhost:3000` and `http://localhost:3001`