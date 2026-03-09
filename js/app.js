// STAR CURSOR
const starCursor = document.getElementById('star-cursor');
const sparkColors = ['#E50914', '#ff6b6b', '#ffffff', '#ffcc00', '#ff9999'];
let lastSpark = 0;

document.addEventListener('mousemove', e => {
  starCursor.style.left = e.clientX + 'px';
  starCursor.style.top = e.clientY + 'px';

  const now = Date.now();
  if (now - lastSpark > 60) {
    lastSpark = now;
    createSpark(e.clientX, e.clientY);
  }
});

function createSpark(x, y) {
  const spark = document.createElement('div');
  spark.className = 'spark';
  const size = Math.random() * 6 + 3;
  const color = sparkColors[Math.floor(Math.random() * sparkColors.length)];
  const offsetX = (Math.random() - 0.5) * 20;
  const offsetY = (Math.random() - 0.5) * 20;
  spark.style.cssText = `
    left: ${x + offsetX}px;
    top: ${y + offsetY}px;
    width: ${size}px;
    height: ${size}px;
    background: ${color};
    box-shadow: 0 0 ${size * 2}px ${color};
  `;
  document.body.appendChild(spark);
  setTimeout(() => spark.remove(), 600);
}

document.addEventListener('click', e => {
  for (let i = 0; i < 8; i++) createSpark(e.clientX, e.clientY);
});

// Scale star on hover
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => starCursor.style.transform = 'translate(-50%,-50%) scale(1.6)');
  el.addEventListener('mouseleave', () => starCursor.style.transform = 'translate(-50%,-50%) scale(1)');
});

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
