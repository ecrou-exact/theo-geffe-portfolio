/**
 * github-stats.js
 * Fetches live GitHub stats for ecrou-exact via the public API.
 * Updates the hero stats section dynamically.
 * Falls back to placeholder values if the API is unavailable.
 */

const GITHUB_USER = 'ecrou-exact';
const GITHUB_API  = `https://api.github.com/users/${GITHUB_USER}`;

// DOM targets (data-stat attributes)
const STAT_MAP = {
  repos:    '[data-stat="repos"]',
  followers:'[data-stat="followers"]',
};

async function fetchGitHubStats() {
  try {
    const res  = await fetch(GITHUB_API, {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });

    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data = await res.json();

    // Update repos count
    const reposEl = document.querySelector(STAT_MAP.repos);
    if (reposEl && data.public_repos != null) {
      animateCount(reposEl, data.public_repos);
    }

    // Update followers count
    const followersEl = document.querySelector(STAT_MAP.followers);
    if (followersEl && data.followers != null) {
      animateCount(followersEl, data.followers);
    }

    // Remove loading state
    document.querySelectorAll('.stat-loading').forEach(el => {
      el.classList.remove('stat-loading');
    });

  } catch (err) {
    console.warn('GitHub API unavailable — showing fallback values.', err);
    // Fallback: leave the static HTML values as-is
  }
}

// Smooth count-up animation
function animateCount(el, target) {
  const duration = 1200;
  const start    = performance.now();
  const from     = 0;

  function step(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(from + (target - from) * eased);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// Run after DOM is ready
document.addEventListener('DOMContentLoaded', fetchGitHubStats);
