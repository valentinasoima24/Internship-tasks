import { Entity, EntityType } from './my-export-library';

export abstract class Player implements Entity {
    name: string;
    health: number;
    strength: number;
    type: EntityType;

    constructor(name: string, health: number, strength: number, type: EntityType) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.type = type;
    }

    public attack(target: Entity): void {
        const damage = this.strength;
        target.takeDamage(damage);
    }

    public takeDamage(amount: number): void {
        this.health -= amount;
    }
}
