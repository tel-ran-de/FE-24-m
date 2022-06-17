// https://ru.reactjs.org/docs/context.html
// https://ru.reactjs.org/docs/hooks-reference.html#usecontext
// 



// Контекст позволяет нам передать props через дерево компонентов 
// непосредственно без промежуточных передач 
// это удобно для - выбранного язык, UI-тема (светлая/темная)

// function App() {
//   return (
//     <Toolbar theme="dark" />;
//   );
// }

// function Toolbar(props) {
//   // Компонент Toolbar должен передать проп "theme" ниже,
//   // фактически не используя его. Учитывая, что у вас в приложении
//   // могут быть десятки компонентов, использующих UI-тему,
//   // вам придётся передавать проп "theme" через все компоненты.
//   // И в какой-то момент это станет большой проблемой.
//   return (
//     <div>
//       <ThemedButton theme={props.theme} />
//     </div>
//   );
// }


// function ThemedButton(props) {
//   return (
//     <div>
//       <Button theme={props.theme} />;
//     </div>
//   );
// }

// // Это неудобно
// // Поэтому используем контекст


















// import { createContext, useContext } from 'react';


// Контекст позволяет передавать значение глубоко
// в дерево компонентов без явной передачи пропсов
// на каждом уровне. Создадим контекст для текущей
// UI-темы (со значением "light" по умолчанию).



// const ThemeContext = createContext('light');

// function App() {
//   // Компонент Provider используется для передачи текущей
//   // UI-темы вниз по дереву. Любой компонент может использовать
//   // этот контекст и не важно, как глубоко он находится.
//   // В этом примере мы передаём "dark" в качестве значения контекста.
//   return (
//     <ThemeContext.Provider value={'dark'}>
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

// // Компонент, который находится в середине,
// // больше не должен явно передавать тему вниз.
// function Toolbar() {
//   return (
//     <div>
//       <Button />
//     </div>
//   );
// }


// function Button() {
//   // Определяем theme, чтобы получить значение контекста.
//   // React найдёт (выше по дереву) ближайший Provider-компонент,
//   // предоставляющий этот контекст, и использует его значение.
//   // В этом примере значение UI-темы будет "dark".
//   const theme = useContext(ThemeContext);
//   return <button>{theme}</button>;
// }


// export default App;








// // Теперь детально 
// // 1. createContext
// const MyContext = createContext('defaultValue');
// // Создаёт объект Context. 
// // Когда React рендерит компонент, который подписан на этот объект, 
// // React получит текущее значение контекста из ближайшего подходящего Provider выше в дереве компонентов.

// // Аргумент defaultValue используется только в том случае, 
// // если для компонента нет подходящего Provider выше в дереве.



// // 2. Context.Provider
// <MyContext.Provider value={'dark'}/>
// // Каждый объект Context используется вместе с Provider компонентом, 
// // который позволяет дочерним компонентам, использующим этот контекст, 
// // подписаться на его изменения.


// // Все потребители, которые являются потомками Provider, 
// // будут повторно рендериться, как только проп value у Provider изменится.



// // Context.Consumer
// <MyContext.Consumer>
//   {value =>  отрендерить что-то, используя значение контекста }
// </MyContext.Consumer>
// // Consumer — это React-компонент, который подписывается на изменения контекста. 
// // Consumer принимает функцию в качестве дочернего компонента. 
// // Эта функция принимает текущее значение контекста и возвращает React-компонент.





// Перейдем к конкретным примерам
// import { createContext, useContext } from 'react';

// const themes = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee"
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222"
//   }
// };

// const ThemeContext = createContext(themes.light);

// function App() {
//   return (
//     <ThemeContext.Provider value={themes.dark}>
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

// function Toolbar() {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// function ThemedButton() {
//   const theme = useContext(ThemeContext);
//   return (
//     <button style={{ background: theme.background, color: theme.foreground }}>
//       Я стилизован темой из контекста!
//     </button>
//   );
// }



// export default App;












