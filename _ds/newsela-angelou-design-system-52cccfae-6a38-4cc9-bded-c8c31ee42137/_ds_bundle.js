/* @ds-bundle: {"format":4,"namespace":"NewselaAngelouDesignSystem_52cccf","components":[{"name":"AlertBanner","sourcePath":"components/AlertBanner.tsx"},{"name":"AnatomyNote","sourcePath":"components/AnatomyNote.tsx"},{"name":"ArticleCard","sourcePath":"components/ArticleCard.tsx"},{"name":"Badge","sourcePath":"components/Badge.tsx"},{"name":"Button","sourcePath":"components/Button.tsx"},{"name":"Chip","sourcePath":"components/Chip.tsx"},{"name":"Divider","sourcePath":"components/Divider.tsx"},{"name":"Icon","sourcePath":"components/Icon.tsx"},{"name":"Inspect","sourcePath":"components/Inspect.tsx"},{"name":"Link","sourcePath":"components/Link.tsx"},{"name":"TextInput","sourcePath":"components/TextInput.tsx"},{"name":"Toggletips","sourcePath":"components/Toggletips.tsx"}],"sourceHashes":{"Student Binder/data.js":"a9c52b604878","Student Binder/render.js":"efd8f12d72a2","components/AlertBanner.tsx":"e2d91529b888","components/AnatomyNote.tsx":"8551b2d37396","components/ArticleCard.tsx":"b651fcf6cb6a","components/Badge.tsx":"717c0b195ff5","components/Button.tsx":"19fde612298e","components/Chip.tsx":"9e09ee02908f","components/Divider.tsx":"e614a6427002","components/Icon.tsx":"da215bf99bdb","components/Inspect.tsx":"9226b046526b","components/Link.tsx":"482e52d0ddae","components/TextInput.tsx":"b697117216f1","components/Toggletips.tsx":"89d094b028b4","components/tweaks-panel.jsx":"4f181eb354cd","preview/tweaks-panel.jsx":"d259e3a86f73","ui_kits/newsela-web/App.jsx":"071bd69c9124","ui_kits/newsela-web/ArticleGrid.jsx":"ff6242dfa17d","ui_kits/newsela-web/ArticleReader.jsx":"d6a2db31c585","ui_kits/newsela-web/AssignModal.jsx":"9ed8ea18eaf5","ui_kits/newsela-web/GlobalNav.jsx":"3ad8ceaca9d0","ui_kits/newsela-web/Primitives.jsx":"c9f8787ee511","ui_kits/newsela-web/Sidebar.jsx":"63ff7d9f0d91"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NewselaAngelouDesignSystem_52cccf = window.NewselaAngelouDesignSystem_52cccf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// Student Binder/data.js
try { (() => {
/* Student Binder — shared data model */
window.BINDER_DATA = {
  student: {
    name: 'Maya Thompson',
    grade: 'Grade 7',
    initials: 'MT'
  },
  filters: {
    dateRange: 'This school year',
    dateRanges: ['This school year', 'This month', 'Last 7 days', 'All time'],
    classes: ['All classes', 'ELA — Period 2', 'Social Studies — Period 4', 'Science — Period 6'],
    languages: ['All languages', 'English', 'Spanish']
  },
  // Scoped to the selected date range (default: this school year)
  stats: [{
    label: 'Average article Lexile',
    value: '858',
    unit: 'L',
    hint: '48 articles'
  }, {
    label: 'Quiz average',
    value: '88',
    unit: '%',
    hint: '27 quizzes'
  }, {
    label: 'Quizzes taken',
    value: '27',
    unit: '',
    hint: 'this year'
  }],
  work: [{
    assigned: 'Oct 1, 2025',
    completed: 'Oct 2, 2025',
    article: 'How Volcanoes Shape the Land',
    subject: 'Science',
    activity: 'Quiz',
    score: '100%',
    scoreKind: 'high',
    lexile: '850L',
    annotations: 5,
    teacher: 'Mr. Adler'
  }, {
    assigned: 'Sep 24, 2025',
    completed: 'Sep 26, 2025',
    article: 'Voices of the Civil Rights Movement',
    subject: 'Social Studies',
    activity: 'Quiz',
    score: '88%',
    scoreKind: 'high',
    lexile: '910L',
    annotations: 3,
    teacher: 'Ms. Rivera'
  }, {
    assigned: 'Sep 22, 2025',
    completed: null,
    article: 'Robots in the Classroom',
    subject: 'Science',
    activity: 'Quiz',
    score: null,
    scoreKind: 'pending',
    lexile: '880L',
    annotations: 1,
    teacher: 'Ms. Rivera'
  }, {
    assigned: 'Sep 15, 2025',
    completed: 'Sep 18, 2025',
    article: 'A Poem Worth Repeating',
    subject: 'ELA',
    activity: 'Write prompt',
    score: 'Submitted',
    scoreKind: 'write',
    lexile: '780L',
    annotations: 6,
    teacher: 'Mr. Adler'
  }, {
    assigned: 'Sep 10, 2025',
    completed: 'Sep 12, 2025',
    article: 'The History of the Vote',
    subject: 'Social Studies',
    activity: 'Quiz',
    score: '75%',
    scoreKind: 'mid',
    lexile: '900L',
    annotations: 2,
    teacher: 'Ms. Rivera'
  }, {
    assigned: 'Sep 3, 2025',
    completed: 'Sep 5, 2025',
    article: 'Why the Ocean Is Getting Louder',
    subject: 'Science',
    activity: 'Quiz',
    score: '90%',
    scoreKind: 'high',
    lexile: '830L',
    annotations: 4,
    teacher: 'Ms. Rivera'
  }],
  wordWall: {
    level: 4,
    points: 72,
    pointsMax: 100,
    wordsCollected: 48,
    words: [{
      word: 'resilience',
      phonetic: '/rɪˈzɪl.jəns/',
      respell: 'rih-ZIL-yuhns',
      def: 'The ability to recover quickly from difficulty or to spring back into shape.',
      example: 'The community showed great resilience after the storm, rebuilding within a year.'
    }, {
      word: 'suffrage',
      phonetic: '/ˈsʌf.rɪdʒ/',
      respell: 'SUHF-rij',
      def: 'The right to vote in political elections.',
      example: 'The 19th Amendment extended suffrage to women in 1920.'
    }, {
      word: 'ecosystem',
      phonetic: '/ˈiː.koʊˌsɪs.təm/',
      respell: 'EE-koh-sis-tuhm',
      def: 'A community of living things interacting with their physical environment.',
      example: 'A single fallen log can become a whole ecosystem for insects and fungi.'
    }, {
      word: 'sediment',
      phonetic: '/ˈsed.ɪ.mənt/',
      respell: 'SED-uh-muhnt',
      def: 'Solid material that settles to the bottom of a liquid.',
      example: 'Layers of sediment at the riverbed slowly hardened into rock.'
    }, {
      word: 'metaphor',
      phonetic: '/ˈmet.ə.fɔːr/',
      respell: 'MET-uh-for',
      def: 'A figure of speech describing one thing as if it were another.',
      example: '"Time is a thief" is a metaphor for how quickly moments pass.'
    }, {
      word: 'migration',
      phonetic: '/maɪˈɡreɪ.ʃən/',
      respell: 'my-GRAY-shuhn',
      def: 'The seasonal movement of people or animals from one region to another.',
      example: 'The monarch butterfly migration stretches thousands of miles.'
    }, {
      word: 'democracy',
      phonetic: '/dɪˈmɒk.rə.si/',
      respell: 'dih-MOK-ruh-see',
      def: 'A system of government in which power is held by the people through voting.',
      example: 'In a democracy, citizens elect leaders to represent them.'
    }, {
      word: 'erosion',
      phonetic: '/ɪˈroʊ.ʒən/',
      respell: 'ih-ROH-zhuhn',
      def: 'The gradual wearing away of soil or rock by wind or water.',
      example: 'Erosion carved the deep canyon over millions of years.'
    }, {
      word: 'tributary',
      phonetic: '/ˈtrɪb.jə.ter.i/',
      respell: 'TRIB-yuh-ter-ee',
      def: 'A river or stream that flows into a larger river or lake.',
      example: 'The creek is a tributary that feeds the Mississippi River.'
    }, {
      word: 'canopy',
      phonetic: '/ˈkæn.ə.pi/',
      respell: 'KAN-uh-pee',
      def: 'The uppermost layer of leaves and branches in a forest.',
      example: 'Sunlight barely reaches the ground beneath the thick canopy.'
    }, {
      word: 'ballot',
      phonetic: '/ˈbæl.ət/',
      respell: 'BAL-uht',
      def: 'A process or paper used to cast a secret vote in an election.',
      example: 'She marked her ballot and slid it into the box.'
    }, {
      word: 'habitat',
      phonetic: '/ˈhæb.ɪ.tæt/',
      respell: 'HAB-ih-tat',
      def: 'The natural home or environment of an animal or plant.',
      example: 'Wetlands are an important habitat for migrating birds.'
    }, {
      word: 'current',
      phonetic: '/ˈkɜːr.ənt/',
      respell: 'KUR-uhnt',
      def: 'A continuous flow of water, air, or electricity in one direction.',
      example: 'A strong ocean current pulled the buoy out to sea.'
    }, {
      word: 'orbit',
      phonetic: '/ˈɔːr.bɪt/',
      respell: 'OR-bit',
      def: 'The curved path of an object around a star, planet, or moon.',
      example: 'The satellite completes one orbit of Earth every 90 minutes.'
    }, {
      word: 'delta',
      phonetic: '/ˈdel.tə/',
      respell: 'DEL-tuh',
      def: 'A triangular area of land where a river deposits sediment as it meets the sea.',
      example: 'The Nile delta is some of the most fertile farmland in Egypt.'
    }, {
      word: 'gravity',
      phonetic: '/ˈɡræv.ɪ.ti/',
      respell: 'GRAV-ih-tee',
      def: 'The force that pulls objects toward one another, such as toward Earth.',
      example: 'Gravity is what makes a dropped apple fall to the ground.'
    }]
  },
  recommended: [{
    subject: 'Science',
    title: 'The Secret Language of Trees',
    powerWords: 6,
    levels: 5,
    readTime: 7
  }, {
    subject: 'Social Studies',
    title: 'How a Bill Becomes a Law',
    powerWords: 5,
    levels: 5,
    readTime: 6
  }, {
    subject: 'ELA',
    title: 'Reading Between the Lines',
    powerWords: 4,
    levels: 5,
    readTime: 5
  }, {
    subject: 'News',
    title: 'Cities Racing to Cool Down',
    powerWords: 7,
    levels: 5,
    readTime: 8
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "Student Binder/data.js", error: String((e && e.message) || e) }); }

// Student Binder/render.js
try { (() => {
/* Student Binder — render layer (vanilla). Drives all four frames from BINDER_DATA. */
(function () {
  const D = window.BINDER_DATA;
  const SUBJECT = {
    'ELA': {
      c: 'var(--product-ela-500)',
      bg: 'var(--product-ela-25)',
      fg: 'var(--product-ela-700)'
    },
    'Social Studies': {
      c: 'var(--product-socialstudies-500)',
      bg: 'var(--product-socialstudies-25)',
      fg: 'var(--product-socialstudies-700)'
    },
    'Science': {
      c: 'var(--product-science-500)',
      bg: 'var(--product-science-25)',
      fg: 'var(--product-science-700)'
    },
    'News': {
      c: 'var(--ui-core-500)',
      bg: 'var(--ui-core-25)',
      fg: 'var(--ui-core-700)'
    }
  };
  const ICON = {
    search: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
    close: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    audio: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 010 7"/><path d="M18.5 6a9 9 0 010 12"/></svg>',
    annotate: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>',
    ext: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>',
    spark: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>'
  };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  })[c]);
  function select(label, options, id) {
    return `<label class="fld">
      <span class="fld-lbl">${esc(label)}</span>
      <span class="sel">
        <select id="${id}" aria-label="${esc(label)}">${options.map((o, i) => `<option${i === 0 ? ' selected' : ''}>${esc(o)}</option>`).join('')}</select>
        <span class="sel-ic" aria-hidden="true">${ICON.chevron}</span>
      </span>
    </label>`;
  }
  function scoreBadge(row) {
    if (row.scoreKind === 'pending') return `<span class="pill pill--pending">In progress</span>`;
    if (row.scoreKind === 'write') return `<span class="pill pill--write">Submitted</span>`;
    const kind = row.scoreKind === 'mid' ? 'mid' : 'high';
    return `<span class="pill pill--${kind}">${esc(row.score)}</span>`;
  }

  /* ---------------- Your Progress ---------------- */
  function renderProgress(mount) {
    const f = D.filters;
    const filterBar = `
      <form class="filters" role="search" aria-label="Filter your work">
        ${select('Date range', f.dateRanges, mount.id + '-dr')}
        ${select('Class', f.classes, mount.id + '-cls')}
        ${select('Language', f.languages, mount.id + '-lang')}
        <label class="fld fld--search">
          <span class="fld-lbl">Search</span>
          <span class="srch">
            <span class="srch-ic" aria-hidden="true">${ICON.search}</span>
            <input type="search" placeholder="Search by article or teacher" aria-label="Search by article title or teacher">
          </span>
        </label>
      </form>`;
    const tiles = `
      <section class="prog" aria-labelledby="${mount.id}-ph">
        <h2 id="${mount.id}-ph">Your progress</h2>
        <p class="prog-sub">Based on <strong>${esc(D.filters.dateRange)}</strong></p>
        <div class="tiles">
          ${D.stats.map(s => `
            <div class="tile">
              <div class="tile-lbl">${esc(s.label)}</div>
              <div class="tile-val">${esc(s.value)}<span class="tile-unit">${esc(s.unit)}</span></div>
              <div class="tile-hint">${esc(s.hint)}</div>
            </div>`).join('')}
        </div>
      </section>`;

    // Desktop table
    const table = `
      <table class="work-tbl">
        <caption class="sr-only">Your work, sorted by date assigned, newest first</caption>
        <thead>
          <tr>
            <th scope="col">Assigned</th><th scope="col">Completed</th><th scope="col">Article</th>
            <th scope="col">Activity</th><th scope="col">Score</th><th scope="col">Lexile</th>
            <th scope="col">Annotations</th><th scope="col">Teacher</th>
          </tr>
        </thead>
        <tbody>
          ${D.work.map(r => `
            <tr>
              <td>${esc(r.assigned)}</td>
              <td>${r.completed ? esc(r.completed) : '<span class="muted">—</span>'}</td>
              <td class="td-article"><a href="#" class="art-link">${esc(r.article)}${ICON.ext}</a><span class="art-subj" style="--sc:${SUBJECT[r.subject].fg}">${esc(r.subject)}</span></td>
              <td>${esc(r.activity)}</td>
              <td>${scoreBadge(r)}</td>
              <td>${esc(r.lexile)}</td>
              <td><span class="anno">${ICON.annotate}${r.annotations}</span></td>
              <td>${esc(r.teacher)}</td>
            </tr>`).join('')}
        </tbody>
      </table>`;

    // Mobile cards
    const cards = `
      <ul class="work-cards">
        ${D.work.map(r => `
          <li class="wcard">
            <div class="wcard-top">
              <span class="art-subj" style="--sc:${SUBJECT[r.subject].fg}">${esc(r.subject)}</span>
              ${scoreBadge(r)}
            </div>
            <a href="#" class="art-link wcard-title">${esc(r.article)}${ICON.ext}</a>
            <dl class="wcard-meta">
              <div><dt>Activity</dt><dd>${esc(r.activity)}</dd></div>
              <div><dt>Lexile</dt><dd>${esc(r.lexile)}</dd></div>
              <div><dt>Annotations</dt><dd><span class="anno">${ICON.annotate}${r.annotations}</span></dd></div>
              <div><dt>Teacher</dt><dd>${esc(r.teacher)}</dd></div>
              <div><dt>Assigned</dt><dd>${esc(r.assigned)}</dd></div>
              <div><dt>Completed</dt><dd>${r.completed ? esc(r.completed) : '—'}</dd></div>
            </dl>
          </li>`).join('')}
      </ul>`;
    mount.innerHTML = `
      <header class="page-head">
        <p class="eyebrow">Student binder</p>
        <h1>${esc(D.student.name)}</h1>
        <p class="page-head-sub">${esc(D.student.grade)}</p>
      </header>
      ${filterBar}
      ${tiles}
      <section class="work" aria-labelledby="${mount.id}-wh">
        <h2 id="${mount.id}-wh">Your work</h2>
        <div class="work-body">${table}${cards}</div>
      </section>`;
  }

  /* ---------------- Word Wall ---------------- */
  function renderWordWall(mount) {
    const w = D.wordWall;
    const pct = Math.round(w.points / w.pointsMax * 100);
    const progress = `
      <section class="level" aria-labelledby="${mount.id}-lh">
        <div class="level-row">
          <div class="level-badge" aria-hidden="true">${w.level}</div>
          <div class="level-copy">
            <h2 id="${mount.id}-lh">Level ${w.level}</h2>
            <p class="level-sub">${w.wordsCollected} words collected</p>
          </div>
        </div>
        <div class="bar" role="progressbar" aria-valuenow="${w.points}" aria-valuemin="0" aria-valuemax="${w.pointsMax}" aria-label="Points toward Level ${w.level + 1}">
          <div class="bar-fill" style="width:${pct}%"></div>
        </div>
        <p class="bar-lbl"><strong>${w.points}</strong> of ${w.pointsMax} points to Level ${w.level + 1}</p>
      </section>`;
    const grid = `
      <section class="words" aria-labelledby="${mount.id}-wh">
        <h2 id="${mount.id}-wh">Collected words</h2>
        <ul class="word-grid">
          ${w.words.map((word, i) => `
            <li><button class="word-tile" data-word="${i}">${esc(word.word)}</button></li>`).join('')}
        </ul>
      </section>`;
    const recs = `
      <section class="recs" aria-labelledby="${mount.id}-rh">
        <div class="recs-head">
          <span class="recs-spark" aria-hidden="true">${ICON.spark}</span>
          <h2 id="${mount.id}-rh">Collect points with power words</h2>
        </div>
        <p class="recs-sub">Read these to grow your word wall.</p>
        <ul class="rec-grid">
          ${D.recommended.map(a => {
      const s = SUBJECT[a.subject];
      return `<li class="rec-card">
              <div class="rec-thumb" style="--sc:${s.c};--sbg:${s.bg}">
                <span class="rec-eyebrow" style="--sc:${s.fg}">${esc(a.subject)}</span>
                <span class="rec-pw">${a.powerWords} power words</span>
              </div>
              <div class="rec-body">
                <h3 class="rec-title">${esc(a.title)}</h3>
                <p class="rec-meta">${a.levels} reading levels · ${a.readTime} min read</p>
                <button class="btn btn--primary btn--sm">Read article</button>
              </div>
            </li>`;
    }).join('')}
        </ul>
      </section>`;
    mount.innerHTML = `
      <header class="page-head">
        <p class="eyebrow">Student binder</p>
        <h1>Word Wall</h1>
        <p class="page-head-sub">${esc(D.student.name)} · ${esc(D.student.grade)}</p>
      </header>
      ${progress}
      ${grid}
      ${recs}`;
    wireWords(mount);
  }
  function wireWords(mount) {
    const screen = mount.closest('.frame-screen') || mount;
    const scrim = document.createElement('div');
    scrim.className = 'sheet-scrim';
    scrim.hidden = true;
    const sheet = document.createElement('div');
    sheet.className = 'sheet';
    sheet.hidden = true;
    sheet.setAttribute('role', 'dialog');
    sheet.setAttribute('aria-modal', 'true');
    sheet.setAttribute('aria-labelledby', mount.id + '-def-word');
    screen.appendChild(scrim);
    screen.appendChild(sheet);
    let lastFocus = null;
    function open(i) {
      const word = D.wordWall.words[i];
      lastFocus = document.activeElement;
      sheet.innerHTML = `
        <div class="sheet-grip" aria-hidden="true"></div>
        <button class="sheet-close" aria-label="Close definition">${ICON.close}</button>
        <div class="def">
          <h3 id="${mount.id}-def-word" class="def-word">${esc(word.word)}</h3>
          <div class="def-say">
            <span class="def-phon">${esc(word.phonetic)}</span>
            <button class="def-audio" aria-label="Play pronunciation of ${esc(word.word)}">${ICON.audio}<span>${esc(word.respell)}</span></button>
          </div>
          <div class="def-block">
            <p class="def-role">Definition</p>
            <p class="def-text">${esc(word.def)}</p>
          </div>
          <div class="def-block">
            <p class="def-role">Example</p>
            <p class="def-ex">${esc(word.example)}</p>
          </div>
        </div>`;
      scrim.hidden = false;
      sheet.hidden = false;
      requestAnimationFrame(() => {
        scrim.classList.add('is-open');
        sheet.classList.add('is-open');
      });
      sheet.querySelector('.sheet-close').focus();
      sheet.querySelector('.def-audio').addEventListener('click', pulseAudio);
    }
    function pulseAudio(e) {
      const b = e.currentTarget;
      b.classList.add('is-playing');
      setTimeout(() => b.classList.remove('is-playing'), 600);
    }
    function close() {
      scrim.classList.remove('is-open');
      sheet.classList.remove('is-open');
      setTimeout(() => {
        scrim.hidden = true;
        sheet.hidden = true;
      }, 220);
      if (lastFocus) lastFocus.focus();
    }
    mount.querySelectorAll('.word-tile').forEach(b => b.addEventListener('click', () => open(+b.dataset.word)));
    scrim.addEventListener('click', close);
    sheet.addEventListener('click', e => {
      if (e.target.closest('.sheet-close')) close();
    });
    screen.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !sheet.hidden) close();
    });
  }

  /* ---------------- Mount all frames ---------------- */
  function mountAll() {
    document.querySelectorAll('[data-page]').forEach(el => {
      if (el.dataset.page === 'progress') renderProgress(el);else if (el.dataset.page === 'wordwall') renderWordWall(el);
    });
  }
  if (document.readyState !== 'loading') mountAll();else document.addEventListener('DOMContentLoaded', mountAll);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "Student Binder/render.js", error: String((e && e.message) || e) }); }

// components/AlertBanner.tsx
try { (() => {
/* global React */

/* AlertBanner — Figma: Alert Banner (Status × Type × Breakpoint × Dismissable × Has CTA × Number of CTA × Alignment).
   Simple: 8px 16px padding, 24px icon inline with 16px/1.5 body.
   Compound: 16px padding, 48px icon, Circular Bold 20px/1.2 title + 16px/1.5 body, 16px gap, 8px stack gap.
   Full-bleed — no radius. */

const AB_STATUS = {
  info: {
    fill: '#0A6EFA',
    icon: 'info-circle-hollow',
    dark: false
  },
  success: {
    fill: '#0F8670',
    icon: 'info-circle-hollow',
    dark: false
  },
  warning: {
    fill: '#FEC800',
    icon: 'warning',
    dark: true
  },
  error: {
    fill: '#DD3636',
    icon: 'error',
    dark: false
  }
};
const AB_FONT = "'Circular','Nunito',system-ui,sans-serif";
const AB_ICONS = {
  'info-circle-hollow': /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 14v9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 9.5h.01"
  })),
  'error': /*#__PURE__*/React.createElement("g", {
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 3l13 26H3z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.8",
    y: "12",
    width: "2.4",
    height: "9",
    rx: "1.2",
    fill: "#DD3636"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.8",
    y: "23",
    width: "2.4",
    height: "2.4",
    rx: "1.2",
    fill: "#DD3636"
  })),
  'warning': /*#__PURE__*/React.createElement("g", {
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 4l12 24H4z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.8",
    y: "12",
    width: "2.4",
    height: "9",
    rx: "1.2",
    fill: "#FEC800"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.8",
    y: "23",
    width: "2.4",
    height: "2.4",
    rx: "1.2",
    fill: "#FEC800"
  }))
};
function AlertBanner({
  status = 'info',
  bannerType = 'simple',
  title = 'Important message',
  alignment = 'left',
  dismissable = false,
  onDismiss,
  actions,
  children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
}) {
  const s = AB_STATUS[status] || AB_STATUS.info;
  const compound = bannerType === 'compound';
  const titleColor = s.dark ? '#1D1D1D' : '#FFFFFF';
  const bodyColor = s.dark ? '#424147' : '#FFFFFF';
  const iconSize = compound ? 48 : 24;
  const iconNode = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: iconSize,
    height: iconSize,
    "aria-hidden": "true",
    style: {
      flex: 'none',
      display: 'block'
    }
  }, AB_ICONS[s.icon]);
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      boxSizing: 'border-box',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 16,
      padding: compound ? 16 : '8px 16px',
      background: s.fill
    }
  }, compound && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      color: titleColor
    }
  }, iconNode), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: alignment === 'center' ? 'center' : 'flex-start',
      textAlign: alignment === 'center' ? 'center' : 'left'
    }
  }, compound && title && /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'stretch',
      fontFamily: AB_FONT,
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.2,
      color: titleColor,
      textAlign: alignment === 'center' ? 'center' : 'left'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 8,
      alignSelf: 'stretch'
    }
  }, !compound && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      color: bodyColor
    }
  }, iconNode), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '1 1 auto',
      textWrap: 'pretty',
      fontFamily: AB_FONT,
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: bodyColor
    }
  }, children)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center'
    }
  }, actions)), dismissable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      flex: 'none',
      width: 24,
      height: 24,
      padding: 0,
      border: 0,
      borderRadius: 4,
      background: 'transparent',
      color: bodyColor,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { AlertBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/AlertBanner.tsx", error: String((e && e.message) || e) }); }

// components/AnatomyNote.tsx
try { (() => {
/* global React */

/* AnatomyNote — Figma: Anatomy Note. Numbered spec annotation used on this system's own documentation
   frames. Pill: 24px tall, 24px radius, black fill, 4px/8px padding, Circular Book 12px/1.33 white, centered.
   Header: Circular Bold 16px/1.5 Neutral 700. Body: Circular Book 16px/1.5 #333. 8px stack gap, 375px wide. */

const AN_FONT = "'Circular','Nunito',system-ui,sans-serif";
function AnatomyNote({
  number = '1',
  header = 'Give the spec a header',
  width = 375,
  children = 'Use this area to describe the spec in as much detail as you’d like.'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      width,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      minWidth: 31,
      boxSizing: 'border-box',
      padding: '4px 8px',
      borderRadius: 24,
      background: '#000',
      fontFamily: AN_FONT,
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.33,
      textAlign: 'center',
      color: '#FFFFFF'
    }
  }, number), header && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: AN_FONT,
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.5,
      color: '#1D1D1D'
    }
  }, header)), /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'stretch',
      textWrap: 'pretty',
      fontFamily: AN_FONT,
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: '#333333'
    }
  }, children));
}
Object.assign(__ds_scope, { AnatomyNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/AnatomyNote.tsx", error: String((e && e.message) || e) }); }

// components/ArticleCard.tsx
try { (() => {
/* global React */

/* Sibling DS components are compiled in separate scopes; resolve from the namespace at render time. */
function DSButton(props) {
  const ns = window.NewselaAngelouDesignSystem_52cccf;
  const B = ns && ns.Button;
  return B ? React.createElement(B, props) : null;
}
function DSBadge(props) {
  const ns = window.NewselaAngelouDesignSystem_52cccf;
  const B = ns && ns.Badge;
  return B ? React.createElement(B, props) : null;
}
const SUBJECT_BADGE = {
  ELA: 'ela',
  'Social Studies': 'socialstudies',
  Science: 'science',
  News: 'blue'
};
const SUBJECT_PALETTE = {
  ELA: {
    bg: 'linear-gradient(135deg,#FFBCE4,#FD8C8D)',
    fg: '#A50000'
  },
  'Social Studies': {
    bg: 'linear-gradient(135deg,#FFBCE4,#EC4E9B)',
    fg: '#7D0145'
  },
  Science: {
    bg: 'linear-gradient(135deg,#FED0AD,#EB7E19)',
    fg: '#944E00'
  },
  News: {
    bg: 'linear-gradient(135deg,#A6CCFF,#6BA8FF)',
    fg: '#082C88'
  }
};
const CARD_ASSET_BASE = (() => {
  try {
    return new URL('.', document.currentScript && document.currentScript.src || location.href).href;
  } catch (e) {
    return '';
  }
})();
const DEFAULT_IMG = CARD_ASSET_BASE + 'components/assets/card-default.png';
const TEXT_SET_IMG = CARD_ASSET_BASE + 'components/assets/card-text-set.png';
const FEATURE_TAGS = {
  'Español': {
    bg: '#1D1D1D'
  },
  'Generation Genius': {
    bg: '#F16E00'
  },
  'Power Words': {
    bg: '#1D1D1D'
  }
};
const BookmarkIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "16",
  height: "16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
}));
function ArticleCard({
  subject = 'News',
  title,
  date = 'Oct 10, 2024',
  levels = 5,
  maturity = '4th-12th',
  readingLevel = '480L-1340L',
  onAssign,
  onOpen,
  onBookmark,
  image,
  cardType = 'teacher',
  contentType = 'News',
  metaTag = '5',
  showButtons = true,
  featureTag = null,
  showBadge = true,
  badgeColor,
  badgeStyle = 'filled',
  badgeIcon
}) {
  const p = SUBJECT_PALETTE[subject] || SUBJECT_PALETTE.News;
  const font = "'Circular','Nunito',system-ui,sans-serif";
  const defaultImg = ['Text set', 'Collection'].includes(contentType) ? TEXT_SET_IMG : DEFAULT_IMG;
  const imgSrc = image || defaultImg;
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: '#fff',
      border: '1px solid #E1E3E5',
      borderRadius: 12,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minWidth: 288,
      maxWidth: 440,
      fontFamily: font
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 9',
      position: 'relative',
      background: p.bg
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: imgSrc,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), showBadge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8
    }
  }, /*#__PURE__*/React.createElement(DSBadge, {
    color: badgeColor || SUBJECT_BADGE[subject] || 'blue',
    badgeStyle: badgeStyle,
    size: "md",
    icon: badgeIcon
  }, subject)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8
    }
  }, /*#__PURE__*/React.createElement(DSButton, {
    variant: "muted",
    size: "md",
    icon: BookmarkIcon,
    iconPosition: "only",
    style: {
      background: '#fff',
      borderRadius: 32
    },
    "aria-label": "Save article",
    onClick: onBookmark
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 8,
      left: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      background: '#1D1D1D',
      color: '#FFFFFF',
      fontFamily: font,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '16px',
      padding: '6px 8px',
      borderRadius: 2
    }
  }, contentType)), ['Video', 'Audio', 'Text set', 'Collection'].includes(contentType) && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 8,
      right: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      padding: '6px 8px',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 4,
      borderRadius: 2,
      background: '#1D1D1D',
      color: '#FFFFFF',
      fontFamily: font,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '16px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  })), metaTag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: '#5B5A61',
      lineHeight: '12px'
    }
  }, date), featureTag && FEATURE_TAGS[featureTag] && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      height: 16,
      padding: '0 4px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
      borderRadius: 2,
      background: FEATURE_TAGS[featureTag].bg,
      color: '#FFFFFF',
      fontFamily: font,
      fontWeight: 700,
      fontSize: 11,
      lineHeight: '12px',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      whiteSpace: 'nowrap'
    }
  }, featureTag)), /*#__PURE__*/React.createElement("h5", {
    onClick: onOpen,
    style: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.3,
      margin: 0,
      color: '#1D1D1D',
      cursor: 'pointer',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, title), cardType !== 'student' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      gap: 8,
      fontSize: 12,
      color: '#5B5A61'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      lineHeight: 1
    }
  }, "Maturity level: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700
    }
  }, maturity)), /*#__PURE__*/React.createElement("span", {
    style: {
      lineHeight: 1
    }
  }, "Reading level: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700
    }
  }, readingLevel))), cardType !== 'student' && showButtons && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 'auto',
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(DSButton, {
    variant: "muted",
    size: "lg",
    style: {
      flex: 1
    },
    onClick: onOpen
  }, "Preview"), /*#__PURE__*/React.createElement(DSButton, {
    variant: "muted",
    size: "lg",
    style: {
      flex: 1
    },
    onClick: onAssign
  }, "Assign"))));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ArticleCard.tsx", error: String((e && e.message) || e) }); }

// components/Badge.tsx
try { (() => {
/* global React */

/* Solid 500-level fills from the Newsela palette. `dark` = neutral-700 label (light fills); otherwise white. */
const BADGE_PALETTE = {
  // UI
  blue: {
    fill: '#0A6EFA',
    dark: false
  },
  red: {
    fill: '#DD3636',
    dark: false
  },
  green: {
    fill: '#0F8670',
    dark: false
  },
  yellow: {
    fill: '#FEC800',
    dark: true
  },
  black: {
    fill: '#1D1D1D',
    dark: false
  },
  gray: {
    fill: '#E1E3E5',
    dark: true
  },
  teal: {
    fill: '#42CAE7',
    dark: true
  },
  beige: {
    fill: '#E5C08C',
    dark: true
  },
  // Status
  info: {
    fill: '#0A6EFA',
    dark: false
  },
  danger: {
    fill: '#DD3636',
    dark: false
  },
  success: {
    fill: '#0F8670',
    dark: false
  },
  warning: {
    fill: '#FEC800',
    dark: true
  },
  neutral: {
    fill: '#1D1D1D',
    dark: false
  },
  // Product
  writing: {
    fill: '#8B1EA4',
    dark: false
  },
  ela: {
    fill: '#DD3636',
    dark: false
  },
  science: {
    fill: '#DA6D00',
    dark: false
  },
  socialstudies: {
    fill: '#DA2C81',
    dark: false
  },
  formative: {
    fill: '#E8AB14',
    dark: true
  }
};
const BADGE_SIZES = {
  lg: {
    height: 32,
    padding: '0 12px',
    iconSize: 16
  },
  md: {
    height: 24,
    padding: '0 10px',
    iconSize: 14
  },
  sm: {
    height: 16,
    padding: '0 6px',
    iconSize: 0
  }
};
const N700 = '#1D1D1D';

/* Named icon set — pass icon="check" etc., or any custom SVG node. */
const ic = paths => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, paths.map((d, i) => /*#__PURE__*/React.createElement("path", {
  key: i,
  d: d
})));
const BADGE_ICONS = {
  check: ic(['M20 6L9 17l-5-5']),
  star: ic(['M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z']),
  alert: ic(['M12 9v4', 'M12 17h.01', 'M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z']),
  info: ic(['M12 16v-4', 'M12 8h.01', 'M12 22a10 10 0 100-20 10 10 0 000 20z']),
  clock: ic(['M12 22a10 10 0 100-20 10 10 0 000 20z', 'M12 6v6l4 2']),
  book: ic(['M4 19.5A2.5 2.5 0 016.5 17H20', 'M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z']),
  pencil: ic(['M12 20h9', 'M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z']),
  flask: ic(['M10 2v6L4 20a1.5 1.5 0 001.4 2h13.2a1.5 1.5 0 001.4-2L14 8V2', 'M8 2h8'])
};
function Badge({
  color = 'info',
  size = 'md',
  badgeStyle = 'filled',
  icon,
  children
}) {
  const c = BADGE_PALETTE[color] || BADGE_PALETTE.info;
  const s = BADGE_SIZES[size] || BADGE_SIZES.md;
  const iconNode = typeof icon === 'string' ? BADGE_ICONS[icon] || null : icon;
  const showIcon = iconNode && size !== 'sm'; // icons not supported on 16px badges
  const label = c.dark ? N700 : '#fff';
  const styles = {
    filled: {
      background: c.fill,
      color: label,
      border: '1px solid transparent'
    },
    hollowed: {
      background: 'transparent',
      color: c.dark ? N700 : c.fill,
      border: `1px solid ${c.fill}`
    },
    flat: {
      background: '#fff',
      color: c.dark ? N700 : c.fill,
      border: '1px solid transparent'
    }
  };
  const v = styles[badgeStyle] || styles.filled;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      boxSizing: 'border-box',
      justifyContent: 'center',
      height: s.height,
      minWidth: 32,
      maxWidth: 176,
      fontFamily: "'Circular','Nunito',system-ui,sans-serif",
      /* label-xs: 12px / 16px line-height, Circular Book */
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '16px',
      padding: s.padding,
      borderRadius: 999,
      ...v
    }
  }, showIcon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      flex: 'none',
      width: s.iconSize,
      height: s.iconSize
    }
  }, iconNode), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, children));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge.tsx", error: String((e && e.message) || e) }); }

// components/Button.tsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */

const NW = {
  blue: 'var(--nw-blue, #082C88)',
  blue600: 'var(--nw-blue-600, #082C88)',
  blue700: 'var(--nw-blue-700, #082C88)',
  blue25: 'var(--nw-blue-25, #E5EFFF)',
  n700: '#1D1D1D',
  n300: '#8D8D96',
  n100: '#E1E3E5'
};
function Button({
  variant = 'primary',
  size = 'lg',
  state,
  icon,
  iconPosition = 'right',
  children,
  disabled,
  onClick,
  style: styleOverride,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const isHover = hover || state === 'hover';
  const isActive = active || state === 'active';
  const isFocus = state === 'focus';
  const sizes = {
    sm: {
      height: 24,
      padding: '0 10px',
      fontSize: 12
    },
    md: {
      height: 32,
      padding: '0 14px',
      fontSize: 14
    },
    lg: {
      height: 48,
      padding: '0 18px',
      fontSize: 16
    }
  };
  const palettes = {
    primary: {
      base: {
        background: NW.blue,
        color: '#fff',
        border: '1px solid transparent'
      },
      hover: {
        background: NW.blue600
      },
      active: {
        background: NW.blue700
      },
      divider: '#fff'
    },
    secondary: {
      base: {
        background: '#fff',
        color: NW.blue,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: NW.blue700
      },
      hover: {
        background: NW.blue25,
        borderColor: NW.blue600
      },
      active: {
        background: NW.blue25
      },
      divider: NW.blue700
    },
    ghost: {
      base: {
        background: 'transparent',
        color: NW.blue,
        border: '1px solid transparent'
      },
      hover: {
        background: NW.blue25
      },
      active: {
        background: NW.blue25
      },
      divider: null
    },
    muted: {
      base: {
        background: '#F7F8F8',
        color: NW.blue700,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E1E3E5'
      },
      hover: {
        background: '#EEF0F1',
        borderColor: '#CBCED1'
      },
      active: {
        background: '#E1E3E5'
      },
      divider: '#E1E3E5'
    },
    destructive: {
      base: {
        background: '#DD3636',
        color: '#fff',
        border: '1px solid transparent'
      },
      hover: {
        background: '#C32113'
      },
      active: {
        background: '#A50000'
      },
      divider: '#fff'
    }
  };
  const p = palettes[variant] || palettes.primary;
  const iconOnly = icon && iconPosition === 'only';
  const isCombo = icon && iconPosition === 'combo';
  const comboPad = size === 'lg' ? 16 : 8;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
    borderRadius: size === 'sm' ? 6 : 8,
    cursor: disabled ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap',
    fontFamily: "'Circular','Nunito',system-ui,sans-serif",
    fontWeight: 400,
    transition: 'all 180ms cubic-bezier(0.2,0,0,1)',
    ...sizes[size],
    ...(iconOnly ? {
      width: sizes[size].height,
      padding: 0
    } : null),
    ...(isCombo ? {
      padding: `0 ${comboPad}px`,
      gap: comboPad
    } : null),
    ...p.base,
    ...(isHover && !disabled ? p.hover : null),
    ...(isActive && !disabled ? p.active : null),
    ...(isFocus && !disabled ? {
      outline: `2px solid ${NW.blue}`,
      outlineOffset: 2
    } : null),
    ...(disabled ? {
      background: NW.n100,
      color: NW.n300,
      borderColor: 'transparent'
    } : null),
    ...styleOverride
  };
  const dividerColor = disabled ? NW.n300 : p.divider;
  const divider = dividerColor ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      alignSelf: 'stretch',
      width: 1,
      background: dividerColor,
      flex: 'none'
    }
  }) : null;
  const content = !icon ? children : iconPosition === 'only' ? icon : iconPosition === 'left' ? /*#__PURE__*/React.createElement(React.Fragment, null, icon, children) : iconPosition === 'combo' ? /*#__PURE__*/React.createElement(React.Fragment, null, children, divider, icon) : /*#__PURE__*/React.createElement(React.Fragment, null, children, icon);
  return /*#__PURE__*/React.createElement("button", _extends({
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button.tsx", error: String((e && e.message) || e) }); }

// components/Chip.tsx
try { (() => {
/* global React */

/* Chip — input (dismissible) or filter (toggleable). Text S book, sentence case.
   lg 32px / sm 24px, min-width 48px, fully rounded, 1px interior outline. */

const CHIP_COLORS = {
  grey: {
    base: {
      border: '#1D1D1D',
      bg: '#F0F1F2',
      text: '#424147'
    },
    hover: {
      border: '#1D1D1D',
      bg: 'linear-gradient(0deg, rgba(29,29,29,0.08) 0%, rgba(29,29,29,0.08) 100%), #EAEBEC'
    },
    active: {
      border: '#1D1D1D',
      bg: 'linear-gradient(0deg, rgba(29,29,29,0.08) 0%, rgba(29,29,29,0.08) 100%), #EAEBEC',
      text: '#1D1D1D'
    }
  }
};
function Chip({
  type = 'filter',
  size = 'lg',
  active = false,
  disabled = false,
  icon,
  onClick,
  onDismiss,
  children
}) {
  const [hover, setHover] = React.useState(false);
  const c = CHIP_COLORS.grey;
  const isActive = active && type === 'filter';
  const border = disabled ? 'transparent' : isActive ? c.active.border : hover ? c.hover.border : c.base.border;
  const bg = disabled ? 'rgba(234,235,236,0.40)' : isActive ? c.active.bg : hover ? c.hover.bg : c.base.bg;
  const text = disabled ? '#8D8D96' : isActive ? c.active.text : c.base.text;
  const lineHeight = 20; // Text S line height — icons match it
  const style = {
    display: 'inline-flex',
    height: size === 'sm' ? 24 : 32,
    minWidth: 48,
    padding: '0 8px',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    boxSizing: 'border-box',
    borderRadius: 100,
    border: `1px solid ${border}`,
    background: bg,
    color: text,
    fontFamily: "'Circular','Nunito',system-ui,sans-serif",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: lineHeight + 'px',
    whiteSpace: 'nowrap',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 120ms'
  };
  const iconBox = node => /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      flex: 'none',
      width: lineHeight,
      height: lineHeight,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, node);
  const dismissIcon = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "14",
    height: "14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  }));
  const checkIcon = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "14",
    height: "14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }));
  return /*#__PURE__*/React.createElement("button", {
    style: style,
    disabled: disabled,
    onClick: type === 'input' ? onDismiss || onClick : onClick,
    "aria-pressed": type === 'filter' ? isActive : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, icon && iconBox(icon), /*#__PURE__*/React.createElement("span", null, children), type === 'input' && iconBox(dismissIcon), type === 'filter' && isActive && iconBox(checkIcon));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Chip.tsx", error: String((e && e.message) || e) }); }

// components/Divider.tsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */

/* Divider — Figma: Divider (Tint × Orientation). 1px line at 16% opacity. */

const DV_TINTS = {
  light: 'rgb(29,29,29)',
  dark: 'rgb(255,255,255)'
};
function Divider({
  tint = 'light',
  orientation = 'horizontal',
  length,
  ...rest
}) {
  const color = DV_TINTS[tint] || DV_TINTS.light;
  const horizontal = orientation === 'horizontal';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    "aria-orientation": horizontal ? 'horizontal' : 'vertical',
    style: {
      flex: 'none',
      width: horizontal ? length ?? '100%' : 1,
      height: horizontal ? 1 : length ?? '100%',
      opacity: 0.16,
      backgroundColor: color
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Divider.tsx", error: String((e && e.message) || e) }); }

// components/Icon.tsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */

/* Icon — the kit's icon symbols (info-circle-hollow, error, warning, plus, close, bookmark-hollow).
   The .fig stores these as boolean operations with no exported geometry, so the paths are drawn to the
   kit's 32px frame and inherit `currentColor`. */

const IC_PATHS = {
  'info-circle-hollow': /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 14v9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 9.5h.01"
  })),
  'error': /*#__PURE__*/React.createElement("g", {
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 3l13 26H3z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.8",
    y: "12",
    width: "2.4",
    height: "9",
    rx: "1.2",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.8",
    y: "23",
    width: "2.4",
    height: "2.4",
    rx: "1.2",
    fill: "#fff"
  })),
  'warning': /*#__PURE__*/React.createElement("g", {
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 4l12 24H4z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.8",
    y: "12",
    width: "2.4",
    height: "9",
    rx: "1.2",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.8",
    y: "23",
    width: "2.4",
    height: "2.4",
    rx: "1.2",
    fill: "#fff"
  })),
  'plus': /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 7v18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 16h18"
  })),
  'close': /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24 8L8 24"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 8l16 16"
  })),
  'bookmark-hollow': /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5h16v22l-8-6-8 6z"
  }))
};
function Icon({
  name = 'info-circle-hollow',
  size = 24,
  label,
  ...rest
}) {
  const body = IC_PATHS[name] || IC_PATHS['info-circle-hollow'];
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: size,
    height: size,
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : 'true',
    style: {
      flex: 'none',
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  }, rest), body);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Icon.tsx", error: String((e && e.message) || e) }); }

// components/Inspect.tsx
try { (() => {
/* global React */

/* Inspect — Figma: Inspect (Property 1 = Bounds | Padding). Measurement overlays for documentation frames.
   Bounds: violet fill rgba(80,43,240,0.24) with a 0.5px rgb(80,43,240) inset ring.
   Padding: green fill rgba(142,216,116,0.45) with the measurement in Circular Book 6px/8px rgb(56,113,36). */

function Inspect({
  property = 'bounds',
  space,
  width = 16,
  height = 16,
  children
}) {
  const bounds = property !== 'padding';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      boxSizing: 'border-box',
      width,
      height,
      background: bounds ? 'rgba(80,43,240,0.24)' : 'rgba(142,216,116,0.45)',
      boxShadow: bounds ? 'inset 0 0 0 0.5px rgb(80,43,240)' : undefined,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, !bounds && space !== undefined && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Circular','Nunito',system-ui,sans-serif",
      fontWeight: 400,
      fontSize: 6,
      lineHeight: '8px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      color: 'rgb(56,113,36)'
    }
  }, space), children);
}
Object.assign(__ds_scope, { Inspect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Inspect.tsx", error: String((e && e.message) || e) }); }

// components/Link.tsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */

/* Link — Figma: Link (Size × Color × Has Icon × Icon Placement).
   Always underlined. X-Small transcribed from the kit (Circular Book 12px/1.33, 4px radius, 8px icon gap);
   the larger sizes follow the DS type scale (Text S/M/L). */

const LK_SIZES = {
  xsmall: {
    fontSize: 12,
    lineHeight: 1.33,
    iconSize: 12
  },
  small: {
    fontSize: 14,
    lineHeight: 1.43,
    iconSize: 14
  },
  medium: {
    fontSize: 16,
    lineHeight: 1.5,
    iconSize: 16
  },
  large: {
    fontSize: 20,
    lineHeight: 1.4,
    iconSize: 20
  }
};
const LK_COLORS = {
  navy: {
    rest: '#082C88',
    hover: '#0F3FDE'
  },
  blue: {
    rest: '#0A6EFA',
    hover: '#0F3FDE'
  },
  black: {
    rest: '#1D1D1D',
    hover: '#424147'
  },
  white: {
    rest: '#FFFFFF',
    hover: '#F0F1F2'
  }
};
function Link({
  size = 'medium',
  color = 'navy',
  href = '#',
  icon,
  iconPlacement = 'leading',
  children,
  ...rest
}) {
  const s = LK_SIZES[size] || LK_SIZES.medium;
  const c = LK_COLORS[color] || LK_COLORS.navy;
  const [hover, setHover] = React.useState(false);
  const iconNode = icon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: s.iconSize,
      height: s.iconSize,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      borderRadius: 4,
      fontFamily: "'Circular','Nunito',system-ui,sans-serif",
      fontWeight: 400,
      fontSize: s.fontSize,
      lineHeight: s.lineHeight,
      color: hover ? c.hover : c.rest,
      textDecoration: 'underline'
    }
  }, rest), iconPlacement === 'leading' && iconNode, /*#__PURE__*/React.createElement("span", null, children), iconPlacement === 'trailing' && iconNode);
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Link.tsx", error: String((e && e.message) || e) }); }

// components/TextInput.tsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */

/* TextInput — Figma: Text Input (Type × Label × State × PlaceholderText × Retain error space × Tooltip × Asterisk × Optional text).
   Label row: 4px 0 padding, 4px gap, Circular Bold 14px/1.14 Neutral 600; asterisk Blue 500.
   Field: 48px tall, 8px radius, white fill, 1px inset Neutral 400 ring, 16px padding.
   Error space: 20px row below the field, retained by default so layout does not shift. */

const TI_FONT = "'Circular','Nunito',system-ui,sans-serif";
const TI_RING = {
  default: '#77767A',
  focus: '#0A6EFA',
  error: '#DD3636',
  disabled: '#E1E3E5'
};
function TextInput({
  label = 'Field label',
  inputType = 'input',
  state = 'default',
  required = false,
  tooltip = false,
  onTooltipClick,
  optionalText,
  placeholder,
  errorMessage,
  retainErrorSpace = true,
  value,
  onChange,
  rows = 4,
  id,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const disabled = state === 'disabled';
  const error = state === 'error';
  const ring = disabled ? TI_RING.disabled : error ? TI_RING.error : focused ? TI_RING.focus : TI_RING.default;
  const inputId = id || React.useId();
  const isArea = inputType === 'textarea';
  const field = {
    boxSizing: 'border-box',
    width: '100%',
    minHeight: isArea ? undefined : 48,
    height: isArea ? undefined : 48,
    padding: isArea ? 16 : '0 16px',
    borderRadius: 8,
    border: 0,
    background: disabled ? '#F0F1F2' : '#FFFFFF',
    boxShadow: `inset 0 0 0 ${focused && !disabled ? 2 : 1}px ${ring}`,
    fontFamily: TI_FONT,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.5,
    color: disabled ? '#8D8D96' : '#1D1D1D',
    outline: 'none',
    resize: isArea ? 'vertical' : undefined
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: '4px 0',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: TI_FONT,
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1.14,
      color: '#424147'
    }
  }, label), required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: TI_FONT,
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1.14,
      color: '#0A6EFA'
    }
  }, "*"), optionalText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: TI_FONT,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.14,
      color: '#5B5A61'
    }
  }, optionalText), tooltip && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onTooltipClick,
    "aria-label": `More about ${typeof label === 'string' ? label : 'this field'}`,
    style: {
      width: 16,
      height: 16,
      padding: 0,
      border: 0,
      background: 'transparent',
      color: '#1D1D1D',
      cursor: 'pointer',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 14v9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 9.5h.01"
  })))), isArea ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": error || undefined,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: field
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "text",
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": error || undefined,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: field
  }, rest)), (retainErrorSpace || error && errorMessage) && /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 20,
      padding: '0 0 4px',
      boxSizing: 'border-box'
    }
  }, error && errorMessage && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: TI_FONT,
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.33,
      color: '#DD3636'
    }
  }, errorMessage)));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/TextInput.tsx", error: String((e && e.message) || e) }); }

// components/Toggletips.tsx
try { (() => {
/* global React */

/* Toggletip — Figma: Toggletips (Arrow × Arrow Position × Heading × CTA × Color).
   Bubble: 8px radius, 12px padding, 8px gap, 1px inset ring (--ui-neutral-100 #E1E3E5).
   Arrow: 9px deep, 18px across the edge — drawn as a rotated square so its own 1px ring continues the
   bubble's outline, and its inner half overlaps the bubble to hide the seam. Its face is inset 20px
   (left/right) or 16px (top/bottom) from the edge \u2014 just clear of the 8px corner radius. */

/* Colour variants: grey and white carry the Neutral 100 ring with dark type; dark is Neutral 700 with
   white type and a 16% white ring. */
const TT_THEMES = {
  grey: {
    fill: '#F0F1F2',
    ring: '#E1E3E5',
    heading: '#1D1D1D',
    body: '#424147',
    link: '#082C88'
  },
  white: {
    fill: '#FFFFFF',
    ring: '#E1E3E5',
    heading: '#1D1D1D',
    body: '#424147',
    link: '#082C88'
  },
  dark: {
    fill: '#1D1D1D',
    ring: 'rgba(255,255,255,0.16)',
    heading: '#FFFFFF',
    body: '#FFFFFF',
    link: '#FFFFFF'
  }
};
const TT_FONT = "'Circular','Nunito',system-ui,sans-serif";
const TT_DEPTH = 9; /* how far the arrow protrudes from the bubble */
const TT_SQ = TT_DEPTH * 2 / Math.SQRT2; /* rotated square whose diagonal is 18px */
const TT_OFF = TT_DEPTH - TT_SQ / 2; /* square's offset so its centre sits on the bubble edge */
const TT_EDGE_V = 20; /* left/right arrows: face inset from the top or bottom edge (clears the radius) */
const TT_EDGE_H = 16; /* top/bottom arrows: face inset from the left or right edge */
const TT_CROSS_V = TT_EDGE_V + TT_DEPTH - TT_SQ / 2;
const TT_CROSS_H = TT_EDGE_H + TT_DEPTH - TT_SQ / 2;

/* Which two sides of the rotated square face outward — the rest hide behind the bubble. */
const TT_BORDERS = {
  left: ['borderLeft', 'borderBottom'],
  right: ['borderTop', 'borderRight'],
  top: ['borderLeft', 'borderTop'],
  bottom: ['borderBottom', 'borderRight']
};
const TT_CLOSE = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "16",
  height: "16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M18 6L6 18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12"
}));
function Toggletips({
  arrow = 'left',
  arrowPosition = 'middle',
  color = 'grey',
  heading = 'This is a toggletip heading',
  ctaLabel,
  ctaHref = '#',
  onCtaClick,
  onClose,
  showClose = true,
  dismissOnOutsideClick = true,
  autoFocus = true,
  width = 300,
  children = 'This shows the max amount of text that should appear. If more is needed please use a modal instead.'
}) {
  const th = TT_THEMES[color] || TT_THEMES.grey;
  const fill = th.fill;
  const vertical = arrow === 'top' || arrow === 'bottom';
  /* Spec: a toggletip must always be dismissible, and the close button is required whenever the
     toggletip contains active elements such as a CTA. Outside click is a convenience, never the only exit. */
  const closeVisible = showClose || !!ctaLabel;
  const interactive = closeVisible || !!ctaLabel;
  const rootRef = React.useRef(null);
  const closeRef = React.useRef(null);

  /* Never auto-dismisses on a timer. Escape always closes; outside click closes unless opted out. */
  React.useEffect(() => {
    if (!onClose) return undefined;
    const onKeyDown = e => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    const onPointerDown = e => {
      if (!dismissOnOutsideClick) return;
      const el = rootRef.current;
      if (el && !el.contains(e.target)) onClose();
    };
    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      document.removeEventListener('pointerdown', onPointerDown, true);
    };
  }, [onClose, dismissOnOutsideClick]);
  React.useEffect(() => {
    if (autoFocus && closeVisible && closeRef.current) closeRef.current.focus();
  }, [autoFocus, closeVisible]);

  /* Rotated square, centred on the bubble edge: half protrudes as the arrow, half hides the ring seam. */
  const arrowStyle = {
    position: 'absolute',
    zIndex: 1,
    boxSizing: 'border-box',
    width: TT_SQ,
    height: TT_SQ,
    background: fill,
    transform: 'rotate(45deg)'
  };
  for (const side of TT_BORDERS[arrow] || TT_BORDERS.left) arrowStyle[side] = `1px solid ${th.ring}`;
  if (arrow === 'left') arrowStyle.left = TT_OFF;
  if (arrow === 'right') arrowStyle.right = TT_OFF;
  if (arrow === 'top') arrowStyle.top = TT_OFF;
  if (arrow === 'bottom') arrowStyle.bottom = TT_OFF;
  if (vertical) {
    if (arrowPosition === 'right') arrowStyle.right = TT_CROSS_H;else if (arrowPosition === 'middle') {
      arrowStyle.left = '50%';
      arrowStyle.transform = 'translateX(-50%) rotate(45deg)';
    } else arrowStyle.left = TT_CROSS_H;
  } else {
    if (arrowPosition === 'bottom') arrowStyle.bottom = TT_CROSS_V;else if (arrowPosition === 'middle') {
      arrowStyle.top = '50%';
      arrowStyle.transform = 'translateY(-50%) rotate(45deg)';
    } else arrowStyle.top = TT_CROSS_V;
  }
  const arrowNode = /*#__PURE__*/React.createElement("div", {
    style: arrowStyle
  });
  const closeButton = /*#__PURE__*/React.createElement("button", {
    ref: closeRef,
    type: "button",
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      flex: 'none',
      width: 24,
      height: 24,
      padding: 0,
      border: 0,
      borderRadius: 4,
      background: 'transparent',
      color: th.body,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, TT_CLOSE);
  const bubble = /*#__PURE__*/React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 8,
      padding: 12,
      borderRadius: 8,
      background: fill,
      boxShadow: `inset 0 0 0 1px ${th.ring}`
    }
  }, heading && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 8,
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      padding: '4px 0',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: TT_FONT,
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1.14,
      color: th.heading
    }
  }, heading)), closeVisible && closeButton), heading ? /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'stretch',
      textWrap: 'pretty',
      fontFamily: TT_FONT,
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.33,
      color: th.body
    }
  }, children) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 8,
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '1 1 auto',
      textWrap: 'pretty',
      fontFamily: TT_FONT,
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.33,
      color: th.body
    }
  }, children), closeVisible && closeButton), ctaLabel && /*#__PURE__*/React.createElement("a", {
    href: ctaHref,
    onClick: onCtaClick,
    style: {
      fontFamily: TT_FONT,
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.33,
      color: th.link,
      textDecoration: 'underline',
      whiteSpace: 'nowrap'
    }
  }, ctaLabel));
  const outer = {
    position: 'relative',
    boxSizing: 'border-box',
    width: vertical ? width : width + TT_DEPTH,
    paddingLeft: arrow === 'left' ? TT_DEPTH : 0,
    paddingRight: arrow === 'right' ? TT_DEPTH : 0,
    paddingTop: arrow === 'top' ? TT_DEPTH : 0,
    paddingBottom: arrow === 'bottom' ? TT_DEPTH : 0
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: rootRef,
    role: interactive ? 'dialog' : 'status',
    "aria-live": interactive ? undefined : 'polite',
    "aria-label": interactive && typeof heading === 'string' && heading ? heading : undefined,
    style: outer
  }, bubble, arrowNode);
}
Object.assign(__ds_scope, { Toggletips });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Toggletips.tsx", error: String((e && e.message) || e) }); }

// components/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// preview/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "preview/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsela-web/App.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
const {
  useState: useAppState,
  useEffect
} = React;
function Home({
  onOpenArticle
}) {
  const [filter, setFilter] = useAppState('all');
  const articles = [{
    id: 1,
    subject: 'Social Studies',
    title: 'How voting rights evolved in the American South',
    levels: 5,
    readTime: 8,
    lede: 'From the Voting Rights Act of 1965 to the Shelby County decision, the legal fight for the ballot has been long — and is far from settled.'
  }, {
    id: 2,
    subject: 'Science',
    title: "Volcanoes, explained: inside Earth's most powerful forces",
    levels: 5,
    readTime: 6
  }, {
    id: 3,
    subject: 'ELA',
    title: 'Why some readers are rediscovering the short story',
    levels: 5,
    readTime: 4
  }, {
    id: 4,
    subject: 'Core',
    title: 'Ocean heat broke records again this summer. Here is what that means.',
    levels: 5,
    readTime: 7
  }, {
    id: 5,
    subject: 'Aqua',
    title: 'The last time a total solar eclipse crossed North America',
    levels: 5,
    readTime: 5
  }, {
    id: 6,
    subject: 'Bisque',
    title: 'Inside the quiet library that became a town hall',
    levels: 5,
    readTime: 9
  }];
  const subjects = ['all', 'ELA', 'Social Studies', 'Science'];
  return /*#__PURE__*/React.createElement("main", {
    className: "nw-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nw-caps",
    style: {
      color: '#0A6EFA',
      marginBottom: 8
    }
  }, "Monday \xB7 April 21"), /*#__PURE__*/React.createElement("h1", {
    className: "nw-page-title"
  }, "Good morning, Maria."), /*#__PURE__*/React.createElement("p", {
    className: "nw-page-sub"
  }, "Today's top stories, curated for your Grade 6 classes."), /*#__PURE__*/React.createElement("div", {
    className: "nw-toolbar"
  }, subjects.map(s => /*#__PURE__*/React.createElement(Chip, {
    key: s,
    active: filter === s,
    onClick: () => setFilter(s)
  }, s === 'all' ? 'All subjects' : s)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "New text set"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Create assignment")), /*#__PURE__*/React.createElement("div", {
    className: "nw-section-title"
  }, "Top stories ", /*#__PURE__*/React.createElement("span", {
    className: "nw-caps"
  }, "Updated 6:00 AM")), /*#__PURE__*/React.createElement(ArticleGrid, {
    articles: articles.filter(a => filter === 'all' || a.subject === filter),
    onAssign: onOpenArticle,
    onOpen: onOpenArticle
  }));
}
function App() {
  const [view, setView] = useAppState('home');
  const [openArticle, setOpenArticle] = useAppState(null);
  const [showAssign, setShowAssign] = useAppState(false);
  const [toast, setToast] = useAppState(null);
  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(t);
    }
  }, [toast]);
  const handleOpen = article => {
    setOpenArticle(article);
    setView('reader');
  };
  const handleConfirm = ({
    classes,
    note
  }) => {
    setShowAssign(false);
    const count = classes.reduce((n, c) => n + c.students, 0);
    setToast({
      kind: 'success',
      title: 'Assignment created.',
      message: `${count} students notified.`
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalNav, {
    active: view === 'reader' ? 'content' : view,
    onNav: k => {
      setView(k);
      setOpenArticle(null);
    },
    product: "Social Studies"
  }), view === 'reader' && openArticle ? /*#__PURE__*/React.createElement(ArticleReader, {
    article: openArticle,
    onClose: () => {
      setView('home');
      setOpenArticle(null);
    },
    onAssign: () => setShowAssign(true)
  }) : /*#__PURE__*/React.createElement("div", {
    className: "nw-app"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: "articles"
  }), /*#__PURE__*/React.createElement(Home, {
    onOpenArticle: a => {
      setOpenArticle(a);
      setShowAssign(true);
    }
  })), showAssign && /*#__PURE__*/React.createElement(AssignModal, {
    article: openArticle,
    onClose: () => setShowAssign(false),
    onConfirm: handleConfirm
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement(Toast, _extends({}, toast, {
    onClose: () => setToast(null)
  }))));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsela-web/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsela-web/ArticleGrid.jsx
try { (() => {
/* global React */
/* Uses the DS ArticleCard from the compiled bundle. */
function ArticleGrid({
  articles,
  onAssign,
  onOpen
}) {
  const ns = window.NewselaAngelouDesignSystem_52cccf;
  const Card = ns && ns.ArticleCard;
  if (!Card) return null;
  const subjectMap = {
    Core: 'News',
    Aqua: 'News',
    Bisque: 'News'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "nw-article-grid"
  }, articles.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.id,
    subject: subjectMap[a.subject] || a.subject,
    title: a.title,
    date: a.date || 'Apr 21, 2026',
    maturity: a.maturity || '4th-12th',
    readingLevel: a.readingLevel || '480L-1340L',
    contentType: a.contentType || 'News',
    onAssign: () => onAssign?.(a),
    onOpen: () => onOpen?.(a)
  })));
}
Object.assign(window, {
  ArticleGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsela-web/ArticleGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsela-web/ArticleReader.jsx
try { (() => {
/* global React */
const {
  useState: useStateReader
} = React;
function ArticleReader({
  article,
  onClose,
  onAssign
}) {
  const [level, setLevel] = useStateReader(3);
  const levels = [{
    grade: 'MAX',
    label: 'Original'
  }, {
    grade: '12',
    label: 'Level 5'
  }, {
    grade: '8',
    label: 'Level 4'
  }, {
    grade: '6',
    label: 'Level 3'
  }, {
    grade: '4',
    label: 'Level 2'
  }, {
    grade: '2',
    label: 'Level 1'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "nw-reader"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nw-reader-toolbar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nw-icon-btn",
    onClick: onClose,
    "aria-label": "Back"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5M12 5l-7 7 7 7"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "nw-reader-crumbs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nw-badge nw-badge--socialstudies"
  }, article.subject), /*#__PURE__*/React.createElement("span", {
    className: "nw-reader-crumb-sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Grade 6\u20138")), /*#__PURE__*/React.createElement("div", {
    className: "nw-reader-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nw-btn nw-btn--ghost nw-btn--sm"
  }, "Save"), /*#__PURE__*/React.createElement("button", {
    className: "nw-btn nw-btn--primary nw-btn--sm",
    onClick: onAssign
  }, "Assign"))), /*#__PURE__*/React.createElement("div", {
    className: "nw-reader-levels"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nw-caps"
  }, "Reading Level"), /*#__PURE__*/React.createElement("div", {
    className: "nw-level-picker"
  }, levels.map((l, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: 'nw-level-chip' + (level === i ? ' is-active' : ''),
    onClick: () => setLevel(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "nw-level-grade"
  }, l.grade), /*#__PURE__*/React.createElement("span", {
    className: "nw-level-lbl"
  }, l.label))))), /*#__PURE__*/React.createElement("article", {
    className: "nw-article-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nw-article-hero",
    style: {
      background: 'linear-gradient(135deg,#FFBCE4,#EC4E9B)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "nw-caps nw-article-tag"
  }, "Social Studies \xB7 Civil Rights"), /*#__PURE__*/React.createElement("h1", {
    className: "nw-article-h1"
  }, article.title), /*#__PURE__*/React.createElement("p", {
    className: "nw-article-lede"
  }, article.lede), /*#__PURE__*/React.createElement("p", null, "In 1965, the Voting Rights Act was signed into law. It was meant to protect the right to vote for all Americans, regardless of race. But the story of voting rights in the South did not end there \u2014 it kept evolving, through decades of court battles, community organizing, and shifting political priorities."), /*#__PURE__*/React.createElement("p", null, "Today, voting rights remain a central question in American democracy. Historians point to three things that shaped the modern landscape: federal law, state-level policy, and the organized efforts of ordinary people who pushed for change."), /*#__PURE__*/React.createElement("h3", {
    className: "nw-article-h3"
  }, "Power Words"), /*#__PURE__*/React.createElement("div", {
    className: "nw-powerwords"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nw-pw"
  }, /*#__PURE__*/React.createElement("b", null, "suffrage"), " \u2014 the right to vote"), /*#__PURE__*/React.createElement("div", {
    className: "nw-pw"
  }, /*#__PURE__*/React.createElement("b", null, "disenfranchise"), " \u2014 to take away the right to vote"), /*#__PURE__*/React.createElement("div", {
    className: "nw-pw"
  }, /*#__PURE__*/React.createElement("b", null, "jurisdiction"), " \u2014 an area of legal authority"))));
}
Object.assign(window, {
  ArticleReader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsela-web/ArticleReader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsela-web/AssignModal.jsx
try { (() => {
/* global React */
const {
  useState: useStateAssign
} = React;
function AssignModal({
  article,
  onClose,
  onConfirm
}) {
  const [classes, setClasses] = useStateAssign([{
    id: 1,
    name: 'Grade 6 · Period 1',
    students: 28,
    checked: true
  }, {
    id: 2,
    name: 'Grade 6 · Period 3',
    students: 26,
    checked: true
  }, {
    id: 3,
    name: 'Grade 7 · Honors',
    students: 22,
    checked: false
  }]);
  const [note, setNote] = useStateAssign('');
  const toggle = id => setClasses(cs => cs.map(c => c.id === id ? {
    ...c,
    checked: !c.checked
  } : c));
  const selected = classes.filter(c => c.checked);
  const studentCount = selected.reduce((n, c) => n + c.students, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "nw-modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "nw-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("header", {
    className: "nw-modal-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nw-modal-eyebrow"
  }, "Assign article"), /*#__PURE__*/React.createElement("h4", {
    className: "nw-modal-title"
  }, article?.title || 'Assign to your class')), /*#__PURE__*/React.createElement("button", {
    className: "nw-icon-btn",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6l-12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "nw-modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nw-field-label",
    style: {
      marginBottom: 8
    }
  }, "Classes"), /*#__PURE__*/React.createElement("div", {
    className: "nw-class-list"
  }, classes.map(c => /*#__PURE__*/React.createElement("label", {
    key: c.id,
    className: "nw-class-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'nw-checkbox' + (c.checked ? ' is-checked' : '')
  }, c.checked && '✓'), /*#__PURE__*/React.createElement("div", {
    className: "nw-class-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nw-class-name"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "nw-class-meta"
  }, c.students, " students")), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: c.checked,
    onChange: () => toggle(c.id),
    style: {
      position: 'absolute',
      opacity: 0,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => toggle(c.id),
    style: {
      position: 'absolute',
      inset: 0,
      background: 'transparent',
      border: 0,
      cursor: 'pointer'
    },
    "aria-label": "Toggle"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "nw-field",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nw-field-label"
  }, "Note for students (optional)"), /*#__PURE__*/React.createElement("textarea", {
    className: "nw-input nw-textarea",
    placeholder: "e.g. Read this for Friday's discussion.",
    value: note,
    onChange: e => setNote(e.target.value)
  }))), /*#__PURE__*/React.createElement("footer", {
    className: "nw-modal-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nw-modal-summary"
  }, /*#__PURE__*/React.createElement("b", null, selected.length), " ", selected.length === 1 ? 'class' : 'classes', " \xB7 ", /*#__PURE__*/React.createElement("b", null, studentCount), " students"), /*#__PURE__*/React.createElement("div", {
    className: "nw-modal-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nw-btn nw-btn--ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "nw-btn nw-btn--primary",
    onClick: () => onConfirm?.({
      classes: selected,
      note
    })
  }, "Assign to ", selected.length)))));
}
Object.assign(window, {
  AssignModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsela-web/AssignModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsela-web/GlobalNav.jsx
try { (() => {
/* global React */
const {
  useState
} = React;
const NavChevron = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7.2807 11.6949L1.79289 6.20711C1.40237 5.81658 1.40237 5.18342 1.79289 4.79289C2.18342 4.40237 2.81658 4.40237 3.20711 4.79289L8 9.58579L12.7929 4.79289C13.1834 4.40237 13.8166 4.40237 14.2071 4.79289C14.5976 5.18342 14.5976 5.81658 14.2071 6.20711L8.7193 11.6949C8.71531 11.699 8.71128 11.7031 8.70721 11.7072C8.51193 11.9025 8.25597 12.0001 8 12.0001C7.74404 12.0001 7.48807 11.9025 7.29279 11.7072C7.28872 11.7031 7.28469 11.699 7.2807 11.6949Z",
  fill: "#424147"
}));
function GlobalNav({
  active = 'ela',
  onNav
}) {
  const items = [{
    key: 'ela',
    label: 'ELA'
  }, {
    key: 'social',
    label: 'Social Studies'
  }, {
    key: 'science',
    label: 'Science'
  }, {
    key: 'library',
    label: 'Content Library',
    chevron: true
  }, {
    key: 'classes',
    label: 'Classes',
    chevron: true
  }, {
    key: 'assignments',
    label: 'Assignments'
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "nw-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nw-nav-left"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nw-icon-btn",
    "aria-label": "Menu",
    style: {
      width: 32,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2ZM4 10C4 10.5304 3.78929 11.0391 3.41421 11.4142C3.03914 11.7893 2.53043 12 2 12C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10C0 9.46957 0.210714 8.96086 0.585786 8.58579C0.960859 8.21071 1.46957 8 2 8C2.53043 8 3.03914 8.21071 3.41421 8.58579C3.78929 8.96086 4 9.46957 4 10ZM2 20C2.53043 20 3.03914 19.7893 3.41421 19.4142C3.78929 19.0391 4 18.5304 4 18C4 17.4696 3.78929 16.9609 3.41421 16.5858C3.03914 16.2107 2.53043 16 2 16C1.46957 16 0.960859 16.2107 0.585786 16.5858C0.210714 16.9609 0 17.4696 0 18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20ZM12 2C12 2.53043 11.7893 3.03914 11.4142 3.41421C11.0391 3.78929 10.5304 4 10 4C9.46957 4 8.96086 3.78929 8.58579 3.41421C8.21071 3.03914 8 2.53043 8 2C8 1.46957 8.21071 0.960859 8.58579 0.585786C8.96086 0.210714 9.46957 0 10 0C10.5304 0 11.0391 0.210714 11.4142 0.585786C11.7893 0.960859 12 1.46957 12 2ZM18 4C18.5304 4 19.0391 3.78929 19.4142 3.41421C19.7893 3.03914 20 2.53043 20 2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0C17.4696 0 16.9609 0.210714 16.5858 0.585786C16.2107 0.960859 16 1.46957 16 2C16 2.53043 16.2107 3.03914 16.5858 3.41421C16.9609 3.78929 17.4696 4 18 4ZM12 10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12C9.46957 12 8.96086 11.7893 8.58579 11.4142C8.21071 11.0391 8 10.5304 8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8C10.5304 8 11.0391 8.21071 11.4142 8.58579C11.7893 8.96086 12 9.46957 12 10ZM18 12C18.5304 12 19.0391 11.7893 19.4142 11.4142C19.7893 11.0391 20 10.5304 20 10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8C17.4696 8 16.9609 8.21071 16.5858 8.58579C16.2107 8.96086 16 9.46957 16 10C16 10.5304 16.2107 11.0391 16.5858 11.4142C16.9609 11.7893 17.4696 12 18 12ZM12 18C12 18.5304 11.7893 19.0391 11.4142 19.4142C11.0391 19.7893 10.5304 20 10 20C9.46957 20 8.96086 19.7893 8.58579 19.4142C8.21071 19.0391 8 18.5304 8 18C8 17.4696 8.21071 16.9609 8.58579 16.5858C8.96086 16.2107 9.46957 16 10 16C10.5304 16 11.0391 16.2107 11.4142 16.5858C11.7893 16.9609 12 17.4696 12 18ZM18 20C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18C20 17.4696 19.7893 16.9609 19.4142 16.5858C19.0391 16.2107 18.5304 16 18 16C17.4696 16 16.9609 16.2107 16.5858 16.5858C16.2107 16.9609 16 17.4696 16 18C16 18.5304 16.2107 19.0391 16.5858 19.4142C16.9609 19.7893 17.4696 20 18 20Z",
    fill: "#1D1D1D"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Home",
    style: {
      display: 'inline-flex',
      width: 48,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center'
    },
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 39 39",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 0H0V39H39V0ZM18 31.5H7.5V7.5H18V31.5ZM31.5 31.5H21V7.5H25.0288C28.5 7.5 31.5 10.1897 31.5 13.4867V31.5Z",
    fill: "#0A6EFA"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "nw-nav-search"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "7",
    stroke: "#424147",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 15L20 20",
    stroke: "#424147",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", null, "Search"))), /*#__PURE__*/React.createElement("div", {
    className: "nw-nav-right"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "nw-nav-items"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.key,
    className: 'nw-nav-item' + (active === it.key ? ' is-active' : ''),
    onClick: e => {
      e.preventDefault();
      onNav?.(it.key);
    },
    href: "#"
  }, it.label, it.chevron && /*#__PURE__*/React.createElement(NavChevron, null)))), /*#__PURE__*/React.createElement("div", {
    className: "nw-account-pill"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nw-avatar"
  }, "MR"), /*#__PURE__*/React.createElement("span", {
    className: "nw-account-lbl"
  }, "ELA / SS / SCI"), /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.27392 8.93813L1.16789 4.83211C0.777369 4.44158 0.777369 3.80842 1.16789 3.41789C1.55842 3.02737 2.19158 3.02737 2.58211 3.41789L6 6.83579L9.41789 3.41789C9.80842 3.02737 10.4416 3.02737 10.8321 3.41789C11.2226 3.80842 11.2226 4.44158 10.8321 4.83211L6.72608 8.93813C6.71994 8.9446 6.7137 8.95101 6.70736 8.95736C6.51206 9.15265 6.25603 9.25022 6 9.25012C5.74397 9.25022 5.48794 9.15265 5.29264 8.95736C5.2863 8.95101 5.28006 8.9446 5.27392 8.93813Z",
    fill: "#424147"
  })))));
}
Object.assign(window, {
  GlobalNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsela-web/GlobalNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsela-web/Primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled,
  icon,
  ...rest
}) {
  const cn = ['nw-btn', `nw-btn--${variant}`, `nw-btn--${size}`, disabled ? 'is-disabled' : ''].join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cn,
    onClick: onClick,
    disabled: disabled
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "nw-btn-icon"
  }, icon), children);
}
function Badge({
  color = 'info',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `nw-badge nw-badge--${color}`
  }, children);
}
function Chip({
  active,
  onClick,
  children
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: 'nw-chip' + (active ? ' is-active' : ''),
    onClick: onClick
  }, children);
}
function Input({
  label,
  error,
  help,
  required,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: 'nw-field' + (error ? ' has-error' : '')
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "nw-field-label"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "nw-req"
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    className: "nw-input"
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    className: "nw-field-msg"
  }, error), !error && help && /*#__PURE__*/React.createElement("span", {
    className: "nw-field-help"
  }, help));
}
function Toast({
  kind = 'success',
  title,
  message,
  onClose
}) {
  const icons = {
    success: /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75ZM15.4854 7.37598C15.0026 7.1079 14.3942 7.28192 14.126 7.76465L11.124 13.166L9.7998 11.4004C9.46847 10.9586 8.84221 10.869 8.40039 11.2002C7.95862 11.5315 7.86897 12.1578 8.2002 12.5996L10.4502 15.5996C10.6535 15.8707 10.9803 16.0211 11.3184 15.998C11.6564 15.9749 11.9595 15.7815 12.124 15.4854L15.874 8.73535C16.1421 8.25259 15.9681 7.64416 15.4854 7.37598Z",
      fill: "currentColor"
    })),
    error: /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21 8.25L15.75 3H8.25L3 8.25V15.75L8.25 21H15.75L21 15.75V8.25ZM11 12.75V6.75C11 6.19772 11.4477 5.75 12 5.75C12.5523 5.75 13 6.19772 13 6.75V12.75C13 13.3023 12.5523 13.75 12 13.75C11.4477 13.75 11 13.3023 11 12.75ZM11 17.25V16.5C11 15.9477 11.4477 15.5 12 15.5C12.5523 15.5 13 15.9477 13 16.5V17.25C13 17.8023 12.5523 18.25 12 18.25C11.4477 18.25 11 17.8023 11 17.25Z",
      fill: "currentColor"
    })),
    info: /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75ZM11 7.5V6.75C11 6.19772 11.4477 5.75 12 5.75C12.5523 5.75 13 6.19772 13 6.75V7.5C13 8.05228 12.5523 8.5 12 8.5C11.4477 8.5 11 8.05228 11 7.5ZM11 17.25V12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V17.25C13 17.8023 12.5523 18.25 12 18.25C11.4477 18.25 11 17.8023 11 17.25Z",
      fill: "currentColor"
    })),
    warning: /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.0985 4.1283C11.4615 3.37195 12.5385 3.37195 12.9015 4.1283L20.3123 19.5674C20.6309 20.2313 20.1471 21.0001 19.4108 21.0001H4.58925C3.85289 21.0001 3.36908 20.2313 3.68772 19.5674L11.0985 4.1283ZM11 10.5001V13.5001C11 14.0524 11.4477 14.5001 12 14.5001C12.5523 14.5001 13 14.0524 13 13.5001V10.5001C13 9.94784 12.5523 9.50013 12 9.50013C11.4477 9.50013 11 9.94784 11 10.5001ZM11 17.2501V17.2697C11 17.8219 11.4477 18.2697 12 18.2697C12.5523 18.2697 13 17.8219 13 17.2697V17.2501C13 16.6978 12.5523 16.2501 12 16.2501C11.4477 16.2501 11 16.6978 11 17.2501Z",
      fill: "currentColor"
    }))
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `nw-toast nw-toast--${kind}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "nw-toast-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nw-toast-icon"
  }, icons[kind]), title && /*#__PURE__*/React.createElement("span", {
    className: "nw-toast-title"
  }, title), message && /*#__PURE__*/React.createElement("span", {
    className: "nw-toast-msg"
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "nw-toast-close",
    onClick: onClose,
    "aria-label": "Dismiss"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.7069 12.7069C13.0975 12.3164 13.0975 11.6833 12.7069 11.2927L9.41421 8L12.7069 4.70727C13.0975 4.31675 13.0975 3.68358 12.7069 3.29306C12.3164 2.90253 11.6833 2.90253 11.2927 3.29306L8 6.58579L4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L6.58579 8L3.29289 11.2929C2.90237 11.6834 2.90237 12.3166 3.29289 12.7071C3.68342 13.0976 4.31658 13.0976 4.70711 12.7071L8 9.41421L11.2927 12.7069C11.6833 13.0975 12.3164 13.0975 12.7069 12.7069Z",
    fill: "currentColor"
  }))));
}
function Radio({
  checked,
  onClick
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'nw-radio' + (checked ? ' is-checked' : ''),
    onClick: onClick
  });
}
function Toggle({
  on,
  onClick
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'nw-toggle' + (on ? ' is-on' : ''),
    onClick: onClick
  });
}
function Avatar({
  name,
  color = '#42CAE7',
  size = 32
}) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    className: "nw-avatar",
    style: {
      background: color,
      width: size,
      height: size,
      fontSize: size * 0.42
    }
  }, initials);
}
Object.assign(window, {
  Button,
  Badge,
  Chip,
  Input,
  Toast,
  Avatar,
  Radio,
  Toggle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsela-web/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsela-web/Sidebar.jsx
try { (() => {
/* global React */
function Sidebar({
  active,
  onSelect
}) {
  const groups = [{
    title: 'Content',
    items: [{
      key: 'all',
      label: 'All content',
      icon: 'grid'
    }, {
      key: 'articles',
      label: 'Articles',
      icon: 'article'
    }, {
      key: 'videos',
      label: 'Videos',
      icon: 'play'
    }, {
      key: 'textsets',
      label: 'Text sets',
      icon: 'stack'
    }]
  }, {
    title: 'My work',
    items: [{
      key: 'library',
      label: 'My library',
      icon: 'bookmark'
    }, {
      key: 'assignments',
      label: 'Assignments',
      icon: 'clipboard'
    }, {
      key: 'drafts',
      label: 'Drafts',
      icon: 'edit'
    }]
  }];
  const icons = {
    grid: /*#__PURE__*/React.createElement("path", {
      d: "M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z"
    }),
    article: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 9h8M8 13h8M8 17h5"
    })),
    play: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 8l6 4-6 4z"
    })),
    stack: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3l9 5-9 5-9-5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 13l9 5 9-5"
    })),
    bookmark: /*#__PURE__*/React.createElement("path", {
      d: "M6 4v16l6-3 6 3V4z"
    }),
    clipboard: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "4",
      width: "12",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 2h6v4H9zM9 12h6M9 16h4"
    })),
    edit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 20H4v-8l12-12 8 8-12 12z"
    }))
  };
  return /*#__PURE__*/React.createElement("aside", {
    className: "nw-sidebar"
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.title,
    className: "nw-sidebar-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nw-sidebar-title"
  }, g.title), g.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.key,
    href: "#",
    className: 'nw-sidebar-item' + (active === it.key ? ' is-active' : ''),
    onClick: e => {
      e.preventDefault();
      onSelect?.(it.key);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, icons[it.icon]), it.label)))));
}
Object.assign(window, {
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsela-web/Sidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AlertBanner = __ds_scope.AlertBanner;

__ds_ns.AnatomyNote = __ds_scope.AnatomyNote;

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Inspect = __ds_scope.Inspect;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Toggletips = __ds_scope.Toggletips;

})();
