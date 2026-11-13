/*
 * 8PayCommission calculators (vanilla JS, no dependencies).
 * Every calculator renders into <div class="calc" data-calc="NAME"></div>.
 * All 8th CPC numbers are ILLUSTRATIVE scenarios, not official figures.
 */
(function (root) {
  'use strict';

  var DA_NOW = 63; // % from 1 July 2026 (Cabinet approval 28 Oct 2026)

  // 7th CPC pay matrix: entry (first cell) basic pay per level
  var LEVELS = [
    ['1', 18000], ['2', 19900], ['3', 21700], ['4', 25500], ['5', 29200],
    ['6', 35400], ['7', 44900], ['8', 47600], ['9', 53100], ['10', 56100],
    ['11', 67700], ['12', 78800], ['13', 123100], ['13A', 131100], ['14', 144200],
    ['15', 182200], ['16', 205400], ['17', 225000], ['18', 250000]
  ];
  var FITMENT = [
    ['1.92', '1.92 (cautious scenario)'], ['2.28', '2.28 (middle scenario)'],
    ['2.57', '2.57 (7th CPC repeated)'], ['2.86', '2.86 (staff-side demand)']
  ];
  var HRA_SETS = {
    '30': { X: 0.30, Y: 0.20, Z: 0.10, label: '30 / 20 / 10 (current, DA at 50% or more)' },
    '27': { X: 0.27, Y: 0.18, Z: 0.09, label: '27 / 18 / 9 (DA between 25% and 50%)' },
    '24': { X: 0.24, Y: 0.16, Z: 0.08, label: '24 / 16 / 8 (DA below 25%, fresh-start rates)' }
  };
  var CITY = [['X', 'Class X (Delhi, Mumbai, Kolkata, Chennai, Hyderabad, Bengaluru, Ahmedabad, Pune)'], ['Y', 'Class Y'], ['Z', 'Class Z']];

  function levelEntry(lv) {
    for (var i = 0; i < LEVELS.length; i++) { if (LEVELS[i][0] === String(lv)) return LEVELS[i][1]; }
    return 18000;
  }
  function levelNum(lv) { return parseInt(String(lv), 10); }

  // Transport Allowance slabs (7th CPC, OM of 2017): [other cities, higher TPTA cities]
  function taBase(lv, higher) {
    var n = levelNum(lv);
    var slab = n <= 2 ? [900, 1350] : (n <= 8 ? [1800, 3600] : [3600, 7200]);
    return higher ? slab[1] : slab[0];
  }

  function num(v, d) { var x = parseFloat(v); return isFinite(x) ? x : (d || 0); }

  // ---------- pure calculation functions ----------
  var calc = {};

  calc.pay = function (o) {
    // o: basic, da (%), hraRate (fraction), ta (base INR), schemeRate (fraction), other
    var da = o.basic * o.da / 100;
    var hra = o.basic * o.hraRate;
    var ta = o.ta * (1 + o.da / 100);
    var gross = o.basic + da + hra + ta;
    var scheme = (o.basic + da) * o.schemeRate;
    var net = gross - scheme - o.other;
    return { basic: o.basic, da: da, hra: hra, ta: ta, gross: gross, scheme: scheme, other: o.other, net: net };
  };

  calc.salary = function (v) {
    var basic = num(v.basic, 18000), f = num(v.fitment, 2.28);
    var higher = v.higher === 'yes';
    var cur = calc.pay({ basic: basic, da: DA_NOW, hraRate: HRA_SETS['30'][v.city] , ta: taBase(v.level, higher), schemeRate: num(v.scheme), other: num(v.other) });
    var nb = Math.round(basic * f / 100) * 100;
    var nw = calc.pay({ basic: nb, da: num(v.daAfter), hraRate: HRA_SETS[v.hraSet][v.city], ta: taBase(v.level, higher), schemeRate: num(v.scheme), other: num(v.other) });
    return { cur: cur, nw: nw, diff: nw.net - cur.net, pct: cur.net ? (nw.net - cur.net) / cur.net * 100 : 0, newBasic: nb };
  };

  calc.arrears = function (v) {
    var r = calc.salary(v);
    var months = Math.max(0, num(v.months));
    var gross = (r.nw.gross - r.cur.gross);
    return { r: r, months: months, monthlyGrossDiff: gross, total: gross * months, scheme: r.nw.scheme - r.cur.scheme };
  };

  calc.fitment = function (v) {
    var basic = num(v.basic, 18000), da = num(v.da, 60);
    var current = basic * (1 + da / 100);
    var rows = [], list = ['1.92', '2.28', '2.57', '2.86'];
    if (num(v.custom) > 0) list.push(String(num(v.custom)));
    for (var i = 0; i < list.length; i++) {
      var f = parseFloat(list[i]);
      var nb = Math.round(basic * f / 100) * 100;
      rows.push({ f: f, nb: nb, nominal: (nb / basic - 1) * 100, real: (nb / current - 1) * 100, diff: nb - current });
    }
    return { basic: basic, current: current, breakEven: 1 + da / 100, rows: rows };
  };

  calc.gratuity = function (v) {
    var basic = num(v.basic), da = num(v.da, DA_NOW), cap = num(v.cap, 2500000);
    var months = Math.max(0, num(v.years) * 12 + num(v.months));
    var periods = Math.min(66, Math.floor(months / 6));
    var emol = basic + basic * da / 100;
    var raw = emol / 4 * periods;
    var out = { periods: periods, emol: emol, raw: raw, paid: Math.min(raw, cap), capped: raw > cap };
    var f = num(v.fitment);
    if (f > 0) {
      var nb = basic * f, e2 = nb + nb * num(v.daAfter) / 100, r2 = e2 / 4 * periods;
      out.nb = nb; out.e2 = e2; out.paid2 = Math.min(r2, cap); out.raw2 = r2;
    }
    return out;
  };

  calc.pensionExisting = function (v) {
    var p = num(v.pension), f = num(v.fitment, 2.28);
    var curTotal = p * (1 + DA_NOW / 100);
    var np = Math.round(p * f);
    var total = np * (1 + num(v.drAfter) / 100);
    return { p: p, curTotal: curTotal, np: np, total: total, diff: total - curTotal, pct: curTotal ? (total - curTotal) / curTotal * 100 : 0, family30: np * 0.30 };
  };

  calc.pensionNew = function (v) {
    var avg = num(v.avg), yrs = num(v.years);
    var ops = yrs >= 10 ? avg * 0.5 * Math.min(yrs, 33) / 33 : 0;
    var ups = 0;
    if (yrs >= 10) { ups = avg * 0.5 * Math.min(yrs, 25) / 25; ups = Math.max(ups, 10000); }
    var da = num(v.da, DA_NOW);
    var periods = Math.floor(yrs * 2);
    var lump = (avg + avg * da / 100) / 10 * periods;
    return { ops: ops, ups: ups, upsFamily: ups * 0.6, opsFamily: ops * 0.3, lump: lump, eligible: yrs >= 10 };
  };

  calc.allowance = function (v) {
    var basic = num(v.basic, 18000), da = num(v.da, DA_NOW);
    var higher = v.higher === 'yes';
    var rate = HRA_SETS[v.hraSet][v.city];
    var daAmt = basic * da / 100, hra = basic * rate, ta = taBase(v.level, higher), taDa = ta * da / 100;
    return { basic: basic, daAmt: daAmt, hra: hra, ta: ta, taDa: taDa, total: basic + daAmt + hra + ta + taDa, allow: daAmt + hra + ta + taDa, rate: rate };
  };

  calc.da = function (v) {
    var basic = num(v.basic), a = num(v.old, 60), b = num(v.nw, DA_NOW), m = Math.max(0, num(v.months));
    var monthly = basic * (b - a) / 100;
    return { oldDa: basic * a / 100, newDa: basic * b / 100, monthly: monthly, arrears: monthly * m, months: m, annual: monthly * 12 };
  };

  calc.matrix = function (v) {
    var e = levelEntry(v.level), cell = Math.max(1, Math.min(40, Math.round(num(v.cell, 1))));
    var b = Math.round(e * Math.pow(1.03, cell - 1) / 100) * 100;
    var rows = [];
    var fs = [1.92, 2.28, 2.57, 2.86];
    for (var i = 0; i < fs.length; i++) rows.push({ f: fs[i], nb: Math.round(b * fs[i] / 100) * 100 });
    return { entry: e, cell: cell, basic: b, rows: rows };
  };

  // ---------- tiny UI toolkit ----------
  function fmt(n) { return '₹' + Math.round(n).toLocaleString('en-IN'); }
  function pct(n) { return (Math.round(n * 10) / 10).toFixed(1) + '%'; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function levelOptions() { return LEVELS.map(function (l) { return [l[0], 'Level ' + l[0] + ' (entry ' + fmt(l[1]) + ')']; }); }
  function hraOptions() { return Object.keys(HRA_SETS).map(function (k) { return [k, HRA_SETS[k].label]; }); }

  function buildField(f, uid) {
    var id = uid + '-' + f.id, h = '<div class="field"><label for="' + id + '">' + esc(f.label) + '</label>';
    if (f.type === 'select') {
      h += '<select id="' + id + '" name="' + f.id + '">';
      f.options.forEach(function (o) { h += '<option value="' + esc(o[0]) + '"' + (String(o[0]) === String(f.value) ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; });
      h += '</select>';
    } else {
      h += '<input id="' + id + '" name="' + f.id + '" type="number" inputmode="decimal" min="' + (f.min == null ? 0 : f.min) + '"' + (f.max != null ? ' max="' + f.max + '"' : '') + ' step="' + (f.step || 'any') + '" value="' + f.value + '">';
    }
    if (f.hint) h += '<small>' + esc(f.hint) + '</small>';
    return h + '</div>';
  }

  function mount(el, spec) {
    var uid = 'c' + Math.random().toString(36).slice(2, 7);
    var html = '<form class="calc-form" onsubmit="return false">' + spec.fields.map(function (f) { return buildField(f, uid); }).join('') + '</form><div class="calc-out" aria-live="polite"></div>';
    el.innerHTML = html;
    var out = el.querySelector('.calc-out');
    function read() {
      var v = {};
      Array.prototype.forEach.call(el.querySelectorAll('[name]'), function (i) { v[i.name] = i.value; });
      return v;
    }
    function run() { out.innerHTML = spec.render(read()) + '<p class="calc-note">' + spec.note + '</p>'; }
    function sync(e) {
      if (spec.onChange) spec.onChange(e.target.name, el);
      run();
    }
    el.addEventListener('input', sync); el.addEventListener('change', sync);
    run();
  }

  function row(label, val, cls) { return '<tr' + (cls ? ' class="' + cls + '"' : '') + '><th scope="row">' + label + '</th><td>' + val + '</td></tr>'; }
  function table(head, rows) { return '<div class="table-wrap"><table class="result-table"><thead><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' + rows + '</tbody></table></div>'; }
  var NOTE = 'Illustrative estimate based on 7th CPC rules and assumed 8th CPC scenarios. The Commission has not announced any fitment factor, matrix or implementation date. Your actual pay will follow the notified rules.';

  var specs = {};

  function commonPayFields(extra) {
    return [
      { id: 'level', label: 'Current pay level (7th CPC)', type: 'select', options: levelOptions(), value: '6' },
      { id: 'basic', label: 'Current basic pay (INR per month)', value: 35400, min: 0, hint: 'Changes with the level; edit it if you are above the entry cell.' },
      { id: 'fitment', label: 'Assumed fitment factor', type: 'select', options: FITMENT, value: '2.28' },
      { id: 'city', label: 'City class for HRA', type: 'select', options: CITY, value: 'X' },
      { id: 'higher', label: 'Posted in a higher-TPTA city?', type: 'select', options: [['no', 'No'], ['yes', 'Yes']], value: 'no', hint: 'Affects Transport Allowance. Check the official list of 19 higher-TPTA cities.' },
      { id: 'daAfter', label: 'DA after revision (%)', value: 0, min: 0, hint: 'Pay commissions usually restart DA from a low base after merging it into basic.' },
      { id: 'hraSet', label: 'HRA rate set after revision (X / Y / Z)', type: 'select', options: hraOptions(), value: '24' },
      { id: 'scheme', label: 'Pension scheme deduction', type: 'select', options: [['0.10', 'NPS or UPS (10% of basic + DA)'], ['0', 'OPS / GPF (none)']], value: '0.10' },
      { id: 'other', label: 'Other monthly deductions (CGHS, CGEGIS, etc.)', value: 1000, min: 0 }
    ].concat(extra || []);
  }
  function syncLevel(name, el) {
    if (name === 'level') {
      var lv = el.querySelector('[name=level]').value;
      el.querySelector('[name=basic]').value = levelEntry(lv);
    }
  }

  specs.salary = {
    fields: commonPayFields(),
    onChange: syncLevel,
    note: NOTE,
    render: function (v) {
      var r = calc.salary(v), c = r.cur, n = r.nw;
      var rows = '';
      rows += '<tr><th scope="row">Basic pay</th><td>' + fmt(c.basic) + '</td><td>' + fmt(n.basic) + '</td></tr>';
      rows += '<tr><th scope="row">Dearness Allowance</th><td>' + fmt(c.da) + '</td><td>' + fmt(n.da) + '</td></tr>';
      rows += '<tr><th scope="row">HRA</th><td>' + fmt(c.hra) + '</td><td>' + fmt(n.hra) + '</td></tr>';
      rows += '<tr><th scope="row">Transport Allowance (with DA)</th><td>' + fmt(c.ta) + '</td><td>' + fmt(n.ta) + '</td></tr>';
      rows += '<tr class="total"><th scope="row">Gross pay</th><td>' + fmt(c.gross) + '</td><td>' + fmt(n.gross) + '</td></tr>';
      rows += '<tr><th scope="row">NPS / UPS contribution</th><td>-' + fmt(c.scheme) + '</td><td>-' + fmt(n.scheme) + '</td></tr>';
      rows += '<tr><th scope="row">Other deductions</th><td>-' + fmt(c.other) + '</td><td>-' + fmt(n.other) + '</td></tr>';
      rows += '<tr class="total"><th scope="row">Estimated net pay</th><td>' + fmt(c.net) + '</td><td>' + fmt(n.net) + '</td></tr>';
      return '<h3>Estimated monthly payslip</h3>' + table(['Component', 'Now (7th CPC, DA ' + DA_NOW + '%)', '8th CPC scenario'], rows) +
        '<p class="calc-result">Change in net pay: <strong>' + (r.diff >= 0 ? '+' : '') + fmt(r.diff) + ' per month (' + pct(r.pct) + ')</strong></p>';
    }
  };

  specs.arrears = {
    fields: commonPayFields([{ id: 'months', label: 'Months between effective date and payout', value: 12, min: 0, hint: 'Example: 1 Jan 2026 to a payout in Jan 2028 is 24 months.' }]),
    onChange: syncLevel,
    note: NOTE + ' Arrears are taxable; tax relief for salary arrears may be available under current income-tax law.',
    render: function (v) {
      var a = calc.arrears(v);
      var rows = row('Monthly gross pay now', fmt(a.r.cur.gross)) + row('Monthly gross pay, 8th CPC scenario', fmt(a.r.nw.gross)) +
        row('Monthly gross difference', fmt(a.monthlyGrossDiff)) + row('Months of arrears', a.months) +
        row('Extra NPS/UPS contribution on arrears (approx.)', fmt(a.scheme * a.months)) +
        row('Estimated gross arrears', fmt(a.total), 'total');
      return '<h3>Arrears estimate</h3><div class="table-wrap"><table class="result-table"><tbody>' + rows + '</tbody></table></div>';
    }
  };

  specs.fitment = {
    fields: [
      { id: 'basic', label: 'Current basic pay (INR)', value: 18000, min: 0 },
      { id: 'da', label: 'DA at the date DA is merged (%)', value: 60, min: 0, hint: 'DA was 60% from Jan 2026 and 63% from Jul 2026.' },
      { id: 'custom', label: 'Your own fitment factor (optional)', value: '', min: 0, step: '0.01' }
    ],
    note: NOTE,
    render: function (v) {
      var r = calc.fitment(v), rows = '';
      r.rows.forEach(function (x) {
        rows += '<tr><th scope="row">' + x.f.toFixed(2) + '</th><td>' + fmt(x.nb) + '</td><td>' + pct(x.nominal) + '</td><td>' + (x.diff >= 0 ? '+' : '') + fmt(x.diff) + '</td><td>' + pct(x.real) + '</td></tr>';
      });
      return '<h3>Basic pay under each scenario</h3><p>Pay-neutral point: a fitment factor of <strong>' + r.breakEven.toFixed(2) + '</strong> only matches your current basic + DA (' + fmt(r.current) + '). Anything above it is a real increase.</p>' +
        table(['Fitment factor', 'Revised basic (rounded to Rs 100)', 'Rise in basic', 'Gain vs basic + DA today', 'Real increase'], rows);
    }
  };

  specs.gratuity = {
    fields: [
      { id: 'basic', label: 'Last drawn basic pay (INR)', value: 78800, min: 0 },
      { id: 'da', label: 'DA rate (%)', value: DA_NOW, min: 0 },
      { id: 'years', label: 'Completed years of service', value: 33, min: 0, max: 45 },
      { id: 'months', label: 'Extra completed months', value: 0, min: 0, max: 11 },
      { id: 'cap', label: 'Gratuity ceiling (INR)', value: 2500000, min: 0, hint: 'Rs 25 lakh since DA crossed 50%. Edit to test a revised ceiling.' },
      { id: 'fitment', label: 'Optional: fitment factor for an 8th CPC estimate', type: 'select', options: [['0', 'Skip'], ['1.92', '1.92'], ['2.28', '2.28'], ['2.57', '2.57'], ['2.86', '2.86']], value: '0' },
      { id: 'daAfter', label: 'DA after revision (%)', value: 0, min: 0 }
    ],
    note: NOTE,
    render: function (v) {
      var g = calc.gratuity(v);
      var rows = row('Basic + DA (emoluments)', fmt(g.emol)) + row('Completed six-month periods (max 66)', g.periods) +
        row('Formula result: emoluments / 4 x periods', fmt(g.raw)) + row('Gratuity payable' + (g.capped ? ' (ceiling applied)' : ''), fmt(g.paid), 'total');
      var extra = '';
      if (g.paid2 != null) extra = '<h3>8th CPC scenario</h3><div class="table-wrap"><table class="result-table"><tbody>' + row('Revised basic', fmt(g.nb)) + row('Emoluments after DA assumption', fmt(g.e2)) + row('Gratuity (capped at ceiling)', fmt(g.paid2), 'total') + '</tbody></table></div>';
      return '<h3>Retirement gratuity estimate</h3><div class="table-wrap"><table class="result-table"><tbody>' + rows + '</tbody></table></div>' + extra;
    }
  };

  specs.pensionExisting = {
    fields: [
      { id: 'pension', label: 'Basic pension per PPO (INR per month)', value: 30000, min: 0 },
      { id: 'fitment', label: 'Assumed fitment factor', type: 'select', options: FITMENT, value: '2.28' },
      { id: 'drAfter', label: 'DR after revision (%)', value: 0, min: 0 }
    ],
    note: NOTE + ' Minimum and maximum pension limits and special cases are not modelled.',
    render: function (v) {
      var p = calc.pensionExisting(v);
      var rows = row('Basic pension today', fmt(p.p)) + row('Pension + DR today (' + DA_NOW + '%)', fmt(p.curTotal)) +
        row('Revised basic pension (scenario)', fmt(p.np)) + row('Revised pension + DR', fmt(p.total), 'total') +
        row('Monthly change', (p.diff >= 0 ? '+' : '') + fmt(p.diff) + ' (' + pct(p.pct) + ')') +
        row('Family pension at 30% of revised pension', fmt(p.family30));
      return '<h3>Revised pension estimate</h3><div class="table-wrap"><table class="result-table"><tbody>' + rows + '</tbody></table></div>';
    }
  };

  specs.pensionNew = {
    fields: [
      { id: 'avg', label: 'Basic pay at retirement (OPS) or average of last 12 months (UPS), INR', value: 78800, min: 0 },
      { id: 'years', label: 'Qualifying service (years)', value: 30, min: 0, max: 45, step: '0.5' },
      { id: 'da', label: 'DA rate at retirement (%)', value: DA_NOW, min: 0 }
    ],
    note: 'UPS figures follow the assured-payout rules notified for central employees from 1 April 2025. OPS applies only to those still covered by it. Estimates exclude DR and revision under the 8th CPC.',
    render: function (v) {
      var p = calc.pensionNew(v);
      if (!p.eligible) return '<p class="calc-result">Pension rules generally need at least 10 years of qualifying service. Enter 10 years or more.</p>';
      var rows = row('OPS pension (50% of basic, 33 years for full)', fmt(p.ops)) + row('UPS assured payout (50%, 25 years for full; Rs 10,000 floor)', fmt(p.ups)) +
        row('UPS family pension (60% of payout)', fmt(p.upsFamily)) + row('UPS lump sum at superannuation (1/10 of pay + DA per six months)', fmt(p.lump), 'total');
      return '<h3>Pension at retirement (before DR)</h3><div class="table-wrap"><table class="result-table"><tbody>' + rows + '</tbody></table></div>';
    }
  };

  specs.allowance = {
    fields: [
      { id: 'level', label: 'Pay level', type: 'select', options: levelOptions(), value: '6' },
      { id: 'basic', label: 'Basic pay (INR)', value: 35400, min: 0 },
      { id: 'da', label: 'DA rate (%)', value: DA_NOW, min: 0, hint: 'Use 63 for the current rate, or test a post-merger value.' },
      { id: 'city', label: 'City class for HRA', type: 'select', options: CITY, value: 'X' },
      { id: 'hraSet', label: 'HRA rate set', type: 'select', options: hraOptions(), value: '30' },
      { id: 'higher', label: 'Higher-TPTA city?', type: 'select', options: [['no', 'No'], ['yes', 'Yes']], value: 'no' }
    ],
    onChange: syncLevel,
    note: 'Rates follow the 7th CPC rules in force. HRA floors, higher-TPTA city lists and any revision by the 8th CPC should be verified from the latest Finance Ministry orders.',
    render: function (v) {
      var a = calc.allowance(v);
      var rows = row('Basic pay', fmt(a.basic)) + row('Dearness Allowance', fmt(a.daAmt)) + row('HRA at ' + Math.round(a.rate * 100) + '% of basic', fmt(a.hra)) +
        row('Transport Allowance (base)', fmt(a.ta)) + row('DA on Transport Allowance', fmt(a.taDa)) +
        row('Total allowances', fmt(a.allow)) + row('Gross pay (basic + allowances)', fmt(a.total), 'total');
      return '<h3>Allowance breakdown</h3><div class="table-wrap"><table class="result-table"><tbody>' + rows + '</tbody></table></div>';
    }
  };

  specs.da = {
    fields: [
      { id: 'basic', label: 'Basic pay (INR per month)', value: 35400, min: 0 },
      { id: 'old', label: 'Previous DA rate (%)', value: 60, min: 0 },
      { id: 'nw', label: 'New DA rate (%)', value: DA_NOW, min: 0 },
      { id: 'months', label: 'Months of arrears (Jul 2026 to the month it is paid)', value: 4, min: 0, hint: 'The 63% rate applies from 1 July 2026; a payout with November salary covers July to October.' }
    ],
    note: 'Simplified: ignores DA on Transport Allowance and any change in basic pay during the arrears period.',
    render: function (v) {
      var d = calc.da(v);
      var rows = row('DA at previous rate', fmt(d.oldDa)) + row('DA at new rate', fmt(d.newDa)) + row('Monthly increase', fmt(d.monthly)) +
        row('Increase per year', fmt(d.annual)) + row('Arrears for ' + d.months + ' months', fmt(d.arrears), 'total');
      return '<h3>DA hike impact</h3><div class="table-wrap"><table class="result-table"><tbody>' + rows + '</tbody></table></div>';
    }
  };

  specs.matrix = {
    fields: [
      { id: 'level', label: 'Pay level', type: 'select', options: levelOptions(), value: '1' },
      { id: 'cell', label: 'Cell (1 = entry, one cell per annual increment)', value: 1, min: 1, max: 40, step: '1' }
    ],
    note: 'Cells follow the 3% annual increment rounded to the nearest Rs 100. The official matrix is the final authority for each cell, and 8th CPC columns are scenario multiples only.',
    render: function (v) {
      var m = calc.matrix(v), rows = '';
      m.rows.forEach(function (x) { rows += '<tr><th scope="row">' + x.f.toFixed(2) + '</th><td>' + fmt(x.nb) + '</td></tr>'; });
      return '<h3>Level ' + esc(v.level) + ', cell ' + m.cell + '</h3><p>7th CPC basic pay: <strong>' + fmt(m.basic) + '</strong> (entry pay ' + fmt(m.entry) + ').</p>' + table(['Fitment factor', 'Scenario basic pay'], rows);
    }
  };

  function init() {
    var nodes = document.querySelectorAll('[data-calc]');
    Array.prototype.forEach.call(nodes, function (n) {
      var s = specs[n.getAttribute('data-calc')];
      if (s) mount(n, s);
    });
  }

  root.PayCalc = { calc: calc, levels: LEVELS };
  if (typeof module !== 'undefined' && module.exports) { module.exports = root.PayCalc; }
  if (root.document) {
    if (root.document.readyState === 'loading') root.document.addEventListener('DOMContentLoaded', init); else init();
  }
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : {}));
