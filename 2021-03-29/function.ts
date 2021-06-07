/* Functions */

// Normal Function
function print(): void{
    console.log('Printing...');
}

// Function Expression
let addNumbers = function(num1: number, num2: number): number{
    return num1 + num2;
}

addNumbers(2,45);

// Arrow function
let multiplyNumbers = (num1: number, num2: number = 3): number =>{
    return num1 * num2;
}
console.log(multiplyNumbers(2));

let multiplyNumbers2 = (num1: number, num2: number): number => num1 * num2;
console.log(multiplyNumbers2(2,3));


/* Spread Operator (Arrays & Objects) */
const numbers: number[] = [2,4,6,8];
const numbersDup: number[] = [...numbers];      //Duplication of data

const object: myType = {name: 'steve', age: 32};
const objectDup: myType= {...object};

type myType = {name: string, age: number};


function save(obj: myType){
    /* Mutate or Modify */
    obj.name = 'Luis';
}

save(object);
console.log("Object Modify: " + object.name);

/* Desctructuring Operator Array & Objects */
const hobbies: string[] = ['soccer', 'freestyle'];
//const hobbie1 = hobbies [0];
//const hobbie2 = hobbies [1];

const [hobbie1, hobbie2] = hobbies;

const userData1: myType = {name: 'Luis', age: 23};
//const userName = userData1.name;
//const userAge = userData1.age;
const {name: userName, age: userAge} = userData1;

/* Template Litelars (string) */
let userName1 = 'David';
let greeting = 'Hello ' + userData1;

let greeting1 = `Hello ${userName1}`;

