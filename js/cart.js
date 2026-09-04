/* ============================================================
   BLUEMOON — CARRITO DE COMPRAS
   Carrito 100% en el navegador del cliente (sin servidor propio).
   El cliente agrega productos, y al finalizar el pedido se arma
   un solo mensaje de WhatsApp con todo el detalle para que tú
   confirmes disponibilidad, total y forma de pago.
   ============================================================ */

const CART_KEY = "bluemoon-cart";

function getAllProducts() {
  return [].concat(
    typeof jewelryProducts !== "undefined" ? jewelryProducts : [],
    typeof perfumeProducts !== "undefined" ? perfumeProducts : []
  );
}

function readCartFromStorage() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function writeCartToStorage(cart) {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
  catch (e) { /* almacenamiento no disponible: el carrito no persistirá al cambiar de página */ }
}

let cartState = readCartFromStorage();

function persistCartState() {
  writeCartToStorage(cartState);
  updateCartBadge();
  renderCartPanel();
}

function addToCart(id) {
  const existing = cartState.find(i => i.id === id);
  if (existing) existing.qty += 1;
  else cartState.push({ id: id, qty: 1 });
  persistCartState();
  openCart();
}

function removeFromCart(id) {
  cartState = cartState.filter(i => i.id !== id);
  persistCartState();
}

function changeCartQty(id, delta) {
  const item = cartState.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else persistCartState();
}

function cartCount() {
  return cartState.reduce((sum, i) => sum + i.qty, 0);
}

function cartLang() {
  return document.body.classList.contains("lang-en") ? "en" : "es";
}

function cartItemsDetailed() {
  const all = getAllProducts();
  return cartState
    .map(entry => {
      const product = all.find(p => p.id === entry.id);
      return product ? Object.assign({}, product, { qty: entry.qty }) : null;
    })
    .filter(Boolean);
}

function updateCartBadge() {
  const count = cartCount();
  document.querySelectorAll(".cart-badge").forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

function buildCartWhatsAppMessage() {
  const lang = cartLang();
  const items = cartItemsDetailed();
  if (!items.length) return "";
  const header = lang === "en" ? "Hello BlueMoon, I'd like to order:" : "Hola BlueMoon, quiero pedir:";
  const lines = items.map(item => {
    const name = lang === "en" ? item.nameEn : item.nameEs;
    return "- " + name + " x" + item.qty + " (" + item.price + ")";
  });
  const footer = lang === "en"
    ? "Please confirm availability and total. Thank you!"
    : "¿Me confirman disponibilidad y total? ¡Gracias!";
  return [header].concat(lines, [footer]).join("\n");
}

function renderCartPanel() {
  const body = document.getElementById("cart-body");
  const footer = document.getElementById("cart-footer");
  if (!body) return;
  const lang = cartLang();
  const items = cartItemsDetailed();

  if (!items.length) {
    body.innerHTML =
      '<p class="cart-empty">' +
      '<span class="lang-es">Tu carrito está vacío.</span>' +
      '<span class="lang-en">Your cart is empty.</span>' +
      "</p>";
    if (footer) footer.style.display = "none";
    return;
  }

  body.innerHTML = items.map(item => {
    const name = lang === "en" ? item.nameEn : item.nameEs;
    return (
      '<div class="cart-item">' +
        '<img src="' + item.image + '" alt="' + name + '">' +
        '<div class="cart-item-info">' +
          "<h4>" + name + "</h4>" +
          '<span class="cart-item-price">' + item.price + "</span>" +
          '<div class="cart-qty">' +
            '<button type="button" onclick="changeCartQty(\'' + item.id + '\', -1)" aria-label="menos">-</button>' +
            "<span>" + item.qty + "</span>" +
            '<button type="button" onclick="changeCartQty(\'' + item.id + '\', 1)" aria-label="más">+</button>' +
          "</div>" +
        "</div>" +
        '<button type="button" class="cart-remove" onclick="removeFromCart(\'' + item.id + '\')" aria-label="eliminar">&times;</button>' +
      "</div>"
    );
  }).join("");

  if (footer) footer.style.display = "block";
}

function openCart() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (drawer) drawer.classList.add("open");
  if (overlay) overlay.classList.add("open");
}

function closeCart() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (drawer) drawer.classList.remove("open");
  if (overlay) overlay.classList.remove("open");
}

function checkoutCart() {
  const message = buildCartWhatsAppMessage();
  if (!message) return;
  window.open(buildWhatsappLink(message), "_blank");
}

const CART_DRAWER_HTML =
  '<div class="cart-overlay" id="cart-overlay" onclick="closeCart()"></div>' +
  '<aside class="cart-drawer" id="cart-drawer">' +
    '<div class="cart-header">' +
      '<h3><span class="lang-es">Tu carrito</span><span class="lang-en">Your cart</span></h3>' +
      '<button type="button" class="cart-close" onclick="closeCart()" aria-label="cerrar">&times;</button>' +
    "</div>" +
    '<div class="cart-body" id="cart-body"></div>' +
    '<div class="cart-footer" id="cart-footer">' +
      '<button type="button" class="btn btn-whatsapp" style="width:100%;justify-content:center;" onclick="checkoutCart()">' +
        '<span class="lang-es">Finalizar pedido por WhatsApp</span><span class="lang-en">Checkout via WhatsApp</span>' +
      "</button>" +
    "</div>" +
  "</aside>";

function injectCartDrawer() {
  const mount = document.getElementById("cart-drawer-mount");
  if (mount) mount.outerHTML = CART_DRAWER_HTML;

  const toggle = document.querySelector(".cart-toggle");
  if (toggle) toggle.addEventListener("click", openCart);

  document.addEventListener("bluemoon:langchange", renderCartPanel);

  updateCartBadge();
  renderCartPanel();
}
