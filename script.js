const inputButtons = document.querySelectorAll('.input-button');
const functionButtons = document.querySelectorAll('.function-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const currentDisplay = document.getElementById('current-display');
const previousDisplay = document.getElementById('previous-display');
const sumButton = document.getElementById('sum-all');

let currentNumber = '';
let previousNumber = '';
let operator = undefined;

// operators

function operate() {
    let finalResult;
    const current = Number(currentNumber);
    const previous = Number(previousNumber);
    if (isNaN(previous) || isNaN(current)) return;
    switch (operator) {
        case '+':
            finalResult = previous + current
            break;
        case '-':
            finalResult = previous - current
            break;
        case 'x':
            finalResult = previous * current
            break;
        case '÷':
            if (current === 0) return console.log('to infinity!!')
            else finalResult = previous / current
            break;
        default: 
            break;        
    }
    currentNumber = finalResult;
    operator = undefined;
    previousNumber = ''
    displayNum()
}

function displayNum() {
    currentDisplay.innerHTML = currentNumber;

        previousDisplay.innerHTML = `${previousNumber} ${operator}`;
}

inputButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerHTML === '.' && currentNumber.includes('.')) return;
        currentNumber += button.innerHTML;
        console.log(currentNumber)
        displayNum()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentNumber === '') return;
        if (previousNumber !== '') {
            operator = button.innerHTML;
            
        }
        
        previousNumber = currentNumber;
        currentNumber = '';
        displayNum()
    })
})

sumButton.addEventListener('click', operate)