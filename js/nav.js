/**
 * nav.js
 * Navigation: hamburger mobile + active links on scroll
 */

const hamburger = document.getElementById('hbg');
const navList   = document.getElementById('nl');
const navLinks  = document.querySelectorAll('.nl a');

// ── Hamburger ──
if (hamburger && navList) {
  hamburger.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Close after nav link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── Active link on scroll ──
const sectionIds = ['hero', 'about', 'exp', 'proj', 'skills', 'contact'];

sectionIds.forEach(id => {
  const section = document.getElementById(id);
  if (!section) return;

  new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(a => {
            a.classList.toggle('act', a.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { threshold: 0.25 }
  ).observe(section);
});
