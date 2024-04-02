export class Transporte {

    private _capacidade: number;

	constructor(_capacidade: number) {
		this._capacidade = _capacidade;
	}


	public get capacidade(): number {
		return this._capacidade;
	}

	public set capacidade(value: number) {
		this._capacidade = value;
	}

    public visualizar (): void{
        console.log("***************")
        console.log("Meio de Transporte")
        console.log("Capacidade: " + this._capacidade)
        console.log("***************")
    }

    

}