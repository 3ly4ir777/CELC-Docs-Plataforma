---
title: "User and Group Management"
subtitle: "API endpoints for account administration, roles, and class assignments."
section: "Documentación Administración & API"
---

# User and Group Management

Modules responsible for managing platform user access and institutional structure.

## User Module (`/users`)
*Restricted to Administrators.*

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/users` | Lists all registered accounts. |
| **GET** | `/users/:uuid` | Fetches details for a single user. |
| **POST** | `/users` | Creates user (`name`, `email`, `password`, `confPassword`, `role`). |
| **PATCH** | `/users/:uuid` | Updates account fields or password. |
| **DELETE** | `/users/:uuid` | Removes user account (blocked if active relations exist). |

> 🔒 **Security Guard:** Administrators cannot alter their own role or delete their own active account.

## Group / Grade Module (`/grados`)
Groups organize students and link them with an assigned teacher.

| Method | Endpoint | Permission | Description |
| :--- | :--- | :--- | :--- |
| **GET** | `/grados` | All | Filtered by user role. |
| **GET** | `/grados/:uuid` | All | Details of an authorized group. |
| **POST** | `/grados` | Admin | Creates a group (`nombre`, optional `maestroId`). |
| **PATCH** | `/grados/:uuid` | Admin | Updates group name or reassigns teacher. |
| **DELETE** | `/grados/:uuid` | Admin | Deletes group if no attached records remain. |