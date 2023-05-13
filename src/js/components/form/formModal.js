const modalEl = document.querySelector('[data-form-modal]');
const openModalBtns = document.querySelectorAll('.js-open-form-modal');

openModalBtns.forEach(openModalBtn => {
  openModalBtn.addEventListener('click', () => {
    showModal();
  });
});

function showModal() {
  document.body.classList.add('body-lock');
  modalEl.classList.remove('backdrop-form--is-hidden');

  window.addEventListener('keydown', hideModal);
}

function hideModal(e) {
  if (e.code === 'Escape') {
    document.body.classList.remove('body-lock');
    modalEl.classList.add('backdrop-form--is-hidden');

    window.removeEventListener('keydown', hideModal);
  }
}
