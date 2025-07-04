// #vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model
    this.manufacturer = manufacturer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineCapacity = engineCapacity
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function () {
        for (const infoCar in this) {
            console.log(infoCar, this[infoCar] );
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        if (year > 1885) this.year = year;
    }
    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    }

}
const car = new Car('BMW', 'BMW Group', 2022, 220, 2);
    car.drive();
    car.info();
    car.increaseMaxSpeed (100);
    car.changeYear(2024);
    car.addDriver({name:'Vasya', age: 25});
    console.log(car)
