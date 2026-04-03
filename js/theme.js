/**
 * theme.js
 * Gestion du sélecteur de thème Dark / Light / Hacker
 * Persiste le choix dans localStorage
 */

const THEME_KEY = 'theo-geffe-theme';

const themeBtns = document.querySelectorAll('.tb');
const root = document.documentElement;

// Appliquer un thème
function applyTheme(theme) {
  root.setAttribute('data-theme', theme);

  themeBtns.forEach(btn => {
    const isActive = btn.dataset.t === theme;
    btn.classList.toggle('on', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  // Sauvegarder le choix
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (_) {}
}

// Charger le thème sauvegardé ou dark par défaut
function loadSavedTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) applyTheme(saved);
  } catch (_) {}
}

// Événements sur les boutons
themeBtns.forEach(btn => {
  btn.addEventListener('click', () => applyTheme(btn.dataset.t));
});

// Init
loadSavedTheme();
