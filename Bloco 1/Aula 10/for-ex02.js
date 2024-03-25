const leia = require('readline-sync')

var x, y, par = 0, impar = 0

for (x = 1; x <= 10; x++) {
    let y = leia.questionInt("Digite um número: ")
        if (y % 2 === 0) {
            par++;
        } else {
            impar++;
    }
}

console.log("Quantidade de números pares: " + par);
console.log("Quantidade de números ímpares: " + impar);