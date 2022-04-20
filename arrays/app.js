const array = [
	{ fName: 'Ivan', lName: 'Ivanof', age: 20 },
	{ fName: 'Ivanka', lName: 'Trump', age: 18 },
	{ fName: 'Michael', lName: 'Smith', age: 40 },
	{ fName: 'John', lName: 'Doe', age: 43 },
];

// for (const element of array) {
// 	console.log(element.fName);
// }

// array.forEach((element) => {
// 	console.log(element);
// });

// const newArray = array.map((element) => {
// 	return `${element.fName} ${element.lName}`;
// });

// const newArray = array.map((element) => `${element.fName} ${element.lName}`);

// console.log(newArray);
// console.log(array);

// const feArray = [];
// array.forEach((element) => {
// 	feArray.push(`${element.fName} ${element.lName}`);
// });

// console.log(feArray);

// const more30 = [];
// array.forEach((element) => {
// 	if (element.age > 30) {
// 		more30.push(element);
// 	}
// });

// const less30 = array.filter((element) => element.age < 30);

// console.log(less30);
const numbers = [4, 2, 3, 22, 11];
// console.log(numbers.sort((a, b) => a - b));
// console.log(numbers);

// array.sort((a, b) => a.lName.localeCompare(b.lName));
// array.sort((a, b) => a.lName.length - b.lName.length);

// console.log(array);

// console.log('abc'.localeCompare('abcd'));

// forEach, map, filter, reduce, find, findIndex

function compare(a, b) {
	return a - b;
}
numbers.sort(compare);
console.log(numbers);
