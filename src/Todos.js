// https://todomvc.com/examples/react/#/
// создать module.css для Todos и использовать его
import { useState, useEffect } from 'react';
import style from './todos.module.css'

import TodoInput from './todoComponents/todoInput'
import TodoList from './todoComponents/todoList'

function Todos() {
  // STATES
  const [inputValue, setInputValue] = useState('default string');
  const [todoList, setTodoList] = useState([]);
  const [toggleAll, setToggleAll] = useState(false);


  useEffect(
    function completedAll() {
      todoList.forEach((todo, index) => {
        todoList[index].completed = toggleAll;
      })
      setTodoList([...todoList]);
    },
    [toggleAll]
  )





  function addTodo(e) {
    if (e.key === 'Enter') {
      todoList.push({
        id: Date.now(),
        title: inputValue,
        completed: false,
      });
      setTodoList([...todoList]);
    }
  }



  return (
    <div className={style.todos}>
      <h1>Todos</h1>
      <TodoInput 
        addTodo={addTodo}
        setInputValue={setInputValue}
        inputValue={inputValue}
        toggleAll={toggleAll}
        setToggleAll={setToggleAll}
      />

      <TodoList todoList={todoList} setTodoList={setTodoList}/>


    </div>
  );
}

export default Todos;


// Сделать количество активных (completed: false) items "2 items left"
// Для этого сделать отдельный компонент statusList
// сделать кнопку clear completed 


