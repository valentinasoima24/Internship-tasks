import { EntityType, AttackAndEffect } from './my-export-library';

export class Monster extends AttackAndEffect {
    public constructor(
        public name: string,
        public health: number,
        public strength: number,
        public type: EntityType.Monster
    ) {
        super(health, strength);
        this.name = name;
        this.type = type;
    }
}