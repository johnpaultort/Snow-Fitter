function helmetFinderHTML() {
  return `<div class="tool-page page">
  <h2 class="tool-title">Helmet Finder</h2>
  <p class="tool-desc">Find helmet that may fit right for you from our inventory.</p>

  <div class="form-group">
   <div class="form-label">Asian Fit</div>
   <div class="radio-grid">
    ${radioOpt('helmet-fit', 'asian-fit', 'Asian Fit')}
    ${radioOpt('helmet-fit', 'regular', 'Normal Fit')}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Gender</div>
    <div class="radio-grid">
      ${radioOpt('gender-helmet','unisex','Unisex')}
      ${radioOpt('gender-helmet','youth','Youth')}
    </div>
  </div>

  <div class="form-group">
    <div class="form-label">Aspects</div>
    <div class="radio-grid">
      ${radioOpt('aspects-qualities','vents','Air Ventilation')}
      ${radioOpt('aspects-qualities','good-value','Cheapest')}
      ${radioOpt('aspects-qualities','adjustable','Adjustable BOA')}
      ${radioOpt('aspects-qualities', 'better-value', 'Mid Price')}
      ${radioOpt('aspects-qualities', 'best-value', 'Most Expensive')}
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