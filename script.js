let numberInInput = 0;
let secondNumber = 0;
let operation = "";
let total = 0;
let buttonCount = 0;

/* Für die Anzeige zuständig */
function display(number) {
    if (buttonCount == 0 && operation == "" && numberInInput == 0 && secondNumber == 0 && total == 0) {
        document.getElementById("input").value = number;
        numberInInput = document.getElementById("input").value;
        buttonCount++;
        console.log("1", numberInInput)
    } else if (buttonCount != 0 && operation == "" && numberInInput != 0 && secondNumber == 0 && total == 0) {
        document.getElementById("input").value += number;
        numberInInput += number;
        console.log("2", numberInInput, "", secondNumber)
    } else if (buttonCount != 0 && operation != "" && secondNumber == 0 && total == 0) {
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

/* Um den Inhalt vom Input Feld zu löschen */
function clearNum() {
    numberInInput = 0;
    secondNumber = 0;
    total = 0;
    operation = "";
    buttonCount = 0;
    document.getElementById("input").value = "0";
}

/* Falls plus, minus, geteilt, mahl oder modulo ausgewählt wird */
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

/* Um das Resultat zu berechnen */
function solve() {
    if (operation == "addition" && total == 0) {
        numberInInput = parseInt(numberInInput);
        secondNumber = parseInt(secondNumber);
        console.log(numberInInput, secondNumber);
        total = numberInInput + secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "addition" && total != 0) {
        secondNumber = parseInt(secondNumber);
        total += secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "subtraction" && total == 0) {
        total = numberInInput - secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "subtraction" && total != 0) {
        secondNumber = parseInt(secondNumber);
        total -= secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "divide" && total == 0) {
        total = numberInInput / secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "divide" && total != 0) {
        secondNumber = parseInt(secondNumber);
        total /= secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "multiply" && total == 0) {
        total = numberInInput * secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "multiply" && total != 0) {
        secondNumber = parseInt(secondNumber);
        total *= secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "modulo" && total == 0) {
        total = numberInInput % secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "modulo" && total != 0) {
        secondNumber = parseInt(secondNumber);
        total %= secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    }
}

/* Um eine ziffer zu löschen */
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