import style from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { todoComplete } from '../../../../../../storage/content/actionsCreactor.js';

function TodoCompleted({todoId}) {
  const dispatch = useDispatch();

  const selectedListId = useSelector(
    state => state.lists.content.find( list => list.selected ).id
  )

  const completed = useSelector(
    state => 
      state.lists
        .content.find( list =>  list.id === selectedListId)
        .todos.find( todoItem => todoId === todoItem.id).completed
  )

  return(
    <input 
        type='checkbox'
        onClick = {(e) => e.stopPropagation()}
        onChange= {() => dispatch(todoComplete(selectedListId,todoId))}
        value={completed}
        checked={completed}
      />
  )
}

export default TodoCompleted;
