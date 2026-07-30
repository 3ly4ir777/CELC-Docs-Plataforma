---
title: "Integration Guide and Troubleshooting"
subtitle: "Frontend checklists, common API error codes, and production diagnostics."
section: "Documentación Administración & API"
---

# Integration Guide and Troubleshooting

Quick reference for frontend developers and DevOps team members.

## Common Error Codes

| Code | Likely Cause | Solution / Fix |
| :--- | :--- | :--- |
| **401 Unauthorized** | Missing or expired session cookie. | Include `credentials: "include"` / `withCredentials: true`. |
| **403 Forbidden** | Insufficient role permissions or unassigned group access. | Verify resource ownership against current user session. |
| **400 Bad Request** | Missing required fields (e.g., `gradoId`). | Ensure request payload matches expected JSON schema. |
| **409 Conflict** | Duplicate entry or Foreign Key conflict. | Check for existing daily attendance records before sending. |
| **CORS Error** | Client origin not whitelisted in backend. | Add client domain to `server.js` allowed origins array. |

## Frontend Integration Checklist

- [ ] All `fetch`/`axios` calls explicitly send credentials (`credentials: "include"`).
- [ ] Forms use numeric primary keys (`id`) when linking foreign relations.
- [ ] Detail view routes use public `uuid` parameters.
- [ ] API error handling reads human-readable messages from the `msg` field.
- [ ] Attendance submissions pass both `alumnoId` and `gradoId`.

## Production Readiness Checklist
1. Ensure `NODE_ENV=production` is set to activate `secure` cookie flags.
2. Verify SSL/HTTPS configuration on the web host.
3. Supply a strong, randomized `SESS_SECRET`.
4. Perform database backups prior to running model changes or updates.