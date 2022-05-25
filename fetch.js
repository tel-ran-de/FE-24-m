// https://www.cat-in-web.ru/fetch-async-await/
// дополнительно - https://learn.javascript.ru/destructuring


// Примеры использования fetch
// Чтение метаданных ответа
// fetch("https://httpbin.org/json").then((response) => {
//   console.log(response.status);
//   console.log(response.headers.get("Content-Type"));
// });













// Чтение текста ответа
// fetch("https://httpbin.org/html")
//   .then((response) => response.text())
//   .then((data) => console.log(data));













// Чтение json ответа
// fetch("https://httpbin.org/json", {
//   headers: {
//     Accept: "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((ex) => console.log("parsing failed", ex));














// Отправка json
// fetch("https://httpbin.org/post", {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify({ k: "v" }),
// });












// цепочка промисов
// fetch("https://httpbin.org/json")
//   .then((res) => res.json())
//   .then((data) => console.log("request succeeded with JSON response", data))
//   .catch((error) => console.log("request failed", error));
















// fetch + await + promise.all
// async function fetchMoviesAndCategories() {
//   const [moviesResponse, categoriesResponse] = await Promise.all([ // запускает запросы параллельно и ждет resolved
//     fetch('/movies'),
//     fetch('/categories')
//   ]);

//   const [movies, categories] = await Promise.all([ // запускает запросы параллельно и ждет resolved
//     moviesResponse.json(),
//     categoriesResponse.json()
//   ]);
//   return [movies, categories];
// }



// fetchMoviesAndCategories().then(([movies, categories]) => {
//   movies;     // список фильмов
//   categories; // список категорий
// }).catch(error => {
// 	console.log(error);
//   // один из запросов завершился с ошибкой
// });





















































// Архитектура fetch/async в миниатюре
// 1. Нужно получить некие данные, чтобы приложение могло начать работать.
// 2. До получения данных состояние приложения должно быть дефолтным - в ожидании.
// 3. После получения данных нужно инициалилировать, запустить работу приложения.



// Dom-элементы для манипуляций
// const form = document.querySelector("#formElem"),
//       firstName = document.querySelector(".firstName"),
//       lastName = document.querySelector(".lastName"),
//       submitBtn = document.querySelector(".submitBtn");



// // // состояние приложения
// let appState = 'pending'; // состояние в ожидании
// firstName.disabled = true; // форма
// lastName.disabled = true; // неактивна
// submitBtn.disabled = true; // в ожидании






// инициализация
// initializeApp();
// async function initializeApp() {

//   // изобразили долгое ожидание
//   const emptyAwait = new Promise(function(resolve,reject) {
//     setTimeout(()=>(resolve('подождали три секунды')),3000)
//   })

//   const awaitMessage = await emptyAwait;
//   console.log(awaitMessage);

//   // отправили GET запрос серверу
//   const response = await fetch("https://httpbin.org/json");
//   // интерпретировали данные
//   const appData = await response.json();

//   // произвели рендер
//   appRender(appData);

//   // перевели приложение в состояние инициализированного
//   appState = 'initialized'; // состояние в ожидании
//   firstName.disabled = false; // форма
//   lastName.disabled = false; // неактивна
//   submitBtn.disabled = false; // в ожидании
// }


// // render
// function appRender(appData) {
//   console.log("Отрендерим это", appData);
// }


// // прослушка
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   console.log(appState);
// });




























