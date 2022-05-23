// https://learn.javascript.ru/modules-intro
// https://learn.javascript.ru/import-export
// дополнительно - https://learn.javascript.ru/modules-dynamic-imports

// Modules
// Модуль – это файл. Один скрипт – один модуль
// import-export - синтаксис для модулей

// 📁 sayHi.js
// export function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }


// // 📁 main.js
// import {sayHi} from './sayHi.js';

// alert(sayHi); // function...
// sayHi('John'); // Hello, John!



































// Область видимости модуля
// каждый модуль - своя область видимости

// 📁 users.js
// export let user = "John";

// // 📁 hello.js
// import {user} from './user.js';
// document.body.innerHTML = user; // John






































// Импорт модуля исполнит его лишь однажды

// // 📁 1.js
// import `./alert.js`; // Модуль выполнен!

// // 📁 2.js
// import `./alert.js`; // (ничего не покажет)



// как решается проблема? через export

// 📁 admin.js
// export let admin = {
//   name: "John"
// };

// // 📁 1.js
// import {admin} from './admin.js';
// admin.name = "Pete";

// // 📁 2.js
// import {admin} from './admin.js';
// alert(admin.name); // Pete

// Оба файла, 1.js и 2.js, импортируют один и тот же объект
// Изменения, сделанные в 1.js, будут видны в 2.js








































// Варианты вызова import-export (примеры использования)

// export
// экспорт массива
// export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// // // экспорт константы
// export const MODULES_BECAME_STANDARD_YEAR = 2015;

// // // экспорт класса
// export class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// export function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }  // без ; в конце


// Экспорт отдельно от объявления
// 📁 say.js
// function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }

// function sayBye(user) {
//   alert(`Bye, ${user}!`);
// }

// export {sayHi, sayBye}; // список экспортируемых переменных

































// import
// импортировать всё сразу в виде объекта

// 📁 main.js
// import {sayHi, sayBye} from './say.js';

// sayHi('John'); // Hello, John!
// sayBye('John'); // Bye, John!

// 📁 main.js
// import * as say from './say.js';

// say.sayHi('John');
// say.sayBye('John');





































// Импорт «как»
// 📁 main.js
// import {sayHi as hi, sayBye as bye} from './say.js';

// hi('John'); // Hello, John!
// bye('John'); // Bye, John!



// Экспорт «как»
// 📁 say.js
// ...
// export {sayHi as hi, sayBye as bye};


// // 📁 main.js
// import * as say from './say.js';

// say.hi('John'); // Hello, John!
// say.bye('John'); // Bye, John!







































// Экспорт по умолчанию - export default
// 📁 user.js
// export default class User { // просто добавьте "default"
//   constructor(name) {
//     this.name = name;
//   }
// }



// …И потом импортируем без фигурных скобок:
// 📁 main.js
// import User from './user.js'; // не {User}, просто User

// new User('John');