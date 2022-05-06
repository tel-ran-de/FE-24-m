/* 
1. В header название проекта и кнопка Добавить новую карточку
2. В основном блоке список фамилий
3. Модальное окно с формой для добавления новой персоны (открывается по клику на кнопку Добавить новою катрочку)
4. Модальное окно для отображения выбранной персоны (Открывается по клику на выбранную фамилию)
5. При нажатии на кнопку Добавить в форме добавления, создается объект персоны. Этот объект добавляется в массив персон
6. Перед добавлением персоны, будем проверять наличие подобной персоны по критерию - email адрес
7. При невозможности добавления персоны пользователь должен быть проинфолрмирован об этом всплывающим на 5 секунд информациооным блоком красного цвета
8. После добавления персоны пользователь должен быть проинфолрмирован об этом всплывающим на 5 секунд информациооным блоком зеленого цвета

*/

const persons = [];
const box = document.querySelector('.persons__list');
const btnAdd = document.querySelector('.add-new-person');

const btnsModalClose = document.querySelectorAll('.modal__close');
const modalWrapper = document.querySelector('.modal-background');
const modalAdd = document.querySelector('.modal-add');
const modalShow = document.querySelector('.modal-show');

const form = document.querySelector('.form');
const infoBlock = document.querySelector('.info');

const personInfoCard = document.querySelector('.card');

const formSubmitHandler = (event) => {
	event.preventDefault();
	const firstName = document.querySelector('#first-name');
	const lastName = document.querySelector('#last-name');
	const phone = document.querySelector('#phone');
	const email = document.querySelector('#email');
	const photo = document.querySelector('#photo');
	if (isFormValidate(email.value)) {
		const newPerson = createNewPerson(
			firstName.value,
			lastName.value,
			phone.value,
			email.value,
			photo.value
		);
		persons.push(newPerson);
		clearForm();
		renderList();
		closeModal();
		successInfo();
	} else {
		errorInfo();
	}
};

const isFormValidate = (email) => {
	return !persons.find((person) => person.email === email);
};

const createNewPerson = (firstName, lastName, phone, email, photo) => {
	return {
		id: Date.now(),
		firstName,
		lastName,
		phone,
		email,
		photo,
	};
};

const renderList = () => {
	box.innerHTML = '';
	persons.forEach((person) => {
		const element = createHTMLElement(person);
		box.appendChild(element);
	});
};

const createHTMLElement = (person) => {
	const item = document.createElement('li');
	item.classList.add('persons__item');
	item.textContent = `${person.lastName}, ${person.firstName}`;
	item.addEventListener('click', (event) => {
		event.preventDefault();
		showPersonInfo(person);
	});
	return item;
};

const successInfo = () => {
	infoBlock.textContent = 'Пользователь успешно добавлен';
	infoBlock.classList.add('green');
	openInfoBlock();
};

const errorInfo = () => {
	infoBlock.textContent = 'Не могу добавить пользователя';
	infoBlock.classList.add('red');
	openInfoBlock();
};

const openInfoBlock = () => {
	infoBlock.style.display = 'block';
	setTimeout(() => {
		infoBlock.classList.remove('red');
		infoBlock.classList.remove('green');
		infoBlock.style.display = 'none';
	}, 5000);
};

const clearForm = () => {
	document
		.querySelectorAll('.form input[type="text"]')
		.forEach((item) => (item.value = ''));
};

const showPersonInfo = (person) => {
	personInfoCard.innerHTML = `
    <h3 class="card__title">${person.firstName} ${person.lastName}</h3>
    <figure>
    ${
			person.photo.trim()
				? '<img src="' + person.photo + '" alt="#" />'
				: '<i class="fa-regular fa-address-card"></i>'
		}
        
    </figure>
    <div class="card__phone">
        <i class="fa-solid fa-phone"></i> ${person.phone}
    </div>
    <div class="card__email">
        <i class="fa-solid fa-envelope"></i> ${person.email}
    </div>
    <button>ClickMe</button>
    `;
	personInfoCard.querySelector('button').addEventListener('click', (event) => {
		console.log(person);
	});
	modalWrapper.style.display = 'flex';
	modalShow.style.display = 'block';
};

const closeModal = () => {
	clearForm();
	modalAdd.style.display = 'none';
	modalShow.style.display = 'none';
	modalWrapper.style.display = 'none';
};

btnsModalClose.forEach((btn) => {
	btn.addEventListener('click', (event) => {
		event.preventDefault();
		closeModal();
	});
});

btnAdd.addEventListener('click', (event) => {
	event.preventDefault();
	modalWrapper.style.display = 'flex';
	modalAdd.style.display = 'block';
});

form.addEventListener('submit', formSubmitHandler);
