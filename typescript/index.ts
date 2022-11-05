let firstName: string = 'John';
var numbers: number[] = [1,2,3]
var names: Array<string> = ['Alice', 'John', 'Paul'];
let x: any; // use for unknown types

interface IVehicle {
    wheels: number;
    engine: string;
    drive(): void;
}

class Car implements IVehicle {
    wheels: number;
    engine: string;

    constructor(wheels: number, engine:string){
        this.wheels = wheels;
        this.engine = engine;
    }

    drive(): void {
        console.log('Driving...');
    }    
}

let a = new Car(4, 'v8');
a.drive();