"use strict";
/* Decorators */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratorName(change) {
    console.log('Hi from decorator!');
    var greet = 'Hi...';
    change.prototype.print(greet);
}
var DecoratorPerson = /** @class */ (function () {
    function DecoratorPerson(name) {
        this.name = name;
    }
    DecoratorPerson.prototype.print = function (data) {
        console.log('Printing from DecoratorPerson Class!..', data);
    };
    DecoratorPerson = __decorate([
        decoratorName
    ], DecoratorPerson);
    return DecoratorPerson;
}());
