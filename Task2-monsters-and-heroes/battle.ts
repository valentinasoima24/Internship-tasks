import { Entity } from './my-export-library';

export class Battle<T extends Entity> {
    player1: T;
    player2: T;

    constructor(player1: T, player2: T) {
        this.player1 = player1;
        this.player2 = player2;
    }

    fight(player1: T, player2: T) {
        while (player1.health > 0 && player2.health > 0) {
            player1.attack(player2);
            player2.takeDamage(player1.strength);

            if (player2.health <= 0) {
                console.log(`${player1.name} wins the battle!`);
                break;
            }

            player2.attack(player1);
            player1.takeDamage(player2.strength);

            if (player1.health <= 0) {
                console.log(`${player2.name} wins the battle!`);
                break;
            }
        }
    }
}