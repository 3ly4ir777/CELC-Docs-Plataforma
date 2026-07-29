import { defineMiddleware } from 'astro:middleware';
import { jwtVerify } from 'jose';

// Definimos qué páginas de la documentación requieren exclusivamente rol de administrador
const ADMIN_ONLY_ROUTES = [
  '/es/docs/crud-usuarios',
  '/en/docs/crud-usuarios',
  '/es/docs/backend',
  '/en/docs/backend',
];

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  
  // 1. Obtener el token de las cookies
  const token = context.cookies.get('auth_token')?.value;

  let user: App.Locals['user'] = null;

  // 2. Si hay token, intentamos verificarlo usando la clave secreta compartida
  if (token) {
    try {
      const secret = new TextEncoder().encode(import.meta.env.JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);
      user = payload as unknown as App.Locals['user'];
      
      // Guardamos la información del usuario en el contexto de Astro
      context.locals.user = user;
    } catch (error) {
      console.warn('JWT inválido o expirado');
    }
  }

  // 3. REGLA DE PROTECCIÓN DE RUTAS SEGÚN ROL
  const isProtectedAdminRoute = ADMIN_ONLY_ROUTES.some(route => pathname.startsWith(route));

  if (isProtectedAdminRoute) {
    // Si no está logueado o su rol no es 'administrador'
    if (!user || user.role !== 'administrador') {
      return context.redirect('/es/docs/login?error=unauthorized');
    }
  }

  return next();
});