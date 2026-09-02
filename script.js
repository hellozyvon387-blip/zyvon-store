/* =========================================================
   ZYVON — SCRIPT.JS
========================================================= */

const products = [
  {
    id: 1,
    name: "ZYVON CORE TEE",
    category: "tees",
    categoryName: "TEES",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    description: "A clean everyday essential with the signature ZYVON attitude."
  },
  {
    id: 2,
    name: "OVERSIZED SIGNAL",
    category: "oversized",
    categoryName: "OVERSIZED",
    price: 999,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    description: "Relaxed oversized silhouette built for everyday streetwear."
  },
  {
    id: 3,
    name: "BLACKOUT OVERSIZED",
    category: "oversized",
    categoryName: "OVERSIZED",
    price: 1099,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
    description: "Minimal black oversized styling with a powerful silhouette."
  },
  {
    id: 4,
    name: "ZYVON HEAVY HOODIE",
    category: "hoodies",
    categoryName: "HOODIES",
    price: 1499,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
    description: "Heavyweight comfort with a clean modern streetwear profile."
  },
  {
    id: 5,
    name: "SHADOW HOODIE",
    category: "hoodies",
    categoryName: "HOODIES",
    price: 1599,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=85",
    description: "A premium everyday hoodie designed for colder days."
  },
  {
    id: 6,
    name: "ESSENTIAL TEE",
    category: "tees",
    categoryName: "TEES",
    price: 749,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    description: "Simple. Versatile. Built to become an everyday essential."
  },
  {
    id: 7,
    name: "ZYVON CAP",
    category: "accessories",
    categoryName: "ACCESSORIES",
    price: 599,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85",
    description: "A clean finishing piece for your everyday streetwear fit."
  },
  {
    id: 8,
    name: "ZYVON TOTE",
    category: "accessories",
    categoryName: "ACCESSORIES",
    price: 699,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
    description: "Minimal utility with the unmistakable ZYVON aesthetic."
  }
];

let cart = [];
let selectedProduct = null;
let selectedSize = null;
let currentProducts = [...products];


/* =========================
   PRICE
========================= */

function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}


/* =========================
   PRODUCT CARD
========================= */

function createProductCard(product) {
  return `
    <article
      class="product-card"
      onclick="openProduct(${product.id})"
    >

      <div class="product-image">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

      </div>

      <div class="product-info">

        <div class="product-category">
          ${product.categoryName}
        </div>

        <div class="product-name">
          ${product.name}
        </div>

        <div class="product-price">
          ${formatPrice(product.price)}
        </div>

      </div>

    </article>
  `;
}


/* =========================
   RENDER PRODUCTS
========================= */

function renderProducts(list = currentProducts) {
  const grid =
    document.getElementById("productGrid");

  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = `
      <p style="color:#666;font-size:12px;">
        No products found.
      </p>
    `;
    return;
  }

  grid.innerHTML = list
    .map(createProductCard)
    .join("");
}


/* =========================
   NEW PRODUCTS
========================= */

function renderNewProducts() {
  const container =
    document.getElementById("newProducts");

  if (!container) return;

  container.innerHTML = products
    .slice(0, 4)
    .map(createProductCard)
    .join("");
}


/* =========================
   FILTER PRODUCTS
========================= */

function filterProducts(category, button = null) {

  if (category === "all") {
    currentProducts = [...products];
  } else {
    currentProducts = products.filter(
      product =>
        product.category === category
    );
  }

  document
    .querySelectorAll(".filter-btn")
    .forEach(btn =>
      btn.classList.remove("active")
    );

  if (button) {
    button.classList.add("active");
  }

  renderProducts();

  document
    .getElementById("shop")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}


/* =========================
   PRODUCT MODAL
========================= */

function openProduct(id) {

  const product =
    products.find(
      product => product.id === id
    );

  if (!product) return;

  selectedProduct = product;
  selectedSize = null;

  document.getElementById("modalImage").src =
    product.image;

  document.getElementById("modalImage").alt =
    product.name;

  document.getElementById("modalCategory")
    .textContent =
    product.categoryName;

  document.getElementById("modalName")
    .textContent =
    product.name;

  document.getElementById("modalPrice")
    .textContent =
    formatPrice(product.price);

  document.getElementById("modalDescription")
    .textContent =
    product.description;

  document
    .querySelectorAll(".sizes button")
    .forEach(button => {
      button.classList.remove("selected");
    });

  document
    .getElementById("productModal")
    .classList.add("open");

  document.body.classList.add("no-scroll");
}


function closeProductModal() {

  document
    .getElementById("productModal")
    .classList.remove("open");

  document.body.classList.remove("no-scroll");
}


/* =========================
   SIZE
========================= */

function selectSize(size, button) {

  selectedSize = size;

  document
    .querySelectorAll(".sizes button")
    .forEach(btn =>
      btn.classList.remove("selected")
    );

  button.classList.add("selected");
}


/* =========================
   ADD TO CART
========================= */

function addSelectedProductToCart() {

  if (!selectedProduct) return;

  if (!selectedSize) {
    showToast("SELECT A SIZE FIRST");
    return;
  }

  const existing =
    cart.find(item =>
      item.id === selectedProduct.id &&
      item.size === selectedSize
    );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: selectedProduct.id,
      size: selectedSize,
      quantity: 1
    });
  }

  saveCart();

  updateCart();

  closeProductModal();

  showToast("ADDED TO CART");
}


/* =========================
   LOCAL STORAGE
========================= */

function saveCart() {

  localStorage.setItem(
    "zyvonCart",
    JSON.stringify(cart)
  );
}


function loadCart() {

  try {

    const saved =
      localStorage.getItem("zyvonCart");

    if (saved) {
      cart = JSON.parse(saved);
    }

  } catch (error) {

    cart = [];

  }
}


/* =========================
   UPDATE CART
========================= */

function updateCart() {

  const countElement =
    document.getElementById("cartCount");

  const itemsElement =
    document.getElementById("cartItems");

  const totalElement =
    document.getElementById("cartTotal");

  const totalQuantity =
    cart.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );

  countElement.textContent =
    totalQuantity;


  if (!cart.length) {

    itemsElement.innerHTML = `
      <div class="empty-cart">
        YOUR CART IS EMPTY.
      </div>
    `;

    totalElement.textContent =
      "₹0";

    return;
  }


  let total = 0;


  itemsElement.innerHTML =
    cart
      .map(item => {

        const product =
          products.find(
            p => p.id === item.id
          );

        if (!product) return "";


        const itemTotal =
          product.price *
          item.quantity;

        total += itemTotal;


        return `
          <div class="cart-item">

            <img
              class="cart-item-image"
              src="${product.image}"
              alt="${product.name}"
            >

            <div class="cart-item-info">

              <h3>
                ${product.name}
              </h3>

              <p>
                SIZE: ${item.size}
              </p>

              <div class="quantity">

                <button
                  onclick="changeQuantity(
                    ${item.id},
                    '${item.size}',
                    -1
                  )"
                >
                  −
                </button>

                <span>
                  ${item.quantity}
                </span>

                <button
                  onclick="changeQuantity(
                    ${item.id},
                    '${item.size}',
                    1
                  )"
                >
                  +
                </button>

              </div>

            </div>

            <div class="cart-item-right">

              <strong>
                ${formatPrice(itemTotal)}
              </strong>

              <br>

              <button
                class="remove-item"
                onclick="removeFromCart(
                  ${item.id},
                  '${item.size}'
                )"
              >
                REMOVE
              </button>

            </div>

          </div>
        `;

      })
      .join("");


  totalElement.textContent =
    formatPrice(total);
}


/* =========================
   QUANTITY
========================= */

function changeQuantity(
  id,
  size,
  amount
) {

  const item =
    cart.find(
      item =>
        item.id === id &&
        item.size === size
    );

  if (!item) return;

  item.quantity += amount;


  if (item.quantity <= 0) {

    cart = cart.filter(
      cartItem =>
        !(
          cartItem.id === id &&
          cartItem.size === size
        )
    );
  }


  saveCart();

  updateCart();
}


/* =========================
   REMOVE ITEM
========================= */

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

  showToast("REMOVED FROM CART");
}


/* =========================
   OPEN CART
========================= */

function openCart() {

  document
    .getElementById("cartDrawer")
    .classList.add("open");

  document
    .getElementById("cartOverlay")
    .classList.add("open");

  document.body.classList.add("no-scroll");
}


/* =========================
   CLOSE CART
========================= */

function closeCart() {

  document
    .getElementById("cartDrawer")
    .classList.remove("open");

  document
    .getElementById("cartOverlay")
    .classList.remove("open");

  document.body.classList.remove("no-scroll");
}


/* =========================
   SEARCH
========================= */

function openSearch() {

  const overlay =
    document.getElementById(
      "searchOverlay"
    );

  overlay.classList.add("open");

  document.body.classList.add("no-scroll");

  setTimeout(() => {

    document
      .getElementById("searchInput")
      .focus();

  }, 100);
}


function closeSearch() {

  document
    .getElementById("searchOverlay")
    .classList.remove("open");

  document.body.classList.remove("no-scroll");

  document
    .getElementById("searchInput")
    .value = "";

  document
    .getElementById("searchResults")
    .innerHTML = "";
}


function searchProducts(query) {

  const results =
    products.filter(product =>

      `${product.name} ${product.categoryName}`
        .toLowerCase()
        .includes(
          query.toLowerCase()
        )

    );


  document
    .getElementById("searchResults")
    .innerHTML = results
      .map(createProductCard)
      .join("");
}


document
  .getElementById("searchInput")
  ?.addEventListener(
    "input",
    event => {
      searchProducts(
        event.target.value
      );
    }
  );


/* =========================
   MOBILE MENU
========================= */

function toggleMobileMenu() {

  document
    .getElementById("mobileMenu")
    .classList.toggle("open");
}


function closeMobileMenu() {

  document
    .getElementById("mobileMenu")
    .classList.remove("open");
}


/* =========================
   SCROLL TO SHOP
========================= */

function scrollToShop() {

  document
    .getElementById("shop")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}


/* =========================
   NEWSLETTER
========================= */

document
  .getElementById("newsletterForm")
  ?.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const email =
        document
          .getElementById(
            "newsletterEmail"
          )
          .value
          .trim();

      if (!email) return;

      showToast(
        "YOU'RE ON THE LIST"
      );

      event.target.reset();
    }
  );


/* =========================
   CHECKOUT
========================= */

function checkout() {

  if (!cart.length) {

    showToast(
      "YOUR CART IS EMPTY"
    );

    return;
  }

  showToast(
    "CHECKOUT COMING SOON"
  );
}


/* =========================
   TOAST
========================= */

let toastTimer;


function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent =
    message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2200);
}


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeSearch();

      closeProductModal();

      closeCart();

      closeMobileMenu();
    }

  }
);


/* =========================
   CLOSE MODAL ON BACKDROP
========================= */

document
  .getElementById("productModal")
  ?.addEventListener(
    "click",
    event => {

      if (
        event.target.id ===
        "productModal"
      ) {
        closeProductModal();
      }

    }
  );


/* =========================
   START WEBSITE
========================= */

loadCart();

renderProducts();

renderNewProducts();

updateCart();
