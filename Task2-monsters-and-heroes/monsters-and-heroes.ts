interface Entity {
    name: string;
    health: number;
    strength: number;
    attack(target: Entity): void;
    takeDamage(amount: number): void;
    type: EntityType
}

class Hero implements Entity {
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

class Monster implements Entity {
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

enum EntityType {
    Hero,
    Monster
}

class Battle<Entity>{
    player1: Hero;
    player2: Monster;

    constructor(player1: Hero, player2: Monster) {
        this.player1 = player1;
        this.player2 = player2;
    }

    fight(player1: Hero, player2: Monster) {
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

const player1 = new Hero("Superman", 100, 10, EntityType.Hero);
const player2 = new Monster("Joker", 100, 15, EntityType.Monster);

const battle = new Battle(player1, player2);
battle.fight(player1, player2);