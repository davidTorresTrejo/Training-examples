/* Class */

// Template - Blueprint
// Scope: public, private, proteceted
// Initialization: constructor
//Extending: extends
class Person{

    public name: string;
    public age: number;
    //protected type: string  ='Person';

    // Constructor
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    public printAge(){
        //console.log('Age:...');
    }
}

// Object
const jhon = new Person('Steve', 23);
//jhon.printAge();


/* Inheritance */

class Student extends Person{
    public major: string = '';

    constructor(name: string, age: number, major: string){
        super(name, age);
        this.major = major;
    }
}
const mike = new Student('Mike', 21, 'Math');


/* Getters & Setters */

class Person1{
    public name: string = '';
    private _age: number = 0;

    get age(){
        return this._age;
    }

    set age(value: number){
        if(value > 50){
            //console.log('Please give a valid age...');
            return;
        }
        this._age = value;
    }

}

let objPerson = new Person1();
objPerson.name  = 'David';              // get this value from textbox
objPerson.age = 23;                     // get this value from textbox
//console.log(objPerson);


function saveToDB(obj: Person1){
    console.log('Saving to DB....');
}

/* Static */

class Helper{
    static PI: number = 3.14;

     static calculateCircumference(dia: number){
        return this.PI * dia;
    }
}

//console.log('Cirlce Area : '+ Helper.calculateCircumference(23));
//let objHelper = new Helper();
//let resutl = objHelper.calculateCircumference(12);


/* Abstract Class */

abstract class Employee{
    name: string;
    id: string;

    constructor(name: string, id: string){
        this.name = name;
        this.id = id
    }

    // abstract method
    abstract getSalary(): number;

    getDetails(): string{
        return `Name: ${this.name} and ID: ${this.id}`;
    }
}


class Developer extends Employee{

    /* Implementing method */
    getSalary(){
        return 7000;
    }
}

/* Create a new instance of Developer Class */

let tom = new Developer('Tom', 'EMP002');
//console.log(tom.getDetails());
//console.log(tom.getSalary());

/* Interfaces */ 

interface IEmployee{
    name: string;
    id: string;

    getDetails(): string;
}

/* Implementing IEmployee Interface */

class Employee1 implements IEmployee, IEmployeeNew{
    name: string;
    id: string;
    age: number;

    constructor(name: string, id: string, age: number){
        this.name = name;
        this.id = id;
        this.age = age;
    }

    getDetails(): string{
        return `Name: ${this.name} with Id: ${this.id} and Age: ${this.age}`;
    }
}

// Create a new instance of Empleoye1 that implements IEmployee Interface
let employee = new Employee1('David','1', 23);
//console.log(employee.getDetails());

// Also, interfaces can extend from other interface

interface IEmployeeNew extends IEmployee{
    age: number;
}

/* Assigment */

// 1. Create an interface for Encryptor
// 2. Create an Encryptor
// 3. Create concrete / specialized class

interface IEncryptor{
    data: string;                   // Data 
    encryptData: string;            // Encrypted Data
    decryptData: string;            // Decrypted Data

    // Method to Encrypt Data
    doEncryptData(data: string): string;
    // Method to Decrypt Data
    doDecryptData(data: string): string;
}

/* Implementing IEncryptor Interface to SymetricEncryption Class */
class SymetricEncryption implements IEncryptor{
    data: string;
    encryptData: string  = '';            
    decryptData: string = '';             

    constructor(data: string){
        this.data = data;
    }

    doEncryptData(data: string): string{
        // create symetric encryption algorithm 
        return this.encryptData;
    }

    doDecryptData(encryptData: string): string{
        // create symetric decryption algorithm 
        return this.decryptData;
    }
}

/* Implementing IEncryptor Interface to AsymetricEncryption Class */

class AsymetricDecryption implements IEncryptor{
    data: string;
    encryptData: string = '';
    decryptData: string = '';
    
    constructor(data: string){
        this.data = data;
    }

    doEncryptData(data: string): string{
        // create symetric encryption algorithm 
        return this.encryptData;
    }

    doDecryptData(encryptData: string): string{
        // create symetric decryption algorithm 
        return this.decryptData;
    }
}

/* Usage */

let syn = new SymetricEncryption('Hello');
syn.doEncryptData(syn.data);

let asyn = new AsymetricDecryption('Hello');
asyn.doEncryptData(asyn.data);

/* Encryption Cluster */

interface IEncryption{
    encrypt(data: string): string;
    decrypt(data: string): string;
}

class SymetricEncryptionExample implements IEncryption{
    encrypt(data: string): string{
        return `xyz${data}`;
    }

    decrypt(data: string): string{
        return data.slice(3);
    }
}

class AsymetricEncryptionExample implements IEncryption{
    encrypt(data: string): string{
        return `abc${data}`;
    }

    decrypt(data: string): string{
        return data.slice(3);
    }
}

class CrazyEncryption implements IEncryption{
    encrypt(data: string): string{
        return `---${data}`;
    }

    decrypt(data: string): string{
        return data.slice(3);
    }
}

/* Persistance Cluster */

class Oracle{
    _encObj: IEncryption;

    constructor(encObj: IEncryption){
        this._encObj = encObj;
    }

    save(data: string): void{
        //encrypt
        let encryptedData = this._encObj.encrypt(data);
        //save encryptedData to DB
        console.log('Oracle Data... ', encryptedData);
    }
}

/* Use Oracle Class to save Data */
// TODO: Read a config file and get what encryption is used
// Choose one Symetric, Asymetric, Crazy)
let dbObj = new Oracle(new SymetricEncryptionExample());
dbObj.save('David');

// You can choose one class to implement encrypt that you prefer

/* Interface in functions */

interface IPerson{
    name: string,
    age: number
}

function greet(data: IPerson){
    console.log(`Hello ${data.name}, your age is ${data.age}`);
}

// Usage
let person = {
    name: 'Steve',
    age: 23
}

greet(person);

