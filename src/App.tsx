// устанавливаем необходимые пакеты

// yarn create react-app ts_for_redux --template typescript
// yarn add @types/react-redux redux react-redux redux-thunk axios

// Библиотеки
// react-app --template typescript : react-app+ts
// redux : для работы с redux
// react-redux : для работы с redux
// redux-thunk : работа с асинхронными action в хранилище
// axios : библиотека для запросов к серверу






// далее создаем файловую структуру
// 1) папка types - здесь будут описываться типы, которые
// мы будем использовать в нашем приложении

// 2) папка store - здесь мы будем работать с redux

// 3) папка components



// ТИПИЗИРУЕМ ПЕРВЫЙ РЕДЬЮСЕР

// идем в store

// /store --> index.ts
// мы должны содать собственно сам store

// далее в store мы создаем папку reducers и первый редьюсер
// /store/reducers --> userReducer.ts
// в котором будет происходить взаимодействие со списком пользователей приложения

// типизирование этого редьюсера мы разместим в
// /types --> user.ts

// затем проинициализируем редьюсер через combine
// для этого создаем 
// /store/reducers --> index.ts
// там объявляем rootReducer и добавляем его в store (сюда /store --> index.ts)

// остается только подключить store к приложению через Provider в index.tsx
// и добавить в него store

// далее создадим компонент UserList
// /components --> UserList.ts







// ТИПИЗИРОВАНИЕ useSelector

// сначала типизируем rootReducer
// для этого перейдем в /store/reducers --> index.ts

// затем создадим папку hooks и файл /hooks --> useTypedSelector.ts
// где мы создадим useTypeSelector, который будет просто
// типизированным useSelector






// Теперь создадим action-creactor
// c помощью которого будем получать данные от сервера

// создадим папку action-creators
// а внутри файл /action-creators --> user.ts
// где мы создадим thunk creator, который сразу же и типизируем


// тепеь перейдем снова в UserList и используем там получение юзеров
// по пути создадим типизированный хук useTypedDispatch аналогично useTypeSelector













// Масштабируем приложение!
// дальше сделаем todos 

// структура будет похожей на users, только там будет доополнительные два поля limit и page
// будем запрашивать и выводить первые 10 todos на первой странице
// это параметры _limit (количество страниц) и _page (номер страницы)
// их мы укажем вторым аргументом в запросе https://jsonplaceholder.typicode.com/todos

// будем так же делать сначала редьюсер
// затем типы
// потом TodoAction
// затем Action Creator для todos
// добавим новый редьюсер в store

// и потом создадим компонент, который будет принимать и отображать 
// по дефолту первую страницу и 10 тудушек
// и мы так же должны сделать пять страниц, чтобы переключать их
// это значит что нам потребуется ещё один дополнительный экшн для смены page
// то есть fetchTodos экшн всегда будет принимать page и limit
// и нам нужно будет следить только в useEffect за изменением page



import React from 'react';

import UserList from './components/UserList';


function App() {
  return (
    <div>
      <UserList/>
    </div>
  );
}

export default App;
