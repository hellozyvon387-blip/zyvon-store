/* =========================================================
   ZYVON — STORE JAVASCRIPT
   20 PRODUCTS + IMGBB DIRECT IMAGE LINKS
   ========================================================= */


/* =========================================================
   PRODUCTS
   ========================================================= */

const products = [

  /* =========================
     TEES
     ========================= */

  {
    id: 1,
    name: "Tee 01",
    category: "tees",
    price: 699,
    image: "https://i.ibb.co/Y7gPznnb/DSC-5073-1.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "A clean everyday tee with a modern streetwear silhouette."
  },

  {
    id: 2,
    name: "Tee 02",
    category: "tees",
    price: 699,
    image: "https://i.ibb.co/qL53tMbR/hiyest-freewill-or-destiny-oversized-black-t-shirt-frontprint-960x1200-jpg.webp",
    sizes: ["S", "M", "L", "XL"],
    description: "A bold graphic tee designed for an effortless streetwear look."
  },

  {
    id: 3,
    name: "Tee 03",
    category: "tees",
    price: 699,
    image: "https://i.ibb.co/HTSm2znJ/75715204-2e04-423f-ba8b-051961831a0f.webp",
    sizes: ["S", "M", "L", "XL"],
    description: "A minimal statement piece with a contemporary fit."
  },

  {
    id: 4,
    name: "Tee 04",
    category: "tees",
    price: 699,
    image: "https://i.ibb.co/tpSXgK2g/5082-HEAVY-FADED-TEE-FADED-BLACK.png",
    sizes: ["S", "M", "L", "XL"],
    description: "Heavy faded construction with a relaxed streetwear feel."
  },

  {
    id: 5,
    name: "Tee 05",
    category: "tees",
    price: 699,
    image: "https://i.ibb.co/qF71LK6H/sunlit-hanging-t-shirt-mockup-soft-shadows-on-textured-wall-minimalist-and-natural-aesthetic-0741-8.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "A refined minimalist tee made for everyday styling."
  },


  /* =========================
     OVERSIZED
     ========================= */

  {
    id: 6,
    name: "Oversized 01",
    category: "oversized",
    price: 799,
    image: "https://i.ibb.co/Z6KZYb58/pexels-bandar-baant-2160637741-37482328.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "Relaxed oversized proportions with a contemporary streetwear fit."
  },

  {
    id: 7,
    name: "Oversized 02",
    category: "oversized",
    price: 799,
    image: "https://i.ibb.co/gb22DmMK/pexels-bandar-baant-2160637741-36986582.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "A heavyweight oversized silhouette built for everyday wear."
  },

  {
    id: 8,
    name: "Oversized 03",
    category: "oversized",
    price: 799,
    image: "https://i.ibb.co/Jjh45vff/pexels-bandar-baant-2160637741-36942018.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "A relaxed cut with a clean modern streetwear aesthetic."
  },

  {
    id: 9,
    name: "Oversized 04",
    category: "oversized",
    price: 799,
    image: "https://i.ibb.co/fzgHHLNV/ben-iwara-3-QIjn-DIcxu-M-unsplash.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "A versatile oversized piece with a strong contemporary shape."
  },

  {
    id: 10,
    name: "Oversized 05",
    category: "oversized",
    price: 799,
    image: "https://i.ibb.co/yFk2y8Rz/tonal-thrash-boxy-tee-s.png",
    sizes: ["S", "M", "L", "XL"],
    description: "Boxy proportions and a bold tonal aesthetic."
  },


  /* =========================
     HOODIES
     ========================= */

  {
    id: 11,
    name: "Hoodie 01",
    category: "hoodies",
    price: 1299,
    image: "https://i.ibb.co/4w6FdZPr/pexels-airamdphoto-9649527.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "A relaxed hoodie designed for a clean everyday streetwear look."
  },

  {
    id: 12,
    name: "Hoodie 02",
    category: "hoodies",
    price: 1299,
    image: "https://i.ibb.co/HTMF7bJW/josh-marty-D-oceq6l5h-M-unsplash.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "A comfortable oversized hoodie with a premium casual silhouette."
  },

  {
    id: 13,
    name: "Hoodie 03",
    category: "hoodies",
    price: 1299,
    image: "https://i.ibb.co/MyY3BHHB/pexels-ana-maria-arroyave-1851916642-28701959.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "Modern proportions with an understated streetwear attitude."
  },

  {
    id: 14,
    name: "Hoodie 04",
    category: "hoodies",
    price: 1299,
    image: "https://i.ibb.co/ZRhv4nyW/michael-kyule-Nq-j-FJtq-Gu-Y-unsplash.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "A clean everyday hoodie with a relaxed fit."
  },

  {
    id: 15,
    name: "Hoodie 05",
    category: "hoodies",
    price: 1299,
    image: "https://i.ibb.co/V0T4W5KZ/actions-b24ec891-4e9c-4ea8-bd95-66b8b6bd9f4d.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "A bold hoodie silhouette designed for everyday layering."
  },


  /* =========================
     ACCESSORIES
     ========================= */

  {
    id: 16,
    name: "Accessory 01",
    category: "accessories",
    price: 499,
    image: "https://i.ibb.co/NPwbjyb/1515373-carhartt-wip-canvas-graphic-tote-bag-label-script-print-black.jpg",
    sizes: ["ONE SIZE"],
    description: "A practical canvas accessory with a clean everyday aesthetic."
  },

  {
    id: 17,
    name: "Accessory 02",
    category: "accessories",
    price: 499,
    image: "https://i.ibb.co/d4D1fCxN/871dff03-ccb0-45a1-92e0-ed530a8b08f8.png",
    sizes: ["ONE SIZE"],
    description: "A minimalist accessory designed for everyday use."
  },

  {
    id: 18,
    name: "Accessory 03",
    category: "accessories",
    price: 499,
    image: "https://i.ibb.co/spdJk8VX/1a13b80dbd0e9f943911a69f6fc89a66c33ee246-Janosch-Presents-32-Posting-3-a9dfd837-5787-47fe-9205-57d63.jpg",
    sizes: ["ONE SIZE"],
    description: "A versatile streetwear accessory with a modern look."
  },

  {
    id: 19,
    name: "Accessory 04",
    category: "accessories",
    price: 499,
    image: "https://i.ibb.co/ZkQ6BSX/5c311613b196db5ce1ea5c328ae7b37e.jpg",
    sizes: ["ONE SIZE"],
    description: "A functional accessory with a clean minimalist profile."
  },

  {
    id: 20,
    name: "Accessory 05",
    category: "accessories",
    price: 499,
    image: "https://i.ibb.co/XZq21dHY/1-R-Everyday-Oversized-Tote-Black.jpg",
    sizes: ["ONE SIZE"],
    description: "An oversized everyday carry designed for a clean streetwear look."
  }

];


/* =========================================================
   STATE
   ========================================================= */

let cart = JSON.parse(localStorage.getItem("zyvonCart")) || [];

let selectedProduct = null;

let selectedSize = null;

let activeCategory = "all";


/* =========================================================
   PRICE FORMAT
   ========================================================= */

function formatPrice(price) {

  return `₹${price.toLocaleString("en-IN")}`;

}


/* =========================================================
   CATEGORY LABEL
   ========================================================= */

function getCategoryName(category) {

  const names = {
    tees: "TEES",
    oversized: "OVERSIZED",
    hoodies: "HOODIES",
    accessories: "ACCESSORIES"
  };

  return names[category] || category.toUpperCase();

}


/* =========================================================
   CREATE PRODUCT CARD
   ========================================================= */

function createProductCard(product) {

  return `
    <article class="product-card">

      <div class="product-image-wrap">

        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-image"
          loading="lazy"
          onerror="this.parentElement.classList.add('image-error');"
        >

        <button
          class="product-view"
          onclick="openProduct(${product.id})"
        >
          QUICK VIEW
        </button>

      </div>

      <div class="product-info">

        <div>

          <h3>${product.name}</h3>

          <p>${getCategoryName(product.category)}</p>

        </div>

        <strong>
          ${formatPrice(product.price)}
        </strong>

      </div>

    </article>
  `;

}


/* =========================================================
   RENDER SHOP PRODUCTS
   ========================================================= */

function renderProducts(list = products) {

  const grid = document.getElementById("productGrid");

  if (!grid) return;

  if (list.length === 0) {

    grid.innerHTML = `
      <div class="empty-products">
        <p>NO PRODUCTS FOUND.</p>
      </div>
    `;

    return;
  }

  grid.innerHTML = list
    .map(product => createProductCard(product))
    .join("");

}


/* =========================================================
   NEW ARRIVALS
   ========================================================= */

function renderNewArrivals() {

  const grid = document.getElementById("newProducts");

  if (!grid) return;

  /*
    Show the first 5 products as New Arrivals.
  */

  const newProducts = products.slice(0, 5);

  grid.innerHTML = newProducts
    .map(product => createProductCard(product))
    .join("");

}


/* =========================================================
   FILTER PRODUCTS
   ========================================================= */

function filterProducts(category, button = null) {

  activeCategory = category;

  let filteredProducts;

  if (category === "all") {

    filteredProducts = products;

  } else {

    filteredProducts = products.filter(
      product => product.category === category
    );

  }

  renderProducts(filteredProducts);

  /*
    Update filter button appearance.
  */

  document.querySelectorAll(".filter-btn").forEach(btn => {

    btn.classList.remove("active");

  });

  if (button) {

    button.classList.add("active");

  } else {

    document.querySelectorAll(".filter-btn").forEach(btn => {

      const text = btn.textContent
        .trim()
        .toLowerCase();

      if (
        (category === "all" && text === "all") ||
        text === category
      ) {

        btn.classList.add("active");

      }

    });

  }

  /*
    Scroll to shop when category is selected
    from the Categories section.
  */

  const shop = document.getElementById("shop");

  if (
    !button &&
    shop &&
    window.scrollY > shop.offsetTop + shop.offsetHeight
  ) {

    shop.scrollIntoView({
      behavior: "smooth"
    });

  }

}


/* =========================================================
   PRODUCT MODAL
   ========================================================= */

function openProduct(id) {

  const product = products.find(
    item => item.id === id
  );

  if (!product) return;

  selectedProduct = product;

  selectedSize = null;

  const modal = document.getElementById("productModal");

  if (!modal) return;


  /* IMAGE */

  const image = document.getElementById("modalImage");

  if (image) {

    image.src = product.image;

    image.alt = product.name;

  }


  /* CATEGORY */

  const category =
    document.getElementById("modalCategory");

  if (category) {

    category.textContent =
      getCategoryName(product.category);

  }


  /* NAME */

  const name =
    document.getElementById("modalName");

  if (name) {

    name.textContent = product.name;

  }


  /* PRICE */

  const price =
    document.getElementById("modalPrice");

  if (price) {

    price.textContent =
      formatPrice(product.price);

  }


  /* DESCRIPTION */

  const description =
    document.getElementById("modalDescription");

  if (description) {

    description.textContent =
      product.description;

  }


  /* SIZES */

  const sizeButtons =
    document.querySelectorAll(".sizes button");

  sizeButtons.forEach(button => {

    button.classList.remove("active");

    const size =
      button.textContent.trim();

    if (
      product.sizes.includes(size)
    ) {

      button.style.display = "";

    } else {

      button.style.display = "none";

    }

  });


  /* OPEN */

  modal.classList.add("open");

  document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE PRODUCT MODAL
   ========================================================= */

function closeProductModal() {

  const modal =
    document.getElementById("productModal");

  if (modal) {

    modal.classList.remove("open");

  }

  document.body.style.overflow = "";

  selectedProduct = null;

  selectedSize = null;

}


/* =========================================================
   SIZE SELECTION
   ========================================================= */

function selectSize(size, button) {

  if (!selectedProduct) return;

  if (
    !selectedProduct.sizes.includes(size)
  ) return;

  selectedSize = size;

  document.querySelectorAll(".sizes
