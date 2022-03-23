// if (condition) {
//     action;
// } else if (condition_1) {
// 	action;
// } else {
// 	action;
// }

// let currentYear = '2022';
// let year = '2024';

// if (currentYear === year) {
// 	console.log('Современность');
// } else if (currentYear > year) {
// 	console.log('Застряли в прошлом');
// } else {
// 	console.log('Убежали вперед');
// }

// if (2 === 1) console.log('Равны');
// console.log('Всегда выводится');

// 0, undefined, false, '', null, NaN - возвращают false
// if (0) {
// 	console.log('hello'); // Не выводится
// }

// let str = '';

// if (str !== 'ok') {

// }

// function isEven(number) {
//     return number % 2 === 0;
// }

// if ( !isEven(7) ) {

// }

// (condition) ? code_if_true : code_else
let age = 10;
// let result = age >= 18 ? 'Совершеннолетний' : 'Слишком юн';

let result =
	age > 18
		? 'Совершеннолетний'
		: age === 18
		? 'О! прекрассный возраст'
		: 'Слишком юн';

// function saidAge(age) {
// 	// let result = 'Слишком юн';
// 	// if (age >= 18) {
// 	//     result = 'Совершеннолетний';
// 	// }
// 	// return result;
// 	return age >= 18 ? 'Совершеннолетний' : 'Слишком юн';
// }
