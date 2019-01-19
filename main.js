const input = document.querySelector('.form__input');

input.addEventListener('keyup', () => {
  if (input.value !== '') {
    input.classList.add('form__input--filled');
  } else {
    input.classList.remove('form__input--filled');
  }
});

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();
const ref = database.ref('emails');

const submitButton = document.querySelector('#LandingEmail');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const email = input.value;

  ref.push(email);
});
