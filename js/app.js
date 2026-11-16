// The library: tap a book to open it. Each book is a section of the portfolio.
(function () {
  const reader = document.getElementById('reader');
  const scroller = document.getElementById('paperScroll');
  const running = document.getElementById('readerRunning');
  const library = document.getElementById('library');
  const BOOKS = ['intro', 'about', 'experience', 'hackathons', 'projects', 'skills', 'languages', 'contact'];
  let opener = null;

  function show(book) {
    document.querySelectorAll('.chapter').forEach(c => { c.hidden = c.dataset.book !== book; });
    const ch = document.querySelector('.chapter[data-book="' + book + '"]');
    running.textContent = ch.dataset.num;
    ch.querySelector('h2').id = 'readerTitle';
    document.querySelectorAll('.chapter h2').forEach(h => { if (h !== ch.querySelector('h2')) h.removeAttribute('id'); });
    document.querySelectorAll('.vspine').forEach(b => {
      b.setAttribute('aria-current', b.dataset.open === book ? 'true' : 'false');
    });
    scroller.scrollTop = 0;
    const cur = document.querySelector('.vspine[data-open="' + book + '"]');
    const shelf = cur && cur.parentElement;
    requestAnimationFrame(() => {
      if (shelf && shelf.scrollWidth > shelf.clientWidth) {
        shelf.scrollLeft = cur.offsetLeft - shelf.offsetLeft - (shelf.clientWidth - cur.offsetWidth) / 2;
      }
    });
  }

  function open(book, from) {
    if (!BOOKS.includes(book)) return;
    const wasOpen = !reader.hidden;
    if (!wasOpen) opener = from || null;
    show(book);
    reader.hidden = false;
    document.body.classList.add('reading');
    library.inert = true;
    if (location.hash !== '#' + book) history.replaceState(null, '', '#' + book);
    scroller.focus({ preventScroll: true });
  }

  function close() {
    reader.hidden = true;
    document.body.classList.remove('reading');
    library.inert = false;
    history.replaceState(null, '', location.pathname + location.search);
    if (opener) opener.focus();
  }

  document.addEventListener('click', e => {
    const o = e.target.closest('[data-open]');
    if (o) { open(o.dataset.open, o); return; }
    if (e.target.closest('[data-close]')) close();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !reader.hidden) close();
  });
  window.addEventListener('hashchange', () => {
    const b = location.hash.slice(1);
    if (BOOKS.includes(b)) open(b); else if (!reader.hidden) close();
  });

  // CV request: ask the role and who is asking, notify Karen by email, then download.
  // The notice goes through FormSubmit (formsubmit.co); the download never depends on it.
  const cvForm = document.getElementById('cvForm');
  const CV_FILE = 'cv/Karen_Tatiana_Martinez_CV.pdf';
  const CV_NOTIFY = 'https://formsubmit.co/ajax/Katamar2000@gmail.com';
  function downloadCv() {
    const a = document.createElement('a');
    a.href = CV_FILE; a.download = 'Karen_Tatiana_Martinez_CV.pdf';
    document.body.appendChild(a); a.click(); a.remove();
  }
  if (cvForm) cvForm.addEventListener('submit', async e => {
    e.preventDefault();
    const note = document.getElementById('cvNote');
    const data = new FormData(cvForm);
    const role = (data.get('role') || '').trim();
    const who = data.get('who');
    if (!role || !who) {
      note.textContent = !role ? 'Please tell me which role this is for.' : 'Please choose who you are.';
      (!role ? cvForm.role : cvForm.querySelector('input[name="who"]')).focus();
      return;
    }
    const btn = cvForm.querySelector('button[type="submit"]');
    btn.disabled = true; note.textContent = 'Preparing your download…';
    if (!data.get('_honey')) {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 6000);
      try {
        await fetch(CV_NOTIFY, {
          method: 'POST', signal: ctrl.signal,
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            _subject: 'CV download: ' + role + ' (' + who + ')',
            _template: 'table', _captcha: 'false',
            Role: role, 'Who is asking': who, 'Company or agency': (data.get('company') || '').trim() || '(not given)',
            When: new Date().toString()
          })
        });
      } catch (err) { /* the download goes ahead even if the notice fails */ }
      clearTimeout(timer);
    }
    downloadCv();
    note.textContent = 'Thank you! Your download has started.';
    btn.disabled = false;
  });

  // A shared link like .../#projects opens that book directly
  const start = location.hash.slice(1);
  if (BOOKS.includes(start)) open(start);
})();
