/* =========================================================
   ZYVON — SCRIPT.JS
   Complete E-Commerce JavaScript
========================================================= */

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
   GLOBAL STATE
========================= */

let cart = JSON.parse(localStorage.getItem("zyvonCart")) || [];
let selectedProduct = null;
let selectedSize = "M";
let selectedQuantity = 1;


/* =========================
   DOM ELEMENTS
========================= */

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


/* =========================
   HELPERS
========================= */

function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.zyvonToastTimer);

  window.zyvonToastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


/* =========================
   PRODUCT CARD
========================= */

function createProductCard(product) {
  return `
    <article class="product-card" data-category="${product.category}">

      <div class="product-image-wrap">

        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
          loading="eager"
          decoding="async"
          draggable="false"
        >

        <div class="product-actions">

          <button
            type="button"
            class="add-cart-btn"
            onclick="openProduct(${product.id})"
          >
            QUICK ADD
          </button>

          <button
            type="button"
            class="buy-now-btn"
            onclick="openProduct(${product.id})"
          >
            BUY NOW
          </button>

        </div>

      </div>

      <div class="product-info">

        <span class="product-category">
          ${product.categoryLabel}
        </span>

        <h3>${product.name}</h3>

        <div class="product-bottom">

          <strong>${formatPrice(product.price)}</strong>

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


/* =========================
   RENDER PRODUCTS
========================= */

function renderProducts() {
  if (productGrid) {
    productGrid.innerHTML = products
      .map(createProductCard)
      .join("");
  }

  if (newProducts) {
    newProducts.innerHTML = products
      .slice(0, 5)
      .map(createProductCard)
      .join("");
  }

  if (bestProducts) {
    bestProducts.innerHTML = products
      .slice(5, 10)
      .map(createProductCard)
      .join("");
  }
}


/* =========================
   IMAGE SAFETY
========================= */

document.addEventListener("error", function (event) {

  if (
    event.target &&
    event.target.tagName === "IMG" &&
    event.target.classList.contains("product-image")
  ) {
    event.target.style.display = "block";
    event.target.style.visibility = "visible";
    event.target.style.opacity = "1";
  }

}, true);


/* =========================
   PRODUCT MODAL
========================= */

function openProduct(productId) {

  const product = products.find(item => item.id === productId);

  if (!product || !productModal) return;

  selectedProduct = product;
  selectedSize = "M";
  selectedQuantity = 1;

  modalImage.src = product.image;
  modalImage.alt = product.name;

  modalCategory.textContent = product.categoryLabel;
  modalName.textContent = product.name;
  modalPrice.textContent = formatPrice(product.price);
  modalDescription.textContent = product.description;

  if (quantityValue) {
    quantityValue.textContent = selectedQuantity;
  }

  document.querySelectorAll(".size-btn").forEach(button => {
    button.classList.remove("active");

    if (button.textContent.trim() === "M") {
      button.classList.add("active");
    }
  });

  productModal.classList.add("active");
  document.body.classList.add("modal-open");
}


function closeProduct() {

  if (!productModal) return;

  productModal.classList.remove("active");
  document.body.classList.remove("modal-open");

  selectedProduct = null;
}


/* =========================
   SIZE SELECTION
========================= */

document.addEventListener("click", function (event) {

  const sizeButton = event.target.closest(".size-btn");

  if (!sizeButton) return;

  document.querySelectorAll(".size-btn").forEach(button => {
    button.classList.remove("active");
  });

  sizeButton.classList.add("active");

  selectedSize = sizeButton.textContent.trim();
});


/* =========================
   QUANTITY
========================= */

if (quantityMinus) {
  quantityMinus.addEventListener("click", () => {

    if (selectedQuantity > 1) {
      selectedQuantity--;
      quantityValue.textContent = selectedQuantity;
    }

  });
}


if (quantityPlus) {
  quantityPlus.addEventListener("click", () => {

    if (selectedQuantity < 10) {
      selectedQuantity++;
      quantityValue.textContent = selectedQuantity;
    }

  });
}


/* =========================
   ADD TO CART
========================= */

function addToCart(product, size, quantity) {

  const existingItem = cart.find(item =>
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


function saveCart() {
  localStorage.setItem("zyvonCart", JSON.stringify(cart));
}


/* =========================
   MODAL ADD CART
========================= */

if (modalAddCart) {

  modalAddCart.addEventListener("click", () => {

    if (!selectedProduct) return;

    addToCart(
      selectedProduct,
      selectedSize,
      selectedQuantity
    );

    showToast(`${selectedProduct.name} added to cart`);

    closeProduct();
    openCart();

  });

}


/* =========================
   BUY NOW
========================= */

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


/* =========================
   CART UI
========================= */

function updateCartUI() {

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartCount) {
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? "flex" : "none";
  }

  if (cartTotal) {
    cartTotal.textContent = formatPrice(totalPrice);
  }

  if (!cartItems) return;

  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="empty-cart">
        <h3>Your cart is empty</h3>
        <p>Discover something from ZYVON.</p>
        <button type="button" onclick="closeCartDrawer()">
          START SHOPPING
        </button>
      </div>
    `;

    return;
  }

  cartItems.innerHTML = cart.map((item, index) => {

    return `
      <div class="cart-item">

        <img
          src="${item.image}"
          alt="${item.name}"
          class="cart-item-image"
        >

        <div class="cart-item-info">

          <h4>${item.name}</h4>

          <p>Size: ${item.size}</p>

          <strong>${formatPrice(item.price)}</strong>

          <div class="cart-item-controls">

            <button
              type="button"
              onclick="changeCartQuantity(${index}, -1)"
            >
              −
            </button>

            <span>${item.quantity}</span>

            <button
              type="button"
              onclick="changeCartQuantity(${index}, 1)"
            >
              +
            </button>

            <button
              type="button"
              class="remove-item"
              onclick="removeFromCart(${index})"
            >
              REMOVE
            </button>

          </div>

        </div>

      </div>
    `;

  }).join("");
}


/* =========================
   CART QUANTITY
========================= */

function changeCartQuantity(index, change) {

  if (!cart[index]) return;

  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  updateCartUI();
}


/* =========================
   REMOVE CART ITEM
========================= */

function removeFromCart(index) {

  if (!cart[index]) return;

  const itemName = cart[index].name;

  cart.splice(index, 1);

  saveCart();
  updateCartUI();

  showToast(`${itemName} removed`);
}


/* =========================
   OPEN CART
========================= */

function openCart() {

  if (cartOverlay) {
    cartOverlay.classList.add("active");
  }

  if (cartDrawer) {
    cartDrawer.classList.add("active");
  }

  document.body.classList.add("cart-open");

  updateCartUI();
}


/* =========================
   CLOSE CART
========================= */

function closeCartDrawer() {

  if (cartOverlay) {
    cartOverlay.classList.remove("active");
  }

  if (cartDrawer) {
    cartDrawer.classList.remove("active");
  }

  document.body.classList.remove("cart-open");
}


/* =========================
   CART BUTTON
========================= */

const cartButton = document.getElementById("cartBtn");

if (cartButton) {
  cartButton.addEventListener("click", openCart);
}

if (closeCart) {
  closeCart.addEventListener("click", closeCartDrawer);
}

if (cartOverlay) {
  cartOverlay.addEventListener("click", closeCartDrawer);
}


/* =========================
   MODAL CLOSE
========================= */

if (modalClose) {
  modalClose.addEventListener("click", closeProduct);
}


/* =========================
   FILTER PRODUCTS
========================= */

document.querySelectorAll(".filter-btn").forEach(button => {

  button.addEventListener("click", () => {

    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const category = button.dataset.category;

    const filteredProducts =
      category === "all"
        ? products
        : products.filter(product =>
            product.category === category
          );

    if (productGrid) {

      productGrid.innerHTML =
        filteredProducts.length
          ? filteredProducts.map(createProductCard).join("")
          : `
            <div class="no-products">
              <h3>No products found</h3>
              <p>More ZYVON pieces are coming soon.</p>
            </div>
          `;

    }

  });

});


/* =========================
   CATEGORY STRIP
========================= */

document.querySelectorAll("[data-category-link]").forEach(item => {

  item.addEventListener("click", () => {

    const category = item.dataset.categoryLink;

    const shopSection = document.getElementById("shop");

    if (shopSection) {
      shopSection.scrollIntoView({
        behavior: "smooth"
      });
    }

    setTimeout(() => {

      const filterButton =
        document.querySelector(
          `.filter-btn[data-category="${category}"]`
        );

      if (filterButton) {
        filterButton.click();
      }

    }, 400);

  });

});


/* =========================
   SEARCH
========================= */

if (searchBtn) {

  searchBtn.addEventListener("click", () => {

    if (searchBox) {
      searchBox.classList.add("active");
    }

    if (searchInput) {
      searchInput.focus();
    }

  });

}


if (closeSearch) {

  closeSearch.addEventListener("click", () => {

    searchBox.classList.remove("active");

    if (searchInput) {
      searchInput.value = "";
    }

    renderProducts();

  });

}


if (searchInput) {

  searchInput.addEventListener("input", () => {

    const query =
      searchInput.value.trim().toLowerCase();

    if (!query) {
      renderProducts();
      return;
    }

    const results = products.filter(product =>

      produ
