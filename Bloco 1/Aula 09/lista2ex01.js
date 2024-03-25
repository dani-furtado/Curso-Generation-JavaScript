const leia = require('readline-sync')

var item, qtd, valor

console.log("Veja nosso MENU abaixo")
console.log("\n1 - Cachorro Quente: R$ 10.00")
console.log ("2 - X-Salada R$ 15.00")
console.log("3 - X-Bacon R$ 18.00")
console.log("4 - Bauru: R$ 12.00")
console.log ("5 - Refrigerante R$ 8.00")
console.log("6 - Suco de laranja R$ 13.00")

item = leia.questionInt("\nDigite a numeração do item desejado: ")

switch (item) {
  case 1:
    qtd = leia.questionInt("Quantos cachorros quentes você gostaria? ")
    valor = qtd * 10
    console.log("O valor da sua conta é: R$" +valor)
    break;
  case 2:
    qtd = leia.questionInt("Quantos X-Saladas você gostaria? ")
    valor = qtd * 15
    console.log("O valor da sua conta é: R$" +valor)
    break;
  case 3:
    qtd = leia.questionInt("Quantos X-Bacon você gostaria? ")
    valor = qtd * 18
    console.log("O valor da sua conta é: R$" +valor)
    break;
case 4:
    qtd = leia.questionInt("Quantos Baurus você gostaria? ")
    valor = qtd * 12
    console.log("O valor da sua conta é: R$" +valor)
    break;
  case 5:
    qtd = leia.questionInt("Quantos Refrigerantes você gostaria? ");
    valor = qtd * 8
    console.log("O valor da sua conta é: R$" +valor)
    break;
  case 6:
    qtd = leia.questionInt("Quantos Sucos de laranja você gostaria? ");
    valor = qtd * 13
    console.log("O valor da sua conta é: R$" +valor)
    break;
default:
    console.log("Opção inválida!");
}