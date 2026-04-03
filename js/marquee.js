/**
 * marquee.js
 * Génère le bandeau défilant avec les mots-clés
 */

const MARQUEE_ITEMS = [
  { text: 'CIRCL · Luxembourg',  highlight: false },
  { text: 'IT Developer',        highlight: true  },
  { text: 'Open-Source',         highlight: false },
  { text: 'Cybersecurity',       highlight: true  },
  { text: 'YARA · Sigma',        highlight: false },
  { text: 'MISP Project',        highlight: true  },
  { text: 'NGSOTI · EU',         highlight: false },
  { text: 'rulezet.org',         highlight: true  },
  { text: '🥁 Batteur',          highlight: false },
  { text: '⚽ Sportif',          highlight: true  },
  { text: 'Luxembourg 🇱🇺',      highlight: false },
  { text: 'GitHub #141',         highlight: true  },
];

// Duplique pour boucle sans saut
const ALL_ITEMS = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

const container = document.getElementById('mi');

if (container) {
  ALL_ITEMS.forEach(item => {
    const el = document.createElement('div');
    el.className = 'mi';
    el.innerHTML = item.highlight
      ? `<span class="hi">${item.text}</span>`
      : item.text;
    container.appendChild(el);
  });
}
