/* Decorators */

function decoratorName(change: Function){
    console.log('Hi from decorator!');
    let greet = 'Hi...';
    change.prototype.print(greet);
    
}

@decoratorName
class DecoratorPerson{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    print(data: string){
        console.log('Printing from DecoratorPerson Class!..', data);
    }
}