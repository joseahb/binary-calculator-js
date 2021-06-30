document.getElementById("btn0").addEventListener("click", function() {
    document.getElementById("res").innerHTML += "0";
});

document.getElementById("btn1").addEventListener("click", function() {
    document.getElementById("res").innerHTML += "1";
});

document.getElementById("btnSum").addEventListener("click", function() {
    document.getElementById("res").innerHTML += "+";
});

document.getElementById("btnSub").addEventListener("click", function() {
    document.getElementById("res").innerHTML += "-";
});


document.getElementById("btnMul").addEventListener("click", function() {
    document.getElementById("res").innerHTML += "*";
});

document.getElementById("btnDiv").addEventListener("click", function() {
    document.getElementById("res").innerHTML += "/";
});

document.getElementById("btnClr").addEventListener("click", function() {
    let currentDisplay = document.getElementById("res").innerHTML;
    let newDisplay = currentDisplay.slice(0, currentDisplay.length - 1);
    document.getElementById("res").innerHTML = newDisplay;
});

document.getElementById("btnEql").addEventListener("click", function() {
    let expr =  document.getElementById("res").innerHTML;
    if (!validateExpr(expr)) {
        window.alert("invalid operands");
        document.getElementById("res").innerHTML = "";
    }
    else {
        let result  =  calculate(expr);
        document.getElementById("res").innerHTML = result;
    }
});

function validateExpr(expr) {

}

function calculate (expr) {

}