---
title: "Student and Attendance Management"
subtitle: "School profile linking and daily attendance tracking for students and staff."
section: "Documentación Administración & API"
---

# Student and Attendance Management

Manages student enrollment details and daily attendance records.

## Student Profile (`/alumnos`)

> ⚠️ **Important:** Creating an account in `/users` does NOT automatically create a student profile. The profile must be created separately and linked via `userId`.

* **POST `/alumnos`**: Creates school profile. Requires `nombre`, `matricula`, `tutor`, `userId`, and `gradoIds` (array of group IDs).
* **Teacher Scope**: Teachers can only view or manage students assigned to their own groups.

## Student Attendance (`/asistencia`)
Records student attendance per group on a specific date.

* **Valid States**: `Presente`, `Ausente`, `Tarde`, `Justificado`.
* **Submitting Attendance (`POST /asistencia`)**:
  ```json
  {
    "fecha": "2026-07-28",
    "estado": "Presente",
    "alumnoId": 25,
    "gradoId": 3
  }