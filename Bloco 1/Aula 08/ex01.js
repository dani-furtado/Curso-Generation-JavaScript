const leia = require('readline-sync')

var sal, abo, nSal

sal = leia.questionFloat("Digite seu salário aqui: ")
console.log("Seu salário é de: R$" +sal)
abo = leia.questionFloat("Digite seu abono aqui: ")
console.log("Seu abono é de: R$" +abo)

nSal = sal + abo

console.log("Seu novo salário é de: R$" + nSal)