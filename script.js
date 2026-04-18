/* ============================================
   GEPREK SULTAN — script.js
   ============================================ */

// ============================================
// DATA
// ============================================

const menuData = [
  {
    id: 1,
    name: "Geprek Sultan Original",
    desc: "Ayam crispy utuh, sambal bawang merah & tomat segar. Resep andalan sejak 2014.",
    price: 18000,
    emoji: "🍗",
    category: "geprek",
    badge: "best",
    badgeText: "Best Seller"
  },
  {
    id: 2,
    name: "Geprek Keju Lumer",
    desc: "Geprek krispi dilimpahi keju mozzarella yang meleleh. Pedas gurih!",
    price: 23000,
    emoji: "🧀",
    category: "geprek",
    badge: "hot",
    badgeText: "🔥 Hits"
  },
  {
    id: 3,
    name: "Geprek Mozarella Saus",
    desc: "Keju mozarella premium + saus bbq atau pedas manis. Kekinian abis!",
    price: 27000,
    emoji: "🫕",
    category: "geprek",
    badge: "new",
    badgeText: "Baru!"
  },
  {
    id: 4,
    name: "Geprek Level Dewa",
    desc: "Tantangan pedas level 10! Cabai rawit 50 biji diulek kasar. Berani coba?",
    price: 20000,
    emoji: "🌶️",
    category: "geprek",
    badge: "hot",
    badgeText: "🔥 Pedas"
  },
  {
    id: 5,
    name: "Geprek Komplit",
    desc: "Geprek + nasi + lalapan + tempe/tahu goreng. Kenyang maksimal!",
    price: 25000,
    emoji: "🍱",
    category: "geprek",
    badge: null,
    badgeText: null
  },
  {
    id: 6,
    name: "Paket Hemat Duo",
    desc: "2 geprek original + 2 nasi + 2 es teh. Cocok makan berdua!",
    price: 40000,
    emoji: "img:paket hemat duo.jpeg",
    category: "paket",
    badge: "best",
    badgeText: "Favorit"
  },
  {
    id: 7,
    name: "Paket Family Box",
    desc: "4 geprek (pilih varian) + 4 nasi + 4 minuman. Hemat dan puas!",
    price: 80000,
    emoji: "📦",
    category: "paket",
    badge: null,
    badgeText: null
  },
  {
    id: 8,
    name: "Paket Catering 10 Porsi",
    desc: "Cocok untuk acara kantor, arisan, atau syukuran. Gratis pengiriman area tertentu.",
    price: 175000,
    emoji: "🎉",
    category: "paket",
    badge: "new",
    badgeText: "Promo"
  },
  {
    id: 9,
    name: "Es Teh Sultan Jumbo",
    desc: "Teh manis dingin ukuran jumbo. Segar banget cocok buat nemenin geprek.",
    price: 7000,
    emoji: "🥤",
    category: "minuman",
    badge: null,
    badgeText: null
  },
  {
    id: 10,
    name: "Es Jeruk Peras",
    desc: "Jeruk segar diperas langsung, manis asam menyegarkan.",
    price: 9000,
    emoji: "🍊",
    category: "minuman",
    badge: "best",
    badgeText: "Segar!"
  },
  {
    id: 11,
    name: "Es Cincau Kopyor",
    desc: "Perpaduan cincau hitam & kelapa kopyor yang creamy dan segar.",
    price: 11000,
    emoji: "🧋",
    category: "minuman",
    badge: "new",
    badgeText: "Baru!"
  },
  {
    id: 12,
    name: "Air Mineral",
    desc: "Air mineral botol 600ml. Dingin siap saji.",
    price: 5000,
    emoji: "💧",
    category: "minuman",
    badge: null,
    badgeText: null
  }
];

const testimoniData = [
  {
    name: "Rina Pratiwi",
    meta: "Pelanggan Setia 2 Tahun",
    avatar: "R",
    stars: 5,
    text: "Geprek Sultan tuh udah kayak comfort food gue! Sambalnya juara, pedesnya pas, nggak bikin sakit perut. Tiap minggu pasti beli minimal 2x. Highly recommended banget!"
  },
  {
    name: "Budi Santoso",
    meta: "Karyawan Kantoran",
    avatar: "B",
    stars: 5,
    text: "Harga terjangkau tapi kualitas nggak main-main. Ayamnya gede, garing sempurna. Kalau lunch siang di kantor, ini jadi pilihan utama gue dan temen-temen sekantor."
  },
  {
    name: "Sinta Maharani",
    meta: "Food Blogger",
    avatar: "S",
    stars: 5,
    text: "Udah coba puluhan tempat geprek, Geprek Sultan masih juara! Yang bikin beda itu sambel bawangnya, keliatan banget bikin fresh tiap hari. Wajib masuk bucket list!"
  },
  {
    name: "Dimas Pratama",
    meta: "Mahasiswa",
    avatar: "D",
    stars: 5,
    text: "Kantong mahasiswa aman, perut happy! Geprek Original 18 ribu udah dapet ayam gede + nasi + sambel melimpah. Nggak ada lawan buat harga segini."
  },
  {
    name: "Ayu Rahmawati",
    meta: "Ibu Rumah Tangga",
    avatar: "A",
    stars: 5,
    text: "Pesan paket family box buat makan keluarga, semua suka! Anak-anak yang biasanya milih-milih, ini lahap banget. Pengiriman juga cepet masih panas."
  },
  {
    name: "Kevin Wijaya",
    meta: "Gamer & Foodie",
    avatar: "K",
    stars: 5,
    text: "Geprek Level Dewa emang beneran bikin nangis! Tapi ketagihan, udah 3x balik lagi. Kalau nggak kuat pedas mending yang original aja, samanya enak."
  }
];

// ============================================
// STATE
// ============================================
let cart = JSON.parse(localStorage.getItem('geprek-cart') || '[]');
let activeFilter = 'all';

// ============================================
// UTILS
// ============================================

function formatRupiah(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

function saveCart() {
  localStorage.setItem('geprek-cart', JSON.stringify(cart));
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

function updateCartCount() {
  const total = cart.reduce((a, b) => a + b.qty, 0);
  document.getElementById('cartCount').textContent = total;
  const fab = document.getElementById('cartFab');
  if (total > 0) {
    fab.style.display = 'flex';
  } else {
    fab.style.display = 'none';
  }
}

function scrollToMenu() {
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// NAVBAR
// ============================================

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounters() {
  const counters = document.querySelectorAll('.stat-num');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const step = target / 80;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current).toLocaleString('id-ID');
    }, 20);
  });
}

// Trigger counter on scroll
let counterDone = false;
const heroObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !counterDone) {
    counterDone = true;
    animateCounters();
  }
}, { threshold: 0.4 });
heroObserver.observe(document.querySelector('.hero-stats'));

// ============================================
// SCROLL REVEAL
// ============================================

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

function setupReveal(selector, delay = 0) {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = `opacity 0.6s ease ${delay + i * 0.08}s, transform 0.6s ease ${delay + i * 0.08}s`;
    revealObserver.observe(el);
  });
}

// ============================================
// RENDER MENU
// ============================================

function renderMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';

  const items = filter === 'all' ? menuData : menuData.filter(m => m.category === filter);

  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animationDelay = `${i * 0.06}s`;

    const badgeHTML = item.badge
      ? `<span class="menu-badge badge-${item.badge}">${item.badgeText}</span>`
      : '';

    card.innerHTML = `
      <div class="menu-card-img">
        <span>${item.emoji.startsWith('img:') ? `<img src="${item.emoji.slice(4)}" style="width:100%;height:100%;object-fit:cover;">` : `<span>${item.emoji}</span>`}
        ${badgeHTML}
      </div>
      <div class="menu-card-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="menu-card-footer">
          <div class="price">
            ${formatRupiah(item.price)}
            <small>/porsi</small>
          </div>
          <button class="add-btn" onclick="addToCart(${item.id})" aria-label="Tambah ${item.name}">+</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  setupReveal('.menu-card');
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderMenu(activeFilter);
  });
});

// ============================================
// RENDER TESTIMONI
// ============================================

function renderTestimoni() {
  const grid = document.getElementById('testiGrid');
  testimoniData.forEach(t => {
    const stars = '⭐'.repeat(t.stars);
    const card = document.createElement('div');
    card.className = 'testi-card';
    card.innerHTML = `
      <div class="testi-stars">${stars}</div>
      <p class="testi-text">"${t.text}"</p>
      <div class="testi-user">
        <div class="testi-avatar">${t.avatar}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-meta">${t.meta}</div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  setupReveal('.testi-card', 0.1);
}

// ============================================
// CART LOGIC
// ============================================

function addToCart(id) {
  const item = menuData.find(m => m.id === id);
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  saveCart();
  updateCartCount();
  showToast(`🛒 ${item.emoji} ${item.name} ditambahkan!`);
}

function removeFromCart(id) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  if (cart[idx].qty > 1) {
    cart[idx].qty--;
  } else {
    cart.splice(idx, 1);
  }
  saveCart();
  updateCartCount();
  openCart(); // refresh
}

function increaseQty(id) {
  const item = cart.find(c => c.id === id);
  if (item) item.qty++;
  saveCart();
  updateCartCount();
  openCart();
}

// ============================================
// MODAL
// ============================================

const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');

function openModal(type, data) {
  if (type === 'cart') {
    renderCartModal();
  } else if (type === 'promo') {
    renderPromoModal();
  }
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openCart() {
  openModal('cart');
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

function renderCartModal() {
  if (cart.length === 0) {
    modalContent.innerHTML = `
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🛒</div>
        <h3 style="margin-bottom:8px;font-size:1.2rem">Keranjang Masih Kosong</h3>
        <p style="color:var(--gray);margin-bottom:24px">Yuk, pilih menu favoritmu!</p>
        <button class="order-btn" onclick="closeModal();scrollToMenu()">Lihat Menu 🍗</button>
      </div>
    `;
    return;
  }

  const total = cart.reduce((a, b) => a + b.price * b.qty, 0);
  const itemsHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <span>${formatRupiah(item.price)}/porsi</span>
      </div>
      <div class="cart-qty">
        <button class="qty-btn" onclick="removeFromCart(${item.id})">−</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="increaseQty(${item.id})">+</button>
      </div>
    </div>
  `).join('');

  const waMsg = encodeURIComponent(
    `Halo Geprek Sultan! Saya mau pesan:\n` +
    cart.map(i => `- ${i.name} x${i.qty} = ${formatRupiah(i.price * i.qty)}`).join('\n') +
    `\n\nTotal: ${formatRupiah(total)}\n\nMohon konfirmasinya. Terima kasih! 🍗`
  );

  modalContent.innerHTML = `
    <h3 style="font-size:1.3rem;margin-bottom:20px;font-weight:800">🛒 Keranjang Pesananmu</h3>
    ${itemsHTML}
    <div class="cart-total">
      <span>Total Pembayaran</span>
      <span>${formatRupiah(total)}</span>
    </div>
    <div style="margin-top:20px;display:flex;flex-direction:column;gap:10px">
      <a href="https://wa.me/6287893033314?text=${waMsg}" target="_blank" class="order-btn full-width" style="text-align:center;display:flex;justify-content:center">
        📱 Pesan via WhatsApp
      </a>
      <button onclick="clearCart()" style="background:none;border:2px solid var(--gray-lt);border-radius:50px;padding:12px;font-family:var(--font-body);font-weight:700;cursor:pointer;color:var(--gray);transition:all 0.3s" onmouseover="this.style.borderColor='var(--red)';this.style.color='var(--red)'" onmouseout="this.style.borderColor='var(--gray-lt)';this.style.color='var(--gray)'">
        🗑️ Kosongkan Keranjang
      </button>
    </div>
  `;
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartCount();
  openCart();
}

function renderPromoModal() {
  modalContent.innerHTML = `
    <div style="text-align:center">
      <div style="font-size:4rem;margin-bottom:8px">🔥</div>
      <h2 style="font-family:var(--font-title);font-size:1.8rem;letter-spacing:1px;margin-bottom:8px;color:var(--red)">PROMO HARI INI!</h2>
      <div style="background:linear-gradient(135deg,#FFF0E0,#FFD4A8);border-radius:16px;padding:20px 24px;margin:20px 0">
        <p style="font-size:1.1rem;font-weight:800;color:var(--dark)">Beli 2 Porsi Geprek Sultan</p>
        <p style="font-size:1.5rem;font-weight:900;color:var(--orange);margin:8px 0">GRATIS 1 Es Teh Jumbo! 🥤</p>
        <p style="font-size:0.85rem;color:var(--gray)">*Berlaku untuk pembelian langsung & delivery hari ini</p>
      </div>
      <div style="background:var(--dark);border-radius:12px;padding:16px;margin-bottom:20px">
        <p style="color:rgba(255,255,255,0.6);font-size:0.8rem;margin-bottom:4px">Kode Promo:</p>
        <p style="color:var(--yellow);font-family:var(--font-title);font-size:2rem;letter-spacing:4px">SULTAN2X</p>
      </div>
      <p style="font-size:0.82rem;color:var(--gray);margin-bottom:20px">Sebutkan kode promo saat pesan atau masukkan saat checkout WA</p>
      <button class="order-btn full-width" onclick="closeModal();scrollToMenu()">Pesan Sekarang 🍗</button>
    </div>
  `;
}

// ============================================
// KONTAK FORM
// ============================================

document.getElementById('kontakForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const nama = document.getElementById('namaInput').value.trim();
  const hp = document.getElementById('hpInput').value.trim();
  const type = document.getElementById('pesanType').value;
  const pesan = document.getElementById('pesanInput').value.trim();

  if (!nama || !hp) {
    showToast('⚠️ Isi nama dan nomor WA dulu ya!');
    return;
  }

  // Simulate sending
  const btn = this.querySelector('button[type=submit]');
  btn.textContent = '⏳ Mengirim...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '✅ Pesan Terkirim!';
    btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
    showToast(`✅ Terima kasih ${nama}! Kami akan segera menghubungi kamu.`);
    this.reset();
    setTimeout(() => {
      btn.textContent = 'Kirim Pesan 🚀';
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  }, 1500);
});

// ============================================
// SMOOTH SCROLL FOR NAV
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ============================================
// INIT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  renderTestimoni();
  updateCartCount();
  setupReveal('.unggulan-card');
  setupReveal('.info-item');
  setupReveal('.tentang-card-big', 0.1);
  setupReveal('.tentang-card-small', 0.2);

  // Hide cart fab initially if empty
  if (cart.length === 0) {
    document.getElementById('cartFab').style.display = 'none';
  }
});

// ============================================
// KEYBOARD ESC to close modal
// ============================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
