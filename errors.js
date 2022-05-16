// https://learn.javascript.ru/try-catch

// Обработка ошибок
// try {
// } catch(error) { // error - объект ошибки
// }







// try {
//   console.log('Начало блока try');
//   lalala; // ошибка, переменная не определена!
//   console.log('Конец блока try (никогда не выполнится)');
// } catch(error) { // error - объект ошибки
// 	console.log(`Возникла ошибка!`, error);
// 	console.log(error.name);
// 	console.log(error.message); 
// 	console.log(error.stack);
// }

























// Обработка не(!) синтаксических ошибок
// try {
//   {{{{{{{{{{{{
// } catch(error) {
//   alert("Движок не может понять этот код, он некорректен");
// }
























// Генерация собственных ошибок
// Оператор throw генерирует ошибку
// let json = '{ "age": 30 }'; // данные неполны

// try {
//   let user = JSON.parse(json); // <-- выполнится без ошибок
//   if (!user.name) {
//     throw new SyntaxError("Данные неполны: нет имени"); // (*)
//   }
//   console.log( user.name );
// } catch(error) {
//   console.log( "JSON Error: " + error.message ); // JSON Error: Данные неполны: нет имени
// }


























// Проброс исключения
// let json = '{ "age": 30 }'; // данные неполны


// try {
//   let user = JSON.parse(json);
//   blabla(); // неожиданная ошибка
//   if (!user.name) {
//     throw new SyntaxError("Данные неполны: нет имени");
//   }
//   alert( user.name );
// } catch(e) {
//   if (e.name == "SyntaxError") {
//     alert( "JSON Error: " + e.message );
//   } else {
//     throw e; // проброс (*)
//   }
// }



// Отлов ошибки снаружи
// function readData() {
//   let json = '{ "age": 30 }';
//   try {
//     // ...
//     blabla(); // ошибка!
//   } catch (error) {
//     // ...
//     if (error.name != 'SyntaxError') {
//       throw error; // проброс исключения (не знаю как это обработать)
//     }
//   }
// }

// try {
//   readData();
// } catch (error) {
//   alert( "Внешний catch поймал: " + error ); // поймал!
// }






























// finally - расширенный синтаксис
// try {
//    ... пробуем выполнить код...
// } catch(e) {
//    ... обрабатываем ошибки ...
// } finally {
//    ... выполняем всегда ...
// }







