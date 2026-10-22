function sbBoardHTML() {
  return `<div class="tool-page page">
  <h2 class="tool-title">BOARD RECOMMENDER</h2>
  <p class="tool-desc">Find your ideal snowboard shape, length, and flex — plus matching boards from our inventory.</p>
  
  <div class="form-group">
    <div class="form-label">Category</div>
    <div class="radio-grid">
      ${radioOpt('gender','mens',"Men's")}
      ${radioOpt('gender','womens',"Women's")}
      ${radioOpt('gender', 'youths', "Youth's")}
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
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Specific Traits (select 3)</div>
    <div class="checkbox-grid">
      ${checkOpt('sb-preferences','stiff','Stiff')}
      ${checkOpt('sb-preferences','soft','Soft')}
      ${checkOpt('sb-preferences','stable','Stable')}
      ${checkOpt('sb-preferences','carving','Carver')}
      ${checkOpt('sb-preferences','charger','Hard Charger')}
      ${checkOpt('sb-preferences', 'powder', 'Powder')}
      ${checkOpt('sb-preferences', 'ice', 'Good on Ice')}
      ${checkOpt('sb-preferences', 'butter', 'Butters')}
      ${checkOpt('sb-preferences', 'rails', 'Rails')}
      ${checkOpt('sb-preferences', 'jumps', 'Jumps')}
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
      ${[4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15,16,17].map(s=>`<option value="${s}">${s}</option>`).join('')}
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
    widthNote = '10.5 is middle point, this is also where bindings go from M to L.';
  } 
  else {
    boardWidth = 'Regular'; 
    widthNote = 'Regular sized snowboard fits your foot, no need for a wide.' 
  }

  const shapes = {
    'all-mountain':{
      shape:'Directional Twin or True Twin',
      profile:'Camber / Rocker-Camber-Rocker',
      flex:'Medium (5–8/10)',
      desc:'There are some all mountain boards with a centered base for those that feel comfortable with even stance. Otherwise, for those that want a more versatile board for all conditions directional twin is better for that float in powder.'
    },

    'freeride':{
      shape:'Directional',
      profile:'Rocker, Hybrid, Camber',
      flex:'Medium-Stiff (6–10/10)',
      desc:'Longer and stiffer with setback stance for powder float and speed.'
    },

    'park':{
      shape:'True Twin',
      profile:'Flat / Hybrid',
      flex:'Soft-Medium (4–6/10)',
      desc:'Symmetrical for riding switch. Either there is a board with carbon stringers for max pop while other park boards are better for rails'
    },

    'carving':{
      shape:'Directional',
      profile:'Full Camber',
      flex:'Stiff (7–9/10)',
      desc:'Maximum edge hold for laying hard carves on groomers.'
    }
  };

  const s = shapes[style];
  const setback = style==='freeride' ? '2–5cm back from center' : 'Rec: 12-18 front, 0-6 back';
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
 