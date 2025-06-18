let num1;
let num2;
let operator = null;
let chainingOperators = false;

const display = document.querySelector(".display");

const numbers = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operator");

const equals = document.querySelector(".equals");

const clear = document.querySelector(".clear");

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", enterNum);
}

for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", setOperator);
}

equals.addEventListener("click", equate);

clear.addEventListener("click", clearCalc );

function enterNum(event){
    if(chainingOperators){
        display.textContent = "";
        chainingOperators = false;
        display.textContent += event.target.textContent;
    }
    else{
        display.textContent += event.target.textContent;
    }

}

function setOperator(event){
    if(display.textContent == ""){
        operator = event.target.textContent;
        return;
    }
    if(operator == null){
        num1 = parseFloat(display.textContent);
        operator = event.target.textContent;
        display.textContent = ""
    }
    else{
        chainingOperators = true; 
        equate();
        num1 = parseFloat(display.textContent);
        operator = event.target.textContent;
    }
}


function equate(){
    num2 = parseInt(display.textContent);
    ans = operate(operator, num1, num2);
    operator = null
    display.textContent = parseFloat(ans.toFixed(3));
}

function clearCalc(){
    display.textContent = "";
    num1 = null;
    num2 = null;
    ans = null;
    operator = null;
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    let ans;
    switch(operator){
        case "+":
            ans = add(num1, num2);
            break;
        case "-":
            ans = subtract(num1, num2);
            break;
        case "*":
            ans = multiply(num1, num2);
            break;
        case "/":
            ans = divide(num1, num2);
            break;
    }
    return ans;
}
