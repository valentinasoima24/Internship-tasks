"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = void 0;
var Battle = /** @class */ (function () {
    function Battle(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
    Battle.prototype.fight = function (player1, player2) {
        while (player1.health > 0 && player2.health > 0) {
            player1.attack(player2);
            player2.takeDamage(player1.strength);
            if (player2.health <= 0) {
                console.log("".concat(player1.name, " wins the battle!"));
                break;
            }
            player2.attack(player1);
            player1.takeDamage(player2.strength);
            if (player1.health <= 0) {
                console.log("".concat(player2.name, " wins the battle!"));
                break;
            }
        }
    };
    return Battle;
}());
exports.Battle = Battle;
