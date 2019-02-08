const burger = document.querySelector(".burger");
const navbtn = document.querySelector(".navbtn");
const nav = document.querySelector(".nav");

navbtn.addEventListener("click", ()=>{
  burger.classList.toggle("burger--open");
  nav.classList.toggle("nav--open");
});

// month as a number (0-11)
const targetTime = new Date(2019, 1, 11);

const returnTime = (targetTime) =>{
  const currentTime = new Date();
  let time = Math.floor((targetTime - currentTime)/1000);
  const hours = Math.floor(time / 3600);
  time %= 3600;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return {hours, minutes, seconds};
}

// console.log(returnTime(targetTime));

const counter = document.querySelector(".timer__counter");

const showCounter = (targetTime) =>{
  if(returnTime(targetTime).hours>47) {
    counter.textContent = Math.floor((returnTime(targetTime).hours)/24) + " dni";
  }
  else if(returnTime(targetTime).hours < 0 || returnTime(targetTime).minutes < 0 || returnTime(targetTime).seconds < 0){
    counter.textContent = "Wyzwanie zakonczone"
  }
  else{
    counter.textContent =
    (returnTime(targetTime).hours > 9 ? returnTime(targetTime).hours : "0" + returnTime(targetTime).hours)
    + ":" +
    (returnTime(targetTime).minutes > 9 ? returnTime(targetTime).minutes : "0" + returnTime(targetTime).minutes)
    + ":" +
    (returnTime(targetTime).seconds > 9 ? returnTime(targetTime).seconds : "0" + returnTime(targetTime).seconds);
  }
}

showCounter(targetTime);
setInterval(() => showCounter(targetTime), 1000);