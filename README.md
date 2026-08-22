# ⛪ Gospel - Iglesia con Propósito

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Static Site](https://img.shields.io/badge/Output-100%25_Static-10B981?style=flat)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> *"¡Jesús Transforma Vidas! Ven, escucha y recibe el mensaje de esperanza."*

Landing page estática oficial para **Gospel - Iglesia con Propósito**, una comunidad cristiana comprometida con el amor, la adoración, la enseñanza de la Palabra de Dios y el servicio al prójimo. Desarrollada con **Astro** y **Tailwind CSS** para ofrecer una experiencia ultra rápida, accesible, responsiva y 100% estática.

---

## 📖 Tabla de Contenido
- [🏛️ Identidad y Fundamentos](#️-identidad-y-fundamentos)
- [✨ Pilares y Servicios](#-pilares-y-servicios)
- [📍 Ubicación y Horarios](#-ubicación-y-horarios)
- [🤖 Archivos de Contexto para IA (`.ai/`)](#-archivos-de-contexto-para-ia-ai)
- [🚀 Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [🛠️ Instalación y Desarrollo Local](#️-instalación-y-desarrollo-local)
- [📦 Compilación y Despliegue](#-compilación-y-despliegue)
- [📜 Directrices de Contenido](#-directrices-de-contenido)

---

## 🏛️ Identidad y Fundamentos

* **Pastor Principal**: Jesús Hernández
* **Lema Principal**: *"¡Jesús Transforma Vidas! Ven, escucha y recibe el mensaje de esperanza."*
* **Propósito**: Servir con amor y pasión a Dios, la iglesia y el mundo.
* **Visión**: Ser una iglesia de excelencia que pueda alcanzar a la mayoría del ser humano en el menor tiempo posible.
* **Misión**: Lograrlo a través de los dones que Dios ha puesto en cada uno de sus hijos e hijas, demostrando así su pasión por Cristo y las almas.

---

## ✨ Pilares y Servicios

1. 📖 **Enseñanza**: Basada sólidamente en las Sagradas Escrituras con aplicaciones prácticas para la vida personal y familiar.
2. 🙏 **Adoración**: Momentos genuinos de alabanza, oración y gratitud a Dios.
3. 🤝 **Comunidad**: Un lugar de acogida y amor donde toda persona y familia es bienvenida.

---

## 📍 Ubicación y Horarios

* **Dirección**: Cto. Hacienda del Real 1716, Colonia La Noria.
* **Horarios de Servicios**:
  * **Miércoles** • 7:00 PM — *Reunión de Oración y Estudio Bíblico*
  * **Domingo** • 10:30 AM — *Servicio Familiar de Adoración y Palabra*

---

## 🤖 Archivos de Contexto para IA (`.ai/`)

Este repositorio incluye una suite de documentación estructurada para agentes y modelos de Inteligencia Artificial:

- [`.ai/context.md`](.ai/context.md): Información doctrinal, identidad, liderazgo y servicios de la iglesia.
- [`.ai/brand-guide.md`](.ai/brand-guide.md): Paleta de colores oficial (Azul Marino y Oro), tipografías, simbología y tono de comunicación.
- [`.ai/landing-spec.md`](.ai/landing-spec.md): Especificación técnica y de contenido detallada de cada sección de la web.
- [`.ai/system-instructions.md`](.ai/system-instructions.md): Reglas de desarrollo, accesibilidad y políticas de contenido para agentes de IA.

---

## 🚀 Tecnologías Utilizadas

- **[Astro](https://astro.build/)**: Framework web enfocado en contenido y rendimiento estático (Zero JavaScript por defecto).
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilidades CSS para diseño responsivo moderno.
- **HTML5 Semántico & A11y**: Estructura accesible con contraste validado WCAG AA.
- **OpenGraph & Schema.org**: Metadatos para SEO local (`Church` / `PlaceOfWorship`) y previsualización enriquecida en WhatsApp/redes sociales.

---

## 📂 Estructura del Proyecto

```text
├── .ai/                       # Documentación y directrices de IA
│   ├── brand-guide.md         # Guía de marca, colores y tipografía
│   ├── context.md             # Contexto institucional
│   ├── landing-spec.md        # Especificación de la landing page
│   └── system-instructions.md # Reglas y estándares para agentes de IA
├── _data/                     # Archivos fuente originales (PDF y flyers)
├── public/                    # Activos estáticos públicos
│   ├── assets/                # Imágenes optimizadas (logo, banner, iconos)
│   ├── favicon.svg            # Favicon del sitio
│   └── robots.txt             # Directivas para motores de búsqueda
├── src/
│   ├── components/            # Componentes modulares de Astro
│   │   ├── CTAInvite.astro    # Llamado a la acción con WhatsApp
│   │   ├── Footer.astro       # Pie de página
│   │   ├── Hero.astro         # Encabezado principal de alto impacto
│   │   ├── Location.astro     # Dirección y mapa de ubicación
│   │   ├── Navbar.astro       # Barra de navegación responsiva
│   │   ├── PastorMessage.astro# Mensaje pastoral de bienvenida
│   │   ├── Pillars.astro      # Tarjetas de Enseñanza, Adoración y Comunidad
│   │   ├── Schedule.astro     # Horarios de servicios (Miércoles y Domingo)
│   │   └── VisionMission.astro# Visión, Misión y Propósito
│   ├── layouts/
│   │   └── Layout.astro       # Layout base con SEO y metadatos
│   ├── pages/
│   │   └── index.astro        # Página principal
│   └── styles/
│       └── global.css         # Estilos globales y temas
├── astro.config.mjs           # Configuración de Astro
├── package.json               # Dependencias y scripts
├── tailwind.config.mjs        # Configuración de Tailwind CSS
└── README.md                  # Documentación del proyecto
```

---

## 🛠️ Instalación y Desarrollo Local

### Prerrequisitos
- **Node.js**: v18.0 o superior (Recomendado Node 20+)
- **npm** o **pnpm**

### Pasos

1. Clonar el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd RGDev.Web.Gospel
   ```

2. Instalar dependencias:
   ```bash
   pnpm install
   # o con npm:
   # npm install
   ```

3. Iniciar el servidor de desarrollo local:
   ```bash
   pnpm dev
   # o con npm:
   # npm run dev
   ```
   Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

---

## 📦 Compilación y Despliegue

Para compilar la versión de producción 100% estática:

```bash
npm run build
```

La compilación generará los archivos HTML/CSS/JS estáticos listos para producción en la carpeta `dist/`. Puedes previsualizar el resultado localmente con:

```bash
npm run preview
```

### Proveedores de Despliegue Recomendados
- **Cloudflare Pages**: Conexión con repositorio Git y comando `npm run build` con directorio de salida `dist`.
- **Vercel**: Framework Preset `Astro`.
- **Netlify**: Build command `npm run build`, Publish directory `dist`.
- **GitHub Pages**: Mediante GitHub Actions con Astro Deploy.

---

## 📜 Directrices de Contenido

> [!IMPORTANT]
> Las metas numéricas institucionales internas del equipo de liderazgo **no deben mostrarse en el contenido público de la landing page**. La web se enfoca en el mensaje transformador de Jesús, la bienvenida a las familias, los pilares de fe, los horarios y la ubicación.

---

*Gospel - Iglesia con Propósito • Pastor Jesús Hernández • Colonia La Noria*
