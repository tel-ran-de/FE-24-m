let todo = {
	id: 100500,
	title: 'Learn JSON Format',
	isCompleted: false,
};

let todoJson = JSON.stringify(todo);
console.log(todoJson);
console.log(typeof todoJson);

let todoJs = JSON.parse(todoJson);
console.log(todoJs);
console.log(typeof todoJs);

const todos = [
	todo,
	{ id: 100498, title: 'Learn HTML', isCompleted: true },
	{ id: 100499, title: 'Learn CSS', isCompleted: true },
];
const todosJson = JSON.stringify(todos);
console.log(todosJson);
console.log(JSON.parse(todosJson));
