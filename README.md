# BlueMoon — Sitio web

Sitio web para BlueMoon (joyas en oro, bisutería, joyas sobre pedido y perfumes originales de lujo), listo para publicarse gratis en **GitHub Pages** con un dominio propio comprado en **Namecheap**.

Es un sitio estático (HTML/CSS/JS puro, sin backend ni base de datos), bilingüe (español/inglés), con carrito de compras y botones de pedido por WhatsApp.

## Novedades de esta versión

- **Panel de administración (`admin.html`)**: ahora puedes agregar, editar o eliminar productos —con foto incluida— desde un formulario, sin tocar código ni subir archivos a mano. Ver la sección **"0. Panel de administración"** más abajo.
- **Catálogo en `data/products.json`**: los productos ya no viven escritos dentro de `js/products.js`; ahora viven en un archivo de datos (`data/products.json`) que tanto tú (a mano) como el panel de administración pueden editar.
- **Carrito de compras**: cada producto tiene un botón "Agregar al carrito". El ícono de carrito en el menú muestra cuántos artículos hay. Al finalizar, arma un solo mensaje de WhatsApp con todos los productos, cantidades y precios.
- **WhatsApp real conectado**: los pedidos (carrito y botones directos) ya usan el número +57 310 508 6397.
- **TikTok enlazado**: el ícono de TikTok del pie de página y el enlace "Síguenos en TikTok" ya apuntan a `tiktok.com/@bluemoon0016`.

Si ya tenías el sitio subido a GitHub, en la sección **"Cómo actualizar el sitio en GitHub"** (más abajo) te digo exactamente qué archivos reemplazar.

## Estructura de archivos

```
index.html          Página de inicio
joyas.html           Catálogo de joyas (oro, bisutería, sobre pedido)
perfumes.html        Catálogo de perfumes (para ella, para él, unisex/nicho)
nosotros.html        Historia y valores de la marca
contacto.html        Formulario de contacto + WhatsApp
admin.html           ← Panel de administración: agrega/edita/elimina productos con fotos
data/products.json   ← El catálogo (productos, precios, fotos, WhatsApp, TikTok) como datos puros
css/styles.css       Todos los estilos (colores, tipografía, diseño, carrito)
js/products.js       Carga data/products.json — normalmente no necesitas tocarlo
js/footer.js         Pie de página compartido por todas las páginas
js/main.js           Menú, selector de idioma, botones de WhatsApp
js/cart.js           Lógica del carrito de compras
images/              Logo, favicon, íconos genéricos y fotos reales de productos
CNAME                Tu dominio propio (edítalo cuando lo compres)
```

## 0. Panel de administración — la forma más fácil de agregar productos

`admin.html` es una página privada (no aparece en el menú del sitio) donde llenas un formulario —foto, nombre, precio, descripción— y con un clic se publica directamente en tu catálogo. Es la forma recomendada de agregar contenido de aquí en adelante.

**Paso 1 — Crea tu token de acceso de GitHub (una sola vez):**

1. Entra a [github.com/settings/personal-access-tokens/new](https://github.com/settings/personal-access-tokens/new) con tu cuenta de GitHub.
2. **Token name:** escribe algo como "BlueMoon Admin".
3. **Expiration:** elige la opción más larga disponible.
4. **Repository access:** "Only select repositories" → elige tu repositorio (`bluemoon-web`).
5. **Permissions → Repository permissions → Contents** → cámbialo a **Read and write**.
6. Baja y haz clic en **Generate token**. Copia el token (empieza con `github_pat_...`) — GitHub solo lo muestra una vez.

**Paso 2 — Usa el panel:**

1. Abre `tudominio.com/admin.html` (o `tu-usuario.github.io/bluemoon-web/admin.html` mientras no tengas dominio propio).
2. Pega tu token, confirma el repositorio (ya viene prellenado) y haz clic en **"Conectar y cargar catálogo"**.
3. Llena el formulario: elige Joya o Perfume, sube la foto, escribe nombre, descripción y precio, y haz clic en **"Publicar producto"**.
4. Espera 1-2 minutos y refresca tu sitio (Ctrl+Shift+R) — ahí aparecerá el producto nuevo, ya con su foto.

El token se guarda solo en el navegador donde lo pegaste (nunca se sube a ningún lado). Si lo pierdes o quieres invalidarlo, bórralo desde la misma página de GitHub donde lo creaste — no afecta al sitio, solo dejarías de poder publicar cambios hasta crear uno nuevo. Como es una página sin contraseña de por sí, evita compartir el enlace `admin.html` públicamente; sin el token nadie puede publicar cambios de todas formas, pero es buena práctica mantenerlo solo para ti.

## 1. Cómo editar el contenido

**Para agregar/quitar/editar productos (joyas o perfumes):** usa `admin.html` (ver sección 0, arriba) — es lo más simple. Si prefieres editar a mano, abre `data/products.json` en GitHub y copia/pega un bloque `{ ... }` completo (con su coma final) dentro de `"jewelry"` o `"perfume"`, cambiando los datos. Es un archivo JSON, así que cuidado con no dejar comas de más ni de menos.

**Para cambiar tu número de WhatsApp, correo o TikTok:** en `data/products.json`, edita el bloque `"contact"` al final del archivo:

```json
"contact": {
  "whatsappNumber": "573000000000",
  "email": "contacto@bluemoon.com",
  "city": "Medellín, Colombia",
  "tiktok": "https://www.tiktok.com/@tuusuario"
}
```

**Para cambiar textos generales** (títulos, historia, etc.): edita directamente el archivo `.html` de la página correspondiente. Cada texto tiene dos versiones:

```html
<span class="lang-es">Texto en español</span>
<span class="lang-en">Text in English</span>
```

Edita ambas versiones para mantener el sitio bilingüe.

**Para agregar tus propias fotos sin el panel de administración:** súbelas a la carpeta `images/` (formato .jpg o .png, ideal 800x600px o mayor) y cambia la ruta `"image": "images/..."` del producto correspondiente en `data/products.json`.

**Para cambiar el logo:** reemplaza `images/logo-bluemoon.png` por tu logo definitivo, o pide que te generen uno nuevo.

## 2. Publicar el sitio en GitHub Pages (gratis)

1. Crea una cuenta en [github.com](https://github.com) si no tienes una.
2. Crea un repositorio nuevo, por ejemplo `bluemoon-web` (puede ser público o privado; GitHub Pages funciona con ambos en cuentas Pro, pero si tu cuenta es gratuita el repositorio debe ser **público**).
3. Sube todos los archivos de esta carpeta a ese repositorio (arrastrándolos desde la web de GitHub, o con Git desde tu computador).
4. Entra a **Settings → Pages** del repositorio.
5. En "Build and deployment", elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`. Guarda.
6. En unos minutos tu sitio estará disponible en `https://tu-usuario.github.io/bluemoon-web/`.

## 3. Comprar el dominio en Namecheap

1. Entra a [namecheap.com](https://www.namecheap.com) y busca el nombre que quieras (ej. `bluemoon.com`).

   > **Nota importante:** "bluemoon.com" es un nombre corto y muy común en inglés, así que es muy probable que ya esté registrado. Antes de diseñar toda tu marca alrededor de ese dominio exacto, verifica su disponibilidad en Namecheap. Si está ocupado, algunas alternativas a considerar: `bluemoonjoyas.com`, `bluemoonoro.com`, `bluemoonluxury.com`, `shopbluemoon.com`, `bluemoonstore.co`, o `bluemoon.com.co` (dominio colombiano, suele tener más disponibilidad).

2. Compra el dominio (pago anual).

## 4. Conectar el dominio de Namecheap con GitHub Pages

**En Namecheap** (Domain List → Manage → Advanced DNS), agrega estos registros:

| Tipo  | Host | Valor                  |
|-------|------|-------------------------|
| A     | @    | 185.199.108.153         |
| A     | @    | 185.199.109.153         |
| A     | @    | 185.199.110.153         |
| A     | @    | 185.199.111.153         |
| CNAME | www  | tu-usuario.github.io    |

**En GitHub** (Settings → Pages → Custom domain): escribe tu dominio (ej. `bluemoon.com`) y guarda. GitHub creará automáticamente el archivo `CNAME` en tu repositorio — reemplaza el contenido del archivo `CNAME` de esta carpeta por tu dominio real antes de subirlo, para que quede sincronizado:

```
bluemoon.com
```

3. Activa "Enforce HTTPS" en la misma pantalla de GitHub Pages (puede tardar unos minutos en aparecer disponible tras conectar el dominio).

La propagación de DNS puede tardar entre unos minutos y 24-48 horas.

## 5. Cómo funcionan los pedidos (sin carrito de compras)

Este sitio no tiene pasarela de pago ni carrito propio, porque GitHub Pages es hosting estático. En su lugar, cada botón "Pedir por WhatsApp" abre un chat de WhatsApp con el nombre del producto ya escrito, para que confirmes el pedido y el pago directamente con el cliente (transferencia, efectivo, Nequi, Daviplata, etc.). El formulario de la página de Contacto funciona igual: arma el mensaje y lo abre en WhatsApp.

Si en el futuro quieres cobrar con tarjeta directamente en la página, se puede integrar un botón de pago (por ejemplo de PayU, Wompi o Stripe) sin cambiar de hosting — avísame cuando quieras dar ese paso.

## 6. Cómo actualizar el sitio en GitHub (si ya lo tenías publicado)

Esta versión agrega el panel de administración y mueve el catálogo a un archivo de datos nuevo. Sube estos archivos a tu repositorio (los nombres repetidos se sobrescriben solos):

1. **En la raíz del repositorio** (donde están tus `.html`): entra a `<> Code`, dale **Add file → Upload files** y arrastra `admin.html` (nuevo). Confirma con **Commit changes**.
2. **Crea la carpeta `data`**: en "Add file → Upload files", arrastra el archivo `products.json` que está dentro de la carpeta `data` de este zip — al arrastrarlo con su ruta completa (`data/products.json`) GitHub crea la carpeta sola; si tu navegador no conserva la ruta, sube `products.json` a la raíz y luego edítalo (ícono de lápiz) cambiando el nombre a `data/products.json` para moverlo a su carpeta. Commit.
3. **Dentro de la carpeta `js`**: haz clic en la carpeta `js` para entrar en ella, luego **Add file → Upload files** y arrastra `products.js` (sobrescribe el anterior). Commit.

**Importante:** con esta actualización, el catálogo ya NO se edita en `js/products.js` sino en `data/products.json` (o, más fácil, desde `admin.html`). Los demás archivos (`index.html`, `joyas.html`, `perfumes.html`, `nosotros.html`, `contacto.html`, `css/styles.css`, `js/main.js`, `js/cart.js`, `js/footer.js`) no cambiaron en esta versión, así que no es necesario volver a subirlos.

Entrar primero a la carpeta y subir desde ahí evita el problema de que los archivos queden sueltos en la raíz.

Espera 1-2 minutos (revisa la pestaña **Actions**) y refresca el sitio con Ctrl+Shift+R.

## 7. Ideas para seguir creciendo el sitio (marketing)

- Conecta Google Analytics o Meta Pixel para medir visitas y campañas de anuncios.
- Agrega una sección de testimonios de clientes en `nosotros.html`.
- Publica fotos reales de tus piezas en Instagram y enlázalas desde el footer (ya tiene el ícono listo, solo falta el enlace).
- Considera fotografía profesional de producto: en joyería y perfumería de lujo, la imagen es una gran parte de la decisión de compra.
