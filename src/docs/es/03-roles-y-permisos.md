---
title: "Control de Acceso y Roles"
subtitle: "Matriz de permisos para Administrador, Maestro y Alumno."
section: "Documentación Administración & API"
---

# Control de Acceso y Roles

El sistema maneja 3 roles estrictos: `administrador`, `maestro` y `alumno`.

## Matriz de Permisos

| Módulo | Administrador | Maestro | Alumno |
| :--- | :--- | :--- | :--- |
| **Usuarios** | CRUD Total | Sin Acceso | Sin Acceso |
| **Grupos / Grados** | CRUD Total | Solo sus grupos asignados | Solo sus grupos |
| **Alumnos (Perfil)**| CRUD Total | Gestiona alumnos de sus grupos | Solo su propio perfil |
| **Asistencia Alumnos**| CRUD Total | Pasa lista en sus grupos | Consulta personal |
| **Asistencia Maestros**| CRUD Total | Sin Acceso | Sin Acceso |
| **Tareas / Reportes**| CRUD Total | Gestiona en sus grupos | Consulta general |

## Middlewares de Control
* `verifyUser`: Comprueba que exista sesión válida y extrae `userId` y `role`.
* `adminOnly`: Bloquea la ruta si el usuario no es `administrador`.
* `staffOnly`: Permite el paso a `administrador` o `maestro`.

> 🔒 **Validación por Controlador:** Aunque la ruta use `staffOnly`, los controladores validan internamente que el maestro sea el dueño del `gradoId` enviado.