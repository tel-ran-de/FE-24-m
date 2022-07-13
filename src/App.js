// https://rajdee.gitbooks.io/redux-in-russian/content/docs/api/applyMiddleware.html
// https://www.digitalocean.com/community/tutorials/redux-redux-thunk-ru#redux-thunk



// applyMiddleware(...middlewares) расширители стора (store enhancers)




// Mидлвар - способ расширения Redux с помощью настраиваемых функций. 
// Mидлвар позволяет вам обернуть метод стора dispatch. 
// Ключевой особенностью мидлвара является то, что они компонуемы и автономны друг от друга.
// import { createStore, applyMiddleware } from 'redux'

// import logger from 'redux-logger'
// import thunk from 'redux-thunk'

// const store = createStore( reducer, applyMiddleware(logger, thunk))







// Существует две популярные библиотеки промежуточного ПО, 
// поддерживающие побочные эффекты и асинхронные действия: Redux Thunk и Redux Saga




// Redux Thunk
// концепция, в которой функция используется для отсрочки оценки или расчета операции


// Redux Thunk — позволяет вызывать actionsCreator, которые возвращают функцию вместо объекта действия. 
// пример

// обычная функция redux actionsCreator
// const changeActiveUser = (user) => {
//   return {
//     type: CHANGE_ACTIVE_USER,
//     payload: user
//   }
// }

// Thunk функция redux actionsCreator
// const removeActivePost = () => {
//   return dispatch => {
//     dispatch( setActivePost(null))
//   }
// }


import { useDispatch, useSelector } from 'react-redux';
import { makeASandwichWithSecretSauce, makeSandwichesForEverybody } from './store/actionsCreator';

function App() {
  const dispatch = useDispatch();


  useSelector(state => console.log(state))

  // мидлвар-преобразователь позволяет диспатчить асинхронные функции так,
  // как будто это обычные события!
  

  // мидлвар даже возвращает результат вашей функции из dispatch, поэтому можно создавать цепочки Promise, если вы их возвращаете.
  // store.dispatch(makeASandwichWithSecretSauce('My wife')).then(() => {
  //   console.log('Done!')
  // })


  function sandwichForMe(){
    dispatch(makeASandwichWithSecretSauce('Me')).then(console.log("Сендвич готов!"))
  }


  return (
    <div>

      <button onClick={ () => sandwichForMe() }>Get Sandwich for Me</button>

      <button onClick={ () => dispatch(makeSandwichesForEverybody()) }>Get Sandwich for Everybody</button>
    </div>
  );
}

export default App;













