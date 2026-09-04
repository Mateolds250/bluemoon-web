# BlueMoon — Sitio web

Sitio web para BlueMoon (joyas en oro, bisutería, joyas sobre pedido y perfumes originales de lujo), listo para publicarse gratis en **GitHub Pages** con un dominio propio comprado en **Namecheap**.

Es un sitio estático (HTML/CSS/JS puro, sin backend ni base de datos), bilingüe (español/inglés), con carrito de compras y botones de pedido por WhatsApp.

## Novedades de esta versión

- **Carrito de compras**: cada producto tiene un botón "Agregar al carrito". El ícono de carrito en el menú muestra cuántos artículos hay. Al finalizar, arma un solo mensaje de WhatsApp con todos los productos, cantidades y precios.
- **WhatsApp real conectado**: los pedidos (carrito y botones directos) ya usan el número +57 310 508 6397.
- **TikTok enlazado**: el ícono de TikTok del pie de página y el enlace "Síguenos en TikTok" ya apuntan a `tiktok.com/@bluemoon0016`.

Si ya tenías el sitio subido a GitHub, en la sección **"Cómo actualizar el sitio en GitHub"** (más abajo) te digo exactamente qué archivos reemplazar.

## Estructura de archivos

```
index.html        Página de inicio
joyas.html         Catálogo de joyas (oro, bisutería, sobre pedido)
perfumes.html      Catálogo de perfumes (para ella, para él, unisex/nicho)
nosotros.html      Historia y valores de la marca
contacto.html      Formulario de contacto + WhatsApp
css/styles.css     Todos los estilos (colores, tipografía, diseño, carrito)
js/products.js     ← EDITA AQUÍ tu catálogo de productos, WhatsApp, correo y TikTok
js/footer.js       Pie de página compartido por todas las páginas
js/main.js         Menú, selector de idioma, botones de WhatsApp
js/cart.js         Lógica del carrito de compras
images/            Logo, favicon e íconos de productos (SVG editables)
CNAME              Tu dominio propio (edítalo cuando lo compres)
```

## 1. Cómo editar el contenido

**Para agregar/quitar productos (joyas o perfumes):** abre `js/products.js`. Ahí encontrarás dos listas (`jewelryProducts` y `perfumeProducts`) con instrucciones dentro del mismo archivo. Cada producto es un bloque con nombre, descripción, precio e imagen en español e inglés. No necesitas tocar el HTML.

**Para cambiar tu número de WhatsApp y correo:** en el mismo archivo `js/products.js`, al final, edita el objeto `CONTACT`:

```js
const CONTACT = {
  whatsappNumber: "573000000000", // tu número real, con indicativo de país, sin espacios
  email: "contacto@bluemoon.com",
  city: "Medellín, Colombia"
};
```

**Para cambiar textos generales** (títulos, historia, etc.): edita directamente el archivo `.html` de la página correspondiente. Cada texto tiene dos versiones:

```html
<span class="lang-es">Texto en español</span>
<span class="lang-en">Text in English</span>
```

Edita ambas versiones para mantener el sitio bilingüe.

**Para agregar tus propias fotos:** cuando tengas fotos reales de tus joyas o perfumes, súbelas a la carpeta `images/` (formato .jpg o .png, ideal 800x600px o mayor) y cambia la ruta `image: "images/..."` de cada producto en `js/products.js`.

**Para cambiar el logo:** reemplaza `images/logo-bluemoon.svg` por tu logo definitivo, o pide que te generen uno nuevo.

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

Si ya subiste una versión anterior del sitio, reemplaza estos archivos en tu repositorio (los nombres son iguales, así que al subirlos se sobrescriben solos):

1. **En la raíz del repositorio** (donde están tus `.html`): entra a `<> Code`, dale **Add file → Upload files** y arrastra los 5 archivos: `index.html`, `joyas.html`, `perfumes.html`, `nosotros.html`, `contacto.html`. Confirma con **Commit changes**.
2. **Dentro de la carpeta `css`**: haz clic en la carpeta `css` para entrar en ella, luego **Add file → Upload files** y arrastra `styles.css`. Commit.
3. **Dentro de la carpeta `js`**: haz clic en la carpeta `js`, luego **Add file → Upload files** y arrastra estos 4 archivos: `main.js`, `footer.js`, `products.js` y `cart.js` (este último es nuevo). Commit.

Entrar primero a la carpeta y subir desde ahí evita el problema de que los archivos queden sueltos en la raíz.

Espera 1-2 minutos (revisa la pestaña **Actions**) y refresca el sitio con Ctrl+Shift+R.

## 7. Ideas para seguir creciendo el sitio (marketing)

- Conecta Google Analytics o Meta Pixel para medir visitas y campañas de anuncios.
- Agrega una sección de testimonios de clientes en `nosotros.html`.
- Publica fotos reales de tus piezas en Instagram y enlázalas desde el footer (ya tiene el ícono listo, solo falta el enlace).
- Considera fotografía profesional de producto: en joyería y perfumería de lujo, la imagen es una gran parte de la decisión de compra.
