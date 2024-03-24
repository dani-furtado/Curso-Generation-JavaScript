const leia = require('readline-sync')

var n1, n2, n3, n4, res

n1 = leia.questionFloat("Digite um número: ")
n2 = leia.questionFloat("Digite outro número: ")
n3 = leia.questionFloat("Digite outro número: ")
n4 = leia.questionFloat("Digite outro número: ")
res = (n1*n2) - (n3*n4)

console.log("A diferença entre o produto de número 1 e 2 pelo produto entre o número 3 e 4 é: " +res)