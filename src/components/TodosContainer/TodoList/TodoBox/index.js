import {useEffect, useState} from 'react';
import style from './index.module.css';
import TodoImportant from './TodoImportant';
import TodoCompleted from './TodoCompleted';

function TodoBox({todo, lists, setLists, selectedList}) {
  const id = todo.id;

  const [isImportant, setIsImportant] = useState(todo.important);
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  useEffect(
    function updateTodo(){
      const listUpdate = [];
      lists.forEach(list => {
        if(list.id === selectedList.id){
          list.todos.forEach(todo => {
            if(todo.id === id){
              todo.completed = isCompleted;
              todo.important = isImportant;
            }
          })
        }
        listUpdate.push(list);
      })
      setLists(listUpdate);
      console.log(listUpdate);
    }, [isImportant, isCompleted]
  )


  return (
    <li className={style.todoItem}>
      <TodoCompleted
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
      />
      <div className={style.todoDescr}>
        <h2>{todo.title}</h2>
        <p>{todo.note} - {todo.date}</p>
      </div>
      <TodoImportant 
        isImportant={isImportant}
        setIsImportant={setIsImportant}
      />
    </li>
  )
}

export default TodoBox;