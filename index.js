var n1 = document.getElementById("btn1");
var n2 = document.getElementById("btn2");

function add(n1,n2){
    return n1 + n2
}

function subtration(n1,n2){
    return n1 - n2
}

function multiply(n1,n2){
    return n1 * n2
}

function division(n1,n2){
    
}


function operate(n1,n2,op){

}

document.getElementById("btnsupreme").addEventListener("click", function() {
    var number1 = parseFloat(n1.value);
    var number2 = parseFloat(n2.value);
    var result = number1 + number2; //
    alert("Resultado: " + result);
});
