"use strict";
/* Class */
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
// Template - Blueprint
// Scope: public, private, proteceted
// Initialization: constructor
//Extending: extends
var Person = /** @class */ (function () {
    //protected type: string  ='Person';
    // Constructor
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.printAge = function () {
        console.log('Age:...');
    };
    return Person;
}());
// Object
var jhon = new Person('Steve', 23);
//jhon.printAge();
/* Inheritance */
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, major) {
        var _this = _super.call(this, name, age) || this;
        _this.major = '';
        _this.major = major;
        return _this;
    }
    return Student;
}(Person));
var mike = new Student('Mike', 21, 'Math');
/* Getters & Setters */
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = '';
        this._age = 0;
    }
    Object.defineProperty(Person1.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value > 50) {
                console.log('Please give a valid age...');
                return;
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person1;
}());
var objPerson = new Person1();
objPerson.name = 'David'; // get this value from textbox
objPerson.age = 23; // get this value from textbox
console.log(objPerson);
function saveToDB(obj) {
    console.log('Saving to DB....');
}
/* Static */
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.calculateCircumference = function (dia) {
        return this.PI * dia;
    };
    Helper.PI = 3.14;
    return Helper;
}());
console.log('Cirlce Area : ' + Helper.calculateCircumference(23));
//let objHelper = new Helper();
//let resutl = objHelper.calculateCircumference(12);
