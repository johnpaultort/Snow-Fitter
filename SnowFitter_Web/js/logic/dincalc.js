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