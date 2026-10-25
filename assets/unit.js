/* English for Medicine — shared unit engine.
   Each unit page defines window.UNIT (its content) and loads this file.
   Site settings live in assets/config.js (window.CAA_CONFIG).
   Section IDs follow the series convention: mainsec-0…4 for steps,
   actsec-list / actsec-read / actsec-writ / actsec-spea for the skills. */
(function () {
  "use strict";
  const U = window.UNIT;
  const C = window.CAA_CONFIG || {};
  if (!U) { document.body.textContent = "Unit data is missing."; return; }

  /* ---------- helpers ---------- */
  function h(tag, props) {
    const e = document.createElement(tag);
    if (props) for (const k in props) {
      const v = props[k];
      if (v == null || v === false) continue;
      if (k === "class") e.className = v;
      else if (k === "html") e.innerHTML = v;
      else if (k === "text") e.textContent = v;
      else if (k.slice(0, 2) === "on") e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? "" : v);
    }
    for (let i = 2; i < arguments.length; i++) add(e, arguments[i]);
    return e;
  }
  function add(e, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) { c.forEach(x => add(e, x)); return; }
    e.append(c.nodeType ? c : document.createTextNode(String(c)));
  }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const md = s => esc(s).replace(/&lt;br&gt;/g, "<br>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
  const norm = s => String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"')
    .replace(/\s+/g, " ").replace(/\s+([?.!,])/g, "$1").trim().replace(/[.!]+$/, "").trim();
  const strip = s => s.replace(/\*/g, "");
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function shuffleNotSame(arr) {
    if (arr.length < 2) return arr.slice();
    let a; let tries = 0;
    do { a = shuffle(arr); tries++; } while (tries < 10 && a.join("\u0000") === arr.join("\u0000"));
    return a;
  }

  /* ---------- saved progress (this browser only) ---------- */
  const KEY = "med:" + U.slug;
  let state = {};
  try { state = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { state = {}; }
  state.visited = state.visited || {}; state.done = state.done || {}; state.self = state.self || {};
  state.drafts = state.drafts || {}; state.warm = state.warm || [];
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage blocked */ } }

  /* ---------- read aloud ----------
     Each speaker gets a woman's or a man's voice. Gender comes from U.speakers ({ "Name": "f" | "m" }),
     then from the SPEAKERS list below, then from titles (Mr., Mrs., Aunt…). The best-sounding
     voice of that gender on the device is used (natural / neural / Google voices first). */
  const SPEAKERS = {
    f: ["Sofía", "Valeria", "Jimena", "Valentina", "Dr. Ana", "Aunt Rosa", "Mariana", "Sara", "Host", "Andrea", "Claire", "Lucía",
      "Girl", "Woman", "Mia", "Carla", "Fernanda", "Majo", "Brenda", "Rocío", "Interviewer", "Mónica", "Iris", "Lupita", "Tania",
      "Brisa", "Lin", "Paulina", "Teacher", "Grandma", "Camila", "Daniela", "Agent", "Renata", "Ximena"],
    m: ["Daniel", "Iván", "Luis", "Omar", "Rafa", "Javier", "Pablo", "Kenji", "Marcos", "Leo", "Chef Leo", "Man", "Beto", "Rodrigo",
      "Óscar", "Ale", "Andrés", "Grandpa", "Joel", "Mateo", "Nico", "Alan", "Ernesto", "Kevin", "Dani", "Pedro", "Toño", "Gabriel",
      "Hugo", "Cook", "Dad", "Iker", "Diego", "Emilio", "Paco", "Tomás", "Student"]
  };
  function genderOf(who, i) {
    const own = U.speakers && U.speakers[who];
    if (own) return own;
    if (SPEAKERS.f.indexOf(who) >= 0) return "f";
    if (SPEAKERS.m.indexOf(who) >= 0) return "m";
    if (/^(Mrs|Ms|Miss|Aunt|Grandma|Mom|Mother|Doña)\b/i.test(who)) return "f";
    if (/^(Mr|Uncle|Grandpa|Dad|Father|Don)\b/i.test(who)) return "m";
    return i % 2 ? "m" : "f"; /* A / B and unknown names alternate */
  }
  const NOVELTY = /bad news|bahh|bells|boing|bubbles|cellos|wobble|good news|jester|junior|organ|superstar|trinoids|whisper|zarvox|grandma|grandpa|albert|fred|ralph|kathy/i;
  const FEMALE = /female|samantha|\bava\b|allison|susan|zo[eë]|karen|moira|tessa|serena|victoria|\bflo\b|sandy|shelley|aria|jenny|michelle|emma|sonia|libby|natasha|clara|nicole|joanna|salli|kimberly|\bivy\b|kendra|catherine|nancy|\bjane\b|ashley|amber|\bcora\b|elizabeth|heather|hazel|zira|linda|fiona|veena|tara|isha|martha|emily|olivia|\bruth\b|google us english/i;
  const MALE = /\bmale\b|\balex\b|daniel|\btom\b|aaron|arthur|\bguy\b|davis|andrew|brian|christopher|\beric\b|roger|ryan|thomas|eddy|reed|rocko|david|\bmark\b|george|james|oliver|rishi|\baman\b|\blee\b|gordon|evan|nathan|jason|tony|william|liam|matthew|justin|joey|kevin|steffan|brandon|christopher/i;
  function quality(v) {
    let s = 0;
    if (/natural|neural|online|premium|enhanced|siri/i.test(v.name)) s += 100;
    if (/google/i.test(v.name)) s += 50;
    if (/en[-_]US/i.test(v.lang)) s += 20; else if (/en[-_](GB|CA|AU|IE)/i.test(v.lang)) s += 10;
    return s;
  }
  const TTS = {
    ok: "speechSynthesis" in window,
    voices: { f: [], m: [], any: [] }, rate: 0.95,
    init() {
      if (!this.ok) return;
      const load = () => {
        const en = speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang) && !NOVELTY.test(v.name))
          .sort((a, b) => quality(b) - quality(a));
        this.voices = {
          f: en.filter(v => FEMALE.test(v.name)),
          m: en.filter(v => !FEMALE.test(v.name) && MALE.test(v.name)),
          any: en
        };
      };
      load(); speechSynthesis.addEventListener("voiceschanged", load);
    },
    /* k = how many speakers of this gender came before, so two women get two different voices when possible */
    pick(g, k) {
      const own = this.voices[g];
      if (own.length) return { voice: own[k % own.length], pitch: 1 };
      const v = this.voices.any[0] || null; /* no voice of that gender on this device: shift the pitch instead */
      return { voice: v, pitch: g === "m" ? 0.75 : 1.25 };
    },
    play(lines, onEnd) {
      if (!this.ok) return;
      speechSynthesis.cancel();
      const cast = {}, count = { f: 0, m: 0 };
      lines.forEach(l => {
        const w = l.who || "";
        if (cast[w]) return;
        const g = w ? genderOf(w, Object.keys(cast).length) : "f";
        cast[w] = this.pick(g, count[g]++);
      });
      lines.forEach((l, i) => {
        const u = new SpeechSynthesisUtterance(strip(l.line));
        const c = cast[l.who || ""];
        u.lang = c.voice ? c.voice.lang : "en-US"; u.rate = this.rate; u.pitch = c.pitch;
        if (c.voice) u.voice = c.voice;
        if (i === lines.length - 1 && onEnd) u.onend = onEnd;
        speechSynthesis.speak(u);
      });
    },
    stop() { if (this.ok) speechSynthesis.cancel(); }
  };
  TTS.init();

  function player(lines, audioSrc) {
    if (audioSrc) return h("div", { class: "player" }, h("audio", { controls: true, preload: "none", src: audioSrc }));
    if (!TTS.ok) return h("p", { class: "note" }, "Your browser can't read aloud. Open the transcript below and read it.");
    let slow = false;
    const status = h("span", { class: "note", "aria-live": "polite" });
    const play = h("button", { class: "btn primary", type: "button", onclick() {
      TTS.rate = slow ? 0.75 : 0.95; status.textContent = "Playing…";
      TTS.play(lines, () => { status.textContent = ""; });
    } }, "▶ Play");
    const speed = h("button", { class: "btn", type: "button", "aria-pressed": "false", onclick() {
      slow = !slow; speed.setAttribute("aria-pressed", String(slow)); speed.textContent = slow ? "Speed: slow" : "Speed: normal";
    } }, "Speed: normal");
    const stop = h("button", { class: "btn", type: "button", onclick() { TTS.stop(); status.textContent = ""; } }, "■ Stop");
    return h("div", { class: "stack", style: "gap:6px" }, h("div", { class: "player" }, play, speed, stop, status),
      h("p", { class: "note" }, "Tip: the voices sound most natural in Microsoft Edge or Google Chrome."));
  }
  function dialogue(lines) {
    return h("div", { class: "dialogue" }, lines.map(l => h("div", { class: "line" },
      l.who ? h("span", { class: "who" }, l.who) : h("span"), h("span", { html: md(l.line) }))));
  }

  /* ---------- progress ---------- */
  const STEPS = ["Presentation", "Objectives", "Explanation", "Practice", "Self-assessment"];
  const SKILLS = [
    { key: "listening", id: "actsec-list", name: "Listening" },
    { key: "reading", id: "actsec-read", name: "Reading" },
    { key: "writing", id: "actsec-writ", name: "Writing" },
    { key: "speaking", id: "actsec-spea", name: "Speaking" }
  ];
  const allActs = [];
  SKILLS.forEach(s => ((U.skills[s.key] || {}).activities || []).forEach((a, i) => allActs.push(s.key + "-" + i)));
  let refreshSkillCounts = () => {};
  function markDone(id, score, total) {
    state.done[id] = { score: score, total: total }; save(); updateProgress(); refreshSkillCounts();
  }
  function updateProgress() {
    const totalUnits = STEPS.length + allActs.length + 1;
    let got = STEPS.filter((s, i) => state.visited[i]).length;
    got += allActs.filter(id => state.done[id]).length;
    if (U.selfAssessment.every((x, i) => state.self[i])) got += 1;
    const pct = Math.round(got / totalUnits * 100);
    barFill.style.width = pct + "%"; barText.textContent = pct + "% complete";
    stepBtns.forEach((b, i) => b.classList.toggle("done", !!state.visited[i] && i !== current));
  }

  /* ---------- layout ---------- */
  const barFill = h("span");
  const barText = h("span");
  const top = h("header", { class: "topbar" }, h("div", { class: "wrap" },
    h("a", { class: "back", href: C.homeUrl || "../" }, "← All units"),
    h("span", { class: "unit-name" }, U.title),
    h("span", { class: "lvl" }, U.level),
    h("div", { class: "progress" }, h("div", { class: "bar", role: "presentation" }, barFill), barText)
  ));
  const stepNav = h("nav", { class: "steps", role: "tablist", "aria-label": "Unit steps" });
  const stepBtns = STEPS.map((name, i) => {
    const b = h("button", { class: "step-btn", type: "button", role: "tab", id: "mainbtn-" + i, "aria-controls": "mainsec-" + i, "aria-selected": "false", onclick: () => show(i) },
      h("span", { class: "n" }, i + 1), name);
    stepNav.append(b); return b;
  });
  const main = h("main", { class: "wrap" });
  const panels = STEPS.map((name, i) => h("section", { class: "panel", id: "mainsec-" + i, role: "tabpanel", "aria-labelledby": "mainbtn-" + i, hidden: true }));
  document.body.append(top, h("div", { class: "wrap" }, stepNav), main);
  panels.forEach(p => main.append(p));

  let current = 0;
  function show(i) {
    current = i; TTS.stop();
    panels.forEach((p, j) => { p.hidden = j !== i; stepBtns[j].setAttribute("aria-selected", String(j === i)); });
    state.visited[i] = true; state.step = i; save(); updateProgress();
    stepBtns[i].scrollIntoView({ block: "nearest", inline: "nearest" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function nextBtn(i) {
    if (i >= STEPS.length - 1) return null;
    return h("div", { class: "next-row" }, h("button", { class: "btn primary", type: "button", onclick: () => show(i + 1) }, "Next: " + STEPS[i + 1] + " →"));
  }

  /* ---------- activities ---------- */
  const TYPE_LABEL = { match: "Match", sort: "Sort", gap: "Complete", tiles: "Put in order", rewrite: "Rewrite", tf: "True or false", write: "Write", speak: "Speak", voice: "Voice practice" };
  function activity(a, id, label) {
    const card = h("article", { class: "card activity", id: "act-" + id });
    card.append(h("div", { class: "activity-head" }, h("h3", { html: md(a.title) }), h("span", { class: "tag" }, label + " · " + (TYPE_LABEL[a.type] || ""))));
    if (a.prompt) card.append(h("p", { class: "muted", html: md(a.prompt) }));
    const fb = h("div", { class: "feedback", "aria-live": "polite" });
    const ctx = { id: id, fb: fb, result(score, total) {
      fb.className = "feedback " + (score === total ? "ok" : "part");
      fb.textContent = score === total ? "Excellent! " + score + "/" + total + " correct." : score + "/" + total + " correct. Check the red answers and try again.";
      if (id !== "check") markDone(id, score, total);
    } };
    const body = (BUILD[a.type] || (() => h("p", null, "Unknown activity type: " + a.type)))(a, ctx);
    card.append(body, fb);
    return card;
  }
  function controls(onCheck, onReset, extra) {
    return h("div", { class: "row" },
      h("button", { class: "btn primary", type: "button", onclick: onCheck }, "Check answers"),
      h("button", { class: "btn", type: "button", onclick: onReset }, "Try again"), extra || null);
  }

  const BUILD = {
    match(a, ctx) {
      const lefts = a.pairs.map((p, i) => ({ t: p[0], i: i }));
      const rights = shuffleNotSame(a.pairs.map((p, i) => ({ t: p[1], i: i })));
      const map = {}; let sel = null;
      const wrap = h("div", { class: "match" });
      const L = h("div", { class: "col" }), R = h("div", { class: "col" });
      const lb = lefts.map(l => h("button", { type: "button", onclick: () => clickL(l.i) }));
      const rb = rights.map(r => h("button", { type: "button", "data-i": r.i, onclick: () => clickR(r.i) }));
      function draw() {
        const order = Object.keys(map).map(Number);
        lefts.forEach((l, k) => { const b = lb[k]; b.className = (sel === l.i ? "sel" : "") + (l.i in map ? " paired" : "");
          b.innerHTML = (l.i in map ? '<span class="pairno">' + (order.indexOf(l.i) + 1) + "</span>" : "") + md(l.t); });
        rights.forEach((r, k) => { const b = rb[k]; const owner = order.find(x => map[x] === r.i);
          b.className = owner != null ? "paired" : "";
          b.innerHTML = (owner != null ? '<span class="pairno">' + (order.indexOf(owner) + 1) + "</span>" : "") + md(r.t); });
      }
      function clickL(i) { if (i in map) { delete map[i]; sel = null; } else sel = sel === i ? null : i; draw(); }
      function clickR(i) {
        const owner = Object.keys(map).map(Number).find(x => map[x] === i);
        if (owner != null) { delete map[owner]; draw(); return; }
        if (sel == null) { ctx.fb.className = "feedback part"; ctx.fb.textContent = "First choose an item on the left."; return; }
        map[sel] = i; sel = null; ctx.fb.textContent = ""; draw();
      }
      lb.forEach(b => L.append(b)); rb.forEach(b => R.append(b)); wrap.append(L, R); draw();
      return h("div", { class: "stack" }, h("p", { class: "hint" }, "Choose an item on the left, then its match on the right. Choose a pair again to undo."), wrap,
        controls(() => {
          let s = 0; lefts.forEach((l, k) => { const ok = map[l.i] === l.i; if (ok) s++; lb[k].classList.toggle("is-right", ok); lb[k].classList.toggle("is-wrong", !ok); });
          ctx.result(s, lefts.length);
        }, () => { for (const k in map) delete map[k]; sel = null; lb.forEach(b => b.classList.remove("is-right", "is-wrong")); draw(); ctx.fb.textContent = ""; }));
    },

    sort(a, ctx) {
      let sel = null;
      const pool = h("div", { class: "pool", "aria-label": "Items to sort" });
      const chips = a.items.map((it, i) => {
        const c = h("span", { class: "chipitem", draggable: "true", tabindex: "0", role: "button", "data-i": i, html: md(it.text) });
        c.addEventListener("click", e => { e.stopPropagation(); select(c); });
        c.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(c); } });
        c.addEventListener("dragstart", e => { sel = c; e.dataTransfer.setData("text/plain", String(i)); });
        return c;
      });
      function select(c) { if (sel) sel.classList.remove("sel"); sel = sel === c ? null : c; if (sel) sel.classList.add("sel"); }
      function drop(target) { if (!sel) return; sel.classList.remove("sel", "is-right", "is-wrong"); target.append(sel); sel = null; }
      function zone(el, target) {
        el.addEventListener("click", () => drop(target));
        el.addEventListener("dragover", e => { e.preventDefault(); el.classList.add("over"); });
        el.addEventListener("dragleave", () => el.classList.remove("over"));
        el.addEventListener("drop", e => { e.preventDefault(); el.classList.remove("over"); drop(target); });
      }
      zone(pool, pool);
      const bins = a.bins.map((name, b) => { const items = h("div", { class: "items" }); const el = h("div", { class: "bin", "data-b": b, tabindex: "0" }, h("h4", { html: md(name) }), items);
        el.addEventListener("keydown", e => { if (e.key === "Enter") drop(items); }); zone(el, items); el._items = items; return el; });
      function reset() { shuffle(chips).forEach(c => { c.classList.remove("sel", "is-right", "is-wrong"); pool.append(c); }); sel = null; ctx.fb.textContent = ""; }
      reset();
      return h("div", { class: "stack" }, h("p", { class: "hint" }, "Drag each card to a box, or tap a card and then tap the box."), pool, h("div", { class: "bins" }, bins),
        controls(() => {
          let s = 0; chips.forEach(c => { const binEl = c.closest(".bin"); const ok = binEl && Number(binEl.dataset.b) === a.items[c.dataset.i].bin;
            if (ok) s++; c.classList.toggle("is-right", !!ok); c.classList.toggle("is-wrong", !ok); });
          ctx.result(s, chips.length);
        }, reset));
    },

    gap(a, ctx) {
      const inputs = [];
      const ol = h("ol", { class: "gaps" }, a.items.map(line => {
        const li = h("li");
        line.split(/\[\[(.+?)\]\]/).forEach((part, k) => {
          if (k % 2 === 0) { if (part) li.append(h("span", { html: md(part) })); return; }
          const ans = part.split("|");
          const inp = h("input", { class: "gap", type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": "Answer " + (inputs.length + 1) });
          inp.style.width = Math.max(5, Math.max.apply(null, ans.map(x => x.length)) + 2) + "ch";
          inp._ans = ans; inputs.push(inp); li.append(inp);
        });
        return li;
      }));
      const bank = a.bank ? h("div", { class: "bank", "aria-label": "Word bank" }, shuffle(a.bank === true ? inputs.map(i => i._ans[0]) : a.bank).map(w => h("span", null, w))) : null;
      const show = h("button", { class: "btn", type: "button", hidden: true, onclick() { inputs.forEach(i => { if (!i.classList.contains("is-right")) { i.value = i._ans[0]; i.classList.remove("is-wrong"); } }); } }, "Show answers");
      return h("div", { class: "stack" }, bank, ol, controls(() => {
        let s = 0; inputs.forEach(i => { const ok = i._ans.some(x => norm(x) === norm(i.value)); if (ok) s++; i.classList.toggle("is-right", ok); i.classList.toggle("is-wrong", !ok); });
        show.hidden = false; ctx.result(s, inputs.length);
      }, () => { inputs.forEach(i => { i.value = ""; i.classList.remove("is-right", "is-wrong"); }); show.hidden = true; ctx.fb.textContent = ""; }, show));
    },

    tiles(a, ctx) {
      const rows = a.items.map(it => {
        const words = it.a.split(" ");
        const line = h("div", { class: "answer-line", "aria-label": "Your sentence" });
        const bank = h("div", { class: "tile-bank" });
        const sol = h("div", { class: "solution", hidden: true });
        const tiles = shuffleNotSame(words).map(w => h("button", { class: "tile", type: "button", onclick(e) {
          const t = e.currentTarget; (t.parentNode === bank ? line : bank).append(t); row.classList.remove("is-right", "is-wrong"); sol.hidden = true;
        } }, w));
        tiles.forEach(t => bank.append(t));
        const row = h("div", { class: "tiles-item" }, it.hint ? h("span", { class: "hint", html: md(it.hint) }) : null, line, bank, sol);
        return { row: row, line: line, bank: bank, tiles: tiles, it: it, sol: sol };
      });
      return h("div", { class: "stack" }, h("p", { class: "hint" }, "Tap the words in the right order. Tap a word again to send it back."), rows.map(r => r.row), controls(() => {
        let s = 0; rows.forEach(r => {
          const got = [...r.line.children].map(t => t.textContent).join(" ");
          const ok = [r.it.a].concat(r.it.alt || []).some(x => norm(x) === norm(got)) && r.bank.children.length === 0;
          if (ok) s++; r.row.classList.toggle("is-right", ok); r.row.classList.toggle("is-wrong", !ok);
          r.sol.hidden = ok; r.sol.textContent = ok ? "" : "Answer: " + r.it.a;
        });
        ctx.result(s, rows.length);
      }, () => { rows.forEach(r => { shuffleNotSame(r.tiles).forEach(t => r.bank.append(t)); r.row.classList.remove("is-right", "is-wrong"); r.sol.hidden = true; }); ctx.fb.textContent = ""; }));
    },

    rewrite(a, ctx) {
      const rows = a.items.map((it, i) => {
        const inp = h("input", { type: "text", autocomplete: "off", spellcheck: "false", "aria-label": "Your answer for sentence " + (i + 1) });
        const sol = h("div", { class: "solution", hidden: true });
        return { el: h("div", { class: "rw" }, h("span", { class: "q", html: (i + 1) + ". " + md(it.q) }), it.hint ? h("span", { class: "hint", html: md(it.hint) }) : null, inp, sol), inp: inp, sol: sol, it: it };
      });
      return h("div", { class: "stack" }, rows.map(r => r.el), controls(() => {
        let s = 0; rows.forEach(r => { const ok = r.it.a.some(x => norm(x) === norm(r.inp.value)); if (ok) s++;
          r.inp.classList.toggle("is-right", ok); r.inp.classList.toggle("is-wrong", !ok); r.sol.hidden = ok; r.sol.textContent = "Answer: " + r.it.a[0]; });
        ctx.result(s, rows.length);
      }, () => { rows.forEach(r => { r.inp.value = ""; r.inp.classList.remove("is-right", "is-wrong"); r.sol.hidden = true; }); ctx.fb.textContent = ""; }));
    },

    tf(a, ctx) {
      const rows = a.items.map(it => {
        let val = null;
        const opts = [true, false].map(v => h("button", { type: "button", "aria-pressed": "false", onclick() { val = v; opts.forEach(o => o.setAttribute("aria-pressed", String(o === this))); row.classList.remove("is-right", "is-wrong"); } }, v ? "True" : "False"));
        const row = h("div", { class: "tf" }, h("span", { html: md(it.s) }), h("div", { class: "opts" }, opts));
        return { row: row, get: () => val, it: it, opts: opts };
      });
      return h("div", { class: "stack" }, h("div", null, rows.map(r => r.row)), controls(() => {
        let s = 0; rows.forEach(r => { const ok = r.get() === r.it.a; if (ok) s++; r.row.classList.toggle("is-right", ok); r.row.classList.toggle("is-wrong", !ok); });
        ctx.result(s, rows.length);
      }, () => { rows.forEach(r => { r.opts.forEach(o => o.setAttribute("aria-pressed", "false")); r.row.classList.remove("is-right", "is-wrong"); }); ctx.fb.textContent = ""; }));
    },

    write(a, ctx) {
      const ta = h("textarea", { class: "write", id: "write-" + ctx.id, "aria-label": "Your text", placeholder: "Write your text here…" });
      ta.value = state.drafts[ctx.id] || "";
      const counter = h("span", { class: "counter" });
      const words = () => (ta.value.trim().match(/\S+/g) || []).length;
      function count() { const n = words(); counter.textContent = n + " words" + (a.minWords ? " · aim for " + a.minWords + "–" + (a.maxWords || a.minWords + 30) : ""); }
      ta.addEventListener("input", () => { state.drafts[ctx.id] = ta.value; save(); count(); }); count();
      const bank = a.bank ? h("div", { class: "stack" }, h("span", { class: "hint" }, "Useful language (tap to add):"),
        h("div", { class: "pick" }, a.bank.map(w => h("button", { type: "button", onclick() {
          const s = ta.selectionStart || ta.value.length; const pre = ta.value.slice(0, s); const sep = pre && !/\s$/.test(pre) ? " " : "";
          ta.value = pre + sep + w + " " + ta.value.slice(s); ta.focus(); ta.dispatchEvent(new Event("input"));
        } }, w)))) : null;
      const checklist = a.checklist ? h("div", { class: "stack" }, h("strong", null, "Before you send, check:"),
        h("ul", { class: "checklist" }, a.checklist.map((c, i) => h("li", null, h("label", null, h("input", { type: "checkbox", id: "chk-" + ctx.id + "-" + i }), h("span", { html: md(c) })))))) : null;
      const name = h("input", { type: "text", id: "name-" + ctx.id, autocomplete: "name" });
      const group = h("input", { type: "text", id: "group-" + ctx.id, placeholder: "e.g. 412" });
      try { name.value = localStorage.getItem("med:name") || ""; group.value = localStorage.getItem("med:group") || ""; } catch (e) { /* ignore */ }
      const msg = h("span", { class: "note", "aria-live": "polite" });
      const endpoint = C.writingEndpoint;
      function text() { return "Name: " + name.value + "\nGroup: " + group.value + "\nUnit: " + U.title + "\nTask: " + strip(a.title) + "\n\n" + ta.value.trim(); }
      function ready() {
        if (!name.value.trim() || !group.value.trim()) { msg.textContent = "Write your name and group first."; return false; }
        if (a.minWords && words() < a.minWords) { msg.textContent = "Your text has " + words() + " words. Write at least " + a.minWords + "."; return false; }
        try { localStorage.setItem("med:name", name.value.trim()); localStorage.setItem("med:group", group.value.trim()); } catch (e) { /* ignore */ }
        return true;
      }
      const send = endpoint ? h("button", { class: "btn primary", type: "button", onclick() {
        if (!ready()) return;
        send.disabled = true; msg.textContent = "Sending…";
        fetch(endpoint, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ date: new Date().toISOString(), name: name.value.trim(), group: group.value.trim(), unit: U.title, level: U.level, task: strip(a.title), words: words(), text: ta.value.trim() }) })
          .then(() => { msg.textContent = "Sent! Your adviser will receive your text."; markDone(ctx.id, 1, 1); })
          .catch(() => { msg.textContent = "Your text was not sent. Check your internet connection and try again, or download it."; })
          .finally(() => { send.disabled = false; });
      } }, "Send to my adviser") : null;
      return h("div", { class: "stack" },
        a.model ? h("div", { class: "model" }, h("div", { class: "eyebrow" }, "Model text"), h("p", { html: md(a.model) })) : null,
        bank, ta, counter, checklist,
        h("div", { class: "fields" }, h("label", { class: "field", for: name.id }, "Your name", name), h("label", { class: "field", for: group.id }, "Group", group)),
        h("div", { class: "row" }, send,
          h("button", { class: endpoint ? "btn" : "btn primary", type: "button", onclick() { if (!ready()) return; download(text(), U.slug + "-writing.txt"); msg.textContent = endpoint ? "Downloaded." : "Downloaded. Give this file to your adviser."; if (!endpoint) markDone(ctx.id, 1, 1); } }, "Download my text"),
          h("button", { class: "btn", type: "button", onclick() { copyText(text(), msg); } }, "Copy"), msg),
        endpoint ? null : h("p", { class: "note" }, "Online sending is not set up yet. Download your text and give it to your adviser."));
    },

    speak(a, ctx) {
      const parts = [];
      if (a.cards) parts.push(h("div", { class: "cards" }, a.cards.map(c => h("div", { class: "role" }, h("span", { class: "role-name" }, c.name),
        c.situation ? h("p", { html: md(c.situation) }) : null, c.tasks ? h("ul", null, c.tasks.map(t => h("li", { html: md(t) }))) : null))));
      if (a.language) parts.push(h("div", { class: "stack" }, h("strong", null, "Useful language"), h("div", { class: "bank" }, a.language.map(l => h("span", { html: md(l) })))));
      if (a.model) parts.push(h("details", null, h("summary", null, "Listen to a model"), h("div", { class: "stack", style: "margin-top:12px" }, player(a.model), dialogue(a.model))));
      parts.push(recorder(a, ctx));
      if (a.checklist) parts.push(h("div", { class: "stack" }, h("strong", null, "Listen to your recording. Did you…"),
        h("ul", { class: "checklist" }, a.checklist.map((c, i) => h("li", null, h("label", null, h("input", { type: "checkbox", id: "sp-" + ctx.id + "-" + i }), h("span", { html: md(c) })))))));
      const upId = "up-" + ctx.id;
      const up = h("input", { type: "checkbox", id: upId });
      up.checked = !!state.done[ctx.id];
      up.addEventListener("change", () => { if (up.checked) markDone(ctx.id, 1, 1); else { delete state.done[ctx.id]; save(); updateProgress(); refreshSkillCounts(); } });
      const platform = C.speakingPlatformUrl
        ? h("a", { href: C.speakingPlatformUrl, target: "_blank", rel: "noopener" }, C.speakingPlatformName || "your course platform")
        : (C.speakingPlatformName || "your course platform");
      parts.push(h("div", { class: "card sunk stack" }, h("strong", null, "Send your evidence"),
        h("p", null, "Download your recording and upload it to ", platform, ". Name the file with your name and the unit."),
        h("label", { class: "row", for: upId, style: "cursor:pointer" }, up, "I uploaded my recording")));
      return h("div", { class: "stack" }, parts);
    },

    /* Conversation with speech recognition. The student picks a role (A or B) from a.model;
       the computer reads the other role aloud and checks what the student says. */
    voice(a, ctx) {
      const roles = [];
      a.model.forEach(l => { if (roles.indexOf(l.who) < 0) roles.push(l.who); });
      roles.sort();
      const roleName = r => { const c = (a.cards || []).find(c => new RegExp("^Student " + r + "\\b").test(c.name));
        return c ? c.name.replace(/^Student \w+ · /, "") : "Student " + r; };
      let you = a.you || roles[0], hide = false;
      const results = {};
      const list = h("div", { class: "voice-list" });
      const support = h("div");
      const roleRow = h("div", { class: "row", role: "group", "aria-label": "Choose your role" });
      const roleBtns = roles.map(r => h("button", { class: "chip", type: "button", "aria-pressed": "false", onclick: () => { you = r; draw(); } }, "I'm " + roleName(r)));
      roleBtns.forEach(b => roleRow.append(b));
      const hideBtn = h("button", { class: "btn", type: "button", "aria-pressed": "false", onclick() {
        hide = !hide; hideBtn.setAttribute("aria-pressed", String(hide)); hideBtn.textContent = hide ? "Show my lines" : "Challenge: hide my lines"; draw();
      } }, "Challenge: hide my lines");
      if (!SR.ok) support.append(h("p", { class: "feedback part" }, "Voice recognition doesn't work in this browser. Open this page in Google Chrome or Microsoft Edge, or practice by reading your lines aloud."));

      function draw() {
        roleBtns.forEach((b, i) => b.setAttribute("aria-pressed", String(roles[i] === you)));
        list.innerHTML = ""; Object.keys(results).forEach(k => delete results[k]); ctx.fb.textContent = ""; ctx.fb.className = "feedback";
        a.model.forEach((l, i) => {
          const mine = l.who === you;
          const who = h("span", { class: "who" }, mine ? "You" : roleName(l.who));
          if (!mine) {
            list.append(h("div", { class: "voice-turn" }, who, h("div", { class: "stack", style: "gap:6px" },
              h("span", { html: md(l.line) }),
              h("div", null, h("button", { class: "btn small", type: "button", onclick: () => TTS.play([{ who: l.who === roles[0] ? "Man" : "Woman", line: l.line }]) }, "🔊 Listen")))));
            return;
          }
          const heard = h("div", { class: "heard", "aria-live": "polite" });
          const text = h("span", { class: hide ? "secret" : "", html: md(l.line) });
          const mic = h("button", { class: "btn primary small", type: "button", disabled: !SR.ok, onclick() {
            mic.disabled = true; mic.textContent = "🎙️ Listening…"; heard.className = "heard"; heard.textContent = "";
            SR.listen(alts => {
              mic.disabled = false; mic.textContent = "🎤 Say it again";
              if (!alts) { heard.textContent = "I didn't hear anything. Check your microphone and try again."; return; }
              const best = alts.map(t => ({ t: t, r: compare(l.line, t) })).sort((x, y) => y.r.score - x.r.score)[0];
              const ok = best.r.score >= 0.75;
              results[i] = ok || !!results[i];
              heard.className = "heard " + (ok ? "good" : "try");
              heard.innerHTML = "";
              heard.append(h("strong", null, ok ? "✓ Great! " : "Almost. "), "I heard: “" + best.t + "”");
              if (!ok && (best.r.score < 0.4 || best.r.missing.length > 6)) heard.append(h("div", { class: "note" }, "That doesn't match your line. Press 🔊 Model, listen, and try again."));
              else if (!ok && best.r.missing.length) heard.append(h("div", { class: "note" }, "Say these words clearly: ", h("b", null, best.r.missing.join(", "))));
              text.className = "";
              score();
            });
          } }, "🎤 Say it");
          const listen = h("button", { class: "btn small", type: "button", onclick: () => TTS.play([{ who: l.who === roles[0] ? "Man" : "Woman", line: l.line }]) }, "🔊 Model");
          list.append(h("div", { class: "voice-turn me" }, who, h("div", { class: "stack", style: "gap:6px" },
            text, h("div", { class: "row" }, mic, listen), heard)));
        });
      }
      function score() {
        const total = a.model.filter(l => l.who === you).length;
        const got = Object.keys(results).filter(k => results[k]).length;
        const tried = Object.keys(results).length;
        if (tried < total) { ctx.fb.className = "feedback part"; ctx.fb.textContent = got + "/" + total + " lines said clearly. Keep going!"; return; }
        ctx.fb.className = "feedback " + (got === total ? "ok" : "part");
        ctx.fb.textContent = got === total ? "Excellent! You said all " + total + " lines clearly. Now try the other role."
          : got + "/" + total + " lines said clearly. Try the orange ones again.";
        markDone(ctx.id, got, total);
      }
      draw();
      const parts = [support, h("div", { class: "stack", style: "gap:8px" }, h("strong", null, "1. Choose your role"), roleRow),
        h("div", { class: "stack", style: "gap:8px" }, h("strong", null, "2. Listen to your partner, then press 🎤 and say your line"),
          h("p", { class: "note" }, "Allow the microphone when your browser asks. Speak clearly, close to the microphone."), h("div", null, hideBtn)), list];
      if (a.language) parts.push(h("details", null, h("summary", null, "Useful language"), h("div", { class: "bank", style: "margin-top:10px" }, a.language.map(x => h("span", { html: md(x) })))));
      return h("div", { class: "stack" }, parts);
    }
  };

  /* ---------- speech recognition (Chrome, Edge, Safari) ---------- */
  const SR = {
    Ctor: window.SpeechRecognition || window.webkitSpeechRecognition,
    get ok() { return !!this.Ctor; },
    cur: null,
    listen(done) {
      if (this.cur) try { this.cur.abort(); } catch (e) { /* ignore */ }
      TTS.stop();
      const r = new this.Ctor(); this.cur = r;
      r.lang = "en-US"; r.interimResults = false; r.maxAlternatives = 5; r.continuous = false;
      let got = null;
      r.onresult = e => { got = Array.from(e.results[0]).map(x => x.transcript); };
      r.onerror = () => {};
      r.onend = () => { this.cur = null; done(got); };
      try { r.start(); } catch (e) { done(null); }
    }
  };
  const NUM = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",
    "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty", "fifty"];
  function words(s) {
    return norm(s).replace(/<[^>]+>/g, " ").replace(/\*/g, "")
      .replace(/won't/g, "will not").replace(/can't/g, "can not").replace(/cannot/g, "can not").replace(/n't/g, " not")
      .replace(/'re\b/g, " are").replace(/'ll\b/g, " will").replace(/'ve\b/g, " have").replace(/'m\b/g, " am").replace(/'d\b/g, " would")
      .replace(/\b(it|that|what|there|he|she|who|where|here|let)'s\b/g, (m, w) => w === "let" ? "let us" : w + " is")
      .replace(/\bokay\b/g, "ok").replace(/(\d+):(\d+)/g, "$1 $2").replace(/%/g, " percent")
      .replace(/[^a-z0-9' ]+/g, " ").split(/\s+/).filter(Boolean)
      .map(w => /^\d+$/.test(w) && +w <= 20 ? NUM[+w] : w).map(w => w.replace(/'s$/, ""));
  }
  function compare(target, said) {
    const t = words(target), s = words(said), pool = s.slice(), missing = [];
    let hit = 0;
    t.forEach(w => { const k = pool.indexOf(w); if (k >= 0) { hit++; pool.splice(k, 1); } else missing.push(w); });
    return { score: t.length ? hit / t.length : 0, missing: missing };
  }

  function recorder(a, ctx) {
    const max = a.seconds || 90;
    const box = h("div", { class: "recorder" });
    const can = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    if (!can) { box.append(h("p", { class: "note" }, "Recording is not available in this browser. Use the voice recorder on your phone instead.")); return box; }
    let rec = null, chunks = [], t0 = 0, tick = null, stream = null;
    const timer = h("span", { class: "timer" }, "0:00 / " + fmt(max));
    const dot = h("span", { class: "rec-dot", hidden: true });
    const out = h("div", { class: "row" });
    const btn = h("button", { class: "btn primary", type: "button", onclick: toggle }, "● Record");
    function fmt(s) { return Math.floor(s / 60) + ":" + String(Math.floor(s % 60)).padStart(2, "0"); }
    function toggle() {
      if (rec && rec.state === "recording") { rec.stop(); return; }
      navigator.mediaDevices.getUserMedia({ audio: true }).then(s => {
        stream = s; chunks = []; rec = new MediaRecorder(s);
        rec.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
        rec.onstop = () => {
          clearInterval(tick); dot.hidden = true; btn.textContent = "● Record again"; stream.getTracks().forEach(t => t.stop());
          const type = rec.mimeType || "audio/webm"; const ext = /mp4|aac/.test(type) ? "m4a" : /ogg/.test(type) ? "ogg" : "webm";
          const url = URL.createObjectURL(new Blob(chunks, { type: type }));
          out.innerHTML = ""; out.append(h("audio", { controls: true, src: url }), h("a", { class: "btn", href: url, download: U.slug + "-speaking-" + ctx.id + "." + ext }, "Download recording"));
        };
        rec.start(); t0 = Date.now(); dot.hidden = false; btn.textContent = "■ Stop";
        tick = setInterval(() => { const s = (Date.now() - t0) / 1000; timer.textContent = fmt(s) + " / " + fmt(max); if (s >= max) rec.stop(); }, 250);
      }).catch(() => { out.innerHTML = ""; out.append(h("p", { class: "note" }, "The microphone is blocked. Allow it in your browser settings, or record with your phone.")); });
    }
    box.append(btn, dot, timer, out);
    return box;
  }

  /* ---------- 1. Presentation ---------- */
  (function () {
    const P = U.presentation, p = panels[0];
    p.append(h("div", { class: "hero" },
      h("div", null,
        h("div", { class: "eyebrow" }, "Unit · " + U.level + (U.subject ? " · " + U.subject : "") + " · about " + U.minutes + " minutes"),
        h("h1", null, U.title),
        h("p", { class: "muted", html: md(P.situation) }),
        h("div", { class: "facts" }, (U.focus || []).map(f => h("span", null, f)))
      ),
      h("div", { class: "scene", "aria-hidden": "true" }, P.scene)
    ));
    if (P.warmup) {
      const msg = h("p", { class: "note", "aria-live": "polite" });
      const btns = P.warmup.options.map(o => h("button", { type: "button", "aria-pressed": String(state.warm.indexOf(o) >= 0), onclick(ev) {
        const b = ev.currentTarget, on = b.getAttribute("aria-pressed") !== "true";
        b.setAttribute("aria-pressed", String(on));
        state.warm = on ? state.warm.concat(o) : state.warm.filter(x => x !== o); save(); say();
      } }, o));
      function say() { msg.textContent = state.warm.length ? (P.warmup.response || "Great!") + " (" + state.warm.length + " selected)" : ""; }
      say();
      p.append(h("div", { class: "card stack" }, h("div", { class: "eyebrow" }, "Warm-up"), h("h3", { html: md(P.warmup.prompt) }), h("div", { class: "pick" }, btns), msg));
    }
    if (P.dialogue) {
      p.append(h("div", { class: "card stack" }, h("div", { class: "eyebrow" }, "Listen and read"),
        h("h3", null, P.dialogueTitle || "In context"), player(P.dialogue, P.audio), dialogue(P.dialogue)));
    }
    p.append(nextBtn(0));
  })();

  /* ---------- 2. Objectives ---------- */
  panels[1].append(
    h("div", { class: "stack" }, h("h2", null, "By the end of this unit…"),
      h("ol", { class: "objectives" }, U.objectives.map((o, i) => h("li", null, h("b", null, i + 1), h("span", { html: md(o) }))))),
    h("p", { class: "note" }, "You will rate these same skills in the self-assessment at the end."),
    nextBtn(1));

  /* ---------- 3. Explanation ---------- */
  (function () {
    const E = U.explanation, p = panels[2];
    p.append(h("h2", null, "Explanation"));
    if (E.vocab) p.append(h("div", { class: "card stack" }, h("h3", null, E.vocabTitle || "Vocabulary"),
      h("p", { class: "note" }, TTS.ok ? "Tap a word to hear it." : ""),
      h("div", { class: "vocab" }, E.vocab.map(v => h("button", { type: "button", onclick: () => TTS.play([{ line: v.say || v.word }]) },
        h("span", { class: "ico", "aria-hidden": "true" }, v.icon || ""), h("span", { class: "w" }, v.word), TTS.ok ? h("span", { class: "say" }, "🔊 listen") : null)))));
    (E.grammar || []).forEach(g => p.append(h("div", { class: "card stack" }, h("h3", null, g.title),
      g.intro ? h("p", { html: md(g.intro) }) : null,
      h("div", { class: "table-wrap" }, h("table", null,
        h("thead", null, h("tr", null, (g.head || ["Form", "Example"]).map(x => h("th", null, x)))),
        h("tbody", null, g.rows.map(r => h("tr", null, r.map(c => h("td", { html: md(c) }))))))),
      g.note ? h("p", { class: "note", html: md(g.note) }) : null)));
    if (E.watchOut) p.append(h("div", { class: "card stack" }, h("h3", null, "Watch out!"),
      h("div", { class: "watch" }, E.watchOut.map(w => h("div", null, h("span", { class: "wrong", html: md(w[0]) }), h("span", { class: "right", html: md(w[1]) }))))));
    if (E.check) p.append(activity(E.check, "check", "Quick check"));
    p.append(nextBtn(2));
  })();

  /* ---------- 4. Practice ---------- */
  (function () {
    const p = panels[3];
    p.append(h("div", { class: "stack" }, h("h2", null, "Practice"), h("p", { class: "muted" }, "Do the four skills in any order. Your progress is saved on this device.")));
    const bar = h("div", { class: "skills", role: "tablist", "aria-label": "Skills" });
    const counts = {};
    const subpanels = SKILLS.map((s, i) => {
      const S = U.skills[s.key] || { activities: [] };
      const small = h("small"); counts[s.key] = small;
      const b = h("button", { class: "skill-btn", type: "button", role: "tab", id: s.id + "-btn", "aria-controls": s.id, "aria-selected": String(i === 0), onclick: () => pick(i) }, s.name, small);
      bar.append(b);
      const sec = h("section", { class: "stack", id: s.id, role: "tabpanel", "aria-labelledby": s.id + "-btn", hidden: i !== 0 });
      if (S.intro) sec.append(h("p", { class: "muted", html: md(S.intro) }));
      if (S.script) sec.append(h("div", { class: "card source" }, h("div", { class: "eyebrow" }, "Audio"),
        h("h3", null, S.title || "Listen"), player(S.script, S.audio),
        h("details", null, h("summary", null, "Read the transcript (after you finish the activities)"), h("div", { style: "margin-top:12px" }, dialogue(S.script)))));
      if (S.text) sec.append(h("div", { class: "card source" }, h("div", { class: "eyebrow" }, "Read"), h("h3", null, S.title || "Reading"),
        h("div", { class: "reading-text" }, S.text.map(t => t.author
          ? h("div", { class: "post" }, h("div", { class: "author" }, t.author), h("p", { html: md(t.body) }))
          : h("p", { html: md(t.body || t) })))));
      S.activities.forEach((a, j) => sec.append(activity(a, s.key + "-" + j, s.name + " · Activity " + (j + 1))));
      return { btn: b, sec: sec };
    });
    function pick(i) {
      TTS.stop();
      subpanels.forEach((x, j) => { x.sec.hidden = j !== i; x.btn.setAttribute("aria-selected", String(j === i)); });
    }
    refreshSkillCounts = () => SKILLS.forEach(s => {
      const acts = (U.skills[s.key] || { activities: [] }).activities;
      const d = acts.filter((a, j) => state.done[s.key + "-" + j]).length;
      counts[s.key].textContent = d + " of " + acts.length + " done";
    });
    refreshSkillCounts();
    p.append(bar); subpanels.forEach(x => p.append(x.sec)); p.append(nextBtn(3));
  })();

  /* ---------- 5. Self-assessment ---------- */
  (function () {
    const p = panels[4], S = U.selfAssessment;
    p.append(h("div", { class: "stack" }, h("h2", null, "How well can you do it?"),
      h("p", { class: "muted" }, "Rate each statement. Be honest: this is for you, not for a grade.")));
    const list = h("div", { class: "card" }, h("div", { class: "legend" }, h("span", null, "1 = not yet"), h("span", null, "5 = I can do it well")));
    S.forEach((item, i) => {
      const scale = h("div", { class: "scale", role: "group", "aria-label": "Rating for: " + strip(item.can) });
      for (let n = 1; n <= 5; n++) scale.append(h("button", { type: "button", "aria-pressed": String(state.self[i] === n), onclick() {
        state.self[i] = n; save();
        [...scale.children].forEach((b, k) => b.setAttribute("aria-pressed", String(k + 1 === n)));
        summarize(); updateProgress();
      } }, n));
      list.append(h("div", { class: "can" }, h("span", { html: md(item.can) }), scale));
    });
    const avg = h("div", { class: "big" }, "–");
    const msg = h("div", { class: "stack" });
    const summaryCard = h("div", { class: "card summary" }, h("div", null, avg, h("div", { class: "note" }, "average out of 5")), msg);
    function summarize() {
      const vals = S.map((x, i) => state.self[i]).filter(Boolean);
      msg.innerHTML = "";
      if (!vals.length) { avg.textContent = "–"; msg.append(h("p", { class: "muted" }, "Your summary appears here when you rate the statements.")); return; }
      const a = vals.reduce((x, y) => x + y, 0) / vals.length;
      avg.textContent = a.toFixed(1);
      const low = S.filter((x, i) => state.self[i] && state.self[i] <= 2);
      const high = S.filter((x, i) => state.self[i] >= 4);
      const practiced = allActs.filter(id => state.done[id]).length;
      msg.append(h("p", null, "Activities completed: ", h("strong", null, practiced + " of " + allActs.length)));
      if (vals.length < S.length) msg.append(h("p", { class: "muted" }, "Rate all " + S.length + " statements to finish the unit."));
      if (high.length) msg.append(h("p", null, h("strong", null, "Strong: "), high.map(x => strip(x.can).replace(/^I can /, "")).join("; ") + "."));
      if (low.length) msg.append(h("div", null, h("strong", null, "Review next: "), h("ul", null, low.map(x => h("li", null, x.review || strip(x.can))))));
      else if (vals.length === S.length) msg.append(h("p", null, "Well done! You are ready for the next unit."));
    }
    summarize();
    const copyMsg = h("span", { class: "note", "aria-live": "polite" });
    function resultText() {
      const lines = ["English for Medicine — " + U.title + " (" + U.level + ")", new Date().toLocaleDateString("en-GB"), ""];
      S.forEach((x, i) => lines.push((state.self[i] || "-") + "/5  " + strip(x.can)));
      lines.push("", "Activities completed: " + allActs.filter(id => state.done[id]).length + " of " + allActs.length);
      return lines.join("\n");
    }
    p.append(list, summaryCard, h("div", { class: "row" },
      h("button", { class: "btn", type: "button", onclick() { copyText(resultText(), copyMsg); } }, "Copy my results"),
      h("button", { class: "btn", type: "button", onclick() { download(resultText(), U.slug + "-self-assessment.txt"); } }, "Download my results"),
      h("a", { class: "btn primary", href: C.homeUrl || "../" }, "Back to all units"), copyMsg));
  })();

  function copyText(text, msgEl) {
    const done = () => { msgEl.textContent = "Copied."; };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, () => { msgEl.textContent = "Copy didn't work. Use Download instead."; });
    else msgEl.textContent = "Copy isn't available here. Use Download instead.";
  }
  function download(text, name) {
    const a = h("a", { href: URL.createObjectURL(new Blob([text], { type: "text/plain" })), download: name });
    document.body.append(a); a.click(); a.remove();
  }

  /* ---------- start ---------- */
  document.title = U.title + " · English for Medicine";
  show(typeof state.step === "number" ? state.step : 0);
})();
