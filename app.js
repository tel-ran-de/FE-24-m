const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers[7]);
const words = ['one', 'two', 'three', 'one'];

// console.log(words.length);
// console.log(words[0]);
// console.log(words[1]);
// console.log(words[2]);
// for (let index = 0; index < words.length; index++) {
// 	console.log(words[index]);
// }

// for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[i] % 2 === 0) {
// 		console.log(numbers[i]);
// 	}
// }

// for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[i] === 2) {
// 		console.log(numbers[i] ** 2);
// 	}
// }

// const juri = [true, true, false, true, false];
// let count = 0;
// for (let i = 0; i < juri.length; i++) {
// 	if (juri[i]) {
// 		count++;
// 	}
// }

// console.log(count);

// const user = [8, 8, 8, 8, 8];
// let base = 30;
// let resultSum = 0;
// for (let i = 0; i < user.length; i++) {
// 	resultSum += user[i]; // resultSum = resultSum + user[i]
// }
// console.log(resultSum * base * 4 * 12);

// const fruits = new Array('Apple', 'Qiwi', 'Pineapple', 'Orange');
// console.log(fruits);

// const cars = new Array(10);
// console.log(cars.length);
// cars.fill('Mercedes', 2, 7);
// console.log(cars);

// for (const fruit of fruits) {
// 	// For Of loop - element
// 	console.log(fruit);
// }

// // For In loop - index
// for (const index in fruits) {
// 	console.log(`${index} - ${fruits[index]}`);
// }

// fruits.push('Cherry');

// console.log(fruits);
// console.log('------------');
// // console.log(fruits.pop());

// fruits.unshift(fruits.pop());

// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.unshift('Cherry');
// console.log(fruits);

// console.log(typeof fruits);
// console.log(typeof fruits.toString());
// console.log(fruits.toString());

let string = 'Hello my dear world';
// let arrayString = string.split(' ');
// console.log(arrayString);
// // console.log(arrayString.toString());
// console.log(arrayString.join(' - '));
// let a = string.split('');
// console.log(a);
// a.reverse();
// console.log(a.join(''));

// console.log(string.split('').reverse().join(''));

// let name = 'Anna';
// console.log(
// 	name.toLowerCase() === name.toLowerCase().split('').reverse().join('')
// );

// console.log(numbers);
// console.log(numbers.splice(4, 0, 'Hello', 'Cherry'));
// console.log(numbers);

// console.log(numbers.slice(4, 6));
// console.log(numbers);
// console.log(numbers.slice(-3));
// console.log(numbers.slice(3));

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// console.log(arr1.concat(arr2, [5, 6], [7, 8, 9, 0], new Array(false, true)));

// let idx = words.indexOf('five');
// if (idx === -1) {
// 	console.log(idx, 'Not found');
// } else {
// 	console.log(idx, words[idx]);
// }

// // console.log(numbers.indexOf(50));

// console.log(words.lastIndexOf('one'));

// console.log(numbers.includes(5));

// console.log(numbers.includes(1, 4));

const alphabet = ['c', 'e', 'a', 'x', 'n'];
// console.log(alphabet.sort());

const numbersArray = [1, 10, 100, 11, 12, 2, 20, 3, 4, 5, 6, 7, 8, 9];
// function compare(a, b) {
// 	return a - b;
// }
// console.log(numbersArray.sort(compare));

// numbersArray.sort((a, b) => b - a); // Больше нуля мы местами не меняем, когда меньше нуля - меняем

// console.log(numbersArray);

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(alphabet));
// console.log(Array.isArray([true, false, true]));
// console.log(Array.isArray(new Array(100500)));
// console.log(Array.isArray('numbers'));
// console.log(Array.isArray({ numbers: 5 }));
// console.log(Array.isArray(4));

// const getSomething = (value) => {
// 	if (typeof value === 'string') {
// 		return value.split(' ');
// 	}
// 	return value;
// };

// let result = getSomething('Hello world');
// for (let i = 0; i < result.length; i++) {
// 	console.log(result[i]);
// }

// result = getSomething(100);
// if (Array.isArray(result)) {
// 	for (let i = 0; i < result.length; i++) {
// 		console.log(result[i]);
// 	}
// } else {
// 	console.log(result);
// }

// Number('444');

// const num1 = [1, 2, 3];
// let a = [5, 6, 7, 8, 9, 0],
// 	b = 2,
// 	c = 3;
// const num2 = [a, b, c];
// console.log(num2[0][1]);
