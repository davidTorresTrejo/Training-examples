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
        //console.log('Age:...');
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
                //console.log('Please give a valid age...');
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
//console.log(objPerson);
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
//console.log('Cirlce Area : '+ Helper.calculateCircumference(23));
//let objHelper = new Helper();
//let resutl = objHelper.calculateCircumference(12);
/* Abstract Class */
var Employee = /** @class */ (function () {
    function Employee(name, id) {
        this.name = name;
        this.id = id;
    }
    Employee.prototype.getDetails = function () {
        return "Name: " + this.name + " and ID: " + this.id;
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* Implementing method */
    Developer.prototype.getSalary = function () {
        return 7000;
    };
    return Developer;
}(Employee));
/* Create a new instance of Developer Class */
var tom = new Developer('Tom', 'EMP002');
/* Implementing IEmployee Interface */
var Employee1 = /** @class */ (function () {
    function Employee1(name, id, age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }
    Employee1.prototype.getDetails = function () {
        return "Name: " + this.name + " with Id: " + this.id + " and Age: " + this.age;
    };
    return Employee1;
}());
// Create a new instance of Empleoye1 that implements IEmployee Interface
var employee = new Employee1('David', '1', 23);
/* Implementing IEncryptor Interface to SymetricEncryption Class */
var SymetricEncryption = /** @class */ (function () {
    function SymetricEncryption(data) {
        this.encryptData = '';
        this.decryptData = '';
        this.data = data;
    }
    SymetricEncryption.prototype.doEncryptData = function (data) {
        // create symetric encryption algorithm 
        return this.encryptData;
    };
    SymetricEncryption.prototype.doDecryptData = function (encryptData) {
        // create symetric decryption algorithm 
        return this.decryptData;
    };
    return SymetricEncryption;
}());
/* Implementing IEncryptor Interface to AsymetricEncryption Class */
var AsymetricDecryption = /** @class */ (function () {
    function AsymetricDecryption(data) {
        this.encryptData = '';
        this.decryptData = '';
        this.data = data;
    }
    AsymetricDecryption.prototype.doEncryptData = function (data) {
        // create symetric encryption algorithm 
        return this.encryptData;
    };
    AsymetricDecryption.prototype.doDecryptData = function (encryptData) {
        // create symetric decryption algorithm 
        return this.decryptData;
    };
    return AsymetricDecryption;
}());
/* Usage */
var syn = new SymetricEncryption('Hello');
syn.doEncryptData(syn.data);
var asyn = new AsymetricDecryption('Hello');
asyn.doEncryptData(asyn.data);
var SymetricEncryptionExample = /** @class */ (function () {
    function SymetricEncryptionExample() {
    }
    SymetricEncryptionExample.prototype.encrypt = function (data) {
        return "xyz" + data;
    };
    SymetricEncryptionExample.prototype.decrypt = function (data) {
        return data.slice(3);
    };
    return SymetricEncryptionExample;
}());
var AsymetricEncryptionExample = /** @class */ (function () {
    function AsymetricEncryptionExample() {
    }
    AsymetricEncryptionExample.prototype.encrypt = function (data) {
        return "abc" + data;
    };
    AsymetricEncryptionExample.prototype.decrypt = function (data) {
        return data.slice(3);
    };
    return AsymetricEncryptionExample;
}());
var CrazyEncryption = /** @class */ (function () {
    function CrazyEncryption() {
    }
    CrazyEncryption.prototype.encrypt = function (data) {
        return "---" + data;
    };
    CrazyEncryption.prototype.decrypt = function (data) {
        return data.slice(3);
    };
    return CrazyEncryption;
}());
/* Persistance Cluster */
var Oracle = /** @class */ (function () {
    function Oracle(encObj) {
        this._encObj = encObj;
    }
    Oracle.prototype.save = function (data) {
        //encrypt
        var encryptedData = this._encObj.encrypt(data);
        //save encryptedData to DB
        console.log('Oracle Data... ', encryptedData);
    };
    return Oracle;
}());
/* Use Oracle Class to save Data */
// TODO: Read a config file and get what encryption is used
// Choose one Symetric, Asymetric, Crazy)
var dbObj = new Oracle(new SymetricEncryptionExample());
dbObj.save('David');
function greet(data) {
    console.log("Hello " + data.name + ", your age is " + data.age);
}
// Usage
var person = {
    name: 'Steve',
    age: 23
};
greet(person);
