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

//////////8. Обращение к свойствам внутри классов в ООП в JavaScript
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

9. //////// Свойства через параметры конструктора в ООП в JavaScript

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

11. /////// Геттеры свойств в ООП в JavaScript

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


// class Employee {
//     #password;
//     #login;

//     setPassword(password) {
//         this.#password = password;
//     }
//     setLogin(login) {
//         this.#login = login;
//     }
//     getPassword() {
//         return this.#password;
//     }
//     getLogin() {
//         return this.#login;
//     }
// }
// let empl = new Employee;
// empl.setPassword('12345');
// empl.setLogin('user01');
// console.log(empl.getPassword());
// console.log(empl.getLogin());

12.//////// Преимущества сеттеров и геттеров в ООП в JavaScript

// class Employee {
//     #age;
//     #salary;


//     setAge(age) {
//         if (age === 0) { throw new Error('age is equal to 0'); }
//         else this.#age = age;
//     }
//     setSalary(salary) {
//         return this.#salary = salary + '$';
//     }
//     getAge() {
//         return this.#age;
//     }
//     getSalary() {
//         return this.#salary;
//     }
// }
// let empl = new Employee;
// let empl2 = new Employee;
// empl.setAge(17);
// empl.setSalary(1000);
// // empl2.setAge(0);
// console.log(empl.getAge());
// // console.log(empl2.getAge());
// console.log(empl.getSalary());

///////// 13. Цепочки методов в ООП в JavaScript

// class Employee {
//     #age;
//     #salary;
//     setAge(age) {
//         this.#age = age;
//         return this;
//     }
//     setSalary(salary) {
//         this.#salary = salary;
//         return this;
//     }
//     getAge() {
//         return this.#age;
//     }
//     getSalary() {
//         return this.#salary;
//     }
// }
// let empl = new Employee;
// empl.setAge(17).setSalary(1000);
// console.log(empl.getAge());
// console.log(empl.getSalary());

//////// 14. Класс как набор методов в ООП в JavaScript

// class Validator {
//     constructor(userMail, userDomain, userNumber) {
//         this.mail = userMail;
//         this.domain = userDomain;
//         this.number = userNumber;
//     }
//  isMail() {
//     if(this.mail === 'katuxashady@mail.ru') {
//         return true;
//     } else return 'The email is incorrect';
//  }
//  isDomain() {
//     if(this.domain === 'tatyana.ru') {
//         return true;
//     } else return 'The domain is not correct';
//  }
//  isNumber() {
//     if(typeof(this.number) == 'number') {
//         return true
//     } else return false;
//  }
//  showResult() {
//     return 'Mail: ' + this.isMail() + ', Domain: ' + this.isDomain();  
//  }
//  showNumber() {
//     return this.isNumber();
//  }
// }
// let validator = new Validator('tatyanakoroleva@mail.ru', 'tatyana.ru', 'abc');
// console.log(validator.showResult());
// console.log(validator.showNumber());

////// 15. Массивы объектов в ООП в JavaScript

// class Employee {
//     #name;
//     #salary;
//     constructor (name, salary) {
//         this.#name = name;
//         this.#salary = salary; 
//     }
//     showData() {
//         return [this.#name, this.#salary]
//     }
// }
// let employees = [
//     new Employee('Steve', 1900), 
//     new Employee('Kate', 2500),
//     new Employee('Sara', 4000),
// ];
// for (let employee of employees) {
//     console.log(employee.showData());
// }

////// 16. Объекты внутри классов в ООП в JavaScript

// class Employee {
// 	constructor(name, position, department) {
// 		this.name = name;
// 		this.position = position;
// 		this.department = department;
// 	}
//     show() {
//         return [this.name, this.position, this.department];
//     }
// }
// class Position {
//     constructor(name) {
//         this.name = name;
//     }
// }
// let position = new Position('New York');

// class Department {
//     constructor(name) {
//         this.name = name;
//     }
// }
// let department = new Department('West Office');

// let empl = new Employee('Mike', position.name, department.name);

// console.log(empl.show());

//////// 17. Манипуляция объектами в классах в ООП в JavaScript
// class User {
//     #name;

//     constructor(name) {
//         this.#name = name;
//     }
//     getName() {
//         return this.#name;
//     }
// }
// class UsersCollection {
//     #users;

//     constructor() {
//         this.#users = [];
//     }

//     add(user) {
//         this.#users.push(user);
//     }
//     show() {
//         for(let user of this.#users) {
//             console.log(user.getName());
//         }
//     }
// }

// let uc = new UsersCollection;
// uc.add(new User('Alex')); 
// uc.add(new User('Tatiana')); 
// uc.add(new User('Steve'));
// uc.show();

18./////////// class Employee {
//     #name;
//     #salary;

//     constructor(name, salary) {
//         this.#name = name;
//         this.#salary = salary; 
//     }
//     getSalary() {
//         return this.#salary;
//     }

// }
// class EmployeesCollection {
//     #employees;

//     constructor() {
//         this.#employees = [];
//     }
//     add(employee) {
//         this.#employees.push(employee);
//     }
//     show() {
//         console.log(this.#employees);
//     }
//     calcSalary() {
//         let sum = 0;
//         for (let employee of this.#employees) {
//             sum += employee.getSalary();
//         }
//         console.log(sum);
//         return sum;
//     }
//     averageSalary() {
//         console.log(this.calcSalary() / this.#employees.length); 
//     }
// }
// let ec = new EmployeesCollection;
// ec.add(new Employee('Max', 1500));
// ec.add(new Employee('Steve', 2500));
// ec.add(new Employee('Susan', 3000));
// ec.calcSalary();
// ec.averageSalary();
// ec.show();

/////////// 19. Оператор instanceof в ООП в JavaScript

// class Student {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class Employee {
//     constructor(name) {
//         this.name = name;
//     }
// }
// let users = [
// 	new Student('user1'),
// 	new Employee('user2'),
// 	new Student('user3'),
// 	new Employee('user4'),
// 	new Student('user5'),
// 	new Employee('user6'),
// 	new Student('user7'),
// ];

// class Users {
//     constructor(users) {
//         this.users = users;
//     }
//     getUsers () {
//         for (let user of this.users) {
//         console.log(user.name);
//     }
//     }

// }
// let uc = new Users(users);
// uc.getUsers();

// 26. Встроенные классы JavaScript
// let obj = {a: 1, b: 2, c: 3};

// console.log(obj);
// console.dir(obj);

// console.log(obj instanceof Object);


// let elem = document.querySelector('div');
// console.dir(elem);
// console.log(elem instanceof HTMLDivElement);

// let elem = document.querySelector('div');
// let elems = elem.children;

// console.dir(elems);

//28. Наследование классов в ООП в JavaScript
// class User {

// }
// class Employee {

// }
// class Employee extends User{

// }

// 30. Методы потомка в ООП в JavaScript
// class officeWorkers {
//     setName(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }
// }
// class Employee extends officeWorkers {
//     setSalary(salary) {
//         this.salary = salary;
//     } 
//     getSalary() {
//         return this.salary;
//     }
// }

// let empl = new Employee;
// empl.setName('Mike');
// empl.setSalary(1500);
// let name = empl.getName();
// let salary = empl.getSalary();

// console.log(name, salary);

// 31. Переопределение методов родителя в ООП в JavaScript

// class User {
//     setAge(age) {
//         this.age = age;
//     }
//     getAge() {
//         return this.age;
//     }
// }
// class Employee extends User {
//     setAge(age) {
//         if(age > 18 && age < 65) {
//             this.age = age;
//         } else {
//             throw new Error ('not correct age');
//         }
//     }
//     getAge() {
//         return this.age;
//     }
// }
// let empl = new Employee;
// empl.setAge(25);
// console.log(empl.getAge());

// 32. Конструктор при наследовании в ООП в JavaScript

class User {
    constructor(name, surn) {
        this.name = name;
        this.surn = surn;
    }
    getName() {
        return this.name;
    }
    getSurn() {
        return this.surn;
    }
}
class Student extends User {
    constructor(name, surn, year) {
        super(name, surn);
        this.year = year;
    }
    getYear() {
        return this.year;
    }
}
let student = new Student('Nike', 'Lunov', 1992);
console.log(student.getName());
console.log(student.getSurn());
console.log(student.getYear());




