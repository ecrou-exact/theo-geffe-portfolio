(function () {
  var root = document.documentElement;
  var saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.querySelectorAll('.tsw [data-t]').forEach(function (btn) {
      var on = btn.getAttribute('data-t') === theme;
      btn.classList.toggle('on', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var current = root.getAttribute('data-theme') || 'dark';
    apply(current);
    document.querySelectorAll('.tsw [data-t]').forEach(function (btn) {
      btn.addEventListener('click', function () { apply(btn.getAttribute('data-t')); });
    });
  });
})();
