let operation;
let firstValue;  // Saved value
let secondValue; // Whatever second input is
let display = '';  // The number being displayted

const displayContainer = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const operations = document.querySelectorAll('#operation');

// Updates display every button clicked
buttons.forEach((button) => {
    button.addEventListener('click', () => {displayContainer.textContent = display})
});

operations.forEach((operationOption) => {
    operationOption.addEventListener('click', () => {
        if (!firstValue) {
            operation = operationOption.getAttribute('class');
            firstValue = display;
            display = '';
            displayContainer.textContent = display;
        } else {
            secondValue = display;
            display = operate(firstValue, secondValue);
            operation = operationOption.getAttribute('class');
            firstValue = display;
            displayContainer.textContent = display;
            display = '';
        }
    });
});

function equal(a, b) {
    b = display;
    display = operate(a, b);
    displayContainer.textContent = display;

}

function operate(a, b) {
    if (operation == 'add') {
        return add(a, b);
    } else if (operation == 'subtract') {
        return subtract(a, b);
    } else if (operation == 'multiply') {
        return multiply(a, b);
    } else if (operation == 'divide') {
        return divide(a, b);
    } else {
        return firstValue;
    }
}

function add(a, b) {
    let c;
    c = parseInt(a) + parseInt(b);
    toString(c);
    return c;
}
function subtract(a, b) {
    let c;
    c = parseInt(a) - parseInt(b);
    toString(c);
    return c;
}
function multiply(a, b) {
    let c;
    c = parseInt(a) * parseInt(b);
    toString(c);
    return c;
}
function divide(a, b) {
    let c;
    c = parseInt(a) / parseInt(b);
    toString(c);
    return c;
}
function clearValue() {
    operation = '';
    firstValue = '';
    secondValue = '';
    display = '';
}