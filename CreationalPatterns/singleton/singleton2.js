// Наилучшая реализация 

class Counter {
    constructor() {
        if(typeof Counter.instance === 'object') {
            return Counter.instance;
        } 
        this.count = 0; //метод объекта
        Counter.instance = this; //объект и ссылка instance.
        return this;
    }
    getCount () {
        return this.count; //метод
    }
    increaseCount() {
        return this.count++; //метод
    }
}
const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();

console.log(myCount1.getCount());
