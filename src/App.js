// https://ru.reactjs.org/docs/hooks-state.html - состояние
// https://ru.reactjs.org/docs/forms.html - формы и управляемые компоненты
// дополнительно - https://ru.reactjs.org/docs/composition-vs-inheritance.html - о архитектуре

// Внутри компонента
// ХУКИ (hooks) - функции связи с жизненным циклом компонента (подцепится к life cycle)

// позволяют манипулировать State компонента
// позволяют повторно использовать логику состояния, не затрагивая дерево компонентов

// позволяют разбить один компонент на маленькие функции
// по их назначению (например, подписке или загрузке данных),



// Хук состояния - useState

// import { useState } from 'react';

// function App() {
//   // Объявляем новую переменную состояния "count"
//   // синтаксис деструктурирующего присвоения
//   const [count, setCount] = useState(0); // задаём изначальное значение

//   // onClick вызывает setCount
//   // setCount обновляет count
//   // изменение state вызывает ререндер компонента
//   return (
//     <div>
//       <p>Вы нажали {count} раз</p>
//       <button onClick={() => setCount(count + 1)}>
//         Нажми на меня
//       </button>
//     </div>
//   );
// }


// Попробуем сделать форму в React,
// которая будет работать на useState
// заодно узнаем про поднятие состояний

// задача:
// 1. Три input name,surname, fullName - не редактируемый(собранный из name,surname)
// 2. Checkbox без нажатия которого нельзя сделать submit (Согласны с обработкой данных?)
// 3. Select с выбором профессии (Full stack, Frontend, Backend)
// 4. Выбор из трех размеров зарплат radio buttons (2000$,4000$,6000$)
// 5. Кнопка submit
// 6. При sumbit собрать данные в объект и отобразить в console.log()




import Form from './components/Form';

function App() {
  return (
    <Form/>
  );
}

export default App;
