(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var hbg = document.getElementById('hbg');
    var nl = document.getElementById('nl');
    if (hbg && nl) {
      hbg.addEventListener('click', function () {
        var open = nl.classList.toggle('open');
        hbg.classList.toggle('open', open);
        hbg.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      nl.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          nl.classList.remove('open');
          hbg.classList.remove('open');
          hbg.setAttribute('aria-expanded', 'false');
        });
      });
    }

    var here = document.body.getAttribute('data-page');
    document.querySelectorAll('.nl a[data-page]').forEach(function (a) {
      if (a.getAttribute('data-page') === here) a.setAttribute('aria-current', 'page');
    });
  });
})();
