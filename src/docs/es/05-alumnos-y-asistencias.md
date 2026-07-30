---
title: "Gestión de Alumnos y Asistencias"
subtitle: "Vinculación de perfiles escolares y toma de lista para alumnos y docentes."
section: "Documentación Administración & API"
---

# Gestión de Alumnos y Asistencias

Este bloque administra la ficha técnica del estudiante y el control diario de asistencia.

## Perfil de Alumnos (`/alumnos`)

> ⚠️ **Importante:** Crear la cuenta en `/users` no crea el perfil escolar. El perfil se vincula posteriormente mediante el `userId`.

* **POST `/alumnos`**: Vincula la cuenta con la escuela. Requiere `nombre`, `matricula`, `tutor`, `userId` y `gradoIds` (arreglo de IDs de grupos).
* **Filtro por Maestro**: Un maestro solo puede ver o modificar alumnos que pertenezcan a sus grupos asignados.

## Control de Asistencia de Alumnos (`/asistencia`)
Registra la presencia del alumno en un grupo para una fecha específica.

* **Estados válidos**: `Presente`, `Ausente`, `Tarde`, `Justificado`.
* **Registro de Lista (`POST /asistencia`)**:
  ```json
  {
    "fecha": "2026-07-28",
    "estado": "Presente",
    "alumnoId": 25,
    "gradoId": 3
  }