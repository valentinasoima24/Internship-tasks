import { Entity, EntityType } from './myExportLibrary';

export class Hero implements Entity {
    public constructor(
        public name: string,
        public health: number,
        public strength: number,
        public type: EntityType.Hero
    ) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    public attack(target: Entity): void {
        const damage = this.strength;
        target.takeDamage(damage);
    }
    public takeDamage(amount: number): void {
        this.health -= amount;
    }
}