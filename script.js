/* =========================================
CUFFIN COSMO BRANDS
MAIN JAVASCRIPT
========================================= */
/* =========================================
PRODUCTS
========================================= */
/*
.نیدعب انھ طحتتھ تاجتنملا
:لاثم
{
id: 1,
name: "Product Name",
category: "Hair Care",
price: 450,
image: "images/product.jpg",
description: "Product description"
}
*/
const products = [];
/* =========================================
CART
========================================= */
let cart = JSON.parse(localStorage.getItem("cuffinCart")) || [];
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
alert("This product is not available yet.");
return;
}
cart.push(product);
saveCart();
updateCartCount();
renderCart();
alert(
product.name + " has been added to your cart."
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
if (cart.length === 0) {
cartItems.innerHTML = `
<div class="empty-products">
<p>Your cart is empty.</p>
</div>
`;
cartTotal.textContent =
"Total: 0 EGP";
return;
}
let total = 0;
cart.forEach((product, index) => {
total += Number(product.price);
const item =
document.createElement("div");
item.className = "cart-item";
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
});
cartTotal.textContent =
"Total: " + total + " EGP";
}
/* =========================================
OPEN CART
========================================= */
const cartButton =
document.getElementById("cart-button");
if (cartButton) {
cartButton.addEventListener(
"click",
function () {
const cartModal =
document.getElementById("cart-modal");
if (cartModal) {
cartModal.classList.add("active");
renderCart();
}
}
);
}
/* =========================================
CLOSE CART
========================================= */
const closeCart =
document.getElementById("close-cart");
if (closeCart) {
closeCart.addEventListener(
"click",
function () {
const cartModal =
document.getElementById("cart-modal");
if (cartModal) {
cartModal.classList.remove("active");
}
}
);
}
/* =========================================
CLOSE CART WHEN CLICKING OUTSIDE
========================================= */
const cartModal =
document.getElementById("cart-modal");
if (cartModal) {
cartModal.addEventListener(
"click",
function (event) {
if (event.target === cartModal) {
cartModal.classList.remove("active");
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
if (cart.length === 0) {
event.preventDefault();
alert(
"Your cart is empty."
);
return;
}
let message =
"Hello Cuffin Cosmo Brands 👋 %0A%0A";
message +=
"I would like to order:%0A%0A";
cart.forEach((product, index) => {
message +=
(index + 1) +
". " +
product.name +
" - " +
product.price +
" EGP%0A";
});
const total =
cart.reduce(
(sum, product) =>
sum + Number(product.price),
0
);
message +=
"%0ATotal: " +
total +
" EGP";
const whatsappURL =
"https://wa.me/201032212226?text=" +
message;
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
INITIALIZE
========================================= */
updateCartCount();
renderCart();
