#!/usr/bin/env node
/**
 * Optira career page generator.
 *
 * WHAT THIS DOES
 * This script reads ONE file — careers-data.json — and produces:
 *   1. A full profile page for every career in /careers/<slug>.html
 *   2. The career grid section inside careers.html
 *
 * HOW TO ADD A NEW CAREER
 *   1. Open careers-data.json
 *   2. Copy an existing entry, paste it, change the values
 *   3. Run:  node generate.js
 *   4. Commit and push
 * That's it — no HTML to write by hand, and the grid and the profile
 * page can never fall out of sync with each other again, because they
 * are both generated from the same entry.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DATA_PATH = path.join(ROOT, "careers-data.json");
const CAREER_TEMPLATE_PATH = path.join(__dirname, "career-template.html");
const CARD_TEMPLATE_PATH = path.join(__dirname, "card-template.html");
const CAREERS_HTML_PATH = path.join(ROOT, "careers.html");
const CAREERS_OUT_DIR = path.join(ROOT, "careers");

const GRID_START = "<!-- CAREERS_GRID_START -->";
const GRID_END = "<!-- CAREERS_GRID_END -->";

function esc(str) {
  // Escape for safe use inside HTML text content.
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function fill(template, values) {
  let out = template;
  for (const [key, val] of Object.entries(values)) {
    out = out.split(`{{${key}}}`).join(val);
  }
  return out;
}

function buildDayList(items) {
  return items.map((i) => `        <li>${esc(i)}</li>`).join("\n");
}

function buildPathway(steps) {
  return steps
    .map(
      (s) => `        <div class="pathway-step">
          <div class="step-label">${esc(s.label)}</div>
          <div class="step-body">${esc(s.body)}</div>
        </div>`
    )
    .join("\n");
}

function buildSkillChips(skills) {
  return skills
    .map((s) => `        <span class="skill-chip">${esc(s)}</span>`)
    .join("\n");
}

function buildSkillTags(skills) {
  // Grid card shows max 3 skills to keep the card compact (matches
  // the original hand-built cards).
  return skills
    .slice(0, 3)
    .map((s) => `          <span class="skill-tag">${esc(s)}</span>`)
    .join("\n");
}

function buildOutlookBars(outlook) {
  const order = ["AI impact", "Job stability", "Flexibility"];
  return order
    .filter((k) => outlook[k])
    .map((k) => {
      const o = outlook[k];
      return `      <div class="bar-row">
        <span class="bar-label">${esc(k)}</span>
        <div class="bar-track"><div class="bar-fill ${o.level_class}" style="width:${o.width}%"></div></div>
        <span class="bar-value">${esc(o.value)}</span>
      </div>`;
    })
    .join("\n");
}

function aiBadgeClass(aiImpact) {
  const v = aiImpact.toLowerCase();
  if (v === "low") return "low";
  if (v === "high") return "high";
  return "med";
}

function generateCareerPage(career, template) {
  const values = {
    TITLE: esc(career.title),
    CLUSTER: esc(career.cluster),
    ICON_CLASS: career.iconClass,
    ICON_EMOJI: career.iconEmoji,
    LEDE: esc(career.lede),
    SALARY: esc(career.salary),
    STUDY_TIME: esc(career.studyTime),
    AI_IMPACT: esc(career.aiImpact),
    JOB_STABILITY: esc(career.jobStability),
    DAY_LIST_ITEMS: buildDayList(career.dayInLife),
    PATHWAY_STEPS: buildPathway(career.pathway),
    SKILL_CHIPS: buildSkillChips(career.skills),
    OUTLOOK_BARS: buildOutlookBars(career.outlook),
    AI_NOTE: esc(career.aiNote),
    SLUG: career.slug,
  };
  return fill(template, values);
}

function generateCard(career) {
  const values = {
    CLUSTER: career.cluster, // plain & in the attribute, matches existing markup
    CLUSTER_EMOJI: career.clusterEmoji,
    AI_BADGE_CLASS: aiBadgeClass(career.aiImpact),
    AI_IMPACT: esc(career.aiImpact),
    TITLE: esc(career.title),
    LEDE: esc(career.lede),
    SALARY: esc(career.salary),
    STUDY_TIME: esc(career.studyTime),
    SKILL_TAGS: buildSkillTags(career.skills),
    SLUG: career.slug,
  };
  return fill(fs.readFileSync(CARD_TEMPLATE_PATH, "utf8"), values);
}

function main() {
  const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  const careers = Object.values(data).sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  // 1. Generate each individual career page.
  const pageTemplate = fs.readFileSync(CAREER_TEMPLATE_PATH, "utf8");
  if (!fs.existsSync(CAREERS_OUT_DIR)) {
    fs.mkdirSync(CAREERS_OUT_DIR, { recursive: true });
  }
  for (const career of careers) {
    const html = generateCareerPage(career, pageTemplate);
    const outPath = path.join(CAREERS_OUT_DIR, `${career.slug}.html`);
    fs.writeFileSync(outPath, html);
    console.log(`  wrote careers/${career.slug}.html`);
  }

  // 2. Regenerate the grid section inside careers.html, leaving the
  //    rest of the page (nav, hero, footer, filter script) untouched.
  const cardsHtml = careers.map(generateCard).join("\n");
  let careersHtml = fs.readFileSync(CAREERS_HTML_PATH, "utf8");

  if (!careersHtml.includes(GRID_START) || !careersHtml.includes(GRID_END)) {
    console.error(
      `\nERROR: could not find ${GRID_START} / ${GRID_END} markers in careers.html.\n` +
        `Run the one-time setup step first (see MIGRATION_STEPS.md) before running generate.js.`
    );
    process.exit(1);
  }

  const startIdx = careersHtml.indexOf(GRID_START) + GRID_START.length;
  const endIdx = careersHtml.indexOf(GRID_END);
  careersHtml =
    careersHtml.slice(0, startIdx) +
    "\n" +
    cardsHtml +
    "\n    " +
    careersHtml.slice(endIdx);

  // Keep the "X careers" counter text in sync too.
  const count = careers.length;
  careersHtml = careersHtml.replace(
    /Browse \d+ career profiles/g,
    `Browse ${count} career profiles`
  );
  careersHtml = careersHtml.replace(
    /id="careerCount">\d+ careers?/,
    `id="careerCount">${count} careers`
  );

  fs.writeFileSync(CAREERS_HTML_PATH, careersHtml);
  console.log(`  wrote careers.html (${count} cards)`);
  console.log(`\nDone. ${count} careers generated.`);
}

main();
