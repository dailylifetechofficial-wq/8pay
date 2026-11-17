/*
 * State pay calculator (vanilla JS). Renders into <div class="state-calc" data-state="Name" data-da="63" data-centre="63">.
 * The user enters basic pay, DA, HRA and other items. 8th CPC figures are ILLUSTRATIVE scenarios.
 */
(function () {
  'use strict';
  var FITMENT = [1.92, 2.28, 2.57, 2.86];
  function fmt(n) { return 'Rs ' + Math.round(n).toLocaleString('en-IN'); }
  function r100(n) { return Math.floor(n / 100 + 0.5) * 100; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function num(v) { var n = parseFloat(String(v).replace(/,/g, '')); return isFinite(n) && n >= 0 ? n : 0; }

  function init(root, idx) {
    var state = root.getAttribute('data-state') || 'your state';
    var daPre = root.getAttribute('data-da');
    var centre = parseFloat(root.getAttribute('data-centre')); if (isNaN(centre)) centre = 63;
    var uid = 'sc' + idx;
    var daVal = daPre === null || daPre === '' ? '' : daPre;
    root.innerHTML =
      '<form class="calc-form" onsubmit="return false">' +
      '<div class="field"><label for="' + uid + '-basic">Basic pay (Rs per month)</label><input id="' + uid + '-basic" type="number" min="0" step="100" inputmode="numeric" value="35400"></div>' +
      '<div class="field"><label for="' + uid + '-da">' + esc(state) + ' DA (%)</label><input id="' + uid + '-da" type="number" min="0" step="0.25" inputmode="decimal" value="' + esc(daVal) + '" placeholder="Enter your DA %"></div>' +
      '<div class="field"><label for="' + uid + '-hra">HRA (% of basic)</label><input id="' + uid + '-hra" type="number" min="0" step="0.5" inputmode="decimal" value="0"></div>' +
      '<div class="field"><label for="' + uid + '-oth">Other allowances (Rs per month)</label><input id="' + uid + '-oth" type="number" min="0" step="100" inputmode="numeric" value="0"></div>' +
      '<div class="field"><label for="' + uid + '-nps">NPS employee contribution</label><select id="' + uid + '-nps"><option value="0">Not applicable</option><option value="10">10% of basic + DA</option><option value="14">14% of basic + DA</option></select></div>' +
      '<div class="field"><label for="' + uid + '-ded">Other deductions (Rs per month)</label><input id="' + uid + '-ded" type="number" min="0" step="100" inputmode="numeric" value="0"></div>' +
      '</form><div class="calc-out" aria-live="polite"></div>';
    var out = root.querySelector('.calc-out');
    function g(id) { return root.querySelector('#' + uid + '-' + id); }

    function run() {
      var basic = num(g('basic').value), daRaw = g('da').value;
      if (!basic) { out.innerHTML = '<p class="calc-result">Enter your basic pay to see the result.</p>'; return; }
      if (daRaw === '') { out.innerHTML = '<p class="calc-result">Enter your ' + esc(state) + ' DA % from your latest payslip or Finance Department order to see the result.</p>'; return; }
      var da = num(daRaw), hra = num(g('hra').value), oth = num(g('oth').value), nps = num(g('nps').value), ded = num(g('ded').value);
      var daAmt = basic * da / 100, hraAmt = basic * hra / 100;
      var gross = basic + daAmt + hraAmt + oth;
      var npsAmt = (basic + daAmt) * nps / 100;
      var net = gross - npsAmt - ded;
      var rows = '' +
        '<tr><th scope="row">Basic pay</th><td>' + fmt(basic) + '</td></tr>' +
        '<tr><th scope="row">DA at ' + da + '%</th><td>' + fmt(daAmt) + '</td></tr>' +
        '<tr><th scope="row">HRA at ' + hra + '%</th><td>' + fmt(hraAmt) + '</td></tr>' +
        '<tr><th scope="row">Other allowances</th><td>' + fmt(oth) + '</td></tr>' +
        '<tr class="total"><th scope="row">Gross monthly pay</th><td>' + fmt(gross) + '</td></tr>' +
        '<tr><th scope="row">NPS contribution</th><td>- ' + fmt(npsAmt) + '</td></tr>' +
        '<tr><th scope="row">Other deductions</th><td>- ' + fmt(ded) + '</td></tr>' +
        '<tr class="total"><th scope="row">Estimated net pay</th><td>' + fmt(net) + '</td></tr>';
      var html = '<h3>Your estimated monthly pay</h3><div class="table-wrap"><table class="result-table"><tbody>' + rows + '</tbody></table></div>';

      var gap = centre - da;
      if (centre > 0 && gap > 0) {
        html += '<p class="calc-result">If ' + esc(state) + ' paid DA at the central rate of ' + centre + '%, you would receive <strong>' + fmt(basic * gap / 100) + ' more per month</strong> (' + (Math.round(gap * 100) / 100) + ' percentage points lower).</p>';
      } else if (centre > 0 && gap === 0) {
        html += '<p class="calc-result">Your DA matches the central rate of ' + centre + '%.</p>';
      }

      var s = '';
      FITMENT.forEach(function (f) {
        var nb = r100(basic * f);
        var ng = nb + nb * hra / 100 + oth;
        s += '<tr><th scope="row">' + f.toFixed(2) + '</th><td>' + fmt(nb) + '</td><td>' + fmt(ng) + '</td><td>' + (ng - gross >= 0 ? '+' : '-') + fmt(Math.abs(ng - gross)) + '</td></tr>';
      });
      html += '<h3>If ' + esc(state) + ' later adopts a new pay structure (illustration)</h3>' +
        '<div class="table-wrap"><table class="result-table"><thead><tr><th>Fitment factor</th><th>New basic</th><th>Gross with DA reset to 0%</th><th>Change vs today</th></tr></thead><tbody>' + s + '</tbody></table></div>';
      out.innerHTML = html + '<p class="calc-note">Illustration only, using the same central scenario factors as the rest of this site. ' + esc(state) + ' has not announced a new pay structure. A real revision depends on the state\'s own pay matrix, DA treatment and allowances. NPS is shown at the rate you choose; your state\'s rules may differ.</p>';
    }
    root.addEventListener('input', run);
    root.addEventListener('change', run);
    run();
  }
  function boot() { var n = document.querySelectorAll('.state-calc'); for (var i = 0; i < n.length; i++) init(n[i], i); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
