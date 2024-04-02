const leia = require("readline-sync");
import { Queue } from "./Queue";

const fila = new Queue<string>();
let menu: number;

do {
    console.log("1 - Adicionar cliente na fila");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Retirar cliente da fila");
    console.log("0 - Sair ");
    console.log("Entre com a opção desejada: ")
    menu = leia.questionInt("");

    switch(menu){
        case 1:
            const nome = leia.question("Digite um nome: ");
            fila.enqueue(nome);
            console.log("Fila: ")
            fila.printQueue();
            console.log("Cliente adicionado!")
            break;
        case 2:
            if (fila.isEmpty())
                console.log("Fila está vazia!");
            else {
                console.log("Lista de clientes na fila: ")
                fila.printQueue();
            }
            break;
        case 3:
            if (fila.isEmpty())
                console.log("Fila está vazia!")
            else {
                fila.dequeue(); //remover o primeiro
                console.log("Fila:");
                fila.printQueue();
                console.log("O cliente foi chamado!")
            }
            break;
        case 0:
            console.log("Programa Finalizado!");
            break;
        default:
            console.log("Digite uma opção válida");
    }
} while (menu != 0)