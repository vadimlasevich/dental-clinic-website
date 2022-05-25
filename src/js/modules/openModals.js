export const openModals = (modalName) => {
  const btns = document.querySelectorAll(`.btn-${modalName}`);
  const modal = document.querySelector(`.modal-${modalName}`);
  const modalCloseBtn = document.querySelector(`.modal-${modalName}__close-btn`);
  const shadowed = document.querySelector('.shadowed');

  const removeScroll = () => {
    shadowed.classList.add('shadowed-active');
    document.body.classList.add('stop-scroll');
  };

  const closeModal = () => {
    shadowed.classList.remove('shadowed-active');
    document.body.classList.remove('stop-scroll');
    modal.style.display = 'none';
  };

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      removeScroll();
    });
  });

  modalCloseBtn.addEventListener('click', closeModal);
  shadowed.addEventListener('click', closeModal);
};
