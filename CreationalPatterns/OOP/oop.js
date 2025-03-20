class Users {
    #firstName;
    #lastName;
    age;

    constructor(firstName, lastName, age) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    setAge(value) {
        this.age = value;
    }
}

class User extends Users {
    #inn;
    text;
    constructor(firstName, lastName, age, inn, text) {
        super(firstName, lastName, age);
        this.#inn = inn;
        this.text = text;
    }
    getName() {
        console.log(this.age);
    }
    getText() {
        console.log(this.text);
    }
}
const Katya = new User('Kate', 'Korol', 35, 12345, 'text is coming');
Katya.setAge('13');
Katya.getText();
console.log(Katya.getAge());


