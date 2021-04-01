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
        console.log('Age:...');
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
            console.log('Please give a valid age...');
            return;
        }
        this._age = value;
    }

}

let objPerson = new Person1();
objPerson.name  = 'David';              // get this value from textbox
objPerson.age = 23;                     // get this value from textbox
console.log(objPerson);


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

console.log('Cirlce Area : '+ Helper.calculateCircumference(23));
//let objHelper = new Helper();
//let resutl = objHelper.calculateCircumference(12);