import readlinesync = require("readline-sync");
import { colors } from './node_modules/src/util/colors';
import { Conta } from './node_modules/src/model/Conta';

export function main () {

    let menu: number;

    let c1: Conta = new Conta(1, 123, 1, "Natasha", 1000000)
    c1.visualizar()


    while (true) {

        console.log(colors.bg.black, colors.fg.yellow, 

        console.log("Bem vindo ao Banco DCF. Escolha a opção do menu abaixo:");
        console.log("\nOpção 1: Criar conta");
        console.log("Opção 2: Listar todas as contas");
        console.log("Opção 3: Buscar conta por número");
        console.log("Opção 4: Atualizar dados da conta");
        console.log("Opção 5: Apagar conta");
        console.log("Opção 6: Sacar");
        console.log("Opção 7: Depositar");
        console.log("Opção 8: Transferir");
        console.log("Opção 9: Sair");
        
        colors.reset);

        console.log("\nQual opção você deseja prosseguir?")
        menu = readlinesync.questionInt("")

        switch (menu){
            case 1: console.log("Criar conta")
            break;
            case 2: console.log("Listar todas as contas")
            break;
            case 3: console.log("Buscar conta por número")
            break;
            case 4: console.log("Atualizar dados da conta")
            break;
            case 5: console.log("Apagar conta")
            break;
            case 6: console.log("Sacar")
            break;
            case 7: console.log("Depositar")
            break;
            case 8: console.log("Transferir")
            break;
            default: console.log("Opção inválida")
            break;
        }

    }
}

function sobre(): void {
    console.log("Projeto desenvolvido por: Daniele Furtado")
    console.log("Generation Brasil - generation@generation.org")
    console.log("GitHub: https://github.com/dani-furtado")
}

main();
sobre();