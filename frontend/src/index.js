import dotenv from 'dotenv';
dotenv.config();
const form = document.querySelector("form");

const handleSubmit = () => {
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.open("post", `${process.env.API_URL}/subscription/add`, true);
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
