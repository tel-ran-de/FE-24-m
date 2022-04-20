const box = document.querySelector('#result');
const btn = document.querySelector('button');

const items = document.querySelectorAll('li');

const firstNameField = document.querySelector('#first-name');

const writeContent = (event) => {
	// console.log(event);

	if (event.type == 'click') {
		console.log('Event - Click');
	}

	if (event.type == 'mouseover') {
		console.log('Event - MouseOver');
	}

	console.log(event.target);

	// box.textContent = 'Hello, World!';
};

// btn.addEventListener('click', writeContent);
// btn.addEventListener('mouseover', writeContent);

items.forEach((item) => {
	item.addEventListener('click', (event) => {
		console.log(event.target);
	});
});

firstNameField.addEventListener('keyup', (e) => {
	box.textContent = e.target.value;
});
