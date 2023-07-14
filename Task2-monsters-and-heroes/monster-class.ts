import { Entity, EntityType } from './myExportLibrary';

export class Monster implements Entity {
    public constructor(
        public name: string,
        public health: number,
        public strength: number,
        public type: EntityType.Monster
    ) { }

    public attack(target: Entity): void {
        const damage = this.strength;
        target.takeDamage(damage);
    }
    public takeDamage(amount: number): void {
        this.health -= amount;
    }
}