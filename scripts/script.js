// navigation menu and icons animation trigger
document.querySelector('.header__btn').addEventListener('click', function () {
  document.querySelector('.header__nav').classList.toggle('header__nav--active');
  document.querySelector('.fa-times').classList.toggle('btn__icon--show');
  document.querySelector('.fa-bars').classList.toggle('btn__icon--show');
  document.querySelector('.btn__icon--show').style.webkitAnimationPlayState = "running"
})