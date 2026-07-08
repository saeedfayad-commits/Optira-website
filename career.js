/* ==========================================================================
   OPTIRA — Career Profile Renderer
   Reads the slug from <body data-slug="..."> and renders the full profile
   using the data object in data.js. One renderer, twelve pages.
   ========================================================================== */

(function () {

  function esc(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : str;
    return div.innerHTML;
  }

  var AI_LABELS = { low: 'Low', med: 'Medium', high: 'High' };

  function render() {
    var slug = document.body.getAttribute('data-slug');
    var c = window.CAREERS && window.CAREERS[slug];
    var app = document.getElementById('app');

    if (!c) {
      app.innerHTML =
        '<div class="section-inner" style="padding:80px 32px;text-align:center;">' +
        '<h1 class="profile-title" style="margin-bottom:16px;">Career profile coming soon</h1>' +
        '<p class="profile-section-text" style="margin:0 auto 24px;">We\'re still writing this one up.</p>' +
        '<a href="../careers.html" class="btn-orange-lg">Back to Careers</a>' +
        '</div>';
      return;
    }

    // Page title / meta description
    document.title = c.title + ' — Career Profile — Optira';
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', c.subtitle);

    var aiClass = c.aiLevel; // low | med | high

    var html = '';

    // Breadcrumb
    html += '<div class="breadcrumb-bar section-inner"><a href="../careers.html" class="breadcrumb">&larr; Back to Careers</a></div>';

    // Hero
    html += '<section class="profile-hero section-inner">';
    html += '  <div class="profile-cluster">' + esc(c.clusterIcon) + ' ' + esc(c.cluster) + '</div>';
    html += '  <div class="profile-title-row">';
    html += '    <h1 class="profile-title">' + esc(c.title) + '</h1>';
    html += '    <button class="btn-save" id="saveBtn">☆ Save Career</button>';
    html += '  </div>';
    html += '  <p class="profile-subtitle">' + esc(c.subtitle) + '</p>';
    html += '  <div class="stat-cards">';
    html += statCard(c.salaryRange, 'AUD salary range');
    html += statCard(c.studyYears, 'Study pathway');
    html += statCard(c.jobStability, 'Job stability');
    html += statCard(c.lifestyle, 'Lifestyle flexibility');
    html += '  </div>';
    html += '</section>';

    // Overview
    html += section('Overview', '<p class="profile-section-text">' + esc(c.overview) + '</p>');

    // What they actually do
    html += section('What they actually do', bulletList(c.dayToDay));

    // Day in the life
    html += section('A day in the life', timeline(c.dayInLife));

    // Pros / Cons
    html += section('Pros &amp; cons', prosConsGrid(c.pros, c.cons));

    // Study pathway
    html += section('Study pathway', studyPathway(c.studyPathway));

    // Skills needed
    html += section('Skills needed', skillsList(c.skills));

    // Questions to ask
    html += section('Questions to ask before choosing this career', questionsList(c.questions));

    // Salary expectations + AI impact side-by-side
    html += '<div class="profile-section"><div class="section-inner">';
    html += '  <div class="pros-cons-grid">';
    html += '    <div>' + '<h2 class="profile-section-title" style="font-size:18px;">Salary expectations (AUD)</h2>' + salaryBox(c.salaryExpect, c.salaryRange) + '</div>';
    html += '    <div>' + '<h2 class="profile-section-title" style="font-size:18px;">' + AI_LABELS[c.aiLevel] + ' AI impact</h2>' + aiBox(aiClass, c.aiSummary) + '</div>';
    html += '  </div>';
    html += '</div></div>';

    // Personality fit + best suited
    html += '<div class="profile-section"><div class="section-inner">';
    html += '  <h2 class="profile-section-title">Personality fit</h2>';
    html += '  <div class="tag-row">' + c.personality.map(function (t) { return '<span class="personality-tag">' + esc(t) + '</span>'; }).join('') + '</div>';
    html += '  <div class="best-suited-box"><strong>Best suited for:</strong> ' + esc(c.bestSuited) + '</div>';
    html += '  <div class="profile-cta-row">';
    html += '    <a href="../compare.html" class="btn-orange-lg">Compare This Career</a>';
    html += '    <button class="btn-ghost" id="saveBtn2">Save to Dashboard</button>';
    html += '  </div>';
    html += '</div></div>';

    // Related careers
    if (c.related && c.related.length) {
      html += section('Related careers to explore', relatedGrid(c.related));
    }

    app.innerHTML = html;

    // wire up save buttons (local, in-memory only — matches no-localStorage-in-artifact rule;
    // on the live site this can hook into the existing dashboard localStorage logic)
    ['saveBtn', 'saveBtn2'].forEach(function (id) {
      var btn = document.getElementById(id);
      if (!btn) return;
      btn.addEventListener('click', function () {
        try {
          var key = 'optira-saved-careers';
          var saved = JSON.parse(localStorage.getItem(key) || '[]');
          if (saved.indexOf(slug) === -1) {
            saved.push(slug);
            localStorage.setItem(key, JSON.stringify(saved));
          }
        } catch (e) { /* localStorage unavailable — ignore */ }
        var mainBtn = document.getElementById('saveBtn');
        if (mainBtn) { mainBtn.textContent = '★ Saved'; mainBtn.classList.add('saved'); }
      });
    });
  }

  function statCard(value, label) {
    return '<div class="stat-card"><div class="stat-card-value">' + esc(value) + '</div><div class="stat-card-label">' + esc(label) + '</div></div>';
  }

  function section(title, innerHtml) {
    return '<section class="profile-section"><div class="section-inner">' +
      '<h2 class="profile-section-title">' + title + '</h2>' + innerHtml +
      '</div></section>';
  }

  function bulletList(items) {
    return '<div class="bullet-list">' + items.map(function (i) {
      return '<div class="bullet-item"><span class="bullet-dot"></span><span>' + esc(i) + '</span></div>';
    }).join('') + '</div>';
  }

  function timeline(items) {
    return '<div class="timeline">' + items.map(function (i, idx) {
      return '<div class="timeline-item">' +
        '<div class="timeline-time">' + esc(i.time) + '</div>' +
        '<div class="timeline-rail"><div class="timeline-dot"></div><div class="timeline-line"></div></div>' +
        '<div class="timeline-content"><div class="timeline-title">' + esc(i.title) + '</div><div class="timeline-desc">' + esc(i.desc) + '</div></div>' +
        '</div>';
    }).join('') + '</div>';
  }

  function prosConsGrid(pros, cons) {
    var prosHtml = pros.map(function (p) { return '<div class="pc-item"><span class="pc-icon">✓</span><span>' + esc(p) + '</span></div>'; }).join('');
    var consHtml = cons.map(function (p) { return '<div class="pc-item"><span class="pc-icon">✕</span><span>' + esc(p) + '</span></div>'; }).join('');
    return '<div class="pros-cons-grid">' +
      '<div class="pc-card pros"><div class="pc-title">Pros</div><div class="pc-list">' + prosHtml + '</div></div>' +
      '<div class="pc-card cons"><div class="pc-title">Cons</div><div class="pc-list">' + consHtml + '</div></div>' +
      '</div>';
  }

  function studyPathway(p) {
    var html = '<div class="pathway-card">' +
      '<div class="pathway-label">Main pathway</div>' +
      '<div class="pathway-text">' + esc(p.main.text) + '</div>' +
      '<div class="pathway-cost">Estimated cost: <strong>' + esc(p.main.cost) + '</strong></div>' +
      '</div>';
    html += '<div class="pathway-card">' +
      '<div class="pathway-label">Alternative pathways</div>' +
      '<div class="alt-list">' + p.alternatives.map(function (a) {
        return '<div class="alt-item"><span class="bullet-dot"></span><span>' + esc(a) + '</span></div>';
      }).join('') + '</div>' +
      '</div>';
    return html;
  }

  function skillsList(skills) {
    return '<div class="skills-list">' + skills.map(function (s) {
      var lvl = s.level.toLowerCase();
      return '<div class="skill-row"><span class="skill-row-name">' + esc(s.name) + '</span><span class="skill-level ' + lvl + '">' + esc(s.level) + '</span></div>';
    }).join('') + '</div>';
  }

  function questionsList(qs) {
    return '<div class="questions-list">' + qs.map(function (q) {
      return '<div class="question-item"><span class="question-mark">?</span><span>' + esc(q) + '</span></div>';
    }).join('') + '</div>';
  }

  function parseSalaryMax(range) {
    var nums = (range.match(/\d+/g) || []).map(Number);
    return nums.length ? Math.max.apply(null, nums) : 100;
  }

  function salaryBox(expect, range) {
    var ceiling = parseSalaryMax(range) * 1000;
    var startNum = parseInt(String(expect.starting).replace(/[^\d]/g, ''), 10) || 0;
    var longNum = parseInt(String(expect.longterm).replace(/[^\d]/g, ''), 10) || 0;
    var startPct = Math.min(100, Math.round((startNum / ceiling) * 100));
    var longPct = Math.min(100, Math.round((longNum / ceiling) * 100));
    return '<div class="salary-box"><div class="salary-bars">' +
      '<div class="salary-bar-row">' +
        '<div class="salary-bar-labels"><span class="salary-bar-name">Starting salary</span><span class="salary-bar-value">' + esc(expect.starting) + '</span></div>' +
        '<div class="salary-bar-track"><div class="salary-bar-fill" style="width:' + startPct + '%"></div></div>' +
      '</div>' +
      '<div class="salary-bar-row">' +
        '<div class="salary-bar-labels"><span class="salary-bar-name">Long-term salary</span><span class="salary-bar-value">' + esc(expect.longterm) + '</span></div>' +
        '<div class="salary-bar-track"><div class="salary-bar-fill" style="width:' + longPct + '%"></div></div>' +
      '</div>' +
      '</div><div class="salary-note">Approximate figures. May vary by state, employer, and experience.</div></div>';
  }

  function aiBox(cls, text) {
    return '<div class="ai-box ' + cls + '"><div class="ai-box-text">' + esc(text) + '</div></div>';
  }

  function relatedGrid(slugs) {
    var html = '<div class="related-grid">';
    slugs.forEach(function (s) {
      var rc = window.CAREERS[s];
      if (!rc) return;
      html += '<a href="' + s + '.html" class="related-card">' +
        '<div class="related-cluster">' + esc(rc.clusterIcon) + ' ' + esc(rc.cluster) + '</div>' +
        '<div class="related-title">' + esc(rc.title) + '</div>' +
        '<div class="related-salary">' + esc(rc.salaryRange) + '</div>' +
        '</a>';
    });
    html += '</div>';
    return html;
  }

  // ── Nav interactions (shared across site) ──
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }
  window.toggleMenu = toggleMenu;

  function initTheme() {
    var root = document.documentElement;
    var btn = document.getElementById('themeToggle');
    var icon = document.getElementById('toggleIcon');
    var label = document.getElementById('toggleLabel');
    if (!btn) return;

    var saved = localStorage.getItem('optira-theme') || 'dark';
    applyTheme(saved);

    btn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') || 'dark';
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('optira-theme', next); } catch (e) {}
    });

    function applyTheme(theme) {
      root.setAttribute('data-theme', theme);
      if (theme === 'light') { icon.textContent = '☀️'; label.textContent = 'Light'; }
      else { icon.textContent = '🌙'; label.textContent = 'Dark'; }
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    render();
  });

})();
