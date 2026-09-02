/* =========================================================
   ZYVON — MAIN JAVASCRIPT
   20 PRODUCTS / 5 PER CATEGORY
   ========================================================= */

const products = [

  // =========================
  // TEES
  // =========================

  {
    id: 1,
    name: "Core Black Tee",
    category: "tees",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 2,
    name: "Essential White Tee",
    category: "tees",
    price: 749,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 3,
    name: "Shadow Black Tee",
    category: "tees",
    price: 849,
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 4,
    name: "Urban White Tee",
    category: "tees",
    price: 799,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 5,
    name: "Minimal Black Tee",
    category: "tees",
    price: 899,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=80"
  },


  // =========================
  // OVERSIZED
  // =========================

  {
    id: 6,
    name: "Oversized Graphite",
    category: "oversized",
    price: 999,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 7,
    name: "Heavy Oversized Tee",
    category: "oversized",
    price: 1099,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 8,
    name: "Street Oversized",
    category: "oversized",
    price: 1049,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 9,
    name: "Relaxed Fit Black",
    category: "oversized",
    price: 999,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 10,
    name: "ZYVON Wide Fit",
    category: "oversized",
    price: 1149,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80"
  },


  // =========================
  // HOODIES
  // =========================

  {
    id: 11,
    name: "Core Black Hoodie",
    category: "hoodies",
    price: 1499,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 12,
    name: "Essential Grey Hoodie",
    category: "hoodies",
    price: 1599,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 13,
    name: "Heavyweight Hoodie",
    category: "hoodies",
    price: 1799,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 14,
    name: "Street Black Hoodie",
    category: "hoodies",
    price: 1699,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 15,
    name: "Premium Pullover",
    category: "hoodies",
    price: 1899,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80"
  },


  // =========================
  // ACCESSORIES
  // =========================

  {
    id: 16,
    name: "ZYVON Black Cap",
    category: "accessories",
    price: 599,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 17,
    name: "Daily Tote",
    category: "accessories",
    price: 699,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 18,
    name: "Urban Backpack",
    category: "accessories",
    price: 1299,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 19,
    name: "Classic Accessories",
    category: "accessories",
    price: 799,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 20,
    name: "Everyday Carry",
    category: "accessories",
    price: 899,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80"
  }

];


// =========================================================
// STATE
// =========================================================

let cart = JSON.parse(localStorage.getItem("zyvonCart")) || [];
let selectedProduct = null;
let selectedSize = null;
let activeCategory = "all";
let currentProducts = [...products];


// =========================================================
// ELEMENTS
// =========================================================

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");


// =========================================================
// FORMAT PRICE
// =========================================================

function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}


// =========================================================
// PRODUCT CARD
// =========================================================

function createProductCard(product) {

  return `
    <article class="product-card">

      <div class="product-image-wrap">

        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80';"
        >

        <button
          class="quick-add"
          onclick="openProduct(${product.id})"
        >
          QUICK VIEW
        </button>

      </div>

      <div class="product-info">

        <div>
          <h3>${product.name}</h3>
          <p>${formatPrice(product.price)}</p>
        </div>

        <button
          class="product-arrow"
          onclick="openProduct(${product.id})"
          aria-label="View ${product.name}"
        >
          →
        </button>

      </div>

    </article>
  `;
}


// =========================================================
// RENDER PRODUCTS
// =========================================================

function renderProducts(list = currentProducts) {

  if (!productGrid) return;

  if (list.length === 0) {

    productGrid.innerHTML = `
      <div class="empty-products">
        <h3>No products found.</h3>
        <p>Try another search or category.</p>
      </div>
    `;

    return;
  }

  productGrid.innerHTML = list
    .map(product => createProductCard(product))
    .join("");
}


// =========================================================
// FILTER PRODUCTS
// =========================================================

function filterProducts(category) {

  activeCategory = category;

  if (category === "all") {
    currentProducts = [...products];
  } else {
    currentProducts = products.filter(
      product => product.category === category
    );
  }

  renderProducts(currentProducts);

  document.querySelectorAll(".filter-btn").forEach(button => {

    const buttonCategory =
      button.dataset.category ||
      button.dataset.filter;

    button.classList.toggle(
      "active",
      buttonCategory === category
    );

  });
}


// =========================================================
// FILTER BUTTONS
// =========================================================

document.addEventListener("click", function(event) {

  const button = event.target.closest(".filter-btn");

  if (!button) return;

  const category =
    button.dataset.category ||
    button.dataset.filter ||
    "all";

  filterProducts(category);

});


// =========================================================
// OPEN PRODUCT MODAL
// =========================================================

function openProduct(productId) {

  const product = products.find(
    item => item.id === productId
  );

  if (!product) return;

  selectedProduct = product;
  selectedSize = null;

  const modal = document.getElementById("productModal");

  if (!modal) return;

  const image = modal.querySelector(".modal-image");
  const title = modal.querySelector(".modal-title");
  const price = modal.querySelector(".modal-price");
  const description = modal.querySelector(".modal-description");

  if (image) {
    image.src = product.image;
    image.alt = product.name;

    image.onerror = function() {
      this.onerror = null;
      this.src =
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80";
    };
  }

  if (title) {
    title.textContent = product.name;
  }

  if (price) {
    price.textContent = formatPrice(product.price);
  }

  if (description) {
    description.textContent =
      "A clean ZYVON essential designed for everyday streetwear.";
  }

  document
    .querySelectorAll(".size-btn")
    .forEach(button => {
      button.classList.remove("active");
    });

  modal.classList.add("active");
  document.body.classList.add("modal-open");
}


// =========================================================
// CLOSE PRODUCT MODAL
// =========================================================

function closeProduct() {

  const modal = document.getElementById("productModal");

  if (!modal) return;

  modal.classList.remove("active");
  document.body.classList.remove("modal-open");

  selectedProduct = null;
  selectedSize = null;
}


// =========================================================
// SIZE SELECTION
// =========================================================

document.addEventListener("click", function(event) {

  const sizeButton = event.target.closest(".size-btn");

  if (!sizeButton) return;

  selectedSize = sizeButton.dataset.size ||
                sizeButton.textContent.trim();

  document
    .querySelectorAll(".size-btn")
    .forEach(button => {
      button.classList.remove("active");
    });

  sizeButton.classList.add("active");

});


// =========================================================
// ADD TO CART
// =========================================================

function addToCart(product = selectedProduct) {

  if (!product) return;

  const category =
    product.category === "accessories"
      ? "one-size"
      : (selectedSize || "M");

  const existingItem = cart.find(item =>
    item.id === product.id &&
    item.size === category
  );

  if (existingItem) {

    existingItem.quantity += 1;

  } else {

    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: category,
      quantity: 1
    });

  }

  saveCart();
  updateCart();

  closeProduct();

  showToast(`${product.name} added to cart`);
}


// =========================================================
// SAVE CART
// =========================================================

function saveCart() {

  localStorage.setItem(
    "zyvonCart",
    JSON.stringify(cart)
  );

}


// =========================================================
// UPDATE CART
// =========================================================

function updateCart() {

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (cartCount) {
    cartCount.textContent = totalQuantity;
  }

  if (!cartItems) return;

  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="empty-cart">
        <p>Your cart is empty.</p>
        <button
          class="primary-btn"
          onclick="closeCart(); scrollToShop();"
        >
          SHOP NOW
        </button>
      </div>
    `;

  } else {

    cartItems.innerHTML = cart
      .map(createCartItem)
      .join("");

  }

  updateCartTotal();

}


// =========================================================
// CART ITEM
// =========================================================

function createCartItem(item) {

  return `
    <div class="cart-item">

      <img
        src="${item.image}"
        alt="${item.name}"
        onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80';"
      >

      <div class="cart-item-info">

        <h4>${item.name}</h4>

        <p>${formatPrice(item.price)}</p>

        <small>Size: ${item.size}</small>

        <div class="quantity-controls">

          <button onclick="changeQuantity(${item.id}, '${item.size}', -1)">
            −
          </button>

          <span>${item.quantity}</span>

          <button onclick="changeQuantity(${item.id}, '${item.size}', 1)">
            +
          </button>

        </div>

      </div>

      <button
        class="remove-item"
        onclick="removeFromCart(${item.id}, '${item.size}')"
        aria-label="Remove ${item.name}"
      >
        ×
      </button>

    </div>
  `;
}


// =========================================================
// CHANGE QUANTITY
// =========================================================

function changeQuantity(id, size, change) {

  const item = cart.find(
    product =>
      product.id === id &&
      product.size === size
  );

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {

    cart = cart.filter(
      product =>
        !(
          product.id === id &&
          product.size === size
        )
    );

  }

  saveCart();
  updateCart();

}


// =========================================================
// REMOVE FROM CART
// =========================================================

function removeFromCart(id, size) {

  cart = cart.filter(
    item =>
      !(
        item.id === id &&
        item.size === size
      )
  );

  saveCart();
  updateCart();

  showToast("Item removed from cart");

}


// =========================================================
// CART TOTAL
// =========================================================

function updateCartTotal() {

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  if (cartTotal) {
    cartTotal.textContent = formatPrice(total);
  }

}


// =========================================================
// OPEN CART
// =========================================================

function openCart() {

  const drawer = document.getElementById("cartDrawer");

  if (!drawer) return;

  drawer.classList.add("active");
  document.body.classList.add("cart-open");

}


// =========================================================
// CLOSE CART
// =========================================================

function closeCart() {

  const drawer = document.getElementById("cartDrawer");

  if (!drawer) return;

  drawer.classList.remove("active");
  document.body.classList.remove("cart-open");

}


// =========================================================
// SEARCH
// =========================================================

function openSearch() {

  const overlay = document.getElementById("searchOverlay");

  if (!overlay) return;

  overlay.classList.add("active");

  const input =
    overlay.querySelector("input");

  if (input) {
    setTimeout(() => input.focus(), 100);
  }

}


function closeSearch() {

  const overlay = document.getElementById("searchOverlay");

  if (!overlay) return;

  overlay.classList.remove("active");

}


// =========================================================
// SEARCH PRODUCTS
// =========================================================

function searchProducts(query) {

  const searchTerm =
    query.toLowerCase().trim();

  if (!searchTerm) {

    currentProducts =
      activeCategory === "all"
        ? [...products]
        : products.filter(
            product =>
              product.category === activeCategory
          );

  } else {

    currentProducts = products.filter(product => {

      const searchableText =
        `${product.name} ${product.category}`.toLowerCase();

      return searchableText.includes(searchTerm);

    });

  }

  renderProducts(currentProducts);

}


// =========================================================
// SEARCH INPUT
// =========================================================

document.addEventListener("input", function(event) {

  if (
    event.target.matches("#searchInput") ||
    event.target.matches(".search-input")
  ) {

    searchProducts(event.target.value);

  }

});


// =========================================================
// MOBILE MENU
// =========================================================

function toggleMenu() {

  const menu =
    document.getElementById("mobileMenu");

  if (!menu) return;

  menu.classList.toggle("active");

  document.body.classList.toggle(
    "menu-open"
  );

}


function closeMenu() {

  const menu =
    document.getElementById("mobileMenu");

  if (!menu) return;

  menu.classList.remove("active");

  document.body.classList.remove(
    "menu-open"
  );

}


// =========================================================
// SCROLL TO SHOP
// =========================================================

function scrollToShop() {

  const shop =
    document.getElementById("shop");

  if (!shop) return;

  shop.scrollIntoView({
    behavior: "smooth"
  });

}


// =========================================================
// NEWSLETTER
// =========================================================

function subscribeNewsletter(event) {

  if (event) {
    event.preventDefault();
  }

  const input =
    document.querySelector(
      ".newsletter-input"
    );

  if (!input || !input.value.trim()) {

    showToast("Enter your email first");

    return;

  }

  showToast(
    "You're on the ZYVON list."
  );

  input.value = "";

}


// =========================================================
// CHECKOUT
// =========================================================

function checkout() {

  if (cart.length === 0) {

    showToast("Your cart is empty");

    return;

  }

  showToast(
    "Checkout is ready to connect to your payment gateway."
  );

}


// =========================================================
// TOAST
// =========================================================

function showToast(message) {

  let toast =
    document.getElementById("toast");

  if (!toast) {

    toast =
      document.createElement("div");

    toast.id = "toast";
    toast.className = "toast";

    document.body.appendChild(toast);

  }

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(
    window.zyvonToastTimer
  );

  window.zyvonToastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 2500);

}


// =========================================================
// ESCAPE KEY
// =========================================================

document.addEventListener("keydown", function(event) {

  if (event.key !== "Escape") return;

  closeProduct();
  closeSearch();
  closeCart();
  closeMenu();

});


// =========================================================
// CLOSE MODALS WHEN CLICKING OUTSIDE
// =========================================================

document.addEventListener("click", function(event) {

  const modal =
    document.getElementById("productModal");

  if (
    modal &&
    event.target === modal
  ) {

    closeProduct();

  }

});


// =========================================================
// NAVIGATION LINKS
// =========================================================

document.addEventListener("click", function(event) {

  const link =
    event.target.closest("a[href^='#']");

  if (!link) return;

  const targetId =
    link.getAtt
