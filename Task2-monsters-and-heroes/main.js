"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var my_export_library_1 = require("./my-export-library");
var player1 = new my_export_library_1.Hero("Superman", 100, 10, my_export_library_1.EntityType.Hero);
var player2 = new my_export_library_1.Monster("Joker", 100, 15, my_export_library_1.EntityType.Monster);
var player3 = new my_export_library_1.Hero("Batman", 100, 11, my_export_library_1.EntityType.Hero);
var player4 = new my_export_library_1.Monster("Hulk", 100, 20, my_export_library_1.EntityType.Monster);
//const battle = new Battle<Entity>(player1, player2);
//battle.fight(player1, player2);
var battle2 = new my_export_library_1.Battle(player2, player1);
battle2.fight(player2, player1);
//const battle3 = new Battle<Entity>(player1, player3);
//battle3.fight(player1, player3);
var battle4 = new my_export_library_1.Battle(player2, player4);
//battle4.fight(player2, player4);
