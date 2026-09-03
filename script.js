/* =========================================================
   ZYVON — SCRIPT.JS
   Premium Streetwear E-Commerce
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     PRODUCT DATABASE — 20 PRODUCTS
  ======================================================= */

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


  /* =======================================================
     ELEMENTS
  ======================================================= */

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

  const modalAddCart = document.getElementById("modalAddCart");
  const modalBuyNow = document.getElementById("modalBuyNow");

  const quantityMinus = document.getElementById("quantityMinus");
  const quantityPlus = document.getElementById("quantityPlus");
  const quantityValue = document.getElementById("quantityValue");

  const cartOverlay = document.getElementById("cartOverlay");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");
  const closeCart = document.getElementById("closeCart");
  const checkoutBtn = document.getElementById("checkoutBtn");

  const searchBtn = document.getElementById("searchBtn");
  const searchBox = document.getElementById("searchBox");
  const searchInput = document.getElementById("searchInput");
  const closeSearch = document.getElementById("closeSearch");

  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  const accountBtn = document.getElementById("accountBtn");
  const toast = document.getElementById("toast");

  let selectedProduct = null;
  let selectedSize = "M";
  let selectedQuantity = 1;


  /* =======================================================
     CART
  ======================================================= */

  let cart = JSON.parse(localStorage.getItem("zyvonCart")) || [];


  function saveCart() {
    localStorage.setItem("zyvonCart", JSON.stringify(cart));
  }


  function formatPrice(price) {
    return `₹${price.toLocaleString("en-IN")}`;
  }


  function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cartCount) {
      cartCount.textContent = totalItems;
      cartCount.style.display = totalItems > 0 ? "flex" : "none";
    }
  }


  function updateCartTotal() {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    if (cartTotal) {
      cartTotal.textContent = formatPrice(total);
    }
  }


  /* =======================================================
     TOAST
  ======================================================= */

  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.zyvonToastTimer);

    window.zyvonToastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }


  /* =======================================================
     PRODUCT CARD
  ======================================================= */

  function createProductCard(product) {

    const card = document.createElement("article");

    card.className = "product-card";
    card.dataset.id = product.id;

    card.innerHTML = `
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

        <button
          class="product-image-open"
          data-action="details"
          aria-label="View ${product.name}"
        ></button>

        <div class="product-actions">
          <button
            class="add-cart-btn"
            data-action="add"
            type="button"
          >
            ADD TO CART
          </button>

          <button
            class="buy-now-btn"
            data-action="buy"
            type="button"
          >
            BUY NOW
          </button>
        </div>
      </div>

      <div class="product-info">
        <span class="product-category">
          ${product.categoryLabel}
        </span>

        <h3 class="product-name">
          ${product.name}
        </h3>

        <div class="product-price">
          ${formatPrice(product.price)}
        </div>
      </div>
    `;

    return card;
  }


  /* =======================================================
     RENDER PRODUCTS
  ======================================================= */

  function renderProducts(list, container) {

    if (!container) return;

    container.innerHTML = "";

    if (!list.length) {
      container.innerHTML = `
        <div class="empty-products">
          <h3>No products found</h3>
          <p>Try another search or category.</p>
        </div>
      `;
      return;
    }

    list.forEach(product => {
      container.appendChild(createProductCard(product));
    });
  }


  /* =======================================================
     INITIAL PRODUCT SECTIONS
  ======================================================= */

  renderProducts(products, productGrid);

  renderProducts(products.slice(0, 8), newProducts);

  renderProducts(
    [
      products[1],
      products[4],
      products[6],
      products[10],
      products[11],
      products[15],
      products[17],
      products[19]
    ],
    bestProducts
  );


  /* =======================================================
     OPEN PRODUCT MODAL
  ======================================================= */

  function openProduct(productId, buyMode = false) {

    const product = products.find(p => p.id === Number(productId));

    if (!product || !productModal) return;

    selectedProduct = product;
    selectedSize = product.sizes.includes("M")
      ? "M"
      : product.sizes[0];

    selectedQuantity = 1;

    modalImage.src = product.image;
    modalImage.alt = product.name;

    modalCategory.textContent = product.categoryLabel;
    modalName.textContent = product.name;
    modalPrice.textContent = formatPrice(product.price);
    modalDescription.textContent = product.description;

    quantityValue.textContent = selectedQuantity;

    const sizeContainer =
      productModal.querySelector(".size-options");

    if (sizeContainer) {

      sizeContainer.innerHTML = "";

      product.sizes.forEach(size => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "size-btn";
        button.textContent = size;

        if (size === selectedSize) {
          button.classList.add("active");
        }

        button.addEventListener("click", () => {

          selectedSize = size;

          sizeContainer
            .querySelectorAll(".size-btn")
            .forEach(btn => btn.classList.remove("active"));

          button.classList.add("active");

        });

        sizeContainer.appendChild(button);

      });
    }

    productModal.classList.add("open");
    document.body.classList.add("modal-open");

    if (buyMode) {
      productModal.dataset.buyMode = "true";
    } else {
      productModal.dataset.buyMode = "false";
    }
  }


  function closeProductModal() {

    if (!productModal) return;

    productModal.classList.remove("open");
    document.body.classList.remove("modal-open");

    selectedProduct = null;
  }


  /* =======================================================
     PRODUCT CARD EVENTS
  ======================================================= */

  document.addEventListener("click", event => {

    const actionButton = event.target.closest("[data-action]");

    if (!actionButton) return;

    const card = actionButton.closest(".product-card");

    if (!card) return;

    const productId = card.dataset.id;

    const action = actionButton.dataset.action;

    if (action === "details") {
      openProduct(productId);
    }

    if (action === "add") {
      openProduct(productId);
    }

    if (action === "buy") {
      openProduct(productId, true);
    }

  });


  /* =======================================================
     CLICK PRODUCT CARD
  ======================================================= */

  document.addEventListener("click", event => {

    const card = event.target.closest(".product-card");

    if (!card) return;

    if (
      event.target.closest("button") ||
      event.target.closest(".product-actions")
    ) {
      return;
    }

    openProduct(card.dataset.id);

  });


  /* =======================================================
     MODAL CLOSE
  ======================================================= */

  if (modalClose) {
    modalClose.addEventListener("click", closeProductModal);
  }


  if (productModal) {
    productModal.addEventListener("click", event => {

      if (event.target === productModal) {
        closeProductModal();
      }

    });
  }


  /* =======================================================
     QUANTITY
  ======================================================= */

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


  /* =======================================================
     ADD PRODUCT TO CART
  ======================================================= */

  function addToCart(product, size, quantity) {

    const existing = cart.find(
      item =>
        item.id === product.id &&
        item.size === size
    );

    if (existing) {
      existing.quantity += quantity;
    } else {

      cart.push({
        id: product.id,
        name: product.name,
        category: product.categoryLabel,
        price: product.price,
        image: product.image,
        size: size,
        quantity: quantity
      });

    }

    saveCart();
    updateCartCount();
    updateCartTotal();

    showToast(`${product.name} added to cart`);

  }


  /* =======================================================
     MODAL ADD TO CART
  ======================================================= */

  if (modalAddCart) {

    modalAddCart.addEventListener("click", () => {

      if (!selectedProduct) return;

      addToCart(
        selectedProduct,
        selectedSize,
        selectedQuantity
      );

      closeProductModal();

    });

  }


  /* =======================================================
     MODAL BUY NOW
  ======================================================= */

  if (modalBuyNow) {

    modalBuyNow.addEventListener("click", () => {

      if (!selectedProduct) return;

      addToCart(
        selectedProduct,
        selectedSize,
        selectedQuantity
      );

      closeProductModal();
      openCart();

    });

  }


  /* =======================================================
     CART DRAWER
  ======================================================= */

  function openCart() {

    if (cartOverlay) {
      cartOverlay.classList.add("open");
    }

    if (cartDrawer) {
      cartDrawer.classList.add("open");
    }

    document.body.classList.add("cart-open");

    renderCart();

  }


  function closeCartDrawer() {

    if (cartOverlay) {
      cartOverlay.classList.remove("open");
    }

    if (cartDrawer) {
      cartDrawer.classList.remove("open");
    }

    document.body.classList.remove("cart-open");

  }


  if (closeCart) {
    closeCart.addEventListener("click", closeCartDrawer);
  }


  if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCartDrawer);
  }


  /* =============================================
