# Café Aroma — Landing Page

Una landing de marca para una cafetería ficticia, construida con **HTML + Tailwind CSS (CDN)** y una pequeña capa de **JavaScript vanilla** para interacciones (menú móvil, scroll suave y validación de formulario).

---

## 🚀 Vista general

* **Objetivo**: presentar la propuesta de valor de Café Aroma, mostrar servicios, galería y un formulario de contacto.
* **Público**: visitantes que buscan una cafetería artesanal con ambiente acogedor y opciones para trabajar o reunirse.
* **Enfoque**: performance, accesibilidad, claridad visual y coherencia de marca.

---

## 🧱 Stack y dependencias

* **HTML5** semántico
* **Tailwind CSS vía CDN** (sin build step)
* **Google Fonts**: *Playfair Display* y *Inter*
* **Font Awesome** para iconografía
* **JavaScript vanilla** (`scripts.js`) para interacciones UI

> *No requiere Node ni bundlers. Basta con abrir el `index.html` en un navegador moderno.*

---

## 📁 Estructura del proyecto

```text

├─ index.html        # Maquetación y secciones principales
├─ scripts.js        # Interacciones: header, menú móvil, scroll, validación
└─ /img              # Imágenes de héroe, galería y ambientación (no versionadas aquí)
```

---

## ✨ Funcionalidades clave

* **Header adherente** con sombreado al hacer scroll.
* **Menú móvil** tipo “sheet” (overlay + panel deslizante), cierre por:

  * Botón ✕,
  * Tap fuera
  * Tecla `Esc`,
  * *Swipe down* desde la zona superior.
* **Scroll suave** a anclas internas mediante atributos `data-tw-scroll="smooth"`.
* **Animaciones** sutiles (fade-in/*lift*) y textura de fondo personalizada.
* **Validación de formulario** (nombre, email, mensaje, teléfono opcional y aceptación de políticas) con regex básicas.

---

## 🎨 Sistema de diseño

### Tipografías

* **Títulos**: *Playfair Display*, serif
* **Cuerpo**: *Inter*, sans-serif

### Paletas de color

* **Coffee** (marca principal): `50–950`
* **Cream** (apoyo y fondos claros): `50–500`

### Espaciado y radios

* Esquinas redondeadas consistentes (`rounded-2xl` en tarjetas y contenedores).
* *Cards* con borde sutil + sombra elevada en *hover*.

### Componentes

* **Hero** con *overlay* en degradado + llamada a la acción doble.
* **Bloques de estadística** (Años, Clientes, Variedades) como *proof points*.
* **Grid de servicios** en 2–3 columnas responsive con íconos.
* **Galería** en *masonry* simple con una pieza destacada 2×2.
* **Contacto** con datos, redes sociales y formulario accesible.

---

## 🧩 Decisiones de diseño (racionales)

1. **CDN de Tailwind**: simplifica el *setup* y reduce fricción para una landing estática. Ideal para prototipo y despliegue rápido.
2. **Paleta café/crema**: alto contraste legible sobre fondos oscuros; mantiene calidez y coherencia temática.
3. **Tipografías serif + sans**: jerarquía elegante (Playfair) y lectura cómoda (Inter).
4. **Animaciones moderadas**: micro-interacciones que transmiten vida sin afectar performance.
5. **Panel móvil contenido**: no ocupa toda la pantalla para conservar contexto visual y dar sensación premium.
6. **Validaciones en cliente**: evitan envíos vacíos y educan al usuario con mensajes claros.
7. **Accesibilidad**: contraste suficiente, *focus states* de Tailwind, tamaños de toque adecuados y navegación por teclado (incluye `Esc`).

---

## 🔧 Cómo usar

1. **Clona o descarga** el proyecto.
2. Asegúrate de tener conexión a Internet (CDN de Tailwind, fonts e íconos).
3. Abre `index.html` en el navegador.

> Si prefieres *build* local con Tailwind, puedes migrar fácilmente a CLI y extraer los tokens definidos en `scripts.js` a un `tailwind.config.js` propio.

---

## 🧪 Pruebas manuales sugeridas

* **Header**: verifica sombra y transición al desplazar.
* **Menú móvil**: abre y cierra con botón, overlay, `Esc` y *swipe down*. Comprueba que el scroll del `html` se bloquee al abrir.
* **Scroll suave**: usa el menú para saltar a `#nosotros`, `#servicios`, etc.
* **Formulario**: intenta enviar con errores (email inválido, mensaje < 20 chars, sin política) y con datos válidos.
* **Responsive**: 360px, 720px, 1024px, 1280px. Observa grillas y espacios.

---

## 👤 Autoría

Contacto: *[ruizcardenas03@gmail.com](mailto:ruizcardenas03@gmail.com)*
Ubicación referencial: *Lima, Perú*
