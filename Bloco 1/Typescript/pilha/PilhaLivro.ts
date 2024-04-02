const leia = require("readline-sync");
import { Stack } from "./Stack";

const fila = new Stack<string>();
let menu: number;

do {
    console.log("1 - Adicionar livro na pilha");
    console.log("2 - Listar todos os livros");
    console.log("3 - Retirar livros da pilha");
    console.log("0 - Sair ");
    console.log("Entre com a opção desejada: ")
    menu = leia.questionInt("");

    switch(menu){
        case 1:
            const nome = leia.question("Digite o nome do livro: ");
            fila.push(nome);
            console.log("Pilha: ")
            fila.printStack();
            console.log("Livro adicionado!")
            break;
        case 2:
            if (fila.isEmpty())
                console.log("Pilha está vazia!");
            else {
                console.log("Lista de livros na pilha: ")
                fila.printStack();
            }
            break;
        case 3:
            if (fila.isEmpty())
                console.log("Pilha está vazia!")
            else {
                fila.pop(); //remover 
                console.log("Pilha:");
                fila.printStack();
                console.log("O livro foi retirado!")
            }
            break;
        case 0:
            console.log("Programa Finalizado!");
            break;
        default:
            console.log("Digite uma opção válida");
    }
} while (menu != 0)