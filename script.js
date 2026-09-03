/* =========================================================
   ZYVON — SCRIPT.JS
   Complete working storefront
========================================================= */

"use strict";

/* =========================
   PRODUCT DATA
========================= */

const products = [
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


/* =========================
   STATE
========================= */

let cart = [];
let currentProduct = null;
let currentCategory = "all";


/* =========================
   HELPERS
========================= */

function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================
   IMAGE FALLBACK
========================= */

function imageFallback(img) {
  img.onerror = null;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="750">
      <rect width="100%" height="100%" fill="#111111"/>
      <text
        x="50%"
        y="48%"
        text-anchor="middle"
        fill="#ffffff"
        font-family="Arial"
        font-size="28"
        font-weight="700">
        ZYVON
      </text>
      <text
        x="50%"
        y="54%"
        text-anchor="middle"
        fill="#777777"
        font-family="Arial"
        font-size="14">
        IMAGE UNAVAILABLE
      </text>
    </svg>
  `;

  img.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}


/* =========================
   PRODUCT CARD
========================= */

function productCard(product) {
  return `
    <article class="product-card" data-product-id="${product.id}">
      
      <button
        class="product-image-wrap"
        type="button"
        onclick="openProduct(${product.id})"
        aria-label="View ${escapeHTML(product.name)}"
      >
        <img
          class="product-image"
          src="${product.image}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          onerror="imageFallback(this)"
        >

        <span class="product-view">
          VIEW
        </span>
      </button>

      <div class="product-info">
        <div class="product-meta">
          <span class="product-category">
            ${escapeHTML(product.categoryLabel)}
          </span>

          <span class="product-price">
            ${formatPrice(product.price)}
          </span>
        </div>

        <h3 class="product-name">
          ${escapeHTML(product.name)}
        </h3>

        <button
          class="product-add"
          type="button"
          onclick="addToCart(${product.id})"
        >
          ADD TO CART
        </button>
      </div>

    </article>
  `;
}


/* =========================
   RENDER PRODUCTS
========================= */

function renderProducts(category = "all") {
  currentCategory = category;

  const grid = document.getElementById("productGrid");

  if (!grid) {
    console.error("ZYVON: #productGrid was not found.");
    return;
  }

  const filtered =
    category === "all"
      ? products
      : products.filter(product => product.category === category);

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty-products">
        <p>No products found.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(productCard).join("");
}


/* =========================
   NEW ARRIVALS
========================= */

function renderNewArrivals() {
  const container = document.getElementById("newProducts");

  if (!container) {
    return;
  }

  const newProducts = products.slice(0, 5);

  container.innerHTML = newProducts
    .map(productCard)
    .join("");
}


/* =========================
   FILTERS
========================= */

function setupFilters() {
  const filterButtons = document.querySelectorAll(
    ".filter-btn, [data-filter]"
  );

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category =
        button.dataset.filter ||
        button.dataset.category ||
        "all";

      filterButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      renderProducts(category);
    });
  });
}


/* =========================
   PRODUCT MODAL
========================= */

function openProduct(productId) {
  const product = products.find(item => item.id === Number(productId));

  if (!product) {
    return;
  }

  currentProduct = product;

  const modal = document.getElementById("productModal");

  if (!modal) {
    return;
  }

  const image = modal.querySelector(".modal-image");
  const name = modal.querySelector(".modal-name");
  const category = modal.querySelector(".modal-category");
  const price = modal.querySelector(".modal-price");
  const description = modal.querySelector(".modal-description");

  if (image) {
    image.src = product.image;
    image.alt = product.name;
    image.onerror = () => imageFallback(image);
  }

  if (name) {
    name.textContent = product.name;
  }

  if (category) {
    category.textContent = product.categoryLabel;
  }

  if (price) {
    price.textContent = formatPrice(product.price);
  }

  if (description) {
    description.textContent = product.description;
  }

  modal.classList.add("active");
  document.body.classList.add("modal-open");
}


/* =========================
   CLOSE MODAL
========================= */

function closeProduct() {
  const modal = document.getElementById("productModal");

  if (!modal) {
    return;
  }

  modal.classList.remove("active");
  document.body.classList.remove("modal-open");

  currentProduct = null;
}


/* =========================
   CART
========================= */

function addToCart(productId) {
  const product = products.find(item => item.id === Number(productId));

  if (!product) {
    return;
  }

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
      size: "M"
    });
  }

  updateCart();
  showToast(`${product.name} added to cart`);

  closeProduct();
}


function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== Number(productId));

  updateCart();
}


function changeQuantity(productId, amount) {
  const item = cart.find(product => product.id === Number(productId));

  if (!item) {
    return;
  }

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  updateCart();
}


/* =========================
   UPDATE CART
========================= */

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");

  if (cartCount) {
    const totalItems = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? "flex" : "none";
  }

  if (cartItems) {
    if (!cart.length) {
      cartItems.innerHTML = `
        <div class="empty-cart">
          <p>Your cart is empty.</p>
          <button type="button" onclick="closeCart()">
            CONTINUE SHOPPING
          </button>
        </div>
      `;
    } else {
      cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">

          <img
            src="${item.image}"
            alt="${escapeHTML(item.name)}"
            onerror="imageFallback(this)"
          >

          <div class="cart-item-info">
            <h4>${escapeHTML(item.name)}</h4>

            <p>${formatPrice(item.price)}</p>

            <div class="cart-quantity">
              <button
                type="button"
                onclick="changeQuantity(${item.id}, -1)"
              >
                −
              </button>

              <span>${item.quantity}</span>

              <button
                type="button"
                onclick="changeQuantity(${item.id}, 1)"
              >
                +
              </button>
            </div>
          </div>

          <button
            class="cart-remove"
            type="button"
            onclick="removeFromCart(${item.id})"
            aria-label="Remove item"
          >
            ×
          </button>

        </div>
      `).join("");
    }
  }

  if (cartTotal) {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    cartTotal.textContent = formatPrice(total);
  }
}


/* =========================
   OPEN CART
========================= */

function openCart() {
  const overlay = document.getElementById("cartOverlay");
  const drawer = document.getElementById("cartDrawer");

  if (overlay) {
    overlay.classList.add("active");
  }

  if (drawer) {
    drawer.classList.add("active");
  }

  document.body.classList.add("cart-open");
}


function closeCart() {
  const overlay = document.getElementById("cartOverlay");
  const drawer = document.getElementById("cartDrawer");

  if (overlay) {
    overlay.classList.remove("active");
  }

  if (drawer) {
    drawer.classList.remove("active");
  }

  document.body.classList.remove("cart-open");
}


/* =========================
   SEARCH
========================= */

function openSearch() {
  const overlay = document.getElementById("searchOverlay");

  if (!overlay) {
    return;
  }

  overlay.classList.add("active");

  const input = document.getElementById("searchInput");

  if (input) {
    setTimeout(() => input.focus(), 100);
  }
}


function closeSearch() {
  const overlay = document.getElementById("searchOverlay");

  if (overlay) {
    overlay.classList.remove("active");
  }
}


function performSearch(query) {
  const results = document.getElementById("searchResults");

  if (!results) {
    return;
  }

  const searchTerm = query.trim().toLowerCase();

  if (!searchTerm) {
    results.innerHTML = "";
    return;
  }

  const matches = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.categoryLabel.toLowerCase().includes(searchTerm)
  );

  if (!matches.length) {
    results.innerHTML = `
      <div class="search-empty">
        No products found for "${escapeHTML(query)}".
      </div>
    `;
    return;
  }

  results.innerHTML = matches.map(product => `
    <button
      class="search-result"
      type="button"
      onclick="openProduct(${product.id}); closeSearch();"
    >
      <img
        src="${product.image}"
        alt="${escapeHTML(product.name)}"
        onerror="imageFallback(this)"
      >

      <span>
        <strong>${escapeHTML(product.name)}</strong>
        <small>${formatPrice(product.price)}</small>
      </span>
    </button>
  `).join("");
}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  if (!menu) {
    return;
  }

  menu.classList.toggle("active");
}


function closeMenu() {
  const menu = document.getElementById("mobileMenu");

  if (menu) {
    menu.classList.remove("active");
  }
}


/* =========================
   TOAST
========================= */

function showToast(message) {
  const toast = document.getElementById("toast");

  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("active");

  clearTimeout(window.zyvonToastTimer);

  window.zyvonToastTimer = setTimeout(() => {
    toast.classList.remove("active");
  }, 2500);
}


/* =========================
   NEWSLETTER
========================= */

function setupNewsletter() {
  const form = document.getElementById("newsletterForm");

  if (!form) {
    return;
  }

  form.addEventListener("submit", event => {
    event.preventDefault();

    const input = form.querySelector(
      'input[type="email"]'
    );

    if (!input) {
      return;
    }

    const email = input.value.trim();

    if (!email) {
      showToast("Enter your email address.");
      return;
    }

    showToast("You're on the ZYVON list.");

    form.reset();
  });
}


/* =========================
   CHECKOUT
========================= */

function checkout() {
  if (!cart.length) {
    showToast("Your cart is empty.");
    return;
  }

  showToast("Checkout is coming soon.");

  /*
    Later you can connect this button
    to Razorpay, Qikink or your payment system.
  */
}


/* =========================
   SIZE SELECTION
========================= */

function setupSizeButtons() {
  const modal = document.getElementById("productModal");

  if (!modal) {
    return;
  }

  const sizeButtons = modal.querySelectorAll(
    ".size-btn, [data-size]"
  );

  sizeButtons.forEach(button => {
    button.addEventListener("click", () => {
      sizeButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      if (currentProduct) {
        const size =
          button.dataset.size ||
          button.textContent.trim();

        const cartItem = cart.find(
          item => item.id === currentProduct.id
        );

        if (cartItem) {
          cartItem.size = size;
        }
      }
    });
  });
}


/* =========================
   MODAL / OVERLAY EVENTS
========================= */

function setupOverlayEvents() {
  const productModal = document.getElementById("productModal");

  if (productModal) {
    productModal.addEventListener("click", event => {
      if (
        event.target === productModal ||
        event.target.classList.contains("modal-overlay")
      ) {
        closeProduct();
      }
    });
  }

  const cartOverlay = document.getElementById("cartOverlay");

  if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCart);
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeProduct();
      closeCart();
      closeSearch();
      closeMenu();
    }
  });
}


/* =========================
   SEARCH INPUT
========================= */

function setupSearch() {
  const input = document.getElementById("searchInput");

  if (!input) {
    return;
  }

  input.addEventListener("input", event => {
    performSearch(event.target.value);
  });
}


/* =========================
   NAVIGATION
========================= */

function setupNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
}


/* =========================
   GLOBAL BUTTON SUPPORT
========================= */

function setupGlobalClicks() {

  /* Search buttons */
  document.querySelectorAll(
    '[data-action="search"], .search-btn'
  ).forEach(button => {
    button.addEventListener("click", openSearch);
  });


  /* Cart buttons */
  document.querySelectorAll(
    '[data-action="cart"], .cart-btn'
  ).forEach(button => {
    button.addEventListener("click", openCart);
  });


  /* Menu buttons */
  document.querySelectorAll(
    '[data-action="menu"], .menu-btn'
  ).forEach(button => {
    button.addEventListener("click", toggleMenu);
  });


  /* Close search */
  document.querySelectorAll(
    '[data-action="close-search"], .search-close'
  ).forEach(button => {
    button.addEventListener("click", closeSearch);
  });


  /* Close cart */
  document.querySelectorAll(
    '[data-action="close-cart"], .cart-close'
  ).forEach(button => {
    button.addEventListener("click", closeCart);
  });


  /* Close product */
  document.querySelectorAll(
    '[data-action="close-product"], .modal-close'
  ).forEach(button => {
    button.addEventListener("click", closeProduct);
  });


  /* Checkout */
  document.querySelectorAll(
    '[data-action="checkout"], .checkout-btn'
  ).forEach(button => {
    button.addEventListener("click", checkout);
  });
}


/* =========================
   INITIALIZE
========================= */

function initializeZYVON() {

  console.log("ZYVON: JavaScript loaded.");
  console.log(`ZYVON: ${products.length} products loaded.`);

  renderProducts("all");
  renderNewArrivals();

  setupFilters();
  setupNewsletter();
  setupSizeButtons();
  setupOverlayEvents();
  setupSearch();
  setupNavigation();
  setupGlobalClicks();

  updateCart();

  console.log("ZYVON: Store initialized successfully.");
}


/* =========================
   START
========================= */

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeZYVON
  );
} else {
  initializeZYVON();
}


/* =========================
   MAKE FUNCTIONS AVAILABLE
   TO INLINE HTML BUTTONS
========================= */

window.products = products;

window.openProduct = openProduct;
window.closeProduct = closeProduct;

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQuantity = changeQuantity;

window.openCart = openCart;
window.closeCart = closeCart;

window.openSearch = openSearch;
window.closeSearch = closeSearch;
window.performSearch = performSearch;

window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;

window.showToast = showToast;
window.checkout = checkout;

window.imageFallback = imageFallback;
