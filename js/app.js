// The library: tap a book to open it. Each book is a section of the portfolio.
(function () {
  const reader = document.getElementById('reader');
  const scroller = document.getElementById('paperScroll');
  const running = document.getElementById('readerRunning');
  const library = document.getElementById('library');
  const BOOKS = ['about', 'hackathons', 'projects', 'skills', 'contact'];
  let opener = null;

  function show(book) {
    document.querySelectorAll('.chapter').forEach(c => { c.hidden = c.dataset.book !== book; });
    const ch = document.querySelector('.chapter[data-book="' + book + '"]');
    running.textContent = ch.dataset.num;
    ch.querySelector('h2').id = 'readerTitle';
    document.querySelectorAll('.chapter h2').forEach(h => { if (h !== ch.querySelector('h2')) h.removeAttribute('id'); });
    document.querySelectorAll('.rail-dots button, .vspine').forEach(b => {
      b.setAttribute('aria-current', b.dataset.open === book ? 'true' : 'false');
    });
    scroller.scrollTop = 0;
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

  // A shared link like .../#projects opens that book directly
  const start = location.hash.slice(1);
  if (BOOKS.includes(start)) open(start);
})();
