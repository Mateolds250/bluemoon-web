/* ============================================================
   BLUEMOON — CATÁLOGO DE PRODUCTOS
   ============================================================
   Este archivo es el ÚNICO lugar que necesitas editar para
   agregar, quitar o modificar joyas y perfumes del catálogo.
   No necesitas tocar el HTML ni el CSS.

   Cómo agregar un producto nuevo:
   1. Copia un bloque { ... } completo (incluyendo la coma final).
   2. Pégalo dentro del arreglo correspondiente (jewelryProducts
      o perfumeProducts).
   3. Cambia los datos (nombre, precio, descripción, imagen).
   4. Guarda el archivo y sube el cambio a GitHub.

   Campos:
   - id: identificador único (sin espacios, ej: "anillo-01")
   - category: usada para filtrar/organizar ("oro", "bisuteria",
     "a-pedido" para joyas · "ella", "el", "unisex" para perfumes)
   - nameEs / nameEn: nombre del producto en cada idioma
   - descEs / descEn: descripción corta en cada idioma
   - price: precio a mostrar (texto libre, ej: "$450.000 COP")
   - image: ruta de la imagen en la carpeta /images
            (si no tienes foto todavía, deja el placeholder que
            ya está puesto — se genera automáticamente)
   - badge (opcional): etiqueta pequeña, ej: "Exclusivo", "Nuevo"
   ============================================================ */

const jewelryProducts = [
  {
    id: "anillo-solitario-oro",
    category: "oro",
    nameEs: "Anillo Solitario en Oro 18k",
    nameEn: "18k Gold Solitaire Ring",
    descEs: "Anillo clásico en oro de 18 quilates, acabado pulido espejo. Disponible en varias tallas.",
    descEn: "Classic 18k gold ring with a mirror-polished finish. Available in multiple sizes.",
    price: "$980.000 COP",
    image: "images/placeholder-ring.svg",
    badge: "Oro 18k"
  },
  {
    id: "cadena-cubana-oro",
    category: "oro",
    nameEs: "Cadena Cubana en Oro 10k",
    nameEn: "10k Gold Cuban Link Chain",
    descEs: "Cadena tipo cubana maciza, oro de 10 quilates. Un clásico que nunca pasa de moda.",
    descEn: "Solid Cuban link chain in 10k gold. A timeless classic.",
    price: "$1.450.000 COP",
    image: "images/placeholder-necklace.svg",
    badge: "Oro 10k"
  },
  {
    id: "aretes-perla-oro",
    category: "oro",
    nameEs: "Aretes de Perla y Oro 14k",
    nameEn: "14k Gold & Pearl Earrings",
    descEs: "Aretes delicados con perla cultivada engastada en oro de 14 quilates.",
    descEn: "Delicate cultured pearl earrings set in 14k gold.",
    price: "$620.000 COP",
    image: "images/placeholder-earrings.svg",
    badge: "Oro 14k"
  },
  {
    id: "pulsera-bisuteria-luna",
    category: "bisuteria",
    nameEs: "Pulsera Luna Bañada en Oro",
    nameEn: "Gold-Plated Moon Bracelet",
    descEs: "Pulsera de bisutería fina bañada en oro, dije de luna creciente inspirado en BlueMoon.",
    descEn: "Fine gold-plated bracelet with a crescent moon charm inspired by BlueMoon.",
    price: "$95.000 COP",
    image: "images/placeholder-bracelet.svg",
    badge: "Bisutería"
  },
  {
    id: "collar-bisuteria-capas",
    category: "bisuteria",
    nameEs: "Collar de Capas Bañado en Oro",
    nameEn: "Gold-Plated Layered Necklace",
    descEs: "Set de collares en capas, bañados en oro 24k, ideales para el día a día.",
    descEn: "Layered necklace set, 24k gold-plated, perfect for everyday wear.",
    price: "$110.000 COP",
    image: "images/placeholder-necklace.svg",
    badge: "Bisutería"
  },
  {
    id: "joya-sobre-pedido",
    category: "a-pedido",
    nameEs: "Diseño Personalizado Sobre Pedido",
    nameEn: "Custom Made-to-Order Design",
    descEs: "Creamos la joya que imaginas: anillos de compromiso, dijes personalizados, grabados y más. Cuéntanos tu idea.",
    descEn: "We create the jewelry you imagine: engagement rings, custom charms, engravings and more. Tell us your idea.",
    price: "Cotización personalizada",
    image: "images/placeholder-custom.svg",
    badge: "Sobre pedido"
  }
];

const perfumeProducts = [
  // ---- PARA ELLA ----
  {
    id: "chanel-no5",
    category: "ella",
    brand: "Chanel",
    nameEs: "Chanel N.º 5",
    nameEn: "Chanel No. 5",
    descEs: "El perfume más icónico del mundo. Floral aldehídico, elegante y atemporal.",
    descEn: "The world's most iconic perfume. Aldehydic floral, elegant and timeless.",
    price: "Consultar disponibilidad",
    image: "images/placeholder-perfume.svg",
    badge: "Icónico"
  },
  {
    id: "ysl-black-opium",
    category: "ella",
    brand: "Yves Saint Laurent",
    nameEs: "Black Opium",
    nameEn: "Black Opium",
    descEs: "Café, vainilla y flor blanca en una fragancia adictiva y moderna.",
    descEn: "Coffee, vanilla and white flowers in an addictive, modern fragrance.",
    price: "Consultar disponibilidad",
    image: "images/placeholder-perfume.svg",
    badge: "Best seller"
  },
  {
    id: "carolina-herrera-good-girl",
    category: "ella",
    brand: "Carolina Herrera",
    nameEs: "Good Girl",
    nameEn: "Good Girl",
    descEs: "Contraste de luz y sombra en su icónico frasco de tacón. Cacao, jazmín y almendra.",
    descEn: "A contrast of light and shadow in its iconic stiletto bottle. Cacao, jasmine and almond.",
    price: "Consultar disponibilidad",
    image: "images/placeholder-perfume.svg",
    badge: "Best seller"
  },
  {
    id: "mfk-baccarat-rouge",
    category: "ella",
    brand: "Maison Francis Kurkdjian",
    nameEs: "Baccarat Rouge 540",
    nameEn: "Baccarat Rouge 540",
    descEs: "La joya del nicho de lujo: azafrán y madera de ámbar en una fragancia inconfundible.",
    descEn: "The jewel of luxury niche perfumery: saffron and amberwood in an unmistakable scent.",
    price: "Consultar disponibilidad",
    image: "images/placeholder-perfume.svg",
    badge: "Exclusivo · Nicho"
  },
  // ---- PARA ÉL ----
  {
    id: "carolina-herrera-212-men",
    category: "el",
    brand: "Carolina Herrera",
    nameEs: "212 Men NYC",
    nameEn: "212 Men NYC",
    descEs: "Fresco y urbano, con acordes cítricos y amaderados. Un clásico neoyorquino imprescindible. 200ml.",
    descEn: "Fresh and urban, with citrus and woody accords. An essential New York classic. 200ml.",
    price: "$250.000 COP",
    image: "images/carolina-herrera-212-men.jpg",
    badge: "Nuevo"
  },
  {
    id: "dior-sauvage",
    category: "el",
    brand: "Dior",
    nameEs: "Sauvage",
    nameEn: "Sauvage",
    descEs: "El rey de las fragancias masculinas modernas. Bergamota de Calabria y pimienta.",
    descEn: "The king of modern masculine fragrances. Calabrian bergamot and pepper.",
    price: "Consultar disponibilidad",
    image: "images/placeholder-perfume.svg",
    badge: "Best seller"
  },
  {
    id: "chanel-bleu",
    category: "el",
    brand: "Chanel",
    nameEs: "Bleu de Chanel",
    nameEn: "Bleu de Chanel",
    descEs: "El referente del perfume azul: cítricos, jengibre y sándalo.",
    descEn: "The benchmark blue fragrance: citrus, ginger and sandalwood.",
    price: "Consultar disponibilidad",
    image: "images/placeholder-perfume.svg",
    badge: "Icónico"
  },
  {
    id: "armani-acqua-di-gio",
    category: "el",
    brand: "Giorgio Armani",
    nameEs: "Acqua di Giò",
    nameEn: "Acqua di Giò",
    descEs: "Una obra maestra acuática con notas marinas y bergamota.",
    descEn: "An aquatic masterpiece with sea notes and bergamot.",
    price: "Consultar disponibilidad",
    image: "images/placeholder-perfume.svg",
    badge: "Clásico"
  },
  {
    id: "creed-aventus",
    category: "el",
    brand: "Creed",
    nameEs: "Aventus",
    nameEn: "Aventus",
    descEs: "Piña, abedul ahumado y almizcle. La fragancia de nicho más deseada por caballeros.",
    descEn: "Pineapple, smoky birch and musk. The most coveted niche fragrance for men.",
    price: "Consultar disponibilidad",
    image: "images/placeholder-perfume.svg",
    badge: "Exclusivo · Nicho"
  },
  // ---- UNISEX / NICHO ----
  {
    id: "tom-ford-black-orchid",
    category: "unisex",
    brand: "Tom Ford",
    nameEs: "Black Orchid",
    nameEn: "Black Orchid",
    descEs: "Lujoso, oscuro y sensual: orquídea negra, trufa y especias.",
    descEn: "Luxurious, dark and sensual: black orchid, truffle and spice.",
    price: "Consultar disponibilidad",
    image: "images/placeholder-perfume.svg",
    badge: "Exclusivo · Nicho"
  },
  {
    id: "byredo-gypsy-water",
    category: "unisex",
    brand: "Byredo",
    nameEs: "Gypsy Water",
    nameEn: "Gypsy Water",
    descEs: "Bergamota, enebro y vainilla en una fragancia de nicho libre y bohemia.",
    descEn: "Bergamot, juniper and vanilla in a free-spirited niche fragrance.",
    price: "Consultar disponibilidad",
    image: "images/placeholder-perfume.svg",
    badge: "Nicho"
  },
  {
    id: "amouage-interlude-man",
    category: "unisex",
    brand: "Amouage",
    nameEs: "Interlude Man",
    nameEn: "Interlude Man",
    descEs: "Intensa, ahumada y especiada. Una de las fragancias de lujo más aclamadas por conocedores.",
    descEn: "Intense, smoky and spiced. One of the most acclaimed luxury fragrances among connoisseurs.",
    price: "Consultar disponibilidad",
    image: "images/Carolina Herrera 212-Photoroom.png",
    badge: "Exclusivo · Nicho"
  }
];

/* ============================================================
   Datos de contacto — edita aquí tu número de WhatsApp Business
   Formato: código de país + número, sin espacios ni símbolos.
   Ejemplo Colombia: 57 3001234567  ->  "573001234567"
   ============================================================ */
const CONTACT = {
  whatsappNumber: "573105086397",
  email: "contacto@bluemoon.com", // <-- REEMPLAZA por tu correo real si es otro
  city: "Medellín, Colombia",
  tiktok: "https://www.tiktok.com/@bluemoon0016"
  Instagram:https:"//www.instagram.com/bluemoon_oficial1/"
};
