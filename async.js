// https://learn.javascript.ru/async-await
// https://learn.javascript.ru/promise-basics
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise


// Промис Promise
// let promise = new Promise(function(resolve, reject) {  // функция-исполнитель (executor)
// // resolve(value) — если работа завершилась успешно, value - результат
// // reject(error) — если произошла ошибка, error – объект ошибки
// 	resolve('done');
// });


// promise.then(result => console.log(result)); // result («результат») - внутреннее свойство
// вначале undefined, 
// value при вызове resolve(value) 
// error при вызове reject(error)












// console.log(promise); // state («состояние») - внутреннее свойство
// "pending" («ожидание»)
// "fulfilled" («выполнено успешно») при вызове resolve, 
// "rejected" («выполнено с ошибкой») при вызове reject



































// let promise = new Promise(function(resolve, reject) {
//   // эта функция выполнится автоматически, при вызове promise
//   // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//   setTimeout(() => resolve('done'), 1000);
// });

// promise.then(result => console.log(result));



































// Методы: then, catch, finally
// then - обработка результата и ошибки promise
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve("done!"), 1000);
// });

// // resolve запустит первую функцию, переданную в .then
// promise.then(
//   result => alert(result), // выведет "done!" через одну секунду
//   error => alert(error) // не будет запущена
// );


// let promise = new Promise(function(resolve, reject) {

//   setTimeout(() => reject(new Error("Whoops!")), 1000);

// });

// // reject запустит вторую функцию, переданную в .then
// promise.then(
//   result => alert(result), // не будет запущена
//   error => alert(error) // выведет "Error: Whoops!" спустя одну секунду
// );

































// catch(f) – это сокращённый вариант then(null, f).
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("Ошибка!")), 1000);
// });

// promise.catch(error => console.log(error)); // выведет "Error: Ошибка!" спустя одну секунду



































// finally аналогичен finally из try..catch
// не имеет аргументов - не обрабатывает результат промиса
// new Promise((resolve, reject) => {
//   /* сделать что-то, что займёт время, и после вызвать resolve/reject */
// })
//   // выполнится, когда промис завершится, независимо от того, успешно или нет
//   .finally(() => остановить индикатор загрузки)
//   .then(result => показать результат, err => показать ошибку)





































// Пример-задача: loadScript
// Переписать функцию с callback на promise
// function loadScript(src) {
//   let script = document.createElement('script');
//   script.src = src;
//   document.head.append(script);
//   return src;
// }

// let promise = new Promise((resolve, reject) => {
//   resolve(loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"))
// });

// promise.then(
//   src => alert(`${src} загружен!`),
//   error => alert(`Ошибка: ${error.message}`)
// );

// promise.then(script => alert('Ещё один обработчик...'));















































// Async/await
// Асинхронные функции
// Ключевое слово async
// async function f() {
//   return 'верну промис';
// }
// // У слова async один простой смысл: эта функция всегда возвращает промис
// f().then(result => console.log(result));







































// Await - только для асинхронных функций
// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("готово!"), 1000)
//   });

//   let result = await promise; // будет ждать, пока промис не выполнится

//   alert(result); // "готово!"
// }

// f();


// await заставит интерпретатор JavaScript ждать,
// пока промис справа от await не выполнится
// аналогично result.then()



































// мини-задача
// переписать код promise с promise.then на async-await
// const number = 5;

// async function calc() {
// 		let promise = new Promise((resolve, reject) => {
// 	    setTimeout(() => resolve(number), 3000);
// 	  });
// 		let result = await promise;
//   	alert(result * 2); 
// };
// calc()



// .then(function(result) { // (**)
// 	result *= 2;
//   alert(result); 
// })


// Начальный промис успешно выполняется через 1 секунду (*),
// Затем вызывается обработчик в .then (**).
























// async function calc(number) {

//  	let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(number * 2), 1000)
//   });

//  	let result = await promise;

//  	// let githubResponse = await fetch(`https://api.github.com/users/tel-ran-de`);
//   console.log(githubResponse); 
// }

// calc(5);































// асинхронность в классах и объектах
// классы
// class Waiter {
//   async wait() {
// 	 	let promise = new Promise((resolve, reject) => {
// 	    setTimeout(() => resolve('Результат'), 2000)
// 	  });
//     return await promise;
//   }
// }
// new Waiter()
// 	.wait()
// 	.then(result => console.log(result));



















// объекты
// const obj = {
// 	text: 'Результат',
// 	wait: async function() {
// 			 	let promise = new Promise((resolve, reject) => {
// 			    setTimeout(() => resolve(this.text), 2000)
// 			  });
// 		    return await promise;
// 	}
// }

// obj.wait().then( result => console.log(result) );




























// Async + Области видимости стрелочных функций
// Пример
// const test = {
//   name: 'test object',
  // createAnonFunction: function() {
  // 	const than = this;
  //   return async function() {
		// 	 	let promise = new Promise((resolve, reject) => {
		// 	    setTimeout(() => resolve(than.name), 2000)
		// 	  });
  //   		return await promise;
  //   };
  // },


  // createArrowFunction: function() {
  //   return async () => {
		// 	 	let promise = new Promise((resolve, reject) => {
		// 	    setTimeout(() => resolve(this.name), 2000)
		// 	  });
  //   		return await promise;
  //   };
  // }
// };
// const anon = test.createAnonFunction();
// const arrow = test.createArrowFunction();
// anon().then( result => console.log(result));
// arrow().then( result => console.log(result));





































// Обработка ошибок
// async function f() {
//   await Promise.reject(new Error("Упс!"));
// }
// f();



// async function f() {
//   try {
//     let response = await Promise.reject(new Error("Упс!"));
//   } catch(err) {
//     console.log(err); // TypeError: failed to fetch
//   }
// }
// f();



// async function f() {
//   let response = await Promise.reject(new Error("Упс!"));
// }
// // f() вернёт промис в состоянии rejected
// f().then(data=>arr.push(data)).catch(error=>console.log(error)); // TypeError: failed to fetch












// async/await + Promise.all
// если необходимо подождать несколько промисов одновременно
// async function (argument) {
// 	let results = await Promise.all([
// 	  promise1,
// 	  promise2,
// 	  promise3,
// 	]);
// 	return result;
// }





























// Финальная мини-задача
// Вызовите async–функцию из "обычной"
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   return 10;
// }

// function f() {
//   // ...что здесь написать?
//   // чтобы вызвать wait() и дождаться результата "10" от async–функции
//   // не забывайте, здесь нельзя использовать "await"
// }





















// Напишем небольшой компонент симулирующий долгое вычисление
// 1.HTML 
// - input принимающий некоторую строку от пользователя, 
// - button кнопка "рассчитать", будет disable, если input пуст.
// - Поле div для вывода количества посчитанных символов в строке
// 2.JS
// - создать асинхронную функцию, 
// которая будет вызываваться по кнопке "рассчитать",
// выставлять состояние кнопки (disable), 
// затем будет симулировать долгий расчет(через setTimeout - 3s),
// во время расчета disable должны быть и input и кнопка.

// - вывести результат промиса(количество символов в строке) 
// в поле div, не используя .then()

// * дополнительная задача
// - Отключить disable button, позволив пользователю вводить пустую строку и 
// обработать ошибку через try..catch, создав свой собственный экземляр ошибки и 
// выводить её в консоль.

