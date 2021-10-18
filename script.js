//function that display value
function dis(val) {
    document.getElementById("output").value += val
}

//function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("output").value
    let y = eval(x)
    document.getElementById("output").value = y
}

//function that clear the display
function clr() {
    document.getElementById("output").value = ""
}