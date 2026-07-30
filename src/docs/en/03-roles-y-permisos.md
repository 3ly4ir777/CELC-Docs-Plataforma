---
title: "Access Control and Roles"
subtitle: "Permission matrix for Admin, Teacher, and Student roles."
section: "Documentación Administración & API"
---

# Access Control and Roles

The system enforces three strict roles: `administrador`, `maestro`, and `alumno`.

## Permission Matrix

| Module | Administrator | Teacher | Student |
| :--- | :--- | :--- | :--- |
| **Users** | Full CRUD | No Access | No Access |
| **Groups / Grades** | Full CRUD | Assigned groups only | Enrolled groups only |
| **Students (Profile)**| Full CRUD | Manage students in their groups | Own profile only |
| **Student Attendance**| Full CRUD | Take attendance in their groups | Personal record lookup |
| **Teacher Attendance**| Full CRUD | No Access | No Access |
| **Tasks / Reports** | Full CRUD | Manage in their groups | General inquiry |

## Middleware Guards
* `verifyUser`: Validates active session and populates `userId` and `role`.
* `adminOnly`: Restricts route exclusively to `administrador`.
* `staffOnly`: Allows access to `administrador` or `maestro`.

> 🔒 **Controller-Level Scope Check:** Even if a route uses `staffOnly`, controllers verify that the requesting teacher owns the submitted `gradoId`.