const inputForm = document.querySelector(".form__input");
const btnForm = document.querySelector(".form__btn");
const errorMessage = document.querySelector(".form__error");
const successMessage = document.querySelector(".form__success");

function validateEmail(email)
{
    let reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reEmail.test(email);
}

function submitForm(e)
{
    e.preventDefault();
    let inputFormValue = inputForm.value;
    console.log(validateEmail(inputFormValue));

    if(validateEmail(inputFormValue))
    {
        errorMessage.style.display = "none";
        inputForm.classList.remove("form__input--error");
        successMessage.style.display = "block";
    }
    else
    {
        errorMessage.style.display = "block";
        inputForm.classList.add("form__input--error");
        successMessage.style.display = "none";
    }
}

btnForm.addEventListener("submit", submitForm);

