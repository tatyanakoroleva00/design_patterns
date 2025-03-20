class Engine {
    drive() {
        console.log('I drive');
    }
}
class Wheels {
    drive() {
        console.log('A wheel drives')
    }
}
class Car {
    engine = Engine;
    wheels = Wheels;

    constructor() {
        this.engine = new Engine();
        this.wheels = [];
        this.wheels.push(new Wheels());
        this.wheels.push(new Wheels());
        this.wheels.push(new Wheels());
        this.wheels.push(new Wheels());
    }
    //делегирование
    drive() {
        this.engine.drive();
        for (let i = 0; i < this.wheels.length; i++) {
            this.wheels[i].drive();
        }
    }
}
const bmw = new Car();
bmw.drive();