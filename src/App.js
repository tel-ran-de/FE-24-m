// https://ru.reactjs.org/docs/hooks-reference.html#usememo
// https://ru.reactjs.org/docs/hooks-reference.html#useref
// https://ru.reactjs.org/docs/hooks-rules.html
// дополнительно - https://ru.reactjs.org/docs/hooks-reference.html

// import { useState, useMemo } from 'react';

// function App() {
//     const [ calc1, setCalc1 ] = useState(0);
//     const [ calc2, setCalc2 ] = useState(0);
//     const [ noCalc, setNoCalc ] = useState(0);

//     // useMemo
//     // Мемоизация - сохранение результатов выполнения функций для предотвращения повторных вычислений
//     const memoizedCalc = useMemo(
//     	() => calc(calc1, calc2), // первый атрибут callback
//     	[calc1, calc2]						// второй атрибут массив зависимостей
//     );


//     function calc(a, b) {
//       console.log('Вызвали Calc!');
//       return a + b;
//     }


//   return (
//     <div className="App">

//       <label htmlFor="calc1">Первое слагаемое</label>
//       <input
//         htmlFor="calc1"
//         type="number"
//         value={calc1}
//         onChange={ (e) => setCalc1(parseInt(e.target.value)) }
//       />

//       <br/><br/>

//       <label htmlFor="calc2">Второе слагаемое</label>
//       <input
//         htmlFor="calc2"
//         type="number"
//         value={calc2}
//         onChange={ (e) => setCalc2(parseInt(e.target.value)) }        
//       />

//       <br/><br/>

//       <label htmlFor="result">Результат сложения</label>
//       <input
//         htmlFor="calc2"
//         type="number"
//         value={memoizedCalc}
//         disabled      
//       />

//       <br/><br/>

//       <label htmlFor="noCalc">Просто инкременция</label>
//       <input
//         htmlFor="noCalc"
//         type="number"
//         value={noCalc}
//         onChange={ (e) => setNoCalc(parseInt(e.target.value)) }        
//       />

//     </div>
//   );
// }

// export default App;


// import { useRef } from 'react';

// function App() {


//   // useRef
//   // useRef возвращает изменяемый ref-объект, 
//   // свойство .current которого инициализируется 
//   // переданным аргументом (null)
//   const inputEl = useRef(null);


//   const onButtonClick = () => {
//     // `current` указывает на смонтированный элемент `input`
//     inputEl.current.focus();
//   };


//   return (
//     <>
//       <input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
//     </>
//   );
// }

// export default App;

// Правила хуков
// 1. Используйте хуки только на верхнем уровне
// 2. Вызывайте хуки только из React-функций
