import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main () {

    let menu: number;

    const contacorrente: ContaCorrente = new ContaCorrente(2, 456, 1, "Ariadne", 15000, 1000)
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 789, 2, "Zeca", 1000, 10)
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

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