// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closure



// Области видимости
// let a = 5; // глобальная переменная
// {
// 	let b = 17; // локальная переменная
// }




















// function salute(welcomeText) { // глобальная область видимости
//   console.log(welcomeText);
//   console.log(blabla);
// }

// salute('Привет'); // область видимости создается при каждом вызове
// salute('Здравствуйте'); // для каждого вызова создается своя область видимости















// Локальные области циклов
// for (const fruit of ['apple', 'pears', 'banana']) { // fruit - локальная переменная блочного уровня видимости
//   console.log(fruit);
// }

// console.log(fruit); // Uncaught ReferenceError: fruit is not defined










// цепочкой областей видимости (scope chain)
// let color = 'green';

// function outputColor() {
//   function displayColor() {
//     console.log(color);
//   }
//   displayColor(); // "green"
// }

// outputColor();











// Поднятие (hoisting) функций и переменных
// greet();
// function greet() { // function declaration «перемещаются»(hoisting) в начало текущего контекста
//   console.log('Hello!');
// }

// console.log(width); // undefined
// var width = 500; // hoisting var











// Блочная облать видимости const/let
// if (true) {
//   var subject = "Математика";
// }
// console.log(subject);














// Контекст функции. Ключевое слово this
// function myFunc() {
//   return this;
// }
// console.log(this); // глобальный объект


// let myObj = {
//   propA: 27,
//   methA: function() {
//     return this.propA; // this = myObj
//   }
// }
// myObj.methA();



// объект myFish (мини-задача)
// var myFish = {
//   fish : 'Треска',
//   getFish: function() {
//   	return this.fish;
//   },
//   getOwnObject: function() {
//   	return this;
//   }
// }
// // вывести в консоль результат выполнения метода getFish
// console.log(myFish.getFish()); // "Треска"
// // вывести в консоль результат выполнения метода getOwnObject
// console.log(myFish.getOwnObject()); // объект myFish

















// Указание контекста функции. Методы call и apply
// let user = { // объект user
//   name: 'Василий',
//   age: 27
// }

// function getUserAge() { // объявление функции getUserAge
// 	console.log(arguments);
//   return this.age;
// }

// console.log(getUserAge.call(user,'one','two','three')); // // вызов функции в контексте объекта user
// console.log(getUserAge.apply(user,['one','two','three'])); // // вызов функции в контексте объекта user






















// Привязка функции к контексту (метод bind)
// const mouse = {
//   model: 'M100',
//   getModel: function() {
//     return this.model;
//   }
// }

// let getModelMouse = mouse.getModel; // сохраним в переменную ссылку на метод
// let getModelMouse = mouse.getModel.bind(mouse); // привязка функции к контексту
// console.log(getModelMouse()); // контекст потерян













// Мини-задача
// const user0001 = { // даны два объекта
//   name: 'Афанасий',
//   score: 1300
// }
// const user0002 = {
//   name: 'Анастасия',
//   score: 2500
// }

// function changeScore(amount) {
// 	return this.score + amount;
// }

// let changeScoreUser0001 = changeScore.bind(user0001);
// let changeScoreUser0002 = changeScore.bind(user0002);

// console.log(changeScoreUser0001(200));
// console.log(changeScoreUser0002(500));
// 1 написать функцию changeScore прибавляющую к score объекта user значение amount

// 2 привязать каждый объект к функции, сохранив в отдельные переменные (changeScoreUser0001,changeScoreUser0002)

// 3 вызвать функции с привязанным контекстом и проверить результат
































// const user0001 = {
//   name: 'Афанасий',
//   score: 1300
// }
// const user0002 = {
//   name: 'Анастасия',
//   score: 2500
// }

// function changeScore(amount) {
//   this.score = this.score + amount;
// }


// let changeScoreUser0001 = changeScore.bind(user0001);
// let changeScoreUser0002 = changeScore.bind(user0002);

// changeScoreUser0001(400);
// changeScoreUser0002(300);

// console.log(user0001, user0002);









































// Замыкания - функция внутри другой функции
// Пример #1
// function createCalcFunction(number) {
// 	return function() {
// 		console.log(1000 * number)
// 	}
// }



// createCalcFunction(42);
// const calc42 = createCalcFunction(42); // замкнули значение
// calc42();





















// Пример #2
// function createIncrementor(n) {
// 	return function(num) {
// 		return n + num;
// 	}
// }

// const addOne = createIncrementor(1); // замкнули значение
// console.log(addOne(10));
// const addTen = createIncrementor(10); // замкнули значение
// console.log(addTen(15));























// Мини-задача создать html url generator
// 1 - создать функцию urlGenerator, использующую замыкание
// 2 - urlGenerator должен возвращать строку `https://${url}.${domain}`
// 3 - получать значение url и domain из html
// 4 - выводить обе ссылки в html - https://google.com и https://google.org
// 5 - внедрить отлов ошибок
























































	// const addButton = document.querySelector('.url-generator__add');
	// const urlInput = document.querySelector('input[name="url"]');
	// const domainInput = document.querySelector('input[name="domain"]');
	// const linksList = document.querySelector('.url-generator__links');

	// function urlGenerator(domain) {
	// 	return function(url) {
	// 		return `https://${url}.${domain}`;
	// 	}
	// }

	// addButton.addEventListener('click', function() {
		
	// 	try {

	// 		if (!(urlInput.value && domainInput.value)) {
	// 			throw new SyntaxError("Данные неполны");
	// 		} 



	// 		const geneator = urlGenerator(domainInput.value);
	// 		const url = geneator(urlInput.value);

	// 		const a = document.createElement("a");
	// 		a.href = url;
	// 		a.innerHTML = url;
	// 		a.className = "url-generator__link";
	// 		linksList.append(a);

	// 		domainInput.value = "";
	// 		urlInput.value = "";

	// 	} catch(error) {

	// 		if (error.message === "Данные неполны" ) {
	// 			alert('Заполните оба поля domain и url');
	// 		} else {
	// 			throw error;//проброс
	// 		}

	// 	}
	// });


