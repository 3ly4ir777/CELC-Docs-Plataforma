---
title: "Tasks, Reports, and Incidents"
subtitle: "Academic assignment tracking, behavioral logs, and student performance."
section: "Documentación Administración & API"
---

# Tasks, Reports, and Incidents

Academic tools designed to monitor student assignments and behavioral progress.

## 1. Tasks (`/tareas`)
Classroom assignment management automatically sorted by due date.

* **Endpoints**: `GET`, `POST`, `PATCH`, `DELETE` at `/tareas` (and `/tareas/:uuid`).
* **Required Fields**: `titulo`, `descripcion`, `fechaAsignacion`, `fechaEntrega`, and `gradoId`.
* **Access Rules**: Students view tasks for their enrolled groups; Teachers manage assignments for their assigned classes.

## 2. Student Reports (`/reportes`)
Progress and behavioral logs assigned to individual students.

* **Required Fields**: `titulo`, `contenido`, `alumnoId`, `gradoId`.
* **Audit Trail:** The `maestroId` is automatically bound from the active session. Teachers can only modify or delete reports they personally created.

## 3. Incident Records (`/incidencias`)
Log specific disciplinary or behavioral events.

* **Available Filters**: `GET /incidencias?alumnoId=25&gradoId=3&desde=YYYY-MM-DD&hasta=YYYY-MM-DD&tipo=Conducta`.
* **Payload Structure**: Requires `tipo`, `descripcion`, `alumnoId`, and `gradoId`. The `fecha` defaults to current date if omitted.