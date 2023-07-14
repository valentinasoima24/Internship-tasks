"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var Hero = /** @class */ (function () {
    function Hero(name, health, strength, type) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.type = type;
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    Hero.prototype.attack = function (target) {
        var damage = this.strength;
        target.takeDamage(damage);
    };
    Hero.prototype.takeDamage = function (amount) {
        this.health -= amount;
    };
    return Hero;
}());
exports.Hero = Hero;
