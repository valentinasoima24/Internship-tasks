import { EntityType, Player } from './my-export-library';

export class Hero extends Player {
    constructor(
        name: string,
        health: number,
        strength: number,
        type: EntityType.Hero
    ) {
        super(name, health, strength, EntityType.Hero);
        this.name = name;
        this.type = type;
    }
}