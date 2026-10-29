 // SKI RECOMMENDER TOOL
function skiRecommenderHTML() {
  return `<div class="tool-page page">
  <h2 class="tool-title">SKI RECOMMENDER</h2>
  <p class="tool-desc">Answer a few questions and we'll suggest the right type of ski, length, and products from our inventory.</p>
  
  <div class="form-group">
    <div class="form-label">Inventory</div>
    <div class="radio-grid">
    ${radioOpt('gender', 'mens', "Men's")}
    ${radioOpt('gender', 'womens', "Women's")}
    ${radioOpt('gender', 'youths', "Youth's")}
  </div>

  <div class="form-group">
    <div class="form-label">Skill Level</div>
    <div class="radio-grid">${['beginner','intermediate','advanced'].map(s=>radioOpt('skill',s,s.charAt(0).toUpperCase()+s.slice(1))).join('')}</div>
  </div>

  <div class="form-group">
    <div class="form-label">Riding Style</div>
    <div class="radio-grid">
      ${radioOpt('style','all-mountain','All Mountain')}
      ${radioOpt('style','groomer','Frontside')}
      ${radioOpt('style', 'freeride', 'Off-Piste/Freeride')}
      ${radioOpt('style','park','Park')}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">What matters most?</div>
    <div class="radio-grid">
      ${radioOpt('priority', 'stable', 'Stable and planted at speed')}
      ${radioOpt('priority', 'playful', 'Playful and easy flex')}
      ${radioOpt('priority', 'manuverable', 'Quick and easy to turn')}
      ${radioOpt('priority', 'balanced', 'Balanced and versatile')}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">How do you like to ski?</div>
    <div class="radio-grid">
      ${radioOpt('behavior', 'cruise', 'Cruising comfortably')}
      ${radioOpt('behavior', 'carve', 'Making precise, carved turns ')}
      ${radioOpt('behavior', 'charge', 'Charging Hard and Fast')}
      ${radioOpt('behavior', 'poppy', 'Playing around, popping, and making tricks')}
      ${radioOpt('behavior', 'explore', 'Exploring varied terrain')}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Which terrain and activities do you enjoy? (select 3)</div>
    <div class="checkbox-grid">
      ${checkOpt('preferences','trees','Trees')}
      ${checkOpt('preferences','moguls','Moguls')}
      ${checkOpt('preferences','steeps','Steeps')}
      ${checkOpt('preferences','bowls','Bowls')}
      ${checkOpt('preferences', 'groomers', 'Groomer')}
      ${checkOpt('preferences', 'jumps', 'Jumps')}
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
    <div class="form-label">Conditions you find yourself riding?</div>
    <div class="form-hint">Select all that apply.</div>
    </div>
    <div class="checkbox-grid">
      ${checkOpt('conditions', 'firm', 'Firm/Ice')}
      ${checkOpt('conditions', 'powder', 'Powder')}
      ${checkOpt('conditions', 'slush', 'Slush')}
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
  else if (skill==='advanced') base-=3; 
  else base+=2;

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
      desc:'Versatile ski for any condition. Usually that person that is in between all categories.'
    },

    'groomer':{
      name:'Carving / Groomer Ski',
      width:'>= 88mm',
      rocker: 'Camber dominant',
      desc:'Narrow waist for carving, mainly for frontside or only on groomers.'
    },

    'freeride':{
      name:'Powder / Freeride Ski',
      width:'100–130mm',
      rocker:'Full early rise tip & tail',
      desc:'Wide for that float, stiffer ski in order to handle that steeper terrain and off piest conditions.'
    },

    'park':{
      name:'Twin-Tip Ski',
      width:'88–98mm',
      rocker:'Twin-tip, slight camber',
      desc:'Symmetrical for skiing switch and park features. That person that is certain their time is 90 percent in the park.'
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