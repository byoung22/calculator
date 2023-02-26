let operation;
let array = [];  //Holds 2 values
let input = '';  // The number being inputted

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const operations = document.querySelectorAll('#operation');

// Updates display every button clicked
buttons.forEach((button) => {
    button.addEventListener('click', () => {display.textContent = input})
});



function operate(array) {
    if (operation == 'add') {
        return add(array);
    } else if (operation == 'subtract') {
        return subtract(array);
    } else if (operation == 'multiply') {
        return multiply(array);
    } else if (operation == 'divide') {
        return divide(array);
    } else {
    }
}
function add(array) {
    return array[0] + array[1];
}
function subtract(array) {
    return array[0] - array[1];
}
function multiply(array) {
    return array[0] * array[1];
}
function divide(array) {
    return array[0] / array[1];
}
function clearValue() {
    operation = '';
    array = [];
    input = '';
}