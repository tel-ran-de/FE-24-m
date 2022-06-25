import style from './index.module.css'

import TodoPanelHeader from './TodoPanelHeader'
import TodoPanelDate from './TodoPanelDate'
import TodoPanelNote from './TodoPanelNote'
import TodoPanelDelete from './TodoPanelDelete'

function TodoPanel({showPanelTodo, setShowPanelTodo}){

  return (
    <section className={`${style.todoPanel} ${showPanelTodo ? style.isShown : ''}`}>
      <TodoPanelHeader />
      <TodoPanelDate />
      <TodoPanelNote />
      <TodoPanelDelete />
    </section>  
  )
}

export default TodoPanel;