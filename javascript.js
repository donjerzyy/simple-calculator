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


let firstNumber;
let secondNumber;
let operator;