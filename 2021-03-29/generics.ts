/* Generics -- separate logic from type */

function echo(data: any): any{
    return data;
}

// Generic function
function betterEcho<T>(data: T): T{
    return data;
}

betterEcho('Hello');
betterEcho(34);
betterEcho({name: 'Luis', age: 23});
betterEcho(true);

let arrayString: Array<string> = ['sports', 'music'];
let arrayNumber: Array<number> = [23,343];
let arrayBoolean: Array<boolean> = [true, false];
let arrayObject: Array<{}> = [{}, {}];

/* Generic Class */
class Collection <T extends string | number>{
    add(data: T){
        console.log(data);
    }
}

let objString = new Collection<string>();
objString.add('Hello');

let objNumber = new Collection<number>();
objNumber.add(23);



