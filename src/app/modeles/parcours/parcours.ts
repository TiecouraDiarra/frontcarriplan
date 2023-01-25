import { Niveauparcours } from "../niveauparcours/niveauparcours";

export class Parcours {
    id!: number;
    nomparcours!: string;
    description!: string;
    avantage!: string;
    conseil!: string;
    domaine!: string;
    filiere!: string;
    imageparcours !: string;
    niveauparcours!: Niveauparcours;
}
