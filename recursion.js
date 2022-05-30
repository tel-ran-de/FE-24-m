// https://learn.javascript.ru/recursion

// классика - возведение в степень
// pow(x, n), которая возводит x в степень n
// цикл - итеративный способ
// function pow(x, n) {
//   let result = 1;
//   // умножаем result на x n раз в цикле
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// console.log( pow(2, 3) ); // 8



// функция вызывающая саму себя - рекурсивный способ
// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// // console.log( pow(2, 3) ); // 8

// // Стек
// pow(2, 3) = 2 * pow(2, 2) // ... 2 * 4 = 8
// pow(2, 2) = 2 * pow(2, 1)	// ... 2 * 2 = 4
// pow(2, 1) = 2							// 2 затем наверх



























// Рекурсивный обход
// объект сотрудников и их зарплаты
// нужна функция суммы всех зарплат
// let company = {
//   sales: [{
//     name: 'John',
//     salary: 1000
//   }, {
//     name: 'Alice',
//     salary: 600
//   }],

//   development: {
//     sites: [{
//       name: 'Peter',
//       salary: 2000
//     }, {
//       name: 'Alex',
//       salary: 1800
//     }],

//     internals: [{
//       name: 'Jack',
//       salary: 1300
//     }]
//   }
// };



// function sumSalaries(department) {
//   if (Array.isArray(department)) { // случай (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//   } else { // случай (2)

//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//     }
//     return sum;
//   }
// }

// console.log(sumSalaries(company))







// Перепишем в проекте цикл рендера в рекурсивную функцию в проекте
// for (let i = 0; i < applications.length; i++) {
//   const li = document.createElement('li');
//   li.classList.add('applications__list_item');
//   li.innerHTML = `<p class="applications_list_item_time">${applications[i].date}</p>
//                   <p class="applications__give_currency">${applications[i].currentGive}
//                     <span>${applications[i].selectedGiveCurrency}</span>
//                   </p>
//                   <span><img src="./img/Icons.svg" alt=""></span>
//                   <p class="applications__received_currency">${applications[i].outputMoney}
//                     <span>${applications[i].selectedReceiveCurrency}</span>
//                   </p>`
//   applicationsList.appendChild(li);
// }