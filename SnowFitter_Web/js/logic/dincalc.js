// DIN CALCULATOR HTML QUESTIONS
function dinCalcHTML() {
  return `
  <div class="tool-page page">

    <h2 class="tool-title">DIN CALCULATOR</h2>

    <p class="tool-desc">
      Your DIN setting controls how easily your bindings release.
      Too low = pre-release; too high = injury risk.
    </p>

    <div class="form-group">
      <div class="form-label">Skier Type</div>
      <div class="radio-grid">
        ${radioOpt('din-type','1','Type 1\n Beginner')}
        ${radioOpt('din-type','2','Type 2\n Intermediate')}
        ${radioOpt('din-type','3','Type 3\n Advanced')}
      </div>
    </div>

    <div class="form-group">
      <div class="form-label">Boot Sole Length (mm)</div>
      <div class="radio-grid">
        ${radioOpt('boot-sole','0','≤ 250 mm')}
        ${radioOpt('boot-sole','1','251–270 mm')}
        ${radioOpt('boot-sole','2','271–290 mm')}
        ${radioOpt('boot-sole','3','291–310 mm')}
        ${radioOpt('boot-sole','4','311–330 mm')}
        ${radioOpt('boot-sole','5','> 330 mm')}
      </div>
      <div class="form-hint">
        Find the BSL printed on the side or heel of your boot.
      </div>
    </div>

    <div class="form-group">
      <div class="form-label">Weight (LBS)</div>
      <div class="radio-grid">
        ${radioOpt('weight-din','0','22–29 lbs')}
        ${radioOpt('weight-din','1','30–38 lbs')}
        ${radioOpt('weight-din','2','39–47 lbs')}
        ${radioOpt('weight-din','3','48–56 lbs')}
        ${radioOpt('weight-din','4','57–66 lbs')}
        ${radioOpt('weight-din','5','67–78 lbs')}
        ${radioOpt('weight-din','6','79–91 lbs')}
        ${radioOpt('weight-din','7','92–107 lbs')}
        ${radioOpt('weight-din','8','108–125 lbs')}
        ${radioOpt('weight-din','9','126–147 lbs')}
        ${radioOpt('weight-din','10','148–174 lbs')}
        ${radioOpt('weight-din','11','175–209 lbs')}
        ${radioOpt('weight-din','12','210+ lbs')}
      </div>
    </div>

    <div class="form-group">
      <div class="form-label">Age</div>
      <div class="radio-grid">
        ${radioOpt('age-range','0','Under 10')}
        ${radioOpt('age-range','1','10–49')}
        ${radioOpt('age-range','2','50+')}
      </div>
    </div>

    <div class="form-group">
      <div class="form-label">Height</div>
      <div class="radio-grid">
        ${radioOpt('height-din','0',"< 4'11")}
        ${radioOpt('height-din','1',"4'11–5'2")}
        ${radioOpt('height-din','2',"5'3–5'6")}
        ${radioOpt('height-din','3',"5'7–5'10")}
        ${radioOpt('height-din','4',"5'11–6'4")}
        ${radioOpt('height-din','5',"> 6'4")}
      </div>
    </div>

    <button class="btn ski" onclick="calcDIN()">
      Calculate My DIN →
    </button>

    <div id="din-result"></div>

  </div>`;
}

// DIN CALCULATOR CALCULATION
function calcDIN() {

  // Read questionare from above
  const type = document.querySelector('input[name="din-type"]:checked')?.value;
  const weight = document.querySelector('input[name="weight-din"]:checked')?.value;
  const height = document.querySelector('input[name="height-din"]:checked')?.value;
  const age = document.querySelector('input[name="age-range"]:checked')?.value;
  const bootSole = document.querySelector('input[name="boot-sole"]:checked')?.value;

  const result = document.getElementById('din-result');

  // Ensures that all are picked
  if (
    type === undefined ||
    weight === undefined ||
    height === undefined ||
    age === undefined ||
    bootSole === undefined
  ) {
    result.innerHTML = `
      <div class="warning-box">
        Please select an option for every field.
      </div>
    `;
    return;
  }

  // Convert selections to numbers
  const skierType = Number(type);
  const weightIndex = Number(weight);
  const heightIndex = Number(height);
  const ageIndex = Number(age);
  const bootIndex = Number(bootSole);

  const weightCodes = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M'
  ];

  const heightCodes = [
    'H', 'I', 'J', 'K', 'L', 'M'
  ];

  const weightCodeIndex = weightIndex;
  const heightCodeIndex = heightIndex + 7;

  let skierCodeIndex = Math.min(
    weightCodeIndex,
    heightCodeIndex
  );

  if (ageIndex === 0 || ageIndex === 2) {
    skierCodeIndex -= 1;
  }

  // Skier type adjustment:
  // Type 1 = no adjustment
  // Type 2 = one code DOWN
  // Type 3 = two codes DOWN
  if (skierType === 2) {
    skierCodeIndex += 1;
  } else if (skierType === 3) {
    skierCodeIndex += 2;
  }

  skierCodeIndex = Math.max(0, Math.min(15, skierCodeIndex));

  const skierCode = String.fromCharCode(65 + skierCodeIndex);

  // ISO 11088 DIN lookup table
  // Columns:
  // <251, 251-270, 271-290,
  // 291-310, 311-330, >330 mm

  const dinChart = {
    A: [0.75, 0.75, null, null, null, null],
    B: [1.00, 1.00, 0.75, null, null, null],
    C: [1.50, 1.25, 1.00, null, null, null],
    D: [1.75, 1.50, 1.50, 1.25, null, null],
    E: [2.25, 2.00, 1.75, 1.50, 1.50, null],
    F: [2.75, 2.50, 2.25, 2.00, 1.75, 1.75],
    G: [3.50, 3.00, 2.75, 2.50, 2.25, 2.00],
    H: [null, 3.50, 3.00, 3.00, 2.75, 2.50],
    I: [null, 4.50, 4.00, 3.50, 3.50, 3.00],
    J: [null, 5.50, 5.00, 4.50, 4.00, 3.50],
    K: [null, 6.50, 6.00, 5.50, 5.00, 4.50],
    L: [null, 7.50, 7.00, 6.50, 6.00, 5.50],
    M: [null, null, 8.50, 8.00, 7.00, 6.50],
    N: [null, null, 10.00, 9.50, 8.50, 8.00],
    O: [null, null, 11.50, 11.00, 10.00, 9.50],
    P: [null, null, null, 13.00, 12.00, 11.50]
  };

  // Find DIN value
  const din = dinChart[skierCode]?.[bootIndex];

  // Handle unavailable chart combinations
  if (din === null || din === undefined) {
    result.innerHTML = `
      <div class="warning-box">
        This combination does not have a published reference
        value in the lookup chart. Please have a certified
        ski technician determine the appropriate setting.
      </div>
    `;
    return;
  }

  // Find compatible bindings
  const matchedBindings = (GEAR_DATA.ski_bindings || []).filter(binding =>
    din >= Number(binding.min_din) &&
    din <= Number(binding.max_din)
  );

  // Display result
  result.innerHTML = `
    <div class="result-card">

      <div class="result-header">
        <div class="result-icon"
             style="background:rgba(251,191,36,.15);">
          ⚙️
        </div>

        <div>
          <div class="result-title">Your DIN Setting</div>
          <div class="result-sub">
            ISO 11088 reference chart
          </div>
        </div>
      </div>

      <div style="text-align:center;padding:1.5rem 0;">

        <div style="
          font-family:'Bebas Neue',sans-serif;
          font-size:5rem;
          color:var(--warn);
          line-height:1;
        ">
          ${din.toFixed(2)}
        </div>

        <div style="
          color:var(--muted);
          font-size:.82rem;
          margin-top:.25rem;
        ">
          Reference DIN Value
        </div>

        <div style="
          color:var(--muted);
          font-size:.75rem;
          margin-top:.5rem;
        ">
          Skier Code: ${skierCode}
        </div>

      </div>

      <hr class="section-sep"/>

      <div style="
        font-size:.78rem;
        color:var(--muted);
        font-weight:600;
        letter-spacing:.08em;
        text-transform:uppercase;
        margin-bottom:.75rem;
      ">
        Compatible Bindings
      </div>

      ${
        matchedBindings.length
          ? renderProducts(matchedBindings, 'bindings')
          : `<div class="form-hint">
              No bindings in our database match this reference value.
            </div>`
      }

    </div>

    <div class="warning-box">
      ⚠ This is an informational reference value, not a
      binding adjustment recommendation. A certified ski
      technician must verify the setting and test the bindings.
    </div>
  `;
}