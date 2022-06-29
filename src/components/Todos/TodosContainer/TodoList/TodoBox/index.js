import { useEffect, useState,useMemo } from 'react';

import { useCheckboxInput } from '../../../../../helpers';

import style from './index.module.css';

import TodoImportant from './TodoImportant';
import TodoCompleted from './TodoCompleted';
import TodoDesc from './TodoDesc';

function TodoBox({
  todo, 
  lists, 
  setLists, 
  selectedList, 
  setShowPanelTodo, 
  showPanelTodo,
  setSelectedTodo,
  selectedTodo,
}) {
  const id = todo.id;

  const [isImportant, setIsImportant] = useState(todo.important);
  const [isCompleted, setIsCompleted, bindCompleted] = useCheckboxInput(todo.completed);

  useEffect(
    function updateTodo(){
      setLists(lists, selectedList, id,
        {
          changeTodoCompleted: isCompleted,
          changeTodoImportant: isImportant, 
        },
      )
    }, [isImportant, isCompleted]
  )

  function editTodo(todo) {
    setSelectedTodo(todo.id);

    if (selectedTodo === todo.id) {
      setShowPanelTodo(!showPanelTodo);
    } else {
      setShowPanelTodo(true);
    }
  }


  return (
    <li className={style.todoItem} onClick={(e) => editTodo(todo)}>
      <TodoCompleted
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
        bindCompleted={bindCompleted}
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