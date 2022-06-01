// документация - https://ru.reactjs.org/
// читаем для легкого введения - https://www.taniarascia.com/getting-started-with-react/

// повторяем - https://ru.reactjs.org/docs/introducing-jsx.html
// повторяем - https://ru.reactjs.org/docs/rendering-elements.html
// повторяем - https://ru.reactjs.org/docs/handling-events.html
// повторяем - https://ru.reactjs.org/docs/components-and-props.html




// https://nodejs.org/en/ - установить последнюю версию
// https://ru.reactjs.org/docs/create-a-new-react-app.html#create-react-app - выполнить инструкции по установке
// https://create-react-app.dev/docs/getting-started/
// react developer tools - установить экстеншн для браузера
// Настроить ваш редактор кода для использования Babel - для подсветки синтаксиса








// Реакт библиотека для создания компонентов интерфейса
// В реакт использует MVC - model view controller - шаблон разработки интерфейсов(react#1)
// Модель - динамическая структура данных приложения, независимая от пользовательского интерфейса, "логика"
// Представление - таблица, кнопка, форма - КОМПОНЕНТ
// Контроллер - принимает ввод(event) и преобразует его в команды для модели или представления















// Компонент - главное слово в реакт
// Компонентом может быть любая часть интерфейса
// рассмотрим пример фейсбук

// Как выглядит структура компонентов реакт



// <App>
// 	<Header/>
// 	<Content/>
// 	<Footer/>
// </App>



// <CoolForm>
// 	<TextInput/>
// 	<FinalButton/>
// </CoolForm>

// const heading = <h1 className="head">Hello, React</h1>
// const heading = React.createElement('h1', {className: 'head'}, 'Hello, React!')


// Это JSX - особый синтаксис, который использует в React
// Он очень похож на html, и теперь мы будем писать его вместо html






// Преимущество реакт 1. 
// Инкапсулированные компоненты - деление на все более мелкие компоненты.(react#2)
// Компоненты таким образом можно использовать повторно




// Преимущество реакт 2. Динамические свойства и состояния.
// Каждый компонент может принимать и передавать по дереву props (неизменяемые) и state (изменяемые)
// props передаётся в компонент (служат как параметры функции)
// state находится внутри компонента (по аналогии с переменными, которые объявлены внутри функции)
// если мы хотим изменить parent state из child, то нам нужно передать в child функцию изменяющую parent state
// Так же есть другие варианты работы с состоянием в react, которые мы рассмотрим позднее




// Преимущество реакт 3. Виртуальный DOM.(react#3,react#3.1)
// Мы работаем только с абстракцией реакт, выраженной в виртуальном DOM, реакт берет на себя рендер
// и делает это максимально эффективно






// Декларативный(что) React VS Императивный(как) JS Native




























// О react подробно - БАЗА
// 1. JSX
// const element = <h1>Привет, мир!</h1>;
// React вместо того, чтобы разделять разметку и логику
// разделяет отвественность - создавая компоненты содержащие логику+разметку

// const name = 'Иван-Царевич'; // обычный js и следом вместе JSX
// const element = <h1>Здравствуй, {name}!</h1>;


// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );



// внутри фигурных скобок в JSX допустимы любые выражения
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
// const user = {
//   firstName: 'Марья',
//   lastName: 'Моревна'
// };
// const element = (
//   <h1>
//     Здравствуй, {formatName(user)}!
//   </h1>
// );
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
















// Использование атрибутов JSX
// const user = {
// 	avatarUrl: `https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380`,
// }

// const element = (
// 	<div>
// 		<a href="https://www.reactjs.org"> link </a>
// 		<img src={user.avatarUrl}></img>
// 		<div className="normal-block">Обычный div</div>
// 	</div>
// );

// // обратите внимание на className - camelCase

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );




// JSX это объект, которые react правильно интерпретирует
// const element = (
//   <h1 className="greeting">
//     Привет, мир!
//   </h1>
// );


// // const element = React.createElement(
// //   'h1',
// //   {className: 'greeting'},
// //   'Привет, мир!'
// // );

// console.log(element)

















// 2. Рендеринг
// «Корневой» узел DOM
// <div id="root"></div>




// Элементы — мельчайшие кирпичики React-приложений
// Элемент описывает то, что вы хотите увидеть на экране:
// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));



// Пример
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// В этом примере ReactDOM.render() вызывается каждую секунду 
// с помощью колбэка setInterval()
// Реакт обновляет только то, что необходимо















// 3. Обработка событий
// События в React именуются в стиле camelCase вместо нижнего регистра.
// С JSX вы передаёте функцию как обработчик события вместо строки


// ПРИМЕР html
// <button onclick="activateLasers()">
//   Активировать лазеры
// </button>


// // ПРИМЕР react
// <button onClick={activateLasers}>
//   Активировать лазеры
// </button>

// addEventListener больше не нужен

// Рабочий пример
// function Form() {
// 	const formId = '12345';

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(`Отправлена форма ${formId}`);
//   }

//   return (
//     <form onSubmit={ (event) => handleSubmit(event) }>
//       <button type="submit">Отправить</button>
//     </form>
//   );

// }
// ReactDOM.render(<Form/>, document.getElementById('root'));













// 4. Компоненты и пропсы
// Функциональные и классовые компоненты

// Функциональные (более современный, популярный в новом коде, простой)
// function Welcome(props) {
//   return <h1>Привет, {props.name}</h1>;
// }

// ReactDOM.render(<Welcome name='Алиса' />, document.getElementById('root'));

// Классовые (более классический, распространен в старом коде, сложен)
// class Welcome extends React.Component {
//   render() {
//     return <h1>Привет, {this.props.name}</h1>;
//   }
// }

// Они эквивалентны






// Как отрендерить компонент?
// function Welcome(props) {
// 	console.log(props);
//   return <h1>Привет, {props.name}</h1>;
// }

// const element = <Welcome name="Алиса" />;


// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// Когда React встречает подобный элемент - <Welcome name="Алиса" />
// он собирает все JSX-атрибуты и дочерние элементы в один объект 
// и передаёт их нашему компоненту. 
// Этот объект называется «пропсы» (props).

// По шагам:
// 1. Мы передаём React-элемент <Welcome name="Алиса" /> в ReactDOM.render().
// 2. React вызывает наш компонент Welcome с пропсами {name: 'Алиса'}.
// 3. Наш компонент Welcome возвращает элемент <h1>Привет, Алиса</h1> в качестве результата.
// 4. React DOM делает минимальные изменения в DOM, чтобы получилось <h1>Привет, Алиса</h1>.










// // Композиция компонентов
// function Welcome(props) {
//   return <div>Привет, {props.name}</div>;
// }

// function App() { // функциональный компонент
//   return (
//     <div>
//       <Welcome name="Алиса" />
//       <Welcome name="Базилио" />
//       <Welcome name="Буратино" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
// Работает как вызов функции с аргументами













// Извлечение компонентов
// Компоненты можно разбивать на меньшие части
// Попробуем сами сделать это

// function UserInfo(props) { // props.author
// 	const author = props;

//   return (
//     <div className="UserInfo">
//       <img className="Avatar"
//         src={author.avatarUrl}
//         alt={author.name}
//       />
//       <div className="UserInfo-name">
//         {author.name}
//       </div>
//     </div>
//   );
// }

// function Comment(props) {//props({autor:{...},data:'12.24.1999',text:'fdsfsdfsdf'})
//   return (
//     <div className="Comment">

//       <UserInfo author={props.author}/>

//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>


//     </div>
//   );
// }





// Пропсы только для чтения! Никогда не меняем их!
// чистая функция
// function sum(a, b) {
//   return a + b;
// }
// // функция с сайд эффектом
// function withdraw(account, amount) {
//   account.total -= amount;
// }

// React-компоненты обязаны вести себя как чистые функции по отношению к своим пропсам!

















// Жизненный цикл в синтаксисе Class
// State
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }


//   componentWillMount() {
//     console.log('Вызываюсь лишь один раз, как constructor');
//     // Здесь можно обновить state
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//     console.log('Вызываюсь лишь один раз, как constructor');
//     // Здесь можно обновить state
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//     console.log('Вызываюсь после отрисовки');
//     // lifecycle#1
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('State/props изменился!');
//     return true
//     // Для оптимизации производительности компонента
//   }


//   componentWillUpdate(nextProps, nextState){
//     console.log('Компонент собирается сделать ререндер!');
//     // Здесь нужно синхронизировать состояние (state) с props
//   }

//   componentDidUpdate(prevProps, prevState){
//     console.log('Компонент отрендерен!');
//     // Здесь можно выполнять сайд-эффекты (fetch и т.д.)
//   }

//   render() {
//     return (
//       <div>
//         <h1>Привет, мир!</h1>
//         <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }



// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );