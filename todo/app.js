const form = document.querySelector('#add-item');

const items = [
	{ title: 'Learn HTML' },
	{ title: 'Learn CSS' },
	{ title: 'Learn JavaScript' },
	{ title: 'Learn React' },
];

const createNewElement = (text) => {
	const newItem = document.createElement('p'); // создаем (виртуально) новый элемент с тегом <p></p>
	newItem.textContent = text; // в новый элемент, в его контентную часть (свойство textContent) встваляем то, что переданно в аргументе функции (text)
	document.querySelector('.list').appendChild(newItem); // выбираем на странице элемент с классом list и добавляем перед его закрытием созданный выше новый элемент
};

form.addEventListener('submit', (e) => {
	e.preventDefault(); // Отменяем действия по умолчанию для формы (отправка данных по адресу в action атрибуте)
	const field = document.querySelector('#new-item'); // выбираем на странице элемент поля
	// const newItem = document.createElement('p'); // создаем (виртуально) новый элемент с тегом <p></p>
	// newItem.textContent = field.value; // в новый элемент, в его контентную часть (свойство textContent) встваляем то, что вписано в поле ввода
	// document.querySelector('.list').appendChild(newItem); // выбираем на странице элемент с классом list и добавляем перед его закрытием созданный выше новый элемент
	createNewElement(field.value);
	// removeChild, replaceChild, insertBefore
	field.value = ''; // очищаем поле ввода от набранного текста
});

items.forEach((element) => {
	createNewElement(element.title);
});

const str = `<p>Lorem Ipsum</p>`;

div.innetHTML = str;
