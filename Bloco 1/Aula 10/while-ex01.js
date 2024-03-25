const leia = require('readline-sync')

var lista = true, idade, abaixo21 = 0, acima50 = 0

while (lista) {
    let idade = leia.questionInt("Digite a idade: ")

     if (idade < 0) {
        lista = false
     } else if (idade > 0 && idade < 21) {
        abaixo21++;
     } else if (idade > 50) {
        acima50++;
     }
}

console.log("Quantidade de pessoas com idade abaixo de 21 anos: " +abaixo21);
console.log("Quantidade de pessoas com idade acima de 50 anos: " +acima50);