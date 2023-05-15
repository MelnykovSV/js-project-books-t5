const pageNavs = document.querySelectorAll('.js-page-nav');

pageNavs.forEach(pageNav => {
  pageNav.addEventListener('click', e => {
    const targetLinkEl = e.target;

    if (targetLinkEl.classList.contains('page-nav__link--current')) {
      e.preventDefault();
    }
  });
});
