"use strict";
/* Generics -- separate logic from type */
function echo(data) {
    return data;
}
// Generic function
function betterEcho(data) {
    return data;
}
betterEcho('Hello');
betterEcho(34);
betterEcho({ name: 'Luis', age: 23 });
betterEcho(true);
var arrayString = ['sports', 'music'];
var arrayNumber = [23, 343];
var arrayBoolean = [true, false];
var arrayObject = [{}, {}];
/* Generic Class */
var Collection = /** @class */ (function () {
    function Collection() {
    }
    Collection.prototype.add = function (data) {
        console.log(data);
    };
    return Collection;
}());
var objString = new Collection();
objString.add('Hello');
var objNumber = new Collection();
objNumber.add(23);
