import style from './index.module.css'

import { useState } from 'react'
import { useTextInput, useCheckboxInput } from '../../../../helpers'

import TodoImportant from '../../TodosContainer/TodoList/TodoBox/TodoImportant'


function TodoPanelHeader({
  title,
  important,
  completed,
}){


  const [isImportant, setIsImportant] = useState(important);
  const [isCompleted, setIsCompleted, bindCompleted] = useCheckboxInput(completed);
  const [titleTodo, setTitleTodo, bindTitleTodo] = useTextInput(title);


  return (
    <div className={style.todoPanelHeader}>
      <input type='checkbox' {...bindCompleted} />
      <input type='text' {...bindTitleTodo} />

      <TodoImportant isImportant={isImportant} setIsImportant={setIsImportant} />

    </div>
  )
}

export default TodoPanelHeader;