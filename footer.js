/* ============================================================
   BLUEMOON — PIE DE PÁGINA COMPARTIDO
   Este bloque se inyecta en el <footer id="footer"></footer>
   de cada página, para no repetir el mismo HTML cinco veces.
   Edita aquí los datos de contacto, redes sociales y enlaces.
   ============================================================ */

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <img src="images/logo-bluemoon.png" alt="BlueMoon" style="height:52px;margin-bottom:16px;">
        <p>
          <span class="lang-es">Joyas en oro, bisutería fina y perfumes originales de las casas más exclusivas del mundo.</span>
          <span class="lang-en">Gold jewelry, fine costume pieces and original perfumes from the world's most exclusive houses.</span>
        </p>
        <div class="social-row">
          <a href="https://www.instagram.com/bluemoon_oficial1/" aria-label="Instagram" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>
          </a>
          <a href="https://www.tiktok.com/@bluemoon0016" aria-label="TikTok" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M15 3v10.5a3.5 3.5 0 1 1-3-3.46"/><path d="M15 3c0 2.2 1.8 4 4 4"/></svg>
          </a>
        </div>
      </div>
      <div>
        <h4><span class="lang-es">Explorar</span><span class="lang-en">Explore</span></h4>
        <ul class="footer-links">
          <li><a href="index.html"><span class="lang-es">Inicio</span><span class="lang-en">Home</span></a></li>
          <li><a href="joyas.html"><span class="lang-es">Joyas</span><span class="lang-en">Jewelry</span></a></li>
          <li><a href="perfumes.html"><span class="lang-es">Perfumes</span><span class="lang-en">Perfumes</span></a></li>
          <li><a href="nosotros.html"><span class="lang-es">Nosotros</span><span class="lang-en">About</span></a></li>
          <li><a href="contacto.html"><span class="lang-es">Contacto</span><span class="lang-en">Contact</span></a></li>
        </ul>
      </div>
      <div>
        <h4><span class="lang-es">Contacto</span><span class="lang-en">Contact</span></h4>
        <ul class="footer-links">
          <li>Medellín, Colombia</li>
          <li id="footer-email">contacto@bluemoon.com</li>
          <li id="footer-whatsapp-text"><span class="lang-es">Pedidos por WhatsApp</span><span class="lang-en">Orders via WhatsApp</span></li>
          <li><a href="https://www.instagram.com/bluemoon_oficial1/" target="_blank" rel="noopener"><span class="lang-es">Síguenos en Instagram</span><span class="lang-en">Follow us on Instagram</span></a></li>
          <li><a href="https://www.tiktok.com/@bluemoon0016" target="_blank" rel="noopener"><span class="lang-es">Síguenos en TikTok</span><span class="lang-en">Follow us on TikTok</span></a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; <span id="footer-year"></span> BlueMoon. <span class="lang-es">Todos los derechos reservados.</span><span class="lang-en">All rights reserved.</span>
    </div>
  </div>
</footer>
`;

function injectFooter() {
  const mount = document.getElementById("footer");
  if (!mount) return;
  mount.outerHTML = FOOTER_HTML;
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const emailEl = document.getElementById("footer-email");
  if (emailEl && typeof CONTACT !== "undefined") emailEl.textContent = CONTACT.email;
}
