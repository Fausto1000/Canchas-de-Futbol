### **Prompt para el Agente de IA: Mejoras para el Proyecto "Canchas de Futbol"**

Hola. Por favor, realiza las siguientes mejoras en mi proyecto de pagina web sobre canchas de futbol.

**Objetivo:** Hacer el sitio web funcional, robusto y facil de mantener, corrigiendo errores criticos y aplicando mejores practicas.

---

**Tarea 1: Corregir las rutas de las imagenes (Critico)**

*   **Problema:** Actualmente, el archivo `index.html` usa rutas absolutas de mi disco local para las imagenes (ej: `C:\Users\faust\...`), lo que impide que se muestren en cualquier otro lugar.
*   **Accion:**
    1.  Yo, el usuario, creare una carpeta llamada `imagenes` en la raiz del proyecto y movere todos los archivos de imagen (`.WEBP`, `.jpg`, `.jfif`) a esa carpeta.
    2.  **Tu tarea es modificar `index.html` y reemplazar todas las rutas de las imagenes.** Debes cambiar las rutas absolutas por rutas relativas que apunten a la nueva carpeta `imagenes`.

*   **Ejemplo de cambio:**
    *   **Busca esto:** `src="C:\Users\faust\OneDrive\Desktop\Imagenes Canchas para la pagina web\CanchaBoca.WEBP"`
    *   **Y reemplazalo por esto:** `src="imagenes/CanchaBoca.WEBP"`
    *   Aplica este cambio a **todas** las etiquetas `<img>` en el archivo `index.html`.

---

**Tarea 2: Anadir el boton para cambiar de tema (Bug)**

*   **Problema:** El archivo `script.js` tiene la logica para un boton de cambio de tema (claro/oscuro) con `id="toggle-theme"`, pero este boton no existe en `index.html`, lo que genera un error.
*   **Accion:** Agrega el boton en `index.html`. El mejor lugar es dentro de la etiqueta `<nav>`, al final.

*   **Codigo a insertar:**
    ```html
    <button id="toggle-theme">🌙 Modo Oscuro</button>
    ```
*   **Ubicacion:** Insertalo dentro de la etiqueta `<header>`, justo antes del cierre de la etiqueta `</nav>`.

---

**Tarea 3: Refactorizar los estilos CSS (Mejora)**

*   **Problema:** El archivo `styles.css` usa el selector `:nth-child()` para aplicar estilos especificos a cada equipo. Esto es fragil, porque si cambio el orden de las tarjetas en el HTML, los estilos se aplicaran al equipo equivocado.
*   **Accion:** Vamos a usar clases especificas para cada equipo.

    1.  **En `index.html`:** Agrega una clase al `div` de cada `cancha-card` para identificar al equipo.
        *   Para Boca: `<div class="cancha-card boca">`
        *   Para River: `<div class="cancha-card river">`
        *   Para Talleres: `<div class="cancha-card talleres">`
        *   Para Independiente: `<div class="cancha-card independiente">`
        *   Para Velez: `<div class="cancha-card velez">`
        *   Para Racing: `<div class="cancha-card racing">`

    2.  **En `styles.css`:** Reemplaza todos los selectores `:nth-child()` por las nuevas clases.
        *   Cambia `.cancha-card:nth-child(1)` por `.cancha-card.boca`
        *   Cambia `.cancha-card:nth-child(2)` por `.cancha-card.river`
        *   Y asi sucesivamente para todos los equipos. Aplica esto a los selectores de `h3`, `p`, `.team-logo` y `.more-info`.

---

**Tarea 4: Hacer funcional el formulario de contacto (Opcional pero recomendado)**

*   **Problema:** El formulario de contacto no envia la informacion a ningun lado.
*   **Accion:** Modifica la etiqueta `<form>` en `index.html` para que use el servicio gratuito **Formspree**.

*   **Reemplaza esto:**
    ```html
    <form id="contact-form">
    ```
*   **Por esto:**
    ```html
    <form action="https://formspree.io/f/PON_AQUI_TU_ID_DE_FORMSPREE" method="POST">
    ```
    *(Nota para mi: luego tendre que crear una cuenta en Formspree y reemplazar el ID).*

---

Por favor, aplica todos estos cambios en los archivos correspondientes (`index.html` y `styles.css`). ¡Gracias!