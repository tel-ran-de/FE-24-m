// https://tproger.ru/translations/redux-for-beginners/
// https://habr.com/ru/post/498860/
// https://react-redux.js.org/api/hooks


// Простой пример

// 1. Создание store и его изменение (dispatch)


// import { createStore } from 'redux';
// import { useState } from 'react';

// const reducer = (state = 0, action) => {
//   switch(action.type) {
//     case 'INC':
//       return state + 1;
//     case 'DEC':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer);


// function App() {
//   const { dispatch, subscribe, getState } = store; // извлекаем функции из объекта store

//   subscribe(() => {
//     console.log(getState())
//   })

//   function clickPlus() {
//     dispatch({type: 'INC'});
//   }

//   function clickMinus() {
//     dispatch({type: 'DEC'});
//   }

//   return (
//     <>
//       <button onClick={clickPlus}>+</button>
//       <button onClick={clickMinus}>-</button>
//     </>
//   );
// }

// export default App;















// Основные концепции

// 1.Единый источник состояния. 
// Все данные о состоянии приложения хранятся в одном месте, без копий.

// 2. Доступ к состоянию — только для чтения. (getState)
// Глобальное состояние заблокировано для записи.

// 3.Изменения — только через редьюсеры (reducers). 
// Когда в состояние поступает действие, его обрабатывают редьюсеры. Это чистые функции.





// Как устроено приложение с Redux
// Управление состоянием в три части:

// 1. источник состояния;
// 2. интерфейс, созданный на основе актуального состояния;
// 3. функции-действия.
// (redux-cycle.png)






// Источник состояния (хранилище) существует в определенном виде.
// На его основе строится интерфейс приложения. 
// Когда происходят изменения, в источник состояния поступает действие и редукторы перезаписывают состояние. 
// Источник состояния изменяется.

// Затем он отправляет новые данные всем компонентам, которые настроены их получать.
// Так реализована зависимость интерфейса от источника. 
// Компоненты получают информацию и перерисовывают интерфейс в соответствии с ней.












// Теперь подробно о каждой части redux
// 1. Неизменяемое дерево состояний (state или state tree)

// {
//   list: [
//     { title: "First item" },
//     { title: "Second item" },
//   ],
//   title: 'Grocieries list'
// }

// Доступно только для чтения, 
// изменить ничего напрямую нельзя. 
// Изменения возможны только при отправке action (действия).




// 2. Действия
// Действие (action) — это JavaScript-объект, который лаконично описывает суть изменения:

// {
//   type: 'CLICKED_SIDEBAR'
// }
// // подробности об изменении
// {
//   type: 'SELECTED_USER',
//   userId: 232
// }

// Единственное требование к объекту действия — это наличие свойства type,
// значением которого обычно является строка.


// Типы действий должны быть константами
// Тип действия задаётся константой. 

// const ADD_ITEM = 'ADD_ITEM'
// const REMOVE_ITEM = 'REMOVE_ITEM'
// const action = { type: ADD_ITEM, title: 'Third item' }

// действия нужно выносить в отдельные файлы. А затем их импортировать:

// import { ADD_ITEM, REMOVE_ITEM } from './actions'



// Генераторы действий
// Генераторы действий (actions creators) — это функции, создающие действия.

// function addItem(t) {
//   return {
//     type: ADD_ITEM,
//     title: t
//   }
// }

// // Они инициируются вместе с функцией отправки действия:

// dispatch(addItem('Milk'))
// // Или при определении этой функции:

// const dispatchAddItem = i => dispatch(addItem(i))
// dispatchAddItem('Milk')









// 3. Редьюсеры
// При запуске действия обязательно что-то 
// происходит и состояние приложения изменяется. 
// Это работа редукторов.

// Что такое редуктор
// Редуктор (reducer) — это чистая функция, 
// которая вычисляет следующее состояние дерева на основании 
// его предыдущего состояния и применяемого действия.

// (currentState, action) => newState
// Чистая функция работает независимо от состояния программы 
// и выдаёт выходное значение, принимая входное 
// и не меняя ничего в нём и в остальной программе. 
// Получается, что редуктор возвращает совершенно новый 
// объект дерева состояний, 
// которым заменяется предыдущий {...state} [...state].




// Упрощённо базовую структуру Redux можно представить так:

// Состояние
// {
//   list: [
//     { title: "First item" },
//     { title: "Second item" },
//   ],
//   title: 'Grocieries list'
// }

// // Список действий
// { type: 'ADD_ITEM', title: 'Third item' }
// { type: 'REMOVE_ITEM', index: 1 }
// { type: 'CHANGE_LIST_TITLE', title: 'Road trip list' }

// // Редуктор для каждой части состояния
// const title = (state = '', action) => {
//   if (action.type === 'CHANGE_LIST_TITLE') {
//     return action.title
//   } else {
//     return state
//   }
// }
// const list = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return state.concat([{ title: action.title }])
//     case 'REMOVE_ITEM':
//       return state.map((item, index) =>
//         action.index === index
//           ? { title: item.title }
//           : item
//     default:
//       return state
//   }
// }

// // Редуктор для общего состояния
// const listManager = (state = {}, action) => {
//   return {
//     title: title(state.title, action),
//     list: list(state.list, action),
//   }
// }







// 4. Хранилище
// Хранилище (store) — это объект, который:

// содержит состояние приложения;
// отображает состояние через getState();
// может обновлять состояние через dispatch();
// позволяет регистрироваться (или удаляться) в качестве слушателя изменения состояния через subscribe().
// Хранилище в приложении всегда уникально. Так создаётся хранилище для приложения listManager:

// import { createStore } from 'redux'
// import listManager from './reducers'
// let store = createStore(listManager)


// Функции хранилища
// Получение состояния:
// store.getState()


// Обновление состояния:
// store.dispatch(addItem('Something'))

// Прослушивание изменений состояния:

// const unsubscribe = store.subscribe(() =>
//   const newState = store.getState()
// )
// unsubscribe()




// store
// ├── actionCreators.js
// ├── actions.js
// ├── reducer.js
// ├── initialState.js
// └── store.js


// Как это выглядит на практике?
// 1. добавляем в приложение redux - yarn add redux или npm install redux 
// 2. Создадим структуру папок и файлов




// initialState

// initialState — объект, представляющий начальное состояние хранилища. 
// Он является дефолтным значение state reducer(state = initialState, action). 
// С созданием хранилища можно сразу объявить начальное состояние для его полей. 
// Этот объект желательно создавать, даже в тех случаях, 
// когда объявления начального состояния не требуется. 
// Потому что этот объект помогает посмотреть на структуру хранилища
// и название его полей. 
// Обычный объект initialState выглядит следующим образом:

// const initialState = {
//     firstName: "",
//     lastName: ""
// };

// export default initialState;



// reducer()
// reducer — чистая функция которая будет отвечать за обновление состояния. 
// Здесь реализовывается логика в соответствие с которой будет происходить обновление полей store.

// Так выглядит базовая функция reducer:

// function reducer(state, action) {
//     switch(action.type) {
//         case ACTION_1: return { value: action.value_1 };
//         case ACTION_2: return { value: action.value_2 };
        
//         default: return state;
//     }
// }


//  createStore
// Код файла store.js
// import { createStore } from 'redux';
// const store = createStore(reducer);
// export default store;



// subscribe()
// А как же узнать, когда состояние обновилось? 
// Для этого есть метод subscribe().



// import React from 'react';
// import { changeFirstName, changeLastName } from "./store/actionCreators.js";
// import store from "./store/store.js";

// const App = () => {
//     const { dispatch, getState, subscribe } = store;
//     function firstNameHandler(e) {
//       dispatch( changeFirstName(e.target.value) )
//     }
//     function lastNameHandler(e) {
//       dispatch( changeLastName(e.target.value) )
//     }
//     return (
//       <>
//         <input type="text" value={getState().firstName} onChange={firstNameHandler} />
//         <input type="text" value={getState().lastName} onChange={lastNameHandler} />
//       </>
//     );
// }

// export default App;




// react-redux
// Provider
// useDispatch()
// useSelector()


// import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { changeFirstName, changeLastName } from "./store/actionCreators.js";

// const App = () => {
//     const dispatch = useDispatch();

//     const firstName = useSelector( state => state.firstName );
//     const lastName = useSelector( state => state.lastName );




//     function firstNameHandler(e) {
//       dispatch( changeFirstName(e.target.value) )
//     }
//     function lastNameHandler(e) {
//       dispatch( changeLastName(e.target.value) )
//     }
//     return (
//       <>
//         <input type="text" value={firstName} onChange={firstNameHandler} />
//         <input type="text" value={lastName} onChange={lastNameHandler} />
//       </>
//     );
// }

// export default App;









// combineReducers()

// позволяет объединить несколько редьюсеров в один

// src/reducers/user.js
// const initialState = {
//   name: 'Аноним'
// }

// export default function user(state = initialState) {
//   return state
// }




// src/reducers/page.js
// const initialState = {
//   year: 2016,
//   photos: []
// }

// export default function page(state = initialState) {
//   return state
// }





// import { combineReducers } from 'redux'
// import page from './page'
// import user from './user'

// export default combineReducers({
//   page,
//   user
// })


// store
// ├── actionCreators
// │ ├── action_1.js
// │ └── action_2.js
// ├── actions
// │ ├── action_1.js
// │ └── action_2.js
// ├── reducers
// │ ├── reducer_1.js
// │ ├── reducer_2.js
// │ └── rootReducer.js
// ├── initialState.js
// └── store.js
