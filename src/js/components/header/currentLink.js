onCurrentLink();

function onCurrentLink() {
  let pathName = window.location.pathname;

  console.log(pathName);

  if (pathName === '/') {
    pathName = '/index.html';
  }

  const links = document.querySelectorAll(`[href="${pathName}"]`);

  links.forEach(link => {
    if (link.classList.contains('page-nav__link')) {
      link.classList.add('page-nav__link--current');
    }
  });
}
