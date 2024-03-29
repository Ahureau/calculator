// Globals

// Memory

let currentInput = null;
let previousInput = null;
let operatorInput = null;
let gaveResult = false;
let result = null;

// Display

const lineOne = document.getElementById("lineOne");
const lineTwo = document.getElementById("lineTwo");



// Buttons

// Types of buttons
const isValue = (input) => {
    const values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "period"];
    return values.includes(input.id.toString()) ? input.id : false;
};

const isOperator = (input) => {
    const values = ["substract", "add", "multiply", "divide"];
    return values.includes(input.id.toString()) ? input.id : false;
};

const isEqual = document.getElementById("equal");
const ac = document.getElementById("ac");
const plusToMinus = document.getElementById("plusMinus");

// Checks what type of button
let whatButton = (button) => {
    if (isValue(button)) {
        return "value";
    } else if (isOperator(button)) {
        return "operator";
    } else if (button === plusToMinus) {
        return "plusMinus";
    } else if (button === ac) {
        return "ac";
    } else {
        return "isEqual";
    }
}



// Operators

let add = (a, b) => Number(a) + Number(b);
let substract = (a, b) => Number(a) - Number(b);
let divide = (a , b) => Number(a) / Number(b);
let multiply = (a, b) => Number(a) * Number(b);

let plusMinus = (input) => {
    if (Number(input) === Math.abs(input)) {
        return Math.abs(input) * -1;
    } else {
        return Math.abs(input);
    }
}

// Operator functions

// Check if operating on new values
let operateEmpty = () => {return !operatorInput ? true : false};

// Check if updating operator
let operateUpdate = () => {
    return (previousInput === null && operatorInput != null) ? true : false;
}

// Check if operating on existing result
let operateResult = () => {return gaveResult};

// Check operators function
let operateStatus = () => {
    let status;
    if (operateEmpty()) {
        status = "empty"
    } else if (operateUpdate()) {
        status = "update"
    } else if (operateResult()) {
        status = "result"
    }
    return status;
}

// Apply operators
let operateSet = (operator) => {
    switch (operateStatus()){
        case "empty":
            operatorInput = operator;
            previousInput = lineTwo.textContent;
            lineOne.textContent += `${lineTwo.textContent} ${operator}`;
            lineTwo.textContent = "";
            break;
        case "update":
            console.log("update");
            break;
        case "result":
            console.log("result");
            break;
    }
}


// Decides which operation to run
let whichCalculation = (operator) => {return operator};

// Calculates the result
let calculateResult = () => {
    currentInput = lineTwo.textContent;
    lineOne.textContent += ` ${currentInput} =`;
    lineTwo.textContent = "not firing";
    switch (whichCalculation(operatorInput)) {
        case "+":
            result = add(previousInput, currentInput);
            lineTwo.textContent = result;
            gaveResult = true;
            break;
        case "-":
            lineTwo.textContent = substract(previousInput, currentInput);
            result = lineTwo.textContent;
            gaveResult = true;
            break;
        case "÷":
            lineTwo.textContent = divide(previousInput, currentInput);
            result = lineTwo.textContent;
            gaveResult = true;
            break;
        case "×":
            lineTwo.textContent = multiply(previousInput, currentInput);
            result = lineTwo.textContent;
            gaveResult = true;
            break;
    }
}

// Apply AC
let allClear = () => {
    currentInput = null;
    previousInput = null;
    operatorInput = null;
    let gaveResult = false;
    let result = null;
    lineOne.textContent = "";
    lineTwo.textContent = "";
}



// Adds functions to buttons
const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch (whatButton(button)) {
            case "value":
                lineTwo.textContent += button.textContent;
                break;
            case "operator":
                operateSet(button.textContent);
                break;
            case "plusMinus":
                lineTwo.textContent = plusMinus(lineTwo.textContent);
                break;
            case "ac":
                allClear();
                break;
            case "isEqual":
                calculateResult();
                break;
        }        
    });
});

// if (lineOne.textContent == "" && isValue(button)) {
//     lineTwo.textContent += `${button.textContent}`;
// }