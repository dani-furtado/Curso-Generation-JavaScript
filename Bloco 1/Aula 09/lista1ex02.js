const leia = require('readline-sync')

var n1

n1 = leia.questionInt("Digite um número: ")

if (n1%2 === 0 && n1 > 0) {
    console.log("O número digitado é par e positivo")
} else if (n1%2 != 0 && n1 > 0) {
    console.log("O número digitado é ímpar e positivo")
} else if (n1%2 === 0 && n1 < 0) {
    console.log("O número é par e negativo")
} else if (n1%2 != 0 && n1 < 0) {
    console.log("O número é ímpar e negativo")
}