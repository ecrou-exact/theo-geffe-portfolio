(function () {
  var FALLBACK = { repos: 21, followers: 9 };

  function paint(key, value) {
    document.querySelectorAll('[data-stat="' + key + '"]').forEach(function (el) {
      el.textContent = value;
      el.classList.remove('loading');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!document.querySelector('[data-stat]')) return;

    fetch('https://api.github.com/users/ecrou-exact')
      .then(function (r) { if (!r.ok) throw new Error('rate-limited'); return r.json(); })
      .then(function (data) {
        paint('repos', data.public_repos + '+');
        paint('followers', data.followers + '+');
      })
      .catch(function () {
        paint('repos', FALLBACK.repos + '+');
        paint('followers', FALLBACK.followers + '+');
      });
  });
})();
