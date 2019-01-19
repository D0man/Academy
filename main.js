const input = document.querySelector('.form__input');

input.addEventListener('keyup', () => {
  if (input.value !== '') {
    input.classList.add('form__input--filled');
  } else {
    input.classList.remove('form__input--filled');
  }
});


const config = {
  apiKey: 'AIzaSyAYWMXR8w8m16F7pVp_RZsnsBg1JkjYkVY',
  authDomain: 'academy-c7303.firebaseapp.com',
  databaseURL: 'https://academy-c7303.firebaseio.com',
  projectId: 'academy-c7303',
  storageBucket: 'academy-c7303.appspot.com',
  messagingSenderId: '587195173569',
};

firebase.initializeApp(config);

const database = firebase.database();
const ref = database.ref('emails');

const submitButton = document.querySelector('.form__button');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const email = input.value;

  ref.push(email);
});
