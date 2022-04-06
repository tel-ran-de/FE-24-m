// setTimeout(() => {
// 	document.body.style.color = 'red';
// }, 2000);
// console.log('Hello');
// // alert('Hello');
// // let name = prompt('Enter Your Name');

// // console.log(name);

// let answer = confirm('Are you sure?');
// console.log(answer);

const h1 = document.querySelector('h1');
console.log(h1);
h1.style.border = '1px solid green';
// h1.style.color = 'blue';

const list = document.querySelectorAll('li');
console.log(list);

function clickHandle() {
	h1.classList.toggle('active'); // add, remove, toggle
	// h1.textContent = 'Hello, Group 24!'; // add text content to element
	h1.innerHTML = 'Hello, <span>Group 24</span>';
	console.log(h1);
	list[2].classList.toggle('active');
}
