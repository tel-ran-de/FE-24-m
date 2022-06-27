import style from './index.module.css'

import TodoPanelHeader from './TodoPanelHeader'
import TodoPanelDate from './TodoPanelDate'
import TodoPanelNote from './TodoPanelNote'
import TodoPanelDelete from './TodoPanelDelete'

function TodoPanel({showPanelTodo, setShowPanelTodo, setSelectedTodo, selectedTodo}){

	const { title, important, completed, date, id, note } = selectedTodo;



  return (
    <section className={`${style.todoPanel} ${showPanelTodo ? style.isShown : ''}`}>
      <TodoPanelHeader
      	title={title}
      	important={important}
      	completed={completed}
      />
      <TodoPanelDate />
      <TodoPanelNote />
      <TodoPanelDelete />
    </section>  
  )
}





export default TodoPanel;