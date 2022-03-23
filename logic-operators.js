// || - логическое ИЛИ
// && - логическое И
// ! - логическое НЕ

// console.log(1 === 1 || 2 === 2);
// console.log(1 === 1 || 2 !== 2);
// console.log(1 !== 1 || 2 === 2 || 3 === 3 || 4 === 4);
// console.log(1 !== 1 || 2 !== 2);

// console.log(1 === 1 && 2 === 2);
// console.log(1 === 1 && 2 !== 2);
// console.log(1 !== 1 && 2 === 2);
// console.log(1 !== 1 && 2 !== 2);

// let time = 16;

// if (time > 10 && time < 18) {
//     console.log('Office is open');
// }

// console.log(undefined || null || '' || 0);

// let name = '1';
// let defaultName = 'null';
// let currentName = 'Iron Man';
// // console.log(name || defaultName || currentName || 'undefined name');
// console.log(name && currentName && defaultName);

// отработает при 0, '', false и не отработает при undefined/null
let userName = false;
console.log(userName ?? 'Anonimus');
