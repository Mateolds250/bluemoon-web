/* ============================================================
   BLUEMOON — LÓGICA PRINCIPAL DEL SITIO
   Menú móvil, selector de idioma ES/EN y enlaces de WhatsApp.
   Los datos de productos viven en js/products.js
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initLanguage();
  initWhatsappFloat();
  markActiveNavLink();
});

/* ---------- Menú móvil ---------- */
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => nav.classList.remove("open"))
  );
}

/* ---------- Selector de idioma ES/EN ----------
   Guarda la preferencia en localStorage cuando el navegador lo
   permite; si no (por ejemplo en una vista previa restringida),
   simplemente no persiste entre páginas, sin romper el sitio. */
function getSavedLang() {
  try { return localStorage.getItem("bluemoon-lang"); }
  catch (e) { return null; }
}
function saveLang(lang) {
  try { localStorage.setItem("bluemoon-lang", lang); }
  catch (e) { /* almacenamiento no disponible: se ignora */ }
}

function applyLang(lang) {
  document.body.classList.remove("lang-es", "lang-en");
  document.body.classList.add("lang-" + lang);
  document.documentElement.setAttribute("lang", lang);
  const btn = document.querySelector(".lang-toggle");
  if (btn) btn.textContent = lang === "es" ? "EN" : "ES";
  saveLang(lang);
  // Avisa a otros módulos (carrito, grillas de productos) que el idioma
  // ya cambió, para que puedan volver a dibujar su contenido.
  document.dispatchEvent(new CustomEvent("bluemoon:langchange", { detail: { lang: lang } }));
}

function initLanguage() {
  const saved = getSavedLang();
  applyLang(saved === "en" ? "en" : "es");
  const btn = document.querySelector(".lang-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = document.body.classList.contains("lang-en") ? "en" : "es";
      applyLang(current === "es" ? "en" : "es");
    });
  }
}

/* ---------- Botón flotante de WhatsApp ---------- */
function buildWhatsappLink(message) {
  const number = (typeof CONTACT !== "undefined" && CONTACT.whatsappNumber) || "";
  const text = encodeURIComponent(message || "Hola BlueMoon, quiero más información.");
  return `https://wa.me/${number}?text=${text}`;
}

function initWhatsappFloat() {
  const el = document.querySelector(".whatsapp-float");
  if (!el) return;
  const lang = getSavedLang() === "en" ? "en" : "es";
  const msg = lang === "en"
    ? "Hello BlueMoon, I'd like more information."
    : "Hola BlueMoon, quiero más información.";
  el.href = buildWhatsappLink(msg);
}

/* ---------- Resaltar enlace de navegación activo ---------- */
function markActiveNavLink() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === path) link.classList.add("active");
  });
}

/* ============================================================
   Renderizado de tarjetas de producto
   Usado por joyas.html y perfumes.html
   ============================================================ */
function renderProductCard(item, lang) {
  const name = lang === "en" ? item.nameEn : item.nameEs;
  const desc = lang === "en" ? item.descEn : item.descEs;
  const brandRow = item.brand ? `<div class="product-brand">${item.brand}</div>` : "";
  const badge = item.badge ? `<span class="product-badge">${item.badge}</span>` : "";
  const addLabel = lang === "en" ? "Add to cart" : "Agregar al carrito";
  const directLabel = lang === "en" ? "Or order directly via WhatsApp" : "O pedir directo por WhatsApp";
  const waMessage = lang === "en"
    ? `Hello BlueMoon, I'm interested in: ${item.nameEn}`
    : `Hola BlueMoon, estoy interesado/a en: ${item.nameEs}`;

  return `
    <article class="product-card" data-category="${item.category}">
      <div class="product-media">
        ${badge}
        <img src="${item.image}" alt="${name}" loading="lazy">
      </div>
      <div class="product-body">
        ${brandRow}
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="product-footer">
          <span class="product-price">${item.price}</span>
          <button type="button" class="btn btn-gold btn-small" onclick="addToCart('${item.id}')">${addLabel}</button>
        </div>
        <a class="product-direct-link" href="${buildWhatsappLink(waMessage)}" target="_blank" rel="noopener">${directLabel}</a>
      </div>
    </article>
  `;
}

function renderGrid(gridSelector, items) {
  const grid = document.querySelector(gridSelector);
  if (!grid) return;
  const lang = document.body.classList.contains("lang-en") ? "en" : "es";
  grid.innerHTML = items.map(item => renderProductCard(item, lang)).join("");
}

/* Vuelve a dibujar la grilla activa cuando cambia el idioma,
   para que los textos de los botones también se traduzcan. */
function reRenderOnLangChange(gridSelector, getItems) {
  document.addEventListener("bluemoon:langchange", () => renderGrid(gridSelector, getItems()));
}

/* ---------- Filtro por categoría (joyas / perfumes) ---------- */
function initFilters(getItems, gridSelector) {
  const buttons = document.querySelectorAll(".filter-btn");
  if (!buttons.length) return;
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.filter;
      const items = getItems();
      const filtered = category === "all" ? items : items.filter(i => i.category === category);
      renderGrid(gridSelector, filtered);
    });
  });
}

/* ============================================================
   Datos estructurados (SEO) — le dicen a Google qué es cada
   producto (nombre, foto, marca, precio si es fijo) para que
   pueda mostrarlo mejor en los resultados de búsqueda.
   ============================================================ */
function parsePriceCOP(priceStr) {
  if (!priceStr) return null;
  const match = priceStr.match(/\$([\d.]+)/);
  if (!match) return null;
  const digits = match[1].replace(/\./g, "");
  const num = parseInt(digits, 10);
  return isNaN(num) || num <= 0 ? null : num;
}

function injectProductStructuredData(items, pageUrl) {
  try {
    const products = items.map(item => {
      const obj = {
        "@type": "Product",
        "name": item.nameEs,
        "description": item.descEs,
        "image": "https://bluemoonjoyas.com/" + item.image,
        "sku": item.id,
        "url": pageUrl
      };
      if (item.brand) obj.brand = { "@type": "Brand", "name": item.brand };
      const priceNum = parsePriceCOP(item.price);
      if (priceNum) {
        obj.offers = {
          "@type": "Offer",
          "priceCurrency": "COP",
          "price": priceNum,
          "availability": "https://schema.org/InStock",
          "url": pageUrl
        };
      }
      return obj;
    });
    const data = { "@context": "https://schema.org", "@graph": products };
    let tag = document.getElementById("product-jsonld");
    if (!tag) {
      tag = document.createElement("script");
      tag.type = "application/ld+json";
      tag.id = "product-jsonld";
      document.head.appendChild(tag);
    }
    tag.textContent = JSON.stringify(data);
  } catch (e) {
    console.error("No se pudo generar el JSON-LD de productos:", e);
  }
}
