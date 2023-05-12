const switcherEl = document.querySelector('.js-switcher-theme');
const switcherCheckboxEl = document.querySelector(
  '.js-switcher-theme-checkbox'
);
const htmlEl = document.querySelector('html');

htmlEl.classList.add('light');

switcherCheckboxEl.addEventListener('click', handleClick);

function handleClick() {
  toggleTheme();
}

function toggleTheme() {
  switcherEl.classList.toggle('switcher-theme--is-checked');

  if (htmlEl.classList.contains('light')) {
    htmlEl.classList.replace('light', 'dark');

    return;
  }

  htmlEl.classList.replace('dark', 'light');
}
