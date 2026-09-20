/* =========================================
CUFFIN COSMO BRANDS
MAIN JAVASCRIPT
========================================= */
/* =========================================
PRODUCTS
========================================= */
const products = [
    /* ---------- COSRX ---------- */
    {
    id: 1,
    name: "COSRX Low pH Good Morning Gel Cleanser",
    category: "Skin Care",
    price: 700,
    image: "images/cosrx-low-ph-good-morning-gel-cleanser.jpg",
    description: "Low pH gel cleanser."
    },
    {
    id: 2,
    name: "COSRX Lip Sleep Ceramide Lip Butter",
    category: "Skin Care",
    price: 500,
    image: "images/cosrx-lip-sleep-ceramide-lip-butter-sleeping-mask.jpg",
    description: "Ceramide lip sleeping mask."
    },
    {
    id: 3,
    name: "COSRX Lip Scrub Honey Sugar",
    category: "Skin Care",
    price: 360,
    image: "images/cosrx-lip-scrub-honey-sugar-lip-scrub.jpg",
    description: "Honey sugar lip scrub."
    },
    {
    id: 4,
    name: "COSRX Lip Plump",
    category: "Skin Care",
    price: 900,
    image: "images/cosrx-lip-plump-aha-bha-vitamin-c-lip-plumper.jpg",
    description: "Lip plumper."
    },
    {
    id: 5,
    name: "COSRX All About Snail Kit",
    category: "Skin Care",
    price: 750,
    image: "images/cosrx-all-about-snail-kit-4-step.jpg",
    description: "4-step snail skincare kit."
    },
    {
    id: 6,
    name: "COSRX AHA BHA Clarifying Treatment Toner",
    category: "Skin Care",
    price: 980,
    image: "images/cosrx-aha-bha-clarifying-treatment-toner.jpg",
    description: "AHA BHA treatment toner."
    },
    {
    id: 7,
    name: "COSRX The Retinol 0.5",
    category: "Skin Care",
    price: 1100,
    image: "images/cosrx-the-retinol-0-5.jpg",
    description: "Retinol skincare product."
    },
    {
    id: 8,
    name: "COSRX The Niacinamide 15",
    category: "Skin Care",
    price: 1000,
    image: "images/cosrx-the-niacinamide-15.jpg",
    description: "Niacinamide serum."
    },
    {
    id: 9,
    name: "COSRX The Hyaluronic Acid 3",
    category: "Skin Care",
    price: 650,
    image: "images/cosrx-the-hyaluronic-acid-3.jpg",
    description: "Hyaluronic acid serum."
    },
    /* ---------- ANUA ---------- */
    {
    id: 10,
    name: "Anua Heartleaf Quercetinol Pore Deep Cleansing Foam",
    category: "Skin Care",
    price: 950,
    image: "images/anua-heartleaf-quercetinol-pore-deep-cleansing-foam.jpg",
    description: "Heartleaf cleansing foam."
    },
    {
    id: 11,
    name: "Anua Heartleaf 77 Soothing Toner",
    category: "Skin Care",
    price: 1400,
    image: "images/anua-heartleaf-77-soothing-toner.jpg",
    description: "Heartleaf soothing toner."
    },
    {
    id: 12,
    name: "Anua Heartleaf 70 Intense Calming Cream",
    category: "Skin Care",
    price: 1450,
    image: "images/anua-heartleaf-70-intense-calming-cream.jpg",
    description: "Heartleaf calming cream."
    },
    {
    id: 13,
    name: "Anua Air-Fit UV Defense Sun Cream",
    category: "Skin Care",
    price: 1000,
    image: "images/anua-air-fit-uv-defense-sun-cream.jpg",
    description: "UV defense sun cream."
    },
    /* ---------- THE ORDINARY ---------- */
    {
    id: 14,
    name: "The Ordinary Rose Hip Seed Oil",
    category: "Skin Care",
    price: 2200,
    image: "images/the-ordinary-rose-hip-seed-oil.jpg",
    description: "Rose hip seed oil."
    },
    {
    id: 15,
    name: "The Ordinary Vitamin C Suspension 23%",
    category: "Skin Care",
    price: 1350,
    image: "images/the-ordinary-vitamin-c-suspension-23-ha-spheres-2.jpg",
    description: "Vitamin C suspension."
    },
    {
    id: 16,
    name: "The Ordinary Niacinamide 10% + Zinc 1%",
    category: "Skin Care",
    price: 550,
    image: "images/the-ordinary-niacinamide-10-zinc-1.jpg",
    description: "Niacinamide and zinc serum."
    },
    {
    id: 17,
    name: "The Ordinary Natural Moisturizing Factors + HA",
    category: "Skin Care",
    price: 1500,
    image: "images/the-ordinary-natural-moisturizing-factors-ha.jpg",
    description: "Moisturizing cream with HA."
    },
    {
    id: 18,
    name: "The Ordinary Multi-Peptide Lash and Brow Serum",
    category: "Skin Care",
    price: 550,
    image: "images/the-ordinary-multi-peptide-lash-and-brow-serum.jpg",
    description: "Lash and brow serum."
    },
    {
    id: 19,
    name: "The Ordinary Glycolic Acid 7% Toning Solution",
    category: "Skin Care",
    price: 990,
    image: "images/the-ordinary-glycolic-acid-7-toning-solution.jpg",
    description: "Glycolic acid toning solution."
    },
    {
    id: 20,
    name: "The Ordinary Caffeine Solution 5% + EGCG",
    category: "Skin Care",
    price: 550,
    image: "images/the-ordinary-caffeine-solution-5-egcg.jpg",
    description: "Caffeine and EGCG solution."
    },
    {
    id: 21,
    name: "The Ordinary AHA 30% + BHA 2% Peeling Solution",
    category: "Skin Care",
    price: 850,
    image: "images/the-ordinary-aha-30-bha-2-peeling-solution.jpg",
    description: "AHA and BHA peeling solution."
    },
    /* ---------- CERAVE ---------- */
    {
    id: 22,
    name: "CeraVe Hydrating Cleanser",
    category: "Skin Care",
    price: 500,
    image: "images/CeraVe Hydrating Cleanser.jpg",
    description: "Hydrating cleanser."
    },
    {
    id: 23,
    name: "CeraVe AM Facial Moisturizing Lotion",
    category: "Skin Care",
    price: 480,
    image: "images/cerave AM Facial Moisturizing Lotion.jpg",
    description: "Facial moisturizing lotion."
    },
    {
    id: 24,
    name: "CeraVe Blemish Control Cleanser",
    category: "Skin Care",
    price: 580,
    image: "images/cerave Blemish Control Cleanser.jpg",
    description: "Blemish control cleanser."
    },
    {
    id: 25,
    name: "CeraVe Blemish Control Gel",
    category: "Skin Care",
    price: 400,
    image: "images/cerave Blemish Control Gel.jpg",
    description: "Blemish control gel."
    },
    {
    id: 26,
    name: "CeraVe Daily Moisturizing Lotion",
    category: "Skin Care",
    price: 850,
    image: "images/cerave Daily Moisturizing Lotion.jpg",
    description: "Daily moisturizing lotion."
    },
    {
    id: 27,
    name: "CeraVe Eye Repair Cream",
    category: "Skin Care",
    price: 400,
    image: "images/cerave Eye Repair Cream.jpg",
    description: "Eye repair cream."
    },
    {
    id: 28,
    name: "CeraVe Foaming Cleanser",
    category: "Skin Care",
    price: 600,
    image: "images/CeraVe Foaming Cleanser.jpg",
    description: "Foaming cleanser."
    },
    {
    id: 29,
    name: "CeraVe Hydrating Foaming Oil Cleanser",
    category: "Skin Care",
    price: 1100,
    image: "images/cerave Hydrating Foaming Oil Cleanser.jpg",
    description: "Hydrating foaming oil cleanser."
    },
    {
    id: 30,
    name: "CeraVe Hydrating Hyaluronic Acid Serum",
    category: "Skin Care",
    price: 3400,
    image: "images/cerave Hydrating Hyaluronic Acid Serum.jpg",
    description: "Hyaluronic acid serum."
    },
    {
    id: 31,
    name: "CeraVe Moisturizing Cream",
    category: "Skin Care",
    price: 700,
    image: "images/cerave Moisturizing Cream.jpg",
    description: "Moisturizing cream."
    },
    {
    id: 32,
    name: "CeraVe PM Facial Moisturizing Lotion",
    category: "Skin Care",
    price: 500,
    image: "images/cerave PM Facial Moisturizing Lotion.jpg",
    description: "PM facial moisturizing lotion."
    },
    {
    id: 33,
    name: "CeraVe Resurfacing Retinol Serum",
    category: "Skin Care",
    price: 850,
    image: "images/cerave Resurfacing Retinol Serum.jpg",
    description: "Resurfacing retinol serum."
    },
    {
    id: 34,
    name: "CeraVe SA Smoothing Cleanser",
    category: "Skin Care",
    price: 700,
    image: "images/cerave SA Smoothing Cleanser.jpg",
    description: "SA smoothing cleanser."
    },
    {
    id: 35,
    name: "CeraVe SA Smoothing Cream",
    category: "Skin Care",
    price: 780,
    image: "images/cerave SA Smoothing Cream.jpg",
    description: "SA smoothing cream."
    },
    {
    id: 36,
    name: "CeraVe Skin Renewing Vitamin C Serum",
    category: "Skin Care",
    price: 3500,
    image: "images/cerave Skin Renewing Vitamin C Serum.jpg",
    description: "Vitamin C serum."
    },
    {
    id: 37,
    name: "CeraVe Therapeutic Hand Cream",
    category: "Skin Care",
    price: 3500,
    image: "images/ceraveTherapeutic Hand Cream.jpg",
    description: "Hand cream."
    },
    {
    id: 38,
    name: "VGR Voyager Professional Hair Trimmer (Model V-228)",
    category: "tools",
    price: "DM",
    image: "images/VGR Voyager Professional Hair Trimmer (Model V-228).jpg",
    description: "VGR Voyager Professional Hair Trimmer (Model V-228)."
    },
    {
    id: 39,
    name: "teresia 100% aloe vera soothing gel",
    category: "Skin Care",
    price: 300,
    image: "images/teresia 100% aloe vera soothing gel.jpg",
    description: "soothing alovera gel for dry skin."
    }
    ];
    /* =========================================
    CART
    ========================================= */
    let cart = JSON.parse(
    localStorage.getItem("cuffinCart")
    ) || [];
    /* =========================================
    SAVE CART
    ========================================= */
    function saveCart() {
    localStorage.setItem(
    "cuffinCart",
    JSON.stringify(cart)
    );
    }
    /* =========================================
    UPDATE CART COUNT
    ========================================= */
    function updateCartCount() {
    const cartCount =
    document.getElementById("cart-count");
    if (!cartCount) {
    return;
    }
    cartCount.textContent = cart.length;
    }
    /* =========================================
    ADD TO CART
    ========================================= */
    function addToCart(productId) {
    const product =
    products.find(
    item => item.id === productId
    );
    if (!product) {
    alert(
    "This product is not available yet."
    );
    return;
    }
    cart.push(product);
    saveCart();
    updateCartCount();
    renderCart();
    alert(
    product.name +
    " has been added to your cart."
    );
    }
    /* =========================================
    REMOVE FROM CART
    ========================================= */
    function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    renderCart();
    prepareWhatsAppOrder();
    }
    /* =========================================
    RENDER CART
    ========================================= */
    function renderCart() {
    const cartItems =
    document.getElementById("cart-items");
    const cartTotal =
    document.getElementById("cart-total");
    if (!cartItems || !cartTotal) {
    return;
    }
    cartItems.innerHTML = "";
    /* EMPTY CART */
    if (cart.length === 0) {
    cartItems.innerHTML = `
    <div class="empty-products">
    <p>Your cart is empty.</p>
    </div>
    `;
    cartTotal.textContent =
    "Total: 0 EGP";
    prepareWhatsAppOrder();
    return;
    }
    /* CALCULATE TOTAL */
    let total = 0;
    /* CREATE CART ITEMS */
    cart.forEach(
    (product, index) => {
    total += Number(
    product.price
    );
    const item =
    document.createElement("div");
    item.className =
    "cart-item";
    item.innerHTML = `
    <div class="cart-item-info">
    <h3>
    ${product.name}
    </h3>
    <p>
    ${product.price} EGP
    </p>
    </div>
    <button
    onclick="removeFromCart(${index})">
    Remove
    </button>
    `;
    cartItems.appendChild(item);
    }
    );
    /* SHOW TOTAL */
    cartTotal.textContent =
    "Total: " +
    total +
    " EGP";
    prepareWhatsAppOrder();
    }
    /* =========================================
    OPEN CART
    ========================================= */
    const cartButton =
    document.getElementById(
    "cart-button"
    );
    if (cartButton) {
    cartButton.addEventListener(
    "click",
    function () {
    const cartModal =
    document.getElementById(
    "cart-modal"
    );
    if (cartModal) {
    cartModal.classList.add(
    "active"
    );
    renderCart();
    }
    }
    );
    }
    /* =========================================
    CLOSE CART
    ========================================= */
    const closeCart =
    document.getElementById(
    "close-cart"
    );
    if (closeCart) {
    closeCart.addEventListener(
    "click",
    function () {
    const cartModal =
    document.getElementById(
    "cart-modal"
    );
    if (cartModal) {
    cartModal.classList.remove(
    "active"
    );
    }
    }
    );
    }
    /* =========================================
    CLOSE CART WHEN CLICKING OUTSIDE
    ========================================= */
    const cartModal =
    document.getElementById(
    "cart-modal"
    );
    if (cartModal) {
    cartModal.addEventListener(
    "click",
    function (event) {
    if (
    event.target === cartModal
    ) {
    cartModal.classList.remove(
    "active"
    );
    }
    }
    );
    }
    /* =========================================
    WHATSAPP ORDER
    ========================================= */
    const whatsappButton =
    document.getElementById(
    "whatsapp-order-button"
    );
    if (whatsappButton) {
    whatsappButton.addEventListener(
    "click",
    function (event) {
    /* EMPTY CART */
    if (cart.length === 0) {
    event.preventDefault();
    alert(
    "Your cart is empty."
    );
    return;
    }
    /* CREATE MESSAGE */
    let message =
    "Hello Cuffin Cosmo Brands!\n\n";
    message +=
    "I would like to order:\n\n";
    /* PRODUCTS */
    cart.forEach(
    (product, index) => {
    message +=
    (index + 1) +
    ". " +
    product.name +
    " - " +
    product.price +
    " EGP\n";
    }
    );
    /* TOTAL */
    const total =
    cart.reduce(
    (sum, product) =>
    sum +
    Number(product.price),
    0
    );
    message +=
    "\nTotal: " +
    total +
    " EGP";
    /* WHATSAPP URL */
    const whatsappURL =
    "https://wa.me/201032212226?text=" +
    encodeURIComponent(message);
    whatsappButton.href =
    whatsappURL;
    }
    );
    }
    /* =========================================
    LANGUAGE BUTTON
    ========================================= */
    const languageButton =
    document.getElementById(
    "language-button"
    );
    if (languageButton) {
    languageButton.addEventListener(
    "click",
    function () {
    alert(
    "Arabic version will be available soon."
    );
    }
    );
    }
    /* =========================================
    IMAGE LIGHTBOX
    CLICK PRODUCT IMAGE TO ENLARGE
    ========================================= */
    document.addEventListener(
    "click",
    function (event) {
    const image =
    event.target.closest(
    ".product-card img"
    );
    if (!image) {
    return;
    }
    /* CREATE LIGHTBOX */
    const lightbox =
    document.createElement("div");
    lightbox.className =
    "image-lightbox";
    lightbox.innerHTML = `
    <div class="lightbox-content">
    <button
    class="lightbox-close"
    aria-label="Close">
    &times;
    </button>
    <img
    src="${image.src}"
    alt="${image.alt || ""}">
    </div>
    `;
    document.body.appendChild(
    lightbox
    );
    /* CLOSE BY X OR OUTSIDE IMAGE */
    lightbox.addEventListener(
    "click",
    function (event) {
    if (
    event.target === lightbox ||
    event.target.classList.contains(
    "lightbox-close"
    )
    ) {
    lightbox.remove();
    }
    }
    );
    /* CLOSE WITH ESC */
    function closeWithEscape(event) {
    if (
    event.key === "Escape"
    ) {
    lightbox.remove();
    document.removeEventListener(
    "keydown",
    closeWithEscape
    );
    }
    }
    document.addEventListener(
    "keydown",
    closeWithEscape
    );
    }
    );
    /* =========================================
    INITIALIZE
    ========================================= */
    updateCartCount();
    renderCart();