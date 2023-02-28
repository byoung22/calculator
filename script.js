let operation;
let firstValue;  // Saved value
let secondValue; // Whatever second input is
let display = '';  // The number being displayted
let decimalAdded = false;

const displayContainer = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const operations = document.querySelectorAll('#operation');
const decimal = document.getElementById('decimal')

decimal.addEventListener('click', function() {
    if (decimalAdded) {
        return;
    } else {
        decimalAdded = true;
    }
});

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
    firstValue = '';
    secondValue = '';
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
    c = parseFloat(a) + parseFloat(b);
    toString(c);
    return c;
}
function subtract(a, b) {
    let c;
    c = parseFloat(a) - parseFloat(b);
    toString(c);
    return c;
}
function multiply(a, b) {
    let c;
    c = parseFloat(a) * parseFloat(b);
    toString(c);
    return c;
}
function divide(a, b) {
    let c;
    c = parseFloat(a) / parseFloat(b);
    toString(c);
    return c;
}
function changeSign(n) {
    displayContainer.textContent = -n;
    return display = -n;
}
function changePercent(n) {
    n = n / 100;
    return display = n;
}
function clearValue() {
    operation = '';
    firstValue = '';
    secondValue = '';
    display = '';
    decimalAdded = false;
}