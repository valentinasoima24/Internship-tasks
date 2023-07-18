import { EntityType } from './my-export-library';

export interface Entity {
    name: string;
    health: number;
    strength: number;
    attack(target: Entity): void;
    takeDamage(amount: number): void;
    type: EntityType
}