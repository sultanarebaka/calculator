const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const specialCharacters = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {

    display.focus();
}  

buttons.forEach((button) => {

//Button click listener
 button.addEventListener("click", (e) => calculate(e.target.dataset.value));
    
 });