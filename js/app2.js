const burger = document.querySelector(".burger");
const navbtn = document.querySelector(".navbtn");

navbtn.addEventListener("click", ()=>{
  burger.classList.toggle("open");
});