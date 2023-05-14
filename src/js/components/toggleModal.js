import { refs } from './refs';

refs.bookCard.addEventListener('click', toggleModal);
refs.closeModal.addEventListener('click', toggleModal);

export function toggleModal() {
  refs.modalWindow.classList.toggle('is-hidden');
}
