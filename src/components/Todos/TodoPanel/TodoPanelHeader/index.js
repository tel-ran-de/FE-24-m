import style from './index.module.css'

import TodoImportant from '../../TodosContainer/TodoList/TodoBox/TodoImportant'


function TodoPanelHeader({
  title,
  setTitle,
  important,
  setImportant,
  completed,
  setCompleted,
}){

  return (
    <div className={style.todoPanelHeader}>
      <input 
        type='checkbox' 
        value={completed} 
        checked={completed} 
        onChange={(e)=>setCompleted(!completed)} 
      />

      <input 
        type='text'  
        value={title} 
        onChange={(e)=>setTitle(e.target.value)} 

      />

      <TodoImportant isImportant={important} setIsImportant={setImportant} />

    </div>
  )
}

export default TodoPanelHeader;