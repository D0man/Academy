import dotenv from 'dotenv';
dotenv.config();
const form = document.querySelector("form");

const handleSubmit = () => {
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    form.outerHTML = "<h2>Thank you for subscription.</h2> <br> You will be redirected in few seconds..";

    setTimeout(() => {
      window.location.href = '/';
    }, 4000);
  });

  xhr.open("post", `${process.env.API_URL}/addEmail`, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      email: formData.get("email")
    })
  );
};

form.addEventListener("submit", event => {
  event.preventDefault();

  handleSubmit();
});
