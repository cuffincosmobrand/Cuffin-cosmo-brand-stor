/* =========================================
CUFFIN COSMO BRANDS
MAIN JAVASCRIPT
========================================= */

/* =========================================
رابط جدول المنتجات (Google Sheets)
========================================= */
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWKA3quXhoboDks7VH4BdvlUmvvbRr8TUf4ibv99aJGt_2eiGW9gC2NFceuUN_BvOX3oe4yPbA4gEc/pub?gid=1022376823&single=true&output=csv";

/* =========================================
TELEGRAM BOT CONFIG
========================================= */
const TELEGRAM_BOT_TOKEN = "8977662781:AAGVqfQK6AD6JT-WHgkDcqOUSfp0YTq9XAY";
const TELEGRAM_CHAT_ID = "1846301581";

/* =========================================
EGYPT GOVERNORATES
========================================= */
const egyptGovernorates = [
    "أسيوط",
    "القاهرة",
    "الجيزة",
    "الإسكندرية",
    "الدقهلية",
    "البحر الأحمر",
    "البحيرة",
    "الفيوم",
    "الغربية",
    "الإسماعيلية",
    "المنوفية",
    "المنيا",
    "القليوبية",
    "الوادي الجديد",
    "شمال سيناء",
    "جنوب سيناء",
    "بورسعيد",
    "دمياط",
    "الشرقية",
    "سوهاج",
    "السويس",
    "أسوان",
    "كفر الشيخ",
    "مطروح",
    "الأقصر",
    "قنا",
    "بني سويف"
];

/* =========================================
PRODUCTS (بتتحمل من Google Sheets)
========================================= */
let products = [];

/* قراءة ملف CSV */
function parseCSV(text) {
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
        const c = text[i];

        if (inQuotes) {
            if (c === '"') {
                if (text[i + 1] === '"') {
                    field += '"';
                    i++;
                } else {
                    inQuotes = false;
                }
            } else {
                field += c;
            }
        } else {
            if (c === '"') {
                inQuotes = true;
            } else if (c === ",") {
                row.push(field);
                field = "";
            } else if (c === "\n") {
                row.push(field);
                rows.push(row);
                row = [];
                field = "";
            } else if (c !== "\r") {
                field += c;
            }
        }
    }

    if (field !== "" || row.length > 0) {
        row.push(field);
        rows.push(row);
    }

    return rows;
}

/* تحويل الجدول لقائمة منتجات */
function buildProductsFromCSV(text) {
    const rows = parseCSV(text);

    if (rows.length < 2) {
        return [];
    }

    const headers = rows[0].map(function (h) {
        return h.trim().toLowerCase();
    });

    const list = [];

    for (let i = 1; i < rows.length; i++) {
        const obj = {};

        headers.forEach(function (header, index) {
            obj[header] = (rows[i][index] || "").trim();
        });

        if (!obj.name) {
            continue;
        }

        if (obj.show && obj.show.toLowerCase() === "no") {
            continue;
        }

        const numericPrice = Number(obj.price);
        const price =
            obj.price !== "" && !isNaN(numericPrice)
                ? numericPrice
                : (obj.price || "DM");

        list.push({
            id: i,
            name: obj.name,
            category: obj.category || "",
            brand: obj.brand || "",
            price: price,
            image: "images/" + (obj.image || ""),
            description: ""
        });
    }

    return list;
}

/* تحميل المنتجات (ولو النت ضعيف يستخدم آخر نسخة محفوظة) */
async function loadProducts() {
    try {
        const response = await fetch(SHEET_CSV_URL);

        if (!response.ok) {
            throw new Error("fetch failed");
        }

        const text = await response.text();
        products = buildProductsFromCSV(text);

        if (products.length > 0) {
            localStorage.setItem(
                "cuffinProductsCache",
                JSON.stringify(products)
            );
        }
    } catch (error) {
        const cached = localStorage.getItem("cuffinProductsCache");

        if (cached) {
            products = JSON.parse(cached);
        }
    }
}

/* حماية النصوص */
function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

/* عرض منتجات القسم مقسمة حسب البراند */
function renderCategoryPage() {
    const container = document.getElementById("products-container");

    if (!container) {
        return;
    }

    const categoryName = (
        container.getAttribute("data-category") || ""
    ).trim().toLowerCase();

    const categoryProducts = products.filter(function (product) {
        return product.category.trim().toLowerCase() === categoryName;
    });

    if (categoryProducts.length === 0) {
        container.innerHTML = `
            <div class="product-grid">
                <div class="empty-products">
                    <h2>Coming Soon</h2>
                    <p>Products will be available soon.</p>
                </div>
            </div>
        `;
        return;
    }

    /* تجميع المنتجات حسب البراند بنفس ترتيب ظهورها في الجدول */
    const brandOrder = [];
    const brandGroups = {};

    categoryProducts.forEach(function (product) {
        const brandName = product.brand || "Other";

        if (!brandGroups[brandName]) {
            brandGroups[brandName] = [];
            brandOrder.push(brandName);
        }

        brandGroups[brandName].push(product);
    });

    let html = "";

    brandOrder.forEach(function (brandName) {
        html += `
            <div class="brand-section">
                <h3 class="brand-title">${escapeHTML(brandName)}</h3>
                <div class="product-grid">
        `;

        brandGroups[brandName].forEach(function (product) {
            const numericPrice = Number(product.price);
            const priceText =
                isNaN(numericPrice)
                    ? (product.price === "DM" ? "DM for price" : product.price)
                    : product.price + " EGP";

            html += `
                <div class="product-card">
                    <img src="${encodeURI(product.image)}" alt="${escapeHTML(product.name)}" loading="lazy">
                    <h3>${escapeHTML(product.name)}</h3>
                    <p>${escapeHTML(priceText)}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

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
    const cartCount = document.getElementById("cart-count");
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

    const cartModal =
        document.getElementById(
            "cart-modal"
        );

    if (cartModal) {
        cartModal.classList.add(
            "active"
        );
    }
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
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

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
        return;
    }

    /* CALCULATE TOTAL (SKIP NON-NUMERIC PRICES LIKE "DM") */
    let total = 0;
    let hasCustomPrice = false;

    /* CREATE CART ITEMS */
    cart.forEach(
        (product, index) => {
            const numericPrice =
                Number(product.price);

            if (isNaN(numericPrice)) {
                hasCustomPrice = true;
            } else {
                total += numericPrice;
            }

            const item = document.createElement("div");
            item.className =
                "cart-item";

            const displayPrice =
                isNaN(numericPrice)
                    ? product.price
                    : product.price + " EGP";

            item.innerHTML = `
                <div class="cart-item-info">
                    <h3>
                        ${escapeHTML(product.name)}
                    </h3>
                    <p>
                        ${escapeHTML(displayPrice)}
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
        hasCustomPrice
            ? "Total: " + total + " EGP (+ items priced on request)"
            : "Total: " + total + " EGP";
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
BUILD ORDER MESSAGE
========================================= */
function buildOrderMessage(referralCode, customerInfo) {
    let message =
        "طلب جديد - Cuffin Cosmo Brands\n\n";
    message +=
        "المنتجات:\n";

    let total = 0;
    let hasCustomPrice = false;

    cart.forEach(
        (product, index) => {
            const numericPrice =
                Number(product.price);

            const displayPrice =
                isNaN(numericPrice)
                    ? product.price
                    : product.price + " EGP";

            if (isNaN(numericPrice)) {
                hasCustomPrice = true;
            } else {
                total += numericPrice;
            }

            message +=
                (index + 1) +
                ". " +
                product.name +
                " - " +
                displayPrice +
                "\n";
        }
    );

    message +=
        "\nالإجمالي: " +
        total +
        " EGP";

    if (hasCustomPrice) {
        message +=
            " (+ منتجات سعرها حسب الطلب)";
    }

    message +=
        "\n\nكود المسوق: " +
        (referralCode ? referralCode : "طلب مباشر (بدون مسوق)");

    if (customerInfo) {
        message +=
            "\n\nبيانات العميل:\n";
        message +=
            "الاسم: " + customerInfo.name + "\n";
        message +=
            "رقم الهاتف: " + customerInfo.phone +
            (customerInfo.hasWhatsapp ? " (عليه واتساب)" : " (بدون واتساب)") + "\n";
        message +=
            "رقم بديل: " + (customerInfo.altPhone || "-") + "\n";
        message +=
            "المحافظة: " + customerInfo.governorate + "\n";
        message +=
            "المركز / المدينة: " + customerInfo.city + "\n";
        message +=
            "ملاحظة التوصيل: " + customerInfo.deliveryNote;
    }

    return message;
}

/* =========================================
SEND ORDER TO TELEGRAM AUTOMATICALLY
========================================= */
async function sendOrderToTelegram(message) {
    const url =
        "https://api.telegram.org/bot" +
        TELEGRAM_BOT_TOKEN +
        "/sendMessage";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message
            })
        });

        const result = await response.json();

        return result.ok === true;
    } catch (error) {
        return false;
    }
}

/* =========================================
REFERRAL FLOW (POPUP STEPS)
========================================= */
let selectedReferralCode = "";

function openReferralModal() {
    if (cart.length === 0) {
        alert(
            "Your cart is empty."
        );
        return;
    }

    selectedReferralCode = "";

    const referralModal =
        document.getElementById(
            "referral-modal"
        );

    if (!referralModal) {
        return;
    }

    showReferralStep(1);
    referralModal.classList.add(
        "active"
    );
}

function closeReferralModal() {
    const referralModal =
        document.getElementById(
            "referral-modal"
        );

    if (referralModal) {
        referralModal.classList.remove(
            "active"
        );
    }
}

function showReferralStep(stepNumber) {
    const step1 =
        document.getElementById(
            "referral-step-1"
        );
    const step2 =
        document.getElementById(
            "referral-step-2"
        );
    const step3 =
        document.getElementById(
            "referral-step-3"
        );
    const step4 =
        document.getElementById(
            "referral-step-4"
        );

    if (step1) {
        step1.style.display =
            stepNumber === 1 ? "block" : "none";
    }
    if (step2) {
        step2.style.display =
            stepNumber === 2 ? "block" : "none";
    }
    if (step3) {
        step3.style.display =
            stepNumber === 3 ? "block" : "none";
    }
    if (step4) {
        step4.style.display =
            stepNumber === 4 ? "block" : "none";
    }
}

/* START ORDER BUTTON (OPENS REFERRAL MODAL) */
const startOrderButton =
    document.getElementById(
        "start-order-button"
    );

if (startOrderButton) {
    startOrderButton.addEventListener(
        "click",
        openReferralModal
    );
}

/* CLOSE REFERRAL MODAL BUTTON */
const closeReferralButton =
    document.getElementById(
        "close-referral"
    );

if (closeReferralButton) {
    closeReferralButton.addEventListener(
        "click",
        closeReferralModal
    );
}

/* CLOSE REFERRAL MODAL WHEN CLICKING OUTSIDE */
const referralModalElement =
    document.getElementById(
        "referral-modal"
    );

if (referralModalElement) {
    referralModalElement.addEventListener(
        "click",
        function (event) {
            if (
                event.target === referralModalElement
            ) {
                closeReferralModal();
            }
        }
    );
}

/* STEP 1: YES (VIA REFERRAL) */
const referralYesButton =
    document.getElementById(
        "referral-yes"
    );

if (referralYesButton) {
    referralYesButton.addEventListener(
        "click",
        function () {
            showReferralStep(2);
        }
    );
}

/* STEP 1: NO (DIRECT ORDER) */
const referralNoButton =
    document.getElementById(
        "referral-no"
    );

if (referralNoButton) {
    referralNoButton.addEventListener(
        "click",
        function () {
            selectedReferralCode = "";
            showReferralStep(3);
        }
    );
}

/* STEP 2: SELECT REFERRAL CODE */
const referralCodeButtons =
    document.querySelectorAll(
        ".referral-code-btn"
    );

referralCodeButtons.forEach(
    function (button) {
        button.addEventListener(
            "click",
            function () {
                selectedReferralCode =
                    button.getAttribute(
                        "data-code"
                    );
                showReferralStep(3);
            }
        );
    }
);

/* =========================================
STEP 3: CUSTOMER INFO FORM
========================================= */

/* POPULATE GOVERNORATES DROPDOWN */
const governorateSelect =
    document.getElementById(
        "customer-governorate"
    );

if (governorateSelect) {
    egyptGovernorates.forEach(
        function (governorate) {
            const option =
                document.createElement("option");
            option.value = governorate;
            option.textContent = governorate;
            governorateSelect.appendChild(option);
        }
    );
}

/* UPDATE DELIVERY NOTE WHEN GOVERNORATE CHANGES */
const deliveryNoteText =
    document.getElementById(
        "delivery-note"
    );

function updateDeliveryNote() {
    if (!governorateSelect || !deliveryNoteText) {
        return;
    }

    const selectedGovernorate =
        governorateSelect.value;

    if (selectedGovernorate === "أسيوط") {
        deliveryNoteText.textContent =
            "التوصيل داخل أسيوط: 30 جنيه";
    } else if (selectedGovernorate === "") {
        deliveryNoteText.textContent = "";
    } else {
        deliveryNoteText.textContent =
            "سعر التوصيل يحدد حسب المكان";
    }
}

if (governorateSelect) {
    governorateSelect.addEventListener(
        "change",
        updateDeliveryNote
    );
}

/* SUBMIT CUSTOMER FORM */
const submitOrderButton =
    document.getElementById(
        "submit-order-button"
    );

if (submitOrderButton) {
    submitOrderButton.addEventListener(
        "click",
        async function () {
            const nameInput =
                document.getElementById(
                    "customer-name"
                );
            const phoneInput =
                document.getElementById(
                    "customer-phone"
                );
            const whatsappCheckbox =
                document.getElementById(
                    "customer-whatsapp"
                );
            const altPhoneInput =
                document.getElementById(
                    "customer-alt-phone"
                );
            const cityInput =
                document.getElementById(
                    "customer-city"
                );

            if (
                !nameInput || !nameInput.value.trim() ||
                !phoneInput || !phoneInput.value.trim() ||
                !governorateSelect || !governorateSelect.value ||
                !cityInput || !cityInput.value.trim()
            ) {
                alert(
                    "من فضلك أكمل جميع البيانات المطلوبة."
                );
                return;
            }

            const customerInfo = {
                name: nameInput.value.trim(),
                phone: phoneInput.value.trim(),
                hasWhatsapp: whatsappCheckbox ? whatsappCheckbox.checked : false,
                altPhone: altPhoneInput ? altPhoneInput.value.trim() : "",
                governorate: governorateSelect.value,
                city: cityInput.value.trim(),
                deliveryNote: deliveryNoteText ? deliveryNoteText.textContent : ""
            };

            submitOrderButton.disabled = true;
            submitOrderButton.textContent = "جاري إرسال الطلب...";

            const message =
                buildOrderMessage(
                    selectedReferralCode,
                    customerInfo
                );

            const sent =
                await sendOrderToTelegram(message);

            submitOrderButton.disabled = false;
            submitOrderButton.textContent = "إرسال الطلب";

            if (sent) {
                cart = [];
                saveCart();
                updateCartCount();
                renderCart();
                showReferralStep(4);
            } else {
                alert(
                    "حدث خطأ أثناء إرسال الطلب. من فضلك حاول مرة أخرى."
                );
            }
        }
    );
}

/* CLOSE AFTER SUCCESS (STEP 4) */
const closeAfterSuccessButton =
    document.getElementById(
        "close-after-success"
    );

if (closeAfterSuccessButton) {
    closeAfterSuccessButton.addEventListener(
        "click",
        function () {
            closeReferralModal();
            const cartModalElement =
                document.getElementById(
                    "cart-modal"
                );
            if (cartModalElement) {
                cartModalElement.classList.remove(
                    "active"
                );
            }
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
        const lightbox = document.createElement("div");
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
loadProducts().then(renderCategoryPage);