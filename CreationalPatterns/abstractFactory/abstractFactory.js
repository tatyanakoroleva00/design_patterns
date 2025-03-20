// Семейство общих продуктов: BMW машины
// Абстрактная фабрика - доп. надстройка над другими фабриками.

// Если фабрика возвращает экземпляр конечного класса, то абстрактная фабрика возвращает экземпляр фабрики. 
// Т.е. абстрактная фабрика - фабрика обычных фабрик. 

// Важное условие, чтобы можно было управлять из абстрактной фабрики другими фабриками, должен быть одинаковый интерфейс

// Abstract Factory
function bmwProducer(kind){
    return kind === 'sport' ? sportCarFactory : familyCarFactory; 
}

// Factories
function sportCarFactory() {
    return new Z4(); //Создаем экземпляр класса
}

function familyCarFactory() {
    return new I3(); //Создаем экземпляр класса
}

class Z4{ //Класс машины
    info () {
        return "Z4 is a sport car!";
    }
};

class I3{  //Класс машины
    info () {
        return "I3 is a Family car!";
    }
};

// Initializing Abstract factory of sport cars
const produce = bmwProducer('sport');

// Car producing Factory
const myCar  = new produce();

console.log(myCar.info());
