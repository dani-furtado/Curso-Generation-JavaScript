import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';

export function main () {

    let menu: number;

    let c1: Conta = new Conta(1, 123, 1, "Daniele", 1000000)
    c1.visualizar();
    c1.sacar(10500);
    c1.visualizar();
    c1.depositar(500);
    c1.visualizar();

    while (true) {

        console.log(colors.fg.green,"                                                   Bem vindo ao Banco DCF. Escolha a opção do menu abaixo:");
        console.log("\n                                                                   Opção 1: Criar conta");
        console.log("                                                                   Opção 2: Listar todas as contas");
        console.log("                                                                   Opção 3: Buscar conta por número");
        console.log("                                                                   Opção 4: Atualizar dados da conta");
        console.log("                                                                   Opção 5: Apagar conta");
        console.log("                                                                   Opção 6: Sacar");
        console.log("                                                                   Opção 7: Depositar");
        console.log("                                                                   Opção 8: Transferir");
        console.log("                                                                   Opção 9: Sair", colors.reset);

        console.log(colors.fg.blue, "\n                                                            Qual opção você deseja prosseguir?", colors.reset)
        menu = readlinesync.questionInt("")

        switch (menu){
            case 1: console.log("Criar conta")
            keyPress()
            break;
            case 2: console.log("Listar todas as contas")
            keyPress()
            break;
            case 3: console.log("Buscar conta por número")
            keyPress()
            break;
            case 4: console.log("Atualizar dados da conta")
            keyPress()
            break;
            case 5: console.log("Apagar conta")
            keyPress()
            break;
            case 6: console.log("Sacar")
            keyPress()
            break;
            case 7: console.log("Depositar")
            keyPress()
            break;
            case 8: console.log("Transferir")
            keyPress()
            break;
            default: console.log("Opção inválida")
            keyPress()
            break;
        }

    }
}

function sobre(): void {
    console.log("Projeto desenvolvido por: Daniele Furtado")
    console.log("Generation Brasil - generation@generation.org")
    console.log("GitHub: https://github.com/dani-furtado")
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();