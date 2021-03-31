"use strict";
/* Functions */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// Normal Function
function print() {
    console.log('Printing...');
}
// Function Expression
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
addNumbers(2, 45);
// Arrow function
var multiplyNumbers = function (num1, num2) {
    if (num2 === void 0) { num2 = 3; }
    return num1 * num2;
};
multiplyNumbers(2);
var multiplyNumbers2 = function (num1, num2) { return num1 * num2; };
multiplyNumbers2(2, 3);
/* Spread Operator (Arrays & Objects) */
var numbers = [2, 4, 6, 8];
var numbersDup = __spreadArray([], numbers); //Duplication of data
var object = { name: 'steve', age: 32 };
var objectDup = __assign({}, object);
function save(obj) {
    /* Mutate or Modify */
    obj.name = 'Luis';
}
save(object);
console.log("Object Modify: " + object.name);
/* Desctructuring Operator Array & Objects */
var hobbies = ['soccer', 'freestyle'];
//const hobbie1 = hobbies [0];
//const hobbie2 = hobbies [1];
var hobbie1 = hobbies[0], hobbie2 = hobbies[1];
var userData1 = { name: 'Luis', age: 23 };
//const userName = userData1.name;
//const userAge = userData1.age;
var userName = userData1.name, userAge = userData1.age;
/* Template Litelars (string) */
var userName1 = 'David';
var greeting = 'Hello ' + userData1;
var greeting1 = "Hello " + userName1;
