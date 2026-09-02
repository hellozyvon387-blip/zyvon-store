/* =========================================================
   ZYVON — COMPLETE SCRIPT.JS
   Premium Streetwear Store Front-End
========================================================= */

"use strict";

/* =========================================================
   PRODUCT DATA
   Existing working image URLs are preserved.
========================================================= */

const products = [
  /* ---------------- TEES ---------------- */
  {
    id: 1,
    name: "ZYVON CORE TEE",
    category: "tees",
    categoryName: "TEES",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    description: "Heavyweight everyday essential with a clean ZYVON silhouette."
  },
  {
    id: 2,
    name: "SHADOW TEE",
    category: "tees",
    categoryName: "TEES",
    price: 849,
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=900&q=85",
    description: "Minimal black streetwear essential designed for everyday wear."
  },
  {
    id: 3,
    name: "SIGNAL TEE",
    category: "tees",
    categoryName: "TEES",
    price: 899,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
    description: "Clean silhouette with a modern streetwear attitude."
  },
  {
    id: 4,
    name: "ESSENTIAL WHITE",
    category: "tees",
    categoryName: "TEES",
    price: 749,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    description: "A versatile everyday essential built around simplicity."
  },
  {
    id: 5,
    name: "ZYVON GRAPHIC",
    category: "tees",
    categoryName: "TEES",
    price: 949,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85",
    description: "Statement graphic styling with a contemporary streetwear feel."
  },

  /* ---------------- OVERSIZED ---------------- */
  {
    id: 6,
    name: "OVERSIZED SIGNAL",
    category: "oversized",
    categoryName: "OVERSIZED",
    price: 999,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    description: "Relaxed oversized silhouette built for effortless streetwear."
  },
  {
    id: 7,
    name: "BLACKOUT OVERSIZED",
    category: "oversized",
    categoryName: "OVERSIZED",
    price: 1099,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
    description: "Dark minimal styling with a strong oversized silhouette."
  },
  {
    id: 8,
    name: "DROP SHOULDER",
    category: "oversized",
    categoryName: "OVERSIZED",
    price: 1049,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
    description: "Modern drop-shoulder shape made for relaxed everyday looks."
  },
  {
    id: 9,
    name: "URBAN OVERSIZED",
    category: "oversized",
    categoryName: "OVERSIZED",
    price: 1149,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85",
    description: "Relaxed fit designed around modern urban styling."
  },
  {
    id: 10,
    name: "ZYVON RELAXED",
    category: "oversized",
    categoryName: "OVERSIZED",
    price: 1099,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=85",
    description: "Premium relaxed silhouette for an effortless daily fit."
  },

  /* ---------------- HOODIES ---------------- */
  {
    id: 11,
    name: "ZYVON HEAVY HOODIE",
    category: "hoodies",
    categoryName: "HOODIES",
    price: 1499,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
    description: "Heavyweight comfort with a clean modern profile."
  },
  {
    id: 12,
    name: "SHADOW HOODIE",
    category: "hoodies",
    categoryName: "HOODIES",
    price: 1599,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=85",
    description: "Premium everyday hoodie with a strong minimal aesthetic."
  },
  {
    id: 13,
    name: "CORE ZIP HOODIE",
    category: "hoodies",
    categoryName: "HOODIES",
    price: 1699,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
    description: "Clean zip-up layer designed for everyday streetwear."
  },
  {
    id: 14,
    name: "NIGHTFALL HOODIE",
    category: "hoodies",
    categoryName: "HOODIES",
    price: 1799,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=85",
    description: "Dark heavyweight styling made for cooler days."
  },
  {
    id: 15,
    name: "URBAN HEAVYWEIGHT",
    category: "hoodies",
    categoryName: "HOODIES",
    price: 1699,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    description: "Built around a modern heavyweight streetwear wardrobe."
  },

  /* ---------------- ACCESSORIES ---------------- */
  {
    id: 16,
    name: "ZYVON CAP",
    category: "accessories",
    categoryName: "ACCESSORIES",
    price: 599,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85",
    description: "Clean finishing piece for everyday streetwear fits."
  },
  {
    id: 17,
    name: "ZYVON TOTE",
    category: "accessories",
    categoryName: "ACCESSORIES",
    price: 699,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
    description: "Minimal utility with the unmistakable ZYVON attitude."
  },
  {
    id: 18,
    name: "CORE BAG",
    category: "accessories",
    categoryName: "ACCESSORIES",
    price: 799,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    description: "Everyday carry designed around clean modern utility."
  },
  {
    id: 19,
    name: "STREET CAP",
    category: "accessories",
    categoryName: "ACCESSORIES",
    price: 649,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=85",
    description: "Minimal cap designed to finish a modern streetwear look."
  },
  {
    id: 20,
    name: "UTILITY TOTE",
    category: "accessories",
    categoryName: "ACCESSORIES",
    price: 749,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    description: "Functional everyday tote with a modern utility aesthetic."
  }
];

/* =========================================================
   STATE
========================================================= */

let cart = [];
let selectedProduct = null;
let selectedSize = null;
let currentProducts = [...products];
let activeCategory = "all";

/* =========================================================
   HELPERS
========================================================= */

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(price);
}

function escapeHTML(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function isClothing(product) {
  return ["tees", "oversized", "hoodies"].includes(product.category);
}

/* =========================================================
   PRODUCT CARDS
========================================================= */

function createProductCard(product) {
  if (!product) return "";

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
          onerror="this.style.opacity='0.25';"
        >
        <span class="product-view">VIEW</span>
      </button>

      <div class="product-info">
        <div class="product-meta">
          <span>${escapeHTML(product.categoryName)}</span>
          <span>${formatPrice(product.price)}</span>
        </div>

        <h3>${escapeHTML(product.name)}</h3>

        <button
          class="product-add"
          type="button"
          onclick="openProduct(${product.id})"
        >
          QUICK VIEW +
        </button>
      </div>
    </article>
  `;
}

/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts(list = currentProducts) {
  const grid =
    $(".products-grid") ||
    $("#productGrid") ||
    $(".product-grid");

  if (!grid) return;

  currentProducts = [...list];

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-products">
        <div class="empty-products-mark">Z</div>
        <h3>NO RESULTS</h3>
        <p>We couldn't find anything matching your search.</p>
        <button type="button" onclick="filterProducts('all')">
          VIEW ALL PRODUCTS
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(createProductCard).join("");
}

function renderNewProducts() {
  const container =
    $(".new-products-grid") ||
    $("#newProducts") ||
    $(".new-arrivals-grid");

  if (!container) return;

  const newProducts = products.slice(0, 6);

  container.innerHTML = newProducts
    .map(createProductCard)
    .join("");
}

/* =========================================================
   FILTERS
========================================================= */

function filterProducts(category, button = null) {
  activeCategory = String(category || "all").toLowerCase();

  if (activeCategory === "all") {
    currentProducts = [...products];
  } else {
    currentProducts = products.filter(
      product => product.category === activeCategory
    );
  }

  $$(".filter-btn, .filter-button, [data-filter]").forEach(btn => {
    btn.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  } else {
    $$(".filter-btn, .filter-button, [data-filter]").forEach(btn => {
      const value =
        btn.dataset.filter ||
        btn.dataset.category ||
        btn.getAttribute("data-category");

      if (value && value.toLowerCase() === activeCategory) {
        btn.classList.add("active");
      }
    });
  }

  renderProducts(currentProducts);

  const shop = $("#shop");
  if (shop && category !== "all") {
    shop.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

/* =========================================================
   PRODUCT MODAL
========================================================= */

function openProduct(id) {
  const product = products.find(item => item.id === Number(id));

  if (!product) return;

  selectedProduct = product;
  selectedSize = null;

  const modal = $("#productModal") || $(".product-modal");

  if (!modal) {
    addSelectedProductToCartFallback(product);
    return;
  }

  const image = modal.querySelector(".modal-product-image, .product-modal-image");
  const name = modal.querySelector(".modal-product-name, .product-modal-name");
  const category = modal.querySelector(".modal-product-category, .product-modal-category");
  const price = modal.querySelector(".modal-product-price, .product-modal-price");
  const description = modal.querySelector(".modal-product-description, .product-modal-description");

  if (image) {
    image.src = product.image;
    image.alt = product.name;
  }

  if (name) name.textContent = product.name;
  if (category) category.textContent = product.categoryName;
  if (price) price.textContent = formatPrice(product.price);
  if (description) description.textContent = product.description;

  const sizeArea =
    modal.querySelector(".size-selector") ||
    modal.querySelector(".product-sizes") ||
    modal.querySelector(".sizes");

  if (sizeArea) {
    if (isClothing(product)) {
      sizeArea.innerHTML = `
        <div class="size-title">SELECT SIZE</div>
        <div class="size-options">
          ${["S", "M", "L", "XL"]
            .map(size => `
              <button
                type="button"
                class="size-btn"
                onclick="selectSize('${size}', this)"
              >
                ${size}
              </button>
            `)
            .join("")}
        </div>
      `;
    } else {
      sizeArea.innerHTML = `
        <div class="size-title">ONE SIZE</div>
      `;
    }
  }

  modal.classList.add("active");
  modal.classList.add("open");
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  const modal = $("#productModal") || $(".product-modal");

  if (modal) {
    modal.classList.remove("active");
    modal.classList.remove("open");
  }

  selectedProduct = null;
  selectedSize = null;

  document.body.classList.remove("modal-open");
}

function selectSize(size, button) {
  selectedSize = size;

  $$(".size-btn").forEach(btn => {
    btn.classList.remove("selected");
    btn.classList.remove("active");
  });

  if (button) {
    button.classList.add("selected");
    button.classList.add("active");
  }
}

/* =========================================================
   CART
========================================================= */

function addSelectedProductToCart() {
  if (!selectedProduct) {
    showToast("Select a product first");
    return;
  }

  if (isClothing(selectedProduct) && !selectedSize) {
    showToast("Please select a size");
    return;
  }

  const size = isClothing(selectedProduct)
    ? selectedSize
    : "ONE SIZE";

  const existing = cart.find(
    item =>
      item.id === selectedProduct.id &&
      item.size === size
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.image,
      size,
      quantity: 1
    });
  }

  saveCart();
  updateCart();

  showToast(`${selectedProduct.name} added to cart`);

  closeProductModal();
}

function addSelectedProductToCartFallback(product) {
  if (!product) return;

  const size = isClothing(product) ? "M" : "ONE SIZE";

  const existing = cart.find(
    item =>
      item.id === product.id &&
      item.size === size
  );

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      quantity: 1
    });
  }

  saveCart();
  updateCart();
  showToast(`${product.name} added to cart`);
}

function saveCart() {
  try {
    localStorage.setItem("zyvon_cart", JSON.stringify(cart));
  } catch (error) {
    console.warn("Could not save cart:", error);
  }
}

function loadCart() {
  try {
    const saved = localStorage.getItem("zyvon_cart");

    if (saved) {
      const parsed = JSON.parse(saved);

      if (Array.isArray(parsed)) {
        cart = parsed;
      }
    }
  } catch (error) {
    cart = [];
    console.warn("Could not load cart:", error);
  }
}

/* =========================================================
   CART RENDER
========================================================= */

function updateCart() {
  const count = cart.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * Number(item.quantity || 0),
    0
  );

  const countElements = $$(".cart-count, #cartCount, [data-cart-count]");

  countElements.forEach(element => {
    element.textContent = count;
    element.classList.toggle("has-items", count > 0);
  });

  const totalElements = $$(".cart-total, #cartTotal, [data-cart-total]");

  totalElements.forEach(element => {
    element.textContent = formatPrice(total);
  });

  const subtotalElements = $$(".cart-subtotal, #cartSubtotal");

  subtotalElements.forEach(element => {
    element.textContent = formatPrice(total);
  });

  renderCartItems();
}

function renderCartItems() {
  const container =
    $(".cart-items") ||
    $("#cartItems") ||
    $(".cart-products");

  if (!container) return;

  if (!cart.length) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-mark">Z</div>
        <h3>YOUR CART IS EMPTY</h3>
        <p>Start building your ZYVON collection.</p>
        <button type="button" onclick="closeCart(); scrollToShop();">
          SHOP NOW →
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = cart
    .map(item => `
      <div class="cart-item">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${escapeHTML(item.name)}">
        </div>

        <div class="cart-item-info">
          <h4>${escapeHTML(item.name)}</h4>
          <span class="cart-item-size">${escapeHTML(item.size)}</span>
          <strong>${formatPrice(item.price)}</strong>

          <div class="cart-item-controls">
            <button
              type="button"
              onclick="changeQuantity(${item.id}, '${item.size}', -1)"
            >
              −
            </button>

            <span>${item.quantity}</span>

            <button
              type="button"
              onclick="changeQuantity(${item.id}, '${item.size}', 1)"
            >
              +
            </button>

            <button
              class="cart-remove"
              type="button"
              onclick="removeFromCart(${item.id}, '${item.size}')"
            >
              REMOVE
            </button>
          </div>
        </div>
      </div>
    `)
    .join("");
}

function changeQuantity(id, size, amount) {
  const item = cart.find(
    product =>
      product.id === Number(id) &&
      product.size === size
  );

  if (!item) return;

  item.quantity += Number(amount);

  if (item.quantity <= 0) {
    cart = cart.filter(
      product =>
        !(
          product.id === Number(id) &&
          product.size === size
        )
    );

    showToast("Item removed from cart");
  }

  saveCart();
  updateCart();
}

function removeFromCart(id, size) {
  cart = cart.filter(
    item =>
      !(
        item.id === Number(id) &&
        item.size === size
      )
  );

  saveCart();
  updateCart();

  showToast("Item removed from cart");
}

/* =========================================================
   CART DRAWER
========================================================= */

function openCart() {
  const cartDrawer =
    $("#cartDrawer") ||
    $(".cart-drawer") ||
    $(".cart-panel");

  const overlay =
    $("#cartOverlay") ||
    $(".cart-overlay");

  if (cartDrawer) {
    cartDrawer.classList.add("active");
    cartDrawer.classList.add("open");
  }

  if (overlay) {
    overlay.classList.add("active");
    overlay.classList.add("open");
  }

  document.body.classList.add("cart-open");
  updateCart();
}

function closeCart() {
  const cartDrawer =
    $("#cartDrawer") ||
    $(".cart-drawer") ||
    $(".cart-panel");

  const overlay =
    $("#cartOverlay") ||
    $(".cart-overlay");

  if (cartDrawer) {
    cartDrawer.classList.remove("active");
    cartDrawer.classList.remove("open");
  }

  if (overlay) {
    overlay.classList.remove("active");
    overlay.classList.remove("open");
  }

  document.body.classList.remove("cart-open");
}

/* =========================================================
   SEARCH
========================================================= */

function openSearch() {
  const search =
    $("#searchOverlay") ||
    $(".search-overlay");

  if (!search) return;

  search.classList.
