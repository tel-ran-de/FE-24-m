let currentNumber = 0;
let operand = 0;
let operation = '';
let isResult = false;

const outputCurrentNumber = () => {
	document.querySelector('.calc-output').textContent = Number(currentNumber);
};

document.querySelectorAll('.number').forEach((ele) => {
	ele.addEventListener('click', (event) => {
		event.preventDefault();
		if (isResult) {
			currentNumber = 0;
			isResult = false;
		}
		currentNumber += event.target.textContent;
		outputCurrentNumber();
	});
});

document.querySelector('.resetBtn').addEventListener('click', (event) => {
	event.preventDefault();
	currentNumber = 0;
	operation = '';
	operand = 0;
	outputCurrentNumber();
});

document.querySelectorAll('.btns-wrapper button').forEach((btn) => {
	if (
		btn.classList.contains('resetBtn') ||
		btn.classList.contains('equalsBtn')
	) {
		return;
	}
	btn.addEventListener('click', (event) => {
		event.preventDefault();
		operand = Number(currentNumber);
		currentNumber = 0;
		operation = event.target.textContent;
		outputCurrentNumber();
		console.log(operand, operation);
	});
});

// document.querySelector('.plusBtn').addEventListener('click', (event) => {
// 	event.preventDefault();
// 	operand = Number(currentNumber);
// 	currentNumber = 0;
// 	operation = event.target.textContent;
// 	outputCurrentNumber();
// 	console.log(operand, operation);
// });

document.querySelector('.equalsBtn').addEventListener('click', (event) => {
	event.preventDefault();
	if (!operation) return;
	if (operation === '+') {
		currentNumber = Number(currentNumber) + operand;
	}
	if (operation === '-') {
		currentNumber = operand - currentNumber;
	}
	if (operation === 'x') {
		currentNumber = operand * currentNumber;
	}
	if (operation === '/') {
		if (+currentNumber === 0) {
			alert('Division by zero');
			return;
		}
		currentNumber = operand / currentNumber;
	}
	operand = 0;
	operation = '';
	isResult = true;
	outputCurrentNumber();
});

outputCurrentNumber();
