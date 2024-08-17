// Get all necessary elements from the DOM
const buttons = document.querySelectorAll('.button');
const numInput = document.querySelector('.numInput');
const resetButton = document.getElementById('reset');
const equalButton = document.getElementById('equal');
const delButton = document.querySelector('.del');

let currentInput = '';

// Function to update the display
function updateDisplay() {
    numInput.value = currentInput || '0';
}

// Function to handle button click
function appendCharacter(character) {
    if (character === '.' && currentInput.includes('.') && /[^\d\.]/.test(currentInput.slice(-1))) return;
    currentInput += character;
}

// Function to handle reset
function reset() {
    currentInput = '';
    updateDisplay();
}

// Function to handle delete
function deleteLast() {
    currentInput = currentInput.toString().slice(0, -1);
    updateDisplay();
}

// Function to calculate the result using eval
function calculate() {
    try {
        currentInput = eval(currentInput.replace(/x/g, '*'));
        updateDisplay();
    } catch (e) {
        currentInput = 'Err';
        updateDisplay();
    }
}

// Event listeners for buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value >= '0' && value <= '9' || value === '.' || value === '+' || value === '-' || value === 'x' || value === '/') {
            appendCharacter(value);
            updateDisplay();
        }
    });
});

// Event listener for equal button
equalButton.addEventListener('click', () => {
    calculate();
});

// Event listener for reset button
resetButton.addEventListener('click', () => {
    reset();
});

// Event listener for delete button
delButton.addEventListener('click', () => {
    deleteLast();
    updateDisplay();
});
