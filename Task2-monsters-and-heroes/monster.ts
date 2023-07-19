import { EntityType, Player } from './my-export-library';

export class Monster extends Player {
    constructor(
        name: string,
        health: number,
        strength: number,
        type: EntityType.Monster
    ) {
        super(name, health, strength, EntityType.Monster);
        this.name = name;
        this.type = type;
    }
}