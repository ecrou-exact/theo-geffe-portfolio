/**
 * matrix.js
 * Effet pluie de caractères Matrix (mode Hacker uniquement)
 */

const canvas = document.getElementById('mx');
const ctx    = canvas ? canvas.getContext('2d') : null;
let   interval = null;
let   drops    = [];

function resizeCanvas() {
  if (!canvas) return;
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  // Réinitialiser les gouttes
  const cols = Math.floor(canvas.width / 16);
  drops = Array(cols).fill(1);
}

function drawMatrix() {
  if (!ctx) return;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00ff41';
  ctx.font = '14px JetBrains Mono, monospace';

  drops.forEach((y, i) => {
    // Caractère japonais katakana aléatoire
    const char = String.fromCharCode(0x30A0 + Math.random() * 96);
    ctx.fillText(char, i * 16, y * 16);

    // Remettre en haut aléatoirement
    if (y * 16 > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}

function startMatrix() {
  if (interval) return;
  resizeCanvas();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  interval = setInterval(drawMatrix, 50);
}

function stopMatrix() {
  if (!interval) return;
  clearInterval(interval);
  interval = null;
  if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Réagir aux changements de thème
new MutationObserver(() => {
  const isHacker = document.documentElement.getAttribute('data-theme') === 'hacker';
  isHacker ? startMatrix() : stopMatrix();
}).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['data-theme']
});

// Si déjà en mode hacker au chargement
if (document.documentElement.getAttribute('data-theme') === 'hacker') {
  startMatrix();
}

// Redimensionnement
window.addEventListener('resize', () => {
  if (document.documentElement.getAttribute('data-theme') === 'hacker') {
    resizeCanvas();
  }
});
