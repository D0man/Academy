const burger = document.querySelector(".burger");
const navbtn = document.querySelector(".navbtn");
const nav = document.querySelector(".nav");

navbtn.addEventListener("click", ()=>{
  burger.classList.toggle("burger--open");
  nav.classList.toggle("nav--open");
});