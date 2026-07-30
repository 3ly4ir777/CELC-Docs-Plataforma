---
title: "Gestión de Usuarios y Grupos"
subtitle: "Endpoints para administración de cuentas, roles y asignación de grados."
section: "Documentación Administración & API"
---

# Gestión de Usuarios y Grupos

Módulos encargados de la administración de accesos a la plataforma y la estructura escolar.

## Módulo de Usuarios (`/users`)
*Acceso exclusivo para Administradores.*

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| **GET** | `/users` | Lista todas las cuentas registradas. |
| **GET** | `/users/:uuid` | Detalle de un usuario específico. |
| **POST** | `/users` | Crea un usuario (`name`, `email`, `password`, `confPassword`, `role`). |
| **PATCH** | `/users/:uuid` | Actualiza datos o contraseña de la cuenta. |
| **DELETE** | `/users/:uuid` | Elimina la cuenta (bloqueado si tiene relaciones activas). |

> 🔒 **Regla de Seguridad:** Un administrador no puede cambiar su propio rol ni eliminarse a sí mismo.

## Módulo de Grupos / Grados (`/grados`)
Los grupos organizan a los alumnos y asignan a un maestro responsable.

| Método | Endpoint | Permiso | Descripción |
| :--- | :--- | :--- | :--- |
| **GET** | `/grados` | Todos | Filtra según el rol del usuario autenticado. |
| **GET** | `/grados/:uuid` | Todos | Detalle de un grupo permitido. |
| **POST** | `/grados` | Admin | Crea un grupo (`nombre`, `maestroId` opcional). |
| **PATCH** | `/grados/:uuid` | Admin | Actualiza el nombre o cambia el maestro asignado. |
| **DELETE** | `/grados/:uuid` | Admin | Elimina el grupo si no tiene registros vinculados. |