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
            result = addBinary(operands[0],operands[1])
            break;
    
        default:
            console.log("Oops")
            break;
    }

    return result;
}

function xor(a, b){return (a === b ? 0 : 1);}
function and(a, b){return a == 1 && b == 1 ? 1 : 0;}
function or(a, b){return (a || b);}

function halfAdder(a, b){
    const sum = xor(a,b);
    const carry = and(a,b);
    return [sum, carry];
}

function fullAdder(a, b, carry){
    halfAdd = halfAdder(a,b);
    const sum = xor(carry, halfAdd[0]);
    carry = and(carry, halfAdd[0]);
    carry = or(carry, halfAdd[1]);
    return [sum, carry];
}

function addBinary(a, b){

    let sum = '';
    let carry = '';
  
    for(var i = a.length-1;i>=0; i--){
      if(i == a.length-1){
        //half add the first pair
        const halfAdd1 = halfAdder(a[i],b[i]);
        sum = halfAdd1[0]+sum;
        carry = halfAdd1[1];
      }else{
        //full add the rest
        const fullAdd = fullAdder(a[i],b[i],carry);
        sum = fullAdd[0]+sum;
        carry = fullAdd[1];
      }
    }
  
    return carry ? carry + sum : sum;
  }