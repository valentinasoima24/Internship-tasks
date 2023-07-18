import { EntityType, AttackAndEffect } from './my-export-library';

export class Hero extends AttackAndEffect {
    public constructor(
        public name: string,
        public health: number,
        public strength: number,
        public type: EntityType.Hero
    ) {
        super(health, strength);
        this.name = name;
        this.type = type;
    }
}