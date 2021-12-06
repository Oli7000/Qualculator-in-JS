let numberInInput = 0;
let secondNumber = 0;
let operation = "";
let total = 0;

function display(number) {
    document.getElementById("input").value = number;

    if (numberInInput) {
        secondNumber = number;
        console.log(secondNumber);
    } else {
        numberInInput = number;
        console.log(numberInInput);
    }
}

function clearNum() {
    numberInInput = 0;
    secondNumber = 0;
    total = 0;
    operation = 0;
    document.getElementById("input").value = "0";
}

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

function solve() {
    if (operation == "addition" && total == 0) {
        total = numberInInput + secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "subtraction" && total == 0) {
        total = numberInInput - secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "divide" && total == 0) {
        total = numberInInput / secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "multiply" && total == 0) {
        total = numberInInput * secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "modulo" && total == 0) {
        total = numberInInput % secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "addition" && total != 0) {
        total = total + secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "subtraction" && total != 0) {
        total = total - secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "divide" && total != 0) {
        total = total / secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "multiply" && total != 0) {
        total = total * secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    } else if (operation == "modulo" && total != 0) {
        total = total % secondNumber;
        document.getElementById("input").value = "";
        document.getElementById("input").value = total;
    }
}

function clearLastNumber() {
    let text = document.getElementById("input").value;
    // https://stackoverflow.com/questions/952924/how-do-i-chop-slice-trim-off-last-character-in-string-using-javascript
    text = parseInt(text.substring(0, text.length - 1));
    document.getElementById("input").value = text;
    numberInInput = text;
    console.log(numberInInput);
}