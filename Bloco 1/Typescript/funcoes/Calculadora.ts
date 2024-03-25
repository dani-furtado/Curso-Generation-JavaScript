import readline = require("readline-sync");

let numero1: number;
let numero2: number;

numero1 = readline.questionFloat("Digite o primeiro numero: ")
numero2 = readline.questionFloat("Digite o segundo numero: ")

console.log("Soma: " + somar(numero1, numero2))
console.log("Subtração: " + subtrair(numero1, numero2))
console.log("Multiplicação: " + multiplicar(numero1, numero2))

let divisao = dividir(numero1, numero2)

if (divisao !== null) 
    console.log("Divisão: " + divisao)
else 
    console.log("Não existe divisão por zero!")

console.log("Dividir: " + dividir(numero1, numero2))

about()

//Função com retorno
function somar(numero1: number, numero2: number): number{
    return numero1 + numero2
}

function subtrair(numero1: number, numero2: number): number{
    return numero1 - numero2
}

function multiplicar(numero1: number, numero2: number): number{
    return numero1 * numero2
}

function dividir(numero1: number, numero2: number): number | null{
    let divisao = numero1 / numero2
    return (divisao != Infinity ? divisao : null)
}

//Função sem retorno
function about(): void {
    console.log("Feito por Daniele")
}