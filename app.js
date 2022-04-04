function showMessage(clb, name) {
	clb(name);
}

function sayHello(name) {
	console.log(`Hello ${name}`);
}

function sayGoodBye(name) {
	console.log(`GoodBye ${name}`);
}

showMessage(sayHello, 'Ivan');
showMessage(sayGoodBye, 'Ivan');

showMessage((name) => {
	console.log(`How are you, ${name}`);
}, 'Ivan');
