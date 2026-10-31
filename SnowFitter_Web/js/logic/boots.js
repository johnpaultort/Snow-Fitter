// SKI BOOT LOGIC
// TODO: Logic should incorperate take the ski boot size and +- 2 from each size after or 
// before 26.5. Also if women 27.5<n fit them in a mens boot with an adjustable cuff.
function skiBootsHTML() {
  return `<div class="tool-page page">
  <h2 class="tool-title">SKI BOOT FITTER</h2>
  <p class="tool-desc">Ski boots are the most important piece of gear. Enter your foot measurements for an estimate fit recommendation.</p>
  
  <div class="form-group">
    <div class="form-label">Reason</div>
    <div class="radio-grid">
      ${checkOpt('reason', 'first-boot', 'First pair of ski boots')}
      ${checkOpt('reason', 'too-tight', 'Boots are too tight or painful')}
      ${checkOpt('reason', 'worn-out', 'Boots are worn out or damaged')}
      ${checkOpt('reason', 'performance', 'Want better performance')}
      ${checkOpt('reason', 'entry', 'Difficulty getting boots on and off')}
      ${checkOpt('reason', 'prominent-bones', 'Pressure around prominent bones')}
      ${checkOpt('reason', 'cold-numb', 'Feet get cold or numb')}
      ${checkOpt('reason', 'gripwalk', 'Need GripWalk compatibility')}
      ${checkOpt('reason', 'too-big', 'Boots are too big')}
      ${checkOpt('reason', 'too-stiff', 'Boots are too stiff')}
      ${checkOpt('reason', 'calf', 'Calf discomfort')}
      ${checkOpt('reason', 'too-soft', 'Boots are too soft')}
      </div>
    </div>

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
      <label class="form-label" for="foot-length">
        Foot Length (cm)
      </label>
      <input 
        type="number" 
        class="form-input" 
        id="foot-length" 
        placeholder="e.g. 27.5" 
        step="1.0" 
        min="20.5" 
        max="34.5" 
      />
      <div class="form-hint">
        Heel to longest toe, do this while standing
      </div>
    </div>

    <div class="form-group">
      <label class="form-label" for="foot-width">
        Forefoot Width (mm)
      </label>
      <input 
        type="number" 
        class="form-input" 
        id="foot-width" 
        placeholder="e.g. 98" 
        step="1" 
        min="85" 
        max="115" 
      />
      <div class="form-hint">
        Widest part of foot (ball), also while standing expands a little more
      </div>
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Instep</div>
    <div class="form-hint">
      Your instep affects how much room you need across the top of your foot.
      A professional boot fitter can help determine this.
    </div>
    <div class="radio-grid">
      ${radioOpt('instep','low-volume','LV')}
      ${radioOpt('instep','medium','MV')}
      ${radioOpt('instep','wide','HV')}
      </div>
  </div>

  <div class="form-group">
  <div class="form-label">Arch Height</div>
  <div class="radio-grid">
    ${radioOpt('arch-type', 'low', 'Low')}
    ${radioOpt('arch-type', 'medium', 'Medium')}
    ${radioOpt('arch-type', 'high', 'High')}
    ${radioOpt('arch-type', 'uneven', 'Opposites')}
    ${radioOpt('arch-type', 'unknown', 'Not Sure')}
  </div>
</div>

  <div class="form-group">
    <div class="form-label">Foot shape or pronounced bone (select all that apply)</div>
    <div class="checkbox-grid">
      ${checkOpt('shape', 'regular', 'Regular')}
      ${checkOpt('shape', 'bunion', 'Bunion')}
      ${checkOpt('shape', 'navicular', 'Navicular bone')}
      ${checkOpt('shape', 'inner', 'Inner ankle bone')}
      ${checkOpt('shape', 'outer', 'Outer ankle bone')}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">What kind of ski boots are you looking for?</div>
    <div class="radio-grid">
        ${radioOpt('type', 'downhill', "Downhill")}
        ${radioOpt('type', 'tour', "Touring")}
        ${radioOpt('type', 'fast', "Fast Entry")}
        </div>
    </div>

  <button class="btn ski" onclick="calcSkiBoot()">Find My Boot Size →</button>
  <div id="boot-result"></div>

</div>`;
}

function calculateLastWidth(baseLast, mondoSize){
  const referenceSize = 26.5;

  if(!Number.isFinite(baseLast) || !Number.isFinite(mondoSize)) {
    return null;
  }

  if (mondoSize === referenceSize) {
    return baseLast;
  }

  const SizeStep = Math.ceil(
    Math.abs(mondoSize - referenceSize)
  );

  const adjustment = sizeSteps * 2;

  return mondoSize < referenceSize
  ? baseLast - adjustment
  : baseLast + adjustment;
}
 
// TODO: I still have to add the logic where women foot is bigger than 26.5 consult with a mens boot
// TODO: If instep > size: HV, else if instep = size: MV, else instep < size :LV. 

// TODO: Compare width with instep, if instep is lower, but width is wider than base then increase volume.
//       EX. 27.5 length, 26 instep, but width is 104 handle MV.  
// TODO: Compare instep with width, if instep is higher than width increase volume otherwise suffer compression.
//       EX. 27.5 length, 29 instep, width 100 handle HV.
// TODO: If instep is in proportion to length, and width is also into proportion therefore give MV. Otherwise can handle compression can go LV.
//       EX. 27.5 length, 27.5 instep, 102 MM width handle MV
// TODO: If instep is shorter than length and the width is also narrow compared to base, we give them low volume.
//       EX. 26.5 length, 24.5 instep, 96mm width we then handle LV boot.

// TODO: Compare instep with width and length. If width is wider than base width increase into

// Calculates ski boots by all information
function calcSkiBoot() {

  // CUSTOMER INFO
  const gender = document.querySelector(
    'input[name="gender"]:checked'
  )?.value;

  const footLen = parseFloat($('foot-length')?.value);
  const footWidth = parseInt($('foot-width')?.value);

  const instep = document.querySelector(
    'input[name="instep"]:checked'
  )?.value || 'unknown';

  const archType = document.querySelector(
    'input[name="arch-type"]:checked'
  )?.value || 'unknown';

  const flexAbility = document.querySelector(
    'input]name="flex-ability"]:checked'
  )?.value || 'unknown';

  const bootType = document.querySelector(
    'input[name="type"]:checked'
  )?.value;

  const reason = [
    ...document.querySelectorAll(
      'input[name="reason"]:checked'
    )
  ].map(el => el.value);

  const shape = [
    ...document.querySelectorAll('input[name="shape"]:checked')
  ].map(el => el.value);

  if (
    !gender || 
    !Number.isFinite(footLen) ||
    footLen < 20 ||
    footLen > 34 || 
    !Number.isFinite(footWidth) || 
    footWidth < 85 ||
    footWidth > 115 ||
    !bootType 
  ) {
    $('boot-result').innerHTML = `
      <div class="warning-box">
        Please enter your widthCategory, foot length, forefoot width, and boot type.
      </div>`;
    return;
  }

  // 1. Mondopoint sizing
  const mondoSize = footLen;


  const insoleGuidance = {
    low: 'Additional arch support should be provided, this prevents the foot from rolling into the shell',
    medium: 'A footbed will cover most of the arch allowing support and comfort in the boot',
    high: 'Footbed will help the foot since this arch is really high where the foot may cramp the most from collapsing',
    uneven: 'If the arch is uneven or not the same height as the other we recommend using a custom since this will allow the arches the support needed',
    unknown: 'If unknown please see a place that has like a superfeet or some measure of checking arch'
  };

  const flexDescriptions = {
    limited: 'Has difficulty flexing boots forward.',
    moderate: 'Can flex boots, but experiences resistance.',
    strong: 'Can flex boots forward without much difficulty.',
    'very-strong': 'Can easily flex boots and prefers strong support.',
    unknown: 'Flexing ability has not been established.'
  };

  const matchedBoots = (GEAR_DATA.ski_boots || [])
    .filter(b => {
      const correctGender = boot.gender === gender;
    
      const correctType = Array.isArray(boot.type)
      ? boot.type.includes(bootType)
      : boot.type === bootType;

    return correctGender && correctType;
  })

  .map(boot => {
    const baseLast = Number(boot.baseLast);

    const adjustedLast = calculateLastWidth(
      baseLast,
      mondoSize
    );

    const widthDifference = adjustedLast === null
    ? Infinity
    : Math.abs(adjustedLast - footWidth);

    return {
      ...boot,
      adjustedLast,
      widthDifference
    };
  })

  .sort((a, b) =>
    a.widthDifference - b.widthDifference
  );

  const closestBoot = matchedBoots.find(
    boot => Number.isFinite(boot.widthDifference)
  );

  $('boot-result').innerHTML = `
  <div class="result-card">

    <div class="result-header">
      <div class="result-icon"
      style= "background:rgba(79.195.247,.15);">
      👟
      </div>

      <div>
        <div class="result-title">Your Boot Fit Profile</div>
        <div class="result-sub">
          Based on foot measurements
        </div>
      </div>
    </div>

    <div class="result-row">
      <span class="result-key">Mondopoint Size</span>
      <span class="result-val">
        ${mondoSize.toFixed(1)}
      </span>
    </div>

    <div class="result-row">
      <span class="result-key">Forefoot Width</span>
      <span class="result-val">
        ${footWidth} mm
      </span>
    </div>

    <div class="result-row">
      <span class="result-key">Instep</span>
      <span class="result-val">
        ${instep}
      </span>
    </div>

    <div class="result-row">
      <span class="result-key">Arch Height</span>
      <span class="result-val">
        ${archType}
      </span>
    </div>

    <div class="result-row">
      <span class="result-key">Boot Category</span>
      <span class="result-val">
        ${bootType}
      </span>
    </div>

    <hr class="section-sep"/>

    <div class="result-title">Flexing Ability</div>
    <p class="result-sub">
      ${flexDescriptions[flexAbility]}
    </p>

    <hr class="section-sep"/>

    <div class="result-title">Footbed Consideration</div>
    <p class="result-sub">
      ${insoleGuidance[archType]}
    </p>

    ${shapes.length ? `
      <hr class="section-step"/>
      <div class="result-title">Foot Shape</div>
      <p class="result-sub">
        ${shapes.join(', ')} 
      </p>
    ` : ''}

    ${reason.length ? `
      <hr class="section-step"/>
      <div class="result-title">Replacement Reasons</div>
      <p class="result-sub">
        ${reasons.join(', ')}
      </p>
    ` : ''}

    <hr class="section-sep"/>

    <div class="result-title>Closest Wdith Match</div>
    
    ${closestBoot ? `
      <div class="result-row">
        <span class="result-key">Boot</span>
        <span class="result-val">
          ${closestBoot.name}
        </span>
      </div>

      <div class="result-row">
        <span class="result-key">Advertised Last</span>
        <span class="result-val">
          ${closestBoot.baseLast} mm
        </span>
      </div>

      <div class="result-row">
        <span class="result-key">Adjusted Last at Your Size</span>
        <span class="result-val" style="color:var(--ski);">
          ${closestBoot.adjustedLast} mm
        </span>
      </div>
    ` : `
      <p class="result-sub">
        No boot has sufficient last-width data for comparison.
      </p>
    `}

    <hr class="section-sep"/>

    <div class="result-title">Matching Ski Boots</div>

    ${renderProducts(matchedBoots, 'ski boot')}

  </div>

  <div class="warning-box">
    These are preliminary recommendations, not confirmed boot sizes.
    A professional boot fitter should perform a shell fit and assess
    heel retention, instep clearance, cuff fit, and pressure points.
    Heat molding and shell modifications may improve fit.
  </div>
  `;
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