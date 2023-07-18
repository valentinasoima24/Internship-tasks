"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var my_export_library_1 = require("./my-export-library");
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(name, health, strength, type) {
        var _this = _super.call(this, health, strength) || this;
        _this.name = name;
        _this.health = health;
        _this.strength = strength;
        _this.type = type;
        _this.name = name;
        _this.type = type;
        return _this;
    }
    return Hero;
}(my_export_library_1.AttackAndEffect));
exports.Hero = Hero;
