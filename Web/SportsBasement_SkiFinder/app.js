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
 
// SKI RECOMMENDER TOOL
function skiRecommenderHTML() {
  return `<div class="tool-page page">
  <h2 class="tool-title">SKI RECOMMENDER</h2>
  <p class="tool-desc">Answer a few questions and we'll suggest the right type of ski, length, and products from our inventory.</p>
  
  <div class="form-group">
    <div class="form-label">Category</div>
    <div class="radio-grid">
    ${radioOpt('gender', 'mens', "Men's")}
    ${radioOpt('gender', 'womens', "Women's")}
  </div>

  <div class="form-group">
    <div class="form-label">Skill Level</div>
    <div class="radio-grid">${['beginner','intermediate','advanced'].map(s=>radioOpt('skill',s,s.charAt(0).toUpperCase()+s.slice(1))).join('')}</div>
  </div>

  <div class="form-group">
    <div class="form-label">Riding Style</div>
    <div class="radio-grid">
      ${radioOpt('style','all-mountain','All Mountain')}
      ${radioOpt('style','groomer','Groomed Runs')}
      ${radioOpt('style', 'freeride', 'Off-Piste/Freeride')}
      ${radioOpt('style','park','Park')}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Specific Traits (select 3)</div>
    <div class="checkbox-grid">
      ${checkOpt('preferences','trees','Trees')}
      ${checkOpt('preferences','moguls','Moguls')}
      ${checkOpt('preferences','steeps','Steeps')}
      ${checkOpt('preferences','playful','Jumps/Playful')}
      ${checkOpt('preferences','high speed','High Speed')}
      ${checkOpt('preferences', 'charger', 'Charger')}
      ${checkOpt('preferences', 'powder', 'Powder')}
    </div>
  </div>

  <div class="form-row">
    <div class="form-group">
      <label class="form-label" for="skier-height">Your Height</label>
      <select class="form-select" id="skier-height"><option value="">Select height</option>${heightOpts()}</select>
    </div>

    <div class="form-group">
      <label class="form-label" for="skier-weight">Weight (lbs)</label>
      <input type="number" class="form-input" id="skier-weight" placeholder="e.g. 170" min="80" max="350" />
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Terrain</div>
    <div class="radio-grid">
      ${radioOpt('terrain','groomed','Only Groomed')}
      ${radioOpt('terrain','mixed','Mixed Terrain')}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Where do you ride?</div>
    <div class="radio-grid">
      ${radioOpt('local', 'socal', 'So-Cal')}
      ${radioOpt('local', 'sierra', 'Sierra Nevada')}
      ${radioOpt('local', 'pnw', 'Pacific NW')}
      ${radioOpt('local', 'utah','Utah')} 
      ${radioOpt('local', 'colorado', 'Colorado')}
      ${radioOpt('local', 'northeast', 'North East')}
      ${radioOpt('local', 'canada', 'Canada')}
      ${radioOpt('local', 'japan', 'Japan')}
      ${radioOpt('local', 'alps', 'Switzerland/France')}
    </div>
  </div>

  <button class="btn ski" onclick="calcSki()">Get My Ski Recommendation →</button>
  <div id="ski-result"></div>
</div>`;
}
 
// Function for Skis 
function calcSki() {
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const skill = document.querySelector('input[name="skill"]:checked')?.value;
  const style = document.querySelector('input[name="style"]:checked')?.value;

  const preferences = [
    ...document.querySelectorAll('input[name="preferences"]:checked')
  ].map(el => el.value);

  console.log(preferences);

  const heightCm = parseInt($('skier-height')?.value);
  const weightLbs = parseInt($('skier-weight')?.value);

  if (!skill || !style || !heightCm || !weightLbs) {
    $('ski-result').innerHTML = `<div class="warning-box">Please fill in all fields.</div>`; return;
  }
  const weightKg = Math.round(weightLbs / 2.205);

  let base = heightCm;

  //Skill Checker
  if (skill==='beginner') base-=15; 
  else if (skill==='intermediate') base-=8; 
  else if (skill==='advanced') base-=3; else base+=2;

  // Style Checker
  if (style == 'freeride') base +=6; 
  else if (style==='park') base-=8; 
  else if (style==='groomer') base-=4;

  if (weightKg>90) base+=5; 
  else if (weightKg<60) base-=5;
  const minLen=base-3, maxLen=base+3;
  const types = {
    'all-mountain':{
      name:'All-Mountain Ski',
      width:'90-100mm',
      rocker:'Slight tip rocker',
      desc:'Versatile ski for any condition.'
    },

    'groomer':{
      name:'Carving / Groomer Ski',
      width:'80-88mm',
      rocker:'Camber dominant',
      desc:'Narrow waist for precise carving on groomers.'
    },

    'freeride':{
      name:'Powder / Freeride Ski',
      width:'100–130mm',
      rocker:'Full early rise tip & tail',
      desc:'Wide and rockered for deep snow.'
    },

    'park':{
      name:'Park / Twin-Tip Ski',
      width:'88–95mm',
      rocker:'Twin-tip, slight camber',
      desc:'Symmetrical for skiing switch and park features.'
    },

  };

  const t = types[style];
  const skillBadge={beginner:'badge-blue',intermediate:'badge-green',advanced:'badge-warn'};
  const matched = (GEAR_DATA.skis || []).filter(s =>
    s.styles.includes(style) && 
    s.skill.includes(skill) &&
    (
      s.gender === gender
    )
  );

  $('ski-result').innerHTML = `
  <div class="result-card">
    <div class="result-header">
      <div class="result-icon" style="background:rgba(74,222,128,.15);">🎿</div>
      <div><div class="result-title">${t.name}</div><div class="result-sub">Personalized recommendation</div></div>
    </div>
    <div class="result-row"><span class="result-key">Recommended Length</span><span class="result-val" style="color:var(--ski);">${minLen}–${maxLen} cm</span></div>
    <div class="result-row"><span class="result-key">Waist Width</span><span class="result-val" style="color:var(--accent);">${t.width} underfoot</span></div>
    <div class="result-row"><span class="result-key">Rocker Profile</span><span class="result-val">${t.rocker}</span></div>
    <div class="result-row"><span class="result-key">Skill Level</span><span class="result-val"><span class="badge ${skillBadge[skill]}">${skill.charAt(0).toUpperCase()+skill.slice(1)}</span></span></div>
    <div class="result-row"><span class="result-key">Description</span><span class="result-val" style="max-width:55%;text-align:right;font-weight:400;color:var(--muted);font-size:.8rem;">${t.desc}</span></div>
    <hr class="section-sep"/>
    <div style="font-size:.78rem;color:var(--muted);font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.75rem;">Matching Products In Stock</div>
    ${renderProducts(matched, 'ski')}
  </div>
  <div class="info-box">Ski lengths are guidelines. Demo before you buy! Your style may shift the ideal length by ±5cm.</div>`;
}
 
// SKI BOOTS TOOL
function skiBootsHTML() {
  return `<div class="tool-page page">
  <h2 class="tool-title">SKI BOOT FITTER</h2>
  <p class="tool-desc">Ski boots are the most important piece of gear. Enter your foot measurements for an accurate fit recommendation.</p>
  
  <div class="form-group">
    <div class="form-label">Category</div>
    <div class="radio-grid">
      ${radioOpt('gender','mens',"Men's")}
      ${radioOpt('gender','womens',"Women's")}
    </div>
  </div>

  <div class="form-row">
    <div class="form-group">
      <label class="form-label" for="foot-length">Foot Length (cm)</label>
      <input type="number" class="form-input" id="foot-length" placeholder="e.g. 27.5" step="0.5" min="20" max="34" />
      <div class="form-hint">Heel to longest toe, standing</div>
    </div>

    <div class="form-group">
      <label class="form-label" for="foot-width">Forefoot Width (mm)</label>
      <input type="number" class="form-input" id="foot-width" placeholder="e.g. 98" step="1" min="85" max="115" />
      <div class="form-hint">Widest part of foot (ball)</div>
    </div>
  </div>

  <div class="form-group">
    <label class="form-label" for="arch-type">Arch Type</label>
    <select class="form-select" id="arch-type">
      <option value="">Select arch type</option>
      <option value="low">Low (flat foot)</option>
      <option value="medium">Medium (neutral)</option>
      <option value="high">High arch</option>
    </select>
  </div>

  <div class="form-group">
    <div class="form-label">Riding Level</div>
    <div class="radio-grid">
      ${radioOpt('boot-level','beginner','Beginner')}
      ${radioOpt('boot-level','intermediate','Intermediate')}
      ${radioOpt('boot-level','advanced','Advanced')}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Instep</div>
    <div class="radio-grid">
      ${radioOpt('instep','low-volume','LV')}
      ${radioOpt('instep','regular','MV')}
      ${radioOpt('instep','wide','HV')}</div>
  </div>

  <button class="btn ski" onclick="calcSkiBoot()">Find My Boot Size →</button>
  <div id="boot-result"></div>

</div>`;
}
 

// Calculates ski boots by all information
function calcSkiBoot() {
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const footLen = parseFloat($('foot-length')?.value);
  const footWidth = parseInt($('foot-width')?.value);
  const archType = $('arch-type')?.value;
  const level = document.querySelector('input[name="boot-level"]:checked')?.value;
  const shape = document.querySelector('input[name="instep"]:checked')?.value;
  if (!footLen || !footWidth || !archType || !level || !shape) {
    $('boot-result').innerHTML = '<div class="warning-box">Please fill in all fields.</div>'; return;
  }
  const matchedBoots = (GEAR_DATA.ski_boots || []).filter(b =>
    b.skill.includes(level) &&
    b.width.includes(shape) &&
    b.gender === gender
  );  
  const usSize = Math.round((footLen - 17) / 0.845 * 10) / 10;
  const euroSize = Math.round(footLen * 1.5 + 1.5);
  const shellSize = Math.round((footLen + 1) * 10) / 10;
  const lastWidth = footWidth <= 93 ? 'Narrow Last (96–98mm)' : footWidth <= 100 ? 'Regular Last (100–102mm)' : 'Wide Last (104–106mm)';
  const flexMap = {beginner:'50–70',intermediate:'80–100',advanced:'100–120',expert:'120–140'};
  const insole = archType==='high' ? 'High-arch aftermarket footbed recommended (e.g. Superfeet Carbon)' : archType==='low' ? 'Supportive footbed to control pronation (e.g. Sidas Custom)' : 'Stock footbed usually sufficient; aftermarket optional';
  const brands = {
    narrow:['Lange (96–98mm last)','Atomic Hawx','Tecnica Cochise narrow'],
    regular:['Salomon S/Pro','Nordica Speedmachine','Fischer RC Pro'],
    wide:['Atomic Hawx XTD Wide','Rossignol Alltrack Pro Wide','Nordica Sportmachine Wide']
  };
  $('boot-result').innerHTML = `
  <div class="result-card">
    <div class="result-header">
      <div class="result-icon" style="background:rgba(79,195,247,.15);">👟</div>
      <div><div class="result-title">Your Boot Fit Profile</div><div class="result-sub">Based on foot measurements</div></div>
    </div>
    <div class="result-row"><span class="result-key">Mondopoint Size</span><span class="result-val" style="color:var(--ski);">${footLen} cm</span></div>
    <div class="result-row"><span class="result-key">Euro Size (approx)</span><span class="result-val" style="color:var(--accent);">${euroSize}</span></div>
    <div class="result-row"><span class="result-key">US Men's (approx)</span><span class="result-val">${usSize.toFixed(1)}</span></div>
    <div class="result-row"><span class="result-key">Shell Check Target</span><span class="result-val">${shellSize} cm</span></div>
    <div class="result-row"><span class="result-key">Last Width</span><span class="result-val" style="color:var(--accent);">${lastWidth}</span></div>
    <div class="result-row"><span class="result-key">Flex Index</span><span class="result-val" style="color:var(--ski);">${flexMap[level]}</span></div>
    <hr class="section-sep"/>
    <div style="font-size:.78rem;color:var(--muted);font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.5rem;">Insole Recommendation</div>
    <p style="font-size:.84rem;color:var(--muted);line-height:1.6;">${insole}</p>
    <hr class="section-sep"/>
    <div style="font-size:.78rem;color:var(--muted);font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.5rem;">Brand Suggestions — ${shape.charAt(0).toUpperCase()+shape.slice(1)} Foot</div>
    <ul class="rec-list">${brands[shape].map(b=>`<li><strong>${b}</strong></li>`).join('')}</ul>
    <hr class="section-sep"/>
    <div style="font-size:.78rem;color:var(--muted);font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.75rem;">Matching Ski Boots</div>
    ${renderProducts(matchedBoots, 'ski boot')}
  </div>
  <div class="warning-box">⚠ Always have ski boots fitted by a professional. Heat molding and shell punch-outs are often needed.</div>`;
}

// DIN CALCULATOR
function dinCalcHTML() {
  return `<div class="tool-page page">
  <h2 class="tool-title">DIN CALCULATOR</h2>
  <p class="tool-desc">Your DIN setting controls how easily your bindings release. Too low = pre-release; too high = injury risk.</p>

  <div class="form-group">
    <div class="form-label">Skier Type</div>
    <div class="radio-grid">
      ${radioOpt('din-type','1','Type 1\nCautious / Beginner')}
      ${radioOpt('din-type','2','Type 2\nIntermediate')}
      ${radioOpt('din-type','3','Type 3\nAdvanced / Expert')}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Boot Sole Length (mm)</div>
    <div class="radio-grid">
      ${radioOpt('boot-sole','<251','< 251 mm')}
      ${radioOpt('boot-sole','251-270','251-270 mm')}
      ${radioOpt('boot-sole','271-290','271-290 mm')}
      ${radioOpt('boot-sole','291-310','291-310mm')}
      ${radioOpt('boot-sole','311-330','311-330mm')}
      ${radioOpt('boot-sole','>330','>330 mm')}
    </div>

    <div class="form-hint">Places to look: Side of heel, inside arch area of shell, and sole of boot.
  </div>

  <div class="form-group">
    <label class="form-label">Weight (LBS)</div>
    <div class="radio-grid">
    ${radioOpt('weight-din', '22-29', '22-29 lbs')}
    ${radioOpt('weight-din', '30-38', '30-38 lbs')}
    ${radioOpt('weight-din', '39-47', '39-47 lbs')}
    ${radioOpt('weight-din', '48-56', '48-56 lbs')}
    ${radioOpt('weight-din', '57-66', '57-66 lbs')}
    ${radioOpt('weight-din', '67-78', '67-78 lbs')}
    ${radioOpt('weight-din', '79-91', '79-91 lbs')}
    ${radioOpt('weight-din', '92-107', '92-107 lbs')}
    ${radioOpt('weight-din', '108-125', '108-125 lbs')}
    ${radioOpt('weight-din', '126-147', '126-147 lbs')}
    ${radioOpt('weight-din', '148-174', '148-174 lbs')}
    ${radioOpt('weight-din', '175-109', '175-209 lbs')}
    ${radioOpt('weight-din', '>210', ' > 210 lbs')}
  </div>

  <div class="form-group">
    <div class="form-label">Age</div>
    <div class="radio-grid">
      ${radioOpt('age-range', 'under-10', 'Under 10')}
      ${radioOpt('age-range', '>50', '10-50')}
      ${radioOpt('age-range', '<50', 'Over 50')}
  </div>

  <div class="form-group">
    <lable class="form-label">Height</div>
    <div class="radio-grid">
    ${radioOpt('height-din', "<4'10", "<4'10")}
    ${radioOpt('height-din', "4'11-5'2", "4'11-5'2")}
    ${radioOpt('height-din', "5'6-5'10", "5'6-5'10")}
    ${radioOpt('height-din', "5'11-6'4", "5'11-6'4")}
    ${radioOpt('height-din', ">6'5", ">6'5")}
  </div>

  <button class="btn ski" onclick="calcDIN()">Calculate My DIN →</button>
  <div id="din-result"></div>
</div>`;
}
 
function calcDIN() {
  const weightLbs = parseInt($('din-weight')?.value);
  const age = parseInt($('din-age')?.value);
  const heightCm = parseInt($('din-height')?.value);
  const type = document.querySelector('input[name="din-type"]:checked')?.value;
  if (!weightLbs || !age || !heightCm || !type) {
    $('din-result').innerHTML = `<div class="warning-box">Please fill in all fields.</div>`; return;
  }
  const dinTable = [
    [22,29,0.75,1.0,1.25,1.5],[30,38,1.0,1.25,1.5,1.75],[39,47,1.25,1.5,1.8,2.0],
    [48,56,1.5,1.8,2.0,2.5],[57,66,1.8,2.0,2.6,3.0],[67,78,2.0,2.6,3.0,3.7],
    [79,91,2.6,3.0,3.7,4.5],[92,107,3.0,3.7,4.5,5.5],[108,125,3.7,4.5,5.5,6.5],
    [126,147,4.5,5.5,6.5,7.5],[148,174,5.5,6.5,7.5,9.0],[175,209,6.5,7.5,9.0,10.5],
    [210,999,7.5,9.0,10.5,12.0],
  ];
  const row = dinTable.find(r => weightLbs >= r[0] && weightLbs <= r[1]);
  if (!row) { $('din-result').innerHTML = `<div class="warning-box">Weight out of range.</div>`; return; }
  const typeIndex = parseInt(type) - 1;
  let din = row[2 + typeIndex];
  if (age <= 10 || age >= 50) { const adjustedIdx = Math.max(0, typeIndex - 1); din = row[2 + adjustedIdx]; }
  if (heightCm > 193) din += 0.25; else if (heightCm < 150) din -= 0.25;
  din = Math.round(din * 4) / 4;
  const matchedBindings = (GEAR_DATA.ski_bindings || []).filter(b => din >= b.min_din && din <= b.max_din);
  $('din-result').innerHTML = `
  <div class="result-card">
    <div class="result-header">
      <div class="result-icon" style="background:rgba(251,191,36,.15);">⚙️</div>
      <div><div class="result-title">Your DIN Setting</div><div class="result-sub">Based on Powder7 / ISO 11088 chart</div></div>
    </div>
    <div style="text-align:center;padding:1.5rem 0;">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:5rem;color:var(--warn);line-height:1;">${din.toFixed(2)}</div>
      <div style="color:var(--muted);font-size:.82rem;margin-top:.25rem;">Recommended DIN Setting</div>
    </div>
    <hr class="section-sep"/>
    <div style="font-size:.78rem;color:var(--muted);font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.75rem;">Compatible Bindings</div>
    ${renderProducts(matchedBindings, 'bindings')}
  </div>
  <div class="warning-box">⚠ DIN settings should ALWAYS be checked and adjusted by a certified ski technician.</div>`;
}
 
// Ski Bindings
function skiBindingsHTML() {
  return `<div class="tool-page page">
  <h2 class="tool-title">SKI BINDING RECOMMENDER</h2>
  <p class="tool-desc">Find a binding that matches your DIN setting and skiing style.</p>
  <div class="form-group">
    <label class="form-label" for="bind-din">Your DIN Setting (if known)</label>
    <input type="number" class="form-input" id="bind-din" placeholder="e.g. 6.0" step="0.25" min="0.75" max="18" />
    <div class="form-hint">Use the DIN Calculator if you don't know yours.</div>
  </div>
  <div class="form-group">
    <div class="form-label">Skiing Style</div>
    <div class="radio-grid">
      ${radioOpt('bind-style','all-mountain','All Mountain')}
      ${radioOpt('bind-style','freeride','Freeride')}
      ${radioOpt('bind-style','carving','Carving')}
      ${radioOpt('bind-style','park','Park')}
    </div>
  </div>
  <button class="btn ski" onclick="calcSkiBindings()">Find Bindings →</button>
  <div id="ski-bind-result"></div>
</div>`;
}
 
function calcSkiBindings() {
  const din = parseFloat($('bind-din')?.value);
  const style = document.querySelector('input[name="bind-style"]:checked')?.value;
  if (!din || !style) {
    $('ski-bind-result').innerHTML = `<div class="warning-box">Please fill in all fields.</div>`; return;
  }
  const matched = (GEAR_DATA.ski_bindings || []).filter(b => din >= b.min_din && din <= b.max_din);
  $('ski-bind-result').innerHTML = `
  <div class="result-card">
    <div class="result-header">
      <div class="result-icon" style="background:rgba(79,195,247,.15);">🔗</div>
      <div><div class="result-title">Binding Matches</div><div class="result-sub">DIN range covers ${din.toFixed(2)}</div></div>
    </div>
    <hr class="section-sep"/>
    ${renderProducts(matched, 'binding')}
  </div>
  <div class="warning-box">⚠ Bindings must be mounted and adjusted by a certified ski technician.</div>`;
}
// SKI TOOLS END HERE

// SNOWBOARD TOOLS START HERE
// Snowboard Hub

// Pick tool page
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
 
// Board recommender
function sbBoardHTML() {
  return `<div class="tool-page page">
  <h2 class="tool-title">BOARD RECOMMENDER</h2>
  <p class="tool-desc">Find your ideal snowboard shape, length, and flex — plus matching boards from our inventory.</p>
  
  <div class="form-group">
    <div class="form-label">Category</div>
    <div class="radio-grid">
      ${radioOpt('gender','mens',"Men's")}
      ${radioOpt('gender','womens',"Women's")}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Skill Level</div>
    <div class="radio-grid">${['beginner','intermediate','advanced'].map(s=>radioOpt('sb-skill',s,s.charAt(0).toUpperCase()+s.slice(1))).join('')}</div>
  </div>

  <div class="form-group">
    <div class="form-label">Riding Style</div>
    <div class="radio-grid">
      ${radioOpt('sb-style','all-mountain','All Mountain')}
      ${radioOpt('sb-style','freeride','Freeride')}
      ${radioOpt('sb-style','park','Park')}
      ${radioOpt('sb-style','carving','Carving')}
    </div>
  </div>

  <div class="form-row">
    <div class="form-group">
      <label class="form-label" for="sb-height">Your Height</label>
      <select class="form-select" id="sb-height"><option value="">Select height</option>${heightOpts()}</select>
    </div>

    <div class="form-group">
      <label class="form-label" for="sb-weight">Weight (lbs)</label>
      <input type="number" class="form-input" id="sb-weight" placeholder="e.g. 160" min="80" max="300" />
    </div>
  </div>

  <div class="form-group">
    <label class="form-label" for="boot-size-sb">Boot Size (US Men's)</label>
    <select class="form-select" id="boot-size-sb">
      <option value="">Select boot size</option>
      ${[6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14].map(s=>`<option value="${s}">${s}</option>`).join('')}
    </select>
    <div class="form-hint">Used to check necessary board width (toe/heel overhang)</div>
  </div>

  <button class="btn snow" onclick="calcBoard()">Get My Board →</button>
  <div id="board-result"></div>
</div>`;
}
 
function calcBoard() {
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const skill = document.querySelector('input[name="sb-skill"]:checked')?.value;
  const style = document.querySelector('input[name="sb-style"]:checked')?.value;
  const heightCm = parseInt($('sb-height')?.value);
  const weightLbs = parseInt($('sb-weight')?.value);
  const bootSize = parseFloat($('boot-size-sb')?.value);
  if (!skill || !style || !heightCm || !weightLbs || !bootSize) {
    $('board-result').innerHTML = `<div class="warning-box">Please fill in all fields.</div>`; return;
  }
  const weightKg = weightLbs / 2.205;
  let pct = 0.88;

  // Skill level
  if (skill==='beginner') pct=0.86; 
  else if (skill==='advanced') pct=0.90;

  // Riding type
  if (style==='freeride') pct+=0.03; 
  else if (style==='park') pct-=0.03; 
  else if (style==='carving') pct+=0.02;

  let baseLen = Math.round(heightCm * pct);

  if (weightKg>90) baseLen+=5; 
  else if (weightKg<55) baseLen-=5;

  let boardWidth;
  let widthNote;

  if (bootSize >= 11) { 
    boardWidth = 'Wide'; 
    widthNote = 'Your foot size requires a wide board to avoid toe/heel drag.' 
  } 
  else if (bootSize == 10.5) {
    boardWidth = 'Regular or Wide';
    widthNote = '10.5 is middle point, this is also where bindings go from M to L. Carvers will notice the difference';
  } 
  else {
    boardWidth = 'Regular'; 
    widthNote = 'Regular sized snowboard fits your foot, no need for a wide.' 
  }

  const shapes = {
    'all-mountain':{
      shape:'Directional Twin',
      profile:'Camber / Rocker-Camber-Rocker',
      flex:'Medium (5–6/10)',
      desc:'Versatile for all terrain, rides both directions with a slight directional feel.'
    },

    'freeride':{
      shape:'Directional',
      profile:'Directional Rocker',
      flex:'Medium-Stiff (6–8/10)',
      desc:'Longer and stiffer with setback stance for powder float and speed.'
    },

    'park':{
      shape:'True Twin',
      profile:'Flat / Rocker',
      flex:'Soft-Medium (4–6/10)',
      desc:'Symmetrical for riding switch. Soft flex for pressing and buttering.'
    },

    'carving':{
      shape:'Directional',
      profile:'Full Camber',
      flex:'Stiff (7–9/10)',
      desc:'Maximum edge hold for laying hard carves on groomers.'
    }
  };

  const s = shapes[style];
  const setback = style==='freeride' ? '2–5cm back from center' : 'Rec: 12-15 front, 0-6 back';
  const matched = (GEAR_DATA.snowboards || []).filter(b =>
     b.styles.includes(style) && 
     b.skill.includes(skill)  &&
     (
     b.gender === gender
    )
  );

  $('board-result').innerHTML = `
  <div class="result-card">
    <div class="result-header">
      <div class="result-icon" style="background:rgba(167,139,250,.15);">🏂</div>
      <div><div class="result-title">${s.shape}</div><div class="result-sub">Snowboard recommendation</div></div>
    </div>

    <div class="result-row"><span class="result-key">Recommended Length</span><span class="result-val" style="color:var(--snow);">${baseLen-2}–${baseLen+2} cm</span></div>
    <div class="result-row"><span class="result-key">Recommended Board Width</span><span class="result-val" style="color:var(--accent);">${boardWidth}</span></div>
    <div class="result-row"><span class="result-key">Profile</span><span class="result-val">${s.profile}</span></div>
    <div class="result-row"><span class="result-key">Flex</span><span class="result-val" style="color:var(--ski);">${s.flex}</span></div>
    <div class="result-row"><span class="result-key">Stance</span><span class="result-val">${setback}</span></div>
    <div class="result-row"><span class="result-key">About</span><span class="result-val" style="max-width:55%;text-align:right;font-weight:400;color:var(--muted);font-size:.8rem;">${s.desc}</span></div>
    <hr class="section-sep"/>
    <div style="font-size:.78rem;color:var(--muted);font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.75rem;">Matching Products In Stock</div>
    ${renderProducts(matched, 'snowboard')}
  </div>
  
  <div class="info-box" style="background:rgba(167,139,250,.07);border-color:rgba(167,139,250,.25);color:var(--snow);">${widthNote} Overhang of 1–2cm on each side is fine; 3cm+ causes drag in carves.</div>`;
}
 
// Snowboard Boots
function sbBootsHTML() {
  return `<div class="tool-page page">
  <h2 class="tool-title">SNOWBOARD BOOT FINDER</h2>
  <p class="tool-desc">Snowboard boots fit more like athletic shoes. The right flex and lacing system makes a big difference in control and comfort.</p>
  
  <div class="form-group">
    <div class="form-label">Category</div>
    <div class="radio-grid">
      ${radioOpt('gender','mens',"Men's")}
      ${radioOpt('gender','womens',"Women's")}
    </div>
  </div>

  <div class="form-row">
    <div class="form-group">
      <label class="form-label" for="sb-foot-len">Foot Length (Mondo Point)</label>
      <input type="number" class="form-input" id="sb-foot-len" placeholder="e.g. 27.5" step="0.5" min="20" max="34" />
      <div class="form-hint">Heel to longest toe, standing</div>
    </div>

    <div class="form-group">
      <label class="form-label" for="sb-us-size">Boot Size (if known)</label>
      <select class="form-select" id="sb-us-size">
        <option value="">Select if known</option>
        ${[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15,16,17].map(s=>`<option value="${s}">${s}</option>`).join('')}
      </select>
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Riding Style</div>
    <div class="radio-grid">
      ${radioOpt('sb-boot-style','all-mountain','All Mountain')}
      ${radioOpt('sb-boot-style','park','Park')}
      ${radioOpt('sb-boot-style','freeride','Freeride')}
      ${radioOpt('sb-boot-style','carving','Carving')}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Lacing Preference</div>
    <div class="radio-grid">
      ${radioOpt('lacing','traditional','Traditional Lace')}
      ${radioOpt('lacing','boa','BOA')}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Priority</div>
    <div class="radio-grid">
      ${radioOpt('expectancy','performance','Performance')}
      ${radioOpt('expectancy','comfort','Comfort')}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Categories (optional)</div>
    <div class="checkbox-grid">
      ${checkOpt('categories','heel','Best Heel Hold')}
      ${checkOpt('categories','great','Great for Everything')}
      ${checkOpt('categories','investment','One Time Investment')}
    </div>
  </div>

  <button class="btn snow" onclick="calcSbBoot()">Find My Boot →</button>
  <div id="sb-boot-result"></div>
</div>`;
}
 
function calcSbBoot() {
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const footLen = parseFloat($('sb-foot-len')?.value) || null;
  const usSize  = parseFloat($('sb-us-size')?.value)  || null;
  const style   = document.querySelector('input[name="sb-boot-style"]:checked')?.value;
  const lacing  = document.querySelector('input[name="lacing"]:checked')?.value;
  const categories = [...document.querySelectorAll('input[name="categories"]:checked')].map(el => el.value);
 
  // FIX: require either foot length OR a selected US size, plus style and lacing
  if ((!footLen && !usSize) || !style || !lacing) {
    $('sb-boot-result').innerHTML = `<div class="warning-box">Please enter your foot length (or select a US size), riding style, and lacing preference.</div>`; return;
  }
 
  const calcUS = usSize || Math.round((footLen - 17) / 0.845 * 2) / 2;
  const matchedBoots = (GEAR_DATA.snowboard_boots || []).filter(b =>
     b.style.includes(style) &&
     (
      b.gender === gender
     )
  );

  const flexMap = {
    'all-mountain':{
      flex:'Medium (5–7/10)',
      desc:'Balanced between response and comfort.'
    },

    'park':{
      flex:'Soft-Medium (3–5/10)',
      desc:'Softer flex lets you press and butter naturally.'
    },

    'freeride':{
      flex:'Stiff (7–9/10)',
      desc:'Stiff boots transmit power for high-speed riding.'
    },

    'carving':{
      flex:'Stiff (7–9/10)',
      desc:'Stiff with heel-hold for hard edge carves.'
    }
  };
  const f = flexMap[style];

  const lacingInfo = {
    traditional:'Traditional laces offer the most customized fit and are cheapest to replace, but take the longest to put on.',
    boa:'BOA dial allows micro-adjustment with one hand. Fast and precise, but the dial may need replacing over time.'
  };

  const brands = {
    'all-mountain':[
      'Burton Moto Boa','Vans Aura Pro','ThirtyTwo Lashed'
    ],

    'park':[
      'DC Phantom','Ride Anthem','ThirtyTwo Lashed FT'
    ],
    'freeride':[
      'Salomon Hologram Boa','Vans Aura Pro','Jones MTN'
    ],

    'carving':[
      'Northwave Domain Boa','Deeluxe Track 325','Salomon Malamute'
    ]
  };

  $('sb-boot-result').innerHTML = `
  <div class="result-card">
    <div class="result-header">
      <div class="result-icon" style="background:rgba(167,139,250,.15);">👢</div>
      <div><div class="result-title">Your Boot Profile</div><div class="result-sub">Snowboard boot recommendation</div></div>
    </div>
    <div class="result-row"><span class="result-key">Recommended US Size</span><span class="result-val" style="color:var(--snow);">${calcUS}</span></div>
    <div class="result-row"><span class="result-key">Flex Rating</span><span class="result-val" style="color:var(--ski);">${f.flex}</span></div>
    <div class="result-row"><span class="result-key">Why this flex</span><span class="result-val" style="max-width:55%;text-align:right;font-weight:400;color:var(--muted);font-size:.8rem;">${f.desc}</span></div>
    <div class="result-row"><span class="result-key">Lacing System</span><span class="result-val">${lacing==='boa'?'BOA Dial':'Traditional Lace'}</span></div>
    <hr class="section-sep"/>
    <div style="font-size:.78rem;color:var(--muted);font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.5rem;">Lacing Notes</div>
    <p style="font-size:.84rem;color:var(--muted);line-height:1.6;">${lacingInfo[lacing]}</p>
    <hr class="section-sep"/>
    <div style="font-size:.78rem;color:var(--muted);font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.5rem;">Brand Suggestions</div>
    <ul class="rec-list">${brands[style].map(b=>`<li><strong>${b}</strong></li>`).join('')}</ul>
    <hr class="section-sep"/>
    <div style="font-size:.78rem;color:var(--muted);font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.75rem;">Matching Snowboard Boots</div>
    ${renderProducts(matchedBoots, 'snowboard boot')}
  </div>
  <div class="info-box" style="background:rgba(167,139,250,.07);border-color:rgba(167,139,250,.25);color:var(--snow);">Snowboard boots pack out as the liner compresses. Snug (not painful) on day 1 is correct — they'll loosen up after a few sessions.</div>`;
}
 
// Snowboard Bindings
function sbBindingsHTML() {
  return `<div class="tool-page page">
  <h2 class="tool-title">SNOWBOARD BINDING RECOMMENDER</h2>
  <p class="tool-desc">Find bindings that match your riding style and boot size.</p>
  
  <div class="form-group">
    <div class="form-label">Category</div>
    <div class="radio-grid">
      ${radioOpt('gender','mens',"Men's")}
      ${radioOpt('gender','womens',"Women's")}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Riding Style</div>
    <div class="radio-grid">
      ${radioOpt('sbbind-style','all-mountain','All Mountain')}
      ${radioOpt('sbbind-style','freeride','Freeride')}
      ${radioOpt('sbbind-style','park','Park')}
      ${radioOpt('sbbind-style','carving','Carving')}
    </div>
  </div>

  <div class="form-group">
    <label class="form-label" for="sbbind-bootsize">Boot Size (US Men's)</label>
    <select class="form-select" id="sbbind-bootsize">
      <option value="">Select boot size</option>
      ${[6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14].map(s=>`<option value="${s}">${s}</option>`).join('')}
    </select>
  </div>

  <div class="form-group">
    <div class="form-label">Binding Preference</div>
    <div class="radio-grid">
      ${radioOpt('binding','traditional','Traditional 2 Strap')}
      ${radioOpt('binding','step-on','Step On')}
      ${radioOpt('binding', 'fase', 'FASE')}
      ${radioOpt('binding', 'supermatic', 'Supermatic')}
    </div>
  </div>

  <button class="btn snow" onclick="calcSbBindings()">Find Bindings →</button>
  <div id="sb-bind-result"></div>
</div>`;
}

function getBindingSize(binding, bootSize){
  if (!binding.sizes) return null;

  for (const s of binding.sizes) {
    const [min, max] = s.boot_sizes.split('-').map(Number);

    if (bootSize >= min && bootSize <= max) {
      return s.size;
    }
  }
  return null;
}
 
function calcSbBindings() {
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const style = document.querySelector('input[name="sbbind-style"]:checked')?.value;
  const bootSize = parseFloat($('sbbind-bootsize')?.value);
  const bindingPref = document.querySelector('input[name="binding"]:checked')?.value;
  
  if (!gender || !style || !bootSize || !bindingPref) {
    $('sb-bind-result').innerHTML = 
      `<div class="warning-box">Please fill in all fields.</div>`; 
    return;
  }

  const matched = (GEAR_DATA.snowboard_bindings || [])
    .filter(binding => 
      binding.style.includes(style) &&
      binding.type === bindingPref &&
      binding.gender.includes(gender)
    )
    .map (binding => ({
      ...binding,
      recommendedSize: getBindingSize(binding, bootSize)
    }))
    .filter(binding => binding.recommendedSize);

  $('sb-bind-result').innerHTML = `
  <div class="result-card">
    <div class="result-header">
      <div class="result-icon" style="background:rgba(167,139,250,.15);">🔗</div>
      <div><div class="result-title">Binding Matches</div><div class="result-sub">Snowboard bindings</div></div>
    </div>
    <hr class="section-sep"/>
    ${renderProducts(matched, 'snowboard binding')}
  </div>
  `;
}

// Accessories Start Here
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
 
function calcHelmet() {
  const gender = document.querySelector('input[name="gender-helmet"]:checked')?.value;
  const aspects = document.querySelector('input[name="aspects-qualities"]:checked')?.value;
  if (!gender || !aspects) {
    $('helmet-result').innerHTML = `
    <div class="warning-box">Please fill in all fields.</div>`; 
    return;
  }
  const matched = (GEAR_DATA.helmets || []).filter(b => b.sport === 'accessories');
  $('helmet-result').innerHTML = `
  <div class="result-card">
    <div class="result-header">
      <div class="result-icon" style="background:rgba(167,139,250,.15);">🪖</div>
      <div><div class="result-title">Helmet Matches</div><div class="result-sub">Helmets</div></div>
    </div>
    <hr class="section-sep"/>
    ${renderProducts(matched, 'helmet')}
  </div>`;
}

function goggleFinderHTML() {
    return `
        <div class="tool-page page">
            <h2>Goggle Finder</h2>
            <p>Coming soon.</p>
        </div>
    `;
}

function backpackFinderHTML() {
    return `
        <div class="tool-page page">
            <h2>Bag Finder</h2>
            <p>Coming soon.</p>
        </div>
    `;
}

function bagFinderHTML() {
    return `
        <div class="tool-page page">
            <h2>Bag Finder</h2>
            <p>Coming soon.</p>
        </div>
    `;
}

// INIT
renderPage('landing');
renderCart();