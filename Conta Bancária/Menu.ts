import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main () {
    let contas: ContaController = new ContaController();

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];

    console.log("Criar contas");

    let c1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "Daniele", 5000, 400);
    contas.cadastrar(c1);

    let c2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 123, 2, "Ariadne", 6000, 10);
    contas.cadastrar(c2);

    contas.listarTodas();

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
        opcao = readlinesync.questionInt("")

        if (opcao == 9) {
            console.log("Banco DCF agradece seu acesso! Esperamos ajuda-lo em breve novamente.");
            sobre();
            process.exit(0);
        }

        switch (opcao){
            case 1: console.log("Criar conta");
                    console.log("Digite o número da agência: ")
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o nome do títular da conta: ")
                    titular = readlinesync.question("");

                    console.log("Digite o tipo de conta: ")
                    tipo = readlinesync.keyInSelect(tiposContas, "", {cancel: false}) + 1;

                    console.log("Digite o saldo da conta R$: ")
                    saldo = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1: 
                            console.log("Digite o limite da conta R$: ");
                            limite = readlinesync.questionFloat("");
                            contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log("Digite o dia do aniversário da Conta Poupança: ");
                            aniversario = readlinesync.questionInt("");
                            contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                            break;
                    }

                keyPress()
                break;
            case 2: console.log("Listar todas as contas");
                    contas.listarTodas();
                keyPress()
                break;
            case 3: console.log("Buscar conta por número");
                    console.log("Digite o número da conta: ");
                    numero = readlinesync.questionInt("");
                    contas.procurarPorNumero(numero);
                keyPress()
                break;
            case 4: console.log("Atualizar dados da conta");
                    console.log("Digite o número da conta: ")
                    numero = readlinesync.questionInt("");

                    let conta = contas.buscarNoArray(numero);

                    if (conta != null) {
                        console.log("Digite o número da agência: ");
                        agencia = readlinesync.questionInt("");

                        console.log("Digite o nome do titular: ");
                        titular = readlinesync.question("");

                        tipo = conta.tipo;

                        console.log("Digite o saldo da conta: ");
                        saldo = readlinesync.questionFloat("");

                        switch (tipo) {
                            case 1:
                                console.log("Digite o limite da conta: ");
                                limite = readlinesync.questionFloat("");
                                contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                                break;
                            case 2: 
                                console.log("Digite o aniversário da conta poupança: ");
                                aniversario = readlinesync.questionInt("");
                                contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                                break;
                        }
                    } else {
                        console.log("A conta de número " + numero + " não foi encontrada.")
                    }
                keyPress()
                break;
            case 5: console.log("Apagar conta");
                    console.log("Digite o número da conta: ");
                    numero = readlinesync.questionInt("");
                    contas.deletar(numero);
                keyPress()
                break;
            case 6: console.log("Sacar");
                    console.log("Digite o número da conta: ");
                    numero = readlinesync.questionInt("");

                    console.log("Digite o valor do saque: ");
                    valor = readlinesync.questionFloat("");

                    contas.sacar(numero, valor);
                keyPress()
                break;
            case 7: console.log("Depositar");
                    console.log("Digite o número da conta: ");
                    numero =  readlinesync.questionInt("");

                    console.log("Digite o valor do deposito R$: ");
                    valor = readlinesync.questionFloat("");

                    contas.depositar(numero, valor);
                keyPress()
                break;
            case 8: console.log("Transferir");
                    console.log("Digite o número da conta de origem: ");
                    numero =  readlinesync.questionInt("");

                    console.log("Digite o número da conta de destino: ");
                    numeroDestino =  readlinesync.questionInt("");

                    console.log("Digite o valor depositado: ");
                    valor =  readlinesync.questionFloat("");

                    contas.transferir(numero, numeroDestino, valor);
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
    console.log("\nPressione ENTER para continuar...");
    readlinesync.prompt();
}

main();