# 📋 Registro Técnico de Cambios

> Documento generado automáticamente con cada commit realizado en el proyecto.
> Contiene el detalle técnico completo de cada cambio para el equipo de desarrollo.

---

## feat: integración de Vercel Analytics en el layout base de Astro

| Campo | Detalle |
|-------|---------|
| **Fecha** | 2026-08-21 23:12:45 |
| **Autor** | David Mendez (david.mendez@courtbetsd.com) |
| **Branch** | main |
| **Tipo** | Feature / Integration |

### Archivos Modificados

| Archivo | Estado | Descripción del Cambio |
|---------|--------|----------------------|
| `package.json` | Modificado | Adición del paquete `@vercel/analytics` (^2.0.1) como dependencia de producción. |
| `pnpm-lock.yaml` | Modificado | Actualización del árbol de dependencias y lockfile de pnpm. |
| `src/layouts/Layout.astro` | Modificado | Importación e inserción del componente `<Analytics />` de `@vercel/analytics/astro` antes del cierre de `</body>`. |

### Detalle Técnico
- **Integración Nativa de Astro**: Se instaló `@vercel/analytics` y se consumió el componente exportado para Astro (`@vercel/analytics/astro`).
- **Inyección en el Layout Base**: El componente se posicionó al final del contenedor `<body>` de `src/layouts/Layout.astro` para asegurar el tracking de páginas vistas y métricas de rendimiento web sin bloquear la renderización inicial.

### Fragmentos de Código Relevantes

```diff
--- src/layouts/Layout.astro
+++ src/layouts/Layout.astro
@@ -1,4 +1,5 @@
 ---
 import '../styles/global.css';
+import Analytics from '@vercel/analytics/astro';
 
 interface Props {
@@ -147,5 +148,6 @@
   </head>
   <body class="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-gospel-gold-400 selection:text-gospel-navy-950">
     <slot />
+    <Analytics />
   </body>
 </html>
```

---

## feat: landing page estática en Astro, optimizaciones SEO y base de conocimiento en .ai

| Campo | Detalle |
|-------|---------|
| **Fecha** | 2026-08-21 23:05:30 |
| **Autor** | David Mendez (david.mendez@courtbetsd.com) |
| **Branch** | main |
| **Tipo** | Feature / Initial Setup |

### Archivos Modificados

| Archivo | Estado | Descripción del Cambio |
|---------|--------|----------------------|
| `.ai/context.md` | Agregado | Contexto institucional, liderazgo pastoral, doctrina y horarios oficiales. |
| `.ai/brand-guide.md` | Agregado | Guía de marca, diseño, paleta oficial (Azul Marino y Oro) y tipografía. |
| `.ai/landing-spec.md` | Agregado | Especificación técnica y de contenido para la landing page. |
| `.ai/system-instructions.md` | Agregado | Directrices, accesibilidad y políticas de desarrollo para agentes de IA. |
| `src/layouts/Layout.astro` | Agregado | Layout base con metadatos SEO, OpenGraph, Canonical, Geo-tags y Schema.org JSON-LD (`Church`, `WebSite`, `BreadcrumbList`). |
| `src/pages/index.astro` | Agregado | Página principal estática ensamblando todos los componentes modulares. |
| `src/components/Navbar.astro` | Agregado | Navegación responsive fija con logo y botón directo de WhatsApp. |
| `src/components/Hero.astro` | Agregado | Encabezado principal con título de alto impacto, insignias de servicio y llamados a la acción. |
| `src/components/Pillars.astro` | Agregado | Cuadrícula con los 3 pilares ministeriales: Enseñanza, Adoración y Comunidad. |
| `src/components/VisionMission.astro` | Agregado | Tarjetas de Propósito, Visión y Misión institucional. |
| `src/components/PastorMessage.astro` | Agregado | Mensaje pastoral de bienvenida por el Pastor Jesús Hernández. |
| `src/components/Schedule.astro` | Agregado | Horarios oficiales semanales (Miércoles 7:00 PM y Domingo 10:30 AM). |
| `src/components/Location.astro` | Agregado | Ubicación física en Colonia La Noria con enlace GPS y botón de copiado de dirección. |
| `src/components/CTAInvite.astro` | Agregado | Sección de llamado a la acción con enlace directo a WhatsApp. |
| `src/components/Footer.astro` | Agregado | Pie de página institucional con horarios, enlaces y derechos reservados. |
| `src/styles/global.css` | Agregado | Estilos globales, variables de color y efectos de gradiente dorado. |
| `astro.config.mjs` | Agregado | Configuración estática de Astro con integraciones de Tailwind CSS y `@astrojs/sitemap`. |
| `tailwind.config.mjs` | Agregado | Configuración de temas y paleta de colores personalizada Gospel. |
| `package.json` | Agregado | Manifiesto de dependencias con Astro 5, Tailwind CSS y TypeScript. |
| `pnpm-workspace.yaml` | Agregado | Configuración de permisos de compilación para dependencias nativas en pnpm. |
| `.npmrc` | Agregado | Configuración de ejecución limpia para pnpm. |
| `.gitignore` | Agregado | Exclusión de `dist/`, `node_modules/`, `.pnpm-store/` y archivos de entorno. |
| `public/robots.txt` | Agregado | Reglas de indexación y enlace al sitemap. |
| `public/favicon.svg` | Agregado | Icono vectorial SVG de la iglesia y la Biblia. |
| `public/assets/` | Agregado | Logotipo y banner oficial migrados y optimizados. |
| `README.md` | Agregado | Documentación maestra del repositorio y guía de despliegue. |

### Detalle Técnico
- **Arquitectura 100% Estática**: Implementación de Astro SSG sin dependencias dinámicas en tiempo de ejecución.
- **SEO y Datos Estructurados**: Inclusión de Schema.org JSON-LD para `Church`, `PlaceOfWorship` y `WebSite`.
- **Sitemap Dinámico**: Generación automática de `sitemap-index.xml` y `sitemap-0.xml` mediante `@astrojs/sitemap`.
- **Rendimiento**: Atributos `width`, `height` y `fetchpriority` en imágenes para eliminar CLS y optimizar LCP.
- **Compatibilidad con pnpm**: Integración de `pnpm-workspace.yaml` con autorización de `esbuild` y `sharp`.

### Fragmentos de Código Relevantes

```typescript
// astro.config.mjs
export default defineConfig({
  site: 'https://gospeliglesia.com',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
```

---
