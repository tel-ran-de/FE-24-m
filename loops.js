// while
// do - while
// for

// while (condition) {
//     action
// }

// while (true) {
//     console.log('hello ;-)');
// }
// let number = 100;
// // while (number <= 10) {
// // 	console.log(number);
// // 	number++;
// // }

// do {
// 	console.log(number++);
// } while (number <= 10);

// for (start; condition; step) {
//     loop body (actions)
// }
// let i = 'hello';
// for (let i = 1; i <= 10; i++) {
// 	console.log(i);
// }
// console.log('last i', i);

// let a = 0;
// for (; a <= 100; ) {
// 	console.log(a);
// 	a += 10;
// }

for (let startNumber = 1; startNumber <= 100; startNumber += 10) {
	// if (startNumber <= 51) {
	// 	console.log(startNumber);
	// }
	// console.log(startNumber);
	// if (startNumber === 51) break;

	if (startNumber !== 51) continue;

	console.log(startNumber);
}
