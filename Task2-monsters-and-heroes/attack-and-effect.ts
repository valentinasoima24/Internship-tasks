import { Entity, EntityType } from './my-export-library';

export class AttackAndEffect implements Entity {
    name: string;
    health: number;
    strength: number;
    type: EntityType;

    constructor(health: number, strength: number) {
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
