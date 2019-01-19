const send = document.querySelector(".join");
const input = document.querySelector("input");
const tab = [];

send.addEventListener("click", (e) => {
    if (input.value.length > 1) {
        tab.push(input.value);
        console.log(tab);
        input.value = "";
    }






})
window.addEventListener("keydown", (e) => {
    if (e.keyCode == 13 && input.value.length > 0) {
        tab.push(input.value);
        console.log(tab);
        input.value = "";
    }
})
