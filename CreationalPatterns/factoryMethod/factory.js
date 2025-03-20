// Создание класса, который будет создавать объекты на основании своих данных (Super class)
// Когда нужно создавать множество однотипных объектов (с одинаковой структурой, но разными данными: свойства, методы)

//class constructor - генерирует объект


class Bmw { // Структура машины класса БМВ
    constructor(model, price, maxSpeed, color) { //Свойства передаются в виде аргументов
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.color = color;
    }
};

class BmwFactory { //Фабрика по производству машин (определенного типа)
    create(type) {
        if(type === 'X5') return new Bmw(type, 10800, 300, "red");
        if(type === 'X6') return new Bmw(type, 111000, 320, "blue");
    }
};

const factory = new BmwFactory(); // Создаем экземпляр фабрики

const x5 = factory.create('X5'); //Создаем машину
const x6 = factory.create('X6'); //Создаем машину

console.log(x5);

//1. Cоздаем экземпляр фабрики. 
//2. Внутри вызываем метод create и передаем аргумент. 
//3. Создаем и возвращаем экземпляр - объект - машину BMW X5. 
//4. Создаем и возвращаем экземпляр - объект - машину BMW X6. 
//5. И дальше их просто клонируем