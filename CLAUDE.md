# English for Medicine — notes for Claude Code

Static website (no build step) of English for Specific Purposes units (A1–B1) for Medicine students, CAA Virtual (BUAP).
Each unit connects to a discipline-specific subject of the 2016 Licenciatura en Medicina curriculum (BUAP Facultad de Medicina).
Same engine as the sibling site English for Communication (~/english-for-communication/esp-comunicacion).
The owner is Angelica, an English teacher. Talk to her in Spanish; all student-facing content is in English.

## Structure
- `index.html` — home page. The `UNITS` array in its script lists every unit (title, focus, level, url, isNew).
- `assets/unit.js` + `assets/unit.css` — shared engine. Each unit folder has an identical `index.html` that loads
  `../assets/config.js`, its own `data.js` (`window.UNIT = {...}`), then `../assets/unit.js`.
- `assets/config.js` — `writingEndpoint` (Google Apps Script web app URL), `speakingPlatformName/Url`, `homeUrl`.
- `_template/` — copy to start a new unit. `tools/writing-collector.gs` — Apps Script that stores writing submissions.
- 15 unit folders (5 per level), all using the shared engine; the order on the home page is the `UNITS` array (each entry has `subject`).
  A1: meet-the-body, inside-the-cell, safety-first-in-the-lab, a-day-at-med-school, how-does-it-work.
  A2: where-does-it-hurt, bugs-and-germs, a-healthy-plate, take-two-a-day, on-the-ward.
  B1: prevention-is-better, the-case-presentation, informed-consent, what-the-study-found, code-red-in-the-er.
- `subject` in data.js (the degree subject) is shown in the unit header.
- Speaker voices: each speaker name needs a gender, via `speakers: { "Name": "f" | "m" }` in data.js or the
  `SPEAKERS` list in unit.js.

## Conventions (keep them)
- Five steps per unit, IDs `mainsec-0` … `mainsec-4`; skill tabs `actsec-list`, `actsec-read`, `actsec-writ`, `actsec-spea`.
  Never use generic IDs like `id="presentation"`.
- Vary activity types; avoid repetitive multiple choice. Types: match, sort, gap (`[[answer|alt]]`), tiles, rewrite,
  tf, write (writing evidence: sent to `writingEndpoint` or downloaded), speak (record in browser, upload to platform),
  voice (speech recognition: the student picks role A or B of `model`, the computer reads the other role, each line is
  checked against what the browser heard; ≥75% of the words = OK). Speaking activity 1 in every unit is `voice`; activity 2 is `speak`.
- Every unit: 4 objectives, 6 can-do statements rated 1–5, each with a `review` hint.
- Each `slug` in `data.js` must equal its folder name (used for saved progress: `localStorage["med:" + slug]`).
- Colors are CSS tokens with light and dark themes; keep the home page and units on the same palette.

## Deploying to GitHub Pages
1. `git init && git add -A && git commit -m "English for Medicine site"`
2. `gh repo create english-for-medicine --public --source=. --push` (ask Angelica for the repo name and account first).
3. Enable Pages: `gh api -X POST repos/{owner}/english-for-medicine/pages -f "source[branch]=main" -f "source[path]=/"`
4. Site URL: `https://{owner}.github.io/english-for-medicine/`. Give it to Angelica for Google Sites (Insert → Embed → By URL).
`.nojekyll` is present so `_template/` is served as is.

## Checking changes
- `node --check assets/unit.js` and `node --check <unit>/data.js` after edits.
- Open a unit with a local server (`python3 -m http.server`) and click through all five steps and four skills.

## Possible next tasks
- Add B2 units (add B2 to GROUPS and LEVELS in index.html).
- Add recorded audio (`audio: "file.mp3"` in a unit's `skills.listening`) to replace browser text-to-speech.
