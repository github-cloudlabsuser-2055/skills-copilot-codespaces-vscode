let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        firstOperand = calculateResult();
    }
    operator = op;
    currentInput = '';
}

function calculate() {
    if (currentInput === '' || firstOperand === null || operator === '') return;
    let secondOperand = parseFloat(currentInput);
    let result = calculateResult(secondOperand);
    display.innerText = result;
    currentInput = '';
    firstOperand = null;
    operator = '';
}

function calculateResult(secondOperand = parseFloat(currentInput)) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    display.innerText = '';
}