/* =========================================================
   ZYVON — SCRIPT.JS
   Complete E-Commerce Functionality
   20 Products • Cart • Search • Filters • Modal
========================================================= */


/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [

  /* =========================
     TEES
  ========================= */

  {
    id: 1,
    name: "Free Will Oversized Tee",
    category: "tees",
    categoryLabel: "TEES",
    price: 799,
    image: "https://i.ibb.co/Y7gPznnb/DSC-5073-1.jpg",
    description: "A clean oversized streetwear tee with a modern silhouette."
  },

  {
    id: 2,
    name: "Free Will Graphic Tee",
    category: "tees",
    categoryLabel: "TEES",
    price: 799,
    image: "https://i.ibb.co/qL53tMbR/hiyest-freewill-or-destiny-oversized-black-t-shirt-frontprint-960x1200-jpg.webp",
    description: "Statement graphic design with a relaxed streetwear fit."
  },

  {
    id: 3,
    name: "Minimal Graphic Tee",
    category: "tees",
    categoryLabel: "TEES",
    price: 749,
    image: "https://i.ibb.co/HTSm2znJ/75715204-2e04-423f-ba8b-051961831a0f.webp",
    description: "Minimal graphic detailing with an everyday premium fit."
  },

  {
    id: 4,
    name: "Heavy Faded Tee",
    category: "tees",
    categoryLabel: "TEES",
    price: 849,
    image: "https://i.ibb.co/tpSXgK2g/5082-HEAVY-FADED-TEE-FADED-BLACK.png",
    description: "Heavyweight faded finish designed for a modern streetwear look."
  },

  {
    id: 5,
    name: "Sunlit Essential Tee",
    category: "tees",
    categoryLabel: "TEES",
    price: 699,
    image: "https://i.ibb.co/qF71LK6H/sunlit-hanging-t-shirt-mockup-soft-shadows-on-textured-wall-minimalist-and-natural-aesthetic-0741-8.jpg",
    description: "Minimal everyday tee with a clean and versatile aesthetic."
  },


  /* =========================
     OVERSIZED
  ========================= */

  {
    id: 6,
    name: "Washed Black Oversized Tee",
    category: "oversized",
    categoryLabel: "OVERSIZED",
    price: 899,
    image: "https://i.ibb.co/Z6KZYb58/pexels-bandar-baant-2160637741-37482328.jpg",
    description: "Relaxed heavyweight oversized silhouette with a washed finish."
  },

  {
    id: 7,
    name: "Urban Oversized Tee",
    category: "oversized",
    categoryLabel: "OVERSIZED",
    price: 899,
    image: "https://i.ibb.co/gb22DmMK/pexels-bandar-baant-2160637741-36986582.jpg",
    description: "Modern oversized streetwear fit built for everyday wear."
  },

  {
    id: 8,
    name: "Editorial Oversized Tee",
    category: "oversized",
    categoryLabel: "OVERSIZED",
    price: 949,
    image: "https://i.ibb.co/Jjh45vff/pexels-bandar-baant-2160637741-36942018.jpg",
    description: "Bold oversized proportions with a contemporary editorial feel."
  },

  {
    id: 9,
    name: "Tonal Thrash Boxy Tee",
    category: "oversized",
    categoryLabel: "OVERSIZED",
    price: 949,
    image: "https://i.ibb.co/yFk2y8Rz/tonal-thrash-boxy-tee-s.png",
    description: "Boxy heavyweight tee with tonal graphic detailing."
  },

  {
    id: 10,
    name: "Archive Oversized Tee",
    category: "oversized",
    categoryLabel: "OVERSIZED",
    price: 899,
    image: "https://i.ibb.co/fzgHHLNV/ben-iwara-3-QIjn-DIcxu-M-unsplash.jpg",
    description: "Relaxed archive-inspired oversized streetwear silhouette."
  },


  /* =========================
     HOODIES
  ========================= */

  {
    id: 11,
    name: "Essential Black Hoodie",
    category: "hoodies",
    categoryLabel: "HOODIES",
    price: 1299,
    image: "https://i.ibb.co/4w6FdZPr/pexels-airamdphoto-9649527.jpg",
    description: "Clean oversized hoodie built around a timeless black silhouette."
  },

  {
    id: 12,
    name: "Heavyweight Street Hoodie",
    category: "hoodies",
    categoryLabel: "HOODIES",
    price: 1399,
    image: "https://i.ibb.co/HTMF7bJW/josh-marty-D-oceq6l5h-M-unsplash.jpg",
    description: "Heavyweight streetwear hoodie with a relaxed premium fit."
  },

  {
    id: 13,
    name: "Urban Graphic Hoodie",
    category: "hoodies",
    categoryLabel: "HOODIES",
    price: 1399,
    image: "https://i.ibb.co/MyY3BHHB/pexels-ana-maria-arroyave-1851916642-28701959.jpg",
    description: "Modern graphic hoodie designed for an understated street look."
  },

  {
    id: 14,
    name: "Minimal Grey Hoodie",
    category: "hoodies",
    categoryLabel: "HOODIES",
    price: 1299,
    image: "https://i.ibb.co/ZRhv4nyW/michael-kyule-Nq-j-FJtq-Gu-Y-unsplash.jpg",
    description: "Minimal hoodie with a relaxed silhouette and clean finish."
  },

  {
    id: 15,
    name: "Archive Hoodie",
    category: "hoodies",
    categoryLabel: "HOODIES",
    price: 1499,
    image: "https://i.ibb.co/V0T4W5KZ/actions-b24ec891-4e9c-4ea8-bd95-66b8b6bd9f4d.jpg",
    description: "Archive-inspired hoodie with a distinctive streetwear aesthetic."
  },


  /* =========================
     ACCESSORIES
  ========================= */

  {
    id: 16,
    name: "Canvas Graphic Tote",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    price: 599,
    image: "https://i.ibb.co/NPwbjyb/1515373-carhartt-wip-canvas-graphic-tote-bag-label-script-print-black.jpg",
    description: "Structured black canvas tote designed for everyday carry."
  },

  {
    id: 17,
    name: "Minimal Street Tote",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    price: 599,
    image: "https://i.ibb.co/d4D1fCxN/871dff03-ccb0-45a1-92e0-ed530a8b08f8.png",
    description: "Simple black tote with a clean minimalist aesthetic."
  },

  {
    id: 18,
    name: "Graphic Canvas Tote",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    price: 649,
    image: "https://i.ibb.co/spdJk8VX/1a13b80dbd0e9f943911a69f6fc89a66c33ee246-Janosch-Presents-32-Posting-3-a9dfd837-5787-47fe-9205-57d63.jpg",
    description: "Graphic canvas tote with a distinctive contemporary look."
  },

  {
    id: 19,
    name: "Black Everyday Tote",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    price: 549,
    image: "https://i.ibb.co/ZkQ6BSX/5c311613b196db5ce1ea5c328ae7b37e.jpg",
    description: "Minimal everyday tote designed for a clean streetwear wardrobe."
  },

  {
    id: 20,
    name: "Oversized Black Tote",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    price: 699,
    image: "https://i.ibb.co/XZq21dHY/1-R-Everyday-Oversized-Tote-Black.jpg",
    description: "Large-format black tote with a practical everyday silhouette."
  }

];


/* =========================================================
   STATE
========================================================= */

let cart = [];

try {
  cart = JSON.parse(localStorage.getItem("zyvonCart")) || [];
  if (!Array.isArray(cart)) cart = [];
} catch (error) {
  cart = [];
}

let selectedProduct = null;
let selectedSize = null;
let activeCategory = "all";
let currentProducts = [...products];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const productGrid = document.getElementById("productGrid");
const newProducts = document.getElementById("newProducts");

const productModal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");

const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const mobileMenu = document.getElementById("mobileMenu");
const toast = document.getElementById("toast");

const newsletterForm =
  document.getElementById("newsletterForm");


/* =========================================================
   PRICE FORMAT
========================================================= */

function formatPrice(price) {
  return "₹" + Number(price).toLocaleString("en-IN");
}


/* =========================================================
   IMAGE FALLBACK
========================================================= */

function handleImageError(img) {

  if (!img) return;

  img.onerror = null;

  img.src =
    "https://i.ibb.co/Y7gPznnb/DSC-5073-1.jpg";

  img.style.objectFit = "cover";
}


/* =========================================================
   PRODUCT
