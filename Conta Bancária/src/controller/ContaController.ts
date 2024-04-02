import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
    
    procurarPorTitular(titular: string) {
        let listaContasPorTitular = this.listaContas.filter(c => c.titular.toUpperCase().includes(titular.toUpperCase()))

        for (let conta of listaContasPorTitular){
            conta.visualizar();
        }
    }

    private listaContas: Array<Conta> = new Array<Conta>();
        numero: number = 0;

    procurarPorNumero(numero: number): void{
        let buscaConta = this.buscarNoArray(numero);
        if (buscaConta != null) {
            buscaConta.visualizar();
        } else 
            console.log("A conta número " + numero + " não foi encontrada.")
    }
    
    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A conta número " + conta.numero + " foi criada com sucesso!")
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero) 
            if (buscaConta != null) {
                this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
                console.log("A conta de número " + conta.numero + " foi atualizada com sucesso!");
            } else 
                console.log("A conta número " + conta.numero + " não foi encontrada.");
    }

    deletar(numero: number): void{
        let buscaConta = this.buscarNoArray(numero);
        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log("A conta número " + numero + " foi apagada com sucesso!")
        } else
            console.log("A conta de número " + numero + " não foi encontrada!");
    }

    public sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);
        if (conta != null) {
            if (conta.sacar(valor) == true) 
                console.log("O saque na conta número " + numero + " foi efetuado com sucesso!");
        } else 
            console.log("A conta de número " + numero + "não foi encontrada.")
    }

    public depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);
        if (conta != null) {
            conta.depositar(valor);
            console.log("O deposito a conta número " + numero + " foi efetuada com sucesso!")
        } else 
            console.log("A conta de número " + numero + " não foi encontrada.")
    }
    
    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);
        
        if (contaOrigem != null && contaDestino != null) {
            if (contaOrigem.sacar(valor) == true) {
                contaDestino.depositar(valor);
                console.log("A transferencia da conta de número " + numeroOrigem + " para a conta de número " + numeroDestino + " foi efetuada com sucesso!")
            }
        } else 
            console.log("A conta de número " + numeroOrigem + " e/ou a conta numero: " + numeroDestino + " não foram encontrados.")
    }

    public gerarNumero(): number {
        return ++this.numero;
    }
    
    //Vai verificar se uma conta existe, se existir retorna o valor dela
    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }

}
