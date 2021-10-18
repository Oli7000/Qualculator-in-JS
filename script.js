// var eins = 1;
// var zwei = 2;
// var drei = 3;
// var vier = 4;
// var fuenf = 5;
// var sex = 6;
// var sieben = 7;
// var acht = 8;
// var neun = 9;
// var nuell = 0;
var input = document.getElementById("output");

var total = 0;

function seven() {
    if (input.value == 0) {
        document.getElementById("output").value = "";
        document.getElementById("output").value += 7;
    } else if (input.value > 0) {
        document.getElementById("output").value += 7;
    }
}

function clearInput() {
    document.getElementById("output").value = 0;
}