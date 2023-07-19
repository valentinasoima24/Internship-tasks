"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackAndEffect = void 0;
var AttackAndEffect = /** @class */ (function () {
    function AttackAndEffect(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    AttackAndEffect.prototype.attack = function (target) {
        var damage = this.strength;
        target.takeDamage(damage);
    };
    AttackAndEffect.prototype.takeDamage = function (amount) {
        this.health -= amount;
    };
    return AttackAndEffect;
}());
exports.AttackAndEffect = AttackAndEffect;
