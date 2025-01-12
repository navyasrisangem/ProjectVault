document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('inputField');
    const buttons = document.querySelectorAll('.subCalculatorKeys div');
    let currentInput = '';
    let operator = '';
    let firstOperand = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (!isNaN(value) || value === '.') {
                currentInput += value;
                display.textContent = currentInput;
            } else if (value === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = null;
                display.textContent = '';
            } else if (value === '⌫') {
                currentInput = currentInput.slice(0, -1);
                display.textContent = currentInput;
            } else if (value === '√𝑥') {
                if (currentInput) {
                    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                    display.textContent = currentInput;
                }
            } else if (value === '𝑥²') {
                if (currentInput) {
                    currentInput = Math.pow(parseFloat(currentInput), 2).toString();
                    display.textContent = currentInput;
                }
            } else if (value === '=') {
                if (firstOperand !== null && operator && currentInput) {
                    const secondOperand = parseFloat(currentInput);
                    switch (operator) {
                        case '+':
                            currentInput = (firstOperand + secondOperand).toString();
                            break;
                        case '-':
                            currentInput = (firstOperand - secondOperand).toString();
                            break;
                        case '×':
                            currentInput = (firstOperand * secondOperand).toString();
                            break;
                        case '÷':
                            currentInput = secondOperand !== 0 
                                ? (firstOperand / secondOperand).toString() 
                                : 'Error';
                            break;
                    }
                    display.textContent = currentInput;
                    firstOperand = null;
                    operator = '';
                }
            } else {
                if (currentInput) {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = '';
                }
            }
        });
    });
});
