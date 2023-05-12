(function () {
  const pathName = window.location.pathname;

  const links = document.querySelectorAll(`[href="${pathName}"]`);

  links.forEach(link => {
    if (link.classList.contains('page-nav__link')) {
      link.classList.add('page-nav__link--current');
    }
  });
})();
