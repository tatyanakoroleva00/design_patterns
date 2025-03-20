class Friends {
    firstName;
    age;
    profession;

    constructor(firstName, age, profession) {
        this.firstName = firstName;
        this.age = age;
        this.profession = profession;
    }
}
class Worker extends Friends {
    greeting () {
        return (`Hi, I am a ${this.firstName}. And I am ${this.age} and a ${this.profession} by profession.`);
    }
}
class Programmer extends Friends  {
    greeting () {
        return (`Hi, I am a ${this.firstName}. And I am ${this.age} and a ${this.profession} by profession.`);
    }
}
class Teacher extends Friends  {
    greeting () {
        return (`Hi, I am a ${this.firstName}. And I am ${this.age} and a ${this.profession} by profession.`);
    }
}

const worker1 =  new Worker('Ann', 25, 'worker');
const programmer1 =  new Programmer('Ivan', 32, 'programmer');
const teacher1 =  new Teacher('Susan', 18, 'teacher');

const friendsList = [worker1, programmer1, teacher1];

function massGreeting(data) {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].greeting());
    }
}
massGreeting(friendsList);
