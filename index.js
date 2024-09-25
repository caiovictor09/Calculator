var n1 = document.getElementById("btn1");
var n2 = document.getElementById("btn2");

function add(n1, n2) {
    return n1 + n2;
}

function subtraction(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function division(n1, n2) {
    if (n2 === 0) {
        return "Cannot divide by zero!";
    }
    return n1 / n2;
}

function operate(n1, n2, op) {
    switch (op) {
        case "add":
            return add(n1, n2);
        case "subtraction":
            return subtraction(n1, n2);
        case "multiply":
            return multiply(n1, n2);
        case "division":
            return division(n1, n2);
        default:
            return null;
    }
}

document.getElementById("btnsupreme").addEventListener("click", function() {
    var number1 = parseFloat(n1.value);
    var number2 = parseFloat(n2.value);
    var operation = document.getElementById("operation").value;
    var result = operate(number1, number2, operation);
    
    // Mostrar o resultado na div
    document.getElementById("result").innerText = "Resultado: " + result;
});
