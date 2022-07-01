import style from './index.module.css'
import {useShowDate} from '../../../../helpers'

function TodoPanelDelete({
  createTodoDate,
  setShowPanelTodo, 
  selectedList,
  lists,
  selectedTodo,
  setLists,
}){

  function deleteTodo(){
    setLists(
      lists,
      selectedList,
      selectedTodo,
      {
        deleteTodo: true,
      }
    )
    setShowPanelTodo(false);
  }

  //console.log(createTodoDate);

  return (
    <div className={style.todoPanelDeleteWrapper}>
      <span 
        className={style.todoPanelArrow}
        onClick={() => setShowPanelTodo(false)}
      ></span>
      <p>Created {useShowDate(createTodoDate)}</p>
      <span 
        className={style.todoPanelDelete}
        onClick={() => {deleteTodo()}}
        ></span>
    </div>
  )
}

export default TodoPanelDelete;