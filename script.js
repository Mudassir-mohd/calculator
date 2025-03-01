
let display = document.getElementById('display');
let currentInput = '';

function appendValue(value) {
    if (display.innerText === '0') display.innerText = '';
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch {
        display.innerText = 'Error';
        currentInput = '';
    }
}
