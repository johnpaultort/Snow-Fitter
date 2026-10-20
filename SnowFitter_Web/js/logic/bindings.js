// SKI BINDING LOGIC
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

// SNOWBOARD BINDING LOGIC
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