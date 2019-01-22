const input = document.querySelector(".contact__input");
const sendBtn = document.getElementById("contact__submit--send");
const closeBtn = document.getElementById("contact__submit--close");
const modal = document.querySelector(".addressbook");
const emails = [];

const addEmail = (e, tab) =>{
  e.preventDefault();
  tab.push(input.value);
  tab.reverse();
  console.log(tab);

  const emailsList = document.querySelector(".addressbook__list");
  emailsList.textContent="";
  tab.map(item=>{
    const li = document.createElement("li");
    li.textContent = item;
    emailsList.appendChild(li);
  })
  tab.reverse();

  modal.classList.add("addressbook--active");
}

const closeModal = (e) =>{
  e.preventDefault();
  modal.classList.remove("addressbook--active");
}

sendBtn.addEventListener("submit", (e)=>addEmail(e, emails));
closeBtn.addEventListener("click", closeModal);

// const input = document.querySelector(".contact__input");
// const sendBtn = document.getElementById("contact__submit--send");
// const closeBtn = document.getElementById("contact__submit--close");
// const modal = document.querySelector(".addressbook");
// const storage = localStorage.getItem("emailList");
// console.log({ storage });
// const emails = storage ? storage.split(",") : [];
// console.log({ emails });
// const addEmail = e => {
//   e.preventDefault();

//   emails.push(input.value);

//   localStorage.setItem("emailList", emails);
//   console.log({ storage });
//   console.log({ emails });
//   const emailsList = document.querySelector(".addressbook__list");
//   emailsList.textContent = "";
//   emails.map(email => {
//     const li = document.createElement("li");
//     li.textContent = email;
//     emailsList.appendChild(li);
//   });

//   modal.classList.add("addressbook--active");
// };

// const closeModal = e => {
//   e.preventDefault();
//   modal.classList.remove("addressbook--active");
// };

// sendBtn.addEventListener("submit", addEmail);
// closeBtn.addEventListener("click", closeModal);