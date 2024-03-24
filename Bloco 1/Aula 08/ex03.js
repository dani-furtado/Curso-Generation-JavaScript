const leia = require('readline-sync')

var salbru, adcnot, hrextra, desc, salliq

salbru = leia.questionFloat("Qual é o seu salário bruto? ")
adcnot = leia.questionFloat("Qual é o seu adicional noturno? ")
hrextra = leia.questionFloat("Quantas horas extras você faz? ")
desc = leia.questionFloat("Quanto você tem descontado? ")

salliq = (salbru + adcnot + (hrextra*5) - desc)

console.log("Seu salário líquido é de: R$" +salliq)