/* CUFFIN - Supabase version */
const $ = id => document.getElementById(id);
const esc = v => String(v == null ? "" : v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const AUTH = k => k.indexOf("eyJ") === 0 ? {Authorization: "Bearer " + k} : {};
const HD = Object.assign({apikey: SB_KEY, "Content-Type": "application/json"}, AUTH(SB_KEY));
const GOVS = ["أسيوط","القاهرة","الجيزة","الإسكندرية","الدقهلية","البحر الأحمر","البحيرة","الفيوم","الغربية","الإسماعيلية","المنوفية","المنيا","القليوبية","الوادي الجديد","شمال سيناء","جنوب سيناء","بورسعيد","دمياط","الشرقية","سوهاج","السويس","أسوان","كفر الشيخ","مطروح","الأقصر","قنا","بني سويف"];
const INSTAPAY = "01556006913";
let products = [];
let cart = JSON.parse(localStorage.getItem("cc2") || "[]");
const money = p => p == null ? "DM for price" : p + " EGP";

/* ---------- المنتجات: قسم ← براند ← منتجات ---------- */
async function loadProducts() {
  const c = $("products-container"); if (!c) return;
  const cat = encodeURIComponent(c.dataset.category);
  try {
    const r = await fetch(SB_URL + "/rest/v1/products?select=id,name,price,image,brands!inner(id,name,categories!inner(name))&active=eq.true&brands.categories.name=eq." + cat + "&order=id", {headers: HD});
    products = (await r.json()).map(p => ({id: p.id, name: p.name, price: p.price, image: /^https?:/.test(p.image) ? p.image : "images/" + p.image, bid: p.brands.id, brand: p.brands.name}));
  } catch (e) { c.innerHTML = '<p class="loading-text">تعذر تحميل المنتجات</p>'; return; }
  renderCat();
}
function renderCat() {
  const c = $("products-container");
  if (!c) return;
  const m = location.hash.match(/b=(\d+)/), bid = m && +m[1];
  if (!products.length) { c.innerHTML = '<div class="empty-products"><h2>Coming Soon</h2><p>Products will be available soon.</p></div>'; return; }
  if (!bid) {
    const g = {}; products.forEach(p => (g[p.bid] = g[p.bid] || {name: p.brand, img: p.image, n: 0}).n++);
    c.innerHTML = '<div class="product-grid">' + Object.keys(g).map(k => `<a class="product-card" href="#b=${k}"><img src="${encodeURI(g[k].img)}" alt="" style="cursor:pointer"><h3>${esc(g[k].name)}</h3><p style="padding-bottom:14px">${g[k].n} products</p></a>`).join("") + "</div>";
    return;
  }
  const list = products.filter(p => p.bid === bid);
  c.innerHTML = `<a class="back-button" href="#" style="margin-bottom:16px">← All brands</a><div class="brand-section"><h3 class="brand-title">${esc(list[0] ? list[0].brand : "")}</h3><div class="product-grid">` +
    list.map(p => `<div class="product-card"><img src="${encodeURI(p.image)}" alt="${esc(p.name)}" loading="lazy"><h3>${esc(p.name)}</h3><p>${esc(money(p.price))}</p><button onclick="addToCart(${p.id})">Add to Cart</button></div>`).join("") + "</div></div>";
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", renderCat);

/* ---------- السلة (بكميات) ---------- */
const save = () => { localStorage.setItem("cc2", JSON.stringify(cart)); renderCart(); };
function addToCart(id) {
  const p = products.find(x => x.id === id); if (!p) return;
  const i = cart.find(x => x.id === id);
  i ? i.qty++ : cart.push({id: p.id, name: p.name, price: p.price, qty: 1});
  save(); $("cart-modal").classList.add("active");
}
function chg(i, d) { cart[i].qty += d; if (cart[i].qty < 1) cart.splice(i, 1); save(); }
function cartTotal() { let t = 0, dm = false; cart.forEach(i => i.price == null ? dm = true : t += i.price * i.qty); return {t, dm}; }
function renderCart() {
  const n = $("cart-count"); if (n) n.textContent = cart.reduce((s, i) => s + i.qty, 0);
  const box = $("cart-items"); if (!box) return;
  box.innerHTML = cart.length ? cart.map((i, k) => `<div class="cart-item"><div class="cart-item-info"><h3>${esc(i.name)}</h3><p>${esc(money(i.price))}</p></div><div><button onclick="chg(${k},-1)">−</button> ${i.qty} <button onclick="chg(${k},1)">+</button></div></div>`).join("") : '<div class="empty-products"><p>Your cart is empty.</p></div>';
  const {t, dm} = cartTotal();
  $("cart-total").textContent = "Total: " + t + " EGP" + (dm ? " (+ items priced on request)" : "");
}
$("cart-button") && $("cart-button").addEventListener("click", () => { $("cart-modal").classList.add("active"); renderCart(); });
$("close-cart") && $("close-cart").addEventListener("click", () => $("cart-modal").classList.remove("active"));
$("cart-modal") && $("cart-modal").addEventListener("click", e => { if (e.target.id === "cart-modal") e.target.classList.remove("active"); });

/* ---------- إتمام الطلب: بيانات ← دفع ← تأكيد ---------- */
function openCheckout() {
  if (!cart.length) return alert("Your cart is empty.");
  const m = $("referral-modal");
  m.querySelector(".referral-content").innerHTML = `<button id="close-referral">×</button>
  <h3>بيانات التوصيل</h3>
  <div class="form-group"><label>الاسم بالكامل</label><input id="f-name"></div>
  <div class="form-group"><label>رقم الهاتف</label><input id="f-phone" type="tel" placeholder="01xxxxxxxxx"></div>
  <div class="form-checkbox"><input type="checkbox" id="f-wa"><label for="f-wa">هذا الرقم عليه واتساب</label></div>
  <div class="form-group"><label>رقم هاتف بديل (اختياري)</label><input id="f-alt" type="tel"></div>
  <div class="form-group"><label>المحافظة</label><select id="f-gov"><option value="">اختر المحافظة</option>${GOVS.map(g => `<option>${g}</option>`).join("")}</select></div>
  <div class="form-group"><label>المركز / المدينة</label><input id="f-city"></div>
  <p class="delivery-note" id="f-note"></p>
  <h3>طريقة الدفع</h3>
  <div class="form-checkbox"><input type="radio" name="pay" value="cod" id="p1" checked><label for="p1">الدفع عند الاستلام</label></div>
  <div class="form-checkbox"><input type="radio" name="pay" value="instapay" id="p2"><label for="p2">InstaPay</label></div>
  <div id="ip-box" style="display:none" class="form-group"><p class="delivery-note">حوّل المبلغ على الرقم <b>${INSTAPAY}</b> ثم ارفع صورة الإيصال (إجباري). الطلب لن يُشحن قبل وصول المبلغ.</p><label>صورة الإيصال</label><input type="file" id="f-rc" accept="image/*"></div>
  <p class="delivery-note" id="f-sum"></p>
  <button id="f-go" class="order-button whatsapp">إرسال الطلب</button>`;
  const {t, dm} = cartTotal();
  $("f-sum").textContent = "إجمالي المنتجات: " + t + " جنيه" + (dm ? " (+ منتجات سعرها حسب الطلب)" : "") + " — الشحن يُضاف حسب المكان";
  $("f-gov").onchange = e => $("f-note").textContent = e.target.value === "أسيوط" ? "التوصيل داخل أسيوط: 30 جنيه" : e.target.value ? "سعر التوصيل يحدد حسب المكان" : "";
  document.querySelectorAll("[name=pay]").forEach(r => r.onchange = () => $("ip-box").style.display = $("p2").checked ? "block" : "none");
  $("close-referral").onclick = () => m.classList.remove("active");
  $("f-go").onclick = submitOrder;
  m.classList.add("active");
}
async function submitOrder() {
  const v = id => $(id).value.trim(), pay = $("p2").checked ? "instapay" : "cod", btn = $("f-go");
  if (!v("f-name") || !v("f-phone") || !v("f-gov") || !v("f-city")) return alert("من فضلك أكمل جميع البيانات المطلوبة.");
  if (!/^01\d{9}$/.test(v("f-phone"))) return alert("رقم الهاتف غير صحيح.");
  const file = $("f-rc").files[0];
  if (pay === "instapay" && !file) return alert("لازم ترفع صورة إيصال التحويل.");
  btn.disabled = true; btn.textContent = "جاري الإرسال...";
  try {
    let rp = "";
    if (pay === "instapay") {
      rp = Date.now() + "-" + Math.random().toString(36).slice(2) + "." + (file.type.split("/")[1] || "jpg").replace("jpeg", "jpg");
      const u = await fetch(SB_URL + "/storage/v1/object/receipts/" + rp, {method: "POST", headers: Object.assign({apikey: SB_KEY, "Content-Type": file.type}, AUTH(SB_KEY)), body: file});
      if (!u.ok) throw new Error("upload");
    }
    const r = await fetch(SB_URL + "/rest/v1/rpc/create_order", {method: "POST", headers: HD, body: JSON.stringify({p: {name: v("f-name"), phone: v("f-phone"), whatsapp: $("f-wa").checked, alt_phone: v("f-alt"), governorate: v("f-gov"), city: v("f-city"), payment_method: pay, receipt_path: rp, items: cart.map(i => ({id: i.id, qty: i.qty}))}})});
    const d = await r.json(); if (!r.ok) throw new Error(d.message);
    const mine = JSON.parse(localStorage.getItem("cc_orders") || "[]"); mine.unshift({o: d.order_no, t: d.token}); localStorage.setItem("cc_orders", JSON.stringify(mine));
    cart = []; save();
    const link = "track.html?o=" + d.order_no + "&t=" + d.token;
    $("referral-modal").querySelector(".referral-content").innerHTML = `<h3>تم إرسال طلبك ✅</h3><p class="success-text">رقم طلبك: <b>${d.order_no}</b><br>${pay === "instapay" ? "هنراجع التحويل ونأكد لك." : "هنتواصل معاك لتأكيد الطلب."}<br>احتفظ بالرابط ده لمتابعة طلبك:</p><a class="referral-option-btn" href="${link}">تتبّع طلبك</a><input readonly value="${location.origin}/${link}" onclick="this.select()" style="width:100%;padding:8px;background:#18101f;color:#fff;border:1px solid #6e29a0;border-radius:8px;margin-bottom:10px;direction:ltr"><button class="referral-option-btn" onclick="document.getElementById('referral-modal').classList.remove('active');document.getElementById('cart-modal').classList.remove('active')">إغلاق</button>`;
  } catch (e) { alert("حدث خطأ: " + (e.message || "حاول مرة أخرى")); btn.disabled = false; btn.textContent = "إرسال الطلب"; }
}
$("start-order-button") && $("start-order-button").addEventListener("click", openCheckout);
$("referral-modal") && $("referral-modal").addEventListener("click", e => { if (e.target.id === "referral-modal") e.target.classList.remove("active"); });
$("language-button") && $("language-button").addEventListener("click", () => alert("Arabic version will be available soon."));
document.addEventListener("click", e => {
  const im = e.target.closest(".product-card img"); if (!im || im.closest("a")) return;
  const l = document.createElement("div"); l.className = "image-lightbox";
  l.innerHTML = `<div class="lightbox-content"><button class="lightbox-close">&times;</button><img src="${im.src}"></div>`;
  l.onclick = ev => { if (ev.target === l || ev.target.className === "lightbox-close") l.remove(); };
  document.body.appendChild(l);
});
renderCart(); loadProducts();