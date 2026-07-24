---
title: "Profile Views by Role"
subtitle: "Ejemplos de dashboards y paneles personalizados para Estudiantes, Docentes y Administradores."
---

La interfaz y las secciones visibles de la plataforma cambian según el rol con el que hayas iniciado sesión mediante tu **JWT (JSON Web Token)**.

---

## 1. Perfil de Estudiante

Diseñado para facilitar el acceso al material académico, horarios y avisos escolares.

- **Secciones visibles:** Mis Cursos, Calificaciones, Calendario Académico, Perfil de Usuario.
- **Permisos:** Solo lectura sobre planes de estudio y entregas de tareas.

![Perfil Estudiante](/images/docs/profile-student.png)

---

## 2. Perfil de Maestro / Docente

Enfocado en la gestión de clases, asignación de actividades y registro de evaluaciones.

- **Secciones visibles:** Mis Grupos, Registro de Asistencia, Evaluaciones, Repositorio de Materiales.
- **Permisos:** Lectura y edición sobre calificaciones de sus alumnos asignados.

![Perfil Maestro](/images/docs/profile-teacher.png)

---

## 3. Perfil de Administrador

Panel de control global con métricas de la escuela, seguridad y configuración de la plataforma.

- **Secciones visibles:** Gestión de Usuarios (CRUD), Auditoría de Accesos, Métricas del Sistema, Documentación Interna de API/Backend.
- **Permisos:** Acceso completo (Lectura, Escritura, Borrado y Configuración).

![Perfil Administrador](/images/docs/profile-admin.png)