// https://learn.javascript.ru/class
// дополнительно - https://learn.javascript.ru/private-protected-properties-methods
// дополнительно - https://learn.javascript.ru/property-accessors


// // Синтаксис
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     alert(this.name);
//   }
// }

// // Использование:
// let user = new User("Иван");
// user.sayHi();
// console.log(user);
// Создаётся новый объект.
// constructor запускается с заданным аргументом и сохраняет его в this.name



// alert(typeof User); // function
// Код функции берётся из метода constructor

































// get/set для объекта
// get – функция без аргументов, которая сработает при чтении свойства,
// set – функция, принимающая один аргумент, вызываемая при присвоении свойства

// let user = {
//   name: "John",
//   surname: "Smith",


//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

// };

// user.fullName;
// user.fullName = 'Jack London';
// // set fullName запустится с данным значением

// user.fullName = "Alice Cooper";
// console.log(user.name); // Alice
// console.log(user.surname); // Cooper




























// get/set и защищенные свойства
// class CoffeeMachine {
//   _waterAmount = 0;

//   set waterAmount(value) {
//     if (value < 0) throw new Error("Отрицательное количество воды");
//     this._waterAmount = value;
//   }

//   get waterAmount() {
//     return this._waterAmount;
//   }

//   constructor(power) {
//     this._power = power;
//   }
// }

// // // создаём новую кофеварку
// let coffeeMachine = new CoffeeMachine(100);

// // // устанавливаем количество воды
// coffeeMachine.waterAmount = -10; // Error: Отрицательное количество воды
// console.log(coffeeMachine.waterAmount);

















// Наследование от класса
// class State {
//   constructor(оbject) {
// 		for (let key in оbject) {
// 		  this[key] = оbject[key]
// 		}   
//   }
// 	get(key) {
// 		return this[key]
//     // return getProp(this, name);
// 	}
// 	set(key, value) {
// 		return this[key] = value
//     return setProp(this, name, value);
// 	}
// }

// const userState = new State(
// 	{
// 		isClient: false,
// 	}
// );
