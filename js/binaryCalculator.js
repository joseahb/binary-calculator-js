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

document.getElementById("btnEql").addEventListener("click", function () {
    let exprStr =  document.getElementById("res").innerHTML;
    let re = /[\+\-\*\/]/g;
    let operator = exprStr.match(re);
    let operands = exprStr.split(re);
    
    if ( operator == null ) {
        window.alert("Invalid operator!")
        document.getElementById("res").innerHTML = "";
    }
    if (operator.length !== 1 && operands.length !== 2) {
        window.alert("Invalid number of operands!")
        document.getElementById("res").innerHTML = "";
    }
    else {
        document.getElementById("res").innerHTML = calculate(operator, operands);
    }
});

function calculate (operator, operands) {
    let result = 0;
    
    switch (String(operator)) {
        case "+":
            var x = parseInt(operands[0], 2);
            var y = parseInt(operands[1], 2);
            var sum = x + y;
            result = sum.toString(2);
            break;
        case "-":
            var x = parseInt(operands[0], 2);
            var y = parseInt(operands[1], 2);
            var sub = x - y;
            result = sub.toString(2);
            break;
        case "*":
            var x = parseInt(operands[0], 2);
            var y = parseInt(operands[1], 2);
            var mul = x * y;
            result = mul.toString(2);
            break;
        case "/":
            var x = parseInt(operands[0], 2);
            var y = parseInt(operands[1], 2);
            var div = x / y;
            result = div.toString(2);
            break;
        default:
            console.log("Oops")
            break;
    }

    return result;
}