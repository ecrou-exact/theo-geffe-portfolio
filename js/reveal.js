/**
 * reveal.js
 * Animation d'apparition au scroll (IntersectionObserver)
 * + animation des barres de compétences
 */

function animateSkillBars(container) {
  container.querySelectorAll('.sf').forEach(bar => {
    const width = parseFloat(bar.dataset.w);
    if (width) {
      setTimeout(() => {
        bar.style.transform = `scaleX(${width})`;
      }, 180);
    }
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('v');
        animateSkillBars(entry.target);
      }
    });
  },
  { threshold: 0.07 }
);

// Observer tous les éléments .reveal
document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});
