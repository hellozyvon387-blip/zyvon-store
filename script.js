/* =========================================================
   ZYVON — SCRIPT.JS
   Stable E-Commerce System
   ImgBB Product Images
========================================================= */


/* =========================================================
   PRODUCT DATA
   ADD NEW PRODUCTS HERE ONLY
========================================================= */

const products = [

  {
    id: 1,
    name: "Free Will Oversized Tee",
    category: "tees",
    categoryLabel: "TEES",
    price: 799,
    image: "https://i.ibb.co/Y7gPznnb/DSC-5073-1.jpg",
    description: "A clean oversized streetwear tee with a modern silhouette.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 2,
    name: "Free Will Graphic Tee",
    category: "tees",
    categoryLabel: "TEES",
    price: 799,
    image: "https://i.ibb.co/qL53tMbR/hiyest-freewill-or-destiny-oversized-black-t-shirt-frontprint-960x1200-jpg.webp",
    description: "Statement graphic design with a relaxed streetwear fit.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 3,
    name: "Minimal Graphic Tee",
    category: "tees",
    categoryLabel: "TEES",
    price: 749,
    image: "https://i.ibb.co/HTSm2znJ/75715204-2e04-423f-ba8b-051961831a0f.webp",
    description: "Minimal graphic detailing with an everyday premium fit.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 4,
    name: "Heavy Faded Tee",
    category: "tees",
    categoryLabel: "TEES",
    price: 849,
    image: "https://i.ibb.co/tpSXgK2g/5082-HEAVY-FADED-TEE-FADED-BLACK.png",
    description: "Heavyweight faded finish designed for a modern streetwear look.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 5,
    name: "Sunlit Essential Tee",
    category: "tees",
    categoryLabel: "TEES",
    price: 699,
    image: "https://i.ibb.co/qF71LK6H/sunlit-hanging-t-shirt-mockup-soft-shadows-on-textured-wall-minimalist-and-natural-aesthetic-0741-8.jpg",
    description: "Minimal everyday tee with a clean and versatile aesthetic.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 6,
    name: "Washed Black Oversized Tee",
    category: "oversized",
    categoryLabel: "OVERSIZED",
    price: 899,
    image: "https://i.ibb.co/Z6KZYb58/pexels-bandar-baant-2160637741-37482328.jpg",
    description: "Relaxed heavyweight oversized silhouette with a washed finish.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 7,
    name: "Urban Oversized Tee",
    category: "oversized",
    categoryLabel: "OVERSIZED",
    price: 899,
    image: "https://i.ibb.co/gb22DmMK/pexels-bandar-baant-2160637741-36986582.jpg",
    description: "Modern oversized streetwear fit built for everyday wear.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 8,
    name: "Editorial Oversized Tee",
    category: "oversized",
    categoryLabel: "OVERSIZED",
    price: 949,
    image: "https://i.ibb.co/Jjh45vff/pexels-bandar-baant-2160637741-36942018.jpg",
    description: "Bold oversized proportions with a contemporary editorial feel.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 9,
    name: "Tonal Thrash Boxy Tee",
    category: "oversized",
    categoryLabel: "OVERSIZED",
    price: 949,
    image: "https://i.ibb.co/yFk2y8Rz/tonal-thrash-boxy-tee-s.png",
    description: "Boxy heavyweight tee with tonal graphic detailing.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 10,
    name: "Archive Oversized Tee",
    category: "oversized",
    categoryLabel: "OVERSIZED",
    price: 899,
    image: "https://i.ibb.co/fzgHHLNV/ben-iwara-3-QIjn-DIcxu-M-unsplash.jpg",
    description: "Relaxed archive-inspired oversized streetwear silhouette.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 11,
    name: "Essential Black Hoodie",
    category: "hoodies",
    categoryLabel: "HOODIES",
    price: 1299,
    image: "https://i.ibb.co/4w6FdZPr/pexels-airamdphoto-9649527.jpg",
    description: "Clean oversized hoodie built around a timeless black silhouette.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 12,
    name: "Heavyweight Street Hoodie",
    category: "hoodies",
    categoryLabel: "HOODIES",
    price: 1399,
    image: "https://i.ibb.co/HTMF7bJW/josh-marty-D-oceq6l5h-M-unsplash.jpg",
    description: "Heavyweight streetwear hoodie with a relaxed premium fit.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 13,
    name: "Urban Graphic Hoodie",
    category: "hoodies",
    categoryLabel: "HOODIES",
    price: 1399,
    image: "https://i.ibb.co/MyY3BHHB/pexels-ana-maria-arroyave-1851916642-28701959.jpg",
    description: "Modern graphic hoodie designed for an understated street look.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 14,
    name: "Minimal Grey Hoodie",
    category: "hoodies",
    categoryLabel: "HOODIES",
    price: 1299,
    image: "https://i.ibb.co/ZRhv4nyW/michael-kyule-Nq-j-FJtq-Gu-Y-unsplash.jpg",
    description: "Minimal hoodie with a relaxed silhouette and clean finish.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 15,
    name: "Archive Hoodie",
    category: "hoodies",
    categoryLabel: "HOODIES",
    price: 1499,
    image: "https://i.ibb.co/V0T4W5KZ/actions-b24ec891-4e9c-4ea8-bd95-66b8b6bd9f4d.jpg",
    description: "Archive-inspired hoodie with a distinctive streetwear aesthetic.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 16,
    name: "Canvas Graphic Tote",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    price: 599,
    image: "https://i.ibb.co/NPwbjyb/1515373-carhartt-wip-canvas-graphic-tote-bag-label-script-print-black.jpg",
    description: "Structured black canvas tote designed for everyday carry.",
    sizes: ["ONE SIZE"]
  },

  {
    id: 17,
    name: "Minimal Street Tote",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    price: 599,
    image: "https://i.ibb.co/d4D1fCxN/871dff03-ccb0-45a1-92e0-ed530a8b08f8.png",
    description: "Simple black tote with a clean minimalist aesthetic.",
    sizes: ["ONE SIZE"]
  },

  {
    id: 18,
    name: "Graphic Canvas Tote",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    price: 649,
    image: "https://i.ibb.co/spdJk8VX/1a13b80dbd0e9f943911a69f6fc89a66c33ee246-Janosch-Presents-32-Posting-3-a9dfd837-5787-47fe-9205-57d63.jpg",
    description: "Graphic canvas tote with a distinctive contemporary look.",
    sizes: ["ONE SIZE"]
  },

  {
    id: 19,
    name: "Black Everyday Tote",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    price: 549,
    image: "https://i.ibb.co/ZkQ6BSX/5c311613b196db5ce1ea5c328ae7b37e.jpg",
    description: "Minimal everyday tote designed for a clean streetwear wardrobe.",
    sizes: ["ONE SIZE"]
  },

  {
    id: 20,
    name: "Oversized Black Tote",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    price: 699,
    image: "https://i.ibb.co/XZq21dHY/1-R-Everyday-Oversized-Tote-Black.jpg",
    description: "Large-format black tote with a practical everyday silhouette.",
    sizes: ["ONE SIZE"]
  }

];


/* =========================================================
   GLOBAL STATE
========================================================= */

let cart = JSON.parse(localStorage.getItem("zyvonCart") || "[]");

let selectedProduct = null;
let selectedSize = "M";
let selectedQuantity = 1;


/* =========================================================
   DOM
========================================================= */

const productGrid = document.getElementById("productGrid");
const newProducts = document.getElementById("newProducts");
const bestProducts = document.getElementById("bestProducts");

const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");

const quantityMinus = document.getElementById("quantityMinus");
const quantityPlus = document.getElementById("quantityPlus");
const quantityValue = document.getElementById("quantityValue");

const modalAddCart = document.getElementById("modalAddCart");
const modalBuyNow = document.getElementById("modalBuyNow");

const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

const checkoutBtn = document.getElementById("checkoutBtn");

const toast = document.getElementById("toast");

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const closeSearch = document.getElementById("closeSearch");

const accountBtn = document.getElementById("accountBtn");
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

const newsletterForm = document.getElementById("newsletterForm");


/* =========================================================
   PRICE
========================================================= */

function formatPrice(price) {
  return `₹${Number(price).toLocaleString("en-IN")}`;
}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

  if (!toast) return;

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(window.zyvonToastTimer);

  window.zyvonToastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


/* =========================================================
   SAFE HTML
========================================================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================================================
   IMAGE FALLBACK
   Prevents ugly broken/black image boxes
========================================================= */

function imageFallback(img) {

  if (!img || img.dataset.fallbackApplied === "true") {
    return;
  }

  img.dataset.fallbackApplied = "true";

  const productName =
    img.getAttribute("alt") || "ZYVON";

  const svg = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="1000"
      viewBox="0 0 800 1000"
    >
      <rect width="800" height="1000" fill="#111111"/>
      <text
        x="400"
        y="450"
        fill="#ffffff"
        text-anchor="middle"
        font-family="Arial, sans-serif"
        font-size="42"
        font-weight="700"
      >
        ZYVON
      </text>
      <text
        x="400"
        y="505"
        fill="#888888"
        text-anchor="middle"
        font-family="Arial, sans-serif"
        font-size="20"
      >
        ${escapeHTML(productName)}
      </text>
    </svg>
  `;

  img.src =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(svg);
}


/* =========================================================
   IMAGE LOADING
========================================================= */

function prepareImage(img) {

  if (!img) return;

  img.referrerPolicy = "no-referrer";

  img.addEventListener("error", function () {
    imageFallback(this);
  }, { once: true });

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product) {

  return `
    <article
      class="product-card"
      data-category="${escapeHTML(product.category)}"
    >

      <div class="product-image-wrap">

        <img
          class="product-image"
          src="${product.image}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          decoding="async"
          referrerpolicy="no-referrer"
          draggable="false"
          onerror="imageFallback(this)"
        >

        <div class="product-actions">

          <button
            type="button"
            class="add-cart-btn"
            onclick="openProduct(${product.id})"
          >
            ADD TO CART
          </button>

          <button
            type="button"
            class="buy-now-btn"
            onclick="openProduct(${product.id}, true)"
          >
            BUY NOW
          </button>

        </div>

      </div>

      <div class="product-info">

        <span class="product-category">
          ${escapeHTML(product.categoryLabel)}
        </span>

        <h3>
          ${escapeHTML(product.name)}
        </h3>

        <div class="product-bottom">

          <strong>
            ${formatPrice(product.price)}
          </strong>

          <button
            type="button"
            onclick="openProduct(${product.id})"
          >
            VIEW
          </button>

        </div>

      </div>

    </article>
  `;
}


/* =========================================================
   RENDER
========================================================= */

function renderProducts(list = products) {

  if (productGrid) {

    productGrid.innerHTML = list.length
      ? list.map(createProductCard).join("")
      : `
        <div class="no-products">
          <h3>No products found</h3>
          <p>More ZYVON pieces are coming soon.</p>
        </div>
      `;
  }


  if (newProducts) {

    newProducts.innerHTML =
      products
        .slice(0, 5)
        .map(createProductCard)
        .join("");
  }


  if (bestProducts) {

    bestProducts.innerHTML =
      products
        .slice(5, 10)
        .map(createProductCard)
        .join("");
  }
}


/* =========================================================
   PRELOAD IMAGES
========================================================= */

function preloadProductImages() {

  products.forEach(product => {

    const img = new Image();

    img.referrerPolicy = "no-referrer";

    img.src = product.image;

  });
}


/* =========================================================
   PRODUCT MODAL
========================================================= */

function openProduct(productId, buyNow = false) {

  const product =
    products.find(item => item.id === productId);

  if (!product || !productModal) return;

  selectedProduct = product;

  selectedQuantity = 1;

  const sizes =
    product.sizes ||
    ["S", "M", "L", "XL", "XXL"];

  selectedSize =
    sizes.includes("M")
      ? "M"
      : sizes[0];


  if (modalImage) {

    modalImage.dataset.fallbackApplied = "false";

    modalImage.src = product.image;

    modalImage.alt = product.name;

    modalImage.referrerPolicy = "no-referrer";

    modalImage.onerror = function () {
      imageFallback(this);
    };

  }


  if (modalCategory) {
    modalCategory.textContent =
      product.categoryLabel;
  }


  if (modalName) {
    modalName.textContent =
      product.name;
  }


  if (modalPrice) {
    modalPrice.textContent =
      formatPrice(product.price);
  }


  if (modalDescription) {
    modalDescription.textContent =
      product.description;
  }


  if (quantityValue) {
    quantityValue.textContent =
      selectedQuantity;
  }


  renderModalSizes(sizes);


  productModal.classList.add("active");

  document.body.classList.add("modal-open");


  if (buyNow) {

    setTimeout(() => {

      if (modalBuyNow) {
        modalBuyNow.focus();
      }

    }, 100);

  }

}


/* =========================================================
   MODAL SIZES
========================================================= */

function renderModalSizes(sizes) {

  const sizeContainer =
    document.querySelector(".size-options");

  if (!sizeContainer) return;

  sizeContainer.innerHTML =
    sizes.map(size => `
      <button
        type="button"
        class="size-btn ${
          size === selectedSize ? "active" : ""
        }"
      >
        ${escapeHTML(size)}
      </button>
    `).join("");
}


/* =========================================================
   CLOSE PRODUCT
========================================================= */

function closeProduct() {

  if (!productModal) return;

  productModal.classList.remove("active");

  document.body.classList.remove("modal-open");

  selectedProduct = null;
}


/* =========================================================
   SIZE SELECTION
========================================================= */

document.addEventListener("click", event => {

  const button =
    event.target.closest(".size-btn");

  if (!button) return;

  document
    .querySelectorAll(".size-btn")
    .forEach(item => {
      item.classList.remove("active");
    });

  button.classList.add("active");

  selectedSize =
    button.textContent.trim();

});


/* =========================================================
   QUANTITY
========================================================= */

if (quantityMinus) {

  quantityMinus.addEventListener("click", () => {

    if (selectedQuantity > 1) {

      selectedQuantity--;

      if (quantityValue) {
        quantityValue.textContent =
          selectedQuantity;
      }

    }

  });

}


if (quantityPlus) {

  quantityPlus.addEventListener("click", () => {

    if (selectedQuantity < 10) {

      selectedQuantity++;

      if (quantityValue) {
        quantityValue.textContent =
          selectedQuantity;
      }

    }

  });

}


/* =========================================================
   CART
========================================================= */

function addToCart(product, size, quantity) {

  if (!product) return;


  const existingItem =
    cart.find(item =>
      item.productId === product.id &&
      item.size === size
    );


  if (existingItem) {

    existingItem.quantity += quantity;

  } else {

    cart.push({

      productId: product.id,

      name: product.name,

      price: product.price,

      image: product.image,

      size: size,

      quantity: quantity

    });

  }


  saveCart();

  updateCartUI();

}


/* =========================================================
   SAVE CART
========================================================= */

function saveCart() {

  localStorage.setItem(
    "zyvonCart",
    JSON.stringify(cart)
  );

}


/* =========================================================
   MODAL ADD CART
========================================================= */

if (modalAddCart) {

  modalAddCart.addEventListener("click", () => {

    if (!selectedProduct) return;


    addToCart(
      selectedProduct,
      selectedSize,
      selectedQuantity
    );


    showToast(
      `${selectedProduct.name} added to cart`
    );


    closeProduct();

    openCart();

  });

}


/* =========================================================
   BUY NOW
========================================================= */

if (modalBuyNow) {

  modalBuyNow.addEventListener("click", () => {

    if (!selectedProduct) return;


    addToCart(
      selectedProduct,
      selectedSize,
      selectedQuantity
    );


    closeProduct();

    openCart();

  });

}


/* =========================================================
   CART UI
========================================================= */

function updateCartUI() {

  const totalItems =
    cart.reduce(
      (total, item) =>
        total + Number(item.quantity || 0),
      0
    );


  const totalPrice =
    cart.reduce(
      (total, item) =>
        total +
        Number(item.price || 0) *
        Number(item.quantity || 0),
      0
    );


  if (cartCount) {

    cartCount.textContent =
      totalItems;

    cartCount.style.display =
