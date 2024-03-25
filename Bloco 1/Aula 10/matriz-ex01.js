const leia = require('readline-sync')

let matriz = new Array(3);

for (let indL = 0; indL < matriz.length; indL++){
    matriz[indL] = Array(3);
}

for (let indL = 0; indL < matriz.length; indL++){
  
    for (let indC = 0; indC < matriz.length; indC++){
      
      matriz[indL][indC] = leia.questionInt(`Digite o numero do elemento [${indL}][${indC}]: `);
  
    }
    
}

console.table(matriz)

console.log(`Os elementos da diagonal principal são:  ${matriz[0][0]}, ${matriz[1][1]}, ${matriz[2][2]}`);

console.log(`Os elementos da diagonal secundária são:  ${matriz[2][0]}, ${matriz[1][1]}, ${matriz[0][2]}`);

let somaP = matriz[0][0] + matriz[1][1] + matriz[2][2]

console.log("A soma dos elementos da diagonal principal é: " +somaP)

let somaS = matriz[2][0] + matriz[1][1] + matriz[0][2]

console.log("A soma dos elementos da diagonal secundária é: " +somaS)    