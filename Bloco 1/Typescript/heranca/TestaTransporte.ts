import { Terrestre } from "./Terrestre"
import { Transporte } from "./Transportes"
import { Automovel } from "./Automovel";

export function main() {

    const aut1: Automovel = new Automovel(5, 4, 250.00, "Verde", 4, "EBN-0301", 0);

    aut1.visualizar();

}

main();



/* let t1: Transporte = new Transporte(5);

t1.capacidade = 4;
console.log(`A capacidade do meio de transporte é: ${t1.capacidade}`)

let ter1: Terrestre = new Terrestre(5, 4, 200);

ter1.visualizar();*/


