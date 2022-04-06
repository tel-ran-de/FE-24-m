const list = document.querySelectorAll('li');
const infos = document.querySelectorAll('.info');
let activeID;

const showInfo = (index) => {
	console.log('Step #1 - Main function');
	// inactiveAllElement();
	setInActiveElement();
	setActiveElement(index - 1);
	//  --------------
	// hideAllInfos();
	hideActiveInfo();
	setShowInfo(index - 1);
	activeID = index - 1;
};

const inactiveAllElement = () => {
	console.log('Step #2 - clear all active Li element');
	for (const element of list) {
		element.classList.remove('active');
	}
};

const setInActiveElement = () => {
	console.log('Step #2.1 - clear active Li element');
	if (activeID !== undefined) {
		list[activeID].classList.remove('active');
	}
};

const setActiveElement = (index) => {
	console.log('Step #3 - set to active Li element by click');
	list[index].classList.add('active');
};

const hideAllInfos = () => {
	console.log('Step #4 - hide all Info blocks');
	for (const element of infos) {
		element.classList.remove('is-show');
	}
};

const hideActiveInfo = () => {
	console.log('Step #4.1 - hide active Info block');
	if (activeID !== undefined) {
		infos[activeID].classList.remove('is-show');
	}
};

const setShowInfo = (index) => {
	console.log('Step #5 - show one info block by click');
	infos[index].classList.add('is-show');
	// document.querySelector('#info_' + index).classList.add('is-show');
};
