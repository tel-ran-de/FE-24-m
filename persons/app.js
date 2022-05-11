// const ivan = {
// 	fName: 'Ivan',
// 	lName: 'Ivanov',
// 	age: 27,
// 	isStudent: false,
// 	isMarried: true,
// 	children: [
// 		{ fName: 'Max', age: 10 },
// 		{ fName: 'Sveta', age: 5 },
// 	],
// 	address: {
// 		street: 'Friedrichstr.',
// 		house: 176,
// 	},
// 	getFullName() {
// 		return `${this.lName} ${this.fName}`;
// 	},
// };

// 'Friedrichstr., 176'
class Person {
	constructor(fName, lName, age, fullAddress) {
		this.fName = fName;
		this.lName = lName;
		this.age = age;
		const fullAddressArray = fullAddress.split(',');
		this.address = {
			street: fullAddressArray[0],
			house: +fullAddressArray[1],
		};
		this.children = [];
	}
	happyBirthday() {
		this.age++;
	}
	getFullName() {
		return `${this.lName} ${this.fName}`;
	}
	addChild(child) {
		this.children.push(child);
	}
}

const ivan = new Person('Ivan', 'Ivanoff', 27, 'Friedrichstr., 176');
const petr = new Person('Petr', 'Petrov', 47, 'Unterdenlinden., 27');

console.log(ivan);
ivan.happyBirthday();
console.log(ivan.getFullName());
ivan.addChild({ fName: 'Max', age: 10 });
console.log(typeof ivan);

// console.log(petr);
