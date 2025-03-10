// 4. Несколько объектов одного класса в ООП в JavaScript

// class Employee {
// }
// let empl = new Employee;
// let empl2 = new Employee;
// empl.name = 'Steve';
// empl.age = 50;
// empl.salary = 10000;

// empl2.name = 'Bruce';
// empl2.age = 61;
// empl2.salary = 17000;

// console.log([empl, empl2]);

//5. Методы классов в ООП в JavaScript

// class Employee {
//     go() {
//         return 'abcd';
//     }
// }
// let empl = new Employee;
// console.log(empl.go());

// 6. Параметры методов в ООП в JavaScript

// class Employee {
//     show(name, salary) {
//         return 'The Employee ' + name + ' has salary equal to ' + salary; 
//     }
// }
// let empl = new Employee;
// console.log(empl.show('Mike', 500));

//8. Обращение к свойствам внутри классов в ООП в JavaScript
// Example 1
// class User {
//     show() {
//         console.log(this.name);
//     }
// }
// let user = new User;
// user.name = 'Mike';
// user.show();

// Example 2
// class Employee {
//     showName() {
//         console.log(this.name);
//     }
//     showSalary() {
//         console.log(this.salary);
//     }
// }
// let empl = new Employee;
// empl.name = 'Boris';
// empl.salary = 500;
// empl.showName();
// empl.showSalary();


// class Student {
//     show() {
//         return this.cape(this.name, this.surn);
//     }
//     cape (name, surn){
//         return name[0].toUpperCase() + ',' + surn[0].toUpperCase();
//     };
// }
// let student = new Student;
// student.name = 'Mike';
// student.surn = 'Kozlov';
// console.log(student.show());

// class User {
//     name = 'Mike';
//     surn = 'Kozlov';
// }
// let user = new User;
// console.log(user);

// class User {
//     constructor() {
//         console.log('+++');
//     }
// }
// let user =  new User;

// class Employee {
//     constructor() {
//         console.log('oups');
//     }
// }
// let empl = new Employee;

// class User {
//     constructor(name, surn) {
//         console.log(name + ',' + surn);
//     }
// }
// let user = new User;
// new User('john', 'kozlov');

9. // Свойства через параметры конструктора в ООП в JavaScript

// class Employee {
//     constructor(name, salary) {
//         this.name = name;
//         this.salary = salary;
//     }
//     showName(){
//         return this.name;
//     }
//     showSalary(){
//         return this.salary;
//     }
//     raiseSalary() {
//         return this.salary * 1.1;
//     }
// }
// let empl = new Employee('Vasya', 500);
// console.log(empl.raiseSalary());

// 10. Приватные свойства в ООП в JavaScript

// class Employee {
//     #name;
//     #salary;
//     #age;

//     constructor(name, salary, age) {
//         this.#name = name;
//         this.#salary = salary;
//         this.#age = age;
//     }
//     show() {
//         return 'Name: ' + this.#name + '; Age: ' + this.#age + '; Salary: ' + this.#salary;
//     }
// }
// let empl = new Employee('Tatiana', 5000, 32);
// console.log(empl.show());

11. // Геттеры свойств в ООП в JavaScript

// class Employee {
//     #name;
//     #salary;
//     #age;

//     constructor (name, salary, age) {
//         this.#name = name;
//         this.#salary = salary;
//         this.#age = age;
//     }
//     getName() {
//         return this.#name;
//     }
//     getSalary() {
//         return this.#salary;
//     }
//     getAge() {
//         return this.#age;
//     }
// }
// let empl = new Employee('Steve', 1000, 23);
// console.log(empl.getName());
// console.log(empl.getSalary());
// console.log(empl.getAge());


