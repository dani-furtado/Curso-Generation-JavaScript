import { Ciclista } from './Ciclista';
import { Corredor } from './Corredor';
import { Nadador } from "./Nadador";

export function main() {

    const ciclista: Ciclista = new Ciclista("Joana")
    ciclista.visualizar;
    ciclista.aquecer;
    ciclista.pedalar;
    ciclista.cansou;

    const corredor: Corredor = new Corredor("Bruna")
    corredor.visualizar;
    corredor.aquecer;
    corredor.correr;
    corredor.cansou;

    const nadador: Nadador = new Nadador("Ari")
    nadador.visualizar;
    nadador.aquecer;
    nadador.nadar;
    nadador.cansou;
}

main ();