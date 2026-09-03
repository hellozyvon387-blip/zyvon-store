/* =========================================================
   ZYVON — SCRIPT.JS
   20 PRODUCTS + IMG.BB IMAGES
========================================================= */


/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [

  /* =========================
     TEES — 5
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
     OVERSIZED — 5
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
     HOODIES — 5
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
     ACCESSORIES — 5
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
} catch (error) {
  cart = [];
}

let selectedProduct = null;
let selectedSize = null;
let activeCategory = "all";
let currentProducts = [...products];


/* =========================================================
   ELEMENTS
========================================================= */

let productGrid;
let newProducts;

let productModal;
let modalImage;
let modalCategory;
let modalName;
let modalPrice;
let modalDescription;

let cartDrawer;
let cartOverlay;
let cartItems;
let cartTotal;
let cartCount;

let searchOverlay;
let searchInput;
let searchResults;

let mobileMenu;
let toast;
let newsletterForm;


/* =========================================================
   INITIALIZE
========================================================= */

function initializeZYVON() {

  productGrid = document.getElementById("productGrid");
  newProducts = document.getElementById("newProducts");

  productModal = document.getElementById("productModal");
  modalImage = document.getElementById("modalImage");
  modalCategory = document.getElementById("modalCategory");
  modalName = document.getElementById("modalName");
  modalPrice = document.getElementById("modalPrice");
  modalDescription = document.getElementById("modalDescription");

  cartDrawer = document.getElementById("cartDrawer");
  cartOverlay = document.getElementById("cartOverlay");
  cartItems = document.getElementById("cartItems");
  cartTotal = document.getElementById("cartTotal");
  cartCount = document.getElementById("cartCount");

  searchOverlay = document.getElementById("searchOverlay");
  searchInput = document.getElementById("searchInput");
  searchResults = document.getElementById("searchResults");

  mobileMenu = document.getElementById("mobileMenu");
  toast = document.getElementById("toast");

  newsletterForm = document.getElementById("newsletterForm");


  /* Render products */

  renderProducts(products);
  renderNewArrivals();
  updateCart();


  /* Search */

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      searchProducts(this.value);
    });
  }


  /* Newsletter */

  if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const emailInput =
        document.getElementById("newsletterEmail");

      const email =
        emailInput ? emailInput.value.trim() : "";

      if (!email) return;

      showToast("YOU'RE ON THE LIST.");

      newsletterForm.reset();

    });

  }


  /* Escape key */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

      if (productModal) {
        productModal.classList.remove("open");
      }

      if (searchOverlay) {
        searchOverlay.classList.remove("open");
      }

      if (cartDrawer) {
        cartDrawer.classList.remove("open");
      }

      if (cartOverlay) {
        cartOverlay.classList.remove("open");
      }

      if (mobileMenu) {
        mobileMenu.classList.remove("open");
      }

      document.body.style.overflow = "";

    }

  });

}


/* =========================================================
   PRICE FORMAT
========================================================= */

function formatPrice(price) {
  return "₹" + Number(price).toLocaleString("en-IN");
}


/* =========================================================
   IMAGE ERROR
========================================================= */

function handleImageError(img) {

  if (!img) return;

  /*
    Stop infinite error loops.
  */

  img.onerror = null;

  /*
    Use a simple inline fallback.
    Successful ImageBB images are NOT changed.
  */

  img.src =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg"
           width="600"
           height="750"
           viewBox="0 0 600 750">
        <rect width="600" height="750" fill="#111111"/>
        <text x="300"
              y="360"
              text-anchor="middle"
              fill="#777777"
              font-family="Arial"
              font-size="22">
          ZYVON
        </text>
        <text x="300"
              y="395"
              text-anchor="middle"
              fill="#555555"
              font-family="Arial"
              font-size="12">
          IMAGE UNAVAILABLE
        </text>
      </svg>
    `);

  img.style.objectFit = "cover";
}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product) {

  return `
    <article
      class="product-card"
      onclick="openProductModal(${product.id})"
    >

      <div class="product-image">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="handleImageError(this)"
        >

      </div>

      <div class="product-info">

        <div class="product-category">
          ${product.categoryLabel}
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


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts(list = currentProducts) {

  if (!productGrid) return;

  if (!list || list.length === 0) {

    productGrid.innerHTML = `
      <div style="
        grid-column:1/-1;
        padding:50px 0;
        opacity:.5;
        font-size:13px;
      ">
        NO PRODUCTS FOUND.
      </div>
    `;

    return;
  }

  productGrid.innerHTML =
    list.map(createProductCard).join("");
}


/* =========================================================
   NEW ARRIVALS
========================================================= */

function renderNewArrivals() {

  if (!newProducts) return;

  const newItems = products.slice(0, 4);

  newProducts.innerHTML =
    newItems.map(createProductCard).join("");
}


/* =========================================================
   FILTER PRODUCTS
========================================================= */

function filterProducts(category, button = null) {

  activeCategory = category;

  if (category === "all") {

    currentProducts = [...products];

  } else {

    currentProducts =
      products.filter(function (product) {
        return product.category === category;
      });

  }

  renderProducts(currentProducts);


  /* Update filter buttons */

  document
    .querySelectorAll(".filter-btn")
    .forEach(function (btn) {
      btn.classList.remove("active");
    });


  if (button) {

    button.classList.add("active");

  } else {

    document
      .querySelectorAll(".filter-btn")
      .forEach(function (btn) {

        const text =
          btn.textContent
            .trim()
            .toLowerCase();

        if (text === category) {
          btn.classList.add("active");
        }

      });

  }


  /* Category card click */

  if (!button && category !== "all") {

    const shopSection =
      document.getElementById("shop");

    if (shopSection) {

      shopSection.scrollIntoView({
        behavior: "smooth"
      });

    }

  }

}


/* =========================================================
   PRODUCT MODAL
========================================================= */

function openProductModal(productId) {

  const product =
    products.find(function (p) {
      return p.id === Number(productId);
    });

  if (!product || !productModal) return;

  selectedProduct = product;
  selectedSize = null;


  if (modalImage) {

    modalImage.onerror = null;

    modalImage.src = product.image;
    modalImage.alt = product.name;

    modalImage.onerror = function () {
      handleImageError(this);
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


  document
    .querySelectorAll(".sizes button")
    .forEach(function (btn) {
      btn.classList.remove("selected");
    });


  productModal.classList.add("open");

  document.body.style.overflow = "hidden";
}


/* =========================================================
   CLOSE PRODUCT MODAL
========================================================= */

function closeProductModal() {

  if (productModal) {
    productModal.classList.remove("open");
  }

  document.body.style.overflow = "";

  selectedProduct = null;
  selectedSize = null;
}


/* =========================================================
   SIZE
========================================================= */

function selectSize(size, button) {

  selectedSize = size;

  document
    .querySelectorAll(".sizes button")
    .forEach(function (btn) {
      btn.classList.remove("selected");
    });

  if (button) {
    button.classList.add("selected");
  }
}


/* =========================================================
   ADD TO CART
========================================================= */

function addSelectedProductToCart() {

  if (!selectedProduct) return;

  if (!selectedSize) {

    showToast("PLEASE SELECT A SIZE.");

    return;
  }


  const existing =
    cart.find(function (item) {

      return (
        item.id === selectedProduct.id &&
        item.size === selectedSize
      );

    });


  if (existing) {

    existing.quantity += 1;

  } else {

    cart.push({

      id: selectedProduct.id,
      name: selectedProduct.name,
      category: selectedProduct.category,
      price: selectedProduct.price,
      image: selectedProduct.image,
      size: selectedSize,
      quantity: 1

    });

  }


  saveCart();
  updateCart();

  closeProductModal();
  openCart();

  showToast("ADDED TO CART.");
}


/* =========================================================
   SAVE CART
========================================================= */

function saveCart() {

  try {

    localStorage.setItem(
      "zyvonCart",
      JSON.stringify(cart)
    );

  } catch (error) {

    console.warn("Could not save cart.");

  }

}


/* =========================================================
   UPDATE CART
========================================================= */

function updateCart() {

  if (!cartItems) return;


  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div style="
        text-align:center;
        padding:60px 10px;
        opacity:.5;
        font-size:12px;
        letter-spacing:1px;
      ">
        YOUR CART IS EMPTY.
      </div>
    `;

  } else {

    cartItems.innerHTML =
      cart.map(function (item, index) {

        return `

          <div class="cart-item">

            <img
              src="${item.image}"
              alt="${item.name}"
              onerror="handleImageError(this)"
            >

            <div>

              <div class="cart-item-name">
                ${item.name}
              </div>

              <div class="cart-item-size">
                SIZE: ${item.size}
              </div>

              <div class="cart-item-price">
                ${formatPrice(item.price)}
              </div>

              <div class="cart-quantity">

                <button
                  onclick="changeQuantity(${index}, -1)"
                >
                  −
                </button>

                <span>
                  ${item.quantity}
                </span>

                <button
                  onclick="changeQuantity(${index}, 1)"
                >
                  +
                </button>

              </div>

            </div>

            <button
              class="remove-item"
              onclick="removeCartItem(${index})"
            >
              REMOVE
            </button>

          </div>

        `;

      }).join("");

  }


  const total =
    cart.reduce(function (sum, item) {

      return sum +
        Number(item.price) *
        Number(item.quantity);

    }, 0);


  const count =
    cart.reduce(function (sum, item) {

      return sum +
        Number(item.quantity);

    }, 0);


  if (cartTotal) {
    cartTotal.textContent =
      formatPrice(total);
  }

  if (cartCount) {
    cartCount.textContent =
      count;
  }

}


/* =========================================================
   CHANGE QUANTITY
========================================================= */

function changeQuantity(index, amount) {

  if (!cart[index]) return;

  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {

    cart.splice(index, 1);

  }

  saveCart();
  updateCart();
}


/* =========================================================
   REMOVE ITEM
========================================================= */

function removeCartItem(index) {

  if (!cart[index]) return;

  cart.splice(index, 1);

  saveCart();
  updateCart();

  showToast("ITEM REMOVED.");
}


/* =========================================================
   OP
