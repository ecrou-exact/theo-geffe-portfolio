/**
 * backtotop.js
 * Bouton "retour en haut" — apparaît après 350px de scroll
 */

const btt = document.getElementById('btt');

if (btt) {
  // Afficher / cacher selon la position de scroll
  window.addEventListener('scroll', () => {
    btt.classList.toggle('show', window.scrollY > 350);
  }, { passive: true });

  // Retour en haut au clic
  btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
