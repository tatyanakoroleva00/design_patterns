class Singleton{
    constructor() {
        if (!Singleton.instance) { // Метод "конструктор" вызывается по дефолту. 
                                   // Если не существует экземпляра, то мы инициализируем экземпляр класса.  Присваиваем объект экземпляру. 
            this.PAGES = {
                'About' : 0
            };
            Singleton.instance = this;
        } 
        return Singleton.instance; //Возвращаем экземпляр класса. 
    }
    static getSingleton() { //Метод для получения экземпляра
        if(!Singleton.instance) { //Если не существует экземпляра, то что получать!?
            Singleton.instance = new Singleton(); //Создаем экземпляр, вызываем класс и автоматически срабатывает конструктор, который создает объект внутри класса - экземпляр
        }
        return Singleton.instance; //Возваращаем экземпляр запрошенный
    }
    incSingleton(page) {
        if(this.PAGES.hasOwnProperty(page)) {
            this.PAGES[page]++;
        } else {
            console.error('There is no such page');
        }
    }
}
const singleton = Singleton.getSingleton();
singleton.incSingleton('About');
console.log(singleton.PAGES);