// https://reactdev.ru/libs/react-router/
// https://v5.reactrouter.com/web/guides/quick-start
// https://reactrouter.com/docs/en/v6/upgrading/v5
// https://stasonmars.ru/tag/react%20router

// import React from 'react';
// import {
//   BrowserRouter as Router, // Роутер, который использует функционал браузера
//   Routes, // рендерит первый <Route>, совпавший с URL
//   Route, //укажет маршруты path="..." element={<.../>}
//   Link, //создаст ссылку <a href=...></a> на страницы
// } from 'react-router-dom';


// const Home = () => <h2>Главная</h2>;

// const About = () => <h2>Контакты</h2>;

// const Users = () => <h2>Пользователи</h2>;


// function App() {
//   return (
//     <Router>
//       <header>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Главная</Link>
//             </li>
//             <li>
//               <Link to="/about">Контакты</Link>
//             </li>
//             <li>
//               <Link to="/users">Пользователи</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         <Routes>
//           <Route path="/about" element={<About/>} />
//           <Route path="/users" element={<Users/>} />
//           <Route path="/" element={<Home/>} />
//         </Routes>
//       </main>
//     </Router>
//   )
// };


// export default App;













// Основные компоненты
// В React Router существует 3 категории компонентов:

// роутеры (routers) - <BrowserRouter> 
// маршруты (route matchers) - <Route>
// и навигация (navigation) - <Link>

// Все компоненты должны быть импортированы из react-router-dom















// Роутеры
// Любая маршрутизация начинается с роутера. 
// react-router-dom предоставляет <BrowserRouter> и <HashRouter>. 
// Основное отличие между ними состоит в способе хранения URL и взаимодействия с сервером.

// <BrowserRouter> использует обычные URL. 
// В этом случае URL выглядят как обычно, но требуется определенная настройка сервера.
// В частности, сервер должен обслуживать все страницы, используемые на клиенте. 
// Create React App поддерживает это из коробки в режиме разработки
// и содержит инструкции для правильной настройки сервера.
// На данный момент есть решение и для статичных сайтов без сервера.

// <HashRouter> хранить текущую локацию в хэш-части URL (после символа "#"),
// поэтому URL выглядит примерно так: http://example.com/#/your/page. 
// Поскольку хэш не отправляется серверу, его специальная настройка не требуется.
// Устарел. Использовался для статических сайтов, без backend.


// Для использования роутера необходимо обернуть в него компонент верхнего уровня:
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

// const App = () => <h1>Привет, React Router</h1>;

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );












// Маршруты
// Существует 2 вида компонентов для поиска совпадений с URL: Routes и Route. 
// При рендеринге <Routes> определяет <Route>, соответствующий текущему URL.
// При обнаружении такого маршрута, он рендерится, остальные маршруты игнорируются.
// Это означает, что вы должны помещать более специфические маршруты перед менее специфическими.

// Если совпадения не найдено, <Routes> ничего не рендерит (точнее, рендерит null).




// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';

// const App = () => (
//   <Router>
//     <main>
//       <Routes>
//         {/* Если текущим URL является /about, рандерится данный маршрут,
//             остальные игнорируются */}
//         <Route path="/about" element={<About/>} />

//         {/* Обратите внимание на порядок расположения этих двух маршрутов.
//             Более специфический path="/contact/:id" находится перед path="/contact" */}
//         <Route path="/contact/:id" element={<Contact/>} />
//         <Route path="/contact" element={<AllContacts/>} />

//         { Если ни один из предыдущих роутеров не совпал,
//             рендерится данный маршрут (он является резервным).

//             Важно: маршрут с path="/" всегда будет совпадать с
//             URL, поскольку все URL начинаются с /. Поэтому
//             мы поместили его последним }
//         <Route path="/" element={<Home/>} />
//       </Routes>
//     </main>
//   </Router>
// );

// Обратите внимание, что <Route path> ищет совпадение с началом, а не со всем URL.
// Поэтому <Route path="/"> всегда будет совпадать с URL. 
// Поэтому в <Routes> мы, обычно, помещаем его последним. 
// Другим возможным решением является использование атрибута exact: <Route exact path="/">,
// который заставляет роутер искать полное совпадение.

















// Навигация

// React Router предоставляет компонент <Link> 
// для создания ссылок в приложении. 
// При использовании <Link> в HTML рендерится <a>
// <Link to="/">Главная</Link>
// <a href="/">Главная</a>



// <NavLink> - это специальный тип <Link>, 
// позволяющий определять стили для активного состояния ссылки.

// <NavLink to="/react" activeClassName="hurray">
//   React
// </NavLink>
// Когда URL является /react, рендерится это:


// <a href="/react" className="hurray">React</a>
// Когда URL является другим:
// <a href="/react">React</a>



// Для принудительной навигации используется <Redirect>. 
// При рендеринге <Redirect> выполняется перенаправление.

// <Redirect to="/login">












// API

// Хуки
// React Router предоставляет несколько хуков 
// для доступа к состоянию роутера и навигации внутри компонентов.

// useHistory - работа с объектом history
// useLocation - работа с объектом location
// useParams - работа с объектом match
// useMatch - работа с объектом matchPath


// useHistory
// import { useHistory } from 'react-router-dom';

// function HomeButton() {
//   const history = useHistory();

//   function handleClick() {
//     history.push('/home');
//   }

//   return (
//     <button type="button" onClick={handleClick}>
//       Вернуться на главную
//     </button>
//   );
// }

// Данный хук предоставляет доступ к экземпляру истории 
// (history instance), который может использоваться для навигации

// Что такое history?
// Это объект позводяющий управлять сессией в разных окружениях
// Объекты истории, как правило, имеют следующие свойства и методы:

// length: number - количество вхождений в стеке истории (history stack)
// action: string - текущая операция (PUSH, REPLACE или POP)
// location: object - текущая локация. Может иметь следующие свойства:
	// pathname: string - адрес URL
	// search: string - строка запроса URL
	// hash: string - хэш-фрагмент URL
	// state: object - специфичное для локации состояние, 
	// переданное, например, с помощью push(path, state) при помещении локации в стек. 
	// Доступно только в браузере и истории, хранящейся в памяти

// push(path, [state]): func - помещает новое вхождение в стек истории
// replace(path, [state]): func - заменяет текущее вхождение в стеке истории
// go(n): func - перемещает указатель в стеке истории на n вхождений
// goBack(): func - эквивалент go(-1)
// goForward(): func - эквивалент go(1)
// block(prompt): func - запрещает переход на другую страницу















// useLocation
// Данный хук возвращает объект локации (location object),
// содержащий информацию о текущем URL. Вы можете думать о нем как о useState,
// возвращающем новую локацию при изменении URL.

// Это может быть полезным в ситуации, 
// когда необходимо получить новое представление страницы 
// с помощью инструмента веб-аналитики при загрузке новой страницы, 
// как в следующем примере:
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   useLocation,
// } from 'react-router-dom';

// function usePageViews() {
//   let location = useLocation();

//   console.log(location);

//   React.useEffect(() => {
//     // analitics.send(['pageview', location.pathname]);
//   }, [location]);
// }

// function Test() {
//   usePageViews();
//   return <>12345</>;
// }


// function App() {

//   return <Router><Test/></Router>;
// }




// export default App;





// location
// Объект локации выглядит следующим образом:
// {
//   key: 'ac3df4', // отсутствует в HashHistory
//   pathname: '/somewhere',
//   search: '?some=search-string',
//   hash: '#howdy',
//   state: {
//     [userDefined]: true
//   }
// }

// Обычно, мы используем строку для навигации, но когда необходимо добавить некоторое "состояние локации", 
// которое будет доступным при возвращении приложения в данную локацию, можно использовать объект локации.
// Это может пригодиться в случае, когда определенные части интерфейса зависят от истории навигации,
// а не от путей (например, модульные окна).
// обычно, это все, что нам нужно
// <Link to="/somewhere"/>

// // однако, вместо этого можно использовать location
// const location = {
//   pathname: '/somewhere',
//   state: { fromDashboard: true }
// }

// <Link to={location}/>
// <Redirect to={location}/>
// history.push(location)
// history.replace(location)

// Наконец location можно передавать в Route
// Это предотвратит использование ими актуальной локации из состоянии роутера. 
// Это может быть полезным для анимации и отложенной навигации,
// а также для замены локации, в которой рендерится компонент.








// useParams
// Данный хук возвращает объект с параметрами URL в формате ключ: значение. 
// Используется для доступа к match.params текущего <Route>:
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useParams,
// } from 'react-router-dom';

// function HomePage() {
//   return <h1>Home page</h1>;
// }

// function BlogPost() {
//   const { slug } = useParams();

//   console.log(useParams());

//   return <div>Отображается пост {slug}</div>;
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/blog/:slug" element={<BlogPost/>} />
//         <Route path="/" element={<HomePage/>} />
//       </Routes>
//     </Router>
//   )
// }

// export default App;















// useMatch
// Данный хук пытается найти совпадение для текущего URL подобно <Route>.
// Он может быть полезен для доступа к совпадающим данным без рендеринга <Route>.
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useMatch,
// } from 'react-router-dom';

// function HomePage() {
//   return <h1>Home page</h1>;
// }

// function BlogPost() {
//   const match = useMatch('/blog/:slug');
//   console.log(match);
//   return <div>Отображается пост {match.params.slug}</div>;
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/blog/:slug" element={<BlogPost/>} />
//         <Route path="/" element={<HomePage/>} />
//       </Routes>
//     </Router>
//   )
// }

// export default App;


// match
// Объект совпадения (match object) содержит информацию о том, 
// насколько <Route path> совпадает с URL

// Он имеет следующие свойства:

// params: object - пары ключ/значение, соответствующие динамической части URL
// isExact: bool - true, если имеет место совпадение
// path: string - паттерн пути, используемый для поиска совпадения. Используется для построения вложенных <Route>
// url: string - совпавшая часть URL. Используется для создания вложенных <Link>







// Вложенный роутинг
// Ниже приводится пример вложенного роутинга. 
// Маршрут /topics загружает компонент Topics, который, 
// в свою очередь, рендерит дальнейшие <Route> на основе значения :id.


// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useMatch,
//   useParams,
// } from 'react-router-dom';

// export const App = () => (
//   <Router>
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Главная</Link>
//           </li>
//           <li>
//             <Link to="/about">О нас</Link>
//           </li>
//           <li>
//             <Link to="/topics">Темы</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>

//     <main>
//       <Routes>
//         <Route path="/about" element={<About/>} />
//         <Route path="/topics/*" element={<Topics/>} />
//         <Route path="/" element={<Home/>} />
//       </Routes>
//     </main>
//   </Router>
// );

// const Home = () => <h2>Главная</h2>;

// const About = () => <h2>О нас</h2>;

// function Topics() {
//   return (
//     <>
//       <h2>Темы</h2>

//       <nav>
//         <ul>
//           <li>
//             <Link to={`components`}>
//               Компоненты
//             </Link>
//           </li>
//           <li>
//             <Link to={`props-vs-state`}>
//               Пропы против состояния
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Страница Topics имеет собственный <Routes> с маршрутами,
//           основанными на URL /topics. Вы можете думать о втором
//           <Route> как о странице для остальных тем
//           или как о странице, отображаемой,
//           когда ни одна из тем не выбрана */}
//       <div>
//         <Routes>
//           <Route path={`:topicId`} element={<Topic/>} />
//           <Route path={`*`} element={<TopicAll/>} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// function Topic() {
//   const { topicId } = useParams();
//   return <h3>Идентификатор выбранной темы: {topicId}</h3>;
// }

// function TopicAll() {
//   return <h3>Пожалуйста, выберите тему.</h3>
// }


// export default App;