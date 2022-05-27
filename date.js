// https://learn.javascript.ru/date

// синтаксис
// let now = new Date();
// console.log( now ); // показывает текущие дату и время


















// timestamp - количество миллисекунд, прошедших с начала 1970 года
// 0 соответствует 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// console.log( Jan01_1970 );

// // теперь добавим 24 часа и получим 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log( Jan02_1970 );

// // 31 декабря 1969 года
// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// console.log( Dec31_1969 );













// datestring
// let date = new Date("2017-01-26");
// console.log(date);


















// new Date(year, month, date, hours, minutes, seconds, ms)
// let date = new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
// console.log(date);

















// Получение компонентов даты
// let now = new Date();

// console.log( now.getFullYear() ); // Получить год (4 цифры)

// console.log( now.getMonth() ); // Получить месяц, от 0 до 11

// console.log( now.getDate() ); // Получить день месяца, от 1 до 31

// console.log( now.getDay() ); // Получить день недели, от 0 (воскресенье) до 6 (суббота)

// getHours() getMinutes() getSeconds() getMilliseconds()



















// Напишите функцию getWeekDay(date), 
// показывающую день недели в формате: 
// «Понедельник», «Вторник», «Среда», «Четверг», «Пятница», «Суббота», «Воскресенье».

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// console.log( getWeekDay(date) );  // нужно вывести "ВТ"