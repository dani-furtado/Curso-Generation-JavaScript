const leia = require('readline-sync')

var n1, n2, n3

n1 = leia.questionInt("Digite um número: ")
n2 = leia.questionInt("Digite outro número: ")
n3 = leia.questionInt("Digite outro número: ")

if (n1+n2 > n3) {
    console.log("A soma do número 1 e 2 é maior que o número 3")
} else if (n1+n2 < n3) {
    console.log("A soma do número 1 e 2 é menor que o número 3")
} else if (n1+n2 === n3) {
    console.log("A soma do número 1 e 2 é igual ao o número 3")
}


    
