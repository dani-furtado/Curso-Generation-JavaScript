const leia = require('readline-sync')

let vetor = []

for (let x = 0; x < 10; x++) {
    vetor[x] = leia.questionInt("Digite um número: ")
}

let posição = leia.questionInt("Qual número você deseja encontrar a posição? ")

console.log("O número digitado está na posição " + vetor.indexOf(posição))
