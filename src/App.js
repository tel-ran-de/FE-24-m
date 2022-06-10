// https://ru.reactjs.org/docs/hooks-effect.html
// https://ru.reactjs.org/docs/hooks-rules.html
// https://todomvc.com/examples/react/#/

// Синтаксис
// useEffect(
//   () => {
//     // Side Effect

//     return () => {
//       // Side Effect Cleanup
//     }
//   },
//   [props, state]
// );


import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // useEffect представляет собой совокупность методов 
  // componentDidMount, componentDidUpdate, и ещё одного, который мы рассмотрим позже.

  useEffect(() => { // Сделай что-то после рендера
    console.log(`Вы нажали ${count2} раз`);
  },
  [count2]); // на изменение чего реагировать?

  useEffect(() => { // Сделай что-то после рендера
    console.log(`Вы нажали ${count} раз`);
  },
  [count]); // на изменение чего реагировать?

  useEffect(() => { // Сделай что-то после рендера
    document.title = `Counter page`;
  },
  []); // на изменение чего реагировать?

  return (
    <div>
      <p>1) Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>


      <p>2) Вы нажали {count2} раз</p>
      <button onClick={() => setCount2(count2 + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}

// Тот же пример в классе
// class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   componentDidMount() {
//     document.title = `Вы нажали ${this.state.count} раз`;
//   }
//   componentDidUpdate() {
//     document.title = `Вы нажали ${this.state.count} раз`;
//   }

//   render() {
//     return (
//       <div>
//         <p>Вы нажали {this.state.count} раз</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Нажми на меня
//         </button>
//       </div>
//     );
//   }
// }


// Синтаксис обращения к componentWillUnmount
// useEffect(() => {
//   const subscription = props.source.subscribe();
//   return () => {
//     // Очистить подписку
//     subscription.unsubscribe();
//   };
// });


// function FriendStatus(props) {
//   const [isOnline, setIsOnline] = useState(null);
//   useEffect(() => {
//     function handleStatusChange(status) {
//       setIsOnline(status.isOnline);
//     }
//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

//     // componentWillUnmount
//     // Указываем, как сбросить этот эффект:
//     return function cleanup() { // механизм сброса эффектов - return функцию
//       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     };
//   });
//   if (isOnline === null) {
//     return 'Загрузка...';
//   }
//   return isOnline ? 'В сети' : 'Не в сети';
// }



// Тоже в классе
// class FriendStatus extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isOnline: null };
//     this.handleStatusChange = this.handleStatusChange.bind(this);
//   }

//   componentDidMount() {
//     ChatAPI.subscribeToFriendStatus(
//       this.props.friend.id,
//       this.handleStatusChange
//     );
//   }
//   componentWillUnmount() {
//     ChatAPI.unsubscribeFromFriendStatus(
//       this.props.friend.id,
//       this.handleStatusChange
//     );
//   }
//   handleStatusChange(status) {
//     this.setState({
//       isOnline: status.isOnline
//     });
//   }

//   render() {
//     if (this.state.isOnline === null) {
//       return 'Загрузка...';
//     }
//     return this.state.isOnline ? 'В сети' : 'Не в сети';
//   }
// }

export default App;

