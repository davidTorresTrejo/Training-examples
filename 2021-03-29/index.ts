export{};
/* TypeScript 2021-03-30 */

/* Primitive Types */

let name = 'steve';
let myName: string = 'David';
let myAge: number = 23;
let hasJob: boolean = true;
let color: any = 'white';
color = 313074592;

/* Reference Types */

// Array
let myHobbies: string[] = ['soccer', 'cooking'];

// Tuples
let myAdress: [string, number] = ['Park street', 23];

// Enum
enum Color{
    Grey,
    Green = 100,
    Red
}
let myColor: Color = Color.Red;

/* Functions */
function sayHello(name: string){
    return `Hello $(name)`;
}
let resulName: string = sayHello('David');

function print(): void{
    console.log('Printing....');
}
print();

function multiply(num1: number, num2: number): number{
    return num1 * num2;
}
console.log(multiply(12, 13));
 
// Function Type
function printMe(data: string){
    return `Hello $(data)`;
}
 let greetings : (a: string) => string;
 greetings = printMe;

 greetings('Steve');


 /* Objects */
 type Complex = {name: string, age: number, hobbies: string[], print: (data: string) => void};
let user: Complex = {
    name: 'David',
    age: 23,
    hobbies: ['programming', 'soccer'],
    print: function(data: string): void{
        console.log(data);
    }
}

/* Accesing to 'user' elements */
console.log(user.name);


