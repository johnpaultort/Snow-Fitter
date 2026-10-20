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