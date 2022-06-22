import { useEffect, useState } from 'react';

import style from './index.module.css';

import { updateLists } from '../../../../helpers';

import TodoImportant from './TodoImportant';
import TodoCompleted from './TodoCompleted';
import TodoDesc from './TodoDesc';

function TodoBox({todo, lists, setLists, selectedList}) {
  const id = todo.id;

  const [isImportant, setIsImportant] = useState(todo.important);
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  useEffect(
    function updateTodo(){
      const listsUpdate = updateLists(lists, selectedList, id,
        {
          changeTodoCompleted: isCompleted,
          changeTodoImportant: isImportant, 
        },
      )
      setLists(listsUpdate);
    }, [isImportant, isCompleted]
  )


  return (
    <li className={style.todoItem}>
      <TodoCompleted
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
      />
      <TodoDesc todo={todo} />
      <TodoImportant 
        isImportant={isImportant}
        setIsImportant={setIsImportant}
      />
    </li>
  )
}

export default TodoBox;