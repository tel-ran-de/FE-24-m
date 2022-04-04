// const person = new Object()
const person = {
	firstName: 'Ivan',
	lastName: 'Ivanoff',
	'have car': true,
	age: 28,
};

console.log(person.firstName);

person.userRole = 'Admin';

console.log(person);

delete person.userRole;

console.log(person);
person.isAdmin = true;
person.favoriteColors = ['red', 'blue', 'yellow'];

console.log(person);

const child1 = { firstName: 'Petya', lastName: 'Ivanoff', age: 10 };

person.kids = [child1, { firstName: 'Darya', lastName: 'Ivanoff', age: 10 }];

console.log(person);

let key = 'firstName';
console.log(person[key]);

delete person['have car'];

person.firstName = 'Ivanushka';
console.log(person);

person.favoriteColors.push('black');
console.log(person.favoriteColors);

person.kids.push({ firstName: 'Baby', lastName: 'Ivanoff', age: 1 });
console.log(person);

child1.age += 1;

console.log(person);

const getFullName = (obj) => {
	console.log(obj.firstName + ' ' + obj.lastName);
};

getFullName({ firstName: 'Oleg', lastName: 'Popov' });
