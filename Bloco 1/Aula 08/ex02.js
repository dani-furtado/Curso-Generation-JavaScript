const leia = require('readline-sync')

var n1, n2, n3, n4, media

n1 = leia.questionFloat("Digite sua nota aqui: ")
n2 = leia.questionFloat("Digite sua nota aqui: ")
n3 = leia.questionFloat("Digite sua nota aqui: ")
n4 = leia.questionFloat("Digite sua nota aqui: ")
media = (n1+n2+n3+n4)/4

console.log("Sua média de notas é de: " +media)