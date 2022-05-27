// https://learn.javascript.ru/promise-chaining


// new Promise(function(resolve, reject) {

//   setTimeout(() => resolve(1), 1000); // (*)

// }).then(function(result) { // (**)

//   console.log(result); // 1
//   return result * 2;

// }).then(function(result) { // (***)

//   console.log(result); // 2
//   return result * 2;

// }).then(function(result) {

//   console.log(result); // 4
//   return result * 2;

// });






// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// });

// promise.then(function(result) {
//   console.log(result); // 1
//   return result * 2;
// });

// promise.then(function(result) {
//   console.log(result); // 1
//   return result * 2;
// });

// promise.then(function(result) {
//   console.log(result); // 1
//   return result * 2;
// });































// new Promise(function(resolve, reject) {

//   setTimeout(() => resolve(1), 1000);

// }).then(function(result) {

//   console.log(result); // 1

//   return new Promise((resolve, reject) => { // (*)
//     setTimeout(() => resolve(result * 2), 1000);
//   });

// }).then(function(result) { // (**)

//   console.log(result); // 2

//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(result * 2), 1000);
//   });

// }).then(function(result) {

//   console.log(result); // 4

// });










// Пример использования
// fetch("/article/promise-chaining/one.js")
//   .then(script => fetch("/article/promise-chaining/two.js"))
//   .then(script => fetch("/article/promise-chaining/three.js"))
//   .then(script => {
//     // скрипты загружены, мы можем использовать объявленные в них функции
//     one();
//     two();
//     three();
//   });

















// // Снова проанализируем что происходит
// let isMomHappy = true; // isMomHappy - состояние приложения

// const willIGetNewPhone = new Promise( // willIGetNewPhone - promise
//     function (resolve, reject) {
//         if (isMomHappy) {
//             const phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // промис вернет результат
//         } else {
//             const reason = new Error('mom is not happy');
//             reject(reason); // промис вернет ошибку
//         }

//     }
// );


// const showOff = function (phone) {//{brand: 'Samsung',color:black}
//     return new Promise(
//         function (resolve, reject) {
//             const message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';
//             resolve(message);
//         }
//     );
// };

// // Вызываем промис
// const askMom = function () {
//     willIGetNewPhone
//     .then(showOff) // связываем
//     .then(function (fulfilled) {
//             console.log(fulfilled); // output: 'Hey friend, I have a new black Samsung phone.'
//         })
//         .catch(function (error) {// oops, mom don't buy it
//             console.log(error.message);// output: 'mom is not happy'
//         });
// };
// askMom();






// const askMom = function () {
//     willIGetNewPhone
//     .then(result => showOff(result)) //result = {brand: 'Samsung',color:black}
//     .then(result => console.log(result)) //result = 'Hey friend, I have a new black Samsung phone.'
//     .catch(error => console.log(error))
// };
// askMom();