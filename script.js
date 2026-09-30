/* =========================================
CUFFIN COSMO BRANDS
MAIN JAVASCRIPT
========================================= */

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
        image: "images/vgr-voyager-professional-hair-trimmer-v228.jpg",
        description: "VGR Voyager Professional Hair Trimmer (Model V-228)."
    },
    {
        id: 39,
        name: "Teresia 100% Aloe Vera Soothing Gel",
        category: "Skin Care",
        price: 300,
        image: "images/teresia-100-aloe-vera-soothing-gel.jpg",
        description: "Soothing aloe vera gel for dry skin."
    },

    /* ---------- SANOSAN (BODY CARE) ---------- */
    {
        id: 40,
        name: "Sanosan Kids Shower & Shampoo",
        category: "Body Care",
        price: 350,
        image: "images/sanosan-kids-shower-shampoo.jpg",
        description: "Kids shower and shampoo."
    },
    {
        id: 41,
        name: "Sanosan Care Soap Milk",
        category: "Body Care",
        price: 230,
        image: "images/sanosan-care-soap-milk.jpg",
        description: "Care soap with milk."
    },
    {
        id: 42,
        name: "Sanosan Care Cream",
        category: "Body Care",
        price: 340,
        image: "images/sanosan-care-cream.jpg",
        description: "Care cream."
    },
    {
        id: 43,
        name: "Sanosan Baby Sun Cream SPF 50+",
        category: "Body Care",
        price: 650,
        image: "images/sanosan-baby-sun-cream-spf-50.jpg",
        description: "Baby sun cream SPF 50+."
    },
    {
        id: 44,
        name: "Sanosan Baby Care Oil",
        category: "Body Care",
        price: 300,
        image: "images/sanosan-baby-care-oil.jpg",
        description: "Baby care oil."
    },
    {
        id: 45,
        name: "Sanosan Baby Care Lotion",
        category: "Body Care",
        price: 300,
        image: "images/sanosan-baby-care-lotion.jpg",
        description: "Baby care lotion."
    },

    /* ---------- GKHAIR (HAIR CARE) ---------- */
    {
        id: 46,
        name: "GKhair Moisturizing Shampoo",
        category: "Hair Care",
        price: 1000,
        image: "images/gkhair-moisturizing-shampoo.jpg",
        description: "Moisturizing shampoo for smooth, hydrated hair."
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
                        ${product.name}
                    </h3>
                    <p>
                        ${displayPrice}
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