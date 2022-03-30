// Function Declaration
// function nameOfFunction(parameters) {
//     ... function's body ...
// }

// function showGreeting() {
// 	console.log('Hello World!');
// }

// function sumAandB() {
// 	let a = 5;
// 	let b = 10;
// 	let sumAB = a + b;
// 	console.log(sumAB);
// }

// function sumAB(a, b) {
// 	console.log(a + b);
// }

// showGreeting();
// sumAandB();
// sumAB(2, 3);

// function showMessage() {
// 	let message = 'Hello World';
// 	console.log(message);
// }

// showMessage();
// console.log(message); // Invisable

// let firstName = 'Vasya';

// function greetName() {
// 	console.log(`Hello ${firstName}`);
// 	console.log('Hello ' + firstName);
// 	console.log('Hello ${firstName}');
// }

// greetName();
// let a = 5;
// let b = 10;
// console.log(`sum = ${a > 10 ? a : b}`);

// function anyName() {
// 	let firstName = 'Petya';
// 	console.log(firstName);
// }

// anyName();
// console.log(firstName);

// function sayHello(firstName = 'Unknow User') {
// 	console.log(`Hello ${firstName}`);
// }

// sayHello('Vasya');
// sayHello();

// function getSum(a, b) {
// 	return a + b;
// }

// console.log(getSum('Hello ', 'World'));

// let wallet = 100;
// function paid(orderSum) {
// 	if (wallet >= orderSum) {
// 		changeWallet(orderSum);
// 		return 'Bought';
// 	}
// 	return 'No enough money';
// }

// function changeWallet(sum) {
// 	wallet -= sum;
// 	console.log(`Balance: ${wallet}`);
// }

// console.log(paid(150));
// console.log(paid(40));
// console.log(paid(20));

//Function Expression
// const sayHi = function () {
// 	console.log('Hello');
// };

// sayHi();

// Arrows Function
// const func = (arg1, arg2) => {
// 	return arg1 + arg2;
// };

// const func1 = (arg1, arg2) => arg1 + arg2;

// const func2 = (arg1, arg2) => (arg2 === 0 ? 'Devision by zero' : arg1 / arg2);

// const double = (n) => n * 2;

/**
 *
 * Function calculates the number of digits in source parameter
 *
 * @param {*} number
 * @returns
 */
const getCountDigit = (number) => {
	let count = 0;
	while (number > 0) {
		count++;
		number = parseInt(number / 10);
	}
	return count;
};

/**
 *
 * The function determines whether the input parameter is an even number
 *
 * @param {number} value
 * @returns
 */
const checkEvenNumber = (value) => value % 2 === 0;
// function checkEvenNumber(value) {
// 	return (value % 2 === 0)
// }

/**
 *
 * Function returns last one digit of the source parametr
 *
 * @param {number} value
 * @returns
 */
const getLastDigit = (value) => value % 10;

/**
 *
 * Function returns number without the last one digit of the source parametr
 *
 * @param {number} value
 * @returns
 */
const moveLastDigit = (value) => parseInt(value / 10);

/**
 *
 * The function calculates the difference between
 * the sum of the first half of the digits and the sum of the second half of the digits
 *
 * @param {number} value
 * @param {number} count
 * @returns
 */
const calcResult = (value, count) => {
	let result = 0;
	for (let i = 0; i < count; i++) {
		if (i < count / 2) {
			result += getLastDigit(value);
		} else {
			result -= getLastDigit(value);
		}
		value = moveLastDigit(value);
	}
	return result;
};

/**
 *
 * Main function. Call all necessary functions and returns a string with information
 *
 * @param {number} value
 * @returns
 */
const checkLuckyTicket = (value) => {
	const count = getCountDigit(value);
	if (!checkEvenNumber(count)) {
		return "I can't check this number";
	}
	return `The ticket ${value} is ${
		calcResult(value, count) !== 0 ? 'unlucky' : 'lucky'
	}`;
};

console.log(checkLuckyTicket(1203));
console.log(checkLuckyTicket(1204));
console.log(checkLuckyTicket(12034));
