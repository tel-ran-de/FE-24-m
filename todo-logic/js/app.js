const box = document.querySelector('.box');
let list = [];
const form = document.querySelector('form');
const field = document.querySelector('input');

const createNewTodo = (title) => {
	return {
		id: Date.now(),
		title: title,
		isCompleted: false,
	};
};

const addNewTodo = (todo) => {
	list.push(todo);
};

const removeTodoFromList = (todo) => {
	// const index = list.indexOf(todo);
	// if (index > -1) {
	// 	list.splice(index, 1);
	// }
	list = list.filter((item) => item.id !== todo.id);
};

const createRemoveElementBtn = (todo) => {
	const delBtn = document.createElement('span');
	// delBtn.textContent = 'remove';
	// delIcon = document.createElement('i');
	// delIcon.classList.add('fa-solid');
	// delIcon.classList.add('fa-trash');
	// delBtn.appendChild(delIcon);
	delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
	delBtn.addEventListener('click', (event) => {
		event.preventDefault();
		removeTodoFromList(todo);
		renderList();
	});
	return delBtn;
};

const completedTodo = (todo) => {
	todo.isCompleted = !todo.isCompleted;
};

const createCompletedBtn = (todo) => {
	const complBtn = document.createElement('span');
	complBtn.textContent = todo.isCompleted ? 'uncompleted' : 'completed';
	complBtn.addEventListener('click', (event) => {
		event.preventDefault();
		completedTodo(todo);
		renderList();
	});
	return complBtn;
};

const createTodoElement = (todo) => {
	const p = document.createElement('p');
	p.textContent = todo.title;
	if (todo.isCompleted) {
		p.classList.add('active');
	}
	p.appendChild(createRemoveElementBtn(todo));
	p.appendChild(createCompletedBtn(todo));
	return p;
};

const renderList = () => {
	box.innerHTML = '';
	list.forEach((todo) => {
		box.appendChild(createTodoElement(todo));
	});
};

const isFormValidate = () => {
	return field.value.trim() === ''; // trimStart(), trimEnd()
};

const clickHandler = (event) => {
	event.preventDefault();
	if (isFormValidate()) {
		return;
	}
	const newTodo = createNewTodo(field.value.trim());
	addNewTodo(newTodo);
	renderList();
	field.value = '';
};

form.addEventListener('submit', clickHandler);
