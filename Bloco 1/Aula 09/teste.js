import readline from 'readline-sync';

const nomeDoDoador = readline.question("Digite o nome do doador: ");
const idadeDoDoador = readline.questionInt("Digite a idade do doador: ");
const primeiraDoacao = readline.question("E sua primeira doacao? ");
var boleanoDoacao;

if(primeiraDoacao === "nao" || primeiraDoacao === "n"){
    boleanoDoacao = true;
} else {
    boleanoDoacao = false;
}

if(idadeDoDoador >= 18 && idadeDoDoador <= 59){
    console.log(`${nomeDoDoador} está apto(a/e) a doar sangue!`)
} else if(idadeDoDoador >= 60 && idadeDoDoador <= 69 && boleanoDoacao === true){
    console.log(`${nomeDoDoador} está apto(a/e) a doar sangue!`)
} else{
    console.log(`${nomeDoDoador} não está apto(a/e) para doar sangue!`)
}