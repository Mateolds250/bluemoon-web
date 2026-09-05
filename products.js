/* ============================================================
   BLUEMOON — CARGA DEL CATÁLOGO DE PRODUCTOS
   ============================================================
   Los productos ya NO viven escritos aquí. Viven en:

       data/products.json

   Ese archivo es un archivo de DATOS puro (sin código), pensado
   para que el Panel de Administración (admin.html) lo edite por
   ti automáticamente cuando agregas o borras un producto — así
   ya no necesitas subir un .zip cada vez.

   ¿Prefieres editar a mano? Abre data/products.json en GitHub y
   copia/pega un bloque { ... } completo (con su coma final)
   dentro de "jewelry" o "perfume", cambiando los datos. Es un
   archivo JSON: cuidado con no dejar comas de más ni de menos.

   Este archivo (products.js) solo se encarga de leer ese JSON y
   dejarlo disponible como jewelryProducts / perfumeProducts /
   CONTACT para el resto del sitio. No necesitas tocarlo.
   ============================================================ */

let jewelryProducts = [];
let perfumeProducts = [];
let CONTACT = { whatsappNumber: "", email: "", city: "", tiktok: "" };

(function loadCatalog() {
  try {
    // Carga síncrona a propósito: así el resto de los scripts de la
    // página (que se cargan justo después) ya pueden usar los datos
    // sin esperas ni pantallas vacías.
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data/products.json", false);
    xhr.send(null);
    if (xhr.status === 200 || xhr.status === 0) {
      const data = JSON.parse(xhr.responseText);
      jewelryProducts = data.jewelry || [];
      perfumeProducts = data.perfume || [];
      CONTACT = data.contact || CONTACT;
    } else {
      console.error("No se pudo cargar data/products.json (status " + xhr.status + ")");
    }
  } catch (e) {
    console.error("Error leyendo data/products.json:", e);
  }
})();
