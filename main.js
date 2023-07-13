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
if (btnValue === "=" && output !== "") {
output = eval(output.replace("%", "/100"));

} else if (btnValue === "AC") {

output = "";

} else if (btnValue === "DEL") {

output = output.toString().slice(0, -1);

} else {

// return

if (output === "" && specialCharacters.includes(btnValue)) return;
output += btnValue;
}
display.value = output;


// calculate() on click.
buttons.forEach((button) => {
button.addEventListener("click", (e) => calculate(e.target.dataset.value));

});
