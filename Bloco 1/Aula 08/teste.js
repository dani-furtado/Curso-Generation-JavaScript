const leia = require('readline-sync')

let mensagem;

mensagem = leia.question("\nDigite um valor: ")
console.log('O valor é ' + mensagem)