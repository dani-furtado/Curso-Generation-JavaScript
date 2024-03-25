const leia = require('readline-sync')

var num, soma = 0

do {
    num = leia.questionInt("Digite um número: ")
    if (num > 0 && num !== 0){
        soma += num;
    }

} while (num !== 0);

console.log("A soma dos números positivos é: " +soma);