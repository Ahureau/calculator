// Memory

let currentInput = null;
let previousInput = null;
let operatorInput = null;
let gaveResult = false;
let result = null;

// Display

let lineOne = document.getElementById("lineOne");
let lineTwo = document.getElementById("lineTwo");

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

let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let divide = (a , b) => a / b;
let multiply = (a, b) => a * b;

let plusMinus = (input) => {
    if (Number(input) === Math.abs(input)) {
        return Math.abs(input) * -1;
    } else {
        return Math.abs(input);
    }
}

// Operator functions

// Check if operating on new values
let operateEmpty = () => {return operatorInput ? true : false};

// Check if updating operator
let operateUpdate = () => {
    return (previousInput === null && operatorInput != null) ? true : false;}

// Check if operating on existing result
let operateResult = () => {return gaveResult};

// Apply operators
let operateSet = (operator) => {
    operatorInput = operator.textContent;
    if (lineOne.textContent == "") {
        previousInput = `${lineTwo.textContent} ${operatorInput}`;
        lineOne.textContent = previousInput;
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
                operateSet(button);
                break;
            case "plusMinus":
                lineTwo.textContent = plusMinus(lineTwo.textContent);
                break;
            case "ac":
                allClear();
                break;
            case "isEqual":
                console.log("=");
                break;
        }        
    });
});

// if (lineOne.textContent == "" && isValue(button)) {
//     lineTwo.textContent += `${button.textContent}`;
// }