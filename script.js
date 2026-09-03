/* =========================================================
   ZYVON — SCRIPT.JS
   Complete replacement
   Product images + filters + search + cart + modal
========================================================= */

const products = [
  {
    id: 1,
    name: "Essential Black Tee",
    category: "tees",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    description: "A clean everyday streetwear essential."
  },
  {
    id: 2,
    name: "Urban White Tee",
    category: "tees",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
    description: "Minimal design with a modern streetwear feel."
  },
  {
    id: 3,
    name: "Oversized Street Tee",
    category: "oversized",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    description: "Relaxed oversized fit built for everyday wear."
  },
  {
    id: 4,
    name: "Classic Oversized",
    category: "oversized",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
    description: "A simple oversized silhouette with a premium look."
  },
  {
    id: 5,
    name: "ZYVON Heavy Hoodie",
    category: "hoodies",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
    description: "Heavyweight hoodie designed for a bold streetwear look."
  },
  {
    id: 6,
    name: "Minimal Hoodie",
    category: "hoodies",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=85",
    description: "Clean minimal hoodie for everyday styling."
  },
  {
    id: 7,
    name: "Streetwear Cap",
    category: "accessories",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85",
    description: "Minimal embroidered-style streetwear cap."
  },
  {
    id: 8,
    name: "Classic Tote Bag",
    category: "accessories",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    description: "Simple everyday tote with a clean streetwear aesthetic."
  }
];

/* =========================================================
   ELEMENTS
========================================================= */

const productGrid = document.getElementById("productGrid");
const newProducts = document.getElementById("newProducts");

const productModal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalCategory = document.getElementById("modalCategory");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");

const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

const toast = document.getElementById("toast");

const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

/* =========================================================
   CART
========================================================= */

let cart = JSON.parse(localStorage.getItem("zyvonCart")) || [];

function saveCart() {
  localStorage.setItem("zyvonCart", JSON.stringify(cart));
}

/* =========================================================
   FORMAT PRICE
========================================================= */

function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product) {
  return `
    <article class="product-card" data-id="${product.id}">
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/900x1100/f1f1f1/111111?text=ZYVON';"
        >

        <button
          class="product-view"
          onclick="openProduct(${product.id})"
          aria-label="View ${product.name}"
        >
          VIEW
        </button>
      </div>

      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${formatPrice(product.price)}</p>
      </div>
    </article>
  `;
}

/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts(list = products) {
  if (!productGrid) return;

  productGrid.innerHTML = list.map(createProductCard).join("");
}

/* =========================================================
   NEW ARRIVALS
========================================================= */

function renderNewArrivals() {
  if (!newProducts) return;

  const latest = products.slice(0, 4);

  newProducts.innerHTML = latest.map(createProductCard).join("");
}

/* =========================================================
   FILTERS
========================================================= */

function setupFilters() {
  const filterButtons = document.querySelectorAll("[data-filter]");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      if (filter === "all") {
        renderProducts(products);
      } else {
        const filtered = products.filter(
          product => product.category === filter
        );

        renderProducts(filtered);
      }
    });
  });
}

/* =========================================================
   PRODUCT MODAL
========================================================= */

function openProduct(id) {
  const product = products.find(item => item.id === id);

  if (!product || !productModal) return;

  if (modalImage) {
    modalImage.src = product.image;
    modalImage.alt = product.name;

    modalImage.onerror = function () {
      this.onerror = null;
      this.src =
        "https://placehold.co/900x1100/f1f1f1/111111?text=ZYVON";
    };
  }

  if (modalName) modalName.textContent = product.name;
  if (modalCategory) modalCategory.textContent = product.category;
  if (modalPrice) modalPrice.textContent = formatPrice(product.price);
  if (modalDescription) modalDescription.textContent = product.description;

  productModal.classList.add("active");
  document.body.classList.add("modal-open");

  productModal.dataset.productId = product.id;
}

function closeProduct() {
  if (!productModal) return;

  productModal.classList.remove("active");
  document.body.classList.remove("modal-open");
}

window.openProduct = openProduct;
window.closeProduct = closeProduct;

/* =========================================================
   MODAL CLOSE
========================================================= */

document.addEventListener("click", event => {
  if (!productModal) return;

  if (
    event.target.matches("[data-close-modal]") ||
    event.target === productModal
  ) {
    closeProduct();
  }
});

/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(id) {
  const product = products.find(item => item.id === id);

  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart();
  renderCart();
  showToast(`${product.name} added to cart`);

  closeProduct();
}

/* =========================================================
   MODAL ADD BUTTON
========================================================= */

document.addEventListener("click", event => {
  const button = event.target.closest("[data-add-cart]");

  if (!button) return;

  const id = Number(productModal?.dataset.productId);

  if (id) {
    addToCart(id);
  }
});

/* =========================================================
   CART RENDER
========================================================= */

function renderCart() {
  if (!cartItems || !cartTotal) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <p>Your cart is empty.</p>
      </div>
    `;

    cartTotal.textContent = "₹0";
    updateCartCount();
    return;
  }

  cartItems.innerHTML = cart
    .map(item => {
      return `
        <div class="cart-item">

          <img
            src="${item.image}"
            alt="${item.name}"
            onerror="this.onerror=null;this.src='https://placehold.co/200x250/f1f1f1/111111?text=ZYVON';"
          >

          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <p>${formatPrice(item.price)}</p>

            <div class="cart-controls">
              <button onclick="changeQuantity(${item.id}, -1)">−</button>
              <span>${item.quantity}</span>
              <button onclick="changeQuantity(${item.id}, 1)">+</button>
            </div>
          </div>

          <button
            class="cart-remove"
            onclick="removeFromCart(${item.id})"
            aria-label="Remove ${item.name}"
          >
            ×
          </button>

        </div>
      `;
    })
    .join("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  cartTotal.textContent = formatPrice(total);

  updateCartCount();
}

/* =========================================================
   QUANTITY
========================================================= */

function changeQuantity(id, amount) {
  const item = cart.find(product => product.id === id);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== id);
  }

  saveCart();
  renderCart();
}

window.changeQuantity = changeQuantity;

/* =========================================================
   REMOVE CART ITEM
========================================================= */

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);

  saveCart();
  renderCart();
}

window.removeFromCart = removeFromCart;

/* =========================================================
   CART COUNT
========================================================= */

function updateCartCount() {
  const count = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  document.querySelectorAll(".cart-count").forEach(element => {
    element.textContent = count;
    element.style.display = count > 0 ? "flex" : "none";
  });
}

/* =========================================================
   OPEN / CLOSE CART
========================================================= */

function openCart() {
  if (!cartOverlay) return;

  cartOverlay.classList.add("active");
  document.body.classList.add("cart-open");

  renderCart();
}

function closeCart() {
  if (!cartOverlay) return;

  cartOverlay.classList.remove("active");
  document.body.classList.remove("cart-open");
}

window.openCart = openCart;
window.closeCart = closeCart;

/* =========================================================
   CART BUTTONS
========================================================= */

document.addEventListener("click", event => {
  const cartButton = event.target.closest(
    "#cartButton, .cart-button, [data-cart]"
  );

  if (cartButton) {
    openCart();
  }

  const closeButton = event.target.closest(
    "#closeCart, [data-close-cart]"
  );

  if (closeButton) {
    closeCart();
  }

  if (event.target === cartOverlay) {
    closeCart();
  }
});

/* =========================================================
   SEARCH
========================================================= */

function openSearch() {
  if (!searchOverlay) return;

  searchOverlay.classList.add("active");

  setTimeout(() => {
    searchInput?.focus();
  }, 100);
}

function closeSearch() {
  if (!searchOverlay) return;

  searchOverlay.classList.remove("active");

  if (searchInput) {
    searchInput.value = "";
  }

  if (searchResults) {
    searchResults.innerHTML = "";
  }
}

window.openSearch = openSearch;
window.closeSearch = closeSearch;

/* =========================================================
   SEARCH RESULTS
========================================================= */

function searchProducts(query) {
  const text = query.trim().toLowerCase();

  if (!searchResults) return;

  if (!text) {
    searchResults.innerHTML = "";
    return;
  }

  const results = products.filter(product => {
    return (
      product.name.toLowerCase().includes(text) ||
      product.category.toLowerCase().includes(text)
    );
  });

  if (results.length === 0) {
    searchResults.innerHTML = `
      <div class="search-empty">
        No products found.
      </div>
    `;
    return;
  }

  searchResults.innerHTML = results
    .map(product => {
      return `
        <button
          class="search-result"
          onclick="openProduct(${product.id}); closeSearch();"
        >
          <img
            src="${product.image}"
            alt="${product.name}"
            onerror="this.onerror=null;this.src='https://placehold.co/120x150/f1f1f1/111111?text=ZYVON';"
          >

          <span>
            <strong>${product.name}</strong>
            <small>${formatPrice(product.price)}</small>
          </span>
        </button>
      `;
    })
    .join("");
}

if (searchInput) {
  searchInput.addEventListener("input", event => {
    searchProducts(event.target.value);
  });
}

/* =========================================================
   TOAST
========================================================= */

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("active");

  clearTimeout(window.zyvonToastTimer);

  window.zyvonToastTimer = setTimeout(() => {
    toast.classList.remove("active");
  }, 2500);
}

/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

function toggleMobileMenu() {
  if (!mobileMenu) return;

  mobileMenu.classList.toggle("active
