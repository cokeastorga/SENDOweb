# Guía SEO Post-Deploy para enfermeriasendo.cl

## 1. Google Search Console (OBLIGATORIO)

### Pasos:
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Haz clic en **"Agregar propiedad"**
3. Selecciona **"Prefijo de URL"** e ingresa: `https://www.enfermeriasendo.cl`
4. Para verificar, elige **"Etiqueta HTML"** y copia la meta tag que te dan
5. Agrégala en `src/routes/+page.svelte` dentro de `<svelte:head>`, por ejemplo:
   ```html
   <meta name="google-site-verification" content="TU_CODIGO_AQUI" />
   ```
6. Despliega a producción y vuelve a Google Search Console para verificar
7. Una vez verificado, ve a **Sitemaps** y envía: `https://www.enfermeriasendo.cl/sitemap.xml`

### Después de registrar:
- Revisa la pestaña **"Cobertura"** para errores de indexación
- Usa **"Inspección de URL"** para solicitar indexación de páginas específicas
- Monitorea **"Rendimiento"** para ver qué búsquedas traen tráfico

---

## 2. Bing Webmaster Tools

### Pasos:
1. Ve a [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Inicia sesión con tu cuenta Microsoft
3. Puedes **importar desde Google Search Console** (opción más rápida)
4. O agregar el sitio manualmente con verificación por meta tag:
   ```html
   <meta name="msvalidate.01" content="TU_CODIGO_BING" />
   ```
5. Envía el sitemap: `https://www.enfermeriasendo.cl/sitemap.xml`

---

## 3. Google Business Profile (MUY IMPORTANTE para SEO local)

### Pasos:
1. Ve a [Google Business Profile](https://business.google.com/)
2. Busca "SENDO" o crea un nuevo perfil
3. Completa TODA la información:
   - **Nombre:** SENDO - Servicios de Enfermería a Domicilio
   - **Categoría principal:** Servicio de enfermería a domicilio
   - **Categorías secundarias:** Cuidado de adultos mayores, Servicio de salud a domicilio
   - **Dirección:** Pasaje Teno #262, Quilicura, Región Metropolitana, Chile
   - **Teléfono:** +56 9 9845 1117
   - **Sitio web:** https://www.enfermeriasendo.cl
   - **Horario:** 24 horas, 7 días a la semana
   - **Descripción:** "Servicios de enfermería, cuidadoras y auxiliares a domicilio en todo Santiago. Más de 18 años de experiencia en el cuidado del adulto mayor. Turnos de 12 y 24 horas, consultas médicas telemáticas y acompañamiento profesional."
   - **Área de servicio:** Agregar todas las comunas de Santiago que cubren
4. Sube fotos del equipo, logo, y si es posible del servicio en acción
5. Solicita reseñas a clientes satisfechos (muy importante para ranking local)

---

## 4. Google Analytics (Opcional pero recomendado)

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una cuenta y propiedad para enfermeriasendo.cl
3. Obtén el ID de medición (G-XXXXXXX)
4. Agrégalo en `src/app.html` dentro del `<head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXX');
   </script>
   ```

---

## 5. Herramientas gratuitas para monitorear SEO

- **Google Search Console** — Datos reales de Google sobre tu sitio
- **Google PageSpeed Insights** — Velocidad y Core Web Vitals
- **Schema Markup Validator** — https://validator.schema.org/
- **Rich Results Test** — https://search.google.com/test/rich-results
- **Ahrefs Free Webmaster Tools** — Análisis de backlinks
- **Ubersuggest** — Ideas de keywords gratuitas

---

## 6. Estrategia de contenido (Blog)

Para mejorar el posicionamiento orgánico a mediano plazo:

1. **Publica 1-2 artículos al mes** en el blog
2. **Temas sugeridos:**
   - "Cómo prevenir caídas en adultos mayores en casa"
   - "Guía de alimentación para el adulto mayor"
   - "Alzheimer: cómo cuidar a un familiar con demencia"
   - "Diferencias entre cuidadora, auxiliar y enfermera"
   - "Derechos del adulto mayor en Chile"
   - "Cómo preparar el hogar para un paciente postoperatorio"
   - "Ejercicios suaves para adultos mayores en casa"
3. **Cada artículo debe:**
   - Tener un título que incluya la keyword principal
   - Tener al menos 800 palabras
   - Incluir un CTA (llamada a la acción) hacia el contacto
   - Estar en el sitemap

---

## Checklist rápido

- [ ] Registrar en Google Search Console
- [ ] Enviar sitemap en Google Search Console
- [ ] Registrar en Bing Webmaster Tools
- [ ] Crear/reactivar Google Business Profile
- [ ] Agregar fotos al Google Business Profile
- [ ] Solicitar reseñas a clientes
- [ ] (Opcional) Configurar Google Analytics
- [ ] (Opcional) Crear Instagram de SENDO
