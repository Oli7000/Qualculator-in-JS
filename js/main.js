/* First number for input field */
let numberInInput = 0;
/* Second number for input field */
let secondNumber = 0;
/* To store the operation that the wants */
let operation = "";
let previousOperation = "";
/* To calculate the result */
let total = 0;
/* How often the user has clicked on a button */
let buttonCount = 0;

/* To show the button klicks in the input field */
function display(number) {
    console.log(operation);
    if (buttonCount == 0 && operation == "" && numberInInput == 0 && secondNumber == 0 && total == 0) {
        document.getElementById("input").value = number;
        numberInInput = document.getElementById("input").value;
        buttonCount++;
        console.log("Operation 1")
    } else if (number == '.' && secondNumber == 0 && total == 0 && buttonCount != 0) {
        document.getElementById("input").value += number;
        numberInInput += number;
        console.log("Operation 2")
    } else if (buttonCount != 0 && operation == "" && numberInInput != 0 && secondNumber == 0 && total == 0) {
        document.getElementById("input").value += number;
        numberInInput += number;
        console.log("Operation 3")
    } else if (buttonCount != 0 && operation != "" && secondNumber == 0 && total == 0 && numberInInput != 0) {
        document.getElementById("input").value = number;
        secondNumber = document.getElementById("input").value;
        console.log("Operation 4")
    } else if (buttonCount != 0 && operation != "" && secondNumber != 0 && total == 0) {
        document.getElementById("input").value += number;
        secondNumber += number;
        console.log("Operation 5")
    } else if (total != 0 && operation != "") {
        document.getElementById("input").value = "";
        document.getElementById("input").value = number;
        numberInInput = total;
        total = 0;
        secondNumber = number;
        console.log("Operation 6");
    } else if (total != 0 && operation == "") {
        numberInInput = 0;
        secondNumber = 0;
        total = 0;
        operation = "";
        previousOperation = "";
        buttonCount = 0;
        document.getElementById("input").value = number;
        numberInInput = document.getElementById("input").value;
        console.log("Operation 6")
        buttonCount++;
    }
}

/* To delete the value in the input field */
function clearNum() {
    numberInInput = 0;
    secondNumber = 0;
    total = 0;
    operation = "";
    previousOperation = "";
    buttonCount = 0;
    document.getElementById("input").value = "0";
}

/* If plus, minus, divide, multiply or modulo is selected */
function display_add(add) {
    document.getElementById("input").value = "";
    document.getElementById("input").value = add;
    operation = "addition";
}

function display_sub(sub) {
    document.getElementById("input").value = "";
    document.getElementById("input").value = sub;
    operation = "subtraction";
}

function display_divide(divide) {
    document.getElementById("input").value = "";
    document.getElementById("input").value = divide;
    operation = "divide";
}

function display_multi(multi) {
    document.getElementById("input").value = "";
    document.getElementById("input").value = multi;
    operation = "multiply";
}

function display_modulo(modulo) {
    document.getElementById("input").value = "";
    document.getElementById("input").value = modulo;
    operation = "modulo";
}

/* To calculate the result */
function solve() {
    if (operation == "addition" && total == 0) {
        numberInInput = parseFloat(numberInInput);
        secondNumber = parseFloat(secondNumber);
        console.log(numberInInput, secondNumber);
        total = numberInInput + secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
        enterAnimation();
    } else if (operation == "addition" && total != 0) {
        secondNumber = parseInt(secondNumber);
        total += secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
        enterAnimation();
    } else if (previousOperation == "addition" && total != 0) {
        secondNumber = parseInt(secondNumber);
        total += secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
        enterAnimation();
    } else if (previousOperation == "substraction" && total != 0) {
        secondNumber = parseInt(secondNumber);
        total += secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
        enterAnimation();
    } else if (operation == "subtraction" && total == 0) {
        total = numberInInput - secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
        enterAnimation();
    } else if (operation == "subtraction" && total != 0) {
        secondNumber = parseInt(secondNumber);
        total -= secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
        enterAnimation();
    } else if (operation == "divide" && total == 0) {
        total = numberInInput / secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
        enterAnimation();
    } else if (operation == "divide" && total != 0) {
        secondNumber = parseInt(secondNumber);
        total /= secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
        enterAnimation();
        operation = "";
    } else if (previousOperation == "divide" && total != 0) {
        secondNumber = parseInt(secondNumber);
        total += secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
        enterAnimation();
    } else if (operation == "multiply" && total == 0) {
        total = numberInInput * secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
        enterAnimation();
    } else if (operation == "multiply" && total != 0) {
        secondNumber = parseInt(secondNumber);
        total *= secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
        enterAnimation();
    } else if (previousOperation == "multiply" && total != 0) {
        secondNumber = parseInt(secondNumber);
        total += secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
        enterAnimation();
    } else if (operation == "modulo" && total == 0) {
        total = numberInInput % secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
        enterAnimation();
    } else if (operation == "modulo" && total != 0) {
        secondNumber = parseInt(secondNumber);
        total %= secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
        enterAnimation();
    } else if (previousOperation == "modulo" && total != 0) {
        secondNumber = parseInt(secondNumber);
        total += secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
        enterAnimation();
    }
    if (!previousOperation) {
        previousOperation = operation;
    }
    operation = "";
}
/* When user wants to numbers together, a green animation appears in the input field */
function enterAnimation() {
    document.querySelector("input").style = "background-color: #00ff44; transform: 0.5s ease";
    setTimeout(function() { document.querySelector("input").style = "background-color: none; transform: 0.5s ease"; }, 400);
}

/* To delete a digit */
function clearLastNumber() {
    let text = document.getElementById("input").value;
    // https://stackoverflow.com/questions/952924/how-do-i-chop-slice-trim-off-last-character-in-string-using-javascript
    text = text.substring(0, text.length - 1);
    console.log(text);
    document.getElementById("input").value = text;
    numberInInput = text;
    secondNumber = 0;
    total = 0;
}