// https://learn.javascript.ru/fetch
// https://learn.javascript.ru/formdata

// дополнительно - https://learn.javascript.ru/blob
// дополнительно - https://habr.com/ru/post/215117/
// дополнительно - https://www.8host.com/blog/obekty-map-i-set-v-javascript/

// Базовый синтаксис:
// let promise = fetch(url, [options])
// url – URL для отправки запроса.
// options – дополнительные параметры: метод, заголовки и так далее.






























// let response = await fetch(url);

// if (response.ok) { // если HTTP-статус в диапазоне 200-299 получаем тело ответа
//   let json = await response.json();
// } else {
//   alert("Ошибка HTTP: " + response.status); // status – код статуса HTTP-запроса, например 404.
// }























// response.text() - вернуть как текст
// response.json() - декодировать json
// response.formData() - посмотрим чуть позже
// response.blob() - бинарные данные с типом (файлы)
// async function getLogin() {
// 	let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// 	let response = await fetch(url);
// 	let commits = await response.json(); // читаем ответ в формате JSON
// 	alert(commits[0].author.login);
// }
// getLogin();
// перепишем на промисы




























// Заголовки ответа
// response.headers
// let response = fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
// response.then(result => {
// 	// result.headers - это Map объект
// 	console.log(result.headers.get('Content-Type'));
// 	for (let [key, value] of result.headers) {
// 	  console.log(`${key} = ${value}`);
// 	}
// });




// Заголовки запроса
// Для установки заголовка запроса в fetch мы можем использовать опцию headers

// let response = fetch(url, {
//   headers: {
//     Authentication: 'secret'
//   }
// });





















// Виды запросов - GET, POST, DELETE, PUT
// GET — получение ресурса
// POST — создание ресурса
// PUT — обновление ресурса
// DELETE — удаление ресурса

// Пример POST
// let user = {
//   name: 'John',
//   surname: 'Smith'
// };

// let response = await fetch('/article/fetch/post/user', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify(user)
// });




















// formData - извлекает данные из формы
// const formElem = document.querySelector('#formElem');


// formElem.onsubmit = async (e) => {
//   e.preventDefault();

//   const formData = new FormData(formElem);

//   let obj = {};

//   for(let [name, value] of formData) {
//   	obj[name] = value;
// 	}

//   // let response = await fetch('/article/formdata/post/user-avatar', {
//   //   method: 'POST',
//   //   body: new FormData(formElem)
//   // });

//   // let result = await response.json();

// };