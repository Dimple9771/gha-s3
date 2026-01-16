// ---------- Configure your restaurant here ----------
const RESTAURANT = {
  name: "Saffron & Stone",
  phoneE164: "+14045551234", // <-- change
  whatsappE164: "+14045551234", // <-- change (same as phone ok)
  address: "123 Peachtree St NE, Atlanta, GA 30303",
  googleMapsQuery: "123 Peachtree St NE, Atlanta, GA 30303",
  currency: "USD",
  hours: [
    { day: "Mon", time: "11:00 AM – 10:00 PM" },
    { day: "Tue", time: "11:00 AM – 10:00 PM" },
    { day: "Wed", time: "11:00 AM – 10:00 PM" },
    { day: "Thu", time: "11:00 AM – 10:00 PM" },
    { day: "Fri", time: "11:00 AM – 11:00 PM" },
    { day: "Sat", time: "12:00 PM – 11:00 PM" },
    { day: "Sun", time: "12:00 PM – 9:00 PM" },
  ],
};

const MENU = [
  // Starters
  { id: "veg-samosa", name: "Veg Samosa (2 pcs)", desc: "Crispy pastry with spiced potato filling.", category: "Starters", veg: true, spicy: false, price: 5.99, popular: 90 },
  { id: "chili-paneer", name: "Chili Paneer", desc: "Paneer tossed with peppers and Indo-Chinese sauce.", category: "Starters", veg: true, spicy: true, price: 11.99, popular: 85 },
  { id: "chicken-65", name: "Chicken 65", desc: "Crispy chicken bites with curry leaves and spice.", category: "Starters", veg: false, spicy: true, price: 12.99, popular: 92 },

  // Mains
  { id: "butter-chicken", name: "Butter Chicken", desc: "Creamy tomato gravy, tender chicken, classic comfort.", category: "Mains", veg: false, spicy: false, price: 16.99, popular: 98 },
  { id: "paneer-tikka-masala", name: "Paneer Tikka Masala", desc: "Charred paneer in rich masala sauce.", category: "Mains", veg: true, spicy: false, price: 15.99, popular: 88 },
  { id: "goat-curry", name: "Goat Curry", desc: "Slow-cooked goat curry with house spices.", category: "Mains", veg: false, spicy: true, price: 19.99, popular: 84 },

  // Biryani
  { id: "chicken-biryani", name: "Chicken Biryani", desc: "Fragrant basmati rice with chicken and aromatics.", category: "Biryani", veg: false, spicy: true, price: 17.99, popular: 93 },
  { id: "veg-biryani", name: "Veg Biryani", desc: "Basmati rice with seasonal veggies and spices.", category: "Biryani", veg: true, spicy: true, price: 15.49, popular: 80 },

  // Breads & Sides
  { id: "garlic-naan", name: "Garlic Naan", desc: "Soft naan topped with garlic and butter.", category: "Breads & Sides", veg: true, spicy: false, price: 3.99, popular: 96 },
  { id: "basmati-rice", name: "Basmati Rice", desc: "Steamed basmati rice.", category: "Breads & Sides", veg: true, spicy: false, price: 3.49, popular: 70 },
  { id: "raita", name: "Cucumber Raita", desc: "Yogurt with cucumber, cumin, and herbs.", category: "Breads & Sides", veg: true, spicy: false, price: 3.99, popular: 72 },

  // Drinks
  { id: "mango-lassi", name: "Mango Lassi", desc: "Sweet mango yogurt drink.", category: "Drinks", veg: true, spicy: false, price: 4.99, popular: 91 },
  { id: "masala-chai", name: "Masala Chai", desc: "Spiced tea simmered with milk.", category: "Drinks", veg: true, spicy: false, price: 3.49, popular: 78 },
];

// ---------- Helpers ----------
const $ = (id) => document.getElementById(id);
const fmt = (n) => new Intl.NumberFormat(undefined, { style: "currency", currency: RESTAURANT.currency }).format(n);

const STORAGE_KEY = "restaurant_cart_v1";
const NOTES_KEY = "restaurant_notes_v1";

function loadCart() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}
function loadNotes() {
  return localStorage.getItem(NOTES_KEY) || "";
}
function saveNotes(notes) {
  localStorage.setItem(NOTES_KEY, notes);
}

function getCategories() {
  return Array.from(new Set(MENU.map(m => m.category))).sort();
}

// ---------- Render Menu ----------
function getFilters() {
  return {
    q: $("searchInput").value.trim().toLowerCase(),
    category: $("categorySelect").value,
    vegOnly: $("vegOnlyToggle").checked,
    spicyOnly: $("spicyToggle").checked,
    sort: $("sortSelect").value,
  };
}

function applyFilters(items, f) {
  let out = [...items];

  if (f.q) {
    out = out.filter(i =>
      i.name.toLowerCase().includes(f.q) ||
      i.desc.toLowerCase().includes(f.q) ||
      i.category.toLowerCase().includes(f.q)
    );
  }
  if (f.category !== "all") out = out.filter(i => i.category === f.category);
  if (f.vegOnly) out = out.filter(i => i.veg === true);
  if (f.spicyOnly) out = out.filter(i => i.spicy === true);

  if (f.sort === "popular") out.sort((a,b) => b.popular - a.popular);
  if (f.sort === "price_asc") out.sort((a,b) => a.price - b.price);
  if (f.sort === "price_desc") out.sort((a,b) => b.price - a.price);

  return out;
}

function renderMenu() {
  const f = getFilters();
  const items = applyFilters(MENU, f);

  const grid = $("menuGrid");
  grid.innerHTML = "";

  items.forEach(item => {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `
      <div class="item__top">
        <div>
          <div class="item__name">${item.name}</div>
          <div class="item__badges">
            <span class="tag ${item.veg ? "tag--veg" : ""}">${item.veg ? "VEG" : "NON-VEG"}</span>
            ${item.spicy ? `<span class="tag tag--spicy">SPICY</span>` : `<span class="tag">MILD</span>`}
            <span class="tag">${item.category}</span>
          </div>
        </div>
        <div class="price">${fmt(item.price)}</div>
      </div>
      <div class="item__desc">${item.desc}</div>
      <div class="item__foot">
        <div class="muted small">Popularity: ${item.popular}</div>
        <button class="btn btn--secondary" type="button" data-add="${item.id}">Add</button>
      </div>
    `;
    grid.appendChild(el);
  });

  // Bind add buttons
  grid.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", () => addToCart(btn.getAttribute("data-add")));
  });
}

// ---------- Cart ----------
let cart = loadCart();

function cartCount() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}
function cartSubtotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = MENU.find(m => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart(cart);
  renderCartBadge();
  renderCart();
}

function decFromCart(id) {
  if (!cart[id]) return;
  cart[id] = cart[id] - 1;
  if (cart[id] <= 0) delete cart[id];
  saveCart(cart);
  renderCartBadge();
  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  saveCart(cart);
  renderCartBadge();
  renderCart();
}

function clearCart() {
  cart = {};
  saveCart(cart);
  renderCartBadge();
  renderCart();
}

function renderCartBadge() {
  $("cartCount").textContent = String(cartCount());
  $("cartSubtitle").textContent = `${cartCount()} items`;
  $("subtotal").textContent = fmt(cartSubtotal());
}

function renderCart() {
  const root = $("cartItems");
  root.innerHTML = "";

  const entries = Object.entries(cart);
  if (entries.length === 0) {
    root.innerHTML = `<div class="muted">Your cart is empty. Add items from the menu.</div>`;
    return;
  }

  entries.forEach(([id, qty]) => {
    const item = MENU.find(m => m.id === id);
    if (!item) return;

    const el = document.createElement("div");
    el.className = "cartItem";
    el.innerHTML = `
      <div class="cartItem__row">
        <div>
          <div class="cartItem__name">${item.name}</div>
          <div class="cartItem__meta">${fmt(item.price)} • ${item.veg ? "Veg" : "Non-Veg"} • ${item.spicy ? "Spicy" : "Mild"}</div>
        </div>
        <button class="iconBtn danger" type="button" data-remove="${id}" title="Remove">🗑</button>
      </div>

      <div class="qty">
        <button type="button" data-dec="${id}">−</button>
        <span>${qty}</span>
        <button type="button" data-inc="${id}">+</button>
        <div style="margin-left:auto;font-weight:900">${fmt(item.price * qty)}</div>
      </div>
    `;
    root.appendChild(el);
  });

  root.querySelectorAll("[data-inc]").forEach(b => b.addEventListener("click", () => addToCart(b.getAttribute("data-inc"))));
  root.querySelectorAll("[data-dec]").forEach(b => b.addEventListener("click", () => decFromCart(b.getAttribute("data-dec"))));
  root.querySelectorAll("[data-remove]").forEach(b => b.addEventListener("click", () => removeFromCart(b.getAttribute("data-remove"))));

  updateWhatsAppLinks();
}

// ---------- WhatsApp / Checkout ----------
function buildOrderText() {
  const lines = [];
  lines.push(`Order for: ${RESTAURANT.name}`);
  lines.push(`--------------------------------`);
  Object.entries(cart).forEach(([id, qty]) => {
    const item = MENU.find(m => m.id === id);
    if (!item) return;
    lines.push(`${qty} x ${item.name} — ${fmt(item.price * qty)}`);
  });
  lines.push(`--------------------------------`);
  lines.push(`Subtotal: ${fmt(cartSubtotal())}`);

  const notes = $("orderNotes").value.trim();
  if (notes) {
    lines.push(``);
    lines.push(`Notes: ${notes}`);
  }

  lines.push(``);
  lines.push(`Pickup/Delivery: (please confirm)`);
  lines.push(`Name:`);
  lines.push(`Address (if delivery):`);
  return lines.join("\n");
}

function updateWhatsAppLinks() {
  const text = encodeURIComponent(buildOrderText());
  const wa = `https://wa.me/${RESTAURANT.whatsappE164.replace(/\+/g,"")}?text=${text}`;
  $("whatsAppLink").href = wa;
  $("checkoutWhatsAppBtn").href = wa;
}

function updateContactLinks() {
  $("callLink").href = `tel:${RESTAURANT.phoneE164}`;
  $("mapsLink").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RESTAURANT.googleMapsQuery)}`;
  $("addressText").textContent = RESTAURANT.address;
}

// ---------- Drawer ----------
function openCart() {
  $("cartBackdrop").classList.remove("hidden");
  $("cartDrawer").classList.remove("hidden");
  $("cartDrawer").setAttribute("aria-hidden", "false");
}
function closeCart() {
  $("cartBackdrop").classList.add("hidden");
  $("cartDrawer").classList.add("hidden");
  $("cartDrawer").setAttribute("aria-hidden", "true");
}

// ---------- Init ----------
function initCategories() {
  const categories = getCategories();
  categories.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    $("categorySelect").appendChild(opt);
  });
}

function initHours() {
  const ul = $("hoursList");
  ul.innerHTML = "";
  RESTAURANT.hours.forEach(h => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${h.day}</span><strong>${h.time}</strong>`;
    ul.appendChild(li);
  });
}

function initKpis() {
  const top = [...MENU].sort((a,b) => b.popular - a.popular)[0];
  $("kpiPopular").textContent = top ? top.name : "Chef Special";
}

function bindEvents() {
  ["searchInput","categorySelect","vegOnlyToggle","spicyToggle","sortSelect"].forEach(id => {
    $(id).addEventListener("input", renderMenu);
    $(id).addEventListener("change", renderMenu);
  });

  $("viewCartBtn").addEventListener("click", openCart);
  $("closeCartBtn").addEventListener("click", closeCart);
  $("cartBackdrop").addEventListener("click", closeCart);

  $("clearCartBtn").addEventListener("click", clearCart);

  $("quickOrderBtn").addEventListener("click", () => {
    document.location.hash = "#menu";
    openCart();
  });

  $("openHoursBtn").addEventListener("click", () => {
    document.location.hash = "#hours";
  });

  $("saveNotesBtn").addEventListener("click", () => {
    saveNotes($("orderNotes").value);
    updateWhatsAppLinks();
  });

  $("orderNotes").addEventListener("input", updateWhatsAppLinks);
}

function init() {
  $("year").textContent = String(new Date().getFullYear());
  $("orderNotes").value = loadNotes();

  initCategories();
  initHours();
  initKpis();

  updateContactLinks();
  renderMenu();
  renderCartBadge();
  renderCart();
  updateWhatsAppLinks();
  bindEvents();
}

init();
