export class Conta {

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


	public get_numero(): number {
		return this._numero;
	}

	public get_agencia(): number {
		return this._agencia;
	}

	public get_tipo(): number {
		return this._tipo;
	}

	public get_titular(): string {
		return this._titular;
	}

	public get_saldo(): number {
		return this._saldo;
	}

	public set_numero(value: number) {
		this._numero = value;
	}

	public set_agencia(value: number) {
		this._agencia = value;
	}

	public set_tipo(value: number) {
		this._tipo = value;
	}

	public set_titular(value: string) {
		this._titular = value;
	}

	public set_saldo(value: number) {
		this._saldo = value;
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
        this._saldo = this._saldo + valor
    }

    public visualizar(): void{

        let tipo: string = " ";
        
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
        console.log(`Tipo da conta: ${this._tipo}`)
        console.log(`Títular da conta: ${this._titular}`)
        console.log(`Saldo da conta: ${this._saldo}\n`)

    }

}