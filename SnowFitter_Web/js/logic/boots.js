// SKI BOOT LOGIC
function skiBootsHTML() {
  return `<div class="tool-page page">
  <h2 class="tool-title">SKI BOOT FITTER</h2>
  <p class="tool-desc">Ski boots are the most important piece of gear. Enter your foot measurements for an estimate fit recommendation.</p>
  
  <div class="form-group">
    <div class="form-label">Category</div>
    <div class="radio-grid">
      ${radioOpt('gender','mens',"Men's")}
      ${radioOpt('gender','womens',"Women's")}
      ${radioOpt('gender', 'youths', "Youth's")}
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
      <option value="uneven">Different arch per foot</option>
      <option value="unknown">Don't know</option>
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
      ${radioOpt('instep','medium','MV')}
      ${radioOpt('instep','wide','HV')}</div>
  </div>

  <div class="form-group">
    <div class="form-label">Reason</div>
    <div class="radio-grid">
        ${radioOpt('reason', 'proper-fit', "Boots too big")}
        ${radioOpt('reason', 'upgrade', "Upgrade")}
        ${radioOpt('reason', 'soft', "Outgrew Soft Flex")}
        ${radioOpt('reason', 'stiff', "Too stiff")}
        ${radioOpt('reason', 'alpine', "Alpine need gripwalk")}</div>
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
    narrow:['Salomon Alpha','Nordica Promachine','Tecnica Mach1', 'Lange Shadow LV', 'K2 Cortex'],
    medium:['Salomon Supra', 'Nordica Speedmachine', 'Atomic Hawx Prime', 'Tecnica Mach BOA MV', 'K2 Recon', 'Lange Shadow MV'],
    wide:['Salomon Delta', 'Nordica Sportmachine', 'Atomic Magna', 'Tecnica Mach BOA HV', 'K2 BFC', 'Lange Concept']
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

// SNOWBOARD BOOT LOGIC

// Snowboard Boots
function sbBootsHTML() {
  return `<div class="tool-page page">
  <h2 class="tool-title">SNOWBOARD BOOT FINDER</h2>
  <p class="tool-desc">Snowboard boots should not fit like running shoes. Toe touching the front of the boot, and no heel lift. The right flex and lacing system makes a big difference in control and comfort.</p>
  
  <div class="form-group">
    <div class="form-label">Category</div>
    <div class="radio-grid">
      ${radioOpt('gender','mens',"Men's")}
      ${radioOpt('gender','womens',"Women's")}
      ${radioOpt('gender', 'youths', "Youth's")}
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
        ${[4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15,16,17].map(s=>`<option value="${s}">${s}</option>`).join('')}
      </select>
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Riding Style</div>
    <div class="radio-grid">
      ${radioOpt('sb-boot-style','all-mountain','All Mountain')}
      ${radioOpt('sb-boot-style','park','Park')}
      ${radioOpt('sb-boot-style','freeride','Freeride or Backcountry')}
      ${radioOpt('sb-boot-style','carving','Carving')}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Lacing Preference</div>
    <div class="radio-grid">
      ${radioOpt('lacing','traditional','Traditional Lace')}
      ${radioOpt('lacing', 'double-boa', 'Double BOA')}
      ${radioOpt('lacing','single-boa','Single BOA')}
      ${radioOpt('lacing', 'single-boa-lace', 'Single BOA and Lace')}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Boot to Binding Type</div>
    <div class="radio-grid">
        ${radioOpt('sb-boot-type', 'step-on', 'Step-On')}
        ${radioOpt('sb-boot-type', 'traditional', 'Traditional')}
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
      ${checkOpt('categories', 'soft', 'Soft Boots')}
      ${checkOpt('categories', 'Stiff', 'Stiff Boots')}
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