// https://stasonmars.ru/javascript/promisy-v-javascript-dlya-chainikov/
// https://learn.javascript.ru/promise-api
// дополнительно - https://stasonmars.ru/javascript/vse-chto-nuzhno-znat-ob-async-await-tsikly-kontrol-potokov-ogranicheniya/


// Promise
// new Promise( function (resolve, reject) { … } ); // синтаксис


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

// // Вызываем промис
// const askMom = function () {
//     willIGetNewPhone
//         .then(function (fulfilled) {
//             // yay, you got a new phone
//             console.log(fulfilled);
//          // output: { brand: 'Samsung', color: 'black' }
//         })
//         .catch(function (error) {
//             // oops, mom don't buy it
//             console.log(error.message);
//          // output: 'mom is not happy'
//         });
// };
// askMom();




























// Цепочки промисов
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


// const showOff = function (phone) {
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






















// const isMomHappy = true;

// // // Промис
// const willIGetNewPhone = new Promise(
//     (resolve, reject) => {
//         if (isMomHappy) {
//             const phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone);
//         } else {
//             const reason = new Error('mom is not happy');
//             reject(reason);
//         }

//     }
// );

// // // 2й промис
// async function showOff(phone) {
//     return new Promise(
//         (resolve, reject) => {
//             const message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';
//             resolve(message);
//         }
//     );
// };

// // // Вызываем промис
// async function askMom() {
//     try {
//         console.log('before asking Mom');
//         let phone = await willIGetNewPhone;
//         let message = await showOff(phone);
//         console.log(message);
//         console.log('after asking mom');
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// }

// askMom();
