let firstName = 'Ivan',
	lastName = 'Ivanoff';

const person = {
	firstName, // тоже самое, что и firstName: firstName
	lastName,
	age: 30,
};
console.log(person);

const createPerson = (firstName, lastName, age) => {
	return {
		firstName,
		lastName,
		age,
		fullName: `${firstName} ${lastName}`,
		greeting: `Hello, ${firstName}`,
		haveCar: age >= 18 ? true : false,
	};
};

const newPerson = createPerson('Ivan', 'Ivanoff', 15);
const newPerson1 = createPerson('Victoria', 'Asfarova', 18);
newPerson1.cars = ['BMW', 'Audi'];
newPerson.cars = 'Lada';

console.log(newPerson);
console.log(newPerson1);

// console.log(newPerson.cars[0]);
// console.log('cars' in newPerson1 ? newPerson1.cars : 'No cars');

console.log(
	'cars' in newPerson && Array.isArray(newPerson.cars)
		? newPerson.cars[0]
		: 'No cars or no Array'
);
console.log('--------------------');
console.log(newPerson1);
console.log('--------------------');

for (const key in newPerson1) {
	if (Array.isArray(newPerson1[key])) {
		let count = 0;
		for (const value of newPerson1[key]) {
			console.log(`Car #${++count} ${value}`);
		}
		continue;
	}
	console.log(`${key}: ${newPerson1[key]}`);
}
