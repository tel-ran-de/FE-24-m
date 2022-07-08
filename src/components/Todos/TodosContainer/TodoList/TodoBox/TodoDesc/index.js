import style from './index.module.css'
import {useShowDate} from '../../../../../../helpers'
import { useSelector } from 'react-redux';

function TodoDesc({todoId}) {

  const selectedListId = useSelector(
    state => state.lists.content.find( list => list.selected ).id
  )

  const todo = useSelector(
	  state => 
	    state.lists
	      .content.find( list =>  list.id === selectedListId)
	      .todos.find( todoItem => todoId === todoItem.id)
  )

	return (
    <div className={style.todoDescr}>
      <h2>{todo.title}</h2>
      <p>{todo.note} - {useShowDate(todo.date)}</p>
    </div>
	)
}
export default TodoDesc;