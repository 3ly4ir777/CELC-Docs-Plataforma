---
title: "Tareas, Reportes e Incidencias"
subtitle: "Módulos académicos de seguimiento, asignación de actividades y conducta."
section: "Documentación Administración & API"
---

# Tareas, Reportes e Incidencias

Módulos destinados al seguimiento pedagógico y conductual de los estudiantes.

## 1. Tareas (`/tareas`)
Asignación de actividades por grupo con ordenamiento automático por fecha de entrega.

* **Endpoints**: `GET`, `POST`, `PATCH`, `DELETE` en `/tareas` (y `/tareas/:uuid`).
* **Campos obligatorios**: `titulo`, `descripcion`, `fechaAsignacion`, `fechaEntrega` y `gradoId`.
* **Regla de acceso**: Alumnos ven tareas de sus grupos; Maestros solo gestionan sus asignaturas.

## 2. Reportes (`/reportes`)
Bitácora de seguimiento individual sobre el desempeño de un estudiante.

* **Campos obligatorios**: `titulo`, `contenido`, `alumnoId`, `gradoId`.
* **Auditoría:** El `maestroId` se asigna de forma explícita mediante la sesión activa. Un maestro solo puede editar o borrar los reportes redactados por él mismo.

## 3. Incidencias (`/incidencias`)
Registro de faltas u observaciones conductuales puntuales.

* **Filtros disponibles**: `GET /incidencias?alumnoId=25&gradoId=3&desde=YYYY-MM-DD&hasta=YYYY-MM-DD&tipo=Conducta`.
* **Estructura base**: Requiere `tipo`, `descripcion`, `alumnoId` y `gradoId`. La `fecha` toma por defecto el día actual si se omite.