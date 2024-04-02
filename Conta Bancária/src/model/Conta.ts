export abstract class Conta {

    //Atributos do Objeto da Classe conta
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    //Método construtor - Instanciar (criar) um novo Objeto da Classe conta
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}


	public get numero(): number {
		return this._numero;
	}

	public get agencia(): number {
		return this._agencia;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get titular(): string {
		return this._titular;
	}

	public get saldo(): number {
		return this._saldo;
	}

	public set numero(numero: number) {
		this._numero = numero;
	}

	public set agencia(agencia: number) {
		this._agencia = agencia;
	}

	public set tipo(tipo: number) {
		this._tipo = tipo;
	}

	public set titular(titular: string) {
		this._titular = titular;
	}

	public set saldo(saldo: number) {
		this._saldo = saldo;
	}
    

    //Método especifico SACAR
    public sacar(valor: number): boolean{
        if (this._saldo < valor) {
            console.log("Saldo é insuficiente!")
            return false;    
        }

        this._saldo = this._saldo - valor;
        return true;
    }


    //Método especifico DEPOSITAR
    public depositar(valor: number): void{
        this._saldo = this._saldo + valor;
    }

    public visualizar(): void{

        let tipo: string = "";
        
        switch (this._tipo){
            case 1: 
            tipo = "Conta Corrente";
            break;
            case 2: 
            tipo = "Conta Poupança";
            break;
        }

        
        console.log("\n - Dados da conta - ")
        console.log(`Número da conta: ${this._numero}`)
        console.log(`Número da agência: ${this._agencia}`)
        console.log(`Tipo da conta: ${tipo}`)
        console.log(`Títular da conta: ${this._titular}`)
        console.log(`Saldo da conta: ${this._saldo.toFixed(2)}\n`)

    }

}