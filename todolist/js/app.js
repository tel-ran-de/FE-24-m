const form = document.querySelector('#add-form');
const field = document.querySelector('#new-title');
const list = document.querySelector('.todo-list');

let items = [
	{
		id: 1,
		title: 'Learn HTML',
		isCompleted: true,
	},
	{
		id: 2,
		title: 'Learn CSS',
		isCompleted: true,
	},
	{
		id: 3,
		title: 'Learn DOM',
		isCompleted: false,
	},
	{
		id: 4,
		title: 'Learn JS',
		isCompleted: false,
	},
	{
		id: 5,
		title: 'Learn React',
		isCompleted: false,
	},
];

const addNewTitleHandler = (event) => {
	event.preventDefault();
	const newItem = {
		id: Date.now(),
		title: field.value,
		isCompleted: false,
	};
	items.push(newItem);
	console.table(items);
	renderItems();
	field.value = '';
	field.setAttribute('focus', true);
};

const newLiCreate = (todoObj) => {
	// Create Li element and add todo-item class
	const li = document.createElement('li');
	li.classList.add('todo-item');
	// Add title to span and input and button in Li
	const span = document.createElement('span');
	span.textContent = todoObj.title;
	li.appendChild(span);
	const check = document.createElement('input');
	check.setAttribute('type', 'checkbox');
	li.appendChild(check);
	const btn = document.createElement('button');
	btn.textContent = 'X';
	li.appendChild(btn);

	// Add events by changing
	check.addEventListener('change', () => {
		changeIsCompleted(todoObj.id);
	});

	btn.addEventListener('click', (event) => {
		event.preventDefault();
		removeItem(todoObj.id);
	});

	// Check isCompleted - if true add completed class to Li and checked to input
	if (todoObj.isCompleted) {
		li.classList.add('completed');
		check.checked = 'true';
	}

	// Add new Li to list const
	list.appendChild(li);
};

const changeIsCompleted = (id) => {
	const obj = items.find((item) => {
		return item.id === id;
	});
	obj.isCompleted = !obj.isCompleted;
	renderItems();
};

const removeItem = (id) => {
	items = items.filter((item) => item.id !== id);
	renderItems();
};

const renderItems = () => {
	list.innerHTML = '';
	items.forEach((item) => {
		newLiCreate(item);
	});
};

form.addEventListener('submit', addNewTitleHandler);
renderItems();
