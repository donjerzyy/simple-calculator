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

        if(value === '.') {
            let t = displayValue.length - 1
            while (t>=0) {
                if(displayValue[t] === '+' || displayValue[t] === '-' || displayValue[t] === '÷' || displayValue[t]=== '×' ) {
                    break
                } 
                if(displayValue[t] === '.') {
                    return false
                }
                t -=1
            }
        }

        if (last !== '.' &&  last !== '÷' && last !== 'x' && last !== '+' && last !== '-' && last !== '×') {
            return true;
        } else {
            return false;
        }
    } else {
        return true
    }    
}


function operate() {
    const userValue = displayScreen.textContent.trim();
    if(userValue.length === 0 || userValue.length === 1 || userValue.length === 2) {
        return 
    } else {
        let userValueArray = [];
        let numValue = ""

        for (let p = 0; p<userValue.length; p++) {
            if(userValue[p] === '+' || userValue[p] === '-' || userValue[p] === '÷' || userValue[p]=== '×' ) {
                if (numValue !== "") {
                    userValueArray.push(numValue);
                    numValue = ""
                }
                userValueArray.push(userValue[p]);
            } else {
                numValue += userValue[p];
            }
        }
        if (numValue !== "") {
                userValueArray.push(numValue);
            }
        
        if(isNaN(parseFloat(userValueArray[0]))) {
            userValueArray.unshift('0');
        }

        if(isNaN(parseFloat(userValueArray[userValueArray.length - 1]))) {
            userValueArray.push('0');
        }

        console.log(userValueArray);

        let start;
        let end;
        let result;

        while(userValueArray.indexOf('÷') != -1) {
            start = userValueArray.indexOf('÷') - 1;
            end = userValueArray.indexOf('÷') + 1;
            if(userValueArray[end] === 0) {
                displayScreen.textContent = "MATH ERROR";
                return
            } else {
                result = divide(parseFloat(userValueArray[start]), parseFloat(userValueArray[end]));
                userValueArray.splice(start,3);
                if(userValueArray.length === 0) {
                    displayScreen.textContent = `${result}`
                    return
                }
                if(isNaN(parseFloat(userValueArray[0]))) {
                    userValueArray.unshift(`${result}`);
                } else if (isNaN(parseFloat(userValueArray[userValueArray.length-1]))) {
                    userValueArray.push(`${result}`);
                } else {
                    let temp;
                    for(let j=0; j<userValueArray.length; j++) {
                        temp = j;
                        if(isNaN(userValueArray[j])) {
                           if(isNaN(userValueArray[j+1])){
                                break
                           } 
                        }
                    }
                    userValueArray.splice(temp+1,0,`${result}`);
                }   

            }

        }


        while(userValueArray.indexOf('×') != -1) {
            start = userValueArray.indexOf('×') - 1;
            end = userValueArray.indexOf('×') + 1;
            result = multiply(parseFloat(userValueArray[start]), parseFloat(userValueArray[end]));
            userValueArray.splice(start,3);
            if(userValueArray.length === 0) {
                displayScreen.textContent = `${result}`
                return
             }
            if(isNaN(parseFloat(userValueArray[0]))) {
                userValueArray.unshift(`${result}`);
            } else if (isNaN(parseFloat(userValueArray[userValueArray.length-1]))) {
                userValueArray.push(`${result}`);
            } else {
                let temp;
                for(let j=0; j<userValueArray.length; j++) {
                    temp = j;
                    if(isNaN(userValueArray[j])) {
                        if(isNaN(userValueArray[j+1])){
                            break
                        } 
                    }
                }
                userValueArray.splice(temp+1,0,`${result}`);
            }   
        }

        while(userValueArray.indexOf('+') != -1) {
            start = userValueArray.indexOf('+') - 1;
            end = userValueArray.indexOf('+') + 1;
            result = add(parseFloat(userValueArray[start]), parseFloat(userValueArray[end]));
            userValueArray.splice(start,3);
            if(userValueArray.length === 0) {
                displayScreen.textContent = `${result}`
                return
             }
            if(isNaN(parseFloat(userValueArray[0]))) {
                userValueArray.unshift(`${result}`);
            } else if (isNaN(parseFloat(userValueArray[userValueArray.length-1]))) {
                userValueArray.push(`${result}`);
            } else {
                let temp;
                for(let j=0; j<userValueArray.length; j++) {
                    temp = j;
                    if(isNaN(userValueArray[j])) {
                        if(isNaN(userValueArray[j+1])){
                            break
                        } 
                    }
                }
                userValueArray.splice(temp+1,0,`${result}`);
            }   
        }


        while(userValueArray.indexOf('-') != -1) {
            start = userValueArray.indexOf('-') - 1;
            end = userValueArray.indexOf('-') + 1;
            result = subtract(parseFloat(userValueArray[start]), parseFloat(userValueArray[end]));
            userValueArray.splice(start,3);
            if(userValueArray.length === 0) {
                displayScreen.textContent = `${result}`
                return
             }
            if(isNaN(parseFloat(userValueArray[0]))) {
                userValueArray.unshift(`${result}`);
            } else if (isNaN(parseFloat(userValueArray[userValueArray.length-1]))) {
                userValueArray.push(`${result}`);
            } else {
                let temp;
                for(let j=0; j<userValueArray.length; j++) {
                    temp = j;
                    if(isNaN(userValueArray[j])) {
                        if(isNaN(userValueArray[j+1])){
                            break
                        } 
                    }
                }
                userValueArray.splice(temp+1,0,`${result}`);
            }   
        }

        return userValueArray[0];
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
equals.addEventListener('mousedown', ()=> operate());



