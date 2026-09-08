/* =====================================================
CUFFIN COSMO BRANDS
MAIN JAVASCRIPT
===================================================== */
/* =====================================================
PRODUCTS
=====================================================
.كتعاتب تاجتنملا طحتھ انھ
:ھل جتنم لك
id
name
category
price
image
description
:لاثم
{
id: 1,
name: "Product Name",
category: "Skin Care",
price: 250,
image: "images/product1.jpg",
description: "Product description"
}
===================================================== */
const products = [
    {

        id: 1,

        name: "passion baby fresh baby cologne",

        category: "Skin Care",

        price: 85,

        image: "images/passion baby fresh baby cologne.jpg",

        description: "Gentle foaming cleanser for normal to oily skin."

    }
    /*
    :لاثم
    {
    id: 1,
    name: "Example Product",
    category: "Skin Care",
    price: 250,
    image: "images/product1.jpg",
    description: "Example product description"
    }
    */
    ];
    /* =====================================================
    CART
    ===================================================== */
    let cart = [];
    /* =====================================================
    ELEMENTS
    ===================================================== */
    const productContainer =
    document.getElementById("product-container");
    const productsTitle =
    document.getElementById("products-title");
    const productsDescription =
    document.getElementById("products-description");
    const cartButton =
    document.getElementById("cart-button");
    const cartCount =
    document.getElementById("cart-count");
    const whatsappOrderButton =
    document.getElementById("whatsapp-order-button");
    const categoryCards =
    document.querySelectorAll(".category-card");
    /* =====================================================
    DISPLAY PRODUCTS
    ===================================================== */
    function displayProducts(category) {
    const categoryProducts =
    products.filter(function(product) {
    return product.category === category;
    });
    /* Change title */
    productsTitle.textContent = category;
    /* Change description */
    productsDescription.textContent =
    "Discover our " + category + " products.";
    /* Clear old products */
    productContainer.innerHTML = "";
    /* No products */
    if (categoryProducts.length === 0) {
    productContainer.innerHTML = `
    <div class="products-placeholder">
    <div class="placeholder-icon">
    ✨
    </div>
    <h3>
    No Products Yet
    </h3>
    <p>
    Products will be added soon.
    </p>
    </div>
    `;
    return;
    }
    /* Display products */
    categoryProducts.forEach(function(product) {
    const productCard =
    document.createElement("div");
    productCard.className =
    "product-card";
    productCard.innerHTML = `
    <div class="product-image">
    <img
    src="${product.image}"
    alt="${product.name}"
    >
    </div>
    <div class="product-info">
    <h3>
    ${product.name}
    </h3>
    <p class="product-description">
    ${product.description}
    </p>
    <div class="product-bottom">
    <span class="product-price">
    ${product.price} EGP
    </span>
    <button
    type="button"
    class="add-to-cart"
    onclick="addToCart(${product.id})"
    >
    Add to Cart
    </button>
    </div>
    </div>
    `;
    productContainer.appendChild(productCard);
    });
    }
    /* =====================================================
    CATEGORY CLICK
    ===================================================== */
    categoryCards.forEach(function(card) {
    card.addEventListener("click", function() {
    const category =
    card.getAttribute("data-category");
    displayProducts(category);
    });
    });
    /* =====================================================
    ADD TO CART
    ===================================================== */
    function addToCart(productId) {
    const product =
    products.find(function(item) {
    return item.id === productId;
    });
    if (!product) {
    return;
    }
    const existingProduct =
    cart.find(function(item) {
    return item.id === productId;
    });
    if (existingProduct) {
    existingProduct.quantity++;
    } else {
    cart.push({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1
    });
    }
    updateCartCount();
    saveCart();
    showAddedMessage();
    }
    /* =====================================================
    UPDATE CART COUNT
    ===================================================== */
    function updateCartCount() {
    const totalQuantity =
    cart.reduce(function(total, item) {
    return total + item.quantity;
    }, 0);
    cartCount.textContent =
    totalQuantity;
    }
    /* =====================================================
    SAVE CART
    ===================================================== */
    function saveCart() {
    localStorage.setItem(
    "cuffinCart",
    JSON.stringify(cart)
    );
    }
    /* =====================================================
    LOAD CART
    ===================================================== */
    function loadCart() {
    const savedCart =
    localStorage.getItem("cuffinCart");
    if (savedCart) {
    try {
    cart =
    JSON.parse(savedCart);
    } catch (error) {
    cart = [];
    }
    }
    updateCartCount();
    }
    /* =====================================================
    SHOW ADDED MESSAGE
    ===================================================== */
    function showAddedMessage() {
    const message =
    document.createElement("div");
    message.className =
    "cart-message";
    message.textContent =
    "Added to cart ✓";
    document.body.appendChild(message);
    setTimeout(function() {
    message.remove();
    }, 2000);
    }
    /* =====================================================
    CART BUTTON
    ===================================================== */
    cartButton.addEventListener(
    "click",
    function() {
    showCart();
    }
    );
    /* =====================================================
    SHOW CART
    ===================================================== */
    function showCart() {
    /* Remove existing cart */
    const oldCart =
    document.querySelector(".cart-modal");
    if (oldCart) {
    oldCart.remove();
    }
    /* Create modal */
    const modal =
    document.createElement("div");
    modal.className =
    "cart-modal";
    /* Empty cart */
    if (cart.length === 0) {
    modal.innerHTML = `
    <div class="cart-box">
    <button
    class="close-cart"
    type="button"
    >
    ×
    </button>
    <h2>
    Your Cart
    </h2>
    <p>
    Your cart is empty.
    </p>
    </div>
    `;
    } else {
    /* Calculate total */
    const total =
    cart.reduce(function(sum, item) {
    return sum +
    (item.price * item.quantity);
    }, 0);
    let cartItemsHTML = "";
    cart.forEach(function(item) {
    cartItemsHTML += `
    <div class="cart-item">
    <div class="cart-item-info">
    <h3>
    ${item.name}
    </h3>
    <p>
    ${item.price} EGP
    </p>
    </div>
    <div class="cart-quantity">
    <button
    type="button"
    onclick="decreaseQuantity(${item.id})"
    >
    −
    </button>
    <span>
    ${item.quantity}
    </span>
    <button
    type="button"
    onclick="increaseQuantity(${item.id})"
    >
    +
    </button>
    </div>
    <button
    type="button"
    class="remove-item"
    onclick="removeFromCart(${item.id})"
    >
    Remove
    </button>
    </div>
    `;
    });
    modal.innerHTML = `
    <div class="cart-box">
    <button
    class="close-cart"
    type="button"
    >
    ×
    </button>
    <h2>
    Your Cart
    </h2>
    <div class="cart-items">
    ${cartItemsHTML}
    </div>
    <div class="cart-total">
    <span>
    Total
    </span>
    <strong>
    ${total} EGP
    </strong>
    </div>
    <button
    type="button"
    class="checkout-button"
    onclick="sendOrderToWhatsApp()"
    >
    Order via WhatsApp
    </button>
    </div>
    `;
    }
    document.body.appendChild(modal);
    /* Close cart */
    const closeButton =
    modal.querySelector(".close-cart");
    closeButton.addEventListener(
    "click",
    function() {
    modal.remove();
    }
    );
    /* Close when clicking outside */
    modal.addEventListener(
    "click",
    function(event) {
    if (event.target === modal) {
    modal.remove();
    }
    }
    );
    }
    /* =====================================================
    INCREASE QUANTITY
    ===================================================== */
    function increaseQuantity(productId) {
    const item =
    cart.find(function(product) {
    return product.id === productId;
    });
    if (item) {
    item.quantity++;
    }
    updateCartCount();
    saveCart();
    showCart();
    }
    /* =====================================================
    DECREASE QUANTITY
    ===================================================== */
    function decreaseQuantity(productId) {
    const item =
    cart.find(function(product) {
    return product.id === productId;
    });
    if (!item) {
    return;
    }
    item.quantity--;
    if (item.quantity <= 0) {
    cart =
    cart.filter(function(product) {
    return product.id !== productId;
    });
    }
    updateCartCount();
    saveCart();
    showCart();
    }
    /* =====================================================
    REMOVE FROM CART
    ===================================================== */
    function removeFromCart(productId) {
    cart =
    cart.filter(function(product) {
    return product.id !== productId;
    });
    updateCartCount();
    saveCart();
    showCart();
    }
    /* =====================================================
    SEND ORDER TO WHATSAPP
    ===================================================== */
    function sendOrderToWhatsApp() {
    if (cart.length === 0) {
    alert(
    "Your cart is empty."
    );
    return;
    }
    const phoneNumber =
    "201032212226";
    let message =
    "Hello Cuffin Cosmo Brands 👋 \n\n";
    message +=
    "I would like to place an order:\n\n";
    cart.forEach(function(item) {
    message +=
    "• " +
    item.name +
    "\n";
    message +=
    "Quantity: " +
    item.quantity +
    "\n";
    message +=
    "Price: " +
    item.price +
    " EGP\n";
    message +=
    "Subtotal: " +
    (item.price * item.quantity) +
    " EGP\n\n";
    });
    const total =
    cart.reduce(function(sum, item) {
    return sum +
    (item.price * item.quantity);
    }, 0);
    message +=
    "Total: " +
    total +
    " EGP\n\n";
    message +=
    "Please contact me to confirm the order.";
    const whatsappURL =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    encodeURIComponent(message);
    window.open(
    whatsappURL,
    "_blank"
    );
    }
    /* =====================================================
    ORDER BUTTON
    ===================================================== */
    whatsappOrderButton.addEventListener(
    "click",
    function() {
    if (cart.length === 0) {
    alert(
    "Please add products to your cart first."
    );
    return;
    }
    sendOrderToWhatsApp();
    }
    );
    /* =====================================================
    INITIALIZE
    ===================================================== */
    loadCart();