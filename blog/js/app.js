const users = JSON.parse(localStorage.getItem('users')) || [];
const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
let activeUser = 0;

const usersBox = document.querySelector('.users');
const blogBox = document.querySelector('.blogs');
const form = document.querySelector('form');

const showBlogs = () => {
	const filteredData = blogs.filter(
		(article) => article.user_id === activeUser
	);
	renderBlogs(filteredData);
};

const renderBlogs = (articles) => {
	blogBox.innerHTML = '';
	articles.forEach((article) => {
		const element = createArticle(article);
		blogBox.appendChild(element);
	});
};

const createArticle = (article) => {
	const div = document.createElement('div');
	div.classList.add('article');
	div.innerHTML = `
    <div class="article__title">${article.title}</div>
    <div class="article__descr">
       ${article.description}
    </div>
    <div class="article__likes">${article.likes}</div>
    `;
	return div;
};

const renderUsers = () => {
	usersBox.innerHTML = '';
	users.forEach((user) => {
		const div = document.createElement('div');
		div.classList.add('user');
		div.textContent = `${user.firstName} ${user.lastName}`;
		div.addEventListener('click', (event) => {
			event.preventDefault();
			activeUser = user.id;
			renderForm();
			showBlogs();
		});

		usersBox.appendChild(div);
	});
};

const renderForm = () => {
	document.querySelector('.form').style.display = 'block';
};

renderUsers();
renderBlogs(blogs);

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (activeUser === 0) return;
	const newArticle = {
		id: Date.now(),
		title: document.querySelector('#title').value,
		description: document.querySelector('#description').value,
		user_id: activeUser,
		likes: 0,
	};
	blogs.push(newArticle);
	saveBlogs();
	document.querySelector('#title').value = '';
	document.querySelector('#description').value = '';
	showBlogs();
});

const saveUsers = () => {
	localStorage.setItem('users', JSON.stringify(users));
};

const saveBlogs = () => {
	localStorage.setItem('blogs', JSON.stringify(blogs));
};
