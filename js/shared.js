(function () {
  'use strict';

  // Scroll reveal
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });

  // Mobile hamburger toggle
  var menuOpen = false;
  window.toggleMenu = function () {
    var menu = document.getElementById('navMenu');
    if (!menu) return;
    menuOpen = !menuOpen;
    if (menuOpen) {
      Object.assign(menu.style, {
        display: 'flex', flexDirection: 'column', position: 'absolute',
        top: '72px', left: '0', right: '0', background: '#fff',
        padding: '1rem', borderBottom: '3px solid #F26522',
        boxShadow: '0 8px 24px rgba(0,0,0,.1)', height: 'auto', zIndex: '300'
      });
    } else {
      menu.style.display = 'none';
      document.querySelectorAll('.nav-menu > li').forEach(function (li) { li.classList.remove('open'); });
    }
  };

  // Mobile dropdown section toggle
  document.querySelectorAll('.nav-menu > li > span').forEach(function (span) {
    span.addEventListener('click', function () {
      if (window.innerWidth > 768) return;
      var li = this.closest('li');
      var isOpen = li.classList.contains('open');
      document.querySelectorAll('.nav-menu > li').forEach(function (el) { el.classList.remove('open'); });
      if (!isOpen) li.classList.add('open');
    });
  });

  // Auto-close mobile nav when any link is clicked
  document.querySelectorAll('.nav-menu a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.innerWidth > 768) return;
      menuOpen = false;
      var menu = document.getElementById('navMenu');
      if (menu) {
        menu.style.display = 'none';
        document.querySelectorAll('.nav-menu > li').forEach(function (li) { li.classList.remove('open'); });
      }
    });
  });
})();
