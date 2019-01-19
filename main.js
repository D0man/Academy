const input = document.querySelector('.form__input');

input.addEventListener('keyup', () => {
  if (input.value !== '') {
    input.classList.add('form__input--filled');
  } else {
    input.classList.remove('form__input--filled');
  }
});
