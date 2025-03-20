// SINGLETON

// let instance;

// class Counter {
//     constructor () {
//         if(!instance) instance = this;
//         return instance;
//     }
// }

let instance; //глобальная переменная не совсем хороший тон, т.к. ее можно случайно изменить
class Counter {
    constructor() {
        if(!instance) instance = this; // Ссылка на instance, не будет создаваться каждый раз новый объект. 
        instance.count = 0;
        return instance;
    }
    getCount() {
        return instance.count;
    }
    increaseCount() {
        return instance.count++;
    }
}
let myCount1 = new Counter(); // Просто ссылка на instance
let myCount2 = new Counter(); // Просто ссылка на instance

myCount1.increaseCount(); //1
myCount1.increaseCount(); //2
myCount2.increaseCount(); //3
myCount2.increaseCount(); //4

console.log(myCount2.getCount()); //->4
console.log(myCount1.getCount()); //->4 
// 
// 
// Т.е. будет меняться сущность instance. Любой объект созданный будет получать ссылку на instance, 
// а не создавать каждый раз новый instance.
// Два разных объекта изменяют объект 4 раза - объект instance. Глобальная переменная instance была создана для этого. 




//Поэтому мы сделаем иначе: 