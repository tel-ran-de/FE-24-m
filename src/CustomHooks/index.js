// https://ru.reactjs.org/docs/hooks-custom.html

// Что такое кастомные хуки?
// Это обычные функции, которые мы выносим из компонента,
// для повторного использования в разных местах
// или чтобы скрыть сложную логику за простым интерфейсом

// Кастомные хуки это особое "дизайн" соглашение
// Определенным образом называть эти вынесенные функции
// через "use" и определенным образом использовать их.

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// import { useFetch } from "./hooks.js";


// const Home = () => {
// 	const [data] = useFetch(`https://jsonplaceholder.typicode.com/todos`);

//  //  const [data, setData] = useState(null);

//  //  useEffect(() => {
//  //    fetch(`https://jsonplaceholder.typicode.com/todos`)
//  //      .then((res) => res.json())
//  //      .then((data) => setData(data));
//  // }, []);



//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };

// export default Home;




import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import { useInput } from "./hooks.js";


const Home = () => {
	const [firstName, bindFirstName, resetFirstName] = useInput('Alex');
	const [lastName, bindLastName, resetLastName] = useInput('Workerks')

  return (
    <>
    	<label htmlFor="firstName"></label>
    	<input type="text" name="nameForm" id="firstName" {...bindFirstName} />



    	<label htmlFor="lastName"></label>
    	<input type="text" name="nameForm" id="lastName" {...bindLastName} />
    </>
  );
};

export default Home;