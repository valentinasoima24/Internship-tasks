"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
var Monster = /** @class */ (function () {
    function Monster(name, health, strength, type) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.type = type;
    }
    Monster.prototype.attack = function (target) {
        var damage = this.strength;
        target.takeDamage(damage);
    };
    Monster.prototype.takeDamage = function (amount) {
        this.health -= amount;
    };
    return Monster;
}());
exports.Monster = Monster;
