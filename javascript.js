let displayValue;
let firstNumber;
let secondNumber;
let operator;
let displayScreen = document.querySelector('.display');
let ac = document.querySelector('.ac');
let nine = document.querySelector('.nine');
let eight = document.querySelector('.eight');
let seven = document.querySelector('.seven');
let six = document.querySelector('.six');
let five = document.querySelector('.five');
let four = document.querySelector('.four');
let three = document.querySelector('.three');
let two = document.querySelector('.two');
let one = document.querySelector('.one');
let zero = document.querySelector('.zero');
let equals = document.querySelector('.equals');
let dot = document.querySelector('.dot');
let addButton = document.querySelector('.operations-add');
let subButton = document.querySelector('.operations-sub');
let divButton = document.querySelector('.operations-div');
let mulButton = document.querySelector('.operations-mul');







function add(num1, num2) {
    return num1 + num2;
}


function subtract(num1, num2) {
    return num1 - num2;
}


function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {

    if(operator === 'add') {
        return add(num1, num2);
    } else if(operator === 'sub') {
        return subtract(num1, num2);
    } else if(operator === 'mul') {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2)
    }

}

function clearDisplay() {
    displayScreen.textContent = "";
}

function updateDisplay (value) {
        let currentValue = displayScreen.textContent;
        if(canDisplayValue(value)) {
            currentValue += value;
            displayScreen.textContent = currentValue;
        }        
}

function canDisplayValue(value) {
    let displayValue = displayScreen.textContent
    let last = displayValue[displayValue.length-1];
    if(isNaN(parseInt(value))) {
        if (last !== '.' &&  last !== '÷' && last !== 'x' && last !== '+' && last !== '-' && last !== '×') {
            return true;
        } else {
            return false;
        }
    } else {
        return true
    }
    
}




ac.addEventListener('mousedown', () => clearDisplay());
nine.addEventListener('mousedown', ()=> updateDisplay(9));
eight.addEventListener('mousedown', ()=> updateDisplay(8));
seven.addEventListener('mousedown', ()=> updateDisplay(7));
six.addEventListener('mousedown', ()=> updateDisplay(6));
five.addEventListener('mousedown', ()=> updateDisplay(5));
four.addEventListener('mousedown', ()=> updateDisplay(4));
three.addEventListener('mousedown', ()=> updateDisplay(3));
two.addEventListener('mousedown', ()=> updateDisplay(2));
one.addEventListener('mousedown', ()=> updateDisplay(1));
zero.addEventListener('mousedown', ()=> updateDisplay(0));
dot.addEventListener('mousedown', ()=> updateDisplay('.'));
addButton.addEventListener('mousedown', ()=> updateDisplay('+'));
subButton.addEventListener('mousedown', ()=>updateDisplay('-'));
divButton.addEventListener('mousedown', ()=>updateDisplay('÷'));
mulButton.addEventListener('mousedown', ()=>updateDisplay('×'));



