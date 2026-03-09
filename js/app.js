// SPLASH SCREEN
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash').classList.add('hidden');
  }, 2000);
});

// NAV SCROLL
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
  checkReveal();
  checkSkills();
  checkStats();
});

// SCROLL REVEAL
function checkReveal() {
  document.querySelectorAll('.about-card, .skill-category, .project-card, .stat, .contact-grid').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('reveal', 'visible');
    }
  });
}

// SKILL BARS ANIMATION
let skillsAnimated = false;
function checkSkills() {
  if (skillsAnimated) return;
  const section = document.getElementById('skills');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    skillsAnimated = true;
    document.querySelectorAll('.skill-fill').forEach(bar => {
      const width = bar.getAttribute('data-width');
      setTimeout(() => { bar.style.width = width + '%'; }, 200);
    });
  }
}

// STATS COUNTER
let statsAnimated = false;
function checkStats() {
  if (statsAnimated) return;
  const strip = document.querySelector('.stats-strip');
  if (!strip) return;
  const rect = strip.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    statsAnimated = true;
    document.querySelectorAll('.stat-num').forEach(el => {
      const target = parseInt(el.getAttribute('data-target'));
      let current = 0;
      const increment = target > 100 ? Math.ceil(target / 40) : 1;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) { current = target; clearInterval(interval); }
        el.textContent = current + (target > 100 ? '+' : '');
      }, 40);
    });
  }
}

// CONTACT FORM
function sendMessage() {
  const name = document.getElementById('cfName').value.trim();
  const email = document.getElementById('cfEmail').value.trim();
  const msg = document.getElementById('cfMsg').value.trim();
  const confirm = document.getElementById('cfConfirm');

  if (!name || !email || !msg) {
    confirm.textContent = 'Please fill in all fields.';
    confirm.style.color = '#E50914';
    return;
  }
  if (!email.includes('@')) {
    confirm.textContent = 'Please enter a valid email.';
    confirm.style.color = '#E50914';
    return;
  }

  confirm.textContent = '✓ Message sent! I\'ll get back to you soon.';
  confirm.style.color = '#46d369';
  document.getElementById('cfName').value = '';
  document.getElementById('cfEmail').value = '';
  document.getElementById('cfMsg').value = '';
}

// ADD REVEAL CLASS TO ELEMENTS
document.querySelectorAll('.about-card, .skill-category, .project-card').forEach(el => {
  el.classList.add('reveal');
});

// INIT
checkReveal();
checkSkills();
checkStats();
