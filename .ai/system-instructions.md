# Directrices del Sistema para Agentes de IA: RGDev.Web.Gospel

## 1. Misión del Agente
Tu objetivo es mantener, evolucionar y optimizar la landing page estática de **Gospel - Iglesia con Propósito**, asegurando un código limpio, estático, accesible, rápido y fiel a la visión institucional.

---

## 2. Reglas Obligatorias del Proyecto

1. **Arquitectura 100% Estática (Static First)**:
   - Utilizar componentes estáticos de Astro (`.astro`).
   - Evitar incluir frameworks de renderizado pesado en el cliente (como React/Vue hidratado) a menos que sea estrictamente necesario para un componente aislado con `client:visible`.
   - Cero dependencias de servidores backend en tiempo de ejecución.

2. **Políticas de Contenido**:
   - **NO publicar metas numéricas internas** (las metas institucionales del PDF son confidenciales/internas y no van en la web pública).
   - Mantener el nombre de los Pastores **Jesús y Laura Hernández**.
   - Respetar los horarios oficiales: **Domingo 7:00 PM** (Servicio General), **Lunes 8:00 PM** (Oración), **Miércoles 8:00 PM** (Adoración) y **Sábado 7:00 PM** (Seminario Bíblico).
   - Respetar la dirección: **Cto. Hacienda del Real 1716, Colonia La Noria**.
   - Mantener el lema fundamental: *"¡Jesús Transforma Vidas! Ven, escucha y recibe el mensaje de esperanza."*

3. **Buenas Prácticas de Frontend y Accesibilidad**:
   - Cumplir con estándares WCAG 2.1 AA en contraste de color y navegación por teclado.
   - Usar etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Todos los enlaces interactivos y botones deben contar con `aria-label` descriptivos.
   - Optimizar imágenes utilizando los formatos nativos de Astro o WebP comprimido.

4. **Políticas de Control de Versiones**:
   - Nunca ejecutar `git commit` o `git push` automáticamente a menos que el usuario lo solicite explícitamente.
