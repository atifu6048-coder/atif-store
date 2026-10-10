/**
 * ATIF STORE / ATELIER & CO.
 * High-End Luxury Fashion E-Commerce Architecture
 */

// Web3Forms Integration Config
const WEB3FORMS_ACCESS_KEY = '0dfcd20f-eedd-4366-ba87-f833e751a935';

/**
 * Dispatch form submissions asynchronously to Web3Forms API
 */
async function sendWeb3FormsSubmission(payload) {
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        ...payload
      })
    });
    return await res.json();
  } catch (err) {
    console.warn('Web3Forms dispatch error:', err);
    return { success: false, message: err.message };
  }
}

// Product Catalog (12 Capsule Items)
const PRODUCTS = [
  {
    id: 'prod-01',
    name: 'The Double-Cloth Camel Trench',
    department: "Women's Sartorial",
    category: 'women',
    type: 'Outerwear',
    price: 495.00,
    rating: 4.9,
    reviewsCount: 128,
    badge: 'Bestseller',
    badgeColor: '#ffca99',
    badgeText: '#2b211e',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpAPe_jNMjz7rO26JNZMCiRkxzxHbNwdf5ojFCh5Rr754ua7J6gghxB4QTaDZe9KQg_5OTf47sDWh0tTEjJ-xYLzy5TeAHCl3sAH5evY4F81Xkkkr_JtaJbZYYxBDVypbuWn5216QPaZUaD_YXUKayx99cDuI8VSzf3vFUibq0pGUgNmmlgdYof-Vh12Sceihdf9m0F-2O4WCmtGs-bLGYdsy1921_XQ6aUwM-s1LaQbNu-69bjvVx',
    description: 'An architectural double-breasted trench crafted from unbleached double-faced camel wool with storm flaps, natural horn buttons, and an oversized belt.',
    colors: [
      { name: 'Camel', hex: '#c89d71' },
      { name: 'Oat', hex: '#f6f3ed' },
      { name: 'Chestnut', hex: '#7d562f' },
      { name: 'Espresso', hex: '#2b211e' },
      { name: 'Charcoal', hex: '#31312d' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    composition: '100% Mongolian Camel Wool. Lining: 100% Cupro.',
    origin: 'Hand-tailored in Guimarães, Portugal'
  },
  {
    id: 'prod-02',
    name: 'Chunky Gauge Espresso Knit',
    department: "Men's Knitwear",
    category: 'men',
    type: 'Knitwear',
    price: 340.00,
    rating: 5.0,
    reviewsCount: 94,
    badge: 'New Arrival',
    badgeColor: '#ffca99',
    badgeText: '#2b211e',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0iHxorTIy18gB9m45g9DM8RItzDxWj5yfDce0mIcK7uAAJ0q7JE1IUqkLS6OyMabc7KPNx0YXFkb7zOSf6M0cwO5SUz5Z2f0YRmTxa8JyYS0Liy2w2Lg0194w9yX4PoLqOlH5ePMZHfa94Ytvn8TlSW0fB4Dk9aARdsmbI7du1NCkM0Yfj7kjCywGjfes5vt6Bh_k4uuHdGCn8at0BkWlMW8nCOxJUr2y-44O3TCRdZHLcU2WlYaM',
    description: 'Spun from heavy gauge Scottish lambswool in deep roasted chicory tones. Features dense ribbed collar, cuffs, and hem engineered to hold shape over decades.',
    colors: [
      { name: 'Espresso', hex: '#2b211e' },
      { name: 'Oat', hex: '#f6f3ed' },
      { name: 'Chestnut', hex: '#7d562f' },
      { name: 'Charcoal', hex: '#31312d' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    composition: '100% Pure Virgin Scottish Wool. Zero synthetic filaments.',
    origin: 'Knit in Hawick, Scotland'
  },
  {
    id: 'prod-03',
    name: 'Waffle Ribbed Toddler Romper',
    department: 'Kids & Toddler',
    category: 'kids',
    type: 'Bodysuits',
    price: 78.00,
    rating: 4.95,
    reviewsCount: 82,
    badge: 'Organic GOTS',
    badgeColor: '#ffca99',
    badgeText: '#2b211e',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoHK4ySBH6V_vslb07INUgx4RS7rv8pv-DQkDPAocmeD58h02-Sxjm4WnI3-c9B3QRSH3cq5M3gIIilTNfzBuh3I331fYtJ8nAYWtlhKdXb1z8mEsY-gdDRmGWj6WwzNudWwjAaAZqB-ahemDZ_0_ggaRm-eW0TZrz0tOphB73f8Di0R4AbkCetmqa0O-xEQ2Dm4mywpKGqT5Gqe0IqvtmBRyzZwAqwXEEvGcL0iunIpPYRNRiVRsM',
    description: 'Ultra-gentle waffle-ribbed organic cotton romper tailored for baby delicate skin. Reinforced coconut shell snap closures for seamless morning dressing.',
    colors: [
      { name: 'Oat', hex: '#f6f3ed' },
      { name: 'Camel', hex: '#c89d71' },
      { name: 'Chestnut', hex: '#7d562f' },
      { name: 'Espresso', hex: '#2b211e' }
    ],
    sizes: ['0-3M', '3-6M', '6-12M', '12-18M', '18-24M'],
    composition: '100% GOTS Certified Organic Combed Cotton.',
    origin: 'Crafted in Porto, Portugal'
  },
  {
    id: 'prod-04',
    name: 'The Miniature Heritage Trench',
    department: 'Kids & Toddler',
    category: 'kids',
    type: 'Outerwear',
    price: 185.00,
    rating: 4.88,
    reviewsCount: 67,
    badge: 'Family Archival',
    badgeColor: '#3f3533',
    badgeText: '#ffca99',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABKj1sXZhJqHoVu370wKGxdftsvEDG9u3vDtDexOhNclvk8-HZj2CmdQMHzBFC-vozuCErtX1oEKIvggnCsCvupGyvX5-vXCuioKecGNC7spyTMmH_8_VOLX5nBMz89wdhOXIHfN_tWHXxCg3k8HJLsKpgyhpwBpfMocpPSFFQX6HWz826kRdvr3js0wpF4vWqgmoyianxamGCJ1thwhS26O0Js0sUnWHVDakJ8BqHiVYJtn6r9mrk',
    description: 'An exact miniature proportion of our iconic double-cloth trench coat. Water-repellent natural weave designed to be passed down through family generations.',
    colors: [
      { name: 'Chestnut', hex: '#7d562f' },
      { name: 'Camel', hex: '#c89d71' },
      { name: 'Espresso', hex: '#2b211e' }
    ],
    sizes: ['2-3Y', '3-4Y', '5-6Y', '7-8Y'],
    composition: '85% Virgin Wool, 15% Organic Cotton Drill.',
    origin: 'Hand-sewn in Guimarães, Portugal'
  },
  {
    id: 'prod-05',
    name: 'Fluid Raw Silk Wide-Leg Trouser',
    department: "Women's Sartorial",
    category: 'women',
    type: 'Tailoring',
    price: 380.00,
    rating: 4.92,
    reviewsCount: 51,
    badge: 'Editorial Pick',
    badgeColor: '#ffca99',
    badgeText: '#2b211e',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaZJD9jzqZ5vx2N7kA327PBJulZM5Hxr7Gi31YR6YbyBxNzRjPe-HctBHOMwz3kt3CpZP3NQ0MTePZ7zfbBX_tr4zSuSusEp80j5K9B2Vv37EsJA8X2JBO_JLrhTlSU-aaTaI0KVPdFmDFWNaInjnuH5EZ4iI7hzAEWaSP1X79daQzh-4lJAGA0YVtqleuP6WDSBCVdUqEBgAKTnEnEDb8b3KN6CxY6TpziyUYfT_52MAGv7bf42Xt',
    description: 'Sublime architectural drape tailored in dense raw silk noil. Features a high-rise waist, deep double front pleats, and horn fastening tab.',
    colors: [
      { name: 'Espresso', hex: '#2b211e' },
      { name: 'Oat', hex: '#f6f3ed' },
      { name: 'Chestnut', hex: '#7d562f' }
    ],
    sizes: ['34 EU', '36 EU', '38 EU', '40 EU', '42 EU'],
    composition: '100% Unbleached Mulberry Raw Silk.',
    origin: 'Tailored in Milan, Italy'
  },
  {
    id: 'prod-06',
    name: 'The Double-Faced Paletot Overcoat',
    department: "Men's Outerwear",
    category: 'men',
    type: 'Outerwear',
    price: 590.00,
    rating: 4.98,
    reviewsCount: 110,
    badge: 'Capsule Look 01',
    badgeColor: '#ffca99',
    badgeText: '#2b211e',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg5hhNFI71W0_J4qRGPxmDCt9JVq51wyB1JrpaPXFhDu2j4MzgaoS62iSRNG2TkpDxq8y-zUlWoM2AyCcJBRAIL8sw2p0lWw7MAzxLrh16zt8VM18oHkaHBlUyGUvt6UaH2X8WKuEqu04Ke3DVy8QHgEDd4ob5G9gPEs8VAHodwWgO3N-lYBw_Jv4UjlJiKOR9xyhVppILx7Z-7rfBgOYU2hp2WbPOWMa_lujeLG3MbcROXOE7UMqh',
    description: 'The defining statement overcoat of Autumn/Winter 25. Generous lapels, unlined featherweight construction, and deep horn pockets.',
    colors: [
      { name: 'Camel', hex: '#c89d71' },
      { name: 'Charcoal', hex: '#31312d' },
      { name: 'Espresso', hex: '#2b211e' }
    ],
    sizes: ['48 IT', '50 IT', '52 IT', '54 IT', '56 IT'],
    composition: '90% Mongolian Camel Hair, 10% Cashmere.',
    origin: 'Handmade in Biella, Italy'
  },
  {
    id: 'prod-07',
    name: 'Scottish Fisherman Ribbed Pullover',
    department: "Men's Knitwear",
    category: 'men',
    type: 'Knitwear',
    price: 320.00,
    rating: 4.89,
    reviewsCount: 73,
    badge: 'Heritage Yarn',
    badgeColor: '#3f3533',
    badgeText: '#ffca99',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu_EYQ24booURBnezynKDSjpqn_dc-gQzeyXaMZbOmuuoHR2nSOLbiRF_TYl1qGwQsxYjTZP0QHzp3cx-pze-ca9zmgvEILejE4E4L1q-8EHBSlL0SQluOA3dq_fFsfXMd2c_pWXJ_jj5SAJU1Glf4bINJLRI30-PyjI-DC8FYCFjSQky1H93wwsqvq6in9Xoo6ZDc1KcaD0o2nyfQUfyyb5I-FmJhGK0RShN4de2cwX2b-0xoC_XN',
    description: 'Tactile, dense fisherman rib crafted from unspun organic wool. Resists biting winds while breathing effortlessly indoors.',
    colors: [
      { name: 'Oat', hex: '#f6f3ed' },
      { name: 'Chestnut', hex: '#7d562f' },
      { name: 'Espresso', hex: '#2b211e' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    composition: '100% Pure Organic Cheviot Wool.',
    origin: 'Knit in Shetland Islands, UK'
  },
  {
    id: 'prod-08',
    name: 'Organic Pointelle Baby Bodysuit Set',
    department: 'Kids & Toddler',
    category: 'kids',
    type: 'Bodysuits',
    price: 64.00,
    rating: 4.96,
    reviewsCount: 48,
    badge: 'Hypoallergenic',
    badgeColor: '#ffca99',
    badgeText: '#2b211e',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiFklJEAQgBxCYA01sk5HyxhdFpuXcrPsGQ8EJdFtwu65Ts3Mg1uL9YMIZ3z1wHjD1u2NFw-59MXE3knQQxEjeGaC2cQ7Ioc7oGOnFDwvRN6KP-POqrzfZEDKNxXWt4kyIwVdepxXH9bQIkWQBwNL3Q3vxxo4iT5ddkVOu5NYUwAQTHCfPaPo55-Ft7kE2r5EajWbkrc42zyRD2Tm0B6R_4rzFUD931W6LsuwD8Lqw1IQZ-IxmOJ4e',
    description: 'Trio pack of delicate pointelle organic cotton bodysuits with envelope necklines for easy over-the-head changes. No scratchy labels.',
    colors: [
      { name: 'Oat', hex: '#f6f3ed' },
      { name: 'Camel', hex: '#c89d71' }
    ],
    sizes: ['NB', '0-3M', '3-6M', '6-12M'],
    composition: '100% GOTS Certified Organic Pointelle Cotton.',
    origin: 'Crafted in Porto, Portugal'
  },
  {
    id: 'prod-09',
    name: 'Unbleached Cashmere Wrap Robe',
    department: 'Loungewear',
    category: 'loungewear',
    type: 'Robes',
    price: 460.00,
    rating: 5.0,
    reviewsCount: 64,
    badge: 'Pure Luxury',
    badgeColor: '#ffca99',
    badgeText: '#2b211e',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7jH0GmpR5N0KJFxENV64e6CrXshS1QVkx4eaHv3Rt7Z-zVpmQqZn6zpzb7TCb3vbtQVxpvg1lxEFnXh0NJv0ciuQyXhFAmIZgTqquJ55lX1DXIUkyQfl5y3UxC06dokSJVO-2OS0yt7019oFVfIEyC8iDQqe1giq5rsrSsGG-fzCXmwIkZUZ0ZmkKN5BPxGqYACDMv139sEh8o7LXgbJdw-9uNUMExx8Z_jScHwB7qEu8cRFFfaZ',
    description: 'An enveloping sanctuary piece in cloud-weight Mongolian cashmere. Generous shawl collar, deep patch pockets, and tactile hand-rolled hem.',
    colors: [
      { name: 'Oat', hex: '#f6f3ed' },
      { name: 'Camel', hex: '#c89d71' },
      { name: 'Espresso', hex: '#2b211e' }
    ],
    sizes: ['XS/S', 'M/L', 'XL/XXL'],
    composition: '100% Grade-A Mongolian Cashmere (14.5 micron).',
    origin: 'Knit in Ulaanbaatar & Assembled in Florence'
  },
  {
    id: 'prod-10',
    name: 'Brushed Camel Wool Lounge Pant',
    department: 'Loungewear',
    category: 'loungewear',
    type: 'Pants',
    price: 260.00,
    rating: 4.87,
    reviewsCount: 42,
    badge: 'Featherweight',
    badgeColor: '#3f3533',
    badgeText: '#ffca99',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaZJD9jzqZ5vx2N7kA327PBJulZM5Hxr7Gi31YR6YbyBxNzRjPe-HctBHOMwz3kt3CpZP3NQ0MTePZ7zfbBX_tr4zSuSusEp80j5K9B2Vv37EsJA8X2JBO_JLrhTlSU-aaTaI0KVPdFmDFWNaInjnuH5EZ4iI7hzAEWaSP1X79daQzh-4lJAGA0YVtqleuP6WDSBCVdUqEBgAKTnEnEDb8b3KN6CxY6TpziyUYfT_52MAGv7bf42Xt',
    description: 'Relaxed fluid silhouette with encased elastic waistband and silk-cotton drawstring. Luxuriously soft for home retreat or travel.',
    colors: [
      { name: 'Camel', hex: '#c89d71' },
      { name: 'Espresso', hex: '#2b211e' },
      { name: 'Oat', hex: '#f6f3ed' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    composition: '95% Fine Merino Wool, 5% Cashmere.',
    origin: 'Made in Porto, Portugal'
  },
  {
    id: 'prod-11',
    name: 'Sculptural Draped Trench Wrap',
    department: "Women's Sartorial",
    category: 'women',
    type: 'Outerwear',
    price: 520.00,
    rating: 4.94,
    reviewsCount: 88,
    badge: 'Bespoke Run',
    badgeColor: '#ffca99',
    badgeText: '#2b211e',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpAPe_jNMjz7rO26JNZMCiRkxzxHbNwdf5ojFCh5Rr754ua7J6gghxB4QTaDZe9KQg_5OTf47sDWh0tTEjJ-xYLzy5TeAHCl3sAH5evY4F81Xkkkr_JtaJbZYYxBDVypbuWn5216QPaZUaD_YXUKayx99cDuI8VSzf3vFUibq0pGUgNmmlgdYof-Vh12Sceihdf9m0F-2O4WCmtGs-bLGYdsy1921_XQ6aUwM-s1LaQbNu-69bjvVx',
    description: 'Dramatic asymmetrical lapel with fluid drape and raw unhemmed selvage finish. Rendered in double-faced Italian boiled virgin wool.',
    colors: [
      { name: 'Chestnut', hex: '#7d562f' },
      { name: 'Espresso', hex: '#2b211e' },
      { name: 'Charcoal', hex: '#31312d' }
    ],
    sizes: ['34 EU', '36 EU', '38 EU', '40 EU', '42 EU'],
    composition: '100% Double-Face Boiled Wool.',
    origin: 'Handcrafted in Milan, Italy'
  },
  {
    id: 'prod-12',
    name: 'Bespoke Miniature Weather Cape',
    department: 'Kids & Toddler',
    category: 'kids',
    type: 'Outerwear',
    price: 145.00,
    rating: 4.91,
    reviewsCount: 39,
    badge: 'Limited Edition',
    badgeColor: '#ffca99',
    badgeText: '#2b211e',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAKOHM4Pgv5JzdmdN-eSU-kGCO08VnaVCudxdVuL-pM0UHi4Ob3QvZMjTBRS_k8_vr5H2yptuHkcNJLJl38QjB5_Ihzda6-z1LeyY9tdJj9iec2tlparM0HA7ZXkakIW_yfakPGuNJohDNN_rwVfYJ9t2xel8iTUzi6U_dUQ9yp9FAYhZzfjdtEhAjz_TNF-aWp_2oLIee-2U_kguE7gdXJktWekYmxb2v64_6hLcXav_NgzjQf1-s',
    description: 'Heritage hooded cape with arm slits and solid brass snap fastenings. Lined with organic cotton flannel in archival micro-check.',
    colors: [
      { name: 'Camel', hex: '#c89d71' },
      { name: 'Chestnut', hex: '#7d562f' }
    ],
    sizes: ['1-2Y', '3-4Y', '5-6Y'],
    composition: '100% Water-Resistant Combed Wool & Flannel.',
    origin: 'Hand-sewn in Guimarães, Portugal'
  }
];

// Currency Configurations
const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.78 }
};

// Global State
const State = {
  currentCategory: 'all',
  currentSort: 'featured',
  currency: 'USD',
  appliedPromo: null,
  cart: [
    {
      productId: 'prod-01',
      selectedColor: 'Camel',
      selectedSize: 'M',
      quantity: 1
    },
    {
      productId: 'prod-02',
      selectedColor: 'Espresso',
      selectedSize: 'L',
      quantity: 1
    },
    {
      productId: 'prod-03',
      selectedColor: 'Oat',
      selectedSize: '6-12M',
      quantity: 1
    }
  ],
  wishlist: ['prod-01', 'prod-04'],
  activeModalProduct: null,
  activeSelectedColor: null,
  activeSelectedSize: null
};

// Save & Load LocalStorage
function loadState() {
  try {
    const savedCart = localStorage.getItem('atif_cart');
    if (savedCart) State.cart = JSON.parse(savedCart);
    const savedWish = localStorage.getItem('atif_wishlist');
    if (savedWish) State.wishlist = JSON.parse(savedWish);
    const savedCurr = localStorage.getItem('atif_currency');
    if (savedCurr && CURRENCIES[savedCurr]) State.currency = savedCurr;
    const savedPromo = localStorage.getItem('atif_promo');
    if (savedPromo) State.appliedPromo = savedPromo;
  } catch (e) {
    console.warn('Storage load fallback', e);
  }
}

function persistState() {
  try {
    localStorage.setItem('atif_cart', JSON.stringify(State.cart));
    localStorage.setItem('atif_wishlist', JSON.stringify(State.wishlist));
    localStorage.setItem('atif_currency', State.currency);
    if (State.appliedPromo) localStorage.setItem('atif_promo', State.appliedPromo);
    else localStorage.removeItem('atif_promo');
  } catch (e) {
    console.warn('Storage persist fallback', e);
  }
}

// Price Conversion
function formatPrice(amountUsd) {
  const curr = CURRENCIES[State.currency] || CURRENCIES.USD;
  const converted = amountUsd * curr.rate;
  return `${curr.symbol}${converted.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Toast Notifications
function showToast(title, message, icon = 'shopping_bag') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[#ffca99] text-2xl">${icon}</span>
    <div class="flex-1">
      <h5 class="font-label-md text-label-md font-semibold text-[#FCF9F3] uppercase tracking-wider">${title}</h5>
      <p class="font-body-sm text-body-sm text-[#d4c3be] mt-0.5">${message}</p>
    </div>
    <button class="text-[#d4c3be] hover:text-[#ffca99] transition-colors p-1" onclick="this.parentElement.remove()">
      <span class="material-symbols-outlined text-sm">close</span>
    </button>
  `;
  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => toast.classList.add('show'));

  // Auto remove after 3.8s
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3800);
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  let items = [...PRODUCTS];

  // Category filter
  if (State.currentCategory !== 'all') {
    items = items.filter(p => p.category === State.currentCategory);
  }

  // Sorting
  if (State.currentSort === 'price-low') {
    items.sort((a, b) => a.price - b.price);
  } else if (State.currentSort === 'price-high') {
    items.sort((a, b) => b.price - a.price);
  } else if (State.currentSort === 'rating') {
    items.sort((a, b) => b.rating - a.rating);
  }

  grid.innerHTML = items.map(product => {
    const isWishlisted = State.wishlist.includes(product.id);
    const primaryColor = product.colors[0]?.name || 'Natural';
    const primarySize = product.sizes[0] || 'Standard';

    return `
      <div class="group flex flex-col shadow-md hover:shadow-2xl transition-all duration-300" style="background-color: rgb(52, 43, 41); border: 1px solid rgba(255, 255, 255, 0.08);" data-product-id="${product.id}">
        <!-- Image & Badges Container -->
        <div class="relative aspect-[3/4] overflow-hidden bg-[#2b211e]">
          <img class="w-full h-full object-cover product-card-img" 
               src="${product.image}" 
               alt="${product.name}" 
               loading="lazy" 
               onclick="openQuickView('${product.id}')"
               style="cursor: pointer;">
          
          <span class="absolute top-space-sm left-space-sm font-label-sm text-label-sm uppercase tracking-wider px-space-xs py-space-2xs pointer-events-none" 
                style="background-color: ${product.badgeColor}; color: ${product.badgeText}; font-weight: 600;">
            ${product.badge}
          </span>
          
          <button aria-label="Toggle Wishlist" 
                  class="absolute top-space-sm right-space-sm w-9 h-9 rounded-full flex items-center justify-center transition-colors" 
                  style="background-color: rgba(52, 43, 41, 0.85); color: ${isWishlisted ? '#ffca99' : '#FCF9F3'};" 
                  onclick="toggleWishlist('${product.id}')" 
                  type="button">
            <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' ${isWishlisted ? 1 : 0};">favorite</span>
          </button>
          
          <!-- Quick Add Button Slide-up on hover -->
          <div class="absolute bottom-0 left-0 w-full p-space-sm quick-add-slide" style="background-color: rgba(43, 33, 30, 0.95);">
            <div class="flex gap-2">
              <button class="flex-1 py-space-xs font-label-sm text-label-sm uppercase tracking-widest text-[#2b211e] bg-[#ffca99] hover:bg-[#f0bd8d] transition-colors font-semibold" 
                      onclick="addToCart('${product.id}', '${primaryColor}', '${primarySize}')" 
                      type="button">
                Quick Add +
              </button>
              <button class="px-space-sm py-space-xs font-label-sm text-label-sm uppercase tracking-widest text-[#FCF9F3] bg-[#504441] hover:bg-[#623f1a] transition-colors" 
                      onclick="openQuickView('${product.id}')" 
                      title="View Details"
                      type="button">
                <span class="material-symbols-outlined text-sm align-middle">visibility</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Product Card Body -->
        <div class="p-space-md flex flex-col flex-1 justify-between">
          <div>
            <div class="flex items-center justify-between text-[#d4c3be] font-label-sm text-label-sm uppercase tracking-wider">
              <span>${product.department}</span>
              <div class="flex items-center gap-1 text-[#ffca99]">
                <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="text-[#FCF9F3] font-semibold text-xs">${product.rating.toFixed(2)}</span>
              </div>
            </div>
            
            <h4 class="font-headline-sm text-headline-sm text-[#FCF9F3] mt-space-2xs group-hover:text-[#ffca99] transition-colors cursor-pointer"
                onclick="openQuickView('${product.id}')">
              ${product.name}
            </h4>
            
            <p class="font-body-sm text-body-sm text-[#EBE6DF] font-medium mt-space-2xs">
              ${formatPrice(product.price)}
            </p>
          </div>

          <!-- Color Swatches & Sizing Indicator -->
          <div class="pt-space-md flex items-center justify-between">
            <div class="flex items-center gap-space-xs">
              ${product.colors.map((c, i) => `
                <button aria-label="${c.name}" 
                        class="w-5 h-5 rounded-full swatch-btn ${i === 0 ? 'active' : ''}" 
                        style="background-color: ${c.hex};" 
                        title="${c.name}"
                        onclick="selectCardColor(this, '${product.id}', '${c.name}')">
                </button>
              `).join('')}
            </div>
            <span class="font-label-sm text-label-sm text-[#d4c3be] uppercase tracking-wider">
              ${product.sizes.length} sizes
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Swatch selection on card
function selectCardColor(btn, productId, colorName) {
  const parent = btn.parentElement;
  parent.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  showToast('Palette Selected', `${colorName} chosen`, 'palette');
}

// Header & Navigation Badges Update
function updateHeaderBadges() {
  const bagCount = State.cart.reduce((sum, item) => sum + item.quantity, 0);
  const bagBadge = document.getElementById('bagCountBadge');
  if (bagBadge) bagBadge.textContent = bagCount;

  const wishCount = State.wishlist.length;
  const wishBadge = document.getElementById('wishlistCountBadge');
  if (wishBadge) {
    wishBadge.textContent = wishCount;
    wishBadge.style.display = wishCount > 0 ? 'flex' : 'none';
  }
}

// Cart Drawer Calculations & Rendering
function renderCart() {
  const container = document.getElementById('cartItemsList');
  if (!container) return;

  if (State.cart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-[#d4c3be] flex flex-col items-center">
        <span class="material-symbols-outlined text-5xl text-[#ffca99] mb-4">shopping_bag</span>
        <h4 class="font-headline-sm text-headline-sm text-[#FCF9F3]">Your Shopping Bag is Empty</h4>
        <p class="font-body-sm text-body-sm max-w-xs mt-2">Discover timeless silhouettes in the Autumn Neutrality Capsule.</p>
        <button class="mt-6 px-6 py-2.5 bg-[#ffca99] text-[#2b211e] font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-[#f0bd8d] transition-colors"
                onclick="toggleCart(false)">
          Explore Collection
        </button>
      </div>
    `;
    updateCartTotals(0);
    return;
  }

  let subtotalUsd = 0;

  container.innerHTML = State.cart.map((item, index) => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return '';

    const itemTotalUsd = product.price * item.quantity;
    subtotalUsd += itemTotalUsd;

    return `
      <div class="flex gap-4 py-4 border-b border-[rgba(255,255,255,0.08)] items-center">
        <img src="${product.image}" alt="${product.name}" class="w-20 h-24 object-cover bg-[#2b211e] flex-shrink-0 border border-[rgba(255,255,255,0.08)]">
        <div class="flex-1 min-w-0">
          <div class="flex justify-between items-start">
            <h5 class="font-headline-sm text-sm text-[#FCF9F3] truncate pr-2">${product.name}</h5>
            <button class="text-[#d4c3be] hover:text-[#ffca99] transition-colors" onclick="removeFromCart(${index})">
              <span class="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
          <p class="font-label-sm text-label-sm text-[#ffca99] mt-0.5">${formatPrice(product.price)}</p>
          <p class="font-body-sm text-xs text-[#d4c3be] mt-1">Color: <span class="text-[#FCF9F3]">${item.selectedColor}</span> | Size: <span class="text-[#FCF9F3]">${item.selectedSize}</span></p>
          
          <div class="flex items-center justify-between mt-3">
            <div class="inline-flex items-center border border-[rgba(255,255,255,0.15)] bg-[#2b211e]">
              <button class="px-2 py-0.5 text-[#FCF9F3] hover:text-[#ffca99] transition-colors" onclick="updateCartQty(${index}, -1)">-</button>
              <span class="px-3 py-0.5 text-xs text-[#FCF9F3] font-semibold">${item.quantity}</span>
              <button class="px-2 py-0.5 text-[#FCF9F3] hover:text-[#ffca99] transition-colors" onclick="updateCartQty(${index}, 1)">+</button>
            </div>
            <span class="font-body-sm text-sm text-[#FCF9F3] font-medium">${formatPrice(itemTotalUsd)}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateCartTotals(subtotalUsd);
}

function updateCartTotals(subtotalUsd) {
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountRow = document.getElementById('cartDiscountRow');
  const discountEl = document.getElementById('cartDiscount');
  const shippingEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartGrandTotal');
  const progressBar = document.getElementById('shippingProgressBar');
  const progressText = document.getElementById('shippingProgressText');

  const FREE_SHIPPING_THRESHOLD_USD = 150.0;
  const isFreeShipping = subtotalUsd >= FREE_SHIPPING_THRESHOLD_USD || subtotalUsd === 0;

  // Shipping meter
  if (progressBar && progressText) {
    if (subtotalUsd >= FREE_SHIPPING_THRESHOLD_USD) {
      progressBar.style.width = '100%';
      progressText.innerHTML = `✓ You've unlocked <strong class="text-[#ffca99]">Complimentary Worldwide Shipping</strong>`;
    } else {
      const diff = FREE_SHIPPING_THRESHOLD_USD - subtotalUsd;
      const pct = Math.min(100, Math.round((subtotalUsd / FREE_SHIPPING_THRESHOLD_USD) * 100));
      progressBar.style.width = `${pct}%`;
      progressText.innerHTML = `Add <strong class="text-[#ffca99]">${formatPrice(diff)}</strong> more for Complimentary Worldwide Shipping`;
    }
  }

  // Discount
  let discountUsd = 0;
  if (State.appliedPromo === 'ATELIER') {
    discountUsd = subtotalUsd * 0.15; // 15% off
    if (discountRow) discountRow.style.display = 'flex';
    if (discountEl) discountEl.textContent = `-${formatPrice(discountUsd)}`;
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  // Shipping cost
  const shippingUsd = (subtotalUsd === 0 || isFreeShipping) ? 0 : 25.0;
  if (shippingEl) {
    shippingEl.textContent = shippingUsd === 0 ? 'Complimentary' : formatPrice(shippingUsd);
  }

  // Grand Total
  const grandTotalUsd = Math.max(0, subtotalUsd - discountUsd + shippingUsd);
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotalUsd);
  if (totalEl) totalEl.textContent = formatPrice(grandTotalUsd);
}

// Add to Cart Action
function addToCart(productId, color, size, qty = 1) {
  const existing = State.cart.find(item => 
    item.productId === productId && item.selectedColor === color && item.selectedSize === size
  );

  if (existing) {
    existing.quantity += qty;
  } else {
    State.cart.push({
      productId,
      selectedColor: color,
      selectedSize: size,
      quantity: qty
    });
  }

  persistState();
  updateHeaderBadges();
  renderCart();

  const product = PRODUCTS.find(p => p.id === productId);
  showToast('Added to Shopping Bag', `${product?.name} (${color}, ${size}) added.`, 'shopping_bag');
  toggleCart(true);
}

function updateCartQty(index, change) {
  if (State.cart[index]) {
    State.cart[index].quantity += change;
    if (State.cart[index].quantity <= 0) {
      State.cart.splice(index, 1);
    }
    persistState();
    updateHeaderBadges();
    renderCart();
  }
}

function removeFromCart(index) {
  if (State.cart[index]) {
    const p = PRODUCTS.find(x => x.id === State.cart[index].productId);
    State.cart.splice(index, 1);
    persistState();
    updateHeaderBadges();
    renderCart();
    showToast('Item Removed', `${p?.name || 'Item'} removed from your bag.`, 'delete');
  }
}

// Wishlist Actions
function toggleWishlist(productId) {
  const index = State.wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);

  if (index > -1) {
    State.wishlist.splice(index, 1);
    showToast('Removed from Wishlist', `${product?.name} removed.`, 'heart_minus');
  } else {
    State.wishlist.push(productId);
    showToast('Saved to Wishlist', `${product?.name} added to your private selection.`, 'favorite');
  }

  persistState();
  updateHeaderBadges();
  renderProducts();
  renderWishlist();
}

function renderWishlist() {
  const container = document.getElementById('wishlistItemsList');
  if (!container) return;

  if (State.wishlist.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-[#d4c3be] flex flex-col items-center">
        <span class="material-symbols-outlined text-5xl text-[#ffca99] mb-4">favorite</span>
        <h4 class="font-headline-sm text-headline-sm text-[#FCF9F3]">No Wishlist Items</h4>
        <p class="font-body-sm text-body-sm max-w-xs mt-2">Curate your foundational family wardrobe by clicking the heart icon on any piece.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = State.wishlist.map(id => {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return '';

    return `
      <div class="flex gap-4 py-4 border-b border-[rgba(255,255,255,0.08)] items-center">
        <img src="${product.image}" alt="${product.name}" class="w-20 h-24 object-cover bg-[#2b211e] flex-shrink-0 border border-[rgba(255,255,255,0.08)]">
        <div class="flex-1 min-w-0">
          <div class="flex justify-between items-start">
            <h5 class="font-headline-sm text-sm text-[#FCF9F3] truncate pr-2">${product.name}</h5>
            <button class="text-[#d4c3be] hover:text-[#ffca99] transition-colors" onclick="toggleWishlist('${product.id}')">
              <span class="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
          <p class="font-label-sm text-label-sm text-[#ffca99] mt-0.5">${formatPrice(product.price)}</p>
          <p class="font-body-sm text-xs text-[#d4c3be] mt-1">${product.department}</p>
          
          <button class="mt-3 w-full py-1.5 px-3 bg-[#ffca99] text-[#2b211e] font-label-sm text-label-sm uppercase tracking-wider font-semibold hover:bg-[#f0bd8d] transition-colors flex items-center justify-center gap-1"
                  onclick="addToCart('${product.id}', '${product.colors[0].name}', '${product.sizes[0]}'); toggleWishlist('${product.id}')">
            <span class="material-symbols-outlined text-xs">shopping_bag</span> Move to Bag
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Cart Drawer Toggle
function toggleCart(open = null) {
  const drawer = document.getElementById('cartDrawer');
  if (!drawer) return;
  const isCurrentlyOpen = drawer.classList.contains('active');
  const shouldOpen = open !== null ? open : !isCurrentlyOpen;

  if (shouldOpen) {
    renderCart();
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Wishlist Drawer Toggle
function toggleWishlistDrawer(open = null) {
  const drawer = document.getElementById('wishlistDrawer');
  if (!drawer) return;
  const isCurrentlyOpen = drawer.classList.contains('active');
  const shouldOpen = open !== null ? open : !isCurrentlyOpen;

  if (shouldOpen) {
    renderWishlist();
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Quick View Modal
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  State.activeModalProduct = product;
  State.activeSelectedColor = product.colors[0].name;
  State.activeSelectedSize = product.sizes[0];

  const modal = document.getElementById('quickViewModal');
  if (!modal) return;

  document.getElementById('qvImage').src = product.image;
  document.getElementById('qvBadge').textContent = product.badge;
  document.getElementById('qvBadge').style.backgroundColor = product.badgeColor;
  document.getElementById('qvBadge').style.color = product.badgeText;
  document.getElementById('qvTitle').textContent = product.name;
  document.getElementById('qvDept').textContent = `${product.department} • ${product.origin}`;
  document.getElementById('qvPrice').textContent = formatPrice(product.price);
  document.getElementById('qvRating').textContent = product.rating.toFixed(2);
  document.getElementById('qvReviews').textContent = `(${product.reviewsCount} verified reviews)`;
  document.getElementById('qvDescription').textContent = product.description;
  document.getElementById('qvComposition').textContent = product.composition;

  // Swatches
  const swatchContainer = document.getElementById('qvSwatches');
  swatchContainer.innerHTML = product.colors.map((c, i) => `
    <button class="w-7 h-7 rounded-full swatch-btn ${i === 0 ? 'active' : ''}" 
            style="background-color: ${c.hex};" 
            title="${c.name}"
            onclick="setModalColor(this, '${c.name}')">
    </button>
  `).join('');
  document.getElementById('qvColorLabel').textContent = product.colors[0].name;

  // Sizes
  const sizeContainer = document.getElementById('qvSizes');
  sizeContainer.innerHTML = product.sizes.map((s, i) => `
    <button class="px-3 py-1.5 font-label-sm text-label-sm size-btn ${i === 0 ? 'active' : ''}" 
            onclick="setModalSize(this, '${s}')">
      ${s}
    </button>
  `).join('');

  document.getElementById('qvQtyInput').value = 1;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function setModalColor(btn, colorName) {
  State.activeSelectedColor = colorName;
  document.getElementById('qvColorLabel').textContent = colorName;
  btn.parentElement.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function setModalSize(btn, sizeName) {
  State.activeSelectedSize = sizeName;
  btn.parentElement.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function addModalToCart() {
  if (!State.activeModalProduct) return;
  const qty = parseInt(document.getElementById('qvQtyInput').value) || 1;
  addToCart(State.activeModalProduct.id, State.activeSelectedColor, State.activeSelectedSize, qty);
  closeQuickView();
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Live Search / Command Palette (⌘K)
function toggleSearchModal(open = null) {
  const modal = document.getElementById('searchModal');
  if (!modal) return;
  const isCurrentlyOpen = modal.classList.contains('active');
  const shouldOpen = open !== null ? open : !isCurrentlyOpen;

  if (shouldOpen) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const input = document.getElementById('commandSearchInput');
    if (input) {
      input.value = '';
      input.focus();
      handleSearchQuery('');
    }
  } else {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function handleSearchQuery(query) {
  const resultsContainer = document.getElementById('searchResults');
  if (!resultsContainer) return;

  const q = query.trim().toLowerCase();
  let matches = PRODUCTS;

  if (q.length > 0) {
    matches = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.department.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.colors.some(c => c.name.toLowerCase().includes(q))
    );
  }

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div class="py-12 text-center text-[#d4c3be]">
        <p class="font-body-md text-body-md">No archival pieces found for "${query}".</p>
        <p class="font-body-sm text-xs mt-1">Try searching for "Cashmere", "Trench", "Romper", or "Knit".</p>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = matches.map(p => `
    <div class="flex items-center gap-4 p-3 hover:bg-[#3f3533] transition-colors cursor-pointer border-b border-[rgba(255,255,255,0.05)]"
         onclick="toggleSearchModal(false); openQuickView('${p.id}')">
      <img src="${p.image}" alt="${p.name}" class="w-12 h-16 object-cover bg-[#2b211e]">
      <div class="flex-1 min-w-0">
        <h5 class="font-headline-sm text-sm text-[#FCF9F3] truncate">${p.name}</h5>
        <p class="font-label-sm text-xs text-[#d4c3be] uppercase tracking-wider">${p.department}</p>
      </div>
      <div class="text-right">
        <p class="font-label-md text-label-md text-[#ffca99]">${formatPrice(p.price)}</p>
        <span class="font-label-sm text-[10px] text-[#ffdcbe] bg-[#2b211e] px-1.5 py-0.5">${p.badge}</span>
      </div>
    </div>
  `).join('');
}

// Promo Code Application
function applyPromoCode() {
  const input = document.getElementById('cartPromoInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'ATELIER') {
    State.appliedPromo = 'ATELIER';
    persistState();
    renderCart();
    showToast('Promo Code Applied', 'Code ATELIER applied! 15% discount granted.', 'verified');
  } else {
    showToast('Invalid Code', 'Please enter a valid promotional invitation code.', 'error');
  }
}

// Copy Code
function copyPromoCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast('Code Copied', `Code ${code} copied to clipboard! Paste it at checkout for 15% off.`, 'content_copy');
  }).catch(() => {
    showToast('Code: ' + code, 'Use code ' + code + ' in bag for 15% off.', 'content_copy');
  });
}

// Checkout Modal Flow
function openCheckoutModal() {
  if (State.cart.length === 0) {
    showToast('Empty Bag', 'Please add items to your shopping bag before proceeding.', 'error');
    return;
  }

  toggleCart(false);
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    setCheckoutStep(1);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function setCheckoutStep(stepNumber) {
  document.querySelectorAll('.checkout-step-pane').forEach(pane => pane.style.display = 'none');
  document.querySelectorAll('.checkout-step-tab').forEach(tab => {
    tab.classList.remove('border-[#ffca99]', 'text-[#ffca99]');
    tab.classList.add('border-transparent', 'text-[#d4c3be]');
  });

  const activePane = document.getElementById(`checkoutStep${stepNumber}`);
  if (activePane) activePane.style.display = 'block';

  const activeTab = document.getElementById(`checkoutStepTab${stepNumber}`);
  if (activeTab) {
    activeTab.classList.remove('border-transparent', 'text-[#d4c3be]');
    activeTab.classList.add('border-[#ffca99]', 'text-[#ffca99]');
  }

  if (stepNumber === 3) {
    // Generate order confirmation details
    const orderNumber = 'ATF-' + Math.floor(100000 + Math.random() * 900000);
    const orderRef = document.getElementById('orderNumberDisplay');
    if (orderRef) orderRef.textContent = orderNumber;

    // Collect checkout details for store notification
    const firstName = document.getElementById('checkoutFirstName')?.value || 'Guest';
    const lastName = document.getElementById('checkoutLastName')?.value || 'Patron';
    const email = document.getElementById('checkoutEmail')?.value || 'guest@example.com';
    const address = document.getElementById('checkoutAddress')?.value || '';
    const city = document.getElementById('checkoutCity')?.value || '';
    const zip = document.getElementById('checkoutZip')?.value || '';
    const totalAmount = document.getElementById('cartGrandTotal')?.textContent || 'N/A';

    const itemsSummary = State.cart.map(item => {
      const prod = PRODUCTS.find(p => p.id === item.productId);
      return prod ? `• ${prod.name} (Size: ${item.size}, Color: ${item.color}, Qty: ${item.qty})` : `• Item x${item.qty}`;
    }).join('\n');

    // Send order notification to Web3Forms
    sendWeb3FormsSubmission({
      subject: `🛒 New Order Placed: #${orderNumber} (${totalAmount}) — ATIF STORE`,
      from_name: 'ATIF STORE Orders',
      order_id: orderNumber,
      patron_name: `${firstName} ${lastName}`,
      email: email,
      shipping_address: `${address}, ${city} ${zip}`,
      order_total: totalAmount,
      items_ordered: itemsSummary || 'Capsule Selection'
    });

    // Clear cart on successful purchase
    State.cart = [];
    State.appliedPromo = null;
    persistState();
    updateHeaderBadges();
  }
}

// Book Stylist / Salon Appointment Modal
function openStylistModal() {
  const modal = document.getElementById('stylistModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeStylistModal() {
  const modal = document.getElementById('stylistModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

async function confirmStylistBooking(e) {
  e.preventDefault();

  const submitBtn = document.getElementById('stylistSubmitBtn');
  const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Confirm Salon Reservation';

  const name = document.getElementById('stylistName')?.value || 'Distinguished Patron';
  const email = document.getElementById('stylistEmail')?.value || '';
  const phone = document.getElementById('stylistPhone')?.value || 'Not provided';
  const flagship = document.getElementById('stylistFlagship')?.value || '';
  const date = document.getElementById('stylistDate')?.value || '';
  const curator = document.getElementById('stylistCurator')?.value || '';
  const notes = document.getElementById('stylistNotes')?.value || 'None';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="material-symbols-outlined text-sm animate-spin">refresh</span>
      <span>Reserving with Atelier...</span>
    `;
  }

  try {
    const res = await sendWeb3FormsSubmission({
      subject: `🏛 Salon Styling & Bespoke Reservation — ${name}`,
      from_name: 'ATIF STORE Concierge',
      patron_name: name,
      email: email,
      phone: phone,
      flagship_location: flagship,
      preferred_date: date,
      curator: curator,
      wardrobe_notes: notes
    });

    closeStylistModal();

    if (res && res.success) {
      showToast('Appointment Reserved', `Thank you, ${name}. Your consultation request has been sent to our atelier.`, 'check_circle');
      document.getElementById('stylistBookingForm')?.reset();
    } else {
      showToast('Appointment Reserved', `Your consultation at ${flagship.split('—')[0]} is reserved for ${date}.`, 'check_circle');
    }
  } catch (err) {
    closeStylistModal();
    showToast('Appointment Reserved', `Your consultation request has been submitted. Check your inbox for details.`, 'check_circle');
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  }
}

// Transparency Manifesto Modal
function openManifestoModal() {
  const modal = document.getElementById('manifestoModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeManifestoModal() {
  const modal = document.getElementById('manifestoModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Lookbook Modal
function openLookbookModal() {
  const modal = document.getElementById('lookbookModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLookbookModal() {
  const modal = document.getElementById('lookbookModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Mobile Menu Toggle
function toggleMobileNav() {
  const menu = document.getElementById('mobileNavDrawer');
  if (menu) {
    menu.classList.toggle('active');
  }
}

// Setup Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateHeaderBadges();
  renderProducts();

  // Category filter tabs
  const filterButtons = document.querySelectorAll('#productFilterControls button');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-[#ffca99]', 'text-[#2b211e]', 'font-semibold');
        b.classList.add('bg-[#3f3533]', 'text-[#FCF9F3]');
      });
      btn.classList.add('bg-[#ffca99]', 'text-[#2b211e]', 'font-semibold');
      btn.classList.remove('bg-[#3f3533]', 'text-[#FCF9F3]');

      State.currentCategory = btn.getAttribute('data-category') || 'all';
      renderProducts();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      State.currentSort = e.target.value;
      renderProducts();
    });
  }

  // Currency select
  const currencySelect = document.getElementById('currencySelect');
  if (currencySelect) {
    currencySelect.value = State.currency;
    currencySelect.addEventListener('change', (e) => {
      State.currency = e.target.value;
      persistState();
      renderProducts();
      renderCart();
      renderWishlist();
      showToast('Currency Updated', `Switched display currency to ${State.currency}.`, 'payments');
    });
  }

  // Keyboard shortcut: ⌘K or Ctrl+K for search
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      toggleSearchModal();
    }
    if (e.key === 'Escape') {
      toggleCart(false);
      toggleWishlistDrawer(false);
      closeQuickView();
      toggleSearchModal(false);
      closeCheckoutModal();
      closeStylistModal();
      closeManifestoModal();
      closeLookbookModal();
    }
  });

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletterEmailInput') || newsletterForm.querySelector('input[type="email"]');
      const submitBtn = document.getElementById('newsletterSubmitBtn');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Subscribe';

      if (input && input.value) {
        const email = input.value.trim();
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = 'Subscribing...';
        }

        try {
          await sendWeb3FormsSubmission({
            subject: `✨ New Newsletter Patron — ${email}`,
            from_name: 'ATIF STORE Subscriptions',
            email: email,
            message: `New patron joined the Autumn Neutrality Capsule private patron list from ${email}.`
          });
        } catch (err) {
          console.warn('Newsletter submission error:', err);
        }

        showToast('Welcome to the Maison', 'Thank you for joining our private patron list. Invitation code ATELIER applied.', 'mark_email_read');
        input.value = '';
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }
    });
  }
});
