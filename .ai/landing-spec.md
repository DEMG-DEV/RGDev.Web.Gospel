# Especificación Técnica de la Landing Page: Gospel - Iglesia con Propósito

## 1. Arquitectura del Sitio
- **Tipo de Sitio**: Landing Page Estática (Static Site Generation - SSG).
- **Framework**: Astro (Zero-JS por defecto, máximo rendimiento y SEO).
- **Estilos**: Tailwind CSS con diseño responsivo móvil-primero.
- **Sin backend dinámico**: Todo el contenido se pre-renderiza estáticamente a archivos HTML/CSS/JS puros en la carpeta `dist/`.

---

## 2. Estructura de Secciones

### 1. Barra de Navegación (`Navbar`)
- Logotipo de **Gospel - Iglesia con Propósito**.
- Enlaces de anclaje suave (*smooth scrolling*):
  - Inicio (`#inicio`)
  - Nosotros (`#nosotros`)
  - Pilares (`#pilares`)
  - Horarios (`#horarios`)
  - Ubicación (`#ubicacion`)
- Botón de Acción Rápida: *"Cómo Llegar"* o *"Escríbenos"* (enlace a WhatsApp).

### 2. Sección Principal (`Hero`)
- Fondo visual temático cálido con gradiente azul marino y dorado.
- Insignia (*Badge*): *"Gospel • Iglesia con Propósito"*.
- Título principal de gran impacto: **"¡Jesús Transforma Vidas!"**.
- Subtítulo: *"Ven, escucha y recibe el mensaje de esperanza. Un lugar para crecer en Dios con tu familia y amigos."*
- Botones CTA:
  - Primario (Oro/Dorado): *"Ver Horarios de Servicios"* -> Ancla a `#horarios`.
  - Secundario (Azul con borde / icono de mapa): *"Cómo Llegar a La Noria"* -> Ancla a `#ubicacion`.
- Banner informativo rápido con los próximos servicios.

### 3. Pilares Ministeriales (`Pillars`)
Tres tarjetas destacadas con iconos alusivos:
1. **Enseñanza**: *"Basada en la Palabra de Dios"*. Mensajes prácticos para la vida diaria y el crecimiento espiritual.
2. **Adoración**: *"Momentos de alabanza y oración"*. Espacios para buscar la presencia de Dios en gratitud.
3. **Comunidad**: *"Un lugar donde eres bienvenido"*. Convivencia familiar y relaciones sanas de amistad.

### 4. Visión, Misión y Propósito (`VisionMission`)
- Presentación de los valores nucleares de la iglesia:
  - **Propósito**: *Servir con amor y pasión a Dios, la iglesia y el mundo.*
  - **Visión**: *Ser una iglesia de excelencia que pueda alcanzar a la mayoría del ser humano en el menor tiempo posible.*
  - **Misión**: *Esto se logrará a través de los dones que Dios ha puesto en cada uno de sus hijos e hijas, demostrando así su pasión por Cristo y las almas.*
- *Regla de Contenido*: **No incluir metas numéricas internas** en la página web pública.

### 5. Mensaje Pastoral (`PastorMessage`)
- Mensaje cálido firmado por el **Pastor Jesús Hernández**.
- Enfoque pastoral: Abrir los brazos a toda persona que busca esperanza y dirección.

### 6. Horarios de Servicios (`Schedule`)
- Tarjetas visuales de los dos días de reunión:
  - **Miércoles — 7:00 PM**: Reunión de Oración y Estudio de la Palabra.
  - **Domingo — 10:30 AM**: Servicio Familiar de Celebración y Adoración.
- Incluye recordatorio: *"¡Te esperamos con tu familia y amigos!"*.

### 7. Ubicación y Cómo Llegar (`Location`)
- **Dirección**: Cto. Hacienda del Real 1716, Colonia La Noria.
- Botón interactivo para copiar la dirección al portapapeles.
- Enlace directo a Google Maps para navegación GPS directa en dispositivos móviles.
- Tarjeta de referencia con indicaciones de llegada y facilidades.

### 8. Llamado a la Acción y Contacto Directo (`CTAInvite`)
- Mensaje final: *"¡Te esperamos! Tu vida puede cambiar hoy."*
- Botón directo de WhatsApp con mensaje pre-configurado (*"Hola, me gustaría saber más sobre los servicios de la Iglesia Gospel..."*).

### 9. Pie de Página (`Footer`)
- Logotipo, resumen de horarios, dirección física y aviso de derechos reservados.

---

## 3. Requisitos de Rendimiento y Accesibilidad (A11y)
- 100% Mobile Responsive (320px hasta 4K).
- Contraste de colores verificado según directrices WCAG AA/AAA.
- Metadatos OpenGraph (og:title, og:description, og:image) para compartir en WhatsApp y redes sociales.
- Marcado estructurado JSON-LD tipo `Church` / `PlaceOfWorship` para SEO local en Google.
