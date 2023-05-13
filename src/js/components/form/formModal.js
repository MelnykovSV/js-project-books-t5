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

  modalEl.addEventListener('click', hideModal);
  window.addEventListener('keydown', hideModal);
}

function hideModal(e) {
  console.log(e.target);

  console.log(e.target.classList.contains('backdrop-form'));
  if (e.target.classList.contains('backdrop-form') || e.code === 'Escape') {
    document.body.classList.remove('body-lock');
    modalEl.classList.add('backdrop-form--is-hidden');

    modalEl.removeEventListener('click', hideModal);
    window.removeEventListener('keydown', hideModal);
  }
}
