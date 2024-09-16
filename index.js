var n1 = document.getElementById("btn1");
var n2 = document.getElementById("btn2");

document.getElementById("btnsupreme").addEventListener("click", function() {
    var number1 = parseFloat(n1.value);
    var number2 = parseFloat(n2.value);
    var result = number1 + number2; // Exemplo de operação (soma)
    alert("Resultado: " + result);
});
