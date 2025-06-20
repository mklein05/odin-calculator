let num1;
let num2;
let operator = null;
let chainingOperators = false;
let justEquated;

const display = document.querySelector(".display");
display.textContent = "";

const numbers = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operator");

const equals = document.querySelector(".equals");

const clear = document.querySelector(".clear");

const decimalPoint = document.querySelector(".decimal");

const backSpace = document.querySelector(".backspace");

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", enterNum);
}

for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", setOperator);
}

equals.addEventListener("click", equate);

clear.addEventListener("click", clearCalc);

decimalPoint.addEventListener("click", addDecimal);

backSpace.addEventListener("click", useBackSpace);

function enterNum(event){
    if(chainingOperators){
        display.textContent = "";
        chainingOperators = false;
        display.textContent += event.target.textContent;
    }
    else if (justEquated){
        display.textContent = event.target.textContent;
        justEquated = false;
    }
    else{
        display.textContent += event.target.textContent;
    }

}

function addDecimal(){
    if(display.textContent != "" && display.textContent.includes(".") == false){
        display.textContent += ".";
    }
}


function setOperator(event){
    if(display.textContent == ""){
        operator = event.target.textContent;
        return;
    }
    if(chainingOperators){       
        display.textContent = "";
        chainingOperators = false;
    }
    if(operator == null){
        num1 = parseFloat(display.textContent);
        operator = event.target.textContent;
        display.textContent = "";
    }
    else{
        chainingOperators = true; 
        equate();
        justEquated = false;
        if(display.textContent != ""){
            num1 = parseFloat(display.textContent);
        }
        else{
            num1 = parseFloat(ans);
        }
        operator = event.target.textContent;
    }
}


function equate(){
    if(display.textContent == ""){
        return;
    }
    num2 = parseFloat(display.textContent);
    ans = operate(operator, num1, num2);
    operator = null
    display.textContent = parseFloat(ans.toFixed(3));
    justEquated = true;
}

function clearCalc(){
    display.textContent = "";
    num1 = null;
    num2 = null;
    ans = null;
    operator = null;
}

function useBackSpace (){
    if(display.textContent != ""){
        display.textContent = display.textContent.slice(0, -1);
    }
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
    if(num2 == 0){
        alert("You cant divide by zero!");
        return num1 / 1;
    }
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
