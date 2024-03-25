const leia = require('readline-sync')

var nome, idade, pdoa

nome = leia.question("Digite seu nome: ")
idade = leia.questionInt("Digite sua idade: ")
pdoa = leia.question("É sua primeira doação? Digite sim ou não: ")

if (pdoa === "sim" || pdoa === "Sim") {
    pdoa = false 
} else {
    pdoa = true
}

if (idade >= 18 && idade <= 59) {
    console.log(nome + " tem " + idade + " anos e está apto para doar") 
} else if (idade >= 60 && idade <= 69 && pdoa === false) {
    console.log(nome + " tem " + idade + " anos e não está apto para doar")
} else if (idade >=60 && idade <=69 && pdoa === true) {
    console.log(nome + " tem " + idade + " anos e está apto para doar")
}