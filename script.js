const inputButtons = document.querySelectorAll('.input-button');
const functionButtons = document.querySelectorAll('.function-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const currentDisplay = document.getElementById('current-display');
const previousDisplay = document.getElementById('previous-display');

let firstNumber = 0;
let secondNumber = 0;
let operator = '';

function displayNum(current, previous) {
    currentDisplay.innerHTML = current;
    previousDisplay.innerHTML = previous;
}

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {
            case ('+'): 
                operator = '+';
                break;
            case ('-'): 
                operator = '-';
                break;
            case ('x'): 
                operator = 'x';
                break;
            case ('/'): 
                operator = '/';
                break;
        }        
        displayNum(firstNumber + ' ' +operator)
    })
})
