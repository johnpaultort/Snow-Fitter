window.GEAR_DATA = window.GEAR_DATA || {
    skis: [],
    snowboards: [],
    ski_boots: [],
    snowboard_boots: [],
    snowboard_bindings: [],
    ski_bindings: [],

    helmets: [],
    goggles: [],
    backpacks: [],
    bags: [],
};

let gearCart = [];

let favorites = JSON.parse(
  localStorage.getItem("favorites") || "[]"
);
 

const $ = id => document.getElementById(id);
let historyStack = [];
let state = { sport: null, tool: null };
let currentPage = 'landing';
 
function goBack() {
  if (historyStack.length > 0) {
    const prev = historyStack.pop();
    currentPage = prev;
    renderPage(prev);
  }
}
function navigate(page, data = {}) {
  historyStack.push(currentPage);
  currentPage = page;
  Object.assign(state, data);
  renderPage(page);
}
function updateNav() {
  const bc = $('breadcrumb');
  const back = $('backBtn');
  const parts = [];
  if (state.sport) parts.push(`<span>${state.sport === 'ski' ? '🎿 Ski' : '🏂 Snowboard'}</span>`);
  if (state.tool) parts.push(`<span>›</span><span>${toolLabel(state.tool)}</span>`);
  bc.innerHTML = parts.join('');
  back.style.display = historyStack.length > 0 ? 'block' : 'none';
}
function toolLabel(t) {
  return {
    'ski-recommender':'Ski Finder',
    'ski-boots':'Boot Fitter',
    'din-calc':'DIN Calculator',
    'ski-bindings':'Binding Recommender',
    'sb-board':'Board Finder',
    'sb-boots':'Boot Fitter',
    'sb-bindings':'Binding Recommender'
  }[t] || t;
}
function renderPage(page) {
  updateNav();
  const app = $('app');
  const map = {
    landing: landingHTML,
    'ski-hub': skiHubHTML,
    'sb-hub': sbHubHTML,
    'ski-recommender': skiRecommenderHTML,
    'ski-boots': skiBootsHTML,
    'din-calc': dinCalcHTML,
    'ski-bindings': skiBindingsHTML,
    'sb-board': sbBoardHTML,
    'sb-boots': sbBootsHTML,
    'sb-bindings': sbBindingsHTML,
    'acc-hub': accessoriesHubHTML,
    'helmet-finder': helmetFinderHTML,
    'goggle-finder': goggleFinderHTML,
    'backpack-finder': backpackFinderHTML,
    'bag-finder': bagFinderHTML
  };
  if (page === 'landing') { state = { sport: null, tool: null }; updateNav(); }
  app.innerHTML = (map[page] || landingHTML)();
  if(page === 'ski-recommender') {
    setupPreferenceLimit();
  }
  renderCart();
}
 
// UTILS
function radioOpt(name, value, label) {
  return `<label class="radio-opt"><input type="radio" name="${name}" value="${value}"><div class="radio-label">${label.replace('\n','<br>')}</div></label>`;
}

function checkOpt(name, value, label) {
  return `<label class="radio-opt"><input type="checkbox" name="${name}" value="${value}"><div class="radio-label">${label}</div></label>`;
}

function setupPreferenceLimit() {
  const checkboxes = document.querySelectorAll('input[name="preferences"]');

  if (!checkboxes.length) return;

  checkboxes.forEach(box => {
    box.addEventListener("change", () => {
      const checked = document.querySelectorAll('input[name="preferences"]:checked');

      if (checked.length >= 3){
        checkboxes.forEach(cb=> {
          if (!cb.checked) cb.disabled = true;
      });
      } else {
        checkboxes.forEach(cb => {
          cb.disabled = false;
        });
      }
    });
  });
}

function heightOpts() {
  return [["4'10\"","147"],["4'11\"","150"],["5'0\"","152"],["5'1\"","155"],["5'2\"","157"],["5'3\"","160"],["5'4\"","163"],["5'5\"","165"],["5'6\"","168"],["5'7\"","170"],["5'8\"","173"],["5'9\"","175"],["5'10\"","178"],["5'11\"","180"],["6'0\"","183"],["6'1\"","185"],["6'2\"","188"],["6'3\"","190"],["6'4\"","193"],["6'5\"","196"]]
    .map(([l,v]) => `<option value="${v}">${l} (${v}cm)</option>`).join('');
}

function renderProducts(products, type = '') {
  if (!products || products.length === 0) {
    return `<p class="no-products">No ${type} products on file yet.</p>`;
  }

  return `
    <div class="product-grid">
      ${products.map(p => `
        <div class="product-card">

          <img 
            src="${p.image || '/images/placeholder.jpg'}"
            class="product-image"
            alt="${p.name}"
           >

          <div class="product-brand">${p.brand || ''}</div>

          <div class="product-name">${p.name || ''}</div>

          <div class="product-price">${p.price || ''}</div>

          ${p.lengths ? `
            <div class="product-lengths">
              Available:
              ${p.lengths.map(l => {
                if (typeof l === 'number') return l;

                return l.width === 'wide'
                  ? `${l.size}W`
                  : `${l.size}`;
              }).join(', ')}
            </div>
          ` : ''}

          ${p.recommendedSize 
            ? `<div class="product-lengths">
            Recommended Size: <strong>${p.recommendedSize}</strong>
            </div>`
          : ''}

          ${p.flex
            ? `<div class="product-lengths">Flex: ${p.flex}</div>`
            : ''}

          ${p.notes
            ? `<div class="product-notes">${p.notes}</div>`
            : ''}

          <button
            class="add-cart-btn"
            data-name="${encodeURIComponent(p.name)}"
            onclick="addToCartByName(decodeURIComponent(this.dataset.name), this)"
          >
            Add To List
          </button>

          <button
            class="favorite-btn ${favorites.includes(p.name) ? 'active' : ''}"
            data-name="${encodeURIComponent(p.name)}"
            onclick="toggleFavorite(decodeURIComponent(this.dataset.name))"
          >
            ${favorites.includes(p.name) ? '♥' : '♡'}
          </button>

        </div>
      `).join('')}
    </div>
  `;
}

function addToCartByName(name,btn) {
    const allProducts = [
        ...(GEAR_DATA.skis || []),
        ...(GEAR_DATA.snowboards || []),
        ...(GEAR_DATA.ski_boots || []),
        ...(GEAR_DATA.snowboard_boots || []),
        ...(GEAR_DATA.snowboard_bindings || []),
        ...(GEAR_DATA.ski_bindings || []),

        ...(GEAR_DATA.helmets || []),
        ...(GEAR_DATA.goggles || []),
        ...(GEAR_DATA.backpacks || []),
        ...(GEAR_DATA.bags || [])
    ];

    const product = allProducts.find(
        p => p.name === name
    );

    if (product) {
        addToCart(product);

        const original = btn.innerHTML;

        btn.innerHTML = "✓ Added";
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = original;
            btn.disabled = false;
        }, 1500);
    }
}

// ADD TO CART
function addToCart(product) {

    const alreadyInCart = gearCart.some(
        item => item.name === product.name
    );

    if (alreadyInCart) {
        return;
    }

    gearCart.push(product);
    renderCart();
}

// RENDER CART
function renderCart() {
  const cart = document.getElementById('gear-cart');

    if (!cart) return;

  cart.innerHTML = `
    <div class="cart-icon-wrapper" onclick="toggleCart()">
     🛍️
     <span class="cart-count">${gearCart.length}</span>
    </div>

    <div class="cart-dropdown" id="cart-dropdown">
        ${
            gearCart.length === 0
                ?`
                <div class="empty-cart">
                    Your gear list is empty.
                </div>
                `
                :`
                <div class="result-cart">

                    <div class="cart-header">

                        <div class="result-title">Gear List</div>

                        <button
                            class="close-cart-btn"
                            onclick="event.stopPropagation(); toggleCart();"
                        >
                            ✕
                        </button>
                    </div>

                    <div class="product-grid">

                        ${gearCart.map((item, index) => `
                            <div class="product-card">

                                <img
                                    src="${item.image || ''}"
                                    class="product-image"
                                >

                                <div class="product-brand">
                                    ${item.brand || ''}
                                </div>

                                <div class="product-name">
                                    ${item.name || ''}
                                </div>

                                <div class="product-price">
                                    ${item.price || ''}
                                </div>

                                <button
                                    class="remove-icon-btn" 
                                    onclick="removeFromCart(${index})"
                                    title="Remove item"
                                >
                                    🗑️
                                </button>

                            </div>
                        `).join('')}

                    </div>

                 </div>
              `
            }
      </div>
    `;

}

function toggleCart() {
    const dropdown = document.getElementById('cart-dropdown');

    if (!dropdown) return;

    dropdown.classList.toggle('show-cart');
}

// REMOVE FROM CART
function removeFromCart(index) {
  gearCart.splice(index, 1);

  renderCart();
}

// Favorite
function toggleFavorite(name){
    if(favorites.includes(name)){
        favorites = favorites.filter(x => x !== name);
    } else {
        favorites.push(name);
    }
    
    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    document.querySelectorAll(".favorite-btn").forEach(btn => {
        const itemName = decodeURIComponent(btn.dataset.name);

        btn.classList.toggle(
            "active",
            favorites.includes(itemName)
        );
    });
}

// Landing
function landingHTML() {
  return `<div class="hero page">
  <div class="hero-bg"></div>
  <svg class="mountain-svg" viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,220 200,40 400,220" fill="#4fc3f7"/>
    <polygon points="150,220 380,20 610,220" fill="#7a8aaa"/>
    <polygon points="350,220 560,60 800,220" fill="#4fc3f7"/>
    <rect width="800" height="40" y="180" fill="#0a0e1a"/>
  </svg>
  <h1>FIND YOUR<br><em>PERFECT FIT</em></h1>
  <div class="hero-notice">⚠ Please only use this tool if you're in a hurry or our associates are busy helping others. We're always happy to help you in person!</div>
  <div class="sport-cards">
    <div class="sport-card ski-card" onclick="chooseSport('ski')">
      <span class="sport-icon">🎿</span><h2>SKI</h2>
      <p>Ski recommender, boot fitter by measurement, and DIN binding calculator.</p>
      <span class="sport-arrow">Let's get fitted →</span>
    </div>
    <div class="sport-card snow-card" onclick="chooseSport('snowboard')">
      <span class="sport-icon">🏂</span><h2>SNOWBOARD</h2>
      <p>Snowboard gear by riding style and sizing.</p>
      <span class="sport-arrow">Let's get fitted →</span>
    </div>
    <div class="sport-card accessories-card" onclick="chooseSport('accessories')">
      <span class="sport-icon">🪖</span><h2>ACCESSORIES</h2>
      <p>Accessories recommender by what you are looking for (bags, helmets, goggles, and more).</p>
      <span class="sport-arrow">Let't find accessories →</span>
    </div>
  </div>
</div>`;
}

// Main Window (Shopping for ....)
function chooseSport(sport) {
  state.sport = sport;

  if (sport === 'ski'){
      navigate('ski-hub');
  }
  else if (sport === 'snowboard'){
      navigate('sb-hub');
  }
  else if (sport === 'accessories'){
      navigate('acc-hub')
  }
}
 
// SKI TOOLS START HERE
// SKI HUB
function skiHubHTML() {
  return `<div class="hub page">
  <div class="hub-header">
    <div class="hero-tag" style="margin-bottom:.75rem;">🎿 Ski Tools</div>
    <h2>What are you looking for?</h2>
    <p>Choose a tool below to get personalized recommendations.</p>
  </div>
  <div class="tool-grid">
    <div class="tool-card" onclick="navigate('ski-recommender',{tool:'ski-recommender'})">
      <div class="tool-icon">🎿</div><h3>Ski Recommender</h3>
      <p>Find the right ski based on your ability, riding style, and preferences.</p>
    </div>
    <div class="tool-card" onclick="navigate('ski-boots',{tool:'ski-boots'})">
      <div class="tool-icon">👟</div><h3>Boot Fitter</h3>
      <p>Get your ski boot size using foot length, width, and arch measurements.</p>
    </div>
    <div class="tool-card" onclick="navigate('din-calc',{tool:'din-calc'})">
      <div class="tool-icon">⚙️</div><h3>DIN Calculator</h3>
      <p>Calculate your binding release setting for safety and performance.</p>
    </div>
    <div class="tool-card" onclick="navigate('ski-bindings',{tool:'ski-bindings'})">
      <div class="tool-icon">🔗</div><h3>Binding Recommender</h3>
      <p>Find the right bindings to match your DIN setting.</p>
    </div>
  </div>
</div>`;
}

// Snowboard Hub
function sbHubHTML() {
  return `<div class="hub page">
  <div class="hub-header">
    <div class="hero-tag" style="margin-bottom:.75rem;">🏂 Snowboard Tools</div>
    <h2>What are you looking for?</h2>
    <p>Choose a tool to get personalized board and boot recommendations.</p>
  </div>
  <div class="tool-grid">
    <div class="tool-card" onclick="navigate('sb-board',{tool:'sb-board'})">
      <div class="tool-icon">🏂</div><h3>Board Recommender</h3>
      <p>Find the right snowboard shape, length, and flex for your style and ability.</p>
    </div>
    <div class="tool-card" onclick="navigate('sb-boots',{tool:'sb-boots'})">
      <div class="tool-icon">👢</div><h3>Boot Finder</h3>
      <p>Snowboard boots are more forgiving — find your right size and flex.</p>
    </div>
    <div class="tool-card" onclick="navigate('sb-bindings',{tool:'sb-bindings'})">
      <div class="tool-icon">🔗</div><h3>Binding Recommender</h3>
      <p>Find the right bindings to match your style of riding.</p>
    </div>
  </div>
</div>`;
}


// Accessories Hub
function accessoriesHubHTML() {
  return `<div class="hub page">
  <div class="hub-header">
    <div class="hero-tag" style="margin-bottom:.75rem;">🏂 Accessories Tool</div>
    <h2>What are you looking for?</h2>
    <p>Choose a tool.</p>
  </div>

  <div class="tool-grid">
    <div class="tool-card" onclick="navigate('helmet-finder',{tool:'helmet-finder'})">
      <div class="tool-icon">🪖</div><h3>Helmet Recommender</h3>
      <p>Find the right helmet according to what you are after.</p>
    </div>

    <div class="tool-card" onclick="navigate('goggle-finder',{tool:'goggle-finder'})">
      <div class="tool-icon">🥽</div><h3>Goggle Finder</h3>
      <p>Find the right goggles.</p>
    </div>

    <div class="tool-card" onclick="navigate('backpack-finder',{tool:'backpack-finder'})">
      <div class="tool-icon">🧳</div><h3>Backpack Finder</h3>
      <p>Find the right backpack to fit your needs.</p>
    </div>

    <div class="tool-card" onclick="navigate('bag-finder',{tool:'bag-finder'})">
      <div class="tool-icon">🧳</div><h3>Travel Bag Finder</h3>
      <p>Find the right travel bag for skis or snowboards.</p>
    </div>

  </div>
</div>`;
}

function helmetFinderHTML() {
  return `<div class="tool-page page">
  <h2 class="tool-title">Helmet Finder</h2>
  <p class="tool-desc">Find helmet that may fit right for you from our inventory.</p>
  <div class="form-group">
    <div class="form-label">Gender</div>
    <div class="radio-grid">
      ${radioOpt('gender-helmet','unisex','Unisex')}
      ${radioOpt('gender-helmet','mens','Mens')}
      ${radioOpt('gender-helmet','womens','Womens')}
      ${radioOpt('gender-helmet','kids','Kids')}
    </div>
  </div>
  <div class="form-group">
    <div class="form-label">Aspects</div>

    <div class="radio-grid">
      ${radioOpt('aspects-qualities','vents','Air Ventilation')}
      ${radioOpt('aspects-qualities','value','Cheapest')}
      ${radioOpt('aspects-qualities','adjustable','Adjustable BOA')}
    </div>

    <div class="form-hint">
      All Helmets have MIPS
    </div>
  </div>
  <button class="btn helmets" onclick="calcHelmet()">Get My Helmet→</button>
  <div id="helmet-result"></div>
</div>`;
}

// INIT
renderPage('landing');
renderCart();