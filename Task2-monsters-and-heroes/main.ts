import { Entity, EntityType, Hero, Monster, Battle } from './myExportLibrary';

const player1 = new Hero("Superman", 100, 10, EntityType.Hero);
const player2 = new Monster("Joker", 100, 15, EntityType.Monster);
const player3 = new Hero("Batman", 100, 11, EntityType.Hero);
const player4 = new Monster("Hulk", 100, 20, EntityType.Monster);

const battle = new Battle<Entity>(player1, player2);
battle.fight(player1, player2);

const battle2 = new Battle<Entity>(player2, player1);
battle2.fight(player2, player1);

const battle3 = new Battle<Entity>(player1, player3);
battle3.fight(player1, player3);

const battle4 = new Battle<Entity>(player2, player4);
battle4.fight(player2, player4);