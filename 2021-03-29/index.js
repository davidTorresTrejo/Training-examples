"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* TypeScript 2021-03-30 */
/* Primitive Types */
var name = 'steve';
var myName = 'David';
var myAge = 23;
var hasJob = true;
var color = 'white';
color = 313074592;
/* Reference Types */
// Array
var myHobbies = ['soccer', 'cooking'];
// Tuples
var myAdress = ['Park street', 23];
// Enum
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Red"] = 101] = "Red";
})(Color || (Color = {}));
var myColor = Color.Red;
/* Functions */
function sayHello(name) {
    return "Hello $(name)";
}
var resulName = sayHello('David');
function print() {
    console.log('Printing....');
}
print();
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(12, 13));
// Function Type
function printMe(data) {
    return "Hello $(data)";
}
var greetings;
greetings = printMe;
greetings('Steve');
var user = {
    name: 'David',
    age: 23,
    hobbies: ['programming', 'soccer'],
    print: function (data) {
        console.log(data);
    }
};
var userData = user;
/* Accesing to 'user' elements */
console.log(userData.name);
/* Union Types */
var age = '27';
var myObj = null;
