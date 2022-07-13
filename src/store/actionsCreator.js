import { MAKE_SANDWICH, APOLOGIZE } from './actions' ;

//Это такие же обычные генераторы экшенов, которые вы видели ранее.
//Экшены, которые они возвращают, могут быть переданы в `dispatch` без каких-либо мидлваров.
//Тем не менее, они отражают только "факты", но не "асинхронный flow"

function makeASandwich(forPerson, secretSauce) {
  return {
    type: MAKE_SANDWICH,
    payload: {
      forPerson,
      secretSauce
    }
  }
}

function apologize(fromPerson, toPerson, error) {
  return {
    type: APOLOGIZE,
    payload: {
      fromPerson,
      toPerson,
      error
    }
  }
}



// Но что, если вам нужно запустить асинхронную операцию,
// такую, как вызов API или переход в роутере?

// Встречайте `преобразователи` (thunks).
// Преобразователь - это всего лишь функция, возвращающая функцию.
// Вот пример преобразователя:

function makeASandwichWithSecretSauce(forPerson) {

  // function fetchSecretSauce() {
  //   return fetch(`https://www.google.com/search?q=secret+sauce`)
  // }

  async function fetchSecretSauce() {
    return 'Cырный'
  }


  // Инвертируем управление!
  // Возвращаем функцию, которая принимает `dispatch` как аргумент, чтобы мы могли её вызвать позже.
  // мидлвар-преобразователь знает, как нужно конвертировать такие асинхронные экшены в стандартные.

  return function (dispatch) {
    return fetchSecretSauce().then(
      sauce => dispatch(makeASandwich(forPerson, sauce)),
      error => dispatch(apologize('The Sandwich Shop', forPerson, 'Соусы кончились'))
    )
  }
}




// // Фактически, можно даже писать генераторы событий, 
// // которые диспатчат обычные и асинхронные события из других генераторов событий, 
// // и, таким образом, создавать полноценные потоки управления событиями с использованием Promise
function makeSandwichesForEverybody() {
  return function (dispatch, getState) {
    if (getState().sandwiches.isShopOpen) {

      // Вы не обязаны возвращать Promise, но это хорошее соглашение, 
      // чтобы вызывающий мог всегда вызвать .then() на результате вашего `dispatch`

      return Promise.resolve()
    }

    // Мы можем диспатчить как обычные объекты событий, 
    // так и асинхронные функции-преобразователи одновременно,
    // что позволяем нам встраивать асинхронные события в единый поток событий.
    return dispatch(
      makeASandwichWithSecretSauce('My Grandma'))
      .then(() =>
        Promise.all([
          dispatch(makeASandwichWithSecretSauce('Me')),
          dispatch(makeASandwichWithSecretSauce('My wife'))
        ])
      )
      .then(() => dispatch(makeASandwichWithSecretSauce('Our kids')))
  }
}


export { 
  makeASandwich,
  apologize,
  makeASandwichWithSecretSauce,
  makeSandwichesForEverybody,
};