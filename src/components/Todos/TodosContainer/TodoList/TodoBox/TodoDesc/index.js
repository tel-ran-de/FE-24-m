import style from './index.module.css'
import {useShowDate} from '../../../../../../helpers'

function TodoDesc({todo}) {
	return (
    <div className={style.todoDescr}>
      <h2>{todo.title}</h2>
      <p>{todo.note} - {useShowDate(todo.date)}</p>
    </div>
	)
}
export default TodoDesc;