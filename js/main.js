let numberInInput = 0;
let secondNumber = 0;
let operation = "";
let total = 0;
let buttonCount = 0;

/* To show the button klicks in the input field */
function display(number) {
    if (buttonCount == 0 && operation == "" && numberInInput == 0 && secondNumber == 0 && total == 0) {
        document.getElementById("input").value = number;
        numberInInput = document.getElementById("input").value;
        buttonCount++;
        console.log("1", numberInInput)
    } else if (number == '.' && secondNumber == 0 && total == 0 && buttonCount != 0) {
        document.getElementById("input").value += number;
        numberInInput += number;
    } else if (buttonCount != 0 && operation == "" && numberInInput != 0 && secondNumber == 0 && total == 0) {
        document.getElementById("input").value += number;
        numberInInput += number;
        console.log("2", numberInInput, "", secondNumber)
    } else if (buttonCount != 0 && operation != "" && secondNumber == 0 && total == 0 && numberInInput != 0) {
        document.getElementById("input").value = number;
        secondNumber = document.getElementById("input").value;
        console.log("3", numberInInput, " ", secondNumber)
    } else if (buttonCount != 0 && operation != "" && secondNumber != 0 && total == 0) {
        document.getElementById("input").value += number;
        secondNumber += number;
        console.log("4", numberInInput, " ", secondNumber);
    } else if (total != 0) {
        document.getElementById("input").value = "";
        document.getElementById("input").value = number;
        secondNumber = number;
        console.log("5", secondNumber);
    }
}

/* To delete the value in the input field */
function clearNum() {
    numberInInput = 0;
    secondNumber = 0;
    total = 0;
    operation = "";
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
    }
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