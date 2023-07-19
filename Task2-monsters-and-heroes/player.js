"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    Player.prototype.attack = function (target) {
        var damage = this.strength;
        target.takeDamage(damage);
    };
    Player.prototype.takeDamage = function (amount) {
        this.health -= amount;
    };
    return Player;
}());
exports.Player = Player;
